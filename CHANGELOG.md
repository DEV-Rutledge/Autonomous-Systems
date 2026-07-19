---
title: ABOS Changelog
version: 0.1.0
status: active
author: Ryan Rutledge
last_updated: 2026-07-18
related:
  - README.md
  - DECISIONS.md
  - CURRENT_STATE.md
---

# Changelog

Chronological record of what shipped, in order. For *why* something changed, see [DECISIONS.md](DECISIONS.md); for what's true right now, see [CURRENT_STATE.md](CURRENT_STATE.md).

## 0.8 — Automation Studio Positioning Sharpened; ChatGPT Excluded (2026-07-18)

- Sharpened `ventures/02-automation-studio` from generic Microsoft 365/Teams/Azure automation to a specific product: custom AI agents embedded in Teams acting on real business data (Airtable-first), after research showed plain integrations are commoditized (free via Zapier/Make/n8n) but AI-agent builds price at $75K–150K agency-tier
- Added Microsoft's native agent tooling findings (Teams AI Library, Copilot Studio multi-agent framework, Azure Functions repositioned for agents at Build 2026) and target-industry research (marketing agencies are Airtable's largest user segment) to `research/MARKET_RESEARCH.md`
- Excluded ChatGPT from the repo workflow per Ryan's explicit direction — no more structured AI-handoff messages; Claude Code operates directly on his instructions going forward

## 0.7 — Venture #2 (Automation Studio) Promoted (2026-07-18)

- Ran a direct interview with Ryan (time availability, client-facing tolerance, maintenance appetite, gut interest) to select the best-fit idea from the 0.6 batch
- Filled out `IdeaValidationChecklist.md` and `BusinessScorecard.md` for `automation-reselling` (8.0/10, Build) before promoting — documented the decision rather than skipping the process
- Promoted to `ventures/02-automation-studio/`: productized Make.com/n8n/Azure Functions automation builds, Microsoft 365/Teams niche angle, AI-agent work sequenced as a future premium tier rather than a separate venture
- Prioritized ahead of `ventures/01-lead-engine/` reaching build stage, given explicit financial urgency — both remain active

## 0.6 — Incubator Idea Batch: Autonomous Side-Income Options (2026-07-18)

- Added `ventures/00-incubator/Ideas/` with 5 research-backed candidate ideas: `ai-newsletter`, `ai-social-media-service`, `ai-chatbot-service`, `ai-seo-content-agency`, `automation-reselling`
- Independently verified/corrected several unsourced claims from an initial ChatGPT deep-research report (revenue figures, ticket-deflection rates, SEO pricing) against real 2026 sources
- Added `automation-reselling` as a 5th option not in the original set — closest match to "build fully autonomous systems" as the product itself
- Added `Ideas/README.md` with a comparative table and explicit relationship to `ventures/01-lead-engine/`

## 0.5 — Governance & Documentation Standards (2026-07-18)

- Adopted `SCREAMING_SNAKE_CASE` naming for flagship venture documents (`MARKET_RESEARCH.md`, `BUSINESS_PLAN.md`, `TECHNICAL_ARCHITECTURE.md`)
- Renamed `ventures/01-lead-engine/docs/BusinessPlan.md` → `BUSINESS_PLAN.md`, `research/MarketResearch.md` → `MARKET_RESEARCH.md`
- Added root-level `DECISIONS.md`, `CURRENT_STATE.md`, `LESSONS_LEARNED.md`, `CHANGELOG.md`
- Added `README.md` and `CHANGELOG.md` to the required venture-root file set in `Architecture.md`
- Established the flagship-document dependency chain: `MARKET_RESEARCH.md` → `BUSINESS_PLAN.md` → `PROJECT_CONTEXT.md` → `TECHNICAL_ARCHITECTURE.md` → implementation specs

## 0.4 — Venture #1 (Lead Engine) Kickoff (2026-07-18)

- Scaffolded `ventures/01-lead-engine/` with agent-context files (`CLAUDE.md`, `GPT.md`, `PROJECT_CONTEXT.md`, `DECISIONS.md`)
- Wrote first full-pass `docs/BusinessPlan.md`, grounded in real research (competitor pricing, market sizing, SMB/vertical SaaS CAC and churn benchmarks) rather than invented numbers
- Wrote `research/MarketResearch.md` logging sources and open questions
- Rejected an earlier, much thinner ChatGPT-drafted "Batch 3" — documented in `ventures/01-lead-engine/DECISIONS.md`

## 0.3 — Ventures Restructure (2026-07-18)

- Renamed `Businesses/` → `ventures/` repo-wide (`00-Incubator` → `00-incubator`)
- Replaced the flat per-business file list with a deep per-venture taxonomy (`docs/`, `research/`, `architecture/`, `database/`, `api/`, `automation/`, `prompts/`, `deployment/`, `marketing/`, `sales/`, `finance/`, `legal/`, `tasks/`, `diagrams/`)
- Dropped four speculative placeholder venture folders in favor of naming ventures only after they clear the incubator

## 0.2 — Incubator Pipeline Docs (2026-07-18)

- Added `ventures/00-incubator/` (`README.md`, `IdeaValidationChecklist.md`, `MarketResearchTemplate.md`, `BusinessScorecard.md`, `LaunchChecklist.md`)
- Reconciled two different incubator lifecycle descriptions into one 15-stage pipeline (see `DECISIONS.md`)

## 0.1 — Repository Foundation (2026-07-18)

- Initial commit: `README.md`, `Roadmap.md`, `Architecture.md`, `DevelopmentStandards.md`, `TechStack.md`, `.gitignore`
- Established repo mission, financial goals, core philosophy, and repo structure
