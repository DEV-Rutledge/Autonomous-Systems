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

**0.7** (Venture #2 Promoted) — see [README.md § Versioning](README.md#versioning) for the full milestone table, [CHANGELOG.md](CHANGELOG.md) for what shipped in order, and [DECISIONS.md](DECISIONS.md) for why each one happened.

## Priority Venture

**`ventures/02-automation-studio/`** — promoted 2026-07-18 specifically for fastest realistic path to closing the income gap given real financial urgency (see its `PROJECT_CONTEXT.md`). Treat this as the venture to unblock first when work is ambiguous, unless Ryan says otherwise. **Positioning sharpened same day:** custom AI agents embedded in Microsoft Teams acting on real business data (Airtable-first, Ryan's proven strongest skill), not generic automation or plain notification integrations — see its `research/MARKET_RESEARCH.md § The Commoditization Trap` for why that distinction matters.

## What's Built

- **Root docs:** README, Roadmap, Architecture, DevelopmentStandards, TechStack, DECISIONS, CURRENT_STATE, CHANGELOG, LESSONS_LEARNED — all live and cross-linked.
- **`ventures/00-incubator/`:** the 15-stage validation pipeline, its four working documents, and `Ideas/` — 5 research-backed candidates, one (`automation-reselling`) now scored and promoted; the other 4 remain unscored, available for later.
- **`ventures/01-lead-engine/`:** still in incubator Phase A (pre-build), active but not currently the priority. Has a full `docs/BUSINESS_PLAN.md`; `research/MARKET_RESEARCH.md` not yet at gold-standard depth.
- **`ventures/02-automation-studio/`:** priority venture. Root files in place, positioning sharpened once already (Teams AI agents on Airtable data, not generic automation). `research/MARKET_RESEARCH.md` covers commoditization risk, Microsoft's native agent tooling (Teams AI Library, Copilot Studio), and a two-tier pricing landscape ($1–15K connector/consulting tier vs. $75–150K agency AI-agent tier) — still not validated against real discovery calls. Everything else empty.

## What's Next

1. Decide build-vs-buy on the agent layer: hand-rolled Teams AI Library + Azure Functions vs. Microsoft Copilot Studio as a faster foundation — needs a technical spike.
2. Pick the first target industry to approach — marketing/creative agencies are the leading candidate (largest Airtable-user segment) but unvalidated against real conversations.
3. Build a portfolio piece demonstrating the agent (not just connector) capability — no outreach without something concrete to show.
4. Start outreach through the warm-network channel first, given the 10–20 hrs/week constraint.
5. Lead Engine and the other 4 unscored incubator ideas remain available — revisit once Automation Studio has real traction or hits a wall.

## How Work Happens Here

Claude Code operates directly on Ryan's instructions — ChatGPT is no longer part of this repo's workflow as of 2026-07-18 (see [DECISIONS.md § ChatGPT excluded from the process](DECISIONS.md#chatgpt-excluded-from-the-process)).
