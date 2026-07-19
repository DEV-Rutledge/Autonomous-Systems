---
title: Automation Studio — Project Context
version: 0.6.0
status: draft
author: Ryan Rutledge
last_updated: 2026-07-19
related:
  - README.md
  - CLAUDE.md
  - GPT.md
  - DECISIONS.md
  - research/MARKET_RESEARCH.md
  - architecture/TECHNICAL_ARCHITECTURE.md
---

# Project Context

**What this is (restructured 2026-07-19 — read this version, not the single-product framing in earlier commits):** a modular Teams-embedded orchestration platform, not a single-purpose onboarding bot. Every module follows the same underlying pattern — an entity with a status state machine, triggered from Teams, backed by Airtable, routed to the right person/team, visualized on a dashboard — see [`architecture/TECHNICAL_ARCHITECTURE.md § Platform Pattern`](architecture/TECHNICAL_ARCHITECTURE.md#platform-pattern). Onboarding was the first module; it's one capability among several, not the whole pitch.

**Niche strategy:** a *client-type* niche, not a *product* niche — this was a real correction from Ryan (2026-07-19) after the first pass narrowed too far into "onboarding for any SMB." The platform serves a curated set of specific industries, each with tailored modules, rather than either (a) one narrow product sold everywhere or (b) trying to serve everyone. **Primary niche: logistics / fleet & rental asset management** — Ryan's strongest real-world background, most concrete pain points, and (per his own read) the best revenue potential despite real competition. Restaurant and software-development are noted future niches, not built now — see [`DECISIONS.md`](DECISIONS.md) for why sequencing one niche first still matters given time constraints.

**Primary objective:** fastest realistic path from ~$4,000/mo to ~$10,000/mo combined income — unchanged. Every module choice should still be evaluated against time-to-first-dollar, not just architectural elegance.

**Real constraints that should shape every recommendation made here:**
- **Time:** 10–20 hrs/week total (2 hrs on weeknights, ~10 hrs on weekends). Don't propose anything that assumes daytime availability or open-ended time investment.
- **Financial urgency is real, not abstract.** Ryan's family is under real financial pressure. Default to faster/scrappier unless there's a clear reason not to.
- **Client interaction is fine, async-preferred.** Evening calls work; Loom/email/forms for scoping preferred over live daytime meetings.
- **Separate business finances from day job.** Ryan is setting up a dedicated Microsoft/Azure account and card on his personal email, kept apart from his employer's accounts. Claude Code does not handle any part of this.
- **IP boundary — read this before referencing any of Ryan's prior work:** Ryan previously built an autonomous fleet-rental system as an employee, and that codebase/data is his employer's property. He will describe *concepts and requirements* in his own words; he will not (and should not be asked to) share or paraphrase the actual proprietary code, data, or specific designs. Everything built in this venture is an independent, original implementation informed by his general skill and knowledge — not a derivative of his employer's system. If any request in this venture would require referencing that codebase, stop and flag it rather than proceeding.

**Founder's actual technical background:**
- Strong at building Microsoft Teams bots on Azure Functions integrated with Airtable — listens for keywords/@mentions, acts on linked data.
- Real (recent — a few months, described honestly, not oversold) hands-on experience with logistics teams: rental scheduling, utilization tracking, vehicle/asset issue reporting and routing, GPS/telematics integration when hardware is available, and load/route pricing optimization.
- Genuinely good at translating technical complexity into UI/UX non-technical users (dispatchers, asset managers, ops staff) can actually use — a real differentiator worth naming explicitly in positioning, not just an assumed baseline skill.
- Plans to use Claude Code for dashboards/web portals as the frontend layer on top of the bot/data layer.

**Build decision:** hand-rolled on Teams AI Library + Azure Functions, not Microsoft Copilot Studio. See [`DECISIONS.md`](DECISIONS.md).

**Engagement model (Ryan's explicit preference):** avoid low-value ongoing maintenance-only work.
1. Build the system + train the client's tech team — one-time project fee, no retainer, OR
2. Stay involved only at a high, expertise-reflecting retainer rate — not commodity $500/mo maintenance.

Open to hiring later if stretched thin across multiple engagements — not an immediate plan, a known next step.

**Positioning within logistics/fleet (research-backed, 2026-07-19):** not a telematics/GPS hardware competitor to Samsara/Motive/Fleetio — an orchestration layer that sits on top of whatever asset/tracking data a company already has (Fleetio, Samsara, Airtable, or a spreadsheet) and turns it into in-chat action for the *back-office* team (dispatchers, fleet managers, ops coordinators) — not drivers in vehicles, which is a real safety consideration, not just a market segment choice. See [`research/MARKET_RESEARCH.md § Logistics/Fleet Niche`](research/MARKET_RESEARCH.md#logisticsfleet-niche).

**Current stage:** Module 1 (Onboarding) has a full MVP scaffold — see [`src/README.md § What's Real vs. Stubbed`](src/README.md#whats-real-vs-stubbed). Module 2 (Vehicle/Asset Issue & Status Tracking) is designed (schema + architecture) but not yet coded — see [`architecture/TECHNICAL_ARCHITECTURE.md § Module 2`](architecture/TECHNICAL_ARCHITECTURE.md#module-2-vehicleasset-issue--status-tracking). Neither module has been run against live credentials or validated against real conversations.

**Tech stack:** Azure Functions + Teams AI Library as the core agent layer; Airtable as the first backend; Claude Code for dashboard/web-portal frontend work; ChatGPT/Claude APIs for the LLM reasoning layer.

**Real infrastructure costs (verified 2026-07-19, given real funding constraints):**
- Airtable: free tier, already sufficient
- Azure Functions: free — 1M requests + 400,000 GB-s/month, forever, far more than this needs
- Azure Bot Service (Teams/Web Chat channel): free
- **Microsoft 365 tenant for Teams testing — the one real cost.** The free Microsoft 365 Developer Program sandbox is *not* available to Ryan — Microsoft restricted it in early 2025 to Visual Studio Professional/Enterprise subscribers or Microsoft AI Cloud Partner Program members. Two paths: (1) try a free Azure account + free Microsoft Entra ID tenant first — documented as sufficient for bot registration and Graph API development, though it's unverified whether that alone is enough to test live inside a real Teams client; (2) if not, the cheapest paid fallback is Microsoft 365 Business Basic at ~$8.40/user/month, needing only one license.
- LLM API (OpenAI/Claude, the agent's reasoning layer): not free, but small — a few dollars/month at demo scale
- **Realistic worst case: ~$10–15/month total.** This also validates the hand-rolled-over-Copilot-Studio build decision from a budget angle, not just a control angle — Copilot Studio alone runs $1,000/month.

**Folder layout:** follows [Architecture.md § Venture Folder Anatomy](../../Architecture.md#venture-folder-anatomy).
