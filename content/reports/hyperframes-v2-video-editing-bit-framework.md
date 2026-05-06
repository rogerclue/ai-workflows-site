---
title: "Claude + Hyperframes V2 automates video editing like never before (NEW Skill)"
channel: Jay E | RoboNuggets
url: https://www.youtube.com/watch?v=4E2I_NJkzhI
date: 2026-05-06
tags: [hyperframes, video-editing, claude-code, motion-graphics, bit-framework, storyboard]
tools: [Claude Code, Hyperframes, ffmpeg, fast-whisper, 21st.dev, Nano Banana 2, Kling 3.0]
use_cases: [video-editing-automation, motion-graphics-generation, storyboard-production, skill-calibration]
complexity: intermediate
workflow_type: manual-assisted
---

## What This Video Demonstrates

Hyperframes V2 (open-source, free) now supports subtitles, floating card animations, 3D assets, motion graphics, color keying, and a studio timeline UI — all driven by Claude Code. Creator introduces the BIT framework (Build → Integrate → Tune) for iteratively training an agent toward your specific video quality standard.

## Workflow Steps

### Level 1 — Website to Video (One-Shot)
1. Load Hyperframes helper skill into Claude Code (or any agent)
2. Give a website URL: "Use Hyperframes website-to-video to turn this into a 10-second video"
3. Claude scrapes site, extracts brand/design palettes from screenshot, downloads assets
4. Hyperframes renders video automatically
5. Output: usable draft, but needs guidance for quality — good as a starting basis
6. **Enhancement**: paste component prompts from 21st.dev to influence animation style

### Level 2 — Storyboard-First Video (Quality Control)
1. Describe the video concept to Claude Code
2. Request: "Build me a one-page HTML storyboard that visually shows my plan"
3. Review storyboard: number of scenes, seconds, copy per scene, visual layout mock-up
4. Give feedback on storyboard (much cheaper than re-rendering video)
5. After approval, Claude renders the final Hyperframes video from the approved storyboard
6. Open **Hyperframes Studio** (localhost timeline UI) to preview before final render

### Level 3 — Raw Footage → Edited + Animated Video (BIT Framework)

**Step 1 — Cut the video (Build)**
1. Give Claude the raw footage file path
2. Prompt: "Edit my raw recording into a clean final cut ready for Hyperframes. Cut all silences and dead air. Transcribe with word-level timestamps. Apply last-take rule. Generate HTML page showing current vs proposed script side by side."
3. Claude uses ffmpeg (video cutting) + fast-whisper (transcription) under the hood
4. Review the HTML diff — confirm cuts before rendering

**Step 2 — Storyboard the overlays**
1. Describe layout: "Part 1: full bleed video + subtitles + floating card right at 80% opacity. Part 2: video collapses to bottom-right rectangle, center stage fills with motion graphics."
2. Request HTML storyboard for review
3. Iterate: "One card per beat, card enters/holds/exits. Liquid glass style. Relevant logos."
4. Provide local paths to logo SVGs and brand assets for Claude to incorporate
5. Confirm storyboard before any rendering

**Step 3 — Add motion graphics**
1. Find components on 21st.dev (wireframe globe, shaders, etc.)
2. Copy the component prompt → paste into Claude Code with placement instructions
3. For 3D logos: "Generate image of [logo] with green screen background using Nano Banana 2, then animate as rotating 3D logo using Kling 3.0" → Hyperframes color-keys the green screen

**Step 4 — Render and preview in Hyperframes Studio**
1. "Open Hyperframes Studio and apply these card animations to our cut video"
2. Preview timeline in localhost Studio UI — check card timing, subtitle sync, motion graphics
3. Iterate until satisfied

### BIT Framework — Calibrating Agent Taste Over Time

**Build**: Complete a video session with iterative feedback to guide quality  
**Integrate**: After session, prompt: "Capture all learnings and update the Hyperframes helper skill based on my feedback and our best practices"  
**Tune**: Repeat — each session the skill improves toward your specific quality standard

**Calibrate skill shortcut**: Creator built a `/calibrate` skill that auto-runs the Integrate step — sends 6 bullet-point recommendations for skill updates at session end

