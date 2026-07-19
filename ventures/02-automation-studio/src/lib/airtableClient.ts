/**
 * Typed wrapper around the Airtable REST API for the onboarding demo base.
 * Table/field names must match `database/AIRTABLE_SCHEMA.md` exactly.
 */
import Airtable from "airtable";

const apiKey = process.env.AIRTABLE_API_KEY;
const baseId = process.env.AIRTABLE_BASE_ID;

if (!apiKey || !baseId) {
  throw new Error(
    "AIRTABLE_API_KEY and AIRTABLE_BASE_ID must be set (see local.settings.json.example)."
  );
}

const base = new Airtable({ apiKey }).base(baseId);

export const Tables = {
  NewHires: "New Hires",
  RoleTemplates: "Role Templates",
  TeamsChannels: "Teams Channels & Groups",
  RoomsResources: "Rooms & Resources",
  ChecklistLibrary: "Checklist Items Library",
  OnboardingChecklist: "Onboarding Checklist",
  RoiLog: "ROI Log",
} as const;

export interface RoleTemplate {
  id: string;
  roleName: string;
  department: string;
  requiredChannelIds: string[];
  requiredResourceIds: string[];
  requiredChecklistItemIds: string[];
  typicalManualOnboardingTimeMin: number;
}

export interface NewHire {
  id: string;
  fullName: string;
  email: string;
  startDate: string;
  department: string;
  roleId: string;
  managerName: string;
  managerEmail: string;
  status: "Not Started" | "In Progress" | "Complete";
}

/** Look up a New Hire record by its Airtable record ID. */
export async function getNewHire(recordId: string): Promise<NewHire> {
  const record = await base(Tables.NewHires).find(recordId);
  return {
    id: record.id,
    fullName: record.get("Full Name") as string,
    email: record.get("Email") as string,
    startDate: record.get("Start Date") as string,
    department: record.get("Department") as string,
    roleId: (record.get("Role") as string[])?.[0],
    managerName: record.get("Manager Name") as string,
    managerEmail: record.get("Manager Email") as string,
    status: record.get("Status") as NewHire["status"],
  };
}

/** Look up a Role Template by Airtable record ID, resolving its linked requirements. */
export async function getRoleTemplate(recordId: string): Promise<RoleTemplate> {
  const record = await base(Tables.RoleTemplates).find(recordId);
  return {
    id: record.id,
    roleName: record.get("Role Name") as string,
    department: record.get("Department") as string,
    requiredChannelIds: (record.get("Required Teams Channels") as string[]) ?? [],
    requiredResourceIds: (record.get("Required Resources") as string[]) ?? [],
    requiredChecklistItemIds: (record.get("Standard Checklist Items") as string[]) ?? [],
    typicalManualOnboardingTimeMin:
      (record.get("Typical Manual Onboarding Time (min)") as number) ?? 0,
  };
}

/** Create one Onboarding Checklist instance row per required checklist item. */
export async function createChecklistInstances(
  newHireId: string,
  checklistItemIds: string[]
): Promise<string[]> {
  const records = await base(Tables.OnboardingChecklist).create(
    checklistItemIds.map((itemId) => ({
      fields: {
        "New Hire": [newHireId],
        "Checklist Item": [itemId],
        Status: "Pending",
      },
    }))
  );
  return records.map((r) => r.id);
}

/** Mark a checklist instance complete, tagging who/what completed it. */
export async function completeChecklistItem(
  instanceId: string,
  completedBy: "Bot" | "Human"
): Promise<void> {
  await base(Tables.OnboardingChecklist).update(instanceId, {
    Status: "Complete",
    "Completed By": completedBy,
    "Completed At": new Date().toISOString(),
  });
}

/** Stamp bot start/completion timestamps and update status on a New Hire record. */
export async function updateNewHireProgress(
  recordId: string,
  fields: Partial<{
    Status: NewHire["status"];
    "Bot Started At": string;
    "Bot Completed At": string;
    "Teams Groups Assigned": string[];
    "Resources Assigned": string[];
  }>
): Promise<void> {
  await base(Tables.NewHires).update(recordId, fields);
}

/** Create the ROI Log entry once onboarding completes — this is the sales-pitch artifact. */
export async function createRoiLogEntry(newHireId: string): Promise<void> {
  await base(Tables.RoiLog).create([
    {
      fields: {
        Date: new Date().toISOString().slice(0, 10),
        "New Hire": [newHireId],
      },
    },
  ]);
  // Manual Baseline Time / Actual Bot Time / Time Saved / Estimated $ Saved are
  // Airtable lookup/formula fields derived automatically from the linked
  // New Hires and Role Templates records — see database/AIRTABLE_SCHEMA.md.
}
