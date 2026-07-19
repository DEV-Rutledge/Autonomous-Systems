---
title: Onboarding Agent — ROI Dashboard Spec
version: 0.1.0
status: draft
author: Ryan Rutledge
last_updated: 2026-07-18
related:
  - ../architecture/TECHNICAL_ARCHITECTURE.md
  - ../database/AIRTABLE_SCHEMA.md
---

# ROI Dashboard Spec

The web frontend Claude Code builds on top of the Airtable data layer — see [`../architecture/TECHNICAL_ARCHITECTURE.md § Dashboard Tie-In`](../architecture/TECHNICAL_ARCHITECTURE.md#dashboard-tie-in) for why this matters as much as the bot itself: it's what turns "a bot posted some messages" into a boardroom-presentable case.

## Table of Contents

- [Purpose](#purpose)
- [Views](#views)
- [Data Source](#data-source)
- [Tech Stack](#tech-stack)
- [Build Notes](#build-notes)

## Purpose

Give a prospect (during a sales demo) or a client (post-purchase) a live, visual answer to "is this actually saving us time and money" — without needing to open Airtable or Teams directly.

## Views

### 1. Pipeline View (default landing view)

- Table/card list of all `New Hires` records with `Status` = Not Started or In Progress
- Each row: name, role, department, start date, `Onboarding Progress %` (from the schema's rollup field), a visual progress bar
- Sort by start date ascending (most urgent first)

### 2. ROI Summary View

The headline sales artifact:

- **Total hours saved** — sum of `Time Saved (min)` across all `ROI Log` entries, converted to hours
- **Total $ saved** — sum of `Estimated $ Saved` across all `ROI Log` entries
- **Average time per hire: before vs. after** — bar chart comparing average `Manual Baseline Time (min)` vs. average `Actual Bot Time (min)`
- **Trend over time** — if enough ROI Log entries exist, a simple line/bar chart of $ saved per month

### 3. Per-Hire Timeline View

Drill-down from either view above, for one specific `New Hires` record:

- Full checklist (from `Onboarding Checklist` instances linked to this hire) with status and `Completed By` (Bot/Human) per item
- Timestamps: `Bot Started At` → `Bot Completed At`
- The role's baseline time vs. this hire's actual time, side by side

## Data Source

Read-only against the Airtable REST API directly — no separate backend/database needed at this stage. Use the same base/table structure as [`../database/AIRTABLE_SCHEMA.md`](../database/AIRTABLE_SCHEMA.md). Airtable API rate limits (5 requests/second per base) are not a concern at demo scale; revisit only if this becomes a live multi-client production dashboard.

## Tech Stack

React/Next.js, per [`../architecture/TECHNICAL_ARCHITECTURE.md § Tech Stack`](../architecture/TECHNICAL_ARCHITECTURE.md#tech-stack) — shares language/tooling with the rest of the project. A simple charting library (e.g. Recharts) is enough; no need for a heavier BI tool at this stage.

## Build Notes

- No authentication needed for the demo (single Airtable base, no multi-tenant concern yet) — add auth only once this needs to serve real client data
- Keep the Airtable API key server-side (a thin Next.js API route proxying to Airtable, not a client-side fetch with the key exposed in the browser) — this is a real security requirement, not a nice-to-have, since an exposed Airtable PAT would grant read/write access to the whole base
- Not yet built — this spec is the target for whenever dashboard work starts, whether that's a future Claude Code session or Ryan directly
