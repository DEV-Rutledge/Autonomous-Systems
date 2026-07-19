---
title: Incubator — AI Venture Studio
version: 0.3.0
status: foundation
author: Ryan Rutledge
last_updated: 2026-07-18
related:
  - ../../Architecture.md
  - IdeaValidationChecklist.md
  - MarketResearchTemplate.md
  - BusinessScorecard.md
  - LaunchChecklist.md
---

# 00 — Incubator

The AI venture studio for ABOS. Every new venture idea — no exceptions — starts here and works through the same pipeline before it earns its own numbered folder under `ventures/`.

## Table of Contents

- [Purpose](#purpose)
- [Pipeline](#pipeline)
- [Documents in This Folder](#documents-in-this-folder)
- [How to Use This Folder](#how-to-use-this-folder)

## Purpose

This folder exists so no idea gets built on gut feel alone. It forces the same questions to be answered for every idea, in the same order, before any code gets written — see [Architecture.md § Incubator Pipeline](../../Architecture.md#incubator-pipeline) for the full rationale.

## Pipeline

**Phase A — Incubator (lives entirely in this folder):**

1. Opportunity research — capture the raw idea
2. Fast-fail gate — [`IdeaValidationChecklist.md`](IdeaValidationChecklist.md)
3. Market validation — [`MarketResearchTemplate.md`](MarketResearchTemplate.md)
4. Competitor analysis
5. Pricing
6. MVP definition
7. Technical architecture
8. AI automation opportunities
9. Marketing strategy
10. Financial projections
11. Score & decide — [`BusinessScorecard.md`](BusinessScorecard.md) → Build / Revisit / Reject

**Phase B — Post-Incubator (only for ideas that scored "Build"):**

12. Build
13. Launch — [`LaunchChecklist.md`](LaunchChecklist.md)
14. Scale
15. Archive or expand

Ideas that don't clear stage 11 stay documented here as a record of what was considered and rejected, rather than being deleted — see [Architecture.md § Incubator Pipeline](../../Architecture.md#incubator-pipeline).

## Documents in This Folder

| Document | Used At Stage |
|---|---|
| [IdeaValidationChecklist.md](IdeaValidationChecklist.md) | 2 — fast-fail gate |
| [MarketResearchTemplate.md](MarketResearchTemplate.md) | 3–10 — the working doc filled in per idea |
| [BusinessScorecard.md](BusinessScorecard.md) | 11 — scoring and the build/no-build call |
| [LaunchChecklist.md](LaunchChecklist.md) | 13 — final gate before going live, once promoted |

## How to Use This Folder

See [`Ideas/README.md`](Ideas/README.md) for a live example — five candidate ideas researched and compared in parallel.

Each new idea gets its own subfolder:

```
ventures/00-incubator/
├── README.md
├── IdeaValidationChecklist.md
├── MarketResearchTemplate.md
├── BusinessScorecard.md
├── LaunchChecklist.md
└── Ideas/
    └── <idea-slug>/
        ├── ValidationChecklist.md   # filled-in copy
        ├── MarketResearch.md        # filled-in copy
        └── Scorecard.md             # filled-in copy
```

1. Copy the three templates into a new `Ideas/<idea-slug>/` folder and fill them in as the idea moves through stages 1–11.
2. If the scorecard recommends **Build**, promote the idea: scaffold `ventures/NN-venture-slug/` from [Templates/](../../Templates/) using the deep taxonomy in [Architecture.md § Venture Folder Anatomy](../../Architecture.md#venture-folder-anatomy), and copy `LaunchChecklist.md` into its `tasks/` folder for stage 13.
3. If the recommendation is **Reject**, leave the filled-in idea folder in place as a record — don't delete it.
4. If the recommendation is **Revisit**, leave a note in the idea folder on what would need to change to reconsider it later.
