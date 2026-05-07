---
title: "Build a $10,000/mo UGC Ad Machine with Claude + Arcads"
channel: Cowork/David style creator
url: https://www.youtube.com/watch?v=xyKxB8q7wQk
date: 2026-05-06
tags: [ugc, arcads, claude-cowork, dropshipping, feedback-loop, ecommerce]
tools: [Claude Cowork, Arcads, CLAUDE.md, Chrome extension, Starop]
use_cases: [full-automated-ugc-ad-pipeline-for-physical-products, meta-ads-feedback-loop-for-continuous-optimization]
complexity: intermediate
workflow_type: agent-loop
---

## What This Video Demonstrates

Full end-to-end UGC ad generation pipeline for ecommerce brands using Claude Cowork + Arcads (or Starop). Claude takes a product brief, generates scripts across 13 formats, browses Arcads/Starop to find matching actors, submits via API, downloads finished videos to desktop. After 48 hours of ad performance data, paste Meta/TikTok metrics back into Claude → it writes the next batch of scripts optimized for what worked.

## Workflow Steps

1. Set up workspace: Claude Cowork (code tab in Claude Desktop) + Chrome extension for browser control
2. Configure brand DNA in Arcads/Starop: paste product URL → auto-extract product images, brand colors, description
3. Provide two skill files to Claude (drag & drop): one for prompt writing, one for Arcads video generation
4. Give Claude product brief: name, price, target demographic, pain points, CTA destination, platform (Meta/TikTok)
5. Claude generates hook + script variations across requested formats (13 formats available: iPhone handheld, Pixar, podcast, cinematic short film, ASMR, etc.)
6. Review and approve prompts → Claude takes over browser via Chrome extension
7. Claude browses Arcads actor library → filters by target demographic → selects 4-5 best-fit actors → saves batch.json
8. Claude submits scripts + actors to Arcads API → downloads finished video files to desktop /videos folder
9. After 48 hours: paste ad performance data (CTR, CPM, ROAS) → Claude analyzes winners → writes next batch optimized for winning hooks/actors
10. Save learnings to CLAUDE.md permanently → agent gets smarter every cycle

## Tools Used

| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Claude Desktop + Cowork tab | Orchestrator + browser agent | Pro plan |
| Arcads / Starop | UGC video generation with AI actors | Pro plan (~$200/mo for API) |
| Chrome Extension (Claude) | Browser control for UI automation | Free |
| CLAUDE.md | Persistent agent brain with quality checklist + API structure | Free |
| Anthropic API | Direct API calls from agent | ~$10-20 credits |
| Meta Ads Manager | Performance data source for feedback loop | Advertiser account |

## Claude Code Integration Points

- CLAUDE.md is literally Claude Code's native project file — this workflow IS Claude Code native
- Skill files drag-dropped into Claude = instant capability injection
- .env file pattern for API key management matches Claude Code best practices
- Feedback loop with CLAUDE.md update = persistent learning across sessions

## Key Insight

**The 48-hour feedback loop turns an ad machine into a learning system** — by pasting performance data back into Claude every 48 hours and having it rewrite the next batch based on winners, the system compounds intelligence rather than just producing more content volume.

## Reusable Primitives

- Brand DNA URL crawl: paste product URL into Arcads/Starop → auto-extract all brand context
- Demographic actor matching: Claude browses actor library and filters by ICP characteristics
- 13-format skill file: pre-built prompt templates for iPhone handheld, Pixar, podcast, cinematic, ASMR, etc.
- Batch.json pipeline: Claude generates batch file → submits to Arcads API → auto-downloads to local folder
- Performance-driven script rewrite: paste CTR/CPM data → Claude identifies winning patterns → writes next batch
- Python download script: Claude generates and runs Python script to pull finished videos from Arcads API

## Limitations / Gotchas

- Arcads Pro plan required for API access (~$200/mo) — significant cost not emphasized enough
- Chrome extension browser-based fallback takes ~45 minutes per batch vs direct API (much slower)
- First-gen videos require review and often need iterative prompt refinement
- 30-45 second videos require breaking into sections with separate prompts
- Actor voice consistency across clips requires uploading first clip's audio as reference for subsequent generations
- Starop vs Arcads confusion in some versions of this workflow — both platforms serve similar purpose
