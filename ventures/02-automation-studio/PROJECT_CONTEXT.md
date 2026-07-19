---
title: Automation Studio — Project Context
version: 0.2.0
status: draft
author: Ryan Rutledge
last_updated: 2026-07-18
related:
  - README.md
  - CLAUDE.md
  - GPT.md
  - DECISIONS.md
  - research/MARKET_RESEARCH.md
---

# Project Context

**What this is (sharpened 2026-07-18):** custom AI agents embedded in Microsoft Teams that read and act on a business's real data — not notification-style integrations (those are fully commoditized by Zapier/Make/n8n/Airtable's own native automations), but conversational agents that take real actions via natural language and @mentions. Airtable is the proven starting backend (Ryan's strongest current skill); the offering generalizes to SharePoint Lists, Dataverse, SQL, and other backends as it grows. Full detail in [`research/MARKET_RESEARCH.md`](research/MARKET_RESEARCH.md).

**Primary objective:** fastest realistic path from ~$4,000/mo to ~$10,000/mo combined income. This venture was chosen over the other five incubator candidates specifically because it scored highest on documented time-to-first-dollar — see [`ventures/00-incubator/Ideas/automation-reselling/Scorecard.md`](../00-incubator/Ideas/automation-reselling/Scorecard.md).

**Real constraints that should shape every recommendation made here:**
- **Time:** 10–20 hrs/week total (2 hrs on weeknights, ~10 hrs on weekends). Don't propose anything that assumes daytime availability or open-ended time investment.
- **Financial urgency is real, not abstract.** Ryan's family is under real financial pressure. When choosing between a faster/scrappier path and a more polished/slower one, default to faster unless there's a clear reason not to — this isn't a hobby project with unlimited runway.
- **Client interaction is fine, async-preferred.** Evening calls work; Loom/email/forms for scoping are preferred over requiring live daytime meetings.

**Founder's actual technical background (use this, don't route around it):** very strong at building Microsoft Teams bots on Azure Functions integrated with Airtable — listens for keywords/@mentions, acts on linked data. Comfortable expanding to other backends/databases and tailoring automation + responses per niche. This is real event-driven backend/orchestration experience, not no-code workflow assembly, and it's the actual product, not just internal tooling.

**Why this beats generic automation reselling (research-backed, 2026-07-18):** custom AI-powered chatbots with real NLP price at $75,000–150,000 for agency builds — a completely different value tier than generic Make.com/n8n workflow retainers ($500–3,000/mo). Businesses are already paying real money for Teams+AI capability (Copilot Studio alone runs $1,000/mo for 2,000 sessions) before any custom build. Plain Airtable-Teams notification integrations, by contrast, are a race to the bottom — free-to-cheap via Zapier/Make/n8n. The wedge is the agent layer, not the connector.

**Strategic sequencing:** this *is* now the AI-agent work, brought forward rather than sequenced as a later premium tier — the market data justified leading with it. Generic Make.com/n8n automation work (the original incubator idea) becomes the fallback/broader offering if the Teams-agent niche doesn't convert fast enough, not the other way around.

**Current stage:** niche sharpened via research (2026-07-18), not yet validated against real conversations. `research/MARKET_RESEARCH.md` needs a real target-industry decision (marketing/creative agencies, real estate, or nonprofits — Airtable's heaviest-use segments) before outreach starts.

**Tech stack:** Azure Functions + Teams AI Library / Bot Framework as the core; Airtable as the first backend, architected to generalize; Microsoft Copilot Studio worth evaluating as a faster-to-market alternative/complement to hand-rolled agents (Microsoft's own low-code multi-agent platform, built on Semantic Kernel) — see [`research/MARKET_RESEARCH.md § Microsoft's Native Agent Tooling`](research/MARKET_RESEARCH.md#microsofts-native-agent-tooling). ChatGPT/Claude APIs where the reasoning layer needs more flexibility than Copilot Studio's low-code approach allows.

**Folder layout:** follows [Architecture.md § Venture Folder Anatomy](../../Architecture.md#venture-folder-anatomy).
