---
title: "Claude Cowork Runs My Social Media (And Built a 2M Audience)"
channel: Marketing Against the Grain
url: https://www.youtube.com/watch?v=oYlA8dtC9WI
date: 2026-05-06
tags: [social-media, content-creation, claude-cowork, blotato, skill-creation, mcp]
tools: [Claude Desktop, Claude Cowork, Blotato, Buffer]
use_cases: [social-media-automation, content-repurposing, infographic-generation, audience-growth]
complexity: beginner
workflow_type: manual-assisted
---

## What This Video Demonstrates

Sabrina Romanov (2M+ audience) walks through her exact Claude Cowork setup for social media: creating a custom write-content skill via a Claude interview, using the Blotato MCP to generate infographics and schedule posts across platforms, and the "update the skill" loop that makes the agent get smarter over time.

## Workflow Steps

### Part 1 — Building a Write-Content Skill via Interview
1. Open Claude Cowork (Claude desktop app + skills highlighted in blue)
2. Start a conversation: "I want to create a skill that writes content in my voice"
3. Claude interviews you: asks about tone, style, what you do, audience, examples of posts you like
4. Based on interview answers, Claude drafts a `write-content.md` skill file
5. Review the draft — confirm it matches your voice and preferences
6. Save the skill; it now appears in your skills list for any future session

### Part 2 — Daily Content Creation Workflow
1. Invoke the write-content skill with a topic or source (e.g. a URL, screenshot, or idea)
2. Claude generates multi-platform post variants: Twitter/X thread, LinkedIn post, Instagram caption
3. For visuals: use Blotato MCP — Claude calls Blotato to generate an infographic from the post
4. Review the infographic inside Claude Cowork (no separate app switch)
5. Schedule posts directly via Blotato's scheduler or export to Buffer

### Part 3 — Screenshot → Multi-Platform Post
1. Take a screenshot of anything (article, stat, tweet, UI)
2. Paste screenshot into Claude Cowork
3. Prompt: "Turn this into a post for [platform] in my voice"
4. Claude uses write-content skill context + screenshot to generate on-brand content
5. Generate infographic via Blotato MCP if needed → schedule

### Part 4 — "Update the Skill" Continuous Improvement Loop
1. After several content sessions, notice patterns in what you like/dislike
2. Prompt: "Update my write-content skill based on our recent sessions"
3. Claude reviews conversation history → identifies patterns → proposes skill updates
4. Review proposed changes → approve → skill file updates automatically
5. Next session: skill starts closer to your taste without manual editing

## Tools Used

| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Claude Desktop (Cowork) | Core agent; holds skills; executes content generation | Claude Max/Pro |
| Blotato | MCP connector; generates infographics; social scheduling | Paid (via MCP) |
| Buffer | Alternative scheduling output for some platforms | Freemium |

## Claude Code Integration Points

- **Skill-as-voice-profile**: the write-content skill is essentially a serialized voice and tone profile that Claude loads at session start — analogous to a system prompt that gets smarter over time
- **Blotato MCP**: registered as an MCP server in Claude Desktop; Claude calls it directly to generate and schedule without leaving the Cowork interface
- **Interview-to-skill pattern**: instead of manually writing a skill file, let Claude interview you and draft it — works for any domain, not just content
- **Screenshot → content pipeline**: Claude Desktop's multimodal input + a skill file + Blotato MCP = a complete visual content pipeline in one interface
- **"Update the skill" hook**: end-of-session or end-of-week skill update prompt keeps the skill improving without manual YAML editing

## Key Insight

**The skill file is a living voice profile** — start it via interview, improve it via "update the skill" prompts after sessions, and it compounds over time. The write-content skill is not a one-time setup; it's the accumulating product of every content session you run through it.

## Reusable Primitives

- **Interview-to-skill creation**: have Claude interview you about your style/voice/preferences → Claude drafts the skill file → you review → instant personalized agent without manual writing
- **"Update the skill" pattern**: after any creative session, prompt Claude to review conversation history and propose skill updates — works for writing, design, coding style, or any taste-dependent workflow
- **Screenshot → post pipeline**: paste any screenshot into Claude Cowork → invoke write-content skill → Blotato MCP for visual → schedule; zero context-switching
- **MCP-as-action-layer**: Blotato MCP lets Claude execute publishing actions (generate, schedule) without the user leaving the chat interface — pattern applies to any tool with an MCP connector
- **Multi-platform from one prompt**: write-content skill generates Twitter, LinkedIn, and Instagram variants in one pass — the skill knows platform format differences so you don't have to prompt them each time

## Limitations / Gotchas

- **Blotato is the dependency**: the visual + scheduling half of this workflow requires a paid Blotato account with the MCP connector; without it, you still get text content but lose the infographic + scheduling integration
- **Interview quality determines skill quality**: the write-content skill is only as good as the interview answers — vague or generic answers produce a generic skill
- **"Update the skill" needs curation**: Claude's proposed skill updates should be reviewed, not auto-applied; occasionally Claude over-generalizes from a single good session
- **Claude Cowork ≠ Claude Code**: this workflow uses Claude Desktop app (sometimes called Cowork), not the CLI Claude Code tool — skills are stored and invoked differently
- **Platform-specific nuance**: the multi-platform post generation works well for text but platform-specific visual specs (Instagram story vs. post sizes) may need manual adjustment in Blotato
