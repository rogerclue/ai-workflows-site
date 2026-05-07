---
title: "How I Make Marketing Ads for My Apps SOLO (Claude + Higgsfield MCP)"
channel: Solo founder / create-skills.io creator
url: https://www.youtube.com/watch?v=Fhv8DqMlaA8
date: 2026-05-06
tags: [higgsfield-mcp, ugc, solo-founder, app-marketing, claude-desktop, ad-iteration]
tools: [Claude Desktop, Higgsfield MCP, Custom Claude Skill (UGC Ad Planner), Gemini]
use_cases: [solo-founder-ugc-ad-generation, ai-driven-ad-iteration]
complexity: beginner
workflow_type: manual-assisted
---

## What This Video Demonstrates

A solo founder shows how to create UGC-style video ads for their app entirely inside Claude Desktop using a custom skill and Higgsfield MCP connector. The workflow covers ad planning, hook generation, Higgsfield prompt building, in-chat pronunciation fixes, and Gemini-powered feedback for iteration — all without leaving the Claude Desktop interface.

## Workflow Steps

**Input:** App product URL, target audience, chosen avatar name

1. Plan ad: define hook angle, visuals needed, and 4-part script structure (hook / problem / solution / CTA)
2. Generate hook variations in Claude: "Help me generate 5 hook variations for a UGC ad for [product URL]" → Claude asks clarifying questions → pick best hook
3. Start new chat → invoke custom UGC ad planner skill → paste chosen hook → answer clarifying questions (character reference or avatar name, script length, audio type, setting, camera setup, energy, CTA)
4. Skill returns a detailed Higgsfield-ready prompt: character description + scene environment + scene timing breakdown
5. Start new chat → tell Higgsfield MCP to use UGC Marketing Studio + paste prompt + specify avatar, aspect ratio, and variant count
6. Higgsfield MCP crawls product URL → fetches brand metadata → selects specified avatar → generates 4 video variants
7. Review results → identify issues (pronunciation, mispronounced proper nouns, URL phonetics)
8. In same chat: tell Claude to fix specific issues (hyphenate "markdown", remove surname, spell URL phonetically) → MCP regenerates automatically
9. Download best variant → send to Gemini with prompt: "analyze this UGC ad and give honest feedback"
10. Gemini returns actionable feedback (add on-screen text, address the why/outcome, improve hook specificity)
11. Iterate based on feedback → repeat from step 5

**Output:** Polished UGC video ad variants ready for social posting

## Tools Used

| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Claude Desktop | Orchestrator + skill host + Higgsfield MCP interface | Pro plan ($20/mo) |
| Higgsfield MCP | Video generation API bridge inside Claude | Paid Higgsfield tier |
| Custom UGC skill | Ad planning + Higgsfield prompt builder | Free (user-built) |
| Gemini | Frame-by-frame ad analysis + improvement feedback | Free/Pro |

## Claude Code Integration Points

- The custom skill encodes the entire ad planning framework — it maps directly to a Claude Code skill file
- The Higgsfield MCP connector is wired in Claude Desktop settings via a custom connector URL — same pattern as any MCP server in Claude Code
- The Gemini feedback loop could be replaced with Claude Code vision analysis using the Anthropic API
- The full iteration loop stays inside Claude Desktop with no app switching — a natural fit for a Claude Code agent loop

## Key Insight

**Frontload all creative effort into the hook** — once a viewer stays past the first 3 seconds, they will likely watch the rest, so the hook deserves the most iteration time while the rest of the formula (problem / solution / CTA) stays relatively fixed.

## Reusable Primitives

- **5-hook variation generation:** product URL + audience type → Claude generates 5 hook angles with different emotional registers
- **In-chat pronunciation fix:** describe mispronounced words → Claude updates phonetic spelling → MCP regenerates in the same session without switching apps
- **Gemini frame-by-frame video analysis:** upload video file + "give honest ad feedback" → structured improvement suggestions
- **Avatar selection by name:** specify Higgsfield avatar name in prompt → MCP finds and uses it automatically
- **Marketing Studio URL crawl:** product URL → Higgsfield auto-extracts brand data for accurate product references
- **4-variant batch generation:** request multiple variants in one prompt → MCP generates all in parallel

## Limitations / Gotchas

- Higgsfield avatars cannot pronounce all words correctly — especially markdown, technical terms, non-English names, and URLs
- First batch generation is almost always imperfect — plan for 2-3 iteration rounds
- Account warm-up is required before posting on social media (1-2 weeks of engagement activity first)
- Do not post on brand new accounts immediately — risk of "view jail" suppression
- The Higgsfield MCP connector must be toggled ON in Claude Desktop settings — easy to miss during setup
- Gemini video analysis is free but requires downloading the video and re-uploading it manually
