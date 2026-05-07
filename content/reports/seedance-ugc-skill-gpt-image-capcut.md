---
title: "Claude UGC Skill + GPT Image 2.0 + Seedance + CapCut Full Workflow"
channel: AI creator (UGC/ecom focus)
url: https://www.youtube.com/watch?v=2cHNPiHF_Rk
date: 2026-05-06
tags: [ugc, seedance, gpt-image, capcut, claude-skill, character-consistency]
tools: [Claude, GPT Image 2.0, Seedance 2.0, CapCut]
use_cases: [character-consistent-ugc, multi-clip-video-production]
complexity: intermediate
workflow_type: manual-assisted
---

## What This Video Demonstrates

Full UGC ad pipeline starting with a Claude UGC skill for prompt building, using GPT Image 2.0 to generate a consistent custom character sheet, feeding that character into Seedance 2.0 for video generation, and editing in CapCut. A voice consistency trick ties multi-clip productions together by extracting audio from the first Seedance clip and uploading it as a voice reference for all subsequent clips.

## Workflow Steps

1. Install/invoke Claude UGC prompt builder skill → generates detailed video prompt with hook, scene description, character description, and timing
2. Use GPT Image 2.0 (via ChatGPT or API) to generate character sheet: consistent person from multiple angles (front, side, 3/4 view) for use as reference image
3. Upload character sheet + Claude-generated prompt into Seedance 2.0 as first frame / reference
4. Generate first clip (max 15 seconds)
5. Extract audio from first clip as MP3 (voice reference)
6. For additional clips: upload MP3 voice reference + same character sheet → generate next clip with voice continuity
7. Import all clips into CapCut → arrange, add captions, export
8. **Output:** polished UGC-style video ad with consistent character and voice across all clips

## Tools Used

| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Claude + UGC skill | Prompt generation with detailed scene/character specs | Pro plan |
| GPT Image 2.0 | Character sheet generation (multi-angle consistency) | ChatGPT Plus or API |
| Seedance 2.0 | Video generation from character + text prompt | Higgsfield / fal.ai |
| CapCut | Final editing, captions, export | Free / Pro |
| ffmpeg (optional) | Audio extraction from first clip | Free |

## Claude Code Integration Points

- UGC skill encodes the full prompt structure — can be installed as a Claude Code skill file
- GPT Image 2.0 character sheet generation could be called via API within Claude Code, removing the manual ChatGPT step
- Audio extraction (voice reference) could be automated via Claude Code + ffmpeg bash command
- Entire pipeline could be orchestrated as a Claude Code project with `CLAUDE.md` encoding character references and model parameters

## Key Insight

**The voice consistency trick is the missing piece for multi-clip Seedance productions** — extract the audio from your first generated clip as an MP3, then upload that exact audio file as a voice reference for all subsequent clips, so the same "voice" appears throughout even though each clip is generated independently.

## Reusable Primitives

- **Character sheet generation via GPT Image 2.0:** one prompt → multi-angle consistent character usable as reference across all subsequent generations
- **Voice reference extraction:** ffmpeg extract audio from first clip → upload as Seedance reference element for voice continuity across all clips
- **Claude skill → detailed prompt:** hook type + character description + scene details + timing breakdown generated in one pass
- **Multi-clip Seedance pipeline:** generate clips sequentially with shared character sheet + voice reference for coherent output
- **CapCut post-production:** captions, trim, color grade, export optimized for platform
- **Prompt character limit awareness:** Seedance accepts shorter prompts than some expect — Claude skill keeps prompts concise by design

## Limitations / Gotchas

- GPT Image 2.0 character consistency is good but not perfect — minor variation between clips still occurs
- Seedance 15-second hard limit means any ad longer than 15 seconds requires multi-clip assembly
- Voice reference trick works reasonably well but some tonal drift between clips is possible
- CapCut editing is still fully manual — not yet automated in this workflow
- GPT Image 2.0 access requires ChatGPT Plus or API credits
- Character sheet quality directly affects video output quality — invest time in getting a good sheet before scaling
