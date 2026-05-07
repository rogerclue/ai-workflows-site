---
title: "How to Create Viral UGC Ads Using Claude + Higgsfield Marketing Studio"
channel: Gen HQ / Roe Keith
url: https://www.youtube.com/watch?v=kwQhj8kaaY8
date: 2026-05-06
tags: [ugc, video-ads, higgsfield, claude-skill, competitor-clone]
tools: [Claude, Higgsfield Marketing Studio, Higgsfield MCP, Gemini]
use_cases: [ugc-ad-generation-from-product-images, competitor-ad-clone-via-visual-ai-analysis]
complexity: intermediate
workflow_type: manual-assisted
---

## What This Video Demonstrates

Shows how to build a Claude skill that encodes UGC ad structure (hook + problem + solution + CTA), then use Higgsfield Marketing Studio via MCP to generate UGC-style video ads. Also demonstrates competitor ad cloning by downloading a winning ad and using Gemini to analyze its structure, then rebuilding it with a fresh avatar.

## Workflow Steps

1. Build Claude UGC skill — encode ad planning checklist (hook angles, visual direction, script formula: hook → problem → solution → CTA) into a skill file
2. Feed product brief into Claude → generates hook variations + complete video prompts with character description, scene details, timing breakdowns
3. In Higgsfield MCP: crawl product URL via Marketing Studio → auto-extract brand data, product images, colors
4. Select avatar from Higgsfield library (or upload custom reference), specify aspect ratio, variant count
5. Generate videos — Claude via MCP inputs prompts into Higgsfield, tracks generations in parallel
6. Review outputs — iterate on pronunciation fixes, phonetic spelling for URLs, remove ambiguous proper nouns
7. BONUS: Download a competitor's winning ad → upload to Gemini → ask for structure analysis → rebuild with fresh avatar + original script using same proven structure

## Tools Used

| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Claude (Claude Desktop + code tab) | Orchestrator + skill host | Pro plan ($20/mo) |
| Higgsfield Marketing Studio | UGC video generation | Paid tier |
| Higgsfield MCP | Claude↔Higgsfield API bridge | Included with Higgsfield |
| Gemini | Visual analysis of competitor ads | Free/Pro |

## Claude Code Integration Points

- UGC skill file encodes entire ad planning framework — the skill IS the integration
- Higgsfield MCP connector wired into Claude Desktop settings
- Could extend skill to auto-log winning ad structures to CLAUDE.md for persistent learning across sessions

## Key Insight

**The Claude skill file is the force multiplier** — encode your entire ad planning framework (hooks, script formula, visual language, timing) into one skill so every generation starts from expert-level structure rather than a blank prompt.

## Reusable Primitives

- Hook variation generation: prompt Claude with product URL → get 5 hook angles for different audiences
- Character-aware prompting: specify avatar name/type + scene setting → Higgsfield MCP finds the avatar automatically
- Pronunciation fix loop: tell Claude what words are mispronounced → it updates phonetic spelling → regenerates in same session
- Competitor clone: download ad → Gemini visual analysis → rebuild with fresh actor + same proven structure
- Multi-variant batching: request 4 variants in one prompt → Claude tracks all generations in parallel via MCP
- Marketing Studio URL crawl: paste product URL → Higgsfield auto-extracts all brand metadata for accurate product references

## Limitations / Gotchas

- First batch is rarely perfect — pronunciation of unusual words, brand names, URLs often fails
- Higgsfield avatars have limited selection unless you upload custom character sheets
- Gemini competitor analysis requires manual download + upload step (not yet automated)
- Video generation takes minutes per batch — not instant
- Cost per generation not mentioned explicitly
