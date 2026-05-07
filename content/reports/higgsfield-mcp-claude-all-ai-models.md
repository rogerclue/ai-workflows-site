---
title: "Automate EVERY AI Model with Higgsfield + Claude (Full Breakdown)"
channel: Jay E | RoboNuggets
url: https://www.youtube.com/watch?v=_Q1lD5U0Iws
date: 2026-05-06
tags: [higgsfield-mcp, claude-code, brand-book, logo-animation, seedance, fal-api]
tools: [Claude Code, Higgsfield MCP, Nano Banana 2, GPT Image 2, Seedance 2.0, fal.ai, wavespeed.ai]
use_cases: [brand-book-generation-from-logo, logo-animation-via-storyboard, landing-page-mockup-to-working-site]
complexity: intermediate
workflow_type: manual-assisted
---

## What This Video Demonstrates
Shows how to connect Higgsfield's MCP server to Claude Code (or any agent) to access every AI image and video model on Higgsfield — then walks through a full brand asset pipeline: logo → brand book (two models compared) → logo animation storyboard → Seedance animation → landing page mockup → working localhost website. Also covers the Higgsfield vs fal.ai cost comparison.

## Workflow Steps

### Setup
1. Download Claude desktop app → use Claude Code tab ("builds things for you" — most powerful of the three tabs)
2. Install Higgsfield MCP skill (pinned in description) → provide to agent → Claude guides you through MCP setup
3. Claude opens browser → log into Higgsfield → MCP connects to your Higgsfield subscription (credit-based, not pay-as-you-go)
4. IDE users (Antigravity, VS Code): type `/mcp` in terminal → find Higgsfield under user MCPs → enter to authenticate via browser
5. Verify: ask Claude "what models do you have access to?" → lists all image models (Nano Banana, GPT Image 2, Seedream) and video models (Seedance, Kling, Video GT 1, Grok Imagine, etc.)

### Brand Book Generation
1. Attach logo image to Claude chat
2. Prompt: "Create a brand book for this logo — use Nano Banana 2 for one iteration and GPT Image 2 for the other so we can compare"
3. Higgsfield skill causes Claude to show a plan before generating (to avoid burning credits)
4. Claude submits both prompts to Higgsfield → polls for results → delivers two brand book images
5. Compare: Nano Banana 2 shows logo + hex color palettes + typography ID; GPT Image 2 shows logo lockups + color palettes
6. Select preferred model for subsequent steps

### Logo Animation Pipeline
1. Tell Claude: "Create a storyboard for a logo animation using GPT Image 2 — 6-panel showing how the logo evolves"
2. Claude generates 6-panel storyboard via Higgsfield MCP with per-panel scene descriptions
3. Feed storyboard to video model: "Send this storyboard to Seedance 2.0 via Higgsfield MCP — follow the storyboard instructions, make it clean and visually arresting"
4. Claude shows cost warning before generating (Seedance uses many credits) — adjust: "Make it 480p, 4 seconds instead"
5. Claude generates video → delivers finished logo animation

### Landing Page → Working Website
1. Request landing page mockup: "Using GPT Image 2, create a mockup of a well-designed landing page using our design system color palettes"
2. Claude generates landing page mockup image via Higgsfield
3. Fork conversation (VS Code extension) to preserve context → new prompt: "Translate that landing page mockup into an actual working landing page, open it on localhost, make it interactive and as close as possible to the mockup"
4. Claude Code builds full HTML/CSS/JS website → opens on localhost for preview
5. Output: working website built from a single logo, using AI-generated brand assets as the spec

## Tools Used
| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Claude Code | Orchestrator; prompt designer; website builder | Claude Pro/Max |
| Higgsfield MCP | API bridge — connects Claude to all Higgsfield models | Higgsfield subscription |
| Nano Banana 2 | Brand book / image generation (alternative to GPT Image 2) | Via Higgsfield credits |
| GPT Image 2 | Brand book, storyboard, landing page mockup generation | Via Higgsfield credits |
| Seedance 2.0 | Logo animation video from storyboard | Via Higgsfield credits (expensive) |
| fal.ai / wavespeed.ai | Pay-as-you-go alternative to Higgsfield for same models | Usage-based (often cheaper) |
| Antigravity / VS Code | IDE with Claude Code extension; `/mcp` terminal command for MCP setup | Paid IDE |

## Claude Code Integration Points
- Higgsfield MCP installs as a user MCP — accessible from any Claude Code session via `/mcp` in terminal
- Custom skill files (design system skill, Higgsfield setup skill) inject domain knowledge into Claude before generation
- Conversation forking (VS Code extension) preserves full brand context when switching from asset generation to website build
- Credit cost gate: Higgsfield skill prompts Claude to show a plan + cost estimate before any generation — prevents surprise credit burns
- Same pattern works with fal.ai API via Claude Code bash for pay-as-you-go access to identical models

## Key Insight
**The Higgsfield MCP turns Claude into a multi-model art director** — instead of switching between Higgsfield's UI, ChatGPT for prompts, and your code editor, you stay in one Claude conversation that orchestrates prompt design, model selection, parallel generation, result polling, and downstream code building from the generated assets.

## Reusable Primitives
- Multi-model comparison in one prompt: ask Claude to generate the same asset with two different models simultaneously → compare outputs before committing to one
- Credit-gate pattern: Higgsfield skill causes Claude to show plan + specs (resolution, duration, model) before any expensive generation — always gives you a chance to downgrade
- Storyboard → video pipeline: generate 6-panel image storyboard with scene descriptions → feed to Seedance as reference → deterministic animation output
- Conversation fork for context handoff: VS Code extension lets you fork mid-session to carry brand context from asset generation into website build without re-briefing
- Logo → full brand kit in one session: logo image → brand book → storyboard → animation → landing page mockup → working website, all in one Claude conversation
- Higgsfield vs fal.ai decision: existing Higgsfield subscriber → use MCP; new to the ecosystem → fal.ai or key.ai for pay-as-you-go access to same models

## Limitations / Gotchas
- Higgsfield MCP does not return per-call credit costs (as of recording) — you won't know exact credit burn per generation upfront
- Seedance costs significantly more credits than image models — always use the credit-gate to downgrade resolution/duration before confirming
- Higgsfield subscription vs fal.ai pricing: for top models (Nano Banana, GPT Image 2, Seedance), fal.ai is often the same price or cheaper — Higgsfield doesn't necessarily offer a discount for subscribers
- Conversation forking requires VS Code extension — not available in Claude web or desktop standalone
- The design system skill referenced is a separate skill (covered in an earlier RoboNuggets video) — not included in the Higgsfield skill
- Generated website needs manual refinement (logo sizing, placeholder replacement) — not production-ready in one pass
