---
title: Onboarding Demo — Airtable Schema
version: 0.2.0
status: draft
author: Ryan Rutledge
last_updated: 2026-07-19
related:
  - ../architecture/TECHNICAL_ARCHITECTURE.md
  - ../research/MARKET_RESEARCH.md
  - seed-data/README.md
---

# Onboarding Demo — Airtable Schema

The demo base backing the onboarding module (module 1) — see [`ventures/02-automation-studio/DECISIONS.md § Build one demo, targeting one niche`](../DECISIONS.md#build-one-demo-targeting-one-niche--not-multiple-airtable-bases-across-business-types) for why this stayed one demo rather than many.

**Live base:** `Autonomous Systems Rutledgetech` (created 2026-07-19). Built via [`../src/scripts/createAirtableSchema.ts`](../src/scripts/createAirtableSchema.ts) — see that script's usage notes and [Computed Fields (Manual Setup)](#computed-fields-manual-setup) below for the handful of fields it doesn't create. When cloning per-prospect for a sales demo later, rename the clone `Onboarding Agent Demo — [Prospect Company Name]` rather than editing this shared base directly.

## Table of Contents

- [Design Principles](#design-principles)
- [Table: New Hires](#table-new-hires)
- [Table: Role Templates](#table-role-templates)
- [Table: Teams Channels & Groups](#table-teams-channels--groups)
- [Table: Rooms & Resources](#table-rooms--resources)
- [Table: Checklist Items Library](#table-checklist-items-library)
- [Table: Onboarding Checklist (Instances)](#table-onboarding-checklist-instances)
- [Table: ROI Log](#table-roi-log)
- [Entity Relationships](#entity-relationships)
- [Computed Fields (Manual Setup)](#computed-fields-manual-setup)

## Design Principles

- **Role Templates drive everything.** Assign a New Hire a Role, and the correct Teams channels, resources, and checklist items should follow automatically — this is what the agent actually automates, and the schema needs to make that lookup trivial.
- **Every table that matters for the pitch has a time/dollar dimension.** The ROI Log table exists specifically to make the before/after comparison undeniable in a live demo, not just asserted in a slide.
- **Keep it demoable, not maximal.** This is enough structure to be a credible mid-size-company onboarding system, not a fully generalized HR platform — resist the urge to add fields nobody will look at in a 15-minute demo.

## Table: New Hires

The core table — one row per person being onboarded.

| Field | Type | Notes |
|---|---|---|
| Full Name | Single line text | Primary field |
| Email | Email | |
| Start Date | Date | |
| Department | Single select | e.g. Engineering, Sales, Marketing, Support |
| Role | Link to Role Templates | Drives auto-assignment |
| Manager Name | Single line text | |
| Manager Email | Email | |
| Status | Single select | Not Started / In Progress / Complete |
| Onboarding Progress % | Rollup | % of linked Onboarding Checklist items marked Complete — **manual setup, see [below](#computed-fields-manual-setup)** |
| Teams Groups Assigned | Link to Teams Channels & Groups | Multiple; populated by the agent, not manually |
| Resources Assigned | Link to Rooms & Resources | Multiple; populated by the agent |
| Bot Started At | Date (with time) | Set when the agent begins processing this hire |
| Bot Completed At | Date (with time) | Set when all automated steps finish |
| Time To Complete (min) | Formula | `DATETIME_DIFF({Bot Completed At}, {Bot Started At}, 'minutes')` — **manual setup, see [below](#computed-fields-manual-setup)** |
| Role Baseline Time (min) | Lookup | From `Role` § `Typical Manual Onboarding Time (min)` — **manual setup**; exists so ROI Log can reach the baseline time in one hop instead of two |

Note: the script creates `Role`, `Teams Groups Assigned`, and `Resources Assigned` as link fields; the three rows above marked "manual setup" are added by hand afterward per [Computed Fields (Manual Setup)](#computed-fields-manual-setup).

## Table: Role Templates

Defines what a given role needs — this is the lookup table the agent queries first.

| Field | Type | Notes |
|---|---|---|
| Role Name | Single line text | Primary field, e.g. "Software Engineer," "Sales Rep" |
| Department | Single select | |
| Required Teams Channels | Link to Teams Channels & Groups | Multiple |
| Required Resources | Link to Rooms & Resources | Multiple |
| Standard Checklist Items | Link to Checklist Items Library | Multiple |
| Typical Manual Onboarding Time (min) | Number | The baseline this role normally takes an admin manually — this is the number the ROI story is built on |

## Table: Teams Channels & Groups

| Field | Type | Notes |
|---|---|---|
| Channel/Group Name | Single line text | Primary field |
| Team | Single line text | Which Teams team this channel belongs to |
| Type | Single select | Channel / Security Group / Distribution List |
| Used By Roles | Link to Role Templates | Reverse link, auto-populated |

## Table: Rooms & Resources

| Field | Type | Notes |
|---|---|---|
| Resource Name | Single line text | Primary field |
| Type | Single select | Desk / Meeting Room / Software License / Equipment |
| Department | Single select | |
| Notes | Long text | Capacity, location, license seat count, etc. |
| Used By Roles | Link to Role Templates | Reverse link, auto-populated |

## Table: Checklist Items Library

Reusable checklist item definitions, referenced per role.

| Field | Type | Notes |
|---|---|---|
| Item Name | Single line text | Primary field, e.g. "Create Exchange mailbox," "Assign parking spot" |
| Category | Single select | IT / Facilities / HR / Manager |
| Owner | Single select | Bot-Automated / IT Staff / Facilities / Manager — what a live demo should highlight: how many items move from a human owner to "Bot-Automated" |
| Standard Manual Time (min) | Number | Baseline time this item takes a human, feeds the ROI Log |

## Table: Onboarding Checklist (Instances)

The junction table — one row per (New Hire × Checklist Item), tracking actual completion.

| Field | Type | Notes |
|---|---|---|
| Instance Label | Single line text | Primary field — placeholder text, left blank; Airtable's API doesn't allow `singleSelect` as a primary field on table creation, so this table needs a plain-text field first |
| New Hire | Link to New Hires | |
| Checklist Item | Link to Checklist Items Library | |
| Status | Single select | Pending / In Progress / Complete |
| Completed By | Single select | Bot / Human |
| Completed At | Date (with time) | |

This is what the live Teams checklist card (see [`architecture/TECHNICAL_ARCHITECTURE.md § Adaptive Card Checklist`](../architecture/TECHNICAL_ARCHITECTURE.md#adaptive-card-checklist)) reads from and writes back to in real time.

## Table: ROI Log

The table that makes the sales pitch concrete — one row per completed onboarding.

| Field | Type | Notes |
|---|---|---|
| Log Entry | Single line text | Primary field — placeholder text, left blank; same API restriction as Onboarding Checklist's `Instance Label` |
| Date | Date | |
| New Hire | Link to New Hires | |
| Manual Baseline Time (min) | Lookup | From `New Hire` § `Role Baseline Time (min)` — **manual setup** |
| Actual Bot Time (min) | Lookup | From `New Hire` § `Time To Complete (min)` — **manual setup** |
| Time Saved (min) | Formula | `{Manual Baseline Time (min)} - {Actual Bot Time (min)}` — **manual setup** |
| Estimated $ Saved | Formula | `({Time Saved (min)} / 60) * 65` — $65/hr blended IT+HR rate, adjustable per prospect's actual loaded labor cost — **manual setup** |
| Notes | Long text | |

## Entity Relationships

```mermaid
erDiagram
    NEW_HIRES }o--|| ROLE_TEMPLATES : "has role"
    NEW_HIRES ||--o{ ONBOARDING_CHECKLIST : "tracked by"
    ROLE_TEMPLATES }o--o{ TEAMS_CHANNELS : "requires"
    ROLE_TEMPLATES }o--o{ ROOMS_RESOURCES : "requires"
    ROLE_TEMPLATES }o--o{ CHECKLIST_LIBRARY : "requires"
    ONBOARDING_CHECKLIST }o--|| CHECKLIST_LIBRARY : "instance of"
    NEW_HIRES ||--o| ROI_LOG : "logged in"
```

## Computed Fields (Manual Setup)

[`../src/scripts/createAirtableSchema.ts`](../src/scripts/createAirtableSchema.ts) creates every table, every plain field, and every link field automatically. It deliberately does **not** create rollup/lookup/formula fields — those are few in number, need visual verification in the Airtable UI anyway, and the API payloads for cross-hop lookups are easy to get subtly wrong with no way to test blind. Add these six fields by hand after running the script, in this order (each depends on the one before it existing):

1. **New Hires → `Role Baseline Time (min)`** — field type **Lookup**, link field `Role`, field to look up `Typical Manual Onboarding Time (min)`.
2. **New Hires → `Time To Complete (min)`** — field type **Formula**: `DATETIME_DIFF({Bot Completed At}, {Bot Started At}, 'minutes')`.
3. **New Hires → `Onboarding Progress %`** — field type **Rollup**, link field `Onboarding Checklist` *(note: this reverse link field is auto-created on New Hires once you add the "New Hire" link field on Onboarding Checklist in the script's link-field phase — it'll already exist by the time you get here, just look for it)*, field to roll up `Status`, aggregation `PERCENT` where `Status = "Complete"` (Airtable's rollup formula field: use `COUNTA(values)` style — simplest working version: rollup field on `Status`, formula `COUNTIF(values, "Complete") / COUNTA(values)`, format as percent.
4. **ROI Log → `Manual Baseline Time (min)`** — field type **Lookup**, link field `New Hire`, field to look up `Role Baseline Time (min)` (the field from step 1).
5. **ROI Log → `Actual Bot Time (min)`** — field type **Lookup**, link field `New Hire`, field to look up `Time To Complete (min)` (the field from step 2).
6. **ROI Log → `Time Saved (min)`** then **`Estimated $ Saved`** — both **Formula** fields, per the formulas in the [ROI Log table](#table-roi-log) above.

After these six, spot-check one New Hires record end to end (Role → Role Baseline Time → visible; Bot Started/Completed At filled in → Time To Complete computes) before running the seed script against the full base.
