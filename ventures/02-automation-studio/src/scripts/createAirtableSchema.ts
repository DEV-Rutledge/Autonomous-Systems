/**
 * Creates all 7 tables and their non-computed fields in an Airtable base,
 * matching database/AIRTABLE_SCHEMA.md exactly. Idempotent — safe to
 * re-run after a partial failure; it checks what already exists and only
 * creates what's missing.
 *
 * What this script does NOT create — see
 * database/AIRTABLE_SCHEMA.md § Computed Fields (Manual Setup) for why
 * and exactly what to click:
 *   - Rollup field: New Hires § Onboarding Progress %
 *   - Formula field: New Hires § Time To Complete (min)
 *   - Lookup field: New Hires § Role Baseline Time (min) — NEW, not in the
 *     original schema doc's New Hires table; needed so ROI Log can look
 *     up the baseline time through New Hire -> Role Template in one hop
 *   - Lookup/formula fields on ROI Log: Manual Baseline Time (min),
 *     Actual Bot Time (min), Time Saved (min), Estimated $ Saved
 * Formula/rollup/lookup fields are few in number and need visual
 * verification anyway — safer to set them up in the Airtable UI (a couple
 * of minutes) than to risk a silently-wrong formula string computed blind
 * via API.
 *
 * Requires a Personal Access Token with the `schema.bases:write` scope
 * (different from the data read/write scope used by seedAirtable.ts and
 * the orchestrator function) — create a separate PAT for this script if
 * your existing one doesn't have schema-write access, and don't reuse a
 * broad-scope token longer than necessary.
 *
 * Usage:
 *   1. Set AIRTABLE_API_KEY and AIRTABLE_BASE_ID in local.settings.json
 *      (base ID for "Autonomous Systems Rutledgetech" — find it in the
 *      base's API documentation page, starts with "app").
 *   2. npm run create-schema
 *   3. Follow database/AIRTABLE_SCHEMA.md § Computed Fields (Manual Setup)
 *      to add the handful of formula/rollup/lookup fields by hand.
 *   4. npm run seed
 */
import { loadLocalSettings } from "../lib/loadLocalSettings";
loadLocalSettings();

const apiKey = process.env.AIRTABLE_API_KEY;
const baseId = process.env.AIRTABLE_BASE_ID;

if (!apiKey || !baseId) {
  console.error("AIRTABLE_API_KEY and AIRTABLE_BASE_ID must be set before creating the schema.");
  process.exit(1);
}

const META_BASE_URL = `https://api.airtable.com/v0/meta/bases/${baseId}`;

interface FieldSpec {
  name: string;
  type: string;
  options?: Record<string, unknown>;
}

interface TableSpec {
  name: string;
  description?: string;
  fields: FieldSpec[];
}

interface ExistingTable {
  id: string;
  name: string;
  fields: { id: string; name: string }[];
}

