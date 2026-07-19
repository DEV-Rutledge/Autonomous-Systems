---
title: Lead Engine — Market Research Log
version: 0.1.0
status: draft
author: Ryan Rutledge
last_updated: 2026-07-18
related:
  - ../docs/BUSINESS_PLAN.md
---

# Market Research Log

Raw findings backing the assumptions in [`docs/BUSINESS_PLAN.md`](../docs/BUSINESS_PLAN.md). This is a living log — add to it as real discovery calls happen (incubator stage 3); don't just trust secondary research forever.

## Table of Contents

- [Market Size](#market-size)
- [Target Sub-Vertical Sizing](#target-sub-vertical-sizing)
- [Competitor Pricing](#competitor-pricing)
- [SMB / Vertical SaaS Economics](#smb--vertical-saas-economics)
- [Trial Conversion Benchmarks](#trial-conversion-benchmarks)
- [Validated Pain Points](#validated-pain-points)
- [Open Questions for Real Discovery Calls](#open-questions-for-real-discovery-calls)

## Market Size

Estimates vary significantly by research firm and methodology — flagging the spread rather than picking one number to look precise:

- Lead generation software market: $5.88B (2025) → $6.44B (2026), 9.6% CAGR, reaching ~$8.9B by 2030 at 8.4% CAGR ([Fortune Business Insights](https://www.fortunebusinessinsights.com/lead-generation-software-market-111487))
- A competing estimate puts 2026 market size at $9.87B with a 14.82% CAGR — over 50% higher than the above, illustrating how fragmented/inconsistent this category's market-sizing data is ([Research and Markets](https://www.researchandmarkets.com/reports/5989778/lead-generation-software-market-report))

**Takeaway:** treat any single TAM figure as directional, not precise. The category is large enough (multi-billion dollar, high-single/low-double-digit CAGR) that market size is not the constraining factor for a new entrant — go-to-market execution is.

## Target Sub-Vertical Sizing

Initial ICP = home services (HVAC, plumbing, electrical):

- ~2.5 million home service businesses in the US overall; ~6.1M home services professionals in 2023, projected to reach 7.2M by 2028 ([Valve & Meter](https://valveandmeter.com/blog/marketing/how-many-home-services-professionals-us/))
- ~120,461 Heating & Air-Conditioning Contractor firms in the US as of 2026 ([IBISWorld](https://www.ibisworld.com/united-states/number-of-businesses/heating-air-conditioning-contractors/1945/))
- ~125,000 firms operating as plumbing/heating/air-conditioning contractors combined, ~70% independent shops with fewer than 10 employees ([AnythingResearch](https://www.anythingresearch.com/industry/Plumbing-Heating-Air-Conditioning-Contractors.htm))
- ~132,000 plumbing-service companies and ~117,000 HVAC companies counted separately in another source, with ~990,000 total plumbing and HVAC contractor *establishments* (a broader unit than "firms") as of 2020 ([Statista](https://www.statista.com/statistics/1122362/number-plumbing-hvac-contractor-smbs-firm-size-us/))

**Takeaway:** even the most conservative reading (~120,000–260,000 firms across HVAC + plumbing + electrical) puts the initial addressable firm count well into six figures, and the overwhelming majority are small (<10 employees) — matching the target persona.

## Competitor Pricing

| Product | Category | Entry Price | Notes |
|---|---|---|---|
| [Birdeye](https://birdeye.com/) | Reputation + CX platform | ~$299/mo (annual) | Multi-location focus, 3,000+ integrations incl. ServiceTitan |
| [Podium](https://www.podium.com/) | Review/webchat/payments bundle | ~$300–$600/mo | Essentials plan ~$399/mo annual |
| Broadly | Review-to-lead conversion | Positioned "faster and cheaper" than Birdeye/Podium, exact price not published | Single-location focus |
| [Apollo](https://www.apollo.io/) | B2B sales intelligence/prospecting | $49–$119/user/mo | Wrong ICP — built for outbound sales teams, not local service owners |
| [Smartlead](https://www.smartlead.ai/) | Cold email infrastructure | $39–$174+/mo | Wrong ICP — deliverability tool, not a qualification/booking engine |
| Smith.ai (full-service) | Managed outreach | $600–$10,000/mo | Requires ongoing agency management |
| Revboss (full-service) | Managed outreach | From $2,500/mo | Requires ongoing agency management |
| HubSpot Sales Hub | General CRM/sales tools | From $7/user/mo | Cheap floor, but generic — not vertical-specific |

Source: [Birdeye alternatives comparison](https://birdeye.com/alternatives/podium-alternatives/), [Apollo vs Smartlead](https://www.apollo.io/insights/apollo-vs-smartlead), [B2B lead gen pricing guide](https://orbitforms.ai/blog/lead-generation-platform-pricing)

**Takeaway:** there's a clear gap between commodity prospecting/cold-email tools (~$40–120/mo, wrong workflow for inbound local-service leads) and enterprise reputation platforms (~$300–600/mo, review-centric rather than qualification/booking-centric) and full-service agencies ($2,500+/mo, not self-serve). No identified competitor is a purpose-built, self-serve, AI-native qualification-and-booking engine for this ICP at a mid-market SMB price point.

## SMB / Vertical SaaS Economics

- SMB CAC typically $100–$400, sales cycles 1–3 months ([Data-Mania](https://www.data-mania.com/blog/cac-benchmarks-for-b2b-tech-startups-2025/))
- SMB segment (<$15K ACV) target LTV:CAC ≈ 2.5:1; vertical SaaS overall runs 3.5:1–4.2:1 due to longer customer lifetimes and lower churn from switching costs ([SaaSHero](https://www.saashero.net/strategy/b2b-saas-ltv-cac-benchmarks/))
- SMB monthly churn often 5–8% without intervention; CAC payback under 12 months is critical given SMB volatility ([Foundry CRO](https://foundrycro.com/blog/ltv-cac-ratio-benchmarks-2026/))
- Overall B2B SaaS churn ~3.5% (2.6% voluntary + 0.8% involuntary); above 7% monthly is concerning, below 3% is excellent ([Eagle Rock CFO](https://www.eaglerockcfo.com/blog/research/saas-finance-metrics-benchmarks))

**Takeaway:** the realistic churn range for a new, unproven product in this ICP is the higher SMB band (5–8%/mo) until retention mechanisms (deep tool integration, booking-calendar lock-in) bring it down toward the vertical-SaaS band (implying sub-3% is achievable only once the product is genuinely embedded in daily workflow — not from day one).

## Trial Conversion Benchmarks

- Self-serve, no-sales-contact free trial: 4–6% is good, 10–15% is great ([Userpilot](https://userpilot.com/blog/saas-average-conversion-rate/))
- Opt-in trial, no credit card required: median 14%, top quartile 22%+
- Opt-out trial, credit card required: 25–35% good, 50–60% great ([Growthspree](https://www.growthspreeofficial.com/blogs/b2b-saas-trial-to-paid-conversion-rate-benchmarks-2026-by-trial-type-acv-length-credit-card))

**Takeaway:** given the target buyer (local service owner, not software-savvy, skeptical of new tools) an opt-in, no-credit-card trial with guided onboarding is the right starting point — optimizing for trust over short-term conversion-rate optics.

## Validated Pain Points

From industry write-ups on small-business lead generation challenges ([Inc.](https://www.inc.com/david-finkel/5-lead-generation-issues-most-small-businesses-face-how-to-solve-them.html), [CIENCE](https://www.cience.com/blog/lead-generation-challenges)):

1. **Inconsistent lead volume** — the default complaint when small business owners are asked about their #1 marketing issue
2. **Time constraints** — the owner is often doing sales, marketing, *and* the actual service work
3. **Budget spread too thin** — small amounts across Google/Facebook/LinkedIn/directories, none funded to real momentum
4. **Lead quality issues** — bad contact data, wasted follow-up time
5. **Slow follow-up** — the 5-minute response window dramatically affects conversion, but owner-operators can't hit it because they're on a job site
6. **No attribution clarity** — owners often can't say which channel is actually producing customers

**Takeaway:** these map directly to product requirements — AI qualification for lead quality, automated instant follow-up for the 5-minute window, multi-channel capture with unified attribution for the "budget spread thin" problem.

## Open Questions for Real Discovery Calls

These are the things secondary research can't answer — need real conversations with 10–15 target operators (incubator stage 3) before locking in the scorecard decision:

- Actual willingness to pay at each tier — is $149/$349/$799 (see [BUSINESS_PLAN.md § Pricing](../docs/BUSINESS_PLAN.md#pricing)) realistic, or does it need adjusting?
- How much of the "AI qualification" value prop actually lands with a skeptical, non-technical buyer vs. sounding like hype?
- Which existing tool (if any) is the true incumbent to displace — ServiceTitan/Jobber/Housecall Pro (operations software they already trust), or nothing (spreadsheets/memory)?
- TCPA compliance requirements for automated SMS/voice follow-up — needs actual legal review, not just a research note (see [BUSINESS_PLAN.md § Risks](../docs/BUSINESS_PLAN.md#risks))
