---
title: Automation Studio — Project Context
version: 0.1.0
status: draft
author: Ryan Rutledge
last_updated: 2026-07-18
related:
  - README.md
  - CLAUDE.md
  - GPT.md
  - DECISIONS.md
  - research/MARKET_RESEARCH.md
---

# Project Context

**What this is:** a productized automation-building service — bespoke Make.com/n8n/Azure Functions systems built and maintained for other businesses, priced against the value delivered (hours/cost saved), not hours spent building. Full detail in [`research/MARKET_RESEARCH.md`](research/MARKET_RESEARCH.md).

**Primary objective:** fastest realistic path from ~$4,000/mo to ~$10,000/mo combined income. This venture was chosen over the other five incubator candidates specifically because it scored highest on documented time-to-first-dollar — see [`ventures/00-incubator/Ideas/automation-reselling/Scorecard.md`](../00-incubator/Ideas/automation-reselling/Scorecard.md).

**Real constraints that should shape every recommendation made here:**
- **Time:** 10–20 hrs/week total (2 hrs on weeknights, ~10 hrs on weekends). Don't propose anything that assumes daytime availability or open-ended time investment.
- **Financial urgency is real, not abstract.** Ryan's family is under real financial pressure. When choosing between a faster/scrappier path and a more polished/slower one, default to faster unless there's a clear reason not to — this isn't a hobby project with unlimited runway.
- **Client interaction is fine, async-preferred.** Evening calls work; Loom/email/forms for scoping are preferred over requiring live daytime meetings.

**Founder's actual technical background (use this, don't route around it):** built Microsoft Teams bots on Azure Functions that listen for keywords/@mentions and act on linked data — real event-driven backend/orchestration experience, not just no-code workflow assembly. This is a genuine differentiator: most n8n/Make automation agencies can't build inside the Microsoft 365/Teams ecosystem the way Ryan already has. The initial niche angle should lean into this rather than compete generically — see [`research/MARKET_RESEARCH.md § Target Customer`](research/MARKET_RESEARCH.md#target-customer) once written.

**Strategic sequencing (this matters for scope decisions):** AI/LLM-agent-powered automation work (the original `ai-chatbot-service` idea) is not a separate venture — it's the intended **premium service tier** within this business, built once the first automation clients are landed. Don't scope this venture as "just Make.com/n8n workflows forever"; the roadmap should include an explicit path to selling AI-agent-enhanced builds as a higher-margin offering.

**Current stage:** just promoted from the incubator (2026-07-18). `research/MARKET_RESEARCH.md` currently carries over research from the incubator idea file — it has **not** been rebuilt to the full gold-standard flagship format yet (see [Architecture.md § Document Dependency Chain](../../Architecture.md#document-dependency-chain)), and no client outreach or portfolio-piece build should start until at minimum a concrete niche/ICP is locked in.

**Tech stack:** Make.com and/or n8n for client-facing automations, Azure Functions where the Microsoft 365/Teams differentiation applies, ChatGPT/Claude for the AI-agent premium tier — see [TechStack.md](../../TechStack.md) for repo-wide defaults.

**Folder layout:** follows [Architecture.md § Venture Folder Anatomy](../../Architecture.md#venture-folder-anatomy).
