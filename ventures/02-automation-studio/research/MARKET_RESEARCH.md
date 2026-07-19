---
title: Automation Studio — Market Research
version: 0.1.0
status: draft
author: Ryan Rutledge
last_updated: 2026-07-18
related:
  - ../README.md
  - ../PROJECT_CONTEXT.md
  - ../../00-incubator/Ideas/automation-reselling/MarketResearch.md
---

# Market Research

> **Status note:** this is a first draft carried over from [`ventures/00-incubator/Ideas/automation-reselling/MarketResearch.md`](../../00-incubator/Ideas/automation-reselling/MarketResearch.md), not yet rebuilt to the full gold-standard flagship format (Executive Summary → Sources) described in [Architecture.md § Document Dependency Chain](../../../Architecture.md#document-dependency-chain). Same status as `ventures/01-lead-engine/research/MARKET_RESEARCH.md`. Real discovery calls with target businesses in the Microsoft 365/Teams ecosystem haven't happened yet.

## Table of Contents

- [Summary](#summary)
- [Pricing Evidence](#pricing-evidence)
- [Target Customer](#target-customer)
- [Niche Angle: Microsoft 365 / Teams / Azure](#niche-angle-microsoft-365--teams--azure)
- [Revenue Evidence](#revenue-evidence)
- [Risks](#risks)
- [Open Questions](#open-questions)
- [Sources](#sources)

## Summary

Build and deliver bespoke workflow automations for other businesses — lead intake, reporting pipelines, CRM syncs, platform migrations — priced against value delivered (hours/cost saved), not hours spent building. No product-build phase before the first sale is possible, which is the main reason this was chosen over five other candidate ideas — see [`ventures/00-incubator/Ideas/automation-reselling/Scorecard.md`](../../00-incubator/Ideas/automation-reselling/Scorecard.md).

## Pricing Evidence

- Productized packages: fixed scope, fixed quote, priced to client value not build time ([source](https://digital-identity-architects.com/blog/n8n-agency.html))
- Platform migrations (e.g. Zapier → n8n): $5,000–15,000 for ~2 weeks of work
- Retainer maintenance: $500+/month minimum; a single automated reporting pipeline can be worth $1,500–3,000/month to an agency client
- Platform costs are low: Make.com Pro ~$50/mo (10,000 executions), n8n Core ~$9/mo (10,000 credits) ([source](https://latenode.com/blog/n8n-vs-make-com-2025-complete-platform-comparison-pricing-analysis-for-workflow-automation))

## Target Customer

Two lanes, per the incubator research:
1. Direct SMBs with a specific, describable manual process — faster sales cycle, good for early traction
2. Marketing/creative agencies wanting automation built for them — larger deals, longer sales cycle, higher retainer value

**Refined by the niche angle below:** within both lanes, prioritize businesses already operating inside Microsoft 365/Teams, where Ryan's existing experience is a real differentiator rather than a generic pitch.

## Niche Angle: Microsoft 365 / Teams / Azure

**Not yet independently researched — flagged as the top open question.** The hypothesis: most n8n/Make automation agencies build outside the Microsoft ecosystem (Zapier/Make/n8n webhook integrations to generic SaaS tools), while businesses that live inside Microsoft 365/Teams for their daily operations are underserved by that positioning. Ryan's Teams-bot-on-Azure-Functions experience (event-driven, keyword/@mention-triggered actions on linked data) is a direct, demonstrable capability in this space, not a claimed specialty.

This needs real validation before it becomes the public positioning — see [Open Questions](#open-questions).

## Revenue Evidence

- Documented case: $25,000 MRR in 4 months from a solo n8n-focused operator (self-reported, treat as upper-bound anecdote) ([source](https://www.browseract.com/blog/best-high-income-case-analysis-how-to-achieve-25000-monthly-revenue-with-n8n))
- Broader pattern: lean, specialized automation agencies reach $10,000–50,000/month within 6–12 months, contingent on consistent client acquisition ([source](https://learnforge.dev/blog/n8n-automation-agency/))
- Two "Scale"-tier clients alone ($7,000–12,000/month combined) can cover a solo founder's income target while leaving capacity for more clients

**Read against the stated goal:** even the conservative end of this range (a couple of solid retainer clients) closes most of the gap from $4K to $10K/month combined income, without requiring the $25K/month upper-bound case to hold.

## Risks

Carried over from the incubator research, still applicable:

- Every engagement is custom by default — doesn't compound like a SaaS product unless deliberately productized within the chosen niche
- Requires real discovery/scoping skill, not just build skill — underpricing risk on fixed-quote work
- Client dependency risk if a maintenance retainer client churns
- Resisting niching (taking any automation work for anyone) dilutes the value-based pricing story

**New, specific to the Microsoft 365/Teams niche:** if that positioning doesn't actually resonate in initial outreach, the fallback is the broader generic automation-agency market — still viable per the evidence above, just more competitive.

## Open Questions

Real discovery calls needed before locking positioning or pricing:

- Does the Microsoft 365/Teams/Azure niche angle actually resonate with real prospects, or does it narrow the addressable market too much for an early-stage solo operator?
- What's the realistic first-engagement price point for someone with a strong technical background but no formal agency portfolio yet — should the very first 1–2 clients be discounted/free for case-study purposes?
- Which acquisition channel converts fastest given only 10–20 hrs/week: warm professional network (fastest, but limited pool) vs. cold LinkedIn outreach (larger pool, slower) vs. marketplace/partnership channels (slowest to set up, best long-term leverage)?

## Sources

- [n8n Agency: Pricing, Niching & Delivery That Works](https://digital-identity-architects.com/blog/n8n-agency.html)
- [N8N vs Make.com 2025: Complete Platform Comparison + Pricing](https://latenode.com/blog/n8n-vs-make-com-2025-complete-platform-comparison-pricing-analysis-for-workflow-automation)
- [How I Achieved $25,000 Monthly Revenue with n8n](https://www.browseract.com/blog/best-high-income-case-analysis-how-to-achieve-25000-monthly-revenue-with-n8n)
- [How to Start an Automation Agency with n8n in 2026](https://learnforge.dev/blog/n8n-automation-agency/)
