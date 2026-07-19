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

## 0.12 — Airtable Schema-Creation Script for the Real Base (2026-07-19)

- Ryan connected the real Airtable base: `Autonomous Systems Rutledgetech`
- Added `src/scripts/createAirtableSchema.ts` — creates all 7 tables and their plain/link fields via Airtable's Meta API, matching `database/AIRTABLE_SCHEMA.md`
- Documented the six rollup/lookup/formula fields the script deliberately doesn't create as an exact manual-setup checklist (they need visual verification anyway) — including a schema fix, a new `Role Baseline Time (min)` lookup on New Hires so ROI Log can reach the baseline in one hop instead of two
- Updated `src/README.md`'s setup flow: create schema → manual computed fields → seed → run

## 0.11 — Automation Studio Restructured as Modular Logistics Platform (2026-07-19)

- Corrected the venture's core framing after Ryan clarified "niche" meant client type, not product type — restructured from "onboarding is the product" to a modular Teams-embedded orchestration platform, with onboarding as module 1 of several, not the whole pitch
- Named logistics/fleet as the primary niche (restaurant, software-development as real but unbuilt future niches), backed by quantified research: fleet downtime $448–1,200+/day/vehicle, ghost assets draining $150–300/day or $8,000–15,000/month per idle truck, 15–25% of mid-large fleet assets under 50% utilization
- Positioned the platform for logistics *back-office* teams specifically, not drivers in vehicles — a real safety finding (Teams isn't suited for in-vehicle communication), not just a market segmentation choice
- Designed module 2 (vehicle/asset issue & status tracking) from Ryan's own description of general concepts — explicitly not derived from his employer-owned fleet-rental codebase, which Claude Code will not reference; logged as a standing IP boundary in `PROJECT_CONTEXT.md`
- Documented the reusable Platform Pattern underlying both modules in `architecture/TECHNICAL_ARCHITECTURE.md`

## 0.10 — Automation Studio MVP Scaffold Built (2026-07-18)

- Added `src/` to the repo-wide venture folder anatomy — `api/`/`automation/` hold specs, nothing existed for real runnable code
- `ventures/02-automation-studio/database/AIRTABLE_SCHEMA.md`: 7-table schema (New Hires, Role Templates, Teams Channels & Groups, Rooms & Resources, Checklist Items Library, Onboarding Checklist, ROI Log) plus realistic seed data for a 5-department fictional company
- `ventures/02-automation-studio/architecture/TECHNICAL_ARCHITECTURE.md`: full agent flow (trigger → role lookup → Teams/resource provisioning → checklist → ROI logging), system diagram, dashboard tie-in
- `ventures/02-automation-studio/docs/DashboardSpec.md`: target spec for the ROI dashboard (pipeline view, ROI summary, per-hire timeline)
- `ventures/02-automation-studio/src/`: real starter code — typed Airtable client, Microsoft Graph client, Adaptive Card builder, HTTP-triggered orchestrator Azure Function, Teams AI Library bot skeleton, and a seeding script that populates a fresh Airtable base from the seed data with linked records intact. Not yet run against live credentials — see `src/README.md § What's Real vs. Stubbed`
- Added `local.settings.json` (Azure Functions' real-secrets file) to `.gitignore` — wasn't previously covered

## 0.9 — Automation Studio Niche Narrowed to Onboarding (2026-07-18)

- Narrowed `ventures/02-automation-studio` from a general Teams-agent-on-Airtable pitch to a specific niche: new-hire onboarding/provisioning automation, after Ryan's stated capabilities (room assignment, employee batching to tenant, org onboarding) pointed there more directly than the marketing-agency framing
- Quantified the pain point ($4,000–7,000/hire in manual overhead, 30–45 min / 18+ manual actions per hire) and mapped the competitive gap against Rippling, BambooHR, Zluri, and Entra ID Governance — none directly compete with a lightweight Teams-native conversational agent
- Locked the build decision: hand-rolled on Teams AI Library + Azure Functions, not Copilot Studio
- Set the engagement model per Ryan's explicit preference: build-and-train or premium retainer, not commodity maintenance work
- Defined a concrete MVP: a demo new-hire onboarding agent built with sample data, no client required to start

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
