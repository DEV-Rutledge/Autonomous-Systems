/**
 * Typed wrapper around the Airtable REST API for the onboarding demo base.
 * Table/field names must match `database/AIRTABLE_SCHEMA.md` exactly.
 *
 * Uses raw fetch, not the `airtable` npm package -- that package's bundled
 * TypeScript types don't match its own documented batch-create call shape
 * (`.create([{fields: {...}}, ...])` fails to type-check), which surfaced
 * the first time this got compiled. Matches the pattern already used in
 * scripts/createAirtableSchema.ts and lib/graphClient.ts, so there's one
 * HTTP-call style across the codebase instead of two.
 */
const apiKey = process.env.AIRTABLE_API_KEY;
const baseId = process.env.AIRTABLE_BASE_ID;

if (!apiKey || !baseId) {
  throw new Error(
    "AIRTABLE_API_KEY and AIRTABLE_BASE_ID must be set (see local.settings.json.example)."
  );
}

const DATA_BASE_URL = `https://api.airtable.com/v0/${baseId}`;

export const Tables = {
  NewHires: "New Hires",
  RoleTemplates: "Role Templates",
  TeamsChannels: "Teams Channels & Groups",
  RoomsResources: "Rooms & Resources",
  ChecklistLibrary: "Checklist Items Library",
  OnboardingChecklist: "Onboarding Checklist",
  RoiLog: "ROI Log",
} as const;

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

/** Create up to 10 records at once (Airtable's per-request batch limit). */
async function createRecords(
  tableName: string,
  fieldsList: Record<string, unknown>[]
): Promise<AirtableRecord[]> {
  const created: AirtableRecord[] = [];

  for (let i = 0; i < fieldsList.length; i += 10) {
    const batch = fieldsList.slice(i, i + 10);
    const result = (await airtableRequest(`/${encodeURIComponent(tableName)}`, "POST", {
      records: batch.map((fields) => ({ fields })),
    })) as { records: AirtableRecord[] };
    created.push(...result.records);
  }

  return created;
}

async function getRecord(tableName: string, recordId: string): Promise<AirtableRecord> {
  return (await airtableRequest(
    `/${encodeURIComponent(tableName)}/${recordId}`,
    "GET"
  )) as AirtableRecord;
}

async function updateRecord(
  tableName: string,
  recordId: string,
  fields: Record<string, unknown>
): Promise<void> {
  await airtableRequest(`/${encodeURIComponent(tableName)}/${recordId}`, "PATCH", { fields });
}

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
  const record = await getRecord(Tables.NewHires, recordId);
  const f = record.fields;
  return {
    id: record.id,
    fullName: f["Full Name"] as string,
    email: f["Email"] as string,
    startDate: f["Start Date"] as string,
    department: f["Department"] as string,
    roleId: (f["Role"] as string[])?.[0],
    managerName: f["Manager Name"] as string,
    managerEmail: f["Manager Email"] as string,
    status: f["Status"] as NewHire["status"],
  };
}

/** Look up a Role Template by Airtable record ID, resolving its linked requirements. */
export async function getRoleTemplate(recordId: string): Promise<RoleTemplate> {
  const record = await getRecord(Tables.RoleTemplates, recordId);
  const f = record.fields;
  return {
    id: record.id,
    roleName: f["Role Name"] as string,
    department: f["Department"] as string,
    requiredChannelIds: (f["Required Teams Channels"] as string[]) ?? [],
    requiredResourceIds: (f["Required Resources"] as string[]) ?? [],
    requiredChecklistItemIds: (f["Standard Checklist Items"] as string[]) ?? [],
    typicalManualOnboardingTimeMin: (f["Typical Manual Onboarding Time (min)"] as number) ?? 0,
  };
}

/** Create one Onboarding Checklist instance row per required checklist item. */
export async function createChecklistInstances(
  newHireId: string,
  checklistItemIds: string[]
): Promise<string[]> {
  const records = await createRecords(
    Tables.OnboardingChecklist,
    checklistItemIds.map((itemId) => ({
      "New Hire": [newHireId],
      "Checklist Item": [itemId],
      Status: "Pending",
    }))
  );
  return records.map((r) => r.id);
}

/** Mark a checklist instance complete, tagging who/what completed it. */
export async function completeChecklistItem(
  instanceId: string,
  completedBy: "Bot" | "Human"
): Promise<void> {
  await updateRecord(Tables.OnboardingChecklist, instanceId, {
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
  await updateRecord(Tables.NewHires, recordId, fields);
}

/** Create the ROI Log entry once onboarding completes — this is the sales-pitch artifact. */
export async function createRoiLogEntry(newHireId: string): Promise<void> {
  await createRecords(Tables.RoiLog, [
    {
      Date: new Date().toISOString().slice(0, 10),
      "New Hire": [newHireId],
    },
  ]);
  // "Log Entry" (the primary field) is left blank on purpose — see
  // database/AIRTABLE_SCHEMA.md § Table: ROI Log.
  // Manual Baseline Time / Actual Bot Time / Time Saved / Estimated $ Saved are
  // Airtable lookup/formula fields derived automatically from the linked
  // New Hires and Role Templates records — see database/AIRTABLE_SCHEMA.md.
}
