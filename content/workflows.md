# AI Workflows — Reusable Workflow Patterns

Extracted cross-report primitives. Each pattern is tool-agnostic where possible, with concrete implementations noted.

---

## 1. Brand Identity → Assets → Website (One Session)

**What it does**: Takes a product category + positioning → generates full brand identity, design system, marketing assets, and deploys to website.

**Steps**:
1. Brand inputs (product category, competitors, persona) → AI brand research + positioning
2. Brand positioning → design system PDF (colors, typography, voice, materials)
3. Design system + product inputs → product images, brand avatar, UGC videos
4. Brand assets → inject into website codebase → automated rebrand

**Tools**: Claude Code + Higgsfield MCP (Brand Launch Pack + GTM Pack skills)
**Report**: [Claude + Higgsfield MCP](reports/claude-higgsfield-mcp-marketing.md)
**Time**: ~15–30 minutes end-to-end
**Cost**: Claude Code subscription + Higgsfield subscription

---

## 2. URL → Full Social Media Kit

**What it does**: Provide a website URL and get a complete 14-asset social media kit dropped to desktop — no brand assets required upfront.

**Steps**:
1. `/gtm` in Claude Code → provide URL
2. Claude Code reads site, extracts brand signals
3. Higgsfield MCP generates: Instagram carousels, hero images, 1:1 squares, videos in multiple resolutions, UGC videos
4. Full media kit delivered to desktop folder

**Tools**: Claude Code + Higgsfield MCP (GTM Pack skill)
**Report**: [Claude + Higgsfield MCP](reports/claude-higgsfield-mcp-marketing.md)
**Time**: 2–5 minutes
**Cost**: Claude Code + Higgsfield

---

## 3. Scheduled Founder Intelligence Brief

**What it does**: Automatically aggregates email, calendar, Slack each morning into a prioritized task list with reply-ready email suggestions.

**Steps**:
1. Claude Routine triggers at 6:30am daily
2. Connects: Gmail + Google Calendar + Notion + Slack
3. Synthesizes top priorities + emails needing replies
4. Posts formatted brief to Slack #brief channel

**Tools**: Claude Routines (or Hermes Agent on cron)
**Reports**: [Claude Routines](reports/claude-routines-scheduled-agents.md), [Hermes Agent — 7 Use Cases](reports/hermes-agent-7-use-cases.md)
**Cadence**: Daily
**Limit**: Counts against Claude Max 15-slot daily budget

---

## 4. Analytics → Agent → Ad Platform Loop

**What it does**: Real business analytics data drives autonomous ad creation, budget adjustments, and multivariate testing — no human in the loop for routine optimization.

**Steps**:
1. PostHog (product analytics) feeds data to marketing agent
2. Agent analyzes performance, identifies winning/losing segments
3. Agent generates new ad creative variations
4. Agent adjusts budgets on Meta/Reddit Ads autonomously
5. Agent responds to natural language commands: "increase budget by $1k"

**Tools**: PostHog + Harbor marketing agent + Meta Ads API + Reddit Ads API
**Report**: [AI Agents Run My Business](reports/greg-isenberg-ai-agents-run-business.md)
**Validation**: ~$20k/mo revenue at small scale; path to $100k/mo ad budget

---

## 5. Nightly Transcript → Vector Database → Natural Language Query

**What it does**: All meeting recordings automatically flow into a queryable knowledge base. Ask "what are the biggest issues across my portfolio?" and get an answer.

**Steps**:
1. Fireflies (or Fathom) records all meetings → API
2. Nightly cron pulls transcripts → converts to Markdown
3. Markdown saved to Gbrain (second brain)
4. Vectors trained in Pinecone on all business/portfolio data
5. Natural language query: "Review last quarter, give me icebergs or issues"

**Tools**: Fireflies + Pinecone + Gbrain + Claude
**Report**: [AI Agents Run My Business](reports/greg-isenberg-ai-agents-run-business.md)
**Caveat**: Vector accuracy issues (wrong person as CEO, numbers slightly off); 1M token context ≈ "remembers a day"

---

## 6. Meeting Transcript → Structured Digest

**What it does**: All calls from the week automatically get summarized and organized in Notion for review.

**Steps**:
1. Fathom records all calls → transcript API
2. Claude Routine (weekly) pulls all transcripts
3. Generates summaries + action items per call
4. Saves structured digest to Notion in reviewable format

**Tools**: Fathom + Claude Routines + Notion
**Report**: [Claude Routines](reports/claude-routines-scheduled-agents.md)
**Cadence**: Weekly

---

## 7. Self-Interview for Content Ideas

**What it does**: Generates a steady stream of personal brand content ideas by interviewing you based on your actual work context.

**Steps**:
1. Claude Routine triggers weekly
2. Reads Google Calendar + Fathom call transcripts + Gmail for work context
3. Claude generates relevant interview questions based on what you actually did
4. Answers the questions itself using your work context
5. Saves Q&A to GitHub personal brand repo as content idea library

**Tools**: Claude Routines + Google Calendar + Fathom + Gmail + GitHub
**Report**: [Claude Routines](reports/claude-routines-scheduled-agents.md)
**Cadence**: Weekly; zero-friction content pipeline

---

## 8. Design System Selection → Polished UI Generation

**What it does**: Eliminates "AI slop" in UI generation by constraining output to a named design system before generating anything.

