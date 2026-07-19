---
title: Automation Studio — Market Research
version: 0.4.0
status: draft
author: Ryan Rutledge
last_updated: 2026-07-19
related:
  - ../README.md
  - ../PROJECT_CONTEXT.md
  - ../architecture/TECHNICAL_ARCHITECTURE.md
---

# Market Research

> **Status note:** sharpened three times. Pass 1 (2026-07-18): "Teams AI agents on business data, Airtable-first." Pass 2 (2026-07-18): narrowed to new-hire onboarding as *the* product. Pass 3 (2026-07-19): corrected — the niche is a **client type** (logistics/fleet companies), not a single product; onboarding is one module within a broader Teams-embedded orchestration platform. This pass adds the logistics/fleet niche research and a second module (vehicle/asset issue tracking); it does not discard the onboarding research, which is still real and still module 1. Not yet validated against real discovery calls.

## Table of Contents

- [Summary](#summary)
- [The Commoditization Trap — Read This First](#the-commoditization-trap--read-this-first)
- [Logistics/Fleet Niche](#logisticsfleet-niche)
- [Module 1: New-Hire Onboarding & Provisioning](#module-1-new-hire-onboarding--provisioning)
- [Module 2: Vehicle/Asset Issue & Status Tracking](#module-2-vehicleasset-issue--status-tracking)
- [Engagement Model & Pricing](#engagement-model--pricing)
- [Future Niches: Restaurant, Software Development](#future-niches-restaurant-software-development)
- [Adjacent/Later Opportunity: Tenant Migration & M&A](#adjacentlater-opportunity-tenant-migration--ma)
- [Microsoft's Native Agent Tooling](#microsofts-native-agent-tooling)
- [Risks](#risks)
- [Open Questions](#open-questions)
- [Sources](#sources)

## Summary

A modular Teams-embedded orchestration platform for logistics/fleet companies' back-office teams (dispatchers, fleet managers, ops coordinators, HR, accounting) — not drivers in vehicles. Two modules designed so far: new-hire onboarding (module 1, MVP scaffold built) and vehicle/asset issue & status tracking (module 2, designed, not yet coded). Both are instances of the same underlying pattern — see [`architecture/TECHNICAL_ARCHITECTURE.md § Platform Pattern`](../architecture/TECHNICAL_ARCHITECTURE.md#platform-pattern).

## The Commoditization Trap — Read This First

Still true regardless of module or niche: plain data-notification integrations (Airtable→Teams, or any system→Teams) are commoditized by free/cheap no-code tools (Zapier, Make, n8n, native automations). The product is the agent layer that takes real action and manages state over time, not the connector.

## Logistics/Fleet Niche

**Why this niche:** Ryan's strongest real-world background (recent — a few months of hands-on logistics-team experience, described honestly rather than oversold), genuine enthusiasm, and — per his own assessment — the best revenue potential of his areas of expertise, despite real competition.

**Positioning: an integration/orchestration layer, not a telematics competitor.** Directly relevant finding: Microsoft Teams is explicitly *not* suited for driver/in-vehicle communication — dedicated fleet communication tools exist because drivers need offline capability, safety-appropriate in-vehicle UX, and real-time telematics integration that a generic tool like Teams can't provide, and using Teams while driving is a genuine safety issue, not just a poor UX choice ([source](https://www.pubnub.com/blog/fleet-dispatch-customer-communication/)). This isn't a limitation — it clarifies the actual wedge: **target the back-office side** (dispatchers, fleet managers, ops coordinators, accounting, HR) who already work at a desk in Teams all day, not the in-cab driver experience. Where drivers do interact with the system (e.g., reporting an issue), the interaction should be a quick structured form usable when stopped, not open-ended chat encouraged while driving — see [Module 2](#module-2-vehicleasset-issue--status-tracking) design notes.

**Competitive landscape:**

| Player | Focus | Why It's Not a Direct Competitor |
|---|---|---|
| Samsara | All-in-one telematics + fleet ops, market leader for 50+ vehicle fleets | Full hardware+software platform; widely described as overwhelming/overpriced for mid-size fleets ("paying for features they never use") ([source](https://www.gpsinsight.com/blog/samsara-competitors/)) |
| Motive | Long-haul/refrigerated freight, 120,000+ fleets | Hardware-bundled telematics platform, not a back-office orchestration layer |
| Fleetio | Maintenance-first (work orders, PM scheduling, parts inventory) | GPS via third-party integration, not own hardware; closest in spirit but still a standalone system of record, not a Teams-embedded layer |
| Fleet Chaser, Quipli, rent2b | Niche players for construction SMB / small rental companies | Proof that focused, right-sized players can win specific segments — validates the strategy, not direct competitors to a Teams-native approach |

**Market size:** fleet management software market projected to surpass $30B in 2026, 16.9% CAGR through 2035; global equipment rental industry projected to reach $250B by 2027 ([source](https://www.rent2b.net/en/blog/equipment-rental-software-guide-2026)) — genuinely large and growing, consistent with Ryan's "a lot of $$$" read.

**Quantified pain points** (the "yes please fix this" numbers, same discipline as the onboarding research):
- Fleet downtime costs **$448–760/day per vehicle** as a standard industry benchmark, up to **$1,200–2,000/day in lost revenue capacity** depending on vehicle class/operation ([source](https://fleetrabbit.com/blogs/post/fleet-vehicle-downtime-cost)); each avoidable breakdown represents **$2,900–4,800 in direct revenue impact before repair costs**
- Indirect costs (admin overhead, towing, rental replacement, missed-delivery penalties, overtime) add **35–45% on top of** direct parts/labor costs
- **"Ghost assets"** — equipment on the books generating no revenue — drain **$150–300/day in fixed ownership costs** (insurance, depreciation, financing) per truck, or **$8,000–15,000/month per truck** in full fixed costs while idle ([source](https://assetmanagement.global/blog/enterprise-asset-tracking-software/why-are-ghost-assets-costing-enterprises-millions/))
- **15–25% of fleet assets** in mid-to-large trucking fleets operate below 50% utilization in any given month; average fleets carry **20–35% more vehicles than daily demand requires**
- Identifying and reassigning underutilized capacity typically recovers **6–9% utilization within 30 days** — for a 100-truck fleet, that's **$600K–1.2M in freed capital plus $50–80K/year in recovered carrying cost**

**Read:** these numbers are larger in absolute terms than the onboarding figures, because fleet assets are expensive and fixed costs accrue daily whether or not the asset is producing revenue. A pitch built around "how many of your assets are ghost assets right now, and what's that costing you monthly" is at least as strong as the onboarding pitch, arguably stronger for larger fleets.

## Module 1: New-Hire Onboarding & Provisioning

Preserved from the prior research pass — still real, still module 1, now explicitly scoped as one module within the logistics-niche platform rather than the whole product.

- Manual M365 onboarding: 30–45 minutes, 18+ manual actions per hire, $4,000–7,000/employee in overhead ([source](https://blog.admindroid.com/microsoft-365-user-onboarding-workflow-for-easy-user-provisioning/), [source](https://www.beyondintranet.com/blog/hidden-cost-of-manual-onboarding-microsoft-365/))
- Competitive gap: Rippling, BambooHR, Zluri, Entra ID Governance are full-platform replacements or backend-only identity tooling, not a lightweight Teams-native conversational layer
- Within the logistics niche specifically, this covers onboarding drivers, dispatchers, and office staff — a real recurring need for any growing fleet company, not a generic afterthought
- Full detail (architecture, schema, MVP scaffold) in [`architecture/TECHNICAL_ARCHITECTURE.md`](../architecture/TECHNICAL_ARCHITECTURE.md), [`database/AIRTABLE_SCHEMA.md`](../database/AIRTABLE_SCHEMA.md), and [`src/README.md`](../src/README.md)

## Module 2: Vehicle/Asset Issue & Status Tracking

**Concept (Ryan's own description, 2026-07-19 — independent design, not derived from any employer codebase):** a driver/operator reports a vehicle issue through Teams (structured form, usable when stopped — not open-ended chat while driving). The report is recorded to Airtable and routed to the logistics/maintenance team, who diagnose the issue, set the vehicle's status, and manage it through resolution stages back to "ready" — via chat commands and a purpose-built dashboard, the same "fleet board on a big screen" pattern real asset managers already use to see vehicle status at a glance.

**Why this is the right second module to build:**
- Directly addresses the highest-quantified pain point above (downtime, ghost assets) — a vehicle stuck in "Down" status for too long is a ghost asset in progress, and this module is what would flag that in time to act
- Doesn't depend on GPS/telematics hardware (unlike route/pricing optimization — see below), so it's buildable and demoable without a client's existing hardware investment
- Structurally identical to the onboarding module's pattern (entity → status state machine → Teams trigger → Airtable → notification → dashboard) — see [`architecture/TECHNICAL_ARCHITECTURE.md § Platform Pattern`](../architecture/TECHNICAL_ARCHITECTURE.md#platform-pattern) — meaning most of module 1's code (Airtable client, notification logic, dashboard framework) is directly reusable, not a from-scratch build

**Deferred capability — GPS/telematics integration for route & load pricing:** Ryan is also skilled at real-time GPS tracking integration (when a client has tracking hardware/software already) to ensure loads/deals are priced correctly and routes are optimized against load-ready times, wait times, and traffic. This is real and valuable but conditional on client hardware and third-party API integration (Samsara/Motive/Geotab data feeds) — a premium/v2 capability once module 2 proves the platform pattern, not part of the initial build.

## Engagement Model & Pricing

Unchanged from the prior pass — Ryan's explicit preference for build-and-train or premium retainer, not commodity maintenance. Pricing framing for the logistics niche should anchor to avoided cost the same way onboarding does: a fleet losing even one $150–300/day ghost asset for a month is a $4,500–9,000 problem — a project fee in that range or higher is easy math against real losses at fleet scale, and scales further for larger fleets given the $600K+ recovery figures above.

## Future Niches: Restaurant, Software Development

Named by Ryan as areas of real expertise, not built now — logistics is the sequencing priority given best-evidenced ROI and time constraints (see [`DECISIONS.md`](../DECISIONS.md)). Revisit once the logistics niche has a working demo and (ideally) a first client. No research done on these yet — don't assume anything about their pain points or competitive landscape without doing the same research discipline applied to logistics/onboarding.

## Adjacent/Later Opportunity: Tenant Migration & M&A

Unchanged from the prior pass — real pain point (identity conflicts, broken Teams/SharePoint permissions during M&A), but episodic rather than recurring, and already served by larger consultancies. Not a near-term priority for any niche.

## Microsoft's Native Agent Tooling

Unchanged — Teams AI Library, Copilot Studio's multi-agent framework, and Azure Functions repositioned for agents at Build 2026 remain directly relevant regardless of module or niche. Ryan chose hand-rolled Teams AI Library + Azure Functions over Copilot Studio — see [`../DECISIONS.md`](../DECISIONS.md).

## Risks

- **Positioning collapse risk** (unchanged): marketing materials must stay disciplined about "agent that acts and manages state" vs. "integration that notifies," or prospects anchor to free-tool pricing.
- **Niche-spreading risk (new):** naming restaurant and software-development as future niches is fine as vision, but building for them before logistics has traction would repeat the exact mistake being corrected here — see [`DECISIONS.md`](../DECISIONS.md).
- **Module-scope risk (new):** the GPS/telematics route-optimization capability is genuinely valuable but adds real complexity (third-party API integration, hardware dependency) — resist pulling it into the MVP before module 2 (which needs none of that) is proven.
- Competitive landscape in logistics/fleet software is real and well-funded (Samsara, Motive) — the orchestration-layer-not-replacement positioning is the mitigation, not an assumption that competition doesn't matter.

## Open Questions

- Does the "ghost asset" framing resonate as the lead pain point with real logistics/fleet prospects, or does vehicle downtime (a more immediate, visible problem) land better as the opening hook?
- What size fleet is the right target — the $600K+ recovery figures assume a 100-truck fleet; what does the math look like for a 10–20 vehicle fleet, which is likely a more realistic first-client size?
- Fastest acquisition channel for logistics/fleet prospects specifically — likely different from the general SMB channels considered for onboarding (industry associations, trucking/logistics trade groups, possibly Ryan's own professional network from his recent logistics-team work)

## Sources

- [Fleet Vehicle Downtime Cost](https://fleetrabbit.com/blogs/post/fleet-vehicle-downtime-cost)
- [Ghost Assets: Why Enterprises Are Losing Millions Silently](https://assetmanagement.global/blog/enterprise-asset-tracking-software/why-are-ghost-assets-costing-enterprises-millions/)
- [Fleet Asset Utilization: How to Find Underutilized Vehicles](https://rtafleet.com/blog/fleet-asset-utilization-how-to-find-underutilized-vehicles-and-what-to-do-about-them)
- [Real-Time Fleet Dispatch Infrastructure for Driver, Dispatch, and Customer Communication](https://www.pubnub.com/blog/fleet-dispatch-customer-communication/)
- [Top Samsara Alternatives for Fleet Management in 2026](https://www.gpsinsight.com/blog/samsara-competitors/)
- [Equipment Rental Software 2026: 10 Best Tools](https://www.rent2b.net/en/blog/equipment-rental-software-guide-2026)
- [The Complete Guide to M365 User Onboarding — EasyEntra](https://easyentra.com/the-complete-guide-to-m365-user-onboarding/)
- [The Hidden Cost of Manual Onboarding in Microsoft 365](https://www.beyondintranet.com/blog/hidden-cost-of-manual-onboarding-microsoft-365/)
- [Build 2026 Reveals Microsoft's Agent-First AI Play](https://windowsnews.ai/article/build-2026-reveals-microsofts-agent-first-ai-play-azure-copilot-and-the-value-chain-converge.428607)
