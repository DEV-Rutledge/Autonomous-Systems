---
title: Onboarding Agent — Source Code
version: 0.1.0
status: draft
author: Ryan Rutledge
last_updated: 2026-07-18
related:
  - ../architecture/TECHNICAL_ARCHITECTURE.md
  - ../database/AIRTABLE_SCHEMA.md
---

# Onboarding Agent — Source Code

Starter scaffold for the new-hire onboarding demo. See [`../architecture/TECHNICAL_ARCHITECTURE.md`](../architecture/TECHNICAL_ARCHITECTURE.md) for how these pieces fit together and [`../database/AIRTABLE_SCHEMA.md`](../database/AIRTABLE_SCHEMA.md) for the data model this code assumes.

## Status

Scaffold, not yet run or tested against live Azure/Airtable/Teams credentials. `graphClient.ts` and `adaptiveCard.ts`'s live-posting path have `TODO`s marking exactly where real Graph/Bot Framework calls replace the current stubbed/logged behavior. Safe to read and extend; not yet safe to assume it works end-to-end without testing.

## Structure

```
src/
├── package.json / tsconfig.json / host.json   # Azure Functions v4 (Node.js) project files
├── local.settings.json.example                 # Copy to local.settings.json, fill in real values, never commit it
├── lib/
│   ├── airtableClient.ts     # Typed Airtable reads/writes for the orchestration flow
│   └── graphClient.ts        # Microsoft Graph calls for Teams channel/group assignment
├── functions/
│   └── onboardingOrchestrator.ts   # The HTTP-triggered orchestrator — the core flow
├── bot/
│   ├── teamsBot.ts           # Teams AI Library @mention handler (skeleton, needs app registration to run live)
│   └── adaptiveCard.ts       # Builds + (eventually) posts the live checklist card
└── scripts/
    └── seedAirtable.ts       # Populates a fresh base from database/seed-data/*.json
```

## Getting It Running Locally

1. **Create the Airtable base** by hand, matching [`../database/AIRTABLE_SCHEMA.md`](../database/AIRTABLE_SCHEMA.md) field-for-field (table/field names are referenced literally in code — typos will break the API calls silently returning `undefined`).
2. **Install dependencies:** `npm install` from this `src/` directory.
3. **Copy `local.settings.json.example` → `local.settings.json`**, fill in a real `AIRTABLE_API_KEY` (personal access token, scoped to just this base) and `AIRTABLE_BASE_ID`. This file is gitignored — never commit it.
4. **Seed the base:** `npm run seed` — populates the 6 sample new hires and their supporting lookup data from [`../database/seed-data/`](../database/seed-data/).
5. **Run the Function locally:** `npm run build && npm start` (requires [Azure Functions Core Tools](https://learn.microsoft.com/en-us/azure/azure-functions/functions-run-local) installed separately).
6. **Test the orchestrator** by POSTing `{ "newHireRecordId": "<a New Hires record ID from the seeded base>" }` to the local function URL — watch it resolve the role, log the (currently stubbed) Teams/resource assignment calls, create checklist instances, and write the ROI Log entry.

## What's Real vs. Stubbed

| Piece | Status |
|---|---|
| Airtable reads/writes (`airtableClient.ts`) | Real — will work against a live base once credentials are set |
| Role Template resolution → checklist creation | Real |
| ROI Log entry creation | Real (the dollar/time math is Airtable formula fields, not app code — see schema) |
| Teams channel assignment (`graphClient.ts`) | Stubbed call shape — needs a real Teams app registration + Graph permissions + a "Graph Channel ID" field added to the Teams Channels table before it can actually assign anyone |
| Resource assignment | Intentionally a Teams notification, not a live booking-system call — see the module comment in `graphClient.ts` |
| Adaptive Card posting | Builds the card correctly, logs it, but doesn't post live — needs a Bot Framework conversation reference from a registered Teams app |
| Teams bot `@mention` handling | Skeleton only — needs `OPENAI_API_KEY` and a real Teams app registration to run |

**For a first demo, the Airtable-webhook-triggered path with console-logged Adaptive Card output is enough to show the orchestration logic working end-to-end without needing a live Teams app registration yet.** Wire up live Teams posting once the demo needs to look and feel real in an actual Teams client, not before.
