---
title: Lead Engine — Project Context
version: 0.1.0
status: draft
author: Ryan Rutledge
last_updated: 2026-07-18
related:
  - docs/BUSINESS_PLAN.md
  - CLAUDE.md
  - GPT.md
  - DECISIONS.md
---

# Project Context

**What this is:** an AI-native lead qualification, nurture, and booking platform for local home-services businesses (HVAC, plumbing, electrical initially). Full detail in [`docs/BUSINESS_PLAN.md`](docs/BUSINESS_PLAN.md).

**Primary objective:** autonomous lead generation and booking with minimal manual intervention from the customer (the service-business owner) — the product's entire value proposition is closing the response-speed gap owner-operators structurally can't close themselves.

**Current stage:** incubator Phase A (pre-build). `docs/BUSINESS_PLAN.md` is a first research-backed pass through stages 3–10 of the [Incubator Pipeline](../../Architecture.md#incubator-pipeline). It has **not** been validated against real discovery calls yet — see [`research/MARKET_RESEARCH.md § Open Questions`](research/MARKET_RESEARCH.md#open-questions-for-real-discovery-calls) — so no code should be built against this plan's specifics (pricing, ICP details) until that validation happens or Ryan explicitly says to proceed anyway.

**Tech stack:** React frontend, FastAPI backend, PostgreSQL, Make.com for early automation, OpenAI + Claude for AI qualification — see repo-wide defaults in [TechStack.md](../../TechStack.md) unless a venture-specific deviation is logged in [DECISIONS.md](DECISIONS.md).

**Folder layout:** follows [Architecture.md § Venture Folder Anatomy](../../Architecture.md#venture-folder-anatomy). Check `docs/`, `research/`, `architecture/`, `database/`, `api/`, `automation/`, `prompts/`, `deployment/`, `marketing/`, `sales/`, `finance/`, `legal/`, `tasks/`, `diagrams/` for anything not covered here — most are still empty, populated as each area gets built out.
