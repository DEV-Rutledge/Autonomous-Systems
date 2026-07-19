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

**`ventures/02-automation-studio/`** — promoted 2026-07-18 specifically for fastest realistic path to closing the income gap given real financial urgency (see its `PROJECT_CONTEXT.md`). Treat this as the venture to unblock first when work is ambiguous, unless Ryan says otherwise.

## What's Built

- **Root docs:** README, Roadmap, Architecture, DevelopmentStandards, TechStack, DECISIONS, CURRENT_STATE, CHANGELOG, LESSONS_LEARNED — all live and cross-linked.
- **`ventures/00-incubator/`:** the 15-stage validation pipeline, its four working documents, and `Ideas/` — 5 research-backed candidates, one (`automation-reselling`) now scored and promoted; the other 4 remain unscored, available for later.
- **`ventures/01-lead-engine/`:** still in incubator Phase A (pre-build), active but not currently the priority. Has a full `docs/BUSINESS_PLAN.md`; `research/MARKET_RESEARCH.md` not yet at gold-standard depth.
- **`ventures/02-automation-studio/`:** priority venture, just promoted. Root files in place. `research/MARKET_RESEARCH.md` is a first-draft carryover from the incubator idea — the Microsoft 365/Teams/Azure niche angle is a hypothesis, not yet validated against real discovery calls. Everything else empty.

## What's Next

1. Validate the Microsoft 365/Teams/Azure niche hypothesis in `ventures/02-automation-studio/research/MARKET_RESEARCH.md § Open Questions` — real conversations, not more secondary research.
2. Build a portfolio piece (one real or credible-demo automation) to support outreach — no client acquisition without something to show.
3. Start outreach through the warm-network channel first (fastest per the venture's own research), given the 10–20 hrs/week constraint.
4. Lead Engine and the other 4 unscored incubator ideas remain available — revisit once Automation Studio has real traction or hits a wall.

## How Work Happens Here

ChatGPT drafts research/architecture proposals; Claude Code verifies, reconciles against the existing repo, and implements — see [DECISIONS.md § ChatGPT and Claude Code collaborate via structured handoffs](DECISIONS.md#chatgpt-and-claude-code-collaborate-via-structured-handoffs-relayed-by-ryan). Batches arrive as zip files or pasted proposals from Ryan; nothing gets merged in without a review pass for repo-standards compliance and cross-document consistency first.
