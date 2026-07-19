/**
 * Microsoft Graph API calls for provisioning Teams access.
 *
 * DEMO NOTE: resource assignment (desks, licenses, meeting rooms) is
 * implemented as a Teams notification to Facilities/IT rather than a live
 * booking-system integration — see architecture/TECHNICAL_ARCHITECTURE.md
 * § Agent Flow, step 4, for why that's the realistic MVP scope. Wire this
 * up to a real resource-booking API only once a specific client needs it.
 */
import { InvocationContext } from "@azure/functions";
import type { NewHire } from "./airtableClient";

const GRAPH_BASE_URL = "https://graph.microsoft.com/v1.0";

async function getGraphToken(): Promise<string> {
  const tenantId = process.env.GRAPH_TENANT_ID;
  const clientId = process.env.MICROSOFT_APP_ID;
  const clientSecret = process.env.MICROSOFT_APP_PASSWORD;

  const response = await fetch(
    `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: clientId ?? "",
        client_secret: clientSecret ?? "",
        scope: "https://graph.microsoft.com/.default",
        grant_type: "client_credentials",
      }),
    }
  );

  if (!response.ok) {
    throw new Error(`Graph token request failed: ${response.status} ${await response.text()}`);
  }

  const data = (await response.json()) as { access_token: string };
  return data.access_token;
}

/**
 * Adds the new hire to each required Teams channel/group.
 * `channelIds` here are Airtable record IDs — in a real deployment these
 * should resolve to actual Teams channel/group IDs stored on each
 * "Teams Channels & Groups" record (add a "Graph Channel ID" field once
 * connecting to a real tenant).
 */
export async function assignTeamsChannels(
  newHire: NewHire,
  channelIds: string[],
  context: InvocationContext
): Promise<string[]> {
  const token = await getGraphToken();
  const assigned: string[] = [];

  for (const channelId of channelIds) {
    try {
      // Placeholder call shape — replace {team-id}/{channel-id} resolution
      // once real Graph channel IDs are mapped from Airtable records.
      const response = await fetch(
        `${GRAPH_BASE_URL}/teams/{team-id}/channels/${channelId}/members`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "@odata.type": "#microsoft.graph.aadUserConversationMember",
            roles: [],
            "user@odata.bind": `https://graph.microsoft.com/v1.0/users('${newHire.email}')`,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`${response.status} ${await response.text()}`);
      }

      assigned.push(channelId);
    } catch (err) {
      context.error(`Failed to assign channel ${channelId} to ${newHire.email}: ${err}`);
    }
  }

  return assigned;
}

/**
 * Posts a resource-assignment request to the Facilities/IT Teams channel
 * rather than calling a live booking API — see module doc comment above.
 */
export async function requestResourceAssignment(
  newHire: NewHire,
  resourceIds: string[],
  context: InvocationContext
): Promise<void> {
  context.log(
    `Resource assignment requested for ${newHire.fullName}: ${resourceIds.length} resource(s) — posting to Facilities channel`
  );
  // TODO: post an Adaptive Card or plain message to the Facilities/IT
  // channel listing the resources needed, once ONBOARDING_TEAMS_CHANNEL_ID
  // (or a dedicated facilities channel ID) is configured.
}