async function airtableFetch(path: string, method: string, body?: unknown) {
  const response = await fetch(`${META_BASE_URL}${path}`, {
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

async function getExistingTables(): Promise<Map<string, ExistingTable>> {
  const result = (await airtableFetch("/tables", "GET")) as { tables: ExistingTable[] };
  return new Map(result.tables.map((t) => [t.name, t]));
}

const singleSelect = (choices: string[]) => ({
  choices: choices.map((name) => ({ name })),
});

// Primary field on table creation must be a plain text-like type —
// Airtable's API rejects singleSelect/date as a *primary* field on create
// even though the UI allows reordering fields to make them primary later
// (found the hard way: singleSelect failed with
// INVALID_TABLE_OR_PRIMARY_FIELD_FOR_CREATE). Junction/log tables that
// don't have a natural text primary get a small placeholder text field
// instead, listed first.
const tableSpecs: TableSpec[] = [
  {
    name: "Teams Channels & Groups",
    fields: [
      { name: "Channel/Group Name", type: "singleLineText" },
      { name: "Team", type: "singleLineText" },
      { name: "Type", type: "singleSelect", options: singleSelect(["Channel", "Security Group", "Distribution List"]) },
    ],
  },
  {
    name: "Rooms & Resources",
    fields: [
      { name: "Resource Name", type: "singleLineText" },
      { name: "Type", type: "singleSelect", options: singleSelect(["Desk", "Meeting Room", "Software License", "Equipment"]) },
      { name: "Department", type: "singleSelect", options: singleSelect(["Engineering", "Sales", "Marketing", "Support", "Operations", "Company-Wide"]) },
      { name: "Notes", type: "multilineText" },
    ],
  },
  {
    name: "Checklist Items Library",
    fields: [
      { name: "Item Name", type: "singleLineText" },
      { name: "Category", type: "singleSelect", options: singleSelect(["IT", "Facilities", "HR", "Manager"]) },
      { name: "Owner", type: "singleSelect", options: singleSelect(["Bot-Automated", "IT Staff", "Facilities", "Manager"]) },
      { name: "Standard Manual Time (min)", type: "number", options: { precision: 0 } },
    ],
  },
  {
    name: "Role Templates",
    fields: [
      { name: "Role Name", type: "singleLineText" },
      { name: "Department", type: "singleSelect", options: singleSelect(["Engineering", "Sales", "Marketing", "Support", "Operations"]) },
      { name: "Typical Manual Onboarding Time (min)", type: "number", options: { precision: 0 } },
    ],
  },
  {
    name: "New Hires",
    fields: [
      { name: "Full Name", type: "singleLineText" },
      { name: "Email", type: "email" },
      { name: "Start Date", type: "date", options: { dateFormat: { name: "iso" } } },
      { name: "Department", type: "singleSelect", options: singleSelect(["Engineering", "Sales", "Marketing", "Support", "Operations"]) },
      { name: "Manager Name", type: "singleLineText" },
      { name: "Manager Email", type: "email" },
      { name: "Status", type: "singleSelect", options: singleSelect(["Not Started", "In Progress", "Complete"]) },
      {
        name: "Bot Started At",
        type: "dateTime",
        options: { dateFormat: { name: "iso" }, timeFormat: { name: "24hour" }, timeZone: "utc" },
      },
      {
        name: "Bot Completed At",
        type: "dateTime",
        options: { dateFormat: { name: "iso" }, timeFormat: { name: "24hour" }, timeZone: "utc" },
      },
    ],
  },
  {
    name: "Onboarding Checklist",
    fields: [
      { name: "Instance Label", type: "singleLineText" },
      { name: "Status", type: "singleSelect", options: singleSelect(["Pending", "In Progress", "Complete"]) },
      { name: "Completed By", type: "singleSelect", options: singleSelect(["Bot", "Human"]) },
      {
        name: "Completed At",
        type: "dateTime",
        options: { dateFormat: { name: "iso" }, timeFormat: { name: "24hour" }, timeZone: "utc" },
      },
    ],
  },
  {
    name: "ROI Log",
    fields: [
      { name: "Log Entry", type: "singleLineText" },
      { name: "Date", type: "date", options: { dateFormat: { name: "iso" } } },
      { name: "Notes", type: "multilineText" },
    ],
  },
];

// Phase 2: link fields to add once every table exists, keyed by table
// name -> the link fields it needs.
const linkFieldSpecs: Record<string, { fieldName: string; targetTable: string }[]> = {
  "Role Templates": [
    { fieldName: "Required Teams Channels", targetTable: "Teams Channels & Groups" },
    { fieldName: "Required Resources", targetTable: "Rooms & Resources" },
    { fieldName: "Standard Checklist Items", targetTable: "Checklist Items Library" },
  ],
  "New Hires": [{ fieldName: "Role", targetTable: "Role Templates" }],
  "Onboarding Checklist": [
    { fieldName: "New Hire", targetTable: "New Hires" },
    { fieldName: "Checklist Item", targetTable: "Checklist Items Library" },
  ],
  "ROI Log": [{ fieldName: "New Hire", targetTable: "New Hires" }],
};

async function main() {
  console.log(`Checking existing tables in base ${baseId}...`);
  let existing = await getExistingTables();

  const tableIdsByName = new Map<string, string>();
  for (const [name, table] of existing) {
    tableIdsByName.set(name, table.id);
  }

  for (const spec of tableSpecs) {
    if (existing.has(spec.name)) {
      console.log(`Table "${spec.name}" already exists — skipping creation.`);
      continue;
    }
    console.log(`Creating table "${spec.name}"...`);
    const created = (await airtableFetch("/tables", "POST", spec)) as { id: string };
    tableIdsByName.set(spec.name, created.id);
  }

  console.log("Refreshing table/field list before adding links...");
  existing = await getExistingTables();

  console.log("Adding link fields...");

  for (const [tableName, links] of Object.entries(linkFieldSpecs)) {
    const table = existing.get(tableName);
    const tableId = tableIdsByName.get(tableName);
    const existingFieldNames = new Set((table?.fields ?? []).map((f) => f.name));

    for (const link of links) {
      if (existingFieldNames.has(link.fieldName)) {
        console.log(`  "${tableName}" § "${link.fieldName}" already exists — skipping.`);
        continue;
      }
      const targetTableId = tableIdsByName.get(link.targetTable);
      console.log(`  "${tableName}" -> "${link.fieldName}" -> "${link.targetTable}"`);
      await airtableFetch(`/tables/${tableId}/fields`, "POST", {
        name: link.fieldName,
        type: "multipleRecordLinks",
        options: { linkedTableId: targetTableId },
      });
    }
  }

  console.log("\nSchema creation complete.");
  console.log("Next: database/AIRTABLE_SCHEMA.md § Computed Fields (Manual Setup)");
  console.log("for the handful of formula/rollup/lookup fields to add by hand,");
  console.log("then `npm run seed`.");
}

main().catch((err) => {
  console.error("Schema creation failed:", err);
  process.exit(1);
});
