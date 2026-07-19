---
title: ABOS Lessons Learned
version: 0.1.0
status: active
author: Ryan Rutledge
last_updated: 2026-07-18
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
