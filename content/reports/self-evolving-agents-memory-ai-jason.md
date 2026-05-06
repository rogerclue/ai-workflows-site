---
title: "Okay, this unleashed my agent"
channel: AI Jason
url: https://www.youtube.com/watch?v=2zhchG0r6iI
date: 2026-05-06
tags: [agent-memory, self-evolving-agents, claude-code, hermes-agent, skill-extraction, hooks]
tools: [Claude Code, Hermes Agent, Open Claw, Mem Zero, Qdrant, SQLite]
use_cases: [agent-memory-architecture, self-improving-agents, skill-auto-generation, in-context-learning]
complexity: advanced
workflow_type: agent-loop
---

## What This Video Demonstrates

A technical breakdown of the state-of-the-art implementation for self-evolving agents — covering two distinct paradigms (Auto Agent harness evolution vs. in-context learning), how Claude Code's hidden 3-layer memory system works, and how Hermes Agent implements autonomous skill and memory extraction via async background processes.

## Workflow Steps

### Two Paradigms of Self-Evolving Agents

**Paradigm 1 — Auto Agent / Auto Research (harness evolution)**
- A for-loop: define vision in `program.md` → agent reads it → improves agent harness/scripts → runs evaluation → keeps or discards → repeat infinitely
- Output: an improved agent harness (frozen after each cycle — like fine-tuning)
- Requires: large task database + programmatic evaluation — most users don't have this
- Examples: Auto Agent, Auto Research (from Andrej Karpathy's work)

**Paradigm 2 — In-Context Self-Learning (practically useful today)**
- Agent remembers its actions and feedback → makes better decisions next time
- No task database needed — works from live conversations
- Examples: Hermes Agent, Claude Code Auto Memory, Auto Dream feature
- **This is the practical paradigm to implement now**

### Claude Code's 3-Layer Memory System

1. **Hot memory** — `CLAUDE.md` file; always loaded into system prompt; contains user preferences, guardrails, behavior rules
   - Problem: quickly becomes bloated → solution: use as index pointing to other files
2. **Warm memory** — domain knowledge files loaded on demand; `CLAUDE.md` instructs agent when to read which file
3. **Cold memory** — raw conversation history; not yet searchable by default in Claude Code
4. **Auto Memory feature** — can be enabled; adds special system prompt instructing agent when to save memory and what type; automates hot/warm memory updates
5. **Auto Dream** (leaked from Claude Code source) — hidden feature; automatically extracts learnings and best practices from conversations into memory

### Hermes Agent 4-Tier Memory Architecture

1. **Hot memory** — `user.md` (user persona, preferences, workflow habits) + `memory.md` (environment facts, project conventions, OS); both always in system prompt; strict 4,000 character cap total
2. **Warm memory** — skills (domain knowledge); loaded on demand; the primary store for task knowledge
3. **Cold memory** — raw conversation history saved to local SQLite DB; searchable via session search
4. **Semantic memory** (optional) — plug in Mem Zero or Qdrant for long-term semantic retrieval

**Autonomous extraction triggers:**
- **Skill extraction**: after every non-trivial task completion, async sub-agent spins up (doesn't block main agent) → reviews conversation → creates/patches skills if non-trivial approach was used
- **Memory extraction**: every 10 agent turns → async memory reviewer spawns → asks "has user revealed persona/preferences/expectations?" → saves to `user.md` / `memory.md`

### Hermes Agent Skill Auto-Generation

1. After completing complex task, skill reviewer sub-agent launches in background
2. Reviewer prompt: "Review the conversation. Consider saving a skill if a non-trivial approach required trial-and-error or course correction."
3. Agent uses skill manager tool: create/patch/delete skills and their files
4. Proactive patch instruction: "If using a skill and finding it outdated, incomplete, or wrong — patch it immediately. Don't wait to be asked. Skills that aren't maintained become liabilities."
5. **Safety scan**: new skills pass through `skill_guard.py` with reject patterns → auto-fails and deletes unsafe skills → sends feedback to agent for adjustment

### Hooks-Based Self-Improvement (for Claude Code / Open Claw)

For agents without native self-evolution, add via hooks:
1. **UserPromptSubmit hook**: after every user message → append memory-generation reminder to context
2. **PostToolUse hook (Bash)**: after every bash command → check output against error patterns → if error detected, append "error detected" reminder prompt to tool result
3. **System prompt injection**: `self-improving-reminder.md` injected at bootstrap as part of system prompt
4. Add `.learnings/` folder with `learnings.md`, `errors.md`, `feature-requests.md`

### State-of-the-Art Self-Learning Architecture (Blueprint)

```
Hot memory:   user.md + memory.md (always in system prompt, ≤4K chars)
Warm memory:  skills (domain knowledge, loaded on demand)
Cold memory:  SQLite conversation log (searchable)
Semantic:     Mem Zero / Qdrant (optional, for long-term retrieval)

Async triggers:
- Every task completion → skill reviewer sub-agent → create/patch skills
- Every 10 turns → memory reviewer sub-agent → update user.md / memory.md
- Hooks → reinforce memory-saving behavior without blocking main agent
```

## Tools Used

| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Claude Code | Agent runtime with 3-layer memory (CLAUDE.md hot + warm + Auto Memory) | Claude Max/Pro |
| Hermes Agent | Reference implementation of 4-tier memory + autonomous skill/memory extraction | Open-source |
| Open Claw | Alternative agent harness; can add self-learning via skills + hooks without switching to Hermes | Open-source |
| SQLite | Local database for raw conversation history storage (cold memory layer) | Free |
| Mem Zero | Semantic memory layer; pluggable into Hermes for long-term retrieval | Usage-based |
| Qdrant | Vector database alternative for semantic memory layer | Free/paid |

## Claude Code Integration Points

- **Auto Memory feature**: enable in Claude Code to get automatic hot/warm memory extraction without manual CLAUDE.md management
- **Auto Dream (leaked)**: hidden Claude Code feature that autonomously extracts learnings from conversations — watch for official release
- **CLAUDE.md as index**: keep CLAUDE.md lean (index only) with pointers to warm memory files — prevents context bloat
- **Hooks for self-improvement**: `UserPromptSubmit` hook appends memory reminder; `PostToolUse` (Bash) hook catches errors and reinforces learning; both implementable in `~/.claude/settings.json`
- **Skills as warm memory**: the `.learnings/` pattern (learnings.md, errors.md, feature-requests.md) adds structured self-improvement to any Claude Code setup

## Key Insight

**Async background skill/memory extraction is the mechanism that makes agents feel smarter** — the key is not asking humans or the main agent to manually capture learnings, but spinning up a lightweight reviewer sub-agent after every session that autonomously decides what's worth saving. Hot memory (always loaded) + warm memory (skills on demand) + cold memory (searchable history) is the three-layer blueprint that all state-of-the-art agents converge on.

## Reusable Primitives

- **3-layer memory blueprint**: hot (always loaded, ≤4K chars) + warm (skills, on demand) + cold (SQLite history, searchable) — implement in any agent harness
- **Async skill reviewer pattern**: after complex task → non-blocking sub-agent reviews conversation → creates/patches skill if non-trivial approach was used → main agent unblocked
- **10-turn memory extraction**: lightweight trigger — every 10 turns spawn memory reviewer → check for user preferences/persona/expectations → update user.md
- **Hooks-based reinforcement**: PostToolUse (Bash) error detection + UserPromptSubmit memory reminder = self-improvement without native support
- **4,000 character hot memory cap**: forces lean system prompt; pushes task knowledge into skills; prevents context bloat
- **Skill safety scan**: `skill_guard.py` with reject patterns prevents unsafe auto-generated skills from persisting

## Limitations / Gotchas

- **Auto Agent paradigm requires task database**: the harness-evolution approach needs a large benchmark + programmatic evaluator — not viable for most individual users
- **Auto Dream is leaked/unofficial**: the hidden Claude Code feature hasn't been officially released; behavior may change or disappear
- **4K char memory cap is strict**: Hermes enforces this to keep system prompt lean — requires discipline in what gets saved to hot memory vs. skills
- **SQLite cold memory not semantically searchable by default**: requires adding Mem Zero or Qdrant plugin for natural language retrieval over history
- **Async processes add latency**: skill/memory reviewer sub-agents run after each session — adds background compute cost
- **Open Claw migration to Hermes is one command**: if already using Open Claw, migration is easy — but evaluate whether the added complexity of Hermes is worth it for your use case
