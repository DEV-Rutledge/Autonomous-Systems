---
title: Automation Studio — Decision Log
version: 0.2.0
status: draft
author: Ryan Rutledge
last_updated: 2026-07-19
related:
  - PROJECT_CONTEXT.md
  - ../00-incubator/Ideas/automation-reselling/Scorecard.md
---

# Decision Log

## Verified real infrastructure costs given funding constraints — corrected an assumption

**Date:** 2026-07-19

**Context:** Ryan asked directly whether a free-tier Microsoft account would cover what's needed, given limited funding. Research corrected an assumption from earlier in the build: the free Microsoft 365 Developer Program sandbox tenant — the standard free path for Teams app development — was restricted in early 2025 to Visual Studio Professional/Enterprise subscribers or Microsoft AI Cloud Partner Program members. Ryan doesn't qualify for either.

**Finding:** everything else needed is genuinely free (Airtable free tier, Azure Functions' 1M-request/month free grant, Azure Bot Service's free standard channels). The one real gap is a Microsoft 365 tenant for live Teams testing — a free Azure account + free Microsoft Entra ID tenant is the documented workaround (untested whether it's sufficient alone), with Microsoft 365 Business Basic (~$8.40/user/month, one license needed) as the cheapest paid fallback if not. LLM API costs (OpenAI/Claude) are small but real, estimated a few dollars/month at demo scale.

**Decision:** documented as "real infrastructure costs" in [`PROJECT_CONTEXT.md`](PROJECT_CONTEXT.md) — realistic worst case ~$10–15/month. Try the free Entra tenant path before paying for anything.

**Why:** this also retroactively validates the earlier hand-rolled-vs-Copilot-Studio build decision from a budget angle (Copilot Studio alone costs $1,000/month) — worth stating explicitly since it reinforces that decision was right for more than one reason.

## Corrected: niche means client type, not product type — restructured as a modular platform

**Date:** 2026-07-19

**Context:** The prior two "sharpened positioning" passes narrowed all the way down to "new-hire onboarding" as *the* product, sold to any SMB. Ryan corrected this: when he said "niche" earlier, he meant serving specific *types of client* well across many use cases (onboarding, logistics, accounting, marketing, dev — comparable to a general orchestration bot like Slack's Tag), not narrowing to one thin product. He was explicit that a bare onboarding pitch would "make companies yawn" compared to onboarding delivered *within* an orchestrated bot network that works with a team as they actually communicate.

**Decision:** Restructured Automation Studio as a modular Teams-embedded orchestration platform. Every module (onboarding, vehicle/asset tracking, future modules) follows the same underlying pattern — see [`architecture/TECHNICAL_ARCHITECTURE.md § Platform Pattern`](architecture/TECHNICAL_ARCHITECTURE.md#platform-pattern). Onboarding is module 1, not the whole product.

**Why:** a real correction, not a refinement — the earlier framing would have undersold the platform in every sales conversation and boxed the venture into a single feature rather than the extensible system Ryan actually wants to build.

## Primary niche: logistics/fleet, with restaurant and software-development as named future niches

**Date:** 2026-07-19

**Context:** Ryan named three-to-four areas of real personal expertise — restaurant, software development, logistics, and rental/fleet management — and was explicit that he wants to eventually serve a curated set of a few niche industries, not one industry forever and not everyone. He assessed logistics as likely the best ROI despite real competition, based on his own read of where the money is.

**Decision:** Logistics/fleet is the primary niche to build for now. Restaurant and software-development are documented as real future niches, not built or researched yet.

**Why:** matches Ryan's own risk-adjusted read of where the money is, and building for one niche at a time is the only way to stay consistent with the time constraint (10–20 hrs/week) — see the "niche-spreading risk" noted in [`research/MARKET_RESEARCH.md § Risks`](research/MARKET_RESEARCH.md#risks). This does not reopen or deprioritize the "one niche at a time" principle established when onboarding-vs-multiple-bases was decided — it applies the same discipline at the industry level now that there are multiple named future niches, not just multiple modules.

## Fleet-rental work built independently — no proprietary employer code or data used

**Date:** 2026-07-19

**Context:** Ryan has previously built an autonomous fleet-rental asset management system as an employee; that codebase and data belong to his employer. He asked whether he could show Claude Code the code to speed up design work.

**Decision:** Declined — Claude Code will not review, reference, or be shown that codebase or any of its data. Module 2 (vehicle/asset issue tracking) and any future fleet-related module are designed from Ryan's own verbal description of general concepts and requirements, and built as an original, independent implementation.

**Why:** work product created within the scope of employment is, under standard employment agreements, the employer's IP, even when written entirely by Ryan — that covers the specific code/data/designs, not his general skill and knowledge, which he's free to reuse. This is not a legal opinion (Ryan should consult an actual employment lawyer for certainty on the exact boundary) — it's the conservative, safe default given the real stakes if it's gotten wrong. See [`PROJECT_CONTEXT.md § IP boundary`](PROJECT_CONTEXT.md).

## Module 2: vehicle/asset issue & status tracking, not GPS/telematics route optimization

**Date:** 2026-07-19

**Context:** Ryan described two logistics capabilities he's strong at: (1) issue reporting/routing/status-tracking for vehicles, similar to a bot he'd previously built (conceptually, not the code), and (2) real-time GPS/telematics integration for route and load-pricing optimization, contingent on a client already having tracking hardware.

**Decision:** Build vehicle/asset issue & status tracking as module 2. Defer GPS/telematics route optimization.

**Why:** issue/status tracking needs no client hardware dependency, reuses most of module 1's existing code (same platform pattern), and directly targets the highest-quantified pain point found in research (downtime and ghost-asset costs) — see [`research/MARKET_RESEARCH.md § Logistics/Fleet Niche`](research/MARKET_RESEARCH.md#logisticsfleet-niche). GPS/telematics integration is real and valuable but adds third-party API dependency and client-hardware contingency that would slow the build without being necessary to prove the platform pattern.

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
