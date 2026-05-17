---
title: "Matt Pocock's .claude Folder: 68K Stars, 4 Skills That Actually Work"
channel: Bitwise AI
url: https://www.youtube.com/watch?v=z0y1nuiXdoc
date: 2026-05-17
tags: [claude-code-skills, developer-workflow, domain-driven-design, tdd, open-source]
tools: [Claude Code, npx skills installer]
use_cases: [developer-workflow, tdd, debugging, requirements-clarification]
complexity: beginner
workflow_type: manual-assisted
---

## What This Video Demonstrates

Matt Pocock open-sourced his personal `.claude` folder — a collection of plain markdown skill files with no runtime or orchestration layer — and it accumulated 68,000 GitHub stars in 90 days. The video breaks down the 4 skills that actually drive that adoption and explains why the "just markdown" approach beats heavier frameworks.

## Workflow Steps

1. Run the one-command installer: pick skills from the catalog, pick your agent (Claude Code, Codex, etc.), installer wires them in
2. Invoke `/grill-me` at the start of any new feature — agent interviews you relentlessly, walks every decision branch, forces commitment before any code is written
3. Maintain a `context.md` (ubiquitous language file) — shared glossary of terms used consistently across prompts to halve token usage for repeated concepts
4. Use `/tdd` for feature implementation — one test written, one implementation written, one green bar confirmed, then repeat; no horizontal slicing (write all tests first)
5. Use `/diagnose` when debugging — six phases: reproduce, minimize, hypothesize, instrument, fix, regression test; phase 1 builds a feedback loop ranked by reliability (failing test beats bash script)

## Tools Used

| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Claude Code | Agent that reads and executes the markdown skill files | Claude subscription |
| npx skills installer | One-command CLI that installs selected skills into any agent | Free |

## Claude Code Integration Points

- All four skills are plain `.md` files — drop them into `~/.claude/skills/` or a project `.claude/` folder with no additional setup
- `/grill-me` maps directly to Claude Code's Plan Mode pattern — use it before any `sc:implement` invocation to front-load requirements
- `context.md` (ubiquitous language) is equivalent to a project-level `CLAUDE.md` — the same token-efficiency principle applies to any Claude Code project
- `/tdd` aligns with the `tdd-workflow` skill already in the skills catalog; Pocock's version is more minimal and forkable
- `/diagnose` phase 1 (build feedback loop first) is a natural fit for the `sc:troubleshoot` skill pattern
- The installer pattern (one command, pick skills, pick agent) is a distribution model Claude Code's own skill ecosystem could adopt

## Key Insight

**"Skills are the new package.json"** — the catalog is the artifact; distribution as a feature is what drove 68K stars, not the sophistication of individual skills. Plain markdown files that are readable, forkable, and deleteable with no lock-in beat frameworks that own the process.

## Reusable Primitives

- `/grill-me` pattern: force requirements clarification before any code — "interview me relentlessly until we reach a shared understanding"
- `context.md` / ubiquitous language file: shared glossary that halves tokens for repeated domain concepts across a project
- Vertical slice TDD: one test → one implementation → green bar → repeat (never write all tests first)
- `/diagnose` six-phase structure: reproduce → minimize → hypothesize → instrument → fix → regression test
- Phase 1 feedback loop ranking: failing test > bash script > manual reproduction (ranked by reliability)
- Single-file skill format: one folder, one `skill.md`, readable and deleteable with no dependencies

## Limitations / Gotchas

- Skills are markdown only — no programmatic logic, no state, no memory between invocations; complex multi-step orchestration requires a heavier framework
- The 68K stars signal distribution success, not necessarily that these are the best implementations of each pattern — fork and adapt rather than treating them as canonical
- `/grill-me` can be time-consuming for small, well-understood tasks — it's designed for ambiguous feature requests, not routine edits
- No built-in coverage measurement in `/tdd` — the skill enforces discipline but doesn't verify the 80% coverage threshold
- `context.md` requires upfront investment to write well; a poorly written glossary can introduce more confusion than it resolves
- Installer picks agent at setup time — switching agents later requires manual re-wiring
