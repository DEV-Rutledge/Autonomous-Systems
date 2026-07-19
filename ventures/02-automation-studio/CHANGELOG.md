---
title: Automation Studio — Changelog
version: 0.1.0
status: draft
author: Ryan Rutledge
last_updated: 2026-07-18
related:
  - README.md
  - DECISIONS.md
---

# Changelog

## 2026-07-18

- Promoted from `ventures/00-incubator/Ideas/automation-reselling/` after scoring 8.0/10 and converging cleanly in a direct interview with Ryan on time, risk, and interest — see `DECISIONS.md`
- Scaffolded venture: `README.md`, `CLAUDE.md`, `GPT.md`, `PROJECT_CONTEXT.md`, `DECISIONS.md`
- Carried over research from the incubator idea file into `research/MARKET_RESEARCH.md` (first draft, not yet gold-standard depth)
- **Same day, sharpened positioning (pass 1):** repositioned from generic Microsoft 365/Teams/Azure automation to a specific product — custom AI agents embedded in Teams acting on real business data (Airtable-first), after research showed plain integrations are commoditized but AI-powered agent builds price at $75K–150K (agency tier). Microsoft's Build 2026 "agentic computing" push (Teams AI Library, Copilot Studio multi-agent framework) directly supports this direction.
- **Same day, sharpened positioning (pass 2):** narrowed further to new-hire onboarding/provisioning as the primary niche, after Ryan's stated capabilities (room assignment, employee batching to tenant, org onboarding) pointed there more directly than the marketing-agency framing. Quantified the pain point ($4,000–7,000/hire in manual overhead), mapped the competitive gap against Rippling/BambooHR/Zluri/Entra ID Governance, locked the build decision (hand-rolled Teams AI Library + Azure Functions, not Copilot Studio), set the engagement model (build-and-train or premium retainer, not commodity maintenance), and defined a concrete MVP (demo onboarding agent, sample data, no client required to start).
- **Same day, MVP scaffold built:** `database/AIRTABLE_SCHEMA.md` (7-table schema) + realistic seed data for a 5-department fictional company; `architecture/TECHNICAL_ARCHITECTURE.md` (full agent flow, system diagram); `docs/DashboardSpec.md` (ROI dashboard target); real starter code in `src/` — Airtable client, Graph client, Adaptive Card builder, HTTP-triggered orchestrator function, Teams AI Library bot skeleton, and a seeding script. Not yet run against live credentials — see `src/README.md § What's Real vs. Stubbed`. Added `src/` to the repo-wide venture folder anatomy (a real gap, not specific to this venture — see root `DECISIONS.md`).
