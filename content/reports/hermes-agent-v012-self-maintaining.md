---
title: "Hermes Agent v0.12: It Now Maintains Itself"
channel: Panda Making Money
url: https://www.youtube.com/watch?v=jY85zt6Bs4o
date: 2026-05-04
tags: [agent-infrastructure, self-improvement, skill-management, multi-platform, lm-studio]
tools: [Hermes Agent, ComfyUI, TouchDesigner, LM Studio, Spotify, Google Meet, Discord, Slack, Telegram]
use_cases: [agent-infrastructure, self-improving-agent, local-llm, meeting-automation, image-generation]
complexity: advanced
workflow_type: agent-loop
---

## What This Video Demonstrates
Hermes Agent v0.12 introduces the "autonomous curator" — a background agent that runs on a 7-day cycle to manage, consolidate, and prune your entire skill library without manual intervention. Combined with an upgraded self-improvement loop (rubric-based grading, active update bias, restricted tool scope), this creates a two-layer system: the loop keeps skills current turn-by-turn, the curator keeps the library healthy week-by-week. Additional changes: LM Studio as first-class provider, 4 new inference providers, Spotify + Google Meet native integrations, 57% faster startup, and a plugin architecture for messaging platform adapters.

## Workflow Steps

### Autonomous Skill Maintenance (New in v0.12)
1. Curator wakes on 7-day cron cycle
2. Reviews entire skill library, grades each skill by usage and performance
3. Consolidates overlapping skills, prunes dead/inactive ones
4. Archives with full audit trail: `logs/curator/run.json` + human-readable `.md` report
5. Protected skills (pinned or bundled) are never touched
6. Run `hermes curator status` to see ranked skill library by usage

### Self-Improvement Loop (Upgraded)
1. After every conversation turn, a background fork spins up
2. Fork grades the session against a defined rubric (new: not open-ended reasoning)
3. Applies "active update bias" — updates the skill that was actually used, not tangential ones
4. Fork inherits parent's runtime (model, provider, credentials) — no more config drift
5. Fork is scoped to memory + skill tools only (no shell, no web search)
6. Prior turn tool messages excluded from fork context (cleaner signal)

### Spotify Integration
1. Connect via PKCE OAuth wizard
2. 7 dedicated tools: playback, search, queue, playlist, device selection
3. Wire into cron jobs: e.g., start focus playlist at work session start
4. Bundled skill gives agent context for Spotify interactions

### Google Meet Pipeline
1. Hermes joins a Meet call as an active participant
2. Transcribes in real-time via OpenAI real-time transport
3. Speaks in the call
4. Generates follow-up content (summary, action items) after meeting ends

## Tools Used
| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Hermes Agent v0.12 | Core agent with autonomous curator + self-improvement | Free/open-source |
| LM Studio | Local model provider (now first-class) | Free |
| ComfyUI v5 | Image generation (now bundled by default, hardware-gated) | Free (local) |
| TouchDesigner MCP | Generative visuals / interactive media (now bundled) | TouchDesigner license |
| Spotify | Music automation via 7 native tools | Spotify account |
| Google Meet | Meeting participation pipeline | Google account |
| Humanizer skill | Strips AI-isms from generated content | Included |
| ClawDesign skill | HTML artifact generation | Included |

## Claude Code Integration Points
- The **autonomous curator pattern** is directly applicable to Claude Code skill management: a weekly cron agent that reviews `~/.agents/skills/`, identifies stale skills, and suggests pruning
- The **two-layer improvement model** (turn-level loop + weekly library audit) is the architecture to build for any long-lived Claude Code workflow system
- **Rubric-based grading** vs open-ended reasoning for skill evaluation — use this approach when building any auto-evaluation loop in Claude Code
- **Non-interactive one-shot mode** (`hermes -z "prompt"`) maps to Claude Code's headless/scripted usage — useful for CI/CD integration
- **Plugin architecture for platform adapters** is the model for how to extend Claude Code's MCP server ecosystem without forking core code
- The **Humanizer skill** is available as a Claude Code skill — useful for any content generation workflow

## Key Insight
**v0.12 is the first version where the agent manages its own configuration** — not just doing tasks, but actively maintaining itself. The curator + self-improvement loop combination means the agent gets better aligned with your specific workflow over weeks without you managing it. This is the first credible example of a "set it and forget it" agent that actually improves.

## Reusable Primitives
- **7-day curator cron pattern**: apply to any accumulating knowledge base (skill libraries, report folders, tool configs) — weekly cleanup agent prevents entropy
- **Rubric-based evaluation**: when building any auto-grading or auto-evaluation loop, define explicit rubrics rather than asking for free-form reasoning — more consistent, more predictable
- **Restricted fork tool set**: when spawning evaluation/review sub-agents, explicitly limit their tool access to prevent scope creep
- **Plugin host architecture**: design systems so new integrations can be added as drop-in plugins without touching core — mirrors MCP server pattern
- **One-shot CLI mode**: pipe agent into scripts and CI — `hermes -z "summarize today's PRs" | slack-post` style automation
- **Hardware-gated local tool selection**: check for GPU/CPU resources before routing to local vs cloud provider — save costs when local is available

## Limitations / Gotchas
- Curator runs on a 7-day cycle by default — can't force an immediate run without config change
- Secret redaction now OFF by default (was causing corruption) — re-enable explicitly if needed
- Kanban multi-profile board and computer use (CUA driver) were added then reverted — coming in v0.13
- Google Meet pipeline requires Node-Bot server setup — not plug-and-play
- LM Studio local models still slower than cloud — computer use workflows not viable locally
- 1,000+ commits, 550 PRs in this release — breaking changes likely for anyone on custom forks
