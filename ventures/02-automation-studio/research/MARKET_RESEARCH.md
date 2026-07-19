---
title: Automation Studio — Market Research
version: 0.3.0
status: draft
author: Ryan Rutledge
last_updated: 2026-07-18
related:
  - ../README.md
  - ../PROJECT_CONTEXT.md
  - ../../00-incubator/Ideas/automation-reselling/MarketResearch.md
---

# Market Research

> **Status note:** first draft, sharpened twice (2026-07-18). First pass narrowed to "Teams AI agents on business data, Airtable-first." Second pass narrowed further to a specific niche — new-hire onboarding/provisioning — once Ryan's actual capability list (room assignment, employee batching to tenant, org onboarding) made clear this fits better than the initial marketing-agency framing. Not yet rebuilt to the full gold-standard flagship format described in [Architecture.md § Document Dependency Chain](../../../Architecture.md#document-dependency-chain), and not yet validated against real discovery calls.

## Table of Contents

- [Summary](#summary)
- [The Commoditization Trap — Read This First](#the-commoditization-trap--read-this-first)
- [Primary Niche: New-Hire Onboarding & Provisioning Agent](#primary-niche-new-hire-onboarding--provisioning-agent)
- [Competitive Landscape for the Onboarding Niche](#competitive-landscape-for-the-onboarding-niche)
- [Engagement Model & Pricing](#engagement-model--pricing)
- [Adjacent/Later Opportunity: Tenant Migration & M&A](#adjacentlater-opportunity-tenant-migration--ma)
- [Deprioritized: Marketing-Agency Airtable Niche](#deprioritized-marketing-agency-airtable-niche)
- [Microsoft's Native Agent Tooling](#microsofts-native-agent-tooling)
- [MVP / Portfolio Piece](#mvp--portfolio-piece)
- [Risks](#risks)
- [Open Questions](#open-questions)
- [Sources](#sources)

## Summary

Custom AI agents embedded in Microsoft Teams that read and act on real business data — not a notification integration, a conversational agent that takes real actions. Primary wedge: **new-hire onboarding and provisioning automation** for growing companies, using Airtable as the data layer (Ryan's proven strength) behind a Teams-native conversational front end.

## The Commoditization Trap — Read This First

**"Airtable + Teams integration" as a search term returns almost entirely commodity, mostly-free tooling**: Zapier, Make, n8n, Albato, and Airtable's own native "Send MS Teams message" automation action all already do basic record-change-to-Teams-notification flows, in some cases in under 5 minutes with no code ([source](https://albato.com/connect/airtable-with-microsoft_teams)). If the pitch is "I'll connect your Airtable to Teams," that's competing with a free built-in feature. The actual product is the agent layer that takes real action, not the connector — true regardless of which specific niche this gets applied to.

## Primary Niche: New-Hire Onboarding & Provisioning Agent

**This is the "yes please help us" pain point, quantified:**

- Manual Microsoft 365 onboarding takes **30–45 minutes per user** and requires admins to switch across multiple separate portals, with **18+ manual actions per user** ([source](https://blog.admindroid.com/microsoft-365-user-onboarding-workflow-for-easy-user-provisioning/))
- Manual onboarding processes can cost **$4,000–7,000 per employee** once HR/IT time is fully accounted for, with 20–30% of that time spent waiting on backend processing or repeating steps ([source](https://www.beyondintranet.com/blog/hidden-cost-of-manual-onboarding-microsoft-365/))
- Automated onboarding workflows (via Power Automate/Entra ID Lifecycle Workflows) can reduce admin time by up to 70%, per vendor-reported figures — directionally credible given how manual the baseline process is, though vendor numbers should be treated as an upper bound the same way chatbot-deflection vendor numbers were in the earlier incubator research ([source](https://learn.microsoft.com/en-us/power-platform/guidance/case-studies/streamline-employee-onboarding))
- Different admins following different manual processes creates real configuration inconsistency and compliance risk, not just wasted time ([source](https://easyentra.com/the-complete-guide-to-m365-user-onboarding/))

**Why this is the right first niche, specifically:**
- It's *recurring*, not episodic — every single hire re-triggers the pain, unlike a one-time migration project
- It has a **quantified dollar figure** to open a pitch with ($4,000–7,000/hire in overhead) — concrete, scary, and easy to contrast against a project fee
- It maps directly onto skills Ryan already has and described: room/resource assignment, batching employees into the right tenant structure, getting people set up in Teams
- Companies actively hiring are identifiable *right now* via public job-posting activity — a real, targetable acquisition signal, not a cold guess

## Competitive Landscape for the Onboarding Niche

The players here don't actually compete with a bespoke Teams-native agent — they compete for a different sale entirely:

| Player | Model | Pricing | Why It's Not a Direct Competitor |
|---|---|---|---|
| Rippling | Full HR+IT+Finance platform, HR-system-driven provisioning | $35/mo base + $8+/employee/mo | Requires adopting Rippling as the system of record — a rip-and-replace decision, not an add-on |
| BambooHR | SMB-focused HRIS with identity lifecycle integrations | $10–17/employee/mo | Same rip-and-replace dynamic; full HRIS, not an embedded agent |
| Zluri | SaaS/identity governance, non-SCIM app provisioning | Enterprise-focused | Backend identity governance tooling, no conversational/Teams-native front end |
| Microsoft Entra ID Governance | Native directory-driven lifecycle workflows | Included in some M365/Entra tiers | Powerful but configuration-heavy, no natural-language interface, still requires an admin who knows the tooling |

**The gap:** none of these are a lightweight, Teams-embedded conversational agent that a growing company can adopt *without* replacing their existing HR/data tools. A company using Airtable (or a spreadsheet) to track new hires, too small to justify Rippling's per-employee pricing structure or a full Entra ID Governance rollout, but still bleeding 30–45 minutes and real dollars per hire, is underserved by all four of the above.

## Engagement Model & Pricing

**Ryan's stated preference (2026-07-18):** avoid low-value ongoing maintenance work. Two acceptable models:
1. **Build + train** — build the system, train the client's existing tech team to run/extend it, one-time (higher) project fee, no ongoing retainer
2. **Premium retainer** — if staying involved, charge a high rate that reflects real expertise, not a commodity $500/mo maintenance fee

This changes the pricing framing from the earlier generic-automation research (which assumed $500–3,000/mo retainers as the default model). Given the onboarding niche's quantified pain ($4,000–7,000/hire in overhead), a project fee anchored to *avoided cost* rather than build hours is defensible — e.g., a company hiring 20 people/year losing $4,000+/hire to manual overhead has an $80,000+/year problem; a $10,000–25,000 build-and-train engagement is an easy yes against that math, and doesn't require an ongoing retainer to be worth it to either party.

**Not yet validated against real willingness-to-pay** — this is a pricing hypothesis derived from the avoided-cost math above, not a tested number.

## Adjacent/Later Opportunity: Tenant Migration & M&A

Also a real, well-documented pain point — but not the first wedge:

- Tenant-to-tenant migrations during M&A involve identity conflicts, broken Teams/SharePoint permissions, and legal-hold complexity that can block mailbox migration entirely ([source](https://www.coreview.com/blog/microsoft-365-tenant-to-tenant-migration-a-comprehensive-guide-for-it-leaders))
- Enterprise migrations (5,000+ users) take 4–9 months; IT integration is often budgeted at only 2% of total M&A integration cost despite being critical to merger success ([source](https://www.epcgroup.net/microsoft-365-tenant-migration-m-and-a-playbook-2026))
- This space already has established, larger consultancies (the "playbook" guides found in research read like enterprise-consulting marketing, not solo-operator territory)

**Why it's second, not first:** episodic (only fires during an active M&A event, a much narrower sales trigger than "every company that's hiring"), and the compliance/legal-hold complexity likely requires expertise beyond bot-building alone. Worth revisiting once the onboarding niche has produced case studies and real client relationships — those clients may themselves go through M&A later and become a natural upsell.

## Deprioritized: Marketing-Agency Airtable Niche

Preserved from the first sharpening pass, not deleted — still a viable fallback if the onboarding niche doesn't convert:

Marketing/advertising agencies are Airtable's single largest user segment (10% of reviewers from small companies), with real estate, nonprofits, and general ops/PM teams also heavy users ([source](https://bloomberry.com/data/airtable/)). The gap identified then still holds — a Teams-embedded agent for querying/acting on Airtable content-calendar data — but it doesn't map as directly onto Ryan's demonstrated skills (room assignment, tenant batching, org onboarding) as the onboarding niche does, and lacks as sharp a quantified pain point.

## Microsoft's Native Agent Tooling

Still directly relevant regardless of niche — Microsoft's Build 2026 conference pushed hard into "agentic computing" ([source](https://windowsnews.ai/article/build-2026-reveals-microsofts-agent-first-ai-play-azure-copilot-and-the-value-chain-converge.428607)):

- **Teams AI Library** — framework for custom-engine agents natively in Teams (prompts, actions, model integration, UI)
- **Copilot Studio's multi-agent framework** — built on Semantic Kernel, low-code agent orchestration
- **Azure Functions repositioned for agents** — native M365/Teams connectors, MCP support, Durable Tasks added at Build 2026

Ryan chose to hand-roll on Teams AI Library + Azure Functions rather than build on Copilot Studio (2026-07-18) — see [`../DECISIONS.md`](../DECISIONS.md) for the reasoning.

## MVP / Portfolio Piece

**Concrete recommendation: a "New-Hire Onboarding Agent" demo, built with sample data, no real client required to start.**

Scope: a Teams bot (Azure Functions + Teams AI Library) that, triggered by a new record in a demo Airtable "New Hires" base (or an @mention with hire details), automatically:
1. Assigns the new hire to the correct Teams channels/groups for their role
2. Assigns room/resource access (physical or virtual, per whatever's most demoable)
3. Notifies the manager and IT with a live checklist of what's been completed automatically vs. what still needs manual action
4. Tracks completion status back in Airtable

This is buildable within Ryan's available hours (10–20 hrs/week, realistic 1–3 week timeline for a demo-quality build) using entirely fake/sample data — no client relationship needed before starting. It directly demonstrates the exact pain point ($4,000–7,000/hire, 30–45 minutes, 18+ manual actions) with a live before/after, which is a far stronger sales tool than a written pitch alone. A short recorded walkthrough (Loom-style) of the demo becomes reusable outreach material.

## Risks

- **Positioning collapse risk:** if marketing materials aren't disciplined about "agent that acts" vs. "integration that notifies," prospects anchor to the free-tool price point, not the value-based project-fee anchor
- Every engagement is still custom by default unless deliberately templated per the productization principle from the original automation-reselling research
- Companies with real onboarding pain at scale (500+ employees, high compliance needs) are more likely to already be evaluating Rippling/Entra ID Governance rather than a solo operator — the sweet spot is real but has a ceiling; very large enterprises are a different sales motion entirely
- Microsoft's own Copilot Studio improving over time is as much competition as infrastructure

## Open Questions

Real discovery calls needed before locking positioning or pricing:

- Does the $4,000–7,000/hire figure resonate as-is with real prospects, or do they perceive their actual cost differently (e.g., IT time is "free" internally even if not literally free)?
- What company size sweet spot actually converts — 50–150 employees vs. 150–300 vs. smaller/larger?
- Realistic first-engagement price point given no formal agency portfolio yet — should the first 1–2 clients be discounted/free for case-study purposes, given the build+train (not retainer) model?
- Fastest acquisition channel given 10–20 hrs/week: warm professional network vs. LinkedIn outreach targeting companies with visible hiring activity vs. partnership channels (recruiting agencies, HR consultants who already touch these clients)

## Sources

- [The Complete Guide to M365 User Onboarding — EasyEntra](https://easyentra.com/the-complete-guide-to-m365-user-onboarding/)
- [Microsoft 365 User Onboarding Workflow For Easy User Provisioning — AdminDroid](https://blog.admindroid.com/microsoft-365-user-onboarding-workflow-for-easy-user-provisioning/)
- [The Hidden Cost of Manual Onboarding in Microsoft 365](https://www.beyondintranet.com/blog/hidden-cost-of-manual-onboarding-microsoft-365/)
- [Epiq streamlines employee onboarding with Power Automate — Microsoft Learn case study](https://learn.microsoft.com/en-us/power-platform/guidance/case-studies/streamline-employee-onboarding)
- [Understanding Automated Provisioning Tools in 2026 — Zluri](https://www.zluri.com/blog/automated-provisioning-tools)
- [Sync identities from Rippling to Microsoft Entra ID](https://techcommunity.microsoft.com/blog/microsoft-entra-blog/sync-identities-from-rippling-to-microsoft-entra-id/4279690)
- [Microsoft 365 Tenant-to-tenant Migration — CoreView](https://www.coreview.com/blog/microsoft-365-tenant-to-tenant-migration-a-comprehensive-guide-for-it-leaders)
- [Microsoft 365 Tenant Migration for M&A: The Complete Playbook 2026](https://www.epcgroup.net/microsoft-365-tenant-migration-m-and-a-playbook-2026)
- [Best Employee Onboarding Software for 2026 — pricing comparison](https://www.siit.io/blog/best-employee-onboarding-software)
- [Build 2026 Reveals Microsoft's Agent-First AI Play](https://windowsnews.ai/article/build-2026-reveals-microsofts-agent-first-ai-play-azure-copilot-and-the-value-chain-converge.428607)
- [Airtable + Microsoft Teams Integration — Albato](https://albato.com/connect/airtable-with-microsoft_teams)
- [Companies using Airtable (active customer list)](https://bloomberry.com/data/airtable/)
