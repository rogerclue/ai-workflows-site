---
title: "Claude + Arcads/Seedance UGC Autopilot — Competitor Clone + Video Extension"
channel: AI marketing creator
url: https://www.youtube.com/watch?v=OXlrYrPCCek
date: 2026-05-06
tags: [ugc, seedance, arcads, competitor-clone, video-extension, claude-code]
tools: [Claude Code, Arcads, Seedance 2.0, ffmpeg, Chrome extension]
use_cases: [competitor-ad-clone-automation, long-form-ugc-via-video-stitching]
complexity: advanced
workflow_type: automated-pipeline
---

## What This Video Demonstrates

Advanced UGC pipeline combining competitor ad cloning (download → analyze → rebuild) with video extension beyond the 15-second Seedance limit. Claude Code orchestrates the entire pipeline: analyzing competitor ads visually, generating full 30-second scripts split into sections, creating matching clips, and stitching with ffmpeg.

## Workflow Steps

1. Find winning competitor ad on TikTok/Meta → Claude Code downloads it
2. Claude analyzes ad structure (hook type, pacing, script formula, visual style) without reproducing the original
3. Generate fresh script with same proven structure but original dialogue and different actor
4. For videos >15 seconds: Claude writes full script then splits into 2-3 sections with natural breakpoints
5. Generate Section 1 via Arcads or Seedance → save output
6. Extract audio from Section 1 clip as MP3 → upload as voice reference for Section 2 (voice consistency trick)
7. Generate Section 2+ using same actor + voice reference
8. Claude Code runs ffmpeg to stitch clips into seamless final video
9. Output: finished 30-45 second UGC ad ready for Meta/TikTok

## Tools Used

| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Claude Code | Orchestrator, script writer, ffmpeg runner | Pro plan |
| Arcads | AI actor video generation | Pro plan |
| Seedance 2.0 | Alternative video generation | Higgsfield/fal.ai |
| ffmpeg | Video stitching | Free/open source |
| Chrome extension | Browser automation for UI fallback | Free |

## Claude Code Integration Points

- Claude Code runs ffmpeg directly via bash — native capability, no extra tooling required
- Competitor analysis → script rewrite is pure Claude reasoning task
- Voice reference extraction (audio from video clip) scriptable via ffmpeg in Claude Code
- Could add CLAUDE.md with successful competitor clone patterns for persistent learning across batches

## Key Insight

**The 15-second video limit is bypassable** — generate the full script first, split at natural breakpoints, extract the first clip's audio as an MP3 voice reference, then use that reference for subsequent clips to maintain voice consistency before stitching with ffmpeg.

## Reusable Primitives

- Competitor clone pattern: download ad → structure analysis → fresh script with same formula
- Video extension via section splitting: full 30s script → 2 sections → generate separately → ffmpeg stitch
- Voice consistency trick: extract audio from clip 1 as MP3 → upload as voice reference for clip 2+
- ffmpeg stitch command: Claude Code generates and runs the exact concat command
- Actor matching by demographic: Claude browses Arcads library filtered by target customer profile
- Performance loop: winning script structures saved to CLAUDE.md for next batch

## Limitations / Gotchas

- Voice consistency across clips is not guaranteed — the MP3 reference trick helps but is not perfect
- ffmpeg stitching requires careful matching of video format, resolution, and framerate
- Competitor ad download may raise copyright concerns depending on jurisdiction and use
- Seedance 15-second hard limit means multi-clip approach always required for longer ads
- Total generation time for 30s ad can be 10-20 minutes across multiple generations
