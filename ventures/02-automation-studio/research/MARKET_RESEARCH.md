---
title: Automation Studio — Market Research
version: 0.2.0
status: draft
author: Ryan Rutledge
last_updated: 2026-07-18
related:
  - ../README.md
  - ../PROJECT_CONTEXT.md
  - ../../00-incubator/Ideas/automation-reselling/MarketResearch.md
---

# Market Research

> **Status note:** first draft, sharpened once (2026-07-18) after Ryan clarified his strongest actual skill (Teams bots on Azure Functions integrated with Airtable) and interest in going deeper on agents. Not yet rebuilt to the full gold-standard flagship format described in [Architecture.md § Document Dependency Chain](../../../Architecture.md#document-dependency-chain), and not yet validated against real discovery calls.

## Table of Contents

- [Summary](#summary)
- [The Commoditization Trap — Read This First](#the-commoditization-trap--read-this-first)
- [Microsoft's Native Agent Tooling](#microsofts-native-agent-tooling)
- [Pricing Evidence](#pricing-evidence)
- [Target Customer](#target-customer)
- [Revenue Evidence](#revenue-evidence)
- [Risks](#risks)
- [Open Questions](#open-questions)
- [Sources](#sources)

## Summary

Custom AI agents embedded in Microsoft Teams that read and act on real business data — starting with Airtable (Ryan's proven strength), generalizing to other backends. Not a notification integration; a conversational agent that takes real actions via natural language and @mentions, priced as a premium capability rather than a commodity workflow connector.

## The Commoditization Trap — Read This First

**"Airtable + Teams integration" as a search term returns almost entirely commodity, mostly-free tooling**: Zapier, Make, n8n, Albato, and Airtable's own native "Send MS Teams message" automation action all already do basic record-change-to-Teams-notification flows, in some cases in under 5 minutes with no code ([source](https://albato.com/connect/airtable-with-microsoft_teams)). If the pitch is "I'll connect your Airtable to Teams," that's competing with a free built-in feature.

**The actual product is the agent layer, not the connector.** What Ryan has built — a bot that listens for keywords/@mentions and takes real actions against linked data — is categorically different from a one-way notification. This distinction needs to be explicit in every piece of positioning/marketing material; conflating the two undersells the offering into a market that's already been won by free tools.

## Microsoft's Native Agent Tooling

Directly relevant, and validates going deeper on agents now rather than later: Microsoft's Build 2026 conference pushed hard into "agentic computing" as a primary theme ([source](https://windowsnews.ai/article/build-2026-reveals-microsofts-agent-first-ai-play-azure-copilot-and-the-value-chain-converge.428607)):

- **Teams AI Library** — the framework for building custom-engine agents natively in Teams, handling prompts, actions, model integration, and UI ([source](https://microsoft.github.io/copilot-camp/pages/custom-engine/teams-ai/))
- **Copilot Studio's multi-agent framework** — built on Semantic Kernel, lets developers define agent orchestration with natural language or low-code tools ([source](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/integrate-custom-azure-ai-agents-with-copilot-studio-and-m365-copilot/4405070))
- **Azure Functions repositioned as "the best programming model for event-driven apps and agents"** — with native connectors to M365/Teams, MCP support, and Durable Tasks added at Build 2026 ([source](https://techcommunity.microsoft.com/blog/AppsonAzureBlog/azure-functions-at-build-2026-update/4524075))
- Microsoft's own agents can "independently break down complex tasks, call APIs, query databases, and delegate sub-tasks to other agents" within governance boundaries — this is explicitly the direction the whole ecosystem is moving

**Read:** Ryan is already fluent in the Azure Functions + Teams half of this stack. The gap to close is the AI-agent/LLM half — and Microsoft is actively building first-party tooling (Teams AI Library, Copilot Studio) that lowers the cost of closing it, rather than requiring everything to be hand-rolled. Worth evaluating Copilot Studio directly as a faster path to a sellable agent than building the orchestration layer from scratch.

## Pricing Evidence

Two very different price tiers exist depending on whether the product is "connector" or "agent" — this is the core strategic choice:

**Commodity connector tier (avoid competing here):**
- Zapier/Make/n8n/Albato: free to ~$20–100/mo for basic Airtable↔Teams automations

**Consulting/implementation tier (Airtable-specific):**
- Basic Airtable implementations: from $1,299 ([source](https://www.business-automated.com/tutorials/airtable-consultant-pricing))
- Standard consulting projects (discovery + build): $5,000–15,000
- Mid-market: $150–300/hour or $8,000–30,000/project
- US-based hourly rates: $150–200/hr

**Custom AI-agent/chatbot tier (the real target market):**
- Simple rule-based chatbot: $5,000–30,000
- **AI-powered chatbot with real NLP: $75,000–150,000** (agency-built) ([source](https://sitegpt.ai/blog/enterprise-ai-chatbot-platforms-cost-guide))
- Enterprise AI chatbots: $30,000–1,000,000
- Annual maintenance: 15–20% of build cost
- For reference, Microsoft's own Copilot Studio costs businesses **$1,000/month for 2,000 sessions** just for the platform — meaning real budget already flows toward "Teams + AI agent" spend before any custom work is even purchased

**Read:** the $75K–150K agency figure is an upper anchor, not a realistic solo-operator SMB price — but it establishes that "AI-powered Teams agent" is priced in a completely different universe than generic workflow automation ($500–3,000/mo retainers from the original automation-reselling research). A realistic SMB-focused wedge likely sits well below the agency ceiling — plausibly $2,000–15,000 for an initial build plus a $300–1,000/mo maintenance retainer — still multiples above plain Airtable consulting or generic Make.com/n8n work. This needs real validation, not treated as settled.

## Target Customer

Airtable's heaviest-use industries, per direct research ([source](https://bloomberry.com/data/airtable/), [source](https://builtonair.com/ultimate-airtable-guides/the-ultimate-guide-to-airtable-in-the-real-estate-industry/)):

1. **Marketing/advertising agencies** — the single largest segment (10% of reviewers from small companies); manage content calendars, campaign tracking, vendor details in Airtable
2. **Real estate** — listings, leads, contracts; increasingly Airtable-native for small/mid brokerages
3. **Nonprofits** — fundraising, program/supply tracking, org management
4. **Operations/project management teams generally** — flexible systems without heavy engineering overhead

All four are plausible ICPs for a Teams-embedded agent that lets non-technical staff query/act on their Airtable data conversationally instead of opening the Airtable UI. Marketing agencies are the strongest early candidate: largest segment, already comfortable paying for tools, and often already using Teams internally.

## Revenue Evidence

Carried over from the broader automation-reselling research (still relevant as a floor, not the target):

- Documented case: $25,000 MRR in 4 months from a solo n8n-focused operator (self-reported, treat as upper-bound anecdote)
- Broader pattern: lean, specialized automation agencies reach $10,000–50,000/month within 6–12 months
- Two "Scale"-tier clients ($7,000–12,000/month combined) can cover a solo founder's income target

**With the sharper agent-tier pricing above, the ceiling is plausibly higher** — a single well-scoped AI-agent build at $5,000–15,000 plus retainer could match what previously required several generic-automation clients. This hasn't been validated against real willingness-to-pay yet.

## Risks

- **Positioning collapse risk:** if marketing materials aren't disciplined about "agent that acts" vs. "integration that notifies," prospects will anchor to the free-tool price point, not the agency-tier price point. This is the single biggest risk to the whole pricing thesis above.
- Every engagement is still custom by default — the productization discipline from the original automation-reselling research still applies
- Client dependency risk on a maintenance retainer
- Microsoft's own Copilot Studio is a potential competitor as much as a tool — if it gets good enough at low-code agent building, it could commoditize part of this market too; worth using it as infrastructure rather than positioning against it

## Open Questions

Real discovery calls needed before locking positioning or pricing:

- Which of the four target industries (marketing agencies, real estate, nonprofits, ops teams) should be the very first outreach focus — probably marketing agencies given segment size, but unvalidated
- Realistic first-engagement price point for a strong technical background but no formal agency portfolio — should the first 1–2 clients be discounted/free for case-study purposes?
- Build vs. buy on the agent orchestration layer: hand-rolled Teams AI Library + Azure Functions vs. Copilot Studio as a faster-to-market foundation — needs a technical spike, not just research
- Fastest acquisition channel given 10–20 hrs/week: warm professional network vs. cold LinkedIn outreach vs. marketplace/partnership channels

## Sources

- [Airtable + Microsoft Teams Integration — Albato](https://albato.com/connect/airtable-with-microsoft_teams)
- [Build 2026 Reveals Microsoft's Agent-First AI Play](https://windowsnews.ai/article/build-2026-reveals-microsofts-agent-first-ai-play-azure-copilot-and-the-value-chain-converge.428607)
- [Build your own agent with Teams AI library — Copilot Developer Camp](https://microsoft.github.io/copilot-camp/pages/custom-engine/teams-ai/)
- [Integrate Custom Azure AI Agents with Copilot Studio and M365 Copilot](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/integrate-custom-azure-ai-agents-with-copilot-studio-and-m365-copilot/4405070)
- [Azure Functions at Build 2026 Update](https://techcommunity.microsoft.com/blog/AppsonAzureBlog/azure-functions-at-build-2026-update/4524075)
- [How Much Does an Airtable Consultant Cost? (2026 Pricing Guide)](https://www.business-automated.com/tutorials/airtable-consultant-pricing)
- [AI Chatbot Pricing Guide: Costs & Best AI Solutions for Enterprise and SMBs](https://sitegpt.ai/blog/enterprise-ai-chatbot-platforms-cost-guide)
- [Companies using Airtable (active customer list)](https://bloomberry.com/data/airtable/)
- [The Ultimate Guide to Airtable in the Real Estate Industry](https://builtonair.com/ultimate-airtable-guides/the-ultimate-guide-to-airtable-in-the-real-estate-industry/)
- [How I Achieved $25,000 Monthly Revenue with n8n](https://www.browseract.com/blog/best-high-income-case-analysis-how-to-achieve-25000-monthly-revenue-with-n8n)