**Steps**:
1. Select design system (Anthropic, Stripe, Vercel, Brutalist, etc.) from 71 built-ins
2. Paste PRD executive summary as context
3. Define page structure (11-section framework: hero, problem, how-it-works, benefits, CTA, etc.)
4. AI generates within those constraints
5. Output: Conversion-optimized HTML landing page

**Tools**: Open Design (free) + Claude Code / Codex / Cursor as backend
**Report**: [Open Design](reports/open-design-vibe-coding-ui.md)
**Key insight**: The design system selection is the quality-control lever — never generate UI without it

---

## 9. Image → Working Code (UI-First Development)

**What it does**: Generate a UI mockup first, then use it as the spec for implementation — higher fidelity than text descriptions alone.

**Steps**:
1. Describe game/app concept in text
2. GPT-image-2 (or any image gen) creates visual mockup
3. "Turn that image into a working [game/app]"
4. Agent builds complete HTML/JS/React from image reference

**Tools**: GPT-image-2 + Codex (or Claude Code)
**Report**: [Codex](reports/codex-best-software-ever.md)
**Time**: 23 min autonomous for browser game; fidelity gap exists but output is functional

---

## 10. Natural Language → Edited Video

**What it does**: Raw video recording → trimmed, subtitled, motion-graphics video without touching a timeline editor.

**Steps**:
1. Drop raw MP4/MOV into Claude project with Hyperframes
2. Describe edits: "trim filler words, add motion graphics, add subtitles"
3. Hyperframes processes via Remotion under the hood
4. Output: Edited video + timeline for fine-tuning
5. Optional: Adjust motion graphic timing manually

**Tools**: Claude Code + Hyperframes (paid SaaS) + Remotion + ffmpeg
**Report**: [Claude Video Editing](reports/claude-video-editing-hyperframes.md)
**Limitation**: Template-based motion graphics; best for short-form content

---

## 11. Parallel Task Queue (Don't Wait, Delegate)

**What it does**: Run multiple long-horizon autonomous tasks simultaneously instead of waiting for each to complete before starting the next.

**Steps**:
1. Identify 3–5 independent tasks
2. Kick off all simultaneously in Codex (or Claude Code multi-agent)
3. Do other work while agents run
4. Check results when all are complete

**Tools**: Codex (time-based model makes this economical) or Claude Code with parallel agents
**Report**: [Codex](reports/codex-best-software-ever.md)
**Key insight**: Time-based pricing (Codex) vs token-based (Claude Code) — parallel tasks are dramatically cheaper on time-based models

---

## 12. Three-Agent Business Stack (Minimum Viable Agent Org)

**What it does**: Replace an ops team for a solo-founder SaaS with three specialized agents covering support, development, and marketing.

**Agents**:
- **Support agent**: Customer email → ticket resolution or escalation → response
- **Dev agent**: Escalations → bug fix → PR → auto-merge P0 issues
- **Marketing agent**: Analytics data → ad optimization → creative generation

**Tools**: Harbor (agent harness) + Claude/OpenAI + PostHog + Meta Ads + Reddit Ads
**Report**: [AI Agents Run My Business](reports/greg-isenberg-ai-agents-run-business.md)
**Validation**: Solo founder, ~$20k/mo revenue, no ops team

---

## 13. Self-Maintaining Agent Skill Library (Curator Pattern)

**What it does**: Prevent skill library entropy — automatically prune dead skills, consolidate overlapping ones, and surface usage rankings weekly.

**Steps**:
1. Curator runs on 7-day cron cycle
2. Reviews entire skill library, grades by usage and performance
3. Consolidates overlapping skills
4. Prunes dead/inactive skills
5. Archives with full audit trail (JSON + human-readable MD report)
6. Protected/pinned skills never touched

**Tools**: Hermes Agent v0.12 (autonomous curator feature)
**Report**: [Hermes Agent v0.12](reports/hermes-agent-v012-self-maintaining.md)
**Applicable to**: Any accumulating knowledge base — skill libraries, report folders, tool configs

---

## 14. Skill Auto-Generation from Task Execution

**What it does**: Every novel complex task automatically becomes a reusable skill — agent gets faster at your specific workflows over time without manual skill authoring.

**How it works**:
1. Complete a complex task
2. Agent's self-improvement loop runs in background after each turn
3. Loop grades session against rubric
4. Applies "active update bias" — updates the skill that was actually used
5. Over weeks: skill library perfectly calibrated to your actual workflow patterns

**Tools**: Hermes Agent (self-improvement loop, any version)
**Report**: [Hermes Agent — 7 Use Cases](reports/hermes-agent-7-use-cases.md), [Hermes Agent v0.12](reports/hermes-agent-v012-self-maintaining.md)
**Claude Code equivalent**: After completing novel workflows, prompt Claude to write a skill file for reuse

---

## Decision Framework: Automation Tool Selection

```
Is the task reasoning-heavy AND runs infrequently (weekly/monthly)?
  → Claude Routines

Is the task deterministic AND runs frequently (hourly/daily)?
  → n8n

Does the task require multiple specialized agents with defined roles?
  → Harbor

Do you need a self-improving agent that builds persistent memory?
  → Hermes Agent

Do you need brand assets + video generated from a brief?
  → Claude Code + Higgsfield MCP

Do you need parallel long-running tasks with time-based pricing?
  → Codex

Do you need UI that doesn't look like AI slop?
  → Open Design (pick design system first)
```
