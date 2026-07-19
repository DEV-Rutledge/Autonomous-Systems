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

## Narrowed to new-hire onboarding/provisioning as the primary niche

**Date:** 2026-07-18

**Context:** Ryan listed his specific capabilities more concretely: room assignment, employee batching to tenant, assisting with getting people onto the Microsoft org in Teams, plus Airtable backend design. This pointed toward IT-onboarding/provisioning automation rather than the marketing-agency-content-calendar framing from the prior sharpening pass. Research confirmed a strong, quantified pain point (30–45 minutes and 18+ manual actions per hire, $4,000–7,000/employee in overhead) and a competitive gap — existing players (Rippling, BambooHR, Zluri, Entra ID Governance) are full-platform replacements or backend-only tooling, not a lightweight Teams-native conversational agent a growing company can adopt without replacing their existing stack.

**Decision:** Primary niche is new-hire onboarding/provisioning automation for growing companies (~50–300 employees with visible hiring activity), not marketing agencies. The marketing-agency angle is preserved as a documented fallback, not deleted — see [`research/MARKET_RESEARCH.md § Deprioritized`](research/MARKET_RESEARCH.md#deprioritized-marketing-agency-airtable-niche). Tenant migration/M&A work is noted as a real but later opportunity, given its episodic (not recurring) sales trigger and the larger-consultancy competitive presence already in that space.

**Why:** this niche has a sharper, dollar-quantified pain point, maps more directly onto Ryan's actual stated skills, and the competitive landscape has a clearer gap than the marketing-agency framing did.

## Hand-rolled build on Teams AI Library + Azure Functions, not Copilot Studio

**Date:** 2026-07-18

**Context:** Two build paths were identified in the prior research pass: hand-rolled agent orchestration (Teams AI Library + Azure Functions) vs. Microsoft Copilot Studio (low-code, faster to a working demo, but less differentiated since competitors can use the same platform).

**Decision:** Hand-rolled, matching Ryan's stated confidence and existing skill directly.

**Why:** Ryan's own call, and it's the option that plays most directly to real, demonstrated expertise rather than a platform any competitor could also adopt.

## Engagement model: build-and-train or premium retainer, not commodity maintenance

**Date:** 2026-07-18

**Context:** The original automation-reselling research assumed a $500+/mo maintenance-retainer model as the default, standard in the broader n8n/Make agency space.

**Decision:** Ryan explicitly prefers either (a) building the system and training the client's tech team, with a one-time project fee and no retainer, or (b) staying involved only at a high, expertise-reflecting rate — not cheap ongoing support. Pricing framing shifts from build-hours-based to avoided-cost-based, given the onboarding niche's quantified overhead figure ($4,000–7,000/hire) — see [`research/MARKET_RESEARCH.md § Engagement Model & Pricing`](research/MARKET_RESEARCH.md#engagement-model--pricing).

**Why:** matches Ryan's own stated preference and time constraints — a portfolio of low-value $500/mo retainers doesn't scale well against a 10–20 hrs/week ceiling, whereas a handful of well-scoped, well-paid build-and-train engagements does.

## Build one demo, targeting one niche — not multiple Airtable bases across business types

**Date:** 2026-07-18

**Context:** Ryan proposed building multiple demo Airtable bases, each targeted at a different business type, and explicitly asked whether one niche should be targeted first instead — with the condition that if it's one niche, it should be technologically underserved, high-revenue, and growing.

**Decision:** One niche, one demo: new-hire onboarding/provisioning (already selected — see the two "sharpened positioning" entries above). It satisfies all three of Ryan's stated criteria on the evidence already gathered: underserved (no direct competitor offers a lightweight Teams-native conversational agent at this price point), high-revenue (quantified $4,000–7,000/hire overhead), and growing (every hiring company is a fresh prospect, and Microsoft's own platform investment is moving the same direction).

**Why:** splitting limited hours (10–20/week) across multiple demo bases directly contradicts the productization/niching principle already established in this venture's own research — one excellent, quantified demo beats several thin ones, and it's faster to first revenue.

## Added src/ to the venture folder structure for real application code

**Date:** 2026-07-18

**Context:** Starting the actual onboarding-agent build surfaced a gap in [Architecture.md § Venture Folder Anatomy](../../Architecture.md#venture-folder-anatomy) — `api/` and `automation/` hold specs, not runnable code, and there was no folder for the real Azure Function / Teams bot source.

**Decision:** Added `src/` to the repo-wide venture anatomy (applies to all ventures, not just this one) — see [Architecture.md](../../Architecture.md) and root [DECISIONS.md](../../DECISIONS.md).

**Why:** a real gap, not specific to this venture — every venture will eventually need a home for actual source code once it moves past planning.
