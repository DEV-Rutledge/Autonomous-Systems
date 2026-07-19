---
title: Lead Engine — Claude Context
version: 0.1.0
status: draft
author: Ryan Rutledge
last_updated: 2026-07-18
related:
  - PROJECT_CONTEXT.md
  - docs/BUSINESS_PLAN.md
  - ../../DevelopmentStandards.md
---

# Claude Context

Read [`PROJECT_CONTEXT.md`](PROJECT_CONTEXT.md) first — this file only covers Claude-Code-specific conventions on top of that.

## Current State

Pre-build. Only `docs/BUSINESS_PLAN.md` and `research/MARKET_RESEARCH.md` exist. No code yet. Don't scaffold an application here without checking with Ryan first — the plan's assumptions (pricing, ICP) still need real validation per [`PROJECT_CONTEXT.md § Current Stage`](PROJECT_CONTEXT.md#current-stage).

## Coding Conventions (once build starts)

- Favor clean architecture, typed Python (FastAPI backend), modular services over a monolith where boundaries are clear
- API-first: define the contract in `api/` before building UI against it — see [DevelopmentStandards.md](../../DevelopmentStandards.md#code-conventions)
- AI qualification logic should be a distinct, swappable service — not embedded inline in request handlers — since prompt/model choices will change faster than the rest of the system
- Log architectural decisions to [`DECISIONS.md`](DECISIONS.md) as they're made, not retroactively

## Don't Duplicate

- Don't restate repo-wide standards here — link to [DevelopmentStandards.md](../../DevelopmentStandards.md) and [TechStack.md](../../TechStack.md) instead
- Don't copy prompt text from `Shared/Claude-Prompts/` inline — reference it
