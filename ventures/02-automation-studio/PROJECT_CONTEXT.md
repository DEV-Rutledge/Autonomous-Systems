---
title: Automation Studio — Project Context
version: 0.3.0
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

**What this is (sharpened 2026-07-18, twice):** a custom-built new-hire onboarding and provisioning agent embedded in Microsoft Teams — automates the ~30–45 minutes and 18+ manual steps IT normally does per hire (Teams/channel assignment, room/resource access, tenant setup), backed by Airtable as the data layer. Not a notification integration; a conversational agent that takes real actions. Full detail in [`research/MARKET_RESEARCH.md`](research/MARKET_RESEARCH.md).

**Primary objective:** fastest realistic path from ~$4,000/mo to ~$10,000/mo combined income. This venture was chosen over the other five incubator candidates specifically because it scored highest on documented time-to-first-dollar — see [`ventures/00-incubator/Ideas/automation-reselling/Scorecard.md`](../00-incubator/Ideas/automation-reselling/Scorecard.md).

**Real constraints that should shape every recommendation made here:**
- **Time:** 10–20 hrs/week total (2 hrs on weeknights, ~10 hrs on weekends). Don't propose anything that assumes daytime availability or open-ended time investment.
- **Financial urgency is real, not abstract.** Ryan's family is under real financial pressure. When choosing between a faster/scrappier path and a more polished/slower one, default to faster unless there's a clear reason not to.
- **Client interaction is fine, async-preferred.** Evening calls work; Loom/email/forms for scoping are preferred over requiring live daytime meetings.
- **Separate business finances from day job.** Ryan is setting up a dedicated Microsoft/Azure account and card on his personal email for this venture, kept apart from his employer's accounts. Claude Code does not handle any part of this (account setup, payments, credentials) — informational guidance only if asked.

**Founder's actual technical background (use this, don't route around it):** very strong at building Microsoft Teams bots on Azure Functions integrated with Airtable — listens for keywords/@mentions, acts on linked data. Comfortable expanding to other backends/databases and tailoring automation + responses per niche. Plans to use Claude Code specifically for dashboards/web portals that act as a frontend onto the bot/data layer — this venture's build isn't Teams-bot-only, it includes a web frontend component.

**Build decision (2026-07-18):** hand-rolled on Teams AI Library + Azure Functions, not Microsoft Copilot Studio — matches existing skill directly, full control over the agent layer. See [`DECISIONS.md`](DECISIONS.md).

**Engagement model (2026-07-18, Ryan's explicit preference):** avoid low-value ongoing maintenance-only work. Two acceptable structures:
1. Build the system + train the client's tech team to run/extend it — one-time project fee, no retainer
2. Stay involved only at a high, expertise-reflecting retainer rate — not a commodity $500/mo maintenance fee

If client load grows to the point of being stretched thin across multiple engagements, Ryan is open to hiring — not an immediate plan, but a known next step, not a constraint to avoid mentioning.

**Why this beats generic automation reselling or plain integrations (research-backed):** custom AI-powered chatbots with real NLP price at $75,000–150,000 for agency builds — a different value tier than generic Make.com/n8n retainers ($500–3,000/mo) or plain Airtable-Teams notification integrations (free-to-cheap via Zapier/Make/n8n — a race to the bottom to avoid). The wedge is the agent layer that takes action, not the connector.

**Current stage:** niche narrowed to new-hire onboarding/provisioning (2026-07-18) — see [`research/MARKET_RESEARCH.md § Primary Niche`](research/MARKET_RESEARCH.md#primary-niche-new-hire-onboarding--provisioning-agent). Not yet validated against real conversations. Next concrete step is a demo-quality MVP built with sample data — see [`research/MARKET_RESEARCH.md § MVP / Portfolio Piece`](research/MARKET_RESEARCH.md#mvp--portfolio-piece).

**Tech stack:** Azure Functions + Teams AI Library as the core agent layer; Airtable as the first backend; Claude Code for any dashboard/web-portal frontend work; ChatGPT/Claude APIs for the LLM reasoning layer.

**Folder layout:** follows [Architecture.md § Venture Folder Anatomy](../../Architecture.md#venture-folder-anatomy).
