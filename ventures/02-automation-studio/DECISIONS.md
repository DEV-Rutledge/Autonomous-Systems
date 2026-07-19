---
title: Automation Studio — Decision Log
version: 0.1.0
status: draft
author: Ryan Rutledge
last_updated: 2026-07-18
related:
  - PROJECT_CONTEXT.md
  - ../00-incubator/Ideas/automation-reselling/Scorecard.md
---

# Decision Log

## Promoted from the incubator over five other candidates, via direct interview

**Date:** 2026-07-18

**Context:** Six ideas were evaluated for the "turn $4K/mo into $10K/mo" goal: `ai-newsletter`, `ai-social-media-service`, `ai-chatbot-service`, `ai-seo-content-agency`, `automation-reselling` (this one), and a NotebookLM-based AI podcast idea that was researched but not fully written up after its automation path turned out to rely on unofficial browser-automation of a Google consumer product. A direct interview with Ryan (time availability, client-facing tolerance, maintenance appetite, gut interest) converged cleanly on `automation-reselling` across all four dimensions — see [`ventures/00-incubator/Ideas/automation-reselling/Scorecard.md`](../00-incubator/Ideas/automation-reselling/Scorecard.md) for the full 8.0/10 score.

**Alternatives considered:** `ai-chatbot-service` was Ryan's initial instinct (best skill-fit to his Azure Functions/Teams bot background) but scored behind on time-to-first-revenue given its 6–10 week build before first client. `automation-reselling` has no product-build phase and the best-documented revenue ceiling of the six options.

**Decision:** Promoted to `ventures/02-automation-studio/`. AI/LLM-agent work (the substance of `ai-chatbot-service`) is not abandoned — it becomes this venture's premium service tier once initial clients are landed, so the chatbot-service skill-fit and interest aren't wasted, just sequenced later.

**Why:** given real financial pressure, time-to-first-dollar was explicitly weighted as the dominant factor per Ryan's own stated priority, not treated as one input among equals.

## Niche angle: Microsoft 365/Teams/Azure ecosystem automation, not generic Make.com/n8n

**Date:** 2026-07-18

**Context:** Research on the automation-agency space strongly recommends niching into one industry/use-case rather than doing generic work for anyone (see [`ventures/00-incubator/Ideas/automation-reselling/MarketResearch.md § Risks`](../00-incubator/Ideas/automation-reselling/MarketResearch.md#risks)). Ryan's actual differentiated experience is Microsoft Teams bots built on Azure Functions, not Make.com/n8n specifically.

**Decision:** Initial go-to-market angle is Microsoft 365/Teams/Azure-ecosystem automation — a niche most generic n8n/Make agencies can't credibly serve — rather than competing head-on in the more commoditized general automation-agency space.

**Why:** this is a real, defensible differentiator backed by existing work, not a claimed specialty — see [`PROJECT_CONTEXT.md`](PROJECT_CONTEXT.md) for the background that justifies it.

## Sharpened positioning: Teams AI agents on business data (Airtable-first), not generic automation or plain integrations

**Date:** 2026-07-18

**Context:** Ryan clarified his actual strongest skill more precisely: Microsoft Teams bots on Azure Functions integrated with Airtable specifically, with confidence to expand to other backends and tailor automation/responses per niche. He also expressed wanting to lean further into agents. Research surfaced two important findings: (1) plain Airtable↔Teams notification integrations are fully commoditized by free/cheap no-code tools (Zapier, Make, n8n, Airtable's own native automation), so pitching "I'll connect your systems" competes with a free feature; (2) AI-powered chatbots with real NLP price at $75,000–150,000 for agency builds, a completely different tier than generic workflow automation, and Microsoft's own Build 2026 push into "agentic computing" (Teams AI Library, Copilot Studio's multi-agent framework, Azure Functions repositioned for agents) validates going deeper on agents now.

**Decision:** Repositioned from generic "Microsoft 365/Teams/Azure automation" to a specific product: custom AI agents embedded in Teams that read/act on real business data, Airtable first. The AI-agent work is brought forward as the primary offering rather than sequenced as a later premium tier — see updated [`PROJECT_CONTEXT.md`](PROJECT_CONTEXT.md) and [`research/MARKET_RESEARCH.md`](research/MARKET_RESEARCH.md).

**Why:** the market data justified leading with the higher-value tier rather than starting generic and working up to it — the pricing gap between "connector" and "agent" is too large to leave on the table, and it's a better match to what Ryan is both strongest at and most interested in.
