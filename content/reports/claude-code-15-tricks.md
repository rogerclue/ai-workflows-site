---
title: "15 Claude Code Tricks That Feel Like Cheating"
channel: Sean Kochel
url: https://www.youtube.com/watch?v=qGAuqbbj1Ls
date: 2026-05-05
tags: [claude-code, productivity, vibe-coding, workflow-optimization, tips]
tools: [Claude Code, Chrome (browser verification), Git Worktrees]
use_cases: [claude-code-workflow-optimization, parallel-development, mobile-remote-control, context-management]
complexity: beginner
workflow_type: manual-assisted
---

## What This Video Demonstrates

Covers 15 workflow rules from Claude Code's own creator (Boris) — the actual practices he uses building Claude Code itself, not generic AI advice. Focused on vibe coders and daily Claude Code users who want higher-quality outputs with fewer token burns.

## Workflow Steps

### Trick 1 — Chrome as Front-End Verification Loop
- Launch Claude Code with `--chrome` flag: gives Claude browser access to iterate on UI changes visually
- Claude writes code → opens Chrome → checks result → iterates until correct
- Eliminates the "blind coding" problem for front-end work
- Can be extracted into a `/verify` slash command for reuse

### Trick 2 — Branch (Fork) Conversations
- Use `/branch` command to fork the current session at any point
- Explore an alternate direction without polluting the main conversation context
- Return to the original with `resume <session-id>`
- Critical for testing multiple approaches from the same context checkpoint

### Trick 3 — Remote Control (Mobile Access)
- Type `remote control` inside Claude Code to make the session accessible from the Claude mobile app
- Lets you pick up exactly where you left off from your phone
- Use case: epiphanies while away from your main machine

### Trick 4 — Teleport (Cross-Device Session Transfer)
- Use `teleport` command to pull a session from phone or Claude web browser into your local desktop instance
- Creates a triangle workflow: desktop ↔ mobile ↔ web browser
- Seamlessly continue work regardless of which device you started on

### Trick 5 — Git Worktrees for Parallel Work
- Instead of switching branches, spin up separate Git worktrees for each parallel task
- Each worktree has its own directory, no context collision between agents
- Boris reportedly runs hundreds of worktrees simultaneously (impractical for normal users, but 3–5 is highly valuable)
- Pattern: create one worktree per independent task → run agents in parallel → merge when done

### Trick 6 — Slash Commands for Repetitive Workflows
- Any repeated sequence (e.g., front-end verification, grill-me interview) should be extracted into a `/command`
- Store slash commands in project or global Claude config
- Saves prompting overhead and enforces consistent workflow

### Trick 7 — Sub-Agent Personas to Review Plans
- Before building, have adversarial sub-agents review the plan from different angles
- Sub-agents challenge specificity, dependencies, and goal alignment
- Every successful AI workflow has spec/plan review built in — this is the mechanism

### Trick 8 — Pour Energy into the CLAUDE.md File
- CLAUDE.md is the highest-leverage file in any Claude Code project
- Rules: keep it concise, review it weekly, nuke and restart if it's drifted
- Don't document everything — only what Claude needs to know to behave correctly

### Trick 9 — "Grill Me" Command for Plan Disambiguation
- A `/grill-me` style command interviews you relentlessly about every aspect of the plan
- Surfaces ambiguities before they become silent wrong decisions at implementation time
- Especially valuable for vibe coders without engineering background — any ambiguity gets decided by the model at game time, often incorrectly
- Matt Pocock's version of this is referenced as popular

### Trick 10 — Analyze Token Consumption
- Use Claude Code itself to analyze your token usage patterns
- Common hidden cost: global slash command libraries load into context on every session (30–40k tokens before first message)
- Fix: install libraries per-project, not globally
- Savings: potentially hundreds of millions of tokens/month for heavy users

### Trick 11 — /status-line Command
- `/status-line` shows: current context window % used, proximity to 5-hour limit, proximity to 7-day limit
- Rule: when context hits ~15–20%, save state and start fresh session
- Keeps you from burning tokens on degraded performance near context limit

### Trick 12 — Connect Claude Code to External Data for Analytics
- Claude Code can connect to external data sources and generate business insights
- Not just internal code analysis — pipe in business metrics, usage data, revenue numbers
- Use case: replace ad-hoc data queries with an always-available analyst

### Trick 13 — Learn As You Build (CLAUDE.md Instruction)
- Add instruction to CLAUDE.md: "When building something new, explain the principles behind your decisions and how they connect to the rest of the system"
- Forces Claude to teach as it codes — critical for vibe coders who don't read the generated code
- When something breaks, you need enough understanding to locate the failure

### Tricks 14–15 (implied: spec-driven and adversarial planning)
- Boris's overarching philosophy: time in planning = token savings in execution
- Plan quality determines output quality more than any prompting trick

## Tools Used

| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Claude Code | Primary coding agent; all tricks are Claude Code-native features | Claude Max subscription |
| Chrome (--chrome flag) | Browser verification loop for front-end changes | Free |
| Git Worktrees | Parallel task isolation without branch-switching overhead | Free (git built-in) |

## Claude Code Integration Points

- **All 15 tricks are native Claude Code features** — no external tools required
- **`/branch`**: built-in conversation forking
- **`remote control` / `teleport`**: built-in cross-device session management
- **`--chrome`**: built-in browser verification flag
- **`/status-line`**: built-in token usage dashboard
- **CLAUDE.md**: the primary config file for project-level behavior shaping

## Key Insight

**The plan is everything** — Boris's core philosophy is that every token saved in planning is multiple tokens lost in execution. The tricks that compound most (Git worktrees + sub-agent plan review + grill-me + CLAUDE.md discipline) all reduce ambiguity before coding starts.

## Reusable Primitives

- **Chrome verification loop**: `--chrome` flag → Claude iterates UI until visually correct → extract as `/verify` slash command
- **Branch + resume pattern**: `/branch` to fork context → explore alternate direction → `resume <id>` to return to checkpoint
- **Cross-device triangle**: desktop `remote control` → mobile → `teleport` back to desktop; use the device that fits the moment
- **Git worktree parallelism**: one worktree per independent task → agents run in parallel → merge when done; no branch collision
- **Grill-me disambiguation**: slash command that interviews you on your plan until zero ambiguity remains; surface implicit assumptions before they become wrong decisions
- **CLAUDE.md teach-as-you-build instruction**: instructs Claude to explain principles behind new code; keeps vibe coders oriented when debugging

## Limitations / Gotchas

- **"Boris" is unnamed in the video** — referred to as the creator of Claude Code; these are his personal workflow rules, not official Anthropic recommendations
- **Global slash command cost**: loading many global libraries adds 30–40k tokens per session before any work starts — install per-project instead
- **Worktrees at scale**: running hundreds of worktrees (as Boris allegedly does) requires effectively unlimited tokens; for normal users, 3–5 parallel worktrees is the practical limit
- **Grill-me command**: video references Matt Pocock's version but doesn't provide the actual command text — requires finding or building your own
- **Context window rule (15–20%)**: this threshold is personal preference; actual degradation point varies by model and task type
