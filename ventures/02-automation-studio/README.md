---
title: Automation Studio
version: 0.5.0
status: draft
author: Ryan Rutledge
last_updated: 2026-07-19
related:
  - PROJECT_CONTEXT.md
  - research/MARKET_RESEARCH.md
---

# Automation Studio

A modular Teams-embedded orchestration platform for logistics/fleet companies' back-office teams (dispatchers, fleet managers, ops, HR, accounting) — not a single-purpose bot. Two modules so far: **new-hire onboarding** (MVP scaffold built) and **vehicle/asset issue & status tracking** (designed). Both are instances of the same reusable pattern, not one-off builds — see [`architecture/TECHNICAL_ARCHITECTURE.md § Platform Pattern`](architecture/TECHNICAL_ARCHITECTURE.md#platform-pattern). Restaurant and software-development are named future niches, not built yet. See [`PROJECT_CONTEXT.md`](PROJECT_CONTEXT.md) for the full picture, including why this replaced an earlier, too-narrow "onboarding is the product" framing.

**Start here:**

| If you want... | Read |
|---|---|
| AI-agent context before working here (real constraints included) | [`PROJECT_CONTEXT.md`](PROJECT_CONTEXT.md) |
| The evidence behind this venture | [`research/MARKET_RESEARCH.md`](research/MARKET_RESEARCH.md) |
| Why it was chosen, and every build/positioning decision since | [`DECISIONS.md`](DECISIONS.md) |
| How the platform and each module actually work | [`architecture/TECHNICAL_ARCHITECTURE.md`](architecture/TECHNICAL_ARCHITECTURE.md) |
| The Airtable data model | [`database/AIRTABLE_SCHEMA.md`](database/AIRTABLE_SCHEMA.md) |
| The demo's sample data | [`database/seed-data/README.md`](database/seed-data/README.md) |
| The actual starter code | [`src/README.md`](src/README.md) |
| The planned ROI dashboard | [`docs/DashboardSpec.md`](docs/DashboardSpec.md) |
| What's shipped so far | [`CHANGELOG.md`](CHANGELOG.md) |

`api/`, `automation/`, `prompts/`, `deployment/`, `marketing/`, `sales/`, `finance/`, `legal/`, `tasks/`, `diagrams/` remain empty, populated as each area gets built out — see [Architecture.md § Venture Folder Anatomy](../../Architecture.md#venture-folder-anatomy).
