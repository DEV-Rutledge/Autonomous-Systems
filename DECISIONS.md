---
title: ABOS Decision Log
version: 0.1.0
status: foundation
author: Ryan Rutledge
last_updated: 2026-07-18
related:
  - README.md
  - Architecture.md
  - DevelopmentStandards.md
---

# ABOS Decision Log

Repo-wide architectural and governance decisions. Mirrors the per-venture `DECISIONS.md` pattern (see [Architecture.md § Venture Folder Anatomy](Architecture.md#venture-folder-anatomy)) — one consistent place to log *why*, at whatever level the decision was made, rather than splitting decisions across a separate ADR system.

## Merged root folder structure instead of picking one of ChatGPT's two draft trees

**Date:** 2026-07-18

**Context:** Initial planning surfaced two slightly different root layouts — one with `Marketing/`/`Sales/` at the repo root, one with them nested under `Shared/`.

**Decision:** Merged: `Marketing/` and `Sales/` live at the repo root as the canonical home for cross-venture playbooks; `Shared/` is reserved for reusable *build* assets (prompts, automation scenarios, contracts, templates) rather than strategy docs.

**Why:** avoids the two trees drifting into duplicate homes for the same content.

## Reconciled two different incubator lifecycle descriptions into one 15-stage pipeline

**Date:** 2026-07-18

**Context:** A ChatGPT-drafted incubator batch described a 9-stage lifecycle (Capture Idea → ... → Archive or Expand); the already-written `Architecture.md` described a different 10-stage pre-build validation pipeline. Same underlying process, described at two different altitudes.

**Decision:** Merged into 15 stages across two phases — Phase A (1–11, lives in the incubator, ends in a build/no-build decision) and Phase B (12–15, Build/Launch/Scale/Archive, lives in the promoted venture). See [Architecture.md § Incubator Pipeline](Architecture.md#incubator-pipeline).

**Why:** the two descriptions weren't actually in conflict — one covered pre-build validation, the other covered the full idea-to-scale journey — so merging preserved both instead of picking a winner.

## Renamed Businesses/ to ventures/ with a deep per-venture taxonomy

**Date:** 2026-07-18

**Context:** After reviewing a ChatGPT-drafted venture-docs batch that was far too thin (15 files, 1–9 lines each) to build against, the underlying folder design was reconsidered at the same time: a flat file list per business vs. a structure organized like a real software company's internal docs.

**Decision:** Renamed `Businesses/` → `ventures/` (all-lowercase-kebab-case, the one deliberate break from the repo's PascalCase folder convention) and replaced the flat per-business file list with subfolders (`docs/`, `research/`, `architecture/`, `database/`, `api/`, `automation/`, `prompts/`, `deployment/`, `marketing/`, `sales/`, `finance/`, `legal/`, `tasks/`, `diagrams/`), with only the four agent-context files staying at the venture root. Also dropped four speculative placeholder venture folders (business ideas that had never actually cleared the incubator) in favor of naming ventures only after promotion. See [Architecture.md § Venture Folder Anatomy](Architecture.md#venture-folder-anatomy).

**Why:** a flat file list doesn't scale to the depth a real venture needs, and speculative pre-named placeholders contradict the incubator's own "no build without validation" principle.

## Flagship venture documents use SCREAMING_SNAKE_CASE naming

**Date:** 2026-07-18

**Context:** The existing naming convention only used all-caps for agent-context files (`CLAUDE.md`, `PROJECT_CONTEXT.md`, `DECISIONS.md`); flagship strategy/research docs used PascalCase (`BusinessPlan.md`). ChatGPT proposed extending all-caps to flagship docs too (`MARKET_RESEARCH.md`, `BUSINESS_PLAN.md`).

**Alternatives considered:** keep the PascalCase/all-caps split as originally defined; adopt SCREAMING_SNAKE_CASE for flagship docs only.

**Decision:** Adopted SCREAMING_SNAKE_CASE for flagship venture documents (`MARKET_RESEARCH.md`, `BUSINESS_PLAN.md`, `TECHNICAL_ARCHITECTURE.md`), extending the existing agent-context convention rather than introducing a third naming style. Non-flagship supporting docs within the same folders can stay PascalCase. See [DevelopmentStandards.md § File & Folder Naming](DevelopmentStandards.md#file--folder-naming).

**Why:** the all-caps styling is a useful visual signal — it marks the documents everything else in a venture should cite and build on, distinct from supporting material.

## Decisions get logged in DECISIONS.md, not a separate ADR system

**Date:** 2026-07-18

**Context:** ChatGPT proposed a `documentation/adr/` folder with numbered ADR files (ADR-0001-repository-structure, ADR-0002-naming-conventions, etc.) as a formal architecture-decision-record system.

**Alternatives considered:** adopt the ADR folder as proposed; extend the existing per-venture `DECISIONS.md` pattern to the repo root instead.

**Decision:** Added this root-level `DECISIONS.md` instead of a parallel ADR system.

**Why:** a per-venture `DECISIONS.md` convention already existed and was already working (see `ventures/01-lead-engine/DECISIONS.md`); a separate ADR folder would create two places to check for the same kind of information, which [Architecture.md § Shared vs. Per-Venture](Architecture.md#shared-vs-per-venture) already warns against at the venture level — the same logic applies at the repo-governance level.

## Market research is the first flagship document a venture writes, not the business plan

**Date:** 2026-07-18

**Context:** The first pass at `ventures/01-lead-engine/` wrote `BUSINESS_PLAN.md` first, with research folded in as supporting material. ChatGPT proposed inverting this: research first, as the "gold standard" document everything else cites, so business decisions are built on evidence rather than the business plan being written on assumptions that get backfilled with research.

**Decision:** Adopted a document dependency chain — `research/MARKET_RESEARCH.md` → `docs/BUSINESS_PLAN.md` → `PROJECT_CONTEXT.md` → `architecture/TECHNICAL_ARCHITECTURE.md` → implementation-level specs — where each document cites the ones before it. See [Architecture.md § Document Dependency Chain](Architecture.md#document-dependency-chain).

**Why:** avoids every downstream document being constrained by pricing/market assumptions made before real research existed to check them against.

## Added LESSONS_LEARNED.md and CHANGELOG.md; kept TASKS.md in tasks/ despite a flatter proposal

**Date:** 2026-07-18

**Context:** A follow-up ChatGPT handoff proposed a root-level `LESSONS_LEARNED.md` and required every venture to contain `README.md`, `PROJECT_CONTEXT.md`, `CLAUDE.md`, `GPT.md`, `TASKS.md`, `DECISIONS.md`, `CHANGELOG.md` — implying a flat file set that conflicts with the deep taxonomy adopted a commit earlier (which moved `TASKS.md` into `tasks/`).

**Decision:**
- Added root-level `LESSONS_LEARNED.md` (retrospective/postmortem knowledge — distinct purpose from `DECISIONS.md`'s forward-looking rationale) and root + per-venture `CHANGELOG.md` (chronological log of what shipped — distinct from `CURRENT_STATE.md`'s point-in-time snapshot).
- Added `README.md` to the venture-root file set as a short human-facing index, distinct from `PROJECT_CONTEXT.md`'s longer AI-agent context primer — same role the incubator's own `README.md` already plays.
- Kept `TASKS.md` inside `tasks/` rather than moving it back to the venture root — the deep taxonomy was a deliberate, already-reviewed decision from the previous commit, and "must exist somewhere in the venture" satisfies the underlying need without re-litigating where.

**Why:** each new file earns its place by having a genuinely distinct job, not just because it was proposed — this is the same duplication check applied throughout [Architecture.md § Shared vs. Per-Venture](Architecture.md#shared-vs-per-venture), extended to documentation types themselves.

## Used the existing Incubator structure for a batch of externally-sourced idea candidates, rather than a new ad hoc format

**Date:** 2026-07-18

**Context:** Ryan hit ChatGPT's free-plan deep-research limits and asked Claude Code to independently run an equivalent research process across candidate autonomous side-income ideas (4 from an earlier ChatGPT report, evaluated in parallel with a 5th added here), delivered as "complete outline md files" per option.

**Decision:** Placed these as `ventures/00-incubator/Ideas/<slug>/MarketResearch.md`, using the incubator pipeline that already existed for exactly this purpose, rather than inventing a new file layout. Each file is a single comprehensive outline (business model, architecture, costs, risks, sources) rather than split across the incubator's three separate templates — full checklist/scorecard treatment is deferred until a specific idea is chosen to pursue further, per [`Ideas/README.md`](ventures/00-incubator/Ideas/README.md#recommended-next-step).

**Why:** the incubator was built for exactly this — evaluating multiple ideas with real evidence before committing build time — so reusing it kept the new research consistent with the rest of the repo instead of creating a parallel, one-off comparison document.

## ChatGPT and Claude Code collaborate via structured handoffs relayed by Ryan

**Date:** 2026-07-18

**Context:** Ryan works with both ChatGPT and Claude Code on this repository — ChatGPT for early drafting/research/architecture proposals, Claude Code for verification, reconciliation against the existing repo, and implementation.

**Decision:** Claude Code appends a structured handoff summary at the end of substantive responses, for Ryan to relay back to ChatGPT, so both tools stay in sync on what changed and what's next without Ryan having to reconstruct it from scratch each time.

**Why:** an explicit handoff format is lower-friction than Ryan manually summarizing context for the other tool every time work moves between them.
