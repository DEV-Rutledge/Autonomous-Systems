---
title: Seed Data — Onboarding Demo
version: 0.1.0
status: draft
author: Ryan Rutledge
last_updated: 2026-07-18
related:
  - ../AIRTABLE_SCHEMA.md
  - ../../src/scripts/seedAirtable.ts
---

# Seed Data

Sample data for a fictional 5-department company (Engineering, Sales, Marketing, Support, Operations), matching the schema in [`../AIRTABLE_SCHEMA.md`](../AIRTABLE_SCHEMA.md).

## Files

| File | Table |
|---|---|
| `role-templates.json` | Role Templates |
| `teams-channels.json` | Teams Channels & Groups |
| `rooms-resources.json` | Rooms & Resources |
| `checklist-library.json` | Checklist Items Library |
| `new-hires.json` | New Hires |

## Why JSON, not CSV

Airtable's CSV import doesn't preserve linked-record relationships (e.g. a Role Template's list of required Teams channels) — every link would need to be manually rebuilt after import. These files are instead consumed by [`../../src/scripts/seedAirtable.ts`](../../src/scripts/seedAirtable.ts), which creates records via the Airtable REST API in dependency order (lookup tables first, then Role Templates that link to them, then New Hires) and wires up the links programmatically. See that script's own comments for usage.

## Demo Story

The 6 seeded New Hires deliberately span a realistic pipeline for a live demo:

- **2 Complete** (Jordan Reyes, Alicia Chen) — show a finished onboarding with a full ROI Log entry (baseline vs. actual time)
- **1 Complete** (Devon Marshall) — a third completed example in a different department, for variety
- **2 In Progress** (Sam Okafor, Taylor Kim) — show the live checklist mid-flight, useful for demonstrating the Adaptive Card update behavior
- **1 Not Started** (Morgan Ellis) — shows what a freshly-created record looks like before the agent picks it up, useful for triggering the flow live during a demo
