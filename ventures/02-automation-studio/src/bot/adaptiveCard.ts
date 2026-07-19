/**
 * Builds and posts the live onboarding checklist Adaptive Card — the main
 * visual artifact for a demo. See architecture/TECHNICAL_ARCHITECTURE.md
 * § Adaptive Card Checklist.
 */
import { InvocationContext } from "@azure/functions";
import type { NewHire, RoleTemplate } from "../lib/airtableClient";

/** Minimal Adaptive Card schema types — enough for this card, not a full SDK wrapper. */
interface AdaptiveCardFact {
  title: string;
  value: string;
}

interface AdaptiveCardChecklistItem {
  label: string;
  completed: boolean;
  ownerTag: string; // "🤖 Bot" or "@Manager Name" etc.
}

export function buildOnboardingChecklistCard(
  newHire: NewHire,
  role: RoleTemplate,
  items: AdaptiveCardChecklistItem[]
) {
  const completedCount = items.filter((i) => i.completed).length;

  const facts: AdaptiveCardFact[] = [
    { title: "New Hire", value: newHire.fullName },
    { title: "Role", value: role.roleName },
    { title: "Department", value: newHire.department },
    { title: "Start Date", value: newHire.startDate },
    { title: "Progress", value: `${completedCount} / ${items.length} complete` },
  ];

  return {
    type: "AdaptiveCard",
    $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
    version: "1.5",
    body: [
      {
        type: "TextBlock",
        text: `Onboarding: ${newHire.fullName}`,
        weight: "Bolder",
        size: "Medium",
      },
      { type: "FactSet", facts },
      {
        type: "Container",
        items: items.map((item) => ({
          type: "TextBlock",
          text: `${item.completed ? "✅" : "⬜"} ${item.label} — ${item.ownerTag}`,
          wrap: true,
        })),
      },
    ],
  };
}

/**
 * Posts the card to the configured onboarding channel. In production this
 * uses the Bot Framework connector to post (and later update via
 * `updateActivity`) a proactive message — stubbed here since it requires a
 * live conversation reference from a registered Teams app.
 */
export async function postOnboardingChecklistCard(
  newHire: NewHire,
  role: RoleTemplate,
  checklistInstanceIds: string[],
  context: InvocationContext
): Promise<void> {
  const card = buildOnboardingChecklistCard(
    newHire,
    role,
    checklistInstanceIds.map((id) => ({
      label: id, // TODO: resolve to the checklist item's display name once posting for real
      completed: false,
      ownerTag: "🤖 Bot",
    }))
  );

  context.log(
    `Adaptive Card built for ${newHire.fullName} (${checklistInstanceIds.length} items) — ` +
      `posting requires a registered Teams app + conversation reference, not yet wired up.`
  );
  context.log(JSON.stringify(card, null, 2));

  // TODO: replace with a real Bot Framework `TurnContext.sendActivity` /
  // `updateActivity` call once the Teams app registration exists — see
  // bot/teamsBot.ts and architecture/TECHNICAL_ARCHITECTURE.md § Trigger.
}
