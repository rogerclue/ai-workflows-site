---
title: "Stop using Claude. Start using Codex?"
channel: Greg Isenberg
url: https://www.youtube.com/watch?v=LWx4FGam2aQ
date: 2026-05-06
tags: [codex, openai, agent-platform, browser-use, remotion, vibe-coding]
tools: [Codex, Claude, Remotion, Browser Use]
use_cases: [agentic-task-execution, browser-automation, motion-graphics, app-building]
complexity: beginner
workflow_type: agent-loop
---

## What This Video Demonstrates

A 64-minute conversational walkthrough of OpenAI Codex as a general-purpose agent platform — covering skills (reusable agent instructions), automations (scheduled/triggered tasks), browser use (web scraping and form automation), and Remotion integration for motion graphics. Positioned as "Codex replacing Claude Code" for non-technical founders who want agents without a terminal.

## Workflow Steps

### Codex Skills — Reusable Agent Instructions
1. Create a Skill in Codex: natural language instructions for a repeatable task (e.g., "write a tweet thread from any URL I paste")
2. Skills appear in the sidebar → invoke by name in any new chat
3. Skills can chain: one skill calls another (e.g., research skill → writing skill)
4. Equivalent to Claude Code skill files but without `.md` files — all stored in Codex UI

### Codex Automations — Scheduled + Event-Triggered Tasks
1. Go to Automations → New Automation
2. Set trigger: schedule (cron), webhook, or "on file change"
3. Write the automation prompt (can reference a Skill by name)
4. Automation runs headlessly on OpenAI's servers — no local machine needed
5. Example: "Every morning at 7am, research today's top AI news and post a summary to Slack"
6. Equivalent to Claude Routines (remote) but inside Codex

### Browser Use — Web Automation Agent
1. Enable Browser Use in Codex settings
2. Prompt: "Go to [site], find [data], return it as a table"
3. Codex spins up a visible browser, navigates, extracts data
4. Works for: price monitoring, form submission, lead scraping, research
5. No Playwright or Puppeteer code needed — pure natural language

### Remotion Integration — Motion Graphics from Prompts
1. In Codex: "Create a Remotion animation showing [description]"
2. Codex generates the React/Remotion component code
3. Preview renders in the Codex canvas
4. Export: render to MP4 or use as component in a larger project
5. Equivalent to: Claude Code + Remotion skill, but within Codex UI

## Tools Used

| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Codex | Agent platform; runs skills, automations, browser use, and Remotion | OpenAI subscription |
| Claude | Compared throughout as the alternative; better for coding tasks | Claude Max/Pro |
| Remotion | Programmatic video/motion graphics framework | Open-source |
| Browser Use | Web automation agent layer inside Codex | Included in Codex |

## Claude Code Integration Points

- **Skills vs Skill Files**: Codex Skills are the platform-managed equivalent of Claude Code `.md` skill files — same concept, different implementation. Claude Code skills live in `~/.claude/skills/`; Codex skills live in the UI.
- **Automations vs Claude Routines**: Codex Automations ≈ Claude Routines (remote). Both run scheduled tasks on cloud servers without local machine. Claude Routines use MCP connectors; Codex Automations are self-contained.
- **Browser Use vs MCP browser tools**: Codex Browser Use is comparable to claude-in-chrome MCP or Playwright MCP — natural language web automation without code.
- **Remotion**: Claude Code has a built-in Remotion skill; Codex also supports Remotion generation. Either platform can produce programmatic video.

## Key Insight

**Codex is a better fit for non-technical founders; Claude Code is better for developers** — Codex wraps everything in a GUI (skills, automations, browser use, canvas preview) that removes the terminal entirely. Claude Code requires comfort with file systems and CLI but gives more control, composability, and integration depth. The choice depends on whether you want simplicity or power.

## Reusable Primitives

- **Skills-as-reusable-prompts pattern**: Name and save any effective prompt as a "skill" — invoke by name instead of retyping. Works in Codex (UI) or Claude Code (`.md` files).
- **Headless automation pattern**: Set a scheduled automation → runs on cloud servers → no local machine required. Codex Automations and Claude Routines (remote) both implement this.
- **Browser use for research loops**: Natural language → browser agent → structured data extraction. Eliminates need for Playwright code for most scraping tasks.
- **Remotion for programmatic video**: Describe animation in natural language → agent generates React/Remotion code → renders to MP4. Works in both Codex and Claude Code.
- **Platform comparison heuristic**: Non-technical user + wants GUI → Codex. Developer + wants composability/CLI/MCP → Claude Code.

## Limitations / Gotchas

- **Conversational format**: This is a 64-minute interview/product tour — not a step-by-step tutorial. Workflow steps above are reconstructed from discussion, not demonstrated in sequence.
- **Codex pricing not specified**: OpenAI subscription tier required for Codex; specific pricing for automations/browser use usage not discussed.
- **Browser Use quality varies**: Like all browser automation agents, complex multi-step flows with dynamic sites require prompt iteration — not one-shot reliable.
- **Remotion requires rendering time**: Generating complex animations and rendering to MP4 takes significant compute — not instant.
- **Skills not portable**: Codex Skills are locked to the Codex platform; Claude Code skill files are portable markdown that works across any agent that reads files.
- **Greg's framing is provocative**: The "stop using Claude" framing is clickbait — the actual recommendation is more nuanced (use the right tool for your technical level and use case).
