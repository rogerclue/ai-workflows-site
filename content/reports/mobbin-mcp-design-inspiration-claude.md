---
title: "Mobbin MCP: Real App Screenshots as Design Reference Inside Claude Code"
channel: Lukas Margerie
url: https://www.youtube.com/watch?v=cu-Qq-47Rk8
date: 2026-05-17
tags: [mobbin-mcp, ui-design, design-research, claude-code, mcp-tools]
tools: [Mobbin MCP, Claude Code, OpenAI Image API]
use_cases: [ui-design, design-research, component-generation, trend-analysis]
complexity: intermediate
workflow_type: manual-assisted
---

## What This Video Demonstrates

The Mobbin MCP connects Claude Code directly to Mobbin's database of hundreds of thousands of real mobile app and website screenshots, letting Claude pull production UI references on demand and use them as grounding material when generating or recreating design components.

## Workflow Steps

1. Go to mobbin.com/mcp and copy the install command
2. Paste the install command into a Claude Code session and restart Claude Code
3. Query Mobbin via the `search_screens` tool — e.g., "Uber login screen" or "consumer banking onboarding 2026"
4. Claude returns real screenshots from production apps matching the query
5. Use retrieved screenshots as design reference: describe a mashup, request a recreation, or extract a pattern
6. Generate images (logos, backgrounds, scene assets) via OpenAI Image API where needed
7. Claude produces HTML/CSS component output based on the referenced designs

## Tools Used

| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Mobbin MCP | Searches Mobbin's UI screenshot database from inside Claude Code | $15/month (quarterly) or $10/month (~$120/year) |
| Claude Code | Interprets references, generates HTML/CSS components | Claude subscription |
| OpenAI Image API | Generates custom images (logos, backgrounds) within designs | Pay-per-use |

## Claude Code Integration Points

- The `search_screens` MCP tool slots directly into any Claude Code session with no custom scaffolding
- Retrieved screenshots can be passed as context to any Claude Code design generation task — landing pages, onboarding flows, nav patterns
- A Claude Code skill could wrap the Mobbin search + component generation into a single `/design-reference` command
- OpenAI Image API calls can be made from Claude Code via Bash or a custom MCP, keeping image generation in the same session
- The trend research use case (mood boards of current patterns) maps naturally to a `sc:analyze` skill invocation

## Key Insight

**Mobbin MCP turns Claude into a design system researcher** — instead of asking Claude to guess what good UI looks like from training data alone, it can pull real production examples from apps that shipped and build directly from them, grounding output in what actually exists in the market.

## Reusable Primitives

- `search_screens` query patterns: specific app ("Uber login"), style mashup ("Uber flow with Zalando style"), trend research ("consumer banking onboarding 2026"), award-worthy examples ("best navbars")
- Screenshot → recreation workflow: reference a specific screen, describe desired brand delta, generate component
- Trend mood board workflow: broad query → Claude summarizes current patterns + what's declining
- OpenAI Image API for in-session asset generation (logos, hero backgrounds) where Mobbin references lack custom images
- Multi-source mashup pattern: pull 3 references (centered hero from Writer, navbar from DocuSign, font from Copilot) → combine into single output

## Limitations / Gotchas

- Requires a paid Mobbin plan — $120/year minimum; no free tier for MCP access
- Single tool (`search_screens`) — no filtering by year, platform, or rating within the MCP query itself
- Generating custom fonts reliably via OpenAI Image API is not yet solved — workaround is using system fonts or web fonts
- Mobbin's database skews toward popular/large apps; niche or emerging app patterns may not be well-represented
- Output quality depends on how clearly the reference mash-up is described — vague queries return generic results
- No direct export to Figma or design files — output is HTML/CSS only
