---
title: "I Replaced /grill-me With Something Better: /grill-with-docs"
channel: Matt Pocock
url: https://www.youtube.com/watch?v=6BB6exR8Zd8
date: 2026-05-17
tags: [claude-code-skills, domain-driven-design, documentation, context-management, developer-workflow]
tools: [Claude Code, /grill-with-docs skill, /grill-me skill, context.md, ADRs]
use_cases: [domain-knowledge-capture, shared-language-building, codebase-onboarding, decision-documentation]
complexity: intermediate
workflow_type: manual-assisted
---

## What This Video Demonstrates

Matt Pocock replaces the `/grill-me` skill (relentless Socratic interviewing to reach shared understanding) with `/grill-with-docs`, which adds a living `context.md` glossary that persists domain language across sessions — drawing on Domain-Driven Design's ubiquitous language concept to give AI the thinnest layer of documentation with the highest leverage.

## Workflow Steps

1. Install the `/grill-with-docs` skill in Claude Code
2. Add a pointer in the project's `CLAUDE.md`: reference `context.md` as the domain language file for this repo
3. Run `/grill-with-docs` at the start of a session — the skill reads the existing `context.md` and begins interviewing you about the domain, one question at a time
4. The skill walks decision tree branches: each answer unlocks follow-up questions specific to that branch, building a precise shared understanding
5. As terms are established, `context.md` is updated in real time — domain terms, their definitions, and their relationships are written to the file
6. When a non-obvious, hard-to-reverse architectural decision is made, the skill creates an ADR (Architectural Decision Record) as a simple markdown file alongside the code
7. In future sessions, load `context.md` first — Claude Code reads the glossary and operates using the shared language without needing re-explanation of domain terms
8. Use `/grill-me` (not `/grill-with-docs`) for non-codebase use cases — writing, planning, general reasoning where no persistent glossary is needed

## Tools Used

| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Claude Code | Skill host, session environment, file read/write | Paid |
| /grill-with-docs skill | Socratic domain interview + context.md update | Free (skill) |
| /grill-me skill | General-purpose Socratic interview (no docs output) | Free (skill) |
| context.md | Living glossary of domain terms — persists across sessions | Free (local file) |
| ADRs | Markdown files for non-obvious architectural decisions | Free (local files) |

## Claude Code Integration Points

- **CLAUDE.md pointer**: The `context.md` reference in `CLAUDE.md` is a native Claude Code pattern — every session auto-loads the domain glossary without any manual step
- **Skills**: `/grill-with-docs` and `/grill-me` are Claude Code skills — this is a native Claude Code workflow with no external tooling required
- **ADR generation**: The `/architecture-decision-records` skill in the available skill library directly complements this workflow — it formalizes the ADR creation step
- **Hooks**: A `Stop` hook could run `/grill-with-docs` in summary mode at session end, updating `context.md` with any new terms introduced during the session
- **Onboarding**: New team members or agents joining a project run `/grill-with-docs` once to get aligned on domain language before touching code — replaces lengthy onboarding docs
- **Token efficiency**: A well-maintained `context.md` reduces tokens spent on re-explaining domain terms in every session, which compounds across a long project

## Key Insight

**Documenting the non-obvious domain language** — not the code, not the architecture, just the shared vocabulary between domain experts and developers — is the thinnest layer of documentation that gives AI the biggest leverage across every future session.

## Reusable Primitives

- `context.md` as a living, session-updated domain glossary — one file, always current, always loaded
- CLAUDE.md pointer pattern: reference `context.md` so every session inherits domain knowledge automatically
- ADR creation rule: only write an ADR when a decision is non-obvious, hard to reverse, and would be surprising to a future reader without context
- `/grill-me` for general use, `/grill-with-docs` for codebases — clear fork based on whether persistent output is needed
- Ubiquitous language from DDD as the conceptual foundation: shared terms between domain experts, developers, and the codebase naming conventions
- One-question-at-a-time interview discipline: prevents overwhelming the user and forces precise, branching answers

## Limitations / Gotchas

- `context.md` requires discipline to maintain — if the domain evolves and the file is not updated, Claude Code will operate on stale language
- The skill does not automatically detect when a term in `context.md` conflicts with how it is named in the actual code — naming drift between glossary and codebase is a real risk
- ADRs are only useful if they are created consistently; the skill creates them when prompted, but there is no enforcement mechanism for when they should be triggered
- `/grill-with-docs` sessions can be long — if the domain is complex, the interview may take more time than the task that prompted it
- This workflow adds a new file (`context.md`) and a new convention (ADRs) that teammates must buy into — solo developers benefit immediately, teams require alignment
- `/grill-me` for a eulogy (the example given in the video) illustrates general utility, but also highlights that the skill's tone is relentlessly interrogative — not always appropriate for every context
