/**
 * HTTP-triggered orchestrator: given a New Hire record ID, resolves their
 * Role Template, provisions Teams access, creates the checklist, posts the
 * Adaptive Card, and logs ROI. Triggered either by an Airtable Automation
 * webhook (new New Hires record) or by the Teams bot's @mention handler —
 * see architecture/TECHNICAL_ARCHITECTURE.md § Trigger.
 */
import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import {
  getNewHire,
  getRoleTemplate,
  createChecklistInstances,
  updateNewHireProgress,
  createRoiLogEntry,
} from "../lib/airtableClient";
import { assignTeamsChannels, requestResourceAssignment } from "../lib/graphClient";
import { postOnboardingChecklistCard } from "../bot/adaptiveCard";

interface OnboardingRequestBody {
  newHireRecordId: string;
}

export async function onboardingOrchestrator(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  const body = (await request.json()) as OnboardingRequestBody;

  if (!body?.newHireRecordId) {
    return { status: 400, jsonBody: { error: "newHireRecordId is required" } };
  }

  const { newHireRecordId } = body;
  context.log(`Starting onboarding orchestration for ${newHireRecordId}`);

  await updateNewHireProgress(newHireRecordId, {
    Status: "In Progress",
    "Bot Started At": new Date().toISOString(),
  });

  const newHire = await getNewHire(newHireRecordId);
  const role = await getRoleTemplate(newHire.roleId);

  context.log(`Resolved role "${role.roleName}" — provisioning access and checklist`);

  // These two run independently; a failure in one shouldn't block the other.
  const [channelResult, resourceResult] = await Promise.allSettled([
    assignTeamsChannels(newHire, role.requiredChannelIds, context),
    requestResourceAssignment(newHire, role.requiredResourceIds, context),
  ]);

  if (channelResult.status === "rejected") {
    context.error(`Teams channel assignment failed: ${channelResult.reason}`);
  }
  if (resourceResult.status === "rejected") {
    context.error(`Resource assignment request failed: ${resourceResult.reason}`);
  }

  const checklistInstanceIds = await createChecklistInstances(
    newHireRecordId,
    role.requiredChecklistItemIds
  );

  await postOnboardingChecklistCard(newHire, role, checklistInstanceIds, context);

  await updateNewHireProgress(newHireRecordId, {
    Status: "Complete",
    "Bot Completed At": new Date().toISOString(),
    ...(channelResult.status === "fulfilled" && {
      "Teams Groups Assigned": channelResult.value,
    }),
  });

  await createRoiLogEntry(newHireRecordId);

  context.log(`Onboarding orchestration complete for ${newHire.fullName}`);

  return {
    status: 200,
    jsonBody: {
      newHire: newHire.fullName,
      role: role.roleName,
      channelsAssigned: channelResult.status === "fulfilled" ? channelResult.value.length : 0,
      checklistItemsCreated: checklistInstanceIds.length,
    },
  };
}

app.http("onboardingOrchestrator", {
  methods: ["POST"],
  authLevel: "function",
  handler: onboardingOrchestrator,
});
