---
title: "Claude Routines — Scheduled AI Agents for Founders"
channel: (Claude Routines demo video)
url: https://www.youtube.com/watch?v=sH8QQXD6PrQ
date: 2026-05-04
tags: [scheduling, automation, productivity, content-creation, analytics]
tools: [Claude Routines, Claude Code, Gmail, Google Calendar, Notion, Slack, Fathom, Stripe, PostHog, GitHub]
use_cases: [personal-productivity, content-creation, analytics, meeting-digest, revenue-tracking]
complexity: beginner
workflow_type: automated-pipeline
---

## What This Video Demonstrates
Claude Routines is a native Claude feature (web/desktop) that lets you create scheduled AI agents via plain English prompt + `/schedule` command — no n8n workflow setup required. The creator runs 6 routines: daily founder brief, weekly self-interview for content ideas, weekly meeting digest, weekly product brief, weekly content research, and monthly revenue pulse. Key decision framework: use Claude Routines for low-frequency, high-reasoning tasks; use n8n for high-frequency, low/no-reasoning tasks.

## Workflow Steps

### Creating a Routine (AI Method)
1. Open terminal (VS Code or Claude desktop)
2. Tell Claude: "Create a cloud routine with the /schedule command to [task], scheduled at [time], using [connectors]"
3. Explicitly mention which connectors to use (Gmail, Calendar, etc.) or it will try MCPs and fail
4. Claude builds and registers the routine automatically

### 6 Live Routines

**1. Daily Founder Brief** (runs 6:30am daily → Slack)
- Connected: Gmail + Google Calendar + Notion + Slack
- Output: Top tasks needing attention + emails ready to reply, posted to Slack #brief channel

**2. Weekly Self-Interview** (weekly → GitHub repo)
- Connected: Google Calendar + Fathom (call transcripts) + Gmail + GitHub
- Claude knows your work context → asks relevant interview questions → answers go to personal brand repo
- Purpose: Build content idea library through structured reflection

**3. Weekly Meeting Digest** (weekly → Notion)
- Connected: Fathom + Notion
- Gets all call transcripts → saves + summarizes in Notion in reviewable format

**4. Weekly Product Brief** (weekly → email)
- Connected: PostHog + Gmail + Notion
- Pulls analytics data → saves to Notion → emails action plan → take actions in Claude Code

**5. Weekly Content Research** (weekly → GitHub content HQ repo)
- Connected: NotebookLM + Google Spreadsheet (YouTube outliers tracker)
- Generates new content ideas, deduplicates against existing idea library

**6. Monthly Revenue Pulse** (monthly → Notion)
- Connected: Stripe + Notion
- Analyzes revenue trends, churn patterns, MoM trajectory → saved to Notion

## Tools Used
| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Claude Routines | Scheduled agent runner (native Claude feature) | Claude Max: 15 daily slots; Pro: 5 slots |
| Fathom | Call transcript API | Paid |
| PostHog | Product analytics connector | Free tier / paid |
| Stripe | Revenue data connector | % of revenue |
| NotebookLM | Content research input | Free |
| GitHub | Knowledge base / content HQ storage | Free |
| n8n | Alternative for high-frequency, non-reasoning automation | Open-source / paid |

## Claude Code Integration Points
- The **Weekly Product Brief → Claude Code** pipeline is directly relevant: PostHog analytics data → action plan → Claude Code executes website updates
- The **GitHub as knowledge base** pattern (personal brand repo, content HQ) directly mirrors the AIWorkflows repo structure being built here
- The **daily brief to Slack** is exactly the pattern to replicate for project status updates in any multi-project setup
- `/schedule` command in Claude Code is the implementation path — maps directly to `anthropic-skills:schedule` skill
- The **n8n vs Claude Routines decision matrix** is the key mental model: reasoning-heavy + infrequent → Routines; deterministic + frequent → n8n

## Key Insight
**The decision matrix**: Claude Routines wins when a task requires reasoning and runs infrequently (weekly/monthly). n8n wins when a task is deterministic and runs frequently (hourly/daily). Don't try to migrate everything to Routines — the 15-slot daily limit on Claude Max is the hard constraint. Use Routines for the 5-6 highest-value reasoning tasks, n8n for the rest.

## Reusable Primitives
- **"Interview me for content ideas" routine**: weekly AI interview using your calendar/email context → structured content idea library — zero-friction content pipeline for personal brand
- **Analytics → action plan → code execution loop**: PostHog/Stripe data → Claude Routines generates action plan → Claude Code executes changes — fully autonomous product improvement cycle
- **Meeting transcript → structured digest**: Fathom/Fireflies → weekly rollup in Notion — applies to any team using meeting recording tools
- **GitHub as the connective tissue**: using GitHub repos as the shared memory layer between Routines (writes) and Claude Code (reads) is a clean, version-controlled knowledge architecture
- **Prompt-driven routine creation**: describe what you want in plain English + specify connectors explicitly → Claude builds the routine — no YAML, no workflow builder

## Limitations / Gotchas
- Claude Max plan: only 15 daily run slots total — plan carefully which routines run daily vs weekly
- Must explicitly name connectors in your prompt or routine will try (and fail) to use MCPs/APIs
- Only official Claude connectors supported — no third-party APIs or custom MCP servers inside Routines
- Check connector availability at claude.ai → Settings → Connectors → Browse before planning any routine
- Not as robust or scalable as n8n for high-volume automation — they're complementary, not competing
- Prompt templates for the 6 routines are linked in video description (not reproduced here)