### New Hyperframes V2 Features
- **Subtitles**: animated subtitle overlays with timing synced to audio
- **Floating card animations**: cards enter/hold/exit per beat; liquid glass style supported
- **3D assets**: integrate 21st.dev components (wireframe globes, shaders) directly in video
- **Color keying**: remove green screen from videos/images; embed 3D rotating logos
- **Hyperframes Studio**: localhost timeline UI for previewing and manual fine-tuning
- **Catalog**: pre-built cards and animations (TikTok follow, etc.) — copy page URL, give to agent

## Tools Used

| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Claude Code | Orchestrates entire pipeline; writes Hyperframes HTML/code; applies storyboard | Claude Max/Pro |
| Hyperframes | Open-source video rendering from HTML/code; V2 adds subtitles, cards, 3D, color keying, Studio | Free / open-source |
| ffmpeg | Under-the-hood video cutting (silence removal, trimming) | Free / open-source |
| fast-whisper | Under-the-hood audio transcription with word-level timestamps | Free / open-source |
| 21st.dev | Component library; source of HTML animation components (globes, shaders) to paste into Claude | Free |
| Nano Banana 2 | Generates logo images with green screen backgrounds for 3D logo workflow | Via Higgsfield |
| Kling 3.0 | Animates green-screen logo images into rotating 3D logos | Via Higgsfield |

## Claude Code Integration Points

- **Hyperframes helper skill**: single `.md` skill file gives Claude full knowledge of Hyperframes install, best practices, storyboard format, rendering pipeline — works with Claude Code, Hermes, Open Claw
- **BIT framework**: Build (guide through session) → Integrate (capture session learnings into skill) → Tune (repeat until quality converges) — applies to any creative skill, not just video
- **`/calibrate` skill pattern**: end-of-session skill that prompts Claude to review the session and output 6 bullet-point recommendations for updating the relevant skill — automatable
- **HTML storyboard as alignment tool**: before any video render, generate an HTML storyboard page — cheap token cost, catches misalignment before expensive rendering
- **21st.dev component injection**: copy component prompt from 21st.dev → paste to Claude Code → Hyperframes uses it as animation reference; works because Hyperframes operates in HTML

## Key Insight

**Storyboard first, render second — always** — the HTML storyboard step costs almost no tokens and catches creative misalignment before the expensive video render. The BIT framework makes this systematic: every session's feedback gets written back into the skill, so the agent progressively learns your specific taste without any manual prompt engineering.

## Reusable Primitives

- **BIT framework**: Build (first version with heavy guidance) → Integrate (capture session → update skill) → Tune (next session, less guidance needed) — applies to any creative workflow where "quality" requires iterative taste-training
- **HTML storyboard gate**: always generate an HTML storyboard page before rendering any complex video; cheap, catchs misalignment, gives concrete feedback surface
- **21st.dev → Hyperframes injection**: find HTML component on 21st.dev → copy prompt → paste to agent with placement instruction → Hyperframes embeds animation style in video
- **Last-take rule for video cutting**: "if a phrase is said twice, keep the second take" — eliminates manual review of repeated takes in raw footage
- **Green screen → 3D logo**: generate logo image with green screen → Kling 3D animation → Hyperframes color-key removes background → embedded as rotating logo in video
- **`/calibrate` end-of-session skill**: after any creative session, invoke calibrate skill → get 6 bullet recommendations → apply or review → skill self-improves toward your taste

## Limitations / Gotchas

- **Quality requires guidance**: one-shot prompts rarely produce high-quality output — expect multiple storyboard iterations before the final render
- **Hyperframes helper skill is paywalled**: the pre-built skill file is available to RoboNuggets community members; can build your own from Hyperframes docs
- **21st.dev components are website-first**: components need adaptation for video context — Claude handles this but output varies
- **ffmpeg + fast-whisper must be installed**: Hyperframes helper skill handles this but requires local system dependencies
- **Hyperframes Studio is localhost**: the timeline preview UI runs locally — not a cloud service
- **BIT framework is time-investment**: the Tune phase requires doing the same workflow repeatedly — benefit compounds over many sessions, not immediately
