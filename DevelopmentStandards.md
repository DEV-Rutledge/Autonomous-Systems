---
title: ABOS Development Standards
version: 0.3.0
status: foundation
author: Ryan Rutledge
last_updated: 2026-07-18
related:
  - README.md
  - Architecture.md
  - TechStack.md
---

# ABOS Development Standards

Conventions every business and shared component in this repository follows, so that any file can be opened cold — by Ryan, Claude, or ChatGPT — and understood without extra context.

## Table of Contents

- [Documentation Conventions](#documentation-conventions)
- [File & Folder Naming](#file--folder-naming)
- [Versioning](#versioning)
- [Decision Logs](#decision-logs)
- [Code Conventions](#code-conventions)
- [AI Agent Instructions](#ai-agent-instructions)
- [Checklist for New Documents](#checklist-for-new-documents)

## Documentation Conventions

Every Markdown file in this repository should include:

- **YAML frontmatter** — `title`, `version`, `status`, `author`, `last_updated`, `related` (list of linked docs)
- **Table of Contents** for any doc longer than ~3 sections
- **Relative links** to related docs, not just prose references (`[Roadmap.md](Roadmap.md)`, not "see the roadmap")
- **Mermaid diagrams** for anything describing a flow, architecture, or relationship — prefer a diagram over a paragraph when both would work
- Checklists (`- [ ]` / `- [x]`) for anything tracking progress or completion state

`status` values: `foundation`, `draft`, `active`, `stable`, `deprecated`.

## File & Folder Naming

- Folders: `PascalCase` for top-level concept folders at the repo root (`ventures/` and its contents are the exception — see below — `Shared/`), `kebab-case` or `NN-Title-Case` for other specific instances (`Prompt-Library`)
- `ventures/` and everything under it is all-lowercase-kebab-case (`ventures/00-incubator/`, `ventures/01-lead-engine/`, and its subfolders `docs/`, `prompts/`, `architecture/`, `automation/`, `api/`, `database/`, `deployment/`, `marketing/`, `finance/`, `sales/`, `legal/`, `research/`, `tasks/`, `diagrams/`) — this is the one deliberate break from PascalCase, matching how real software companies name repo paths
- Files: `PascalCase.md` is the general default for docs (`Architecture.md`, `Roadmap.md`)
- **Flagship venture documents use `SCREAMING_SNAKE_CASE.md`** — this includes the agent-context files (`CLAUDE.md`, `GPT.md`, `PROJECT_CONTEXT.md`, `DECISIONS.md`, `TASKS.md`) *and* the primary strategy/research documents inside a venture's subfolders (`MARKET_RESEARCH.md`, `BUSINESS_PLAN.md`, `TECHNICAL_ARCHITECTURE.md`). The all-caps styling is a deliberate visual signal: these are the documents everything else in the venture should cite and build on — see [Architecture.md § Document Dependency Chain](Architecture.md#document-dependency-chain). Supporting/working documents within the same subfolder (e.g. a raw interview transcript in `research/`) can stay `PascalCase.md`.
- Numbered venture folders always use two-digit prefixes (`01-`, `02-`, ... `10-`) so they sort correctly past nine ventures, and are named only after clearing the incubator (no speculative placeholder names)

## Versioning

- The repository as a whole is versioned per [README.md](README.md#versioning) (0.1 → 1.0 milestones)
- Individual ventures are versioned independently once they exist, starting at `0.1.0` at scaffold time
- Bump the `version` field in a doc's frontmatter whenever its content changes in a way that would matter to someone who read the previous version

## Decision Logs

Every venture's `DECISIONS.md`, and the repo's own root-level [`DECISIONS.md`](DECISIONS.md) for governance/architecture decisions that apply across ventures, record:

- **Decision** — what was decided
- **Date**
- **Context** — what prompted the decision
- **Alternatives considered**
- **Why this option won**

Log a decision when it would not be obvious from reading the code/docs alone why something is the way it is — not for routine or reversible choices.

## Code Conventions

Applies once a business moves from documentation into actual code:

- Preferred languages and frameworks: see [TechStack.md](TechStack.md)
- API-first: define the API contract before building the UI on top of it
- Environment config via `.env`, never committed — document required variables in that business's `PROJECT_CONTEXT.md`
- Prefer managed services (see TechStack) over self-hosting infrastructure, to keep operational overhead low per the [core philosophy](README.md#core-philosophy)

## AI Agent Instructions

- `CLAUDE.md` and `GPT.md` in each business folder are living documents — update them when the business's priorities or conventions shift, not just at scaffold time
- Agent context files link to shared standards rather than restating them (see [Architecture.md § Agent Context Files](Architecture.md#agent-context-files))
- `TASKS.md` should stay prioritized (top = next thing to do) rather than a flat backlog dump

## Checklist for New Documents

- [ ] YAML frontmatter present and accurate
- [ ] Table of Contents (if applicable)
- [ ] Linked to/from related docs
- [ ] Uses a diagram where a flow or structure is being described
- [ ] `last_updated` set to the current date
