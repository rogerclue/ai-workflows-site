---
title: "Claude + NanoBanana: AI Social Media Content That Gets Thousands of Likes"
channel: Grow with Alex
url: https://www.youtube.com/watch?v=CLLyO7f6zKU
date: 2026-05-17
tags: [social-media, content-creation, claude-chat, image-generation, instagram-carousels]
tools: [Claude Chat, NanoBanana Pro, NanoBanana 2, Higgsfield, Google Drive]
use_cases: [instagram-carousels, social-media-content, brand-systems, image-generation]
complexity: beginner
workflow_type: manual-assisted
---

## What This Video Demonstrates

A two-tool system — Claude for carousel structure and narrative, NanoBanana for custom image generation — produces branded Instagram carousels at three levels of sophistication, from a generic single-prompt output up to a fully brand-matched carousel where Claude selects images based on emotional fit per slide.

## Workflow Steps

1. **Level 1 — Basic:** Paste a YouTube script or content into Claude with a single prompt requesting a 7-slide carousel; Claude returns slide copy with hook/tension/payoff/CTA structure
2. **Level 2 — Branded:** Create a brand system document (color palette, typography, voice, target audience, hex codes); add it plus your script to a Claude Project; Claude generates a structured slide plan with brand-specific formatting
3. **Level 3 — Image-matched:** Add 20-30 NanoBanana-generated custom images to the Claude Project; Claude analyzes all images, assigns a mood/energy label to each, then selects the best image per slide based on emotional fit; outputs an HTML carousel ready to export as PNGs
4. To generate NanoBanana images: screenshot a reference image (e.g., from Pinterest), paste into Claude with a JSON prompt generation instruction, paste the resulting JSON prompt into NanoBanana
5. Batch 20-30 images per NanoBanana session for efficiency
6. Use Higgsfield as an image management hub — switch between NanoBanana Pro and NanoBanana 2 within the same session
7. Add music before pushing to Reels to trigger the algorithm

## Tools Used

| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Claude Chat | Carousel structure, slide copy, image selection, brand system application | Claude subscription |
| NanoBanana Pro | High-quality custom image generation (Gemini 2.5 Pro backend) | Paid |
| NanoBanana 2 | Faster image generation at half the cost (Gemini 2.5 Flash backend) | Paid, lower tier |
| Higgsfield | Image management platform, switches between NanoBanana models | Paid |
| Google Drive | Claude Project connector for auto-pulling images into context | Google account |

## Claude Code Integration Points

- The brand system document is equivalent to a project `CLAUDE.md` — a Claude Code skill could scaffold and maintain it as a versioned file
- The JSON prompt generation step (screenshot → JSON → NanoBanana) could be wrapped in a Claude Code skill that accepts an image path and outputs a ready-to-paste prompt
- Google Drive connector pattern mirrors how Claude Code reads project files — a skill could watch a Drive folder and trigger carousel generation when new content is added
- The HTML carousel output from Level 3 is a file Claude Code can take and post-process: resize, compress, add animations, or batch-export slides
- A `content-engine` skill invocation could automate the full Level 2 pipeline: ingest script → apply brand system → output slide plan

## Key Insight

**Claude understands carousel purpose — hook, tension, payoff — not just content, and knows which image emotionally matches which slide.** Image generators see pixels; Claude sees narrative function. That distinction is what separates a generic image-content pairing from one that converts.

## Reusable Primitives

- Brand system document as a Claude Project asset — portable, reusable across all content types
- JSON prompt workflow: reference screenshot → Claude generates structured JSON prompt → paste into image generator (works with any image tool that accepts JSON prompts)
- Hook/tension/payoff/CTA as a four-beat carousel structure applicable to any niche
- Mood/energy tagging: have Claude label a batch of images before selecting, rather than selecting blindly
- 7-10 slide format (23% more engagement than shorter carousels per the video's claim)
- Higgsfield as a model-switching hub — batch at speed with NanoBanana 2, switch to Pro for hero images

## Limitations / Gotchas

- Level 3 requires pre-generating 20-30 images before Claude can select — significant upfront generation time and cost per carousel
- NanoBanana image quality is highly prompt-dependent; the JSON prompt step adds friction for non-technical users
- Google Drive connector availability depends on Claude plan tier — not available on all plans
- The "thousands of likes" framing in the title is aspirational; carousel performance depends heavily on niche, posting time, and account size, none of which Claude controls
- Music addition for Reels is a manual step with no AI integration shown
- No discussed workflow for video carousels or Reel-native formats beyond adding music to static slides
