---
title: Microsoft Account & Azure Setup Guide
version: 0.1.0
status: draft
author: Ryan Rutledge
last_updated: 2026-07-19
related:
  - ../PROJECT_CONTEXT.md
  - ../src/README.md
---

# Microsoft Account & Azure Setup Guide

Step-by-step setup for a dedicated Microsoft/Azure identity for Automation Studio, kept separate from Ryan's employer accounts (see [`PROJECT_CONTEXT.md § Real constraints`](../PROJECT_CONTEXT.md#real-constraints-that-should-shape-every-recommendation-made-here)). Costs verified 2026-07-19 — see [`PROJECT_CONTEXT.md § Real infrastructure costs`](../PROJECT_CONTEXT.md#real-infrastructure-costs-verified-2026-07-19-given-real-funding-constraints).

Every step here is something Ryan does himself — account creation, payment info, and identity verification are never something Claude Code performs or sees.

## Table of Contents

- [Roadmap](#roadmap)
- [Phase 1: Personal Microsoft Account](#phase-1-personal-microsoft-account)
- [Phase 2: Free Azure Account](#phase-2-free-azure-account)
- [Phase 3: Verify the Entra ID Tenant](#phase-3-verify-the-entra-id-tenant)
- [Phase 4: Get Teams Access](#phase-4-get-teams-access)
- [Phase 5: Create the Azure Function App](#phase-5-create-the-azure-function-app)
- [Phase 6: Register the Teams Bot](#phase-6-register-the-teams-bot)
- [Phase 7: Fill In local.settings.json](#phase-7-fill-in-localsettingsjson)

## Roadmap

| Phase | What | Cost |
|---|---|---|
| 1 | Personal Microsoft account | Free |
| 2 | Azure free account (auto-creates an Entra ID tenant) | Free (card required for verification, not charged) |
| 3 | Verify/name the Entra ID tenant | Free |
| 4 | Get Teams working in that tenant | Free to try; ~$8.40/mo fallback if needed |
| 5 | Create the Azure Function App | Free (Consumption plan) |
| 6 | Register the Teams bot (Azure Bot Service) | Free (F0 tier) |
| 7 | Fill in local.settings.json with real values | — |

Do this in order — each phase depends on the one before it existing.

## Phase 1: Personal Microsoft Account

If you already have a personal Microsoft account (outlook.com/hotmail.com email, or any email registered with Microsoft) that you're comfortable dedicating to this venture, you can reuse it. Otherwise:

1. Go to [account.microsoft.com](https://account.microsoft.com)
2. Click **Sign in** → **Create one!**
3. Use the personal email you're keeping separate from your employer — this is the account you'll use for everything below
4. Complete verification (they'll text/email a code)

**Checkpoint:** you can sign into account.microsoft.com with this account.

## Phase 2: Free Azure Account

1. Go to [azure.microsoft.com/free](https://azure.microsoft.com/free)
2. Click **Start free** or **Try Azure for free**
3. Sign in with the Microsoft account from Phase 1
4. Azure will ask for identity verification: a phone number and a credit card. **This is normal and required even for the free tier** — it's fraud prevention, not a charge. You won't be billed unless you explicitly upgrade the subscription type or exceed free-tier limits, and Azure's free trial has built-in spending safeguards.
5. Complete signup. This automatically creates:
   - An Azure subscription (with the free grants — $200 trial credit plus the "Always Free" service tiers that don't expire)
   - A default **Microsoft Entra ID** tenant/directory behind the scenes — you don't create this separately, it comes with the subscription

**Checkpoint:** you can sign into [portal.azure.com](https://portal.azure.com) and see a subscription listed.

## Phase 3: Verify the Entra ID Tenant

1. In the Azure Portal, search for **Microsoft Entra ID** in the top search bar
2. You'll see a default tenant, usually named something like `yourname.onmicrosoft.com` or `Default Directory`
3. Optional: rename it to something recognizable — under **Overview**, there's a "Custom domain names" section where you can add a friendlier name later if you ever want one, but the default `.onmicrosoft.com` name works fine for development and doesn't need changing right away
4. Note the **Tenant ID** shown on the Entra ID Overview page — this becomes `GRAPH_TENANT_ID` in your local settings later (safe to note down locally, not a secret by itself, but still don't paste it into chat)

**Checkpoint:** you can see the Entra ID Overview page with a Tenant ID.

## Phase 4: Get Teams Access

This is the part flagged as unverified in [`PROJECT_CONTEXT.md`](../PROJECT_CONTEXT.md) — try the free path first:

1. Go to [teams.microsoft.com](https://teams.microsoft.com) or [admin.microsoft.com](https://admin.microsoft.com) signed in as your new account
2. See if Teams is already accessible. Sometimes a bare Entra ID tenant is enough for basic testing; often it isn't, since Teams itself needs a license assigned to at least one user.
3. **If Teams isn't accessible:** go to [admin.microsoft.com](https://admin.microsoft.com) → **Billing** → **Purchase services**, and look for a free trial offer (commonly a 1-month trial of Microsoft 365 Business Standard is offered to new tenants). Start that trial if available — it buys a month of full Teams access at no cost while you build and test.
4. **After the trial (or if no trial is offered):** the cheapest paid fallback is **Microsoft 365 Business Basic** (~$8.40/user/month) — assign it to just your one admin account, not a full team.

**Checkpoint:** you can open Teams (the real work/school version, not personal Teams) signed in as your new account, and see your own name in the top corner.

## Phase 5: Create the Azure Function App

1. In the Azure Portal, click **Create a resource** → search **Function App** → **Create**
2. Key settings:
   - **Runtime stack:** Node.js
   - **Version:** 20 LTS (or latest LTS available)
   - **Hosting plan:** **Consumption (Serverless)** — this is what maps to the free 1M-requests/month grant; don't pick "Premium" or "Dedicated"
   - **Region:** whichever is closest to you
3. This also prompts you to create (or reuse) a **Storage Account** — required by Azure Functions for internal bookkeeping, costs pennies at this scale, effectively free for a demo
4. Once created, you don't need to touch this resource directly yet — deployment happens later, once the code's ready to go live

**Checkpoint:** the Function App resource shows as "Running" in the Azure Portal.

## Phase 6: Register the Teams Bot

1. In the Azure Portal, **Create a resource** → search **Azure Bot** → **Create**
2. Key settings:
   - **Pricing tier:** **F0 (Free)**
   - **Type of App:** Multi Tenant is fine for development
   - This generates a **Microsoft App ID** and lets you create an **App Password** (client secret) — these become `MICROSOFT_APP_ID` and `MICROSOFT_APP_PASSWORD`
3. Under the Bot resource's **Channels** section, add the **Microsoft Teams** channel
4. **Don't paste the App ID/Password into chat** — copy them directly into your `local.settings.json`

**Checkpoint:** the Bot resource shows Teams listed as a connected channel.

## Phase 7: Fill In local.settings.json

Back in `src/local.settings.json` (already gitignored), fill in the values you now have:

```
AIRTABLE_API_KEY        — already set
AIRTABLE_BASE_ID        — already set
MICROSOFT_APP_ID        — from Phase 6
MICROSOFT_APP_PASSWORD  — from Phase 6
GRAPH_TENANT_ID         — from Phase 3
```

`ONBOARDING_TEAMS_CHANNEL_ID` gets filled in once you've created an actual Teams channel to post the onboarding checklist to — that comes after Phase 4 is working.

Once these are in, the Graph API calls in `lib/graphClient.ts` and the Teams bot in `bot/teamsBot.ts` have what they need to actually run against your real tenant instead of being stubbed.
