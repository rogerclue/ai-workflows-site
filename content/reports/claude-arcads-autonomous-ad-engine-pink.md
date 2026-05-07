---
title: "Build a Fully Autonomous Product Ad Engine with Claude + Arcads"
channel: German-accent AI marketing creator
url: https://www.youtube.com/watch?v=Kf7ejOtl5KU
date: 2026-05-06
tags: [arcads, claude-cowork, autonomous-agent, ugc, feedback-loop, product-brief]
tools: [Claude Pro, Anthropic API, Arcads, CLAUDE.md, Chrome Extension, Python]
use_cases: [fully-autonomous-video-ad-generation, 48-hour-performance-feedback-loop]
complexity: intermediate
workflow_type: agent-loop
---

## What This Video Demonstrates

A step-by-step build of a fully autonomous product ad engine: Claude Co-work reads a product brief, writes 20 scripts, browses Arcads to select demographically-matched actors, submits to the Arcads API, and downloads finished videos to the desktop. After 48 hours of ad performance data, pasting metrics into Claude triggers analysis of winners and generation of the next optimized batch. Total cost runs approximately $240/month for 200-500 ads.

## Workflow Steps

**Input:** Product brief (name, price, demographic, pain points, platform, audience temperature, ad count)

1. Set up tools: Claude Pro ($15/mo) + Anthropic API ($10-20 credits) + Arcads Pro ($200/mo for API access)
2. Create workspace via Claude Co-work: "Create folder called Vibe Ads on desktop with subfolders briefs, scripts, videos"
3. Store API keys: tell Claude to create a .env file with all API credentials (ANTHROPIC_API_KEY, ARCADS_CLIENT_ID, ARCADS_CLIENT_SECRET, ARCADS_AUTH_HEADER)
4. Create CLAUDE.md brain: specify agent role ("You're a Vibe Advertising Agent"), UGC script timing structure, quality checklist (timing match, CTA always present, etc.), and Arcads API endpoint reference
5. Write product brief: product name, price, where to buy, target demographic (age/lifestyle/values), biggest frustrations, customer language, specific claims, target platform, audience temperature (cold/warm/retargeting), ad count
6. Verify Claude understands brief: "Read the brief and tell me target customer, top 3 pain points, recommended hooks, plan for 20 scripts"
7. Generate all 20 scripts: "Write all 20 scripts following CLAUDE.md timing structure" → Claude saves output as JSON
8. Browser phase: install Chrome extension → tell Claude "browse Arcads, find best 4-5 actors for our demographic, save as batch.json"
9. Submission phase: "Read batch.json, submit each script to Arcads API using talking actors endpoint, save finished videos to videos folder"
10. Download: Claude generates and runs a Python script to download all videos from the Arcads API to the local folder
11. Review videos and post ads
12. After 48 hours: paste performance data (CTR, CPM) → "analyze which hooks, scripts, and characters perform best, write next batch"

**Output:** Batch of 20 video ads downloaded locally + performance-driven next-batch scripts after 48-hour feedback cycle

## Tools Used

| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Claude Pro + Co-work tab | Orchestrator, script writer, browser agent | $15/mo |
| Anthropic API | Direct agent API calls | $10-20/mo credits |
| Arcads Pro | AI actor video generation with public API | ~$200/mo |
| Chrome Extension (Claude) | Browser control for UI fallback when API is blocked | Free |
| CLAUDE.md | Agent permanent brain / quality checklist | Free (user-created) |
| Python | Download script for batch video retrieval | Free |

## Claude Code Integration Points

- CLAUDE.md is literally the Claude Code project file — this workflow is native Claude Code with no adaptation needed
- .env API key management is standard Claude Code pattern
- Scripts saved as JSON followed by a Claude-generated Python download script constitutes a fully automatable pipeline in Claude Code
- The 48-hour feedback loop (paste metrics → Claude analyzes → rewrites next batch) is a native agent loop pattern directly portable to scheduled Claude Code runs

## Key Insight

**CLAUDE.md is the agent's permanent memory** — by encoding the agent's role, script timing structure, quality checklist, and API endpoint structure into CLAUDE.md upfront, Claude reads these instructions every time the project opens and never needs to be re-briefed, making every new session an extension of the previous one rather than starting from scratch.

## Reusable Primitives

- **Workspace bootstrap:** Claude creates folder structure + .env + CLAUDE.md in one conversation — reusable for any agent project
- **Product brief template:** structured brief with demographic, pain points, customer language, platform, and audience temperature
- **20-script batch generation:** brief → Claude writes all scripts → saves as JSON in one pass
- **Demographic actor matching:** Claude browses Arcads actor library filtered by ICP → selects and saves batch.json
- **Python download automation:** Claude generates Python script → runs it → batch downloads all videos to local folder
- **48-hour performance feedback:** paste CTR/CPM → Claude identifies winning patterns → writes optimized next batch

## Limitations / Gotchas

- Arcads Pro is ~$200/mo — the largest single cost and not optional for API access
- Chrome extension browser fallback (when API is blocked) takes approximately 45 minutes per batch — very slow
- A 20-video batch via the browser route could take hours — the API route is strongly preferred
- Product brief quality directly determines script quality — vague briefs produce generic scripts
- CLAUDE.md needs manual updating when API endpoints change or new Arcads features are released
- Performance data paste is manual — there is no automated Meta/TikTok → Claude pipeline yet
