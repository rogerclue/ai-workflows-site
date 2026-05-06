---
title: "Claude just made CINEMATIC Ads absolutely easy (NEW Skill)"
channel: Jay E | RoboNuggets
url: https://www.youtube.com/watch?v=kPWMGTcGb4A
date: 2026-05-06
tags: [claude-code, cinematic-ads, storyboard, gpt-image-2, c-dance, fal-ai, agent-skill]
tools: [Claude Code, GPT-image-2, C-dance 2.0, fal.ai, Rubric Flows]
use_cases: [cinematic-ad-generation, product-videography, storyboard-creation, b-roll-generation]
complexity: intermediate
workflow_type: automated-pipeline
---

## What This Video Demonstrates

A 4-step agent skill ("Cinematic Ads") that takes a product image and autonomously produces a full cinematic advertisement: product analysis → storyboard directions (3 options) → GPT-image-2 storyboard image → C-dance 2.0 final video. Works with Claude Code, Hermes, Open Claw, or any agentic platform. Uses fal.ai as the model-as-a-service layer for both GPT-image-2 and C-dance 2.0.

## Workflow Steps

### Step 1 — Set Product
1. Drop product image into Claude Code (or any agent platform)
2. Add brief context: product use case, key attributes to emphasize, end-tag text
3. Agent extracts: brand name, product name, category — no manual tagging needed
4. Example prompt: "Create a cinematic advert for [product]. Emphasize [attribute]. End tag: [text]."

### Step 2 — Storyboard Directions (Human Approval Gate)
1. Agent generates 3 distinct storyboard directions — each with:
   - Concept name (e.g., "Liquid Ground", "First Light Sprint", "Wind Tunnel")
   - Specific vibe description
   - Hero moment for the product
   - Visual keywords
2. Human reviews and selects preferred direction (or requests modifications)
3. This gate is the primary quality control point — guides the agent on creative taste before generation

### Step 3 — Generate Storyboard Image
1. Agent builds a detailed prompt for GPT-image-2 (via fal.ai endpoint: `gpt-image-2-edit`)
2. Prompt includes: number of panels (6), layout, text placement, product fidelity requirements, scene descriptions with timestamps
3. Reference image (product photo) sent alongside prompt
4. Output: 6-panel cinematic storyboard with correctly spelled text, timestamps, camera directions
5. Human reviews storyboard — can request changes before video generation
6. **Face blurring technique**: if storyboard includes people, prompt includes blurred faces to avoid C-dance content policy blocks — C-dance fills faces in during video generation

### Step 4 — Generate Final Video (C-dance 2.0)
1. Agent shows pre-generation summary: model (C-dance 2.0 Pro), resolution, duration, aspect ratio, audio, references to be sent
2. References sent: storyboard sheet + clean product photo
3. Prompt to C-dance is simple: "Turn this storyboard [image 1] into a cinematic 15-second [category] ad"
4. C-dance innately understands storyboard format — matches timestamps and styling from panels
5. Output: final cinematic video ready for use

### Accessing Models via fal.ai
- Go to fal.ai → find model (GPT-image-2, C-dance 2.0) → click "Copy content (for LLMs)"
- Paste that into your agent — gives agent full technical understanding of how to call the API
- Agent handles: prompt writing, image upload, aspect ratio selection, resolution, duration — all autonomously
- No manual API calls needed after initial setup

### Optional: Skip Approval Gates
- For fully automated pipelines, remove the human approval checkpoints
- Agent runs all 4 steps end-to-end from a single product drop
- Recommended only after validating quality with gates first

## Tools Used

| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Claude Code | Agent runtime; orchestrates all 4 steps via skill file | Claude Max/Pro |
| fal.ai | Model-as-a-service layer; hosts GPT-image-2 and C-dance 2.0 APIs | Usage-based |
| GPT-image-2 | Storyboard image generation; near-perfect text rendering, precise image control | Via fal.ai |
| C-dance 2.0 | Final cinematic video generation from storyboard reference | Via fal.ai |
| Rubric Flows | Visual agent workflow layer used by RoboNuggets community (not publicly available) | Community tool |

## Claude Code Integration Points

- **Skill file as system prompt**: The entire 4-step workflow is encoded in a single skill `.md` file — Claude reads it and knows how to run the pipeline
- **fal.ai "copy for LLMs" pattern**: Paste fal.ai's LLM-friendly API docs directly to agent → agent gains full ability to call that model API autonomously
- **Quality gate pattern**: Skill file includes `+` checkpoints after each step — agent pauses and confirms with user before proceeding to next stage
- **Telegram + Claude Code integration**: Creator accesses agent via Telegram connected to long-running Claude Code terminal session — enables mobile access to the pipeline
- **Blurred face technique in prompt**: Skill instructs agent to blur faces in storyboard prompts to bypass C-dance content policy detection

## Key Insight

**GPT-image-2 storyboard → C-dance is the quality unlock** — GPT-image-2's near-perfect text rendering produces storyboards detailed enough that C-dance can interpret them directly as shot instructions. The two models complement each other: GPT-image-2 for precise visual planning, C-dance for cinematic motion. Neither alone produces this quality of output.

## Reusable Primitives

- **4-step cinematic ad skill**: Product drop → 3 storyboard directions → 6-panel storyboard image → final video; replicable as a skill file for any agent platform
- **fal.ai LLM content copy pattern**: Any fal.ai model can be given to an agent by copying its "for LLMs" documentation — no manual API integration needed
- **Human approval gate pattern**: Insert checkpoints between generative steps so user can steer direction before credits are spent on final generation
- **Blurred face workaround**: Generate storyboard with blurred faces → pass to C-dance → model fills faces during video generation; bypasses content policy without losing character
- **Storyboard-first video production**: Generate GPT-image-2 storyboard first (cheap, fast, text-accurate) → use as reference for video model; applies to any creative project, not just ads
- **Pre-generation cost summary**: Before firing expensive video generation, agent surfaces model, resolution, duration, cost — gives user chance to adjust before spending credits

## Limitations / Gotchas

- **Agent skill kit is paywalled**: The full cinematic ads skill file is only available to RoboNuggets community members — video shows how it works but doesn't provide the file
- **C-dance face policy**: Storyboards featuring recognizable faces will be blocked by C-dance content policies — blurred face technique is required workaround
- **fal.ai adds a cost layer**: Using fal.ai as the model provider adds usage costs on top of Claude subscription — GPT-image-2 and C-dance 2.0 are not free
- **C-dance video quality varies**: Creator notes C-dance 2.0 is "the most capable model for cinematic scenes as of right now" — this will change as models evolve
- **Rubric Flows is proprietary**: The visual workflow layer shown in the video is a RoboNuggets community tool, not publicly available
- **End-to-end without gates loses quality control**: Removing human approval gates risks wasting credits on a direction that doesn't match brand taste — gates are recommended until workflow is calibrated
