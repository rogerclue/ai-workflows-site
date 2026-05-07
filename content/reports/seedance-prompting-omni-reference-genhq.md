---
title: "SeaDance 2.0 Complete Guide — Omni Reference, VFX, Marketing Ads, Storytelling"
channel: Gen HQ
url: https://www.youtube.com/watch?v=B22c7HPP5qg
date: 2026-05-06
tags: [seedance, omni-reference, vfx, storytelling, prompting, higgsfield]
tools: [Claude, Higgsfield, WhisperFlow]
use_cases: [cinematic-vfx-shots, real-footage-integration, marketing-ad-generation]
complexity: intermediate
workflow_type: manual-assisted
---

## What This Video Demonstrates

Comprehensive tutorial on SeaDance 2.0 (ByteDance's video model) covering detailed prompting via Claude skill, Omni reference (multi-ingredient input), real footage integration with still frame extraction, 3D floating text in scenes, and one-prompt 15-second marketing ads. The Claude skill generates frame-by-frame prompts with VFX terminology, hex color codes, particle effects, camera behavior, and timing breakdowns.

## Workflow Steps

1. Install Claude "video prompt builder" skill (from Gen HQ) → encodes VFX terminology, lighting design, hex colors, particle effects, camera behavior, and frame-by-frame breakdown format
2. Write a simple description in Claude → skill generates a detailed prompt with shot list, 2-second scene chunks, atmospheric effects, and mood/tone
3. Optional: upload a first frame image to Claude → skill incorporates visual context into the prompt
4. Copy prompt (shot list section only, not the master effects inventory) → paste into SeaDance / Higgsfield
5. If prompt exceeds 4000 chars (SeaDance limit) or 3000 chars (Higgsfield): paste back to Claude → "make this under [X] characters" → copy trimmed version
6. For real footage integration: record yourself → extract still frame at transition point → upload as SeaDance start frame → generate continuation
7. For Omni reference: upload character sheet + location image + optional product/object → SeaDance uses all as generation context
8. For 3D text-in-scene: upload location reference + 3D text reference image → prompt Claude to describe floating text with shadow in scene
9. For 15-second marketing ads: request seamless 15s generation with specific product/effect sequence → one-shot generation
10. **Output:** cinematic VFX shots, character-consistent scenes, or polished marketing ads ready for editing

## Tools Used

| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Claude + video prompt builder skill | Detailed SeaDance prompt generation with VFX language | Pro plan |
| Higgsfield (SeaDance 2.0) | Video generation, Omni reference support | Paid tier |
| WhisperFlow | Voice-to-text for dictating prompts hands-free | Third-party |
| iPhone | Recording real-life footage for integration | Free |

## Claude Code Integration Points

- Video prompt builder skill is a Claude skill — can be installed as a Claude Code skill file for use in automated pipelines
- Prompt length checking and trimming could be automated: Claude Code checks character count → auto-trims if over the platform limit before submission
- Real footage frame extraction could be automated via Claude Code + ffmpeg extracting a frame at a specified timestamp
- Full prompt-to-generation pipeline could pipe output directly to the Higgsfield API rather than relying on copy-paste

## Key Insight

**Omni reference changes the prompting paradigm from "describe what you want" to "show what ingredients you have"** — instead of writing a perfect prompt, you upload a character sheet, a location image, and a product reference, and SeaDance synthesizes them into a coherent video that accurately reflects all three inputs.

## Reusable Primitives

- **Video prompt builder skill:** Claude generates a full VFX-language prompt from a simple description, including hex colors, particle effects, camera behavior, and timestamps — no VFX expertise required
- **Prompt length trimming loop:** paste oversized prompt back to Claude → "make under 4000 characters" → trimmed version ready for SeaDance without manual editing
- **Real footage still frame extraction:** pause at transition point → screenshot → upload as SeaDance start frame for seamless live-to-AI continuation
- **Omni reference multi-ingredient:** character sheet + location image + product reference → combined into a single coherent video generation
- **3D text-in-scene:** upload location ref + 3D text image → prompt "floating text with shadow" → text appears built into the environment
- **Seamless single-take prompt:** include "no cut, no end card" in the prompt → SeaDance generates an unbroken continuous video for the full duration

## Limitations / Gotchas

- SeaDance / Higgsfield prompt limit is 4000 chars (3000 on some platforms) — a prompt trimming loop is required for detailed VFX prompts
- Omni reference character accuracy is impressive but not perfect — nose shape and minor facial features may not match exactly across generations
- 15-second hard limit per generation — longer ads require multi-clip stitching and manual assembly
- Only the shot list section of Claude's output should be pasted into SeaDance — the master effects inventory section is for Claude's internal reference and will bloat the prompt
- SeaDance quality can degrade toward the end of a 15-second generation — endings may need to be trimmed or regenerated
- Real footage integration requires the visual style of the extracted still frame to be compatible with SeaDance's generation aesthetic — heavy color grading or unusual lighting can cause mismatches
