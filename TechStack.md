---
title: ABOS Tech Stack
version: 0.1.0
status: foundation
author: Ryan Rutledge
last_updated: 2026-07-18
related:
  - README.md
  - DevelopmentStandards.md
  - Architecture.md
---

# ABOS Tech Stack

Approved tools and services for businesses built inside ABOS. New businesses should default to this list; deviating from it is a decision worth logging in that business's `DECISIONS.md`.

## Table of Contents

- [Languages & Frameworks](#languages--frameworks)
- [AI](#ai)
- [Automation](#automation)
- [Hosting](#hosting)
- [Database](#database)
- [Authentication](#authentication)
- [Payments](#payments)
- [Analytics](#analytics)
- [Email](#email)
- [Monitoring](#monitoring)
- [Logging](#logging)
- [Version Control](#version-control)

## Languages & Frameworks

| Tool | Use |
|---|---|
| Python | Backend, automation scripts, AI/data work |
| TypeScript | Frontend and typed Node backends |
| React | Frontend UI |
| FastAPI | Python API backend |
| Node | JS/TS backend runtime |

## AI

| Tool | Use |
|---|---|
| OpenAI | General model access, some agent tooling |
| Claude | Primary agent/reasoning model, coding via Claude Code |
| Gemini | Alternate model where useful (cost, context length, multimodal) |
| Local LLMs | When appropriate (cost, privacy, offline) |

## Automation

| Tool | Use |
|---|---|
| Make.com | No-code workflow automation |
| n8n | Self-hostable workflow automation |
| GitHub Actions | CI/CD, scheduled jobs |
| Cloudflare Workers | Edge functions, lightweight APIs |

## Hosting

| Tool | Use |
|---|---|
| Railway | Default for quick app hosting |
| Render | Alternate app hosting |
| Fly.io | Alternate app hosting |
| DigitalOcean | VMs / more control when needed |
| AWS | Larger-scale or enterprise needs |
| Azure | Enterprise-specific needs only |

## Database

| Tool | Use |
|---|---|
| Postgres | Primary relational database |
| Redis | Caching, queues, ephemeral data |
| Supabase | Optional — Postgres + auth + storage bundle |

## Authentication

| Tool | Use |
|---|---|
| Clerk | Default auth provider |
| Auth.js | Alternate, more DIY auth |
| Firebase Auth | When already in the Firebase ecosystem |

## Payments

| Tool | Use |
|---|---|
| Stripe | Default payments/subscriptions |
| LemonSqueezy | Alternate — merchant-of-record option |

## Analytics

| Tool | Use |
|---|---|
| PostHog | Product analytics, feature flags |
| Google Analytics | Web/marketing analytics |
| Plausible | Privacy-friendly web analytics |

## Email

| Tool | Use |
|---|---|
| Resend | Default transactional email |
| Mailgun | Alternate transactional email |
| Postmark | Alternate transactional email |

## Monitoring

| Tool | Use |
|---|---|
| Sentry | Error tracking |
| BetterStack | Status pages, incident monitoring |
| UptimeRobot | Simple uptime checks |

## Logging

| Tool | Use |
|---|---|
| OpenTelemetry | Instrumentation standard |
| Grafana | Dashboards/visualization |

## Version Control

| Tool | Use |
|---|---|
| Git | Source control |
| GitHub | Hosting, collaboration |
| GitHub Projects | Lightweight project tracking |
| GitHub Actions | CI/CD (also listed under Automation) |

---

**Primary objective:** build businesses that continue earning money while sleeping — every tool choice above should reduce operational overhead, not add to it.
