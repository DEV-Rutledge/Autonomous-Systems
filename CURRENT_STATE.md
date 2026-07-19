---
title: ABOS Current State
version: 0.1.0
status: active
author: Ryan Rutledge
last_updated: 2026-07-18
related:
  - README.md
  - Roadmap.md
  - DECISIONS.md
---

# Current State

Living status doc — update this at the end of any session that changes repo structure, ships a flagship document, or shifts direction. This is the fastest way for Ryan, Claude Code, or ChatGPT to get oriented at the start of a new session without reconstructing context from commit history.

## Repo Version

**0.6** (Incubator Idea Batch) — see [README.md § Versioning](README.md#versioning) for the full milestone table, [CHANGELOG.md](CHANGELOG.md) for what shipped in order, and [DECISIONS.md](DECISIONS.md) for why each one happened.

## What's Built

- **Root docs:** README, Roadmap, Architecture, DevelopmentStandards, TechStack, DECISIONS, CURRENT_STATE, CHANGELOG, LESSONS_LEARNED — all live and cross-linked.
- **`ventures/00-incubator/`:** the 15-stage validation pipeline and its four working documents (IdeaValidationChecklist, MarketResearchTemplate, BusinessScorecard, LaunchChecklist) — complete.
- **`ventures/00-incubator/Ideas/`:** 5 research-backed candidate ideas (ai-newsletter, ai-social-media-service, ai-chatbot-service, ai-seo-content-agency, automation-reselling), each a full `MarketResearch.md` outline with sourced numbers and a comparative `Ideas/README.md`. **Not yet scored** — `ValidationChecklist.md`/`Scorecard.md` per idea is the next step before any gets promoted.
- **`ventures/01-lead-engine/`:** first venture, still in incubator Phase A (pre-build). Evaluated in parallel with the Ideas/ batch above, not superseded by it.
  - Root files (README.md, CLAUDE.md, GPT.md, PROJECT_CONTEXT.md, DECISIONS.md, CHANGELOG.md) — in place.
  - `docs/BUSINESS_PLAN.md` — first full pass written, research-backed.
  - `research/MARKET_RESEARCH.md` — currently a research log backing the business plan, **not yet rebuilt to the 20-section gold-standard flagship format** (Executive Summary → Sources) established in [Architecture.md § Document Dependency Chain](Architecture.md#document-dependency-chain).
  - Everything else (`architecture/`, `database/`, `api/`, `automation/`, `prompts/`, `deployment/`, `marketing/`, `sales/`, `finance/`, `legal/`, `tasks/`, `diagrams/`) — empty, not yet started.

## What's Next

1. Score the 5 candidate ideas in `ventures/00-incubator/Ideas/` (IdeaValidationChecklist + BusinessScorecard per idea) — needs Ryan's input on personal-interest/time-availability dimensions the research can't answer.
2. Rebuild `ventures/01-lead-engine/research/MARKET_RESEARCH.md` to the full gold-standard structure (Executive Summary, Opportunity Statement, Problem Validation, Customer Personas, Jobs To Be Done, Existing Solutions, Competitor Matrix, Pricing Analysis, Customer Sentiment, Market Size, Acquisition Channels, SEO Opportunity, AI Differentiation, Automation Potential, Regulatory Considerations, Risks, Financial Modeling, Build Recommendation, Evidence Appendix, Sources) — the next flagship document, and the template for every future venture's research doc.
2. Revise `docs/BUSINESS_PLAN.md` to cite the rebuilt `MARKET_RESEARCH.md` rather than duplicating its content, per the [Document Dependency Chain](Architecture.md#document-dependency-chain).
3. Real discovery calls with target operators to validate the open questions logged in `research/MARKET_RESEARCH.md` — nothing here should be treated as settled until that happens.
4. `architecture/TECHNICAL_ARCHITECTURE.md` — once scope is validated, not before.

## How Work Happens Here

ChatGPT drafts research/architecture proposals; Claude Code verifies, reconciles against the existing repo, and implements — see [DECISIONS.md § ChatGPT and Claude Code collaborate via structured handoffs](DECISIONS.md#chatgpt-and-claude-code-collaborate-via-structured-handoffs-relayed-by-ryan). Batches arrive as zip files or pasted proposals from Ryan; nothing gets merged in without a review pass for repo-standards compliance and cross-document consistency first.
