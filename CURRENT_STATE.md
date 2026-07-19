---
title: ABOS Current State
version: 0.1.0
status: active
author: Ryan Rutledge
last_updated: 2026-07-19
related:
  - README.md
  - Roadmap.md
  - DECISIONS.md
---

# Current State

Living status doc — update this at the end of any session that changes repo structure, ships a flagship document, or shifts direction. This is the fastest way to get oriented at the start of a new session without reconstructing context from commit history.

## Repo Version

**0.11** (Automation Studio Restructured as Modular Logistics Platform) — see [README.md § Versioning](README.md#versioning) for the full milestone table, [CHANGELOG.md](CHANGELOG.md) for what shipped in order, and [DECISIONS.md](DECISIONS.md) for why each one happened.

## Priority Venture

**`ventures/02-automation-studio/`** — promoted 2026-07-18 for fastest realistic path to closing the income gap given real financial urgency. **Reframed 2026-07-19:** not a single onboarding product — a modular Teams-embedded orchestration platform for logistics/fleet companies' back-office teams (dispatchers, fleet managers, ops, HR, accounting — not drivers in vehicles, a real safety distinction). Two modules: onboarding (MVP scaffold built) and vehicle/asset issue & status tracking (designed, not coded). Restaurant and software-development are named future niches, not built. **Important:** Ryan has prior fleet-rental work that is his employer's IP — nothing in this venture uses or references that codebase; see `ventures/02-automation-studio/PROJECT_CONTEXT.md § IP boundary` before proposing anything that touches his prior fleet work.

## What's Built

- **Root docs:** README, Roadmap, Architecture, DevelopmentStandards, TechStack, DECISIONS, CURRENT_STATE, CHANGELOG, LESSONS_LEARNED — all live and cross-linked.
- **`ventures/00-incubator/`:** the 15-stage validation pipeline, its four working documents, and `Ideas/` — 5 research-backed candidates, one (`automation-reselling`) now scored and promoted; the other 4 remain unscored, available for later.
- **`ventures/01-lead-engine/`:** still in incubator Phase A (pre-build), active but not currently the priority.
- **`ventures/02-automation-studio/`:** priority venture, modular platform. Module 1 (onboarding) has a full MVP scaffold (schema, seed data, real starter code in `src/`) — not yet run against live credentials. Module 2 (vehicle/asset issue tracking) has architecture + concept design but no code yet, no schema file yet. Dashboard spec exists, dashboard itself not built.

## What's Next

1. Write `database/AIRTABLE_SCHEMA.md` additions (or a new file) for module 2's Vehicles/Assets, Issue Reports, and Status History tables.
2. Build module 2's code, reusing module 1's Airtable client / notification patterns per the Platform Pattern.
3. Get real credentials set up (Ryan's own Azure/Microsoft account, separate from his employer) and run both modules against a live Airtable base.
4. Build the ROI dashboard, extended to cover both the onboarding pipeline and the fleet board view.
5. Validate pain points and target fleet size against real conversations, not just secondary research.
6. Start outreach: warm network first (including any contacts from Ryan's recent logistics-team work), then targeted channels.
7. Lead Engine and the other 4 unscored incubator ideas remain available — revisit once Automation Studio has real traction or hits a wall.

## How Work Happens Here

Claude Code operates directly on Ryan's instructions — ChatGPT is no longer part of this repo's workflow as of 2026-07-18 (see [DECISIONS.md § ChatGPT excluded from the process](DECISIONS.md#chatgpt-excluded-from-the-process)).
