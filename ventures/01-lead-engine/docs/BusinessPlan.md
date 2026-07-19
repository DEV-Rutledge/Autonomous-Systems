---
title: Lead Engine — Business Plan
version: 0.1.0
status: draft
author: Ryan Rutledge
last_updated: 2026-07-18
related:
  - ../CLAUDE.md
  - ../PROJECT_CONTEXT.md
  - ../research/MarketResearch.md
  - ../../../ventures/00-incubator/BusinessScorecard.md
---

# Lead Engine — Business Plan

**Venture:** `ventures/01-lead-engine/` — an AI-native lead qualification, nurture, and booking platform for local home-services businesses.

> **Status note:** this is the first full pass through incubator stages 3–10, superseding the earlier one-line stub version. It is grounded in real secondary research (see [`research/MarketResearch.md`](../research/MarketResearch.md)) but has **not yet been validated against real discovery calls** with target operators — that's the next step before stage 11 scoring. Assumptions that need real-world validation are flagged explicitly throughout rather than presented as settled fact.

## Table of Contents

- [Executive Summary](#executive-summary)
- [Vision](#vision)
- [Mission](#mission)
- [Problem](#problem)
- [Market Size](#market-size)
- [Competitor Analysis](#competitor-analysis)
- [Customer Personas](#customer-personas)
- [Pain Points](#pain-points)
- [Revenue Model](#revenue-model)
- [Pricing](#pricing)
- [Expansion](#expansion)
- [Go-To-Market](#go-to-market)
- [SEO](#seo)
- [Content Strategy](#content-strategy)
- [Sales Funnel](#sales-funnel)
- [CAC](#cac)
- [LTV](#ltv)
- [Risks](#risks)
- [Financial Model](#financial-model)
- [KPIs](#kpis)
- [Hiring Plan](#hiring-plan)
- [Exit Opportunities](#exit-opportunities)

## Executive Summary

Lead Engine is an AI-native platform that finds, qualifies, nurtures, and books leads for local home-services businesses — starting with HVAC, plumbing, and electrical contractors — without requiring the owner to hire a marketing or sales team. It replaces the patchwork most small operators run today (scattered ad spend, manual follow-up, a spreadsheet or memory instead of a real CRM) with a single system that responds to every inquiry within minutes, qualifies it automatically, and books it directly onto the calendar.

The wedge is narrow and specific: home-services buyers respond dramatically better to leads contacted within five minutes of inquiry, but owner-operators — who are usually on a job site, not at a desk — structurally can't hit that window. Lead Engine closes it with AI, and does so at a price point between commodity prospecting tools (wrong workflow entirely) and enterprise reputation platforms (review-centric, not booking-centric) — see [Competitor Analysis](#competitor-analysis).

Near-term target: $1,000 MRR within 60 days of launch, matching [Roadmap.md Phase 2](../../../Roadmap.md#phase-2--first-revenue-product). Realistic Year 1 stretch target, once pricing is validated: ~$25–30K MRR at ~100 blended customers — see [Financial Model](#financial-model) for how this supersedes the earlier flat-rate estimate.

## Vision

Become the default AI operating layer for how local service businesses acquire and convert customers — an autonomous growth department that a one-truck HVAC operator can turn on without hiring anyone.

## Mission

Give every local service business AI-powered lead capture, qualification, nurture, and booking — so response speed and follow-through stop being a function of how busy the owner is that day.

## Problem

Small service-business owners lose winnable jobs not because demand doesn't exist, but because of structural response and process failures — all independently validated in secondary research (see [`research/MarketResearch.md § Validated Pain Points`](../research/MarketResearch.md#validated-pain-points)):

1. **Inconsistent lead volume** — the most commonly cited top issue among small business owners.
2. **The owner is the bottleneck** — sales, marketing, and the service work all run through one person's time.
3. **Ad spend spread too thin** — a little on Google, a little on Facebook, a directory listing — none of it funded to real momentum.
4. **Bad lead data** — wrong numbers, stale emails, wasted follow-up effort.
5. **Slow follow-up** — the well-documented 5-minute response window is when conversion odds are highest, but an owner on a job site can't hit it.
6. **No attribution clarity** — owners frequently can't say which channel is actually producing paying customers, so budget allocation is a guess.

Lead Engine's product surface maps directly onto these: AI qualification addresses (4), automated instant multi-channel response addresses (2) and (5), unified capture across channels addresses (3), and a booking-linked attribution dashboard addresses (6).

## Market Size

Market-sizing data for this category is inconsistent across research firms (a sign of a fragmented, immature reporting landscape rather than a small market) — see full spread in [`research/MarketResearch.md § Market Size`](../research/MarketResearch.md#market-size).

- **TAM:** Global lead generation software market, ~$6.4B (2026) growing to ~$8.9B by 2030 (one estimate; a competing estimate puts 2026 at $9.87B — treat both as directional, not precise).
- **SAM:** US home-services businesses in the initial three sub-verticals (HVAC, plumbing, electrical). Even the most conservative count puts this at ~120,000–260,000 firms, roughly 70% with fewer than 10 employees — squarely the target persona. See [`research/MarketResearch.md § Target Sub-Vertical Sizing`](../research/MarketResearch.md#target-sub-vertical-sizing).
- **SOM (Year 1):** 100–300 paying customers is under 0.25% penetration of the SAM even at the low end of the firm-count estimates. Market size is not the constraint on this business — go-to-market execution and CAC efficiency are (see [CAC](#cac) and [Go-To-Market](#go-to-market)).

## Competitor Analysis

| Product | Category | Entry Price | Why It's Not a Direct Fit |
|---|---|---|---|
| Birdeye | Reputation + CX platform | ~$299/mo | Review/reputation-centric, not a purpose-built qualification/booking engine; enterprise multi-location focus |
| Podium | Review/webchat/payments bundle | ~$300–600/mo | Same category as Birdeye — leads are a byproduct of reviews, not the core product |
| Broadly | Review-to-lead conversion | Not published, positioned cheaper than Birdeye/Podium | Closest adjacent competitor, but still review-anchored, single-location |
| Apollo | B2B sales intelligence/prospecting | $49–119/user/mo | Wrong workflow — built for outbound sales teams doing cold prospecting, not inbound local-service leads |
| Smartlead / Instantly | Cold email infrastructure | $39–174+/mo | Wrong workflow — deliverability tooling, no qualification or booking layer |
| Smith.ai / Revboss (agencies) | Managed outreach | $600–10,000+/mo | Not self-serve, requires ongoing agency management, priced for larger budgets |
| HubSpot Sales Hub | General CRM | From $7/user/mo | Generic — no home-services-specific qualification logic or vertical integrations |

**Whitespace:** no identified competitor is a self-serve, AI-native tool purpose-built to qualify and book inbound home-services leads at a mid-market SMB price point. The nearest competitors (Birdeye, Podium, Broadly) solve an adjacent problem — reputation and communication — and generate leads as a side effect rather than the core product. Full-service agencies solve the actual problem but require an ongoing managed relationship at 5–15x the price point this plan targets.

**Distribution risk to note now, revisit in [Risks](#risks):** ServiceTitan, Housecall Pro, and Jobber are the operations software most target customers already use and trust. If Lead Engine doesn't integrate with (or eventually get acquired by) one of these, it's competing for attention against tools with an existing daily-use relationship.

## Customer Personas

**Persona 1 — "Solo Operator Sam."** Owner-operator of a <10-person HVAC, plumbing, or electrical business. Spends 10–15 hours/week on marketing and admin he has no formal training in. Runs Google/Facebook ads directly or through a low-cost freelancer, tracks leads in a spreadsheet or his phone's contacts. Biggest pain: he's also the technician, so a lead that comes in while he's on a job site often doesn't get a callback until evening — by which point the customer called a competitor.

**Persona 2 — "Growing Shop Owner Grace."** Runs a 10–30 person shop with a part-time office manager handling calls and scheduling. Spends $2,000–5,000/month spread across Google Ads, Yelp, Facebook, and HomeAdvisor with no unified view of which channel actually produces paying customers. Wants to scale bookings without hiring a full-time marketing hire she can't yet justify.

Both personas map to the pain points in the [Problem](#problem) section; Persona 1 is the sharper initial wedge (single decision-maker, faster sales cycle, most acutely feels the response-speed problem) with Persona 2 as the natural upsell to the Growth/Scale tiers — see [Pricing](#pricing).

## Pain Points

See [Problem](#problem) for the full breakdown with sourcing. Summarized by product implication:

| Pain Point | Product Response |
|---|---|
| Inconsistent lead volume | Multi-channel capture (web forms, Google/Facebook/Yelp/HomeAdvisor) in one system |
| Owner is the bottleneck | AI handles first response and qualification automatically, 24/7 |
| Ad spend spread too thin | Unified attribution dashboard shows which channel actually converts |
| Bad lead data | AI qualification filters and scores before the owner ever sees a lead |
| Slow follow-up | Automated response within minutes of inquiry, any hour |
| No attribution clarity | Lead-to-booked-job tracking tied back to source channel |

## Revenue Model

Subscription SaaS, billed monthly, tiered primarily by lead volume and feature depth rather than seats (this ICP is mostly single-decision-maker businesses where per-seat pricing doesn't map to value the way it does in larger B2B). A usage-based overage component for leads beyond the tier cap follows the 2026 trend toward flexible, usage-anchored SaaS pricing rather than rigid flat tiers (see [`research/MarketResearch.md § Competitor Pricing`](../research/MarketResearch.md#competitor-pricing)).

## Pricing

**This is a hypothesis, not a conclusion** — see [`research/MarketResearch.md § Open Questions`](../research/MarketResearch.md#open-questions-for-real-discovery-calls). It's derived from two anchors: competitor price points, and the ROI logic that a single booked HVAC/plumbing job is typically worth $300–$800+ in ticket value, so a tool that reliably books even a few extra jobs a month easily justifies a few hundred dollars in monthly spend.

| Tier | Price | What's Included | Target Persona |
|---|---|---|---|
| Starter | $149/mo | Up to 50 AI-qualified leads/mo, single-channel capture (web form + one ad platform), automated SMS/email follow-up, booking calendar sync | Solo Operator Sam |
| Growth | $349/mo | Up to 200 leads/mo, multi-channel capture (web + Google + Facebook + Yelp + HomeAdvisor), AI lead scoring, automated nurture sequences, unified attribution dashboard | Growing Shop Owner Grace |
| Scale | $799/mo | Unlimited leads, multi-location support, white-labeled reporting (for agencies managing multiple client accounts), priority support, custom AI prompt tuning per sub-vertical | Multi-location shops, agencies reselling to their own client base |

Positioning rationale: sits below full-service agencies ($2,500+/mo) by 3–15x, and roughly in line with or below Birdeye/Podium ($299–600/mo) — but with a fundamentally different value metric (booked jobs, not reviews or messages sent). This needs to be pressure-tested against real willingness-to-pay data before it's treated as final.

## Expansion

**Vertical expansion path:**
1. **Year 1:** HVAC, plumbing, electrical — similar buyer profile, sales cycle, and ticket value; the initial [SAM](#market-size).
2. **Year 2:** Roofing, landscaping, pest control — adjacent home-services verticals with comparable owner-operator dynamics.
3. **Year 3+:** Higher-consideration local services (dental, med spas, legal, real estate) — longer sales cycles and higher potential ACV, but a meaningfully different buyer sophistication level; treat as a distinct incubator idea to re-validate rather than an automatic extension.

**Platform expansion:**
- AI voice-agent for phone-based lead qualification — home-services inquiries are still disproportionately phone-based, and the 5-minute-response research finding applies as much to calls as to web forms.
- White-label/reseller motion for marketing agencies that already serve this ICP, turning Lead Engine into their AI qualification/booking layer rather than competing with them for the same customer relationship.

## Go-To-Market

**Phase 1 (0–90 days) — founder-led, organic:** Direct outreach to owner-operators in 1–2 initial metro areas, via local trade Facebook groups, trade association contacts, and HVAC/plumbing supplier trade shows. Content targeting the specific, provable pain point (see [SEO](#seo) and [Content Strategy](#content-strategy)).

**Phase 2 (90–180 days) — partner channel:** Integrate as a marketplace app with ServiceTitan, Housecall Pro, and/or Jobber — tools this ICP already trusts and uses daily — to piggyback on their distribution rather than competing for cold attention. Launch a referral program for existing customers (this ICP trusts peer recommendations from other operators heavily).

**Phase 3 (180+ days) — paid acquisition:** Only once CAC payback is proven organically (under 12 months, per the [SMB benchmark](../research/MarketResearch.md#smb--vertical-saas-economics)) — home-services keywords are expensive, dominated by well-funded national aggregators (Angi, HomeAdvisor, Thumbtack), so paid search is a scaling lever, not a starting one.

## SEO

Compete on long-tail, high-intent terms rather than head-on with broad "lead generation software" (a category dominated by large incumbent budgets — see [Market Size](#market-size)):

- "AI lead generation for HVAC contractors"
- "plumbing lead follow-up software"
- "automated booking software for home services"
- "how to respond to leads faster [trade]"

These terms have lower search volume but dramatically higher buyer intent — someone searching "plumbing lead follow-up software" is close to a purchase decision, unlike someone searching generic "lead generation."

## Content Strategy

- **ROI calculator** as a lead magnet: "how much revenue are you losing to slow follow-up?" — directly dramatizes the core, research-validated pain point (the 5-minute response window) with a concrete dollar figure, which is a stronger conversion driver than generic feature marketing.
- **Case studies** from early customers once they exist — this ICP trusts peer proof far more than software marketing copy.
- **Short-form video** aimed at contractors who research on mobile between jobs, not at a desk reading long-form content.
- **Trade association partnerships** for co-branded content and distribution.

## Sales Funnel

Free, opt-in trial with **no credit card required** — the target buyer is not software-savvy and is inherently skeptical of new tools; optimizing for trust over short-term conversion-rate optics is the right tradeoff here (opt-in-no-CC trials benchmark at a 14% median conversion vs. 4–6% for generic self-serve trials — see [`research/MarketResearch.md § Trial Conversion Benchmarks`](../research/MarketResearch.md#trial-conversion-benchmarks)).

Funnel: **Trial signup → guided onboarding call (not fully self-serve — this buyer needs hand-holding) → 14-day trial with real leads flowing through the system → paid conversion.** The guided onboarding step is a deliberate deviation from a pure self-serve motion; it raises short-term CAC but is necessary given this buyer's low software literacy, and is the mechanism that should also drive the lower, vertical-SaaS-style churn assumed in [LTV](#ltv).

## CAC

Target blended CAC: **$150–$300/customer**, within the general SMB benchmark range of $100–$400 (see [`research/MarketResearch.md § SMB / Vertical SaaS Economics`](../research/MarketResearch.md#smb--vertical-saas-economics)), achieved primarily through the low-CAC organic and partner channels in [Go-To-Market](#go-to-market) Phases 1–2 before any paid acquisition is added.

## LTV

Using the Growth tier ($349/mo) as a blended-average proxy:

- **Optimistic case:** 3% monthly churn (justified only if the guided-onboarding/deep-integration retention thesis in [Sales Funnel](#sales-funnel) holds) → LTV ≈ $349 / 0.03 ≈ **$11,633**
- **Conservative case:** 6% monthly churn (still better than the generic SMB ceiling of 5–8%, but not yet earning the full vertical-SaaS discount) → LTV ≈ $349 / 0.06 ≈ **$5,817**

Sanity-checking against the researched benchmark rather than taking either number at face value: a healthy LTV:CAC ratio for this segment is 2.5:1–4.2:1 (SMB to vertical-SaaS range). Working backward from the conservative $5,817 LTV, a 2.5:1–4:1 ratio implies a **sustainable CAC ceiling of roughly $1,450–$2,330** — well above the $150–300 organic-phase CAC target. That gap is real headroom, not a promise: it's what justifies investing in paid acquisition once Phase 3 of [Go-To-Market](#go-to-market) starts, not a claim that the business will actually run at a 20–40x ratio in practice.

## Risks

1. **CAC creep at scale** — home-services keywords are expensive and dominated by well-funded national aggregators (Angi, HomeAdvisor, Thumbtack); organic/partner-channel CAC will not hold once paid acquisition is needed to keep growing.
2. **Distribution dependency** — the Phase 2 marketplace-partner strategy (ServiceTitan/Jobber/Housecall Pro) creates real gatekeeper risk: any of these platforms could restrict marketplace access or build a competing native feature.
3. **AI qualification accuracy** — a wrongly qualified or dropped lead is a direct dollar cost to a small operator with thin margins; trust erodes fast if the AI errs, faster than for a typical software bug.
4. **Regulatory/compliance (TCPA)** — automated SMS and voice follow-up is subject to US TCPA rules; this needs real legal review before launch, not just a research note (flagged in [`research/MarketResearch.md § Open Questions`](../research/MarketResearch.md#open-questions-for-real-discovery-calls)).
5. **Vertical concentration** — early reliance on HVAC/plumbing/electrical means seasonal demand swings or a regional economic downturn hit disproportionately hard before [Expansion](#expansion) into other verticals is underway.

## Financial Model

**This supersedes the earlier flat-rate estimate** (100 customers × $199/mo = $19,900 MRR) now that pricing is tiered — see [Pricing](#pricing).

Assuming a Year 1 mix of 60% Starter / 30% Growth / 10% Scale:

```
Blended ARPU = (0.60 × $149) + (0.30 × $349) + (0.10 × $799)
             = $89.40 + $104.70 + $79.90
             = $274/mo
```

- **60-day target** (matches [Roadmap.md Phase 2](../../../Roadmap.md#phase-2--first-revenue-product), $1,000 MRR): ~4 blended customers — a low, achievable bar to prove the product works before scaling spend.
- **90-day case** (end of the [`BuildRoadmap`](#kpis)-style launch window): ~20 paying customers → ~$5,480 MRR.
- **Year 1 stretch case:** ~100 customers → ~$27,400 MRR — higher than the original flat-rate estimate because the tiered model captures more value from Growth/Scale customers, but contingent on the pricing hypothesis in [Pricing](#pricing) holding up.

## KPIs

Tracked weekly:

- Leads captured (by channel)
- Leads AI-qualified (%)
- Leads booked (lead → booked-job conversion rate)
- Median response time (minutes to first contact)
- Trial signups
- Trial → paid conversion rate
- MRR and net-new MRR
- Churned customers and monthly churn rate
- Blended CAC
- Customer NPS/CSAT

## Hiring Plan

Stays lean, consistent with the [core ABOS philosophy](../../../README.md#core-philosophy) of automating businesses rather than staffing them:

- **Founder-only** through Phases 1–2 of [Go-To-Market](#go-to-market) (builder + GTM).
- **First hire around $5–10K MRR:** fractional/contract customer success or growth marketer — protects founder time for continued building rather than an immediate full-time role.
- **Second hire around $20–30K MRR:** either an SDR/partnerships hire to scale the marketplace-partner channel, or a support/AI-tuning role if qualification accuracy (see [Risks](#risks)) needs dedicated attention.
- No full-time hire before MRR reliably covers 3+ months of runway for that role.

## Exit Opportunities

Documented for completeness per the incubator's scoring rigor — not the primary goal, which per the [ABOS mission](../../../README.md#mission) is durable recurring cash flow:

1. **Acquisition by a vertical-SaaS incumbent already serving this ICP** (ServiceTitan, Housecall Pro, Jobber) wanting to bolt on AI lead-gen/booking capability.
2. **Acquisition by a reputation/communication platform** (Birdeye, Podium) wanting a genuine qualification-and-booking engine rather than reviews-adjacent lead gen.
3. **Roll-up into a private-equity-backed vertical-software platform** aggregating multiple home-services tools.
4. **No exit — continue as a cash-flowing venture** within the ABOS portfolio, consistent with the repo's overall philosophy.
