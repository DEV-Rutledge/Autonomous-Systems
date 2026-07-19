---
title: Lead Engine — Decision Log
version: 0.1.0
status: draft
author: Ryan Rutledge
last_updated: 2026-07-18
related:
  - PROJECT_CONTEXT.md
  - docs/BUSINESS_PLAN.md
---

# Decision Log

## Rejected the first ChatGPT-drafted BusinessPlan/venture docs (Batch 3) in favor of a research-backed rewrite

**Date:** 2026-07-18

**Context:** Batch 3 delivered 15 venture files, each 1–9 lines of bullet fragments (e.g. pricing given as three numbers with no derivation). This was consistent with the repo's earlier docs in file *count* but far short in depth.

**Alternatives considered:**
- Accept as-is and flesh out later
- Accept and lightly reformat (frontmatter/TOC only, like the incubator docs in Batch 2)

**Decision:** Discard Batch 3 entirely and rewrite from scratch to a much higher bar — 15–40 pages of genuinely researched documentation per major doc, modeled on Stripe/Linear-quality internal docs rather than AI-generated notes. Pricing, market size, and competitor claims must be backed by real research (see [`research/MARKET_RESEARCH.md`](research/MARKET_RESEARCH.md)), not invented numbers.

**Why:** thin scaffolding doesn't give Claude Code enough to implement against without repeatedly stopping to ask design questions that should already be answered — defeats the purpose of documentation-first development.

## Renamed the venture folder taxonomy from a flat file list to deep subfolders

**Date:** 2026-07-18

**Context:** Batch 3 used a flat set of 15 files at the venture root, with naming that didn't match the (at-the-time) minimum anatomy spec in `Architecture.md` (e.g. `TechnicalArchitecture.md` vs. the spec's `Architecture.md`).

**Decision:** Adopted a deep taxonomy instead (`docs/`, `research/`, `architecture/`, `database/`, `api/`, `automation/`, `prompts/`, `deployment/`, `marketing/`, `sales/`, `finance/`, `legal/`, `tasks/`, `diagrams/`), with only the four agent-context files (`CLAUDE.md`, `GPT.md`, `PROJECT_CONTEXT.md`, `DECISIONS.md`) staying at the venture root. See [Architecture.md § Venture Folder Anatomy](../../Architecture.md#venture-folder-anatomy) for the full rationale — applied repo-wide, not just to this venture.

## Pricing tiers are a hypothesis, not a locked decision

**Date:** 2026-07-18

**Context:** `docs/BUSINESS_PLAN.md` derives Starter/Growth/Scale pricing ($149/$349/$799) from competitor anchors and ROI logic, since no real customer discovery calls have happened yet.

**Decision:** Documented explicitly as unvalidated in both `docs/BUSINESS_PLAN.md` and `research/MARKET_RESEARCH.md § Open Questions`, rather than presented as final. Real discovery calls (incubator stage 3) should confirm or revise before this venture is scored at stage 11.
