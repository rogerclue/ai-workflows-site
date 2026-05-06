---
title: "I built an entire Content Team with Claude Code."
channel: Marketing Against the Grain
url: https://www.youtube.com/watch?v=QcUjsmtT7qw
date: 2026-05-06
tags: [content-creation, multi-agent, skill-system, social-media, orchestrator, feedback-loop]
tools: [Claude Code, Blotato, Perplexity, Firecrawl, X API, OpenAI API]
use_cases: [content-team-automation, social-media-automation, lookalike-content-generation, skill-orchestration]
complexity: advanced
workflow_type: agent-loop
---

## What This Video Demonstrates

A complete 11-skill content system built in Claude Code that replaces a full content team: an orchestrator skill routes tasks to specialized sub-skills (audience profile, writing style, talking point extractor, lookalike content analyzer, post enricher, platform-specific publishers), with a monthly feedback loop that auto-updates all skills based on performance data.

## Workflow Steps

### System Architecture — 11 Skills Overview
1. **Orchestrator skill**: receives any content request → decides which skills to invoke → coordinates output
2. **Audience profile skill**: holds detailed ICP (ideal customer profile) used by all other skills
3. **Writing style skill**: voice, tone, platform-specific formatting rules
4. **Talking point extractor**: given a URL or topic, pulls key claims, stats, angles
5. **Lookalike content skill**: analyzes existing post library to extract winning patterns
6. **Post enricher skill**: takes a draft → adds data, examples, hooks, CTAs
7. **Platform skills** (separate per platform): Twitter/X thread formatter, LinkedIn post, Instagram caption
8. **Performance feedback skill**: monthly runner that pulls analytics → identifies top/bottom posts → updates other skills

### Daily Workflow — Orchestrated Content Creation
1. Give orchestrator a topic, URL, or screenshot
2. Orchestrator calls talking point extractor → gets raw angles
3. Orchestrator calls lookalike skill → gets winning formula for this content type
4. Orchestrator passes both to writing style skill → generates draft
5. Post enricher adds hooks, data points, CTAs
6. Platform skills reformat for each target channel
7. Blotato MCP called for infographic generation and scheduling
8. Human review → approve → publish

### Lookalike Content Skill — Deep Dive
1. Dump all existing posts (export from Buffer, Blotato, or manual CSV)
2. Prompt lookalike skill: "Analyze these posts and extract the top 30% by engagement"
3. Skill identifies winning patterns: hook structures, content formats, topic clusters, length
4. For any new post request: "Generate ideas that match the winning formula from my top posts"
5. Output: content ideas pre-shaped to what already works for your specific audience

### Monthly Feedback Loop — Self-Improving System
1. Pull analytics from X API / platform APIs at month end
2. Feed performance data into feedback skill: top 10 posts, bottom 10 posts, engagement rates
3. Skill analyzes: what worked, what didn't, what patterns correlate with high performance
4. Skill proposes updates to: audience profile, writing style, talking points library
5. Human reviews proposed changes → approves → skills auto-update
6. Next month: entire system starts from an improved baseline

### APIs and External Integrations
- **Perplexity**: real-time research for talking point extraction (current stats, recent news)
- **Firecrawl**: scrapes URLs to extract content for repurposing
- **X API**: pulls post performance data for the feedback loop
- **OpenAI API**: used as fallback or for specific generation tasks within the pipeline
- **Blotato**: infographic generation + multi-platform scheduling (via MCP)

## Tools Used

| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Claude Code | Orchestrates all 11 skills; executes pipeline | Claude Max/Pro |
| Blotato | Infographic generation + social scheduling (MCP) | Paid |
| Perplexity | Real-time research for talking point extraction | API (paid) |
| Firecrawl | URL content extraction for repurposing | API (paid) |
| X API | Pulls post analytics for monthly feedback loop | Free tier / paid |
| OpenAI API | Supplemental generation within pipeline | API (paid) |

## Claude Code Integration Points

- **Orchestrator skill pattern**: one master skill that reads the request, decides which sub-skills to invoke, and sequences them — eliminates the need to manually chain prompts for complex content tasks
- **Lookalike content skill**: dumps post library → Claude extracts engagement patterns → future content generation anchored to what already works; directly replicable for any creator with a post history
- **Monthly feedback loop skill**: scheduled or manually triggered; pulls API data → generates skill update proposals → human approves → skills self-improve; this is the pattern that makes the system compound over time
- **Skill-as-team-member**: each skill represents one "team member" role (researcher, writer, editor, publisher); the orchestrator is the project manager; skills are composable and replaceable
- **Post enricher as quality gate**: after draft generation, a dedicated enricher skill adds the elements most commonly missing from AI drafts (specific data points, concrete examples, strong CTAs)

## Key Insight

**The feedback loop is the moat** — any skilled person can build a content system, but the monthly analytics → skill-update loop means this system gets better every month automatically. After 6 months, the writing style and audience profile skills contain more institutional knowledge about what works for your audience than most human content teams accumulate in years.

## Reusable Primitives

- **Orchestrator + sub-skill architecture**: build one orchestrator skill that routes to specialized skills; scales to any domain (sales, support, research, dev) not just content
- **Lookalike content skill pattern**: export your existing content library → have Claude extract winning patterns → use those patterns as generation constraints; works for any creator or brand with historical content
- **Monthly feedback loop skill**: at month end, feed analytics data to a feedback skill → get specific update proposals for your other skills → approve and apply; creates a compounding improvement system
- **Post enricher as QA layer**: always run drafts through a dedicated enricher skill before publishing; the enricher holds your quality checklist (hook strength, data inclusion, CTA presence) so you don't have to
- **API-connected skill pipeline**: connect Perplexity (research) + Firecrawl (scraping) + platform APIs (analytics) to Claude Code skills; the combination creates a fully autonomous research-to-publish pipeline with real-world data
- **Skills-as-org-chart**: map each "team member" role to a skill file; the orchestrator is the manager; this mental model makes it easy to identify gaps and extend the system

## Limitations / Gotchas

- **API costs add up**: Perplexity + Firecrawl + X API + OpenAI + Claude = 5+ API costs running in parallel; budget for this before building
- **11 skills is a maintenance burden**: each skill file needs to stay in sync; the feedback loop helps but someone still has to review and approve updates monthly
- **Lookalike skill quality depends on post volume**: needs at least 50–100 posts with engagement data to extract meaningful patterns; doesn't work well for new accounts
- **Orchestrator complexity**: writing a good orchestrator skill that correctly routes between 11 sub-skills requires careful design; poorly written orchestrators call wrong skills or duplicate work
- **Human review still required**: the system generates and enriches but not publishes autonomously — human approval before scheduling is a deliberate design choice (and wise given AI content risks)
- **Platform API rate limits**: X API free tier has tight limits; pulling monthly analytics for a high-volume account may require paid tier
