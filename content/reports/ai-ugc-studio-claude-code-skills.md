---
title: "Build Your Own AI UGC Studio Inside Claude Code (3 Skills Pipeline)"
channel: Mr. Pynk
url: https://www.youtube.com/watch?v=MB1qHVE-eNs
date: 2026-05-17
tags: [ugc-content, claude-code-skills, image-generation, video-generation, brand-automation]
tools: [Claude Code, Pink Society, image generation API, video generation API]
use_cases: [ugc-ad-creation, brand-character-generation, product-marketing-automation]
complexity: intermediate
workflow_type: automated-pipeline
---

## What This Video Demonstrates

Three Claude Code skills run in sequence to produce a fully automated UGC (user-generated content) studio: the pipeline scrapes a brand's web presence, extracts its visual and tonal DNA, creates a consistent character, and generates photorealistic selfie and talking head video content — all from a single command chain.

## Workflow Steps

1. Run `/brand-dna-builder` with the target brand URL — the skill performs three web fetches (homepage, product page, about copy), extracts visual language, tone, and target customer profile, downloads product images, and saves a brand DNA markdown file
2. Run `/character-creator` — the skill reads the brand DNA file, generates a character sheet (demographics, facial features, clothing style), generates a headshot image and a full-body image, and supports iterative refinement prompts
3. Save the headshot as the identity anchor — this image will be used as the reference image for all future UGC generations to maintain character consistency
4. Run `/product-ugc-generator` — the skill reads the brand DNA file, accepts a character selection and product selection, writes a full creative brief (scene description, script, voice direction), generates a photorealistic selfie image, then generates a talking head video from the selfie and script
5. Review outputs: brand profile MD, product images, character headshot, full-body image, UGC selfie, talking head video
6. Scale by adding more characters, products, or brands — each new addition runs the same three-skill pipeline

## Tools Used

| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Claude Code | Skill host, web fetching, file orchestration | Paid |
| Pink Society | Skill files for the three-skill pipeline (/brand-dna-builder, /character-creator, /product-ugc-generator) | Paid / skill pack |
| Image generation API | Headshot, full-body, and UGC selfie generation | Pay-per-image (provider unspecified) |
| Video generation API | Talking head video generation from image + script | Pay-per-video (provider unspecified) |

## Claude Code Integration Points

- **Skills (core)**: All three steps are Claude Code skills — this is a native Claude Code workflow; the Pink Society skill files install directly into the Claude Code skill system
- **WebFetch**: The `/brand-dna-builder` skill uses web fetching (three fetches per brand) — Claude Code's `WebFetch` tool handles this natively
- **Hooks**: A `PostToolUse` hook after the `/character-creator` skill could automatically copy the headshot to a designated `identity-anchors/` folder, enforcing consistent reference image management
- **MCP servers**: Image and video generation APIs could be wrapped as MCP servers, letting each skill call them as structured tool calls rather than raw API requests — enabling error handling and retry logic
- **File organization**: Claude Code's Write tool manages all output files (brand DNA MD, character sheet, images, video) — a project-level folder structure in CLAUDE.md keeps outputs organized across multiple brands
- **Agent loop**: A `/stitch-loop` or `/continuous-agent-loop` skill could run the full three-skill pipeline for a list of brands automatically, producing a batch of UGC assets overnight

## Key Insight

**Claude Code as a fully automated creative studio** — where script writing, scene direction, casting decisions, and video generation all happen from a single command chain — means the creative brief and the final video asset are produced by the same agent run, with no handoff between tools.

## Reusable Primitives

- Three-stage brand pipeline: scrape → characterize → generate; each stage outputs a file that the next stage reads
- Identity anchor pattern: save the first approved headshot as a fixed reference image; all future generations use it to maintain character consistency across assets
- Brand DNA markdown file as the single source of truth for all downstream creative decisions — tone, visuals, target customer, and product context in one file
- Creative brief generation before image/video generation: the skill writes the scene, script, and voice direction first, then passes it to the generation API — separates creative thinking from asset production
- Scale pattern: add characters, products, or brands to the pipeline; the three-skill structure handles each independently

## Limitations / Gotchas

- The image and video generation APIs are not named in the video — provider selection, pricing, and quality vary significantly and are left to the viewer to figure out
- Photorealistic character consistency across sessions depends entirely on using the headshot as a reference image — drift will occur if the reference is not stored and reused correctly
- Web scraping for brand DNA is fragile: brands with JavaScript-heavy sites, login walls, or heavily dynamic content may not yield clean copy from three fetches
- Video generation quality for talking heads is highly variable across providers and may not meet production standards without significant prompt iteration
- Pink Society skill pack is a paid product — cost is on top of Claude Code subscription, image generation API costs, and video generation API costs; the full pipeline has multiple billing surfaces
- The demo uses Tatcha (an established luxury brand) — replicating brand DNA extraction for smaller or less web-present brands may produce thinner results
- No mention of usage rights, model release considerations, or platform policies for AI-generated UGC — these are real constraints for paid advertising use
