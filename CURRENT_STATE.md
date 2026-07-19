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

**0.9** (Automation Studio Niche Narrowed to Onboarding) — see [README.md § Versioning](README.md#versioning) for the full milestone table, [CHANGELOG.md](CHANGELOG.md) for what shipped in order, and [DECISIONS.md](DECISIONS.md) for why each one happened.

## Priority Venture

**`ventures/02-automation-studio/`** — promoted 2026-07-18 for fastest realistic path to closing the income gap given real financial urgency. Treat this as the venture to unblock first when work is ambiguous, unless Ryan says otherwise. **Current positioning (sharpened twice, 2026-07-18):** a custom new-hire onboarding/provisioning agent embedded in Microsoft Teams, backed by Airtable — automates the ~30–45 min / 18+ manual steps IT does per hire ($4,000–7,000/hire overhead, quantified). Build decision made: hand-rolled on Teams AI Library + Azure Functions, not Copilot Studio. Engagement model: build-and-train or premium retainer, not commodity maintenance.

## What's Built

- **Root docs:** README, Roadmap, Architecture, DevelopmentStandards, TechStack, DECISIONS, CURRENT_STATE, CHANGELOG, LESSONS_LEARNED — all live and cross-linked.
- **`ventures/00-incubator/`:** the 15-stage validation pipeline, its four working documents, and `Ideas/` — 5 research-backed candidates, one (`automation-reselling`) now scored and promoted; the other 4 remain unscored, available for later.
- **`ventures/01-lead-engine/`:** still in incubator Phase A (pre-build), active but not currently the priority. Has a full `docs/BUSINESS_PLAN.md`; `research/MARKET_RESEARCH.md` not yet at gold-standard depth.
- **`ventures/02-automation-studio/`:** priority venture, positioning sharpened twice. `research/MARKET_RESEARCH.md` now covers the onboarding pain point (quantified), competitive landscape (Rippling/BambooHR/Zluri/Entra ID Governance — none directly compete), engagement model, and a concrete MVP plan (demo onboarding agent, sample data). Still not validated against real discovery calls. No code written yet.

## What's Next

1. Build the MVP: a demo new-hire onboarding agent (Teams + Azure Functions + Airtable, sample data, no client needed) — see `ventures/02-automation-studio/research/MARKET_RESEARCH.md § MVP / Portfolio Piece`.
2. Record a short demo walkthrough once built — doubles as outreach material.
3. Validate the $4,000–7,000/hire pain point and target company size against real conversations, not just secondary research.
4. Start outreach: warm network first, then LinkedIn targeting companies with visible hiring activity (a concrete, targetable signal).
5. Lead Engine and the other 4 unscored incubator ideas remain available — revisit once Automation Studio has real traction or hits a wall.

## How Work Happens Here

Claude Code operates directly on Ryan's instructions — ChatGPT is no longer part of this repo's workflow as of 2026-07-18 (see [DECISIONS.md § ChatGPT excluded from the process](DECISIONS.md#chatgpt-excluded-from-the-process)).
