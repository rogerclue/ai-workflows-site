---
title: "2 Free Claude Skills That Will Transform How You Create Content"
channel: JOEY
url: https://www.youtube.com/watch?v=0YhhPQVXA7c
date: 2026-05-12
tags: [claude-skills, image-generation, video-prompting, content-creation]
tools: [Claude, Banana Pro Director, Cinema Worldbuilder]
use_cases: [image-prompt-generation, video-prompt-generation]
complexity: beginner
workflow_type: vibe-coding
---

## What This Video Demonstrates

Demonstrates two free Claude skills — Banana Pro Director (structured image and character prompt generation) and Cinema Worldbuilder (five video prompt modes including symbol, camera, and scene language) — showing how domain vocabulary injection dramatically improves AI image and video generation quality compared to freeform prompts.

## Workflow Steps

**Banana Pro Director:**
1. Install skill from GitHub via Claude Code
2. Describe a character or scene in plain language
3. Skill generates a structured prompt with lighting, camera angle, style tags, and technical parameters
4. Paste the structured prompt into your image generator of choice

**Cinema Worldbuilder:**
1. Install skill from GitHub
2. Choose a mode: Symbol (metaphor/abstraction), Camera (shot language), Scene (spatial composition), Narrative (story beats), or World (environment building)
3. Describe the video concept in plain language
4. Skill outputs a multi-part video prompt with timing cues, motion direction, and atmospheric detail

## Tools Used

| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Claude | Runs both skills; generates structured prompts from natural language input | Claude Pro/Max |
| Banana Pro Director | Claude skill; injects domain vocabulary for image generation (lighting, angles, style) | Free (GitHub) |
| Cinema Worldbuilder | Claude skill; 5-mode video prompt system with professional cinematography language | Free (GitHub) |

## Claude Code Integration Points

Both skills integrate directly with Claude Code via slash commands. A content pipeline skill could batch-generate prompts for a series of scenes from a single brief — for example, a 10-scene video script generates 10 Cinema Worldbuilder prompts in one pass. The output could feed directly into video generation API calls via fal.ai or Higgsfield MCP.

## Key Insight

**Structured prompt skills with domain vocabulary (camera angles, lighting terms, symbol systems) produce dramatically better AI media than freeform prompts** — the vocabulary injection teaches the model to think like a cinematographer or art director.

## Reusable Primitives

- Domain vocabulary injection pattern (professional terminology → better generation results)
- 5-mode video prompt system (Symbol / Camera / Scene / Narrative / World)
- Character consistency prompt structure from Banana Pro Director
- Batch prompt generation from a content brief (one input → N structured prompts)
- Skill-as-vocabulary-encoder pattern (install once, get expert-level prompts forever)

## Limitations / Gotchas

- Both skills require installation from GitHub — non-trivial for non-technical users
- Output quality depends on the underlying model; better results with Claude Sonnet or above
- Video generation tools still have motion consistency issues regardless of prompt quality
- Cinema Worldbuilder modes require understanding which mode applies to your use case
- Skills may need updating as video generation platforms evolve their prompt syntax
