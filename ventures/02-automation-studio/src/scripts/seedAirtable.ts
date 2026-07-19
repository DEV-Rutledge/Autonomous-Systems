/**
 * Seeds a fresh Airtable base with the sample data in
 * database/seed-data/*.json, creating records in dependency order and
 * wiring up linked-record fields (which a plain CSV import can't do).
 *
 * Uses raw fetch against the Airtable Data API directly, not the
 * `airtable` npm package -- see lib/airtableClient.ts's doc comment for
 * why (its bundled types don't match its own documented batch-create
 * call shape).
 *
 * Usage:
 *   1. Run the schema first: npm run create-schema, then add the manual
 *      computed fields per database/AIRTABLE_SCHEMA.md.
 *   2. Copy local.settings.json.example -> local.settings.json and fill in
 *      AIRTABLE_API_KEY / AIRTABLE_BASE_ID.
 *   3. Run: npm run seed
 *
 * Idempotency: this script does NOT check for existing records — running
 * it twice against the same base will duplicate everything. Clear the
 * base first if re-seeding.
 */
import { loadLocalSettings } from "../lib/loadLocalSettings";
loadLocalSettings();

import * as fs from "fs";
import * as path from "path";

const apiKey = process.env.AIRTABLE_API_KEY;
const baseId = process.env.AIRTABLE_BASE_ID;

if (!apiKey || !baseId) {
  console.error("AIRTABLE_API_KEY and AIRTABLE_BASE_ID must be set before seeding.");
  process.exit(1);
}

const DATA_BASE_URL = `https://api.airtable.com/v0/${baseId}`;
const seedDataDir = path.join(__dirname, "../../database/seed-data");

interface AirtableRecord {
  id: string;
  fields: Record<string, unknown>;
}

async function airtableRequest(path: string, method: string, body?: unknown): Promise<unknown> {
  const response = await fetch(`${DATA_BASE_URL}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    throw new Error(`${method} ${path} failed: ${response.status} ${await response.text()}`);
  }

  return response.json();
}

function loadSeedFile<T>(filename: string): T {
  const filePath = path.join(seedDataDir, filename);
  return JSON.parse(fs.readFileSync(filePath, "utf-8")) as T;
}

async function seedLookupTable(
  tableName: string,
  records: Record<string, unknown>[],
  primaryFieldSource: string
): Promise<Map<string, string>> {
  const nameToId = new Map<string, string>();
  console.log(`Seeding ${records.length} record(s) into "${tableName}"...`);

  // Airtable's create API accepts up to 10 records per call.
  for (let i = 0; i < records.length; i += 10) {
    const batch = records.slice(i, i + 10);
    const result = (await airtableRequest(`/${encodeURIComponent(tableName)}`, "POST", {
      records: batch.map((fields) => ({ fields })),
    })) as { records: AirtableRecord[] };

    result.records.forEach((record, idx) => {
      const key = batch[idx][primaryFieldSource] as string;
      nameToId.set(key, record.id);
    });
  }

  return nameToId;
}

async function main() {
  // 1. Lookup tables first, with no dependencies on anything else.
  const channelsRaw = loadSeedFile<
    { channelName: string; team: string; type: string }[]
  >("teams-channels.json");
  const channelIds = await seedLookupTable(
    "Teams Channels & Groups",
    channelsRaw.map((c) => ({
      "Channel/Group Name": c.channelName,
      Team: c.team,
      Type: c.type,
    })),
    "Channel/Group Name"
  );

  const resourcesRaw = loadSeedFile<
    { resourceName: string; type: string; department: string; notes: string }[]
  >("rooms-resources.json");
  const resourceIds = await seedLookupTable(
    "Rooms & Resources",
    resourcesRaw.map((r) => ({
      "Resource Name": r.resourceName,
      Type: r.type,
      Department: r.department,
      Notes: r.notes,
    })),
    "Resource Name"
  );

  const checklistRaw = loadSeedFile<
    { itemName: string; category: string; owner: string; standardManualTimeMin: number }[]
  >("checklist-library.json");
  const checklistIds = await seedLookupTable(
    "Checklist Items Library",
    checklistRaw.map((c) => ({
      "Item Name": c.itemName,
      Category: c.category,
      Owner: c.owner,
      "Standard Manual Time (min)": c.standardManualTimeMin,
    })),
    "Item Name"
  );

  // 2. Role Templates, linking to the lookup tables above.
  interface RoleTemplateSeed {
    roleName: string;
    department: string;
    requiredChannels: string[];
    requiredResources: string[];
    requiredChecklistItems: string[];
    typicalManualOnboardingTimeMin: number;
  }
  const rolesRaw = loadSeedFile<RoleTemplateSeed[]>("role-templates.json");
  const roleIds = await seedLookupTable(
    "Role Templates",
    rolesRaw.map((r) => ({
      "Role Name": r.roleName,
      Department: r.department,
      "Required Teams Channels": r.requiredChannels.map((name) => channelIds.get(name)),
      "Required Resources": r.requiredResources.map((name) => resourceIds.get(name)),
      "Standard Checklist Items": r.requiredChecklistItems.map((name) => checklistIds.get(name)),
      "Typical Manual Onboarding Time (min)": r.typicalManualOnboardingTimeMin,
    })),
    "Role Name"
  );

  // 3. New Hires, linking to Role Templates.
  interface NewHireSeed {
    fullName: string;
    email: string;
    startDate: string;
    department: string;
    role: string;
    managerName: string;
    managerEmail: string;
    status: string;
    botStartedAt: string | null;
    botCompletedAt: string | null;
  }
  const hiresRaw = loadSeedFile<NewHireSeed[]>("new-hires.json");
  await seedLookupTable(
    "New Hires",
    hiresRaw.map((h) => ({
      "Full Name": h.fullName,
      Email: h.email,
      "Start Date": h.startDate,
      Department: h.department,
      Role: [roleIds.get(h.role)],
      "Manager Name": h.managerName,
      "Manager Email": h.managerEmail,
      Status: h.status,
      ...(h.botStartedAt && { "Bot Started At": h.botStartedAt }),
      ...(h.botCompletedAt && { "Bot Completed At": h.botCompletedAt }),
    })),
    "Full Name"
  );

  console.log("Seed complete. Note: ROI Log entries are not auto-created here —");
  console.log("run the onboarding orchestrator against a seeded 'In Progress' or");
  console.log("'Not Started' hire to see the full flow, including ROI Log creation.");
}

main().catch((err) => {
  console.error("Seeding failed:", err);
  process.exit(1);
});
