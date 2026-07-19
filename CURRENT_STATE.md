---
title: ABOS Current State
version: 0.1.0
status: active
author: Ryan Rutledge
last_updated: 2026-07-18
related:
  - README.md
  - Roadmap.md
  - DECISIONS.md
---

# Current State

Living status doc — update this at the end of any session that changes repo structure, ships a flagship document, or shifts direction. This is the fastest way for Ryan, Claude Code, or ChatGPT to get oriented at the start of a new session without reconstructing context from commit history.

## Repo Version

**0.10** (Automation Studio MVP Scaffold Built) — see [README.md § Versioning](README.md#versioning) for the full milestone table, [CHANGELOG.md](CHANGELOG.md) for what shipped in order, and [DECISIONS.md](DECISIONS.md) for why each one happened.

## Priority Venture

**`ventures/02-automation-studio/`** — promoted 2026-07-18 for fastest realistic path to closing the income gap given real financial urgency. Treat this as the venture to unblock first when work is ambiguous, unless Ryan says otherwise. Custom new-hire onboarding/provisioning agent embedded in Microsoft Teams, backed by Airtable ($4,000–7,000/hire overhead, quantified). Build: hand-rolled Teams AI Library + Azure Functions. Engagement model: build-and-train or premium retainer, not commodity maintenance. **MVP scaffold now exists** — schema, seed data, architecture doc, dashboard spec, and real starter code (Airtable client, Graph client, orchestrator function, Teams bot skeleton, seed script) — see `ventures/02-automation-studio/src/README.md § What's Real vs. Stubbed` before assuming anything runs live.

## What's Built

- **Root docs:** README, Roadmap, Architecture, DevelopmentStandards, TechStack, DECISIONS, CURRENT_STATE, CHANGELOG, LESSONS_LEARNED — all live and cross-linked.
- **`ventures/00-incubator/`:** the 15-stage validation pipeline, its four working documents, and `Ideas/` — 5 research-backed candidates, one (`automation-reselling`) now scored and promoted; the other 4 remain unscored, available for later.
- **`ventures/01-lead-engine/`:** still in incubator Phase A (pre-build), active but not currently the priority.
- **`ventures/02-automation-studio/`:** priority venture. Full docs (`research/MARKET_RESEARCH.md`, `architecture/TECHNICAL_ARCHITECTURE.md`, `database/AIRTABLE_SCHEMA.md`, `docs/DashboardSpec.md`) plus real starter code in `src/` — not yet run against live Azure/Airtable/Teams credentials, not yet validated against real discovery calls. Dashboard itself not yet built (spec only).

## What's Next

1. Get real credentials set up (Ryan's own Azure/Microsoft account, separate from his employer — his task, not Claude Code's) and actually run the seed script + orchestrator function against a live Airtable base.
2. Wire up the stubbed pieces flagged in `src/README.md § What's Real vs. Stubbed` (Graph API calls, live Adaptive Card posting) as needed for a real demo.
3. Build the ROI dashboard per `docs/DashboardSpec.md`.
4. Record a demo walkthrough — doubles as outreach material.
5. Validate the $4,000–7,000/hire pain point and target company size against real conversations, not just secondary research.
6. Start outreach: warm network first, then LinkedIn targeting companies with visible hiring activity.
7. Lead Engine and the other 4 unscored incubator ideas remain available — revisit once Automation Studio has real traction or hits a wall.

## How Work Happens Here

Claude Code operates directly on Ryan's instructions — ChatGPT is no longer part of this repo's workflow as of 2026-07-18 (see [DECISIONS.md § ChatGPT excluded from the process](DECISIONS.md#chatgpt-excluded-from-the-process)).
