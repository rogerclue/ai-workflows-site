---
title: "Codex is the Best Software Ever Made"
channel: andrew olsson
url: https://www.youtube.com/watch?v=-3lQz-4RTdw
date: 2026-05-04
tags: [vibe-coding, agent-orchestration, computer-use, browser-automation, multi-tasking]
tools: [Codex, GPT-image-2, Computer Use plugin, Chronicle memory, OpenAI]
use_cases: [vibe-coding, general-knowledge-work, marketing-research, game-development, dictation]
complexity: beginner
workflow_type: manual-assisted
---

## What This Video Demonstrates
OpenAI Codex is positioned as a general-purpose knowledge work orchestrator, not just a coding tool. It combines Claude Code + Claude Cowork into one interface with added computer use (mouse control), browser use, system-wide dictation, Chronicle (screenshot-based memory), and parallel task execution — all within a $100/month pro plan that uses a time-based usage model (5-10 hours) rather than token counting.

## Workflow Steps

### Parallel Multi-Task Demo
1. Task A: Prompt Codex to design + build a browser game from a GPT-image-2 generated image (ran 23 minutes autonomously)
2. Task B simultaneously: Marketing research on wine retailers — find contact info from a CSV, update the doc
3. Task C: Use Computer Use plugin to control YouTube Music via natural language
4. Task D: System-wide dictation in Notes app (Command+D hotkey)
5. All tasks ran in parallel — user did other things while Codex worked

### Marketing Research Workflow
1. Input: CSV of wine retailers with gaps in contact info
2. Codex browses web, finds sales/management contacts for 5-6 companies
3. Output: Updated CSV with email, phone, inventory notes per retailer

### Image-to-Game Workflow
1. Input: Text prompt describing game concept
2. GPT-image-2 generates UI mockup
3. "Turn that image into a working browser game"
4. Codex builds complete HTML/JS game from image reference (23 min autonomous)
5. Output: Playable browser game file

## Tools Used
| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Codex | Main orchestrator — code, research, file manipulation | $100/mo (pro, 5-10hr limit) |
| GPT-image-2 | Photorealistic / UI image generation | Included in Codex |
| Computer Use plugin | Mouse control across native Mac apps | Included |
| Browser Use | Built-in browser for research and app testing | Included |
| Chronicle | Screenshot-based persistent memory | Included (privacy concern) |
| System-wide dictation | Voice-to-text in any Mac app via hotkey | Included |

## Claude Code Integration Points
- Codex competes directly with Claude Code — understanding its strengths/weaknesses informs when to use each
- Key Codex advantage: **time-based usage** (hours, not tokens) makes long autonomous tasks economical
- Key Claude Code advantage: skill ecosystem, hooks, MCP server ecosystem, Hermes integration
- The parallel task execution model (multiple long-running tasks simultaneously) is a target architecture for Claude Code multi-agent setups
- Chronicle memory concept could be replicated with periodic screenshot + Claude analysis hooks

## Key Insight
**Codex uses time-based limits, not token limits** — 23 minutes of autonomous work + multiple parallel tasks used only 3-6% of the monthly limit. This makes long-running autonomous workflows economically viable in a way that per-token pricing doesn't. The mental model shift: treat Codex like a contractor with a time budget, not a metered API.

## Reusable Primitives
- **Image → game / UI → working code**: generate UI mockups first, then use them as the spec for implementation
- **Parallel task queue**: kick off 3-4 long-running tasks simultaneously, check results when done — don't wait serially
- **CSV enrichment via web research**: structured data + web browsing + file update = automated research workflow applicable to lead gen, competitor analysis, etc.
- **Time-based vs token-based budgeting**: if a workflow requires many autonomous steps, time-based pricing models are dramatically cheaper

## Limitations / Gotchas
- Computer use is slow (~90 seconds for tasks that take 10 seconds manually) — only useful when human oversight isn't needed
- Chronicle raises privacy concerns (screenshots of everything you do)
- The $100/mo plan is likely underpriced — creator expects cost to increase
- Game output didn't exactly match image spec — creative fidelity gap between mockup and output
- Plugin ecosystem (hundreds of connectors) glossed over — actual integration depth varies per plugin
- Context/memory still limited (1M tokens ≈ "remembers a day" per Andrew Wilkinson analogy)
