---
title: ABOS Lessons Learned
version: 0.2.0
status: active
author: Ryan Rutledge
last_updated: 2026-07-19
related:
  - README.md
  - DECISIONS.md
---

# Lessons Learned

Institutional knowledge and postmortems — things that were *learned by doing*, not decided in advance. Distinct from [DECISIONS.md](DECISIONS.md): a decision entry records the reasoning behind a choice made at the time; a lesson here records what actually happened once that choice (or an approach in general) played out, especially when it didn't go as expected.

Log an entry when something surprised you, cost real time/money to discover, or would help avoid repeating a mistake on the next venture. Don't log routine, expected outcomes.

## Format

```
## [Short title]

**Date:**
**What happened:**
**What we learned:**
**What to do differently:**
```

## AI-drafted documentation needs a depth bar stated up front, not corrected after the fact

**Date:** 2026-07-18

**What happened:** A ChatGPT-drafted batch of venture documents ("Batch 3") arrived as 15 files, each only 1–9 lines — technically covering every required topic, but too thin to build against. It had to be thrown out and rewritten from scratch once the actual quality bar ("a senior engineer who's never spoken to us could implement confidently") was made explicit.

**What we learned:** vague depth guidance ("15–40 pages") or no guidance at all produces inconsistent results between drafting sessions — the same request can come back as either a bullet-point stub or genuine documentation depending on how the prompt framed the bar. Restating a page-count target after the fact is weaker than establishing a concrete, testable quality bar before drafting starts.

**What to do differently:** state the "implement confidently" bar (or an equivalent concrete test) explicitly before ChatGPT drafts anything for a new venture, not after reviewing a thin first pass. See [Architecture.md § Venture Folder Anatomy](Architecture.md#venture-folder-anatomy).

## Azure Functions' newer, "recommended" hosting plan doesn't work on a free trial

**Date:** 2026-07-19

**What happened:** Creating the first real Azure Function App for `ventures/02-automation-studio`, the Azure Portal defaulted to the "Flex Consumption" hosting plan — Microsoft's newer, actively-recommended plan over classic Consumption. It failed at creation with "Free trial subscription is not supported for Flex Consumption." Classic "Consumption (Serverless)" worked instead, and turned out to have a *larger* free grant (1M requests/month vs. Flex Consumption's 250K) despite being labeled "legacy."

**What we learned:** the platform's own "recommended" default isn't always compatible with a free-tier/no-budget setup — official guidance optimizes for typical paid usage, not for someone deliberately staying inside free grants. Worth checking compatibility with the actual subscription type in use before following a "just pick the recommended option" instinct, especially on any Azure resource creation flow.

**What to do differently:** on a Free Trial (or otherwise free-tier-constrained) Azure subscription, explicitly check for a legacy/classic plan option when the recommended default fails or seems likely to require a paid subscription tier — don't assume "newer and recommended" means "works everywhere." See [`ventures/02-automation-studio/deployment/MicrosoftAccountSetup.md § Phase 5`](ventures/02-automation-studio/deployment/MicrosoftAccountSetup.md#phase-5-create-the-azure-function-app).
