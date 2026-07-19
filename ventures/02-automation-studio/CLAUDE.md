---
title: Automation Studio — Claude Context
version: 0.1.0
status: draft
author: Ryan Rutledge
last_updated: 2026-07-18
related:
  - PROJECT_CONTEXT.md
  - research/MARKET_RESEARCH.md
  - ../../DevelopmentStandards.md
---

# Claude Context

Read [`PROJECT_CONTEXT.md`](PROJECT_CONTEXT.md) first, especially the real time/financial constraints — they should shape every recommendation, not just the initial plan.

## Current State

Just promoted from the incubator. Only research and agent-context files exist. No client work, no portfolio piece, no code yet.

## Before Proposing Anything

- Bias toward speed and scrappiness over polish — this is explicitly what was asked for, not a default to override
- Anything requiring daytime availability or open-ended time investment doesn't fit — flag it rather than proposing it
- The Microsoft 365/Teams/Azure niche angle is the intended differentiator — don't default to generic Zapier/n8n positioning without checking

## Coding Conventions (once build starts)

- Azure Functions is the natural default for anything touching Microsoft 365/Teams; Make.com/n8n for everything else
- Every delivered automation should be documented well enough that Ryan (not just Claude) can maintain it during a maintenance retainer — this is a real constraint given the 10–20 hrs/week limit
- Log architectural and business decisions to [`DECISIONS.md`](DECISIONS.md) as they happen

## Don't Duplicate

- Link to [DevelopmentStandards.md](../../DevelopmentStandards.md) and [TechStack.md](../../TechStack.md) rather than restating them
