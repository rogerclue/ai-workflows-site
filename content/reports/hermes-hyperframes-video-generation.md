---
title: "Hermes Agent + HyperFrames: AI Video Generation Without Video Models"
channel: Onchain AI Garage
url: https://www.youtube.com/watch?v=1IsskexiCSw
date: 2026-05-17
tags: [hermes-agent, video-generation, hyperframes, html-video, content-automation]
tools: [Hermes Agent, HyperFrames, FFmpeg, GSAP, Shrimple]
use_cases: [video-generation, content-automation, social-media-shorts, architecture-explainers]
complexity: advanced
workflow_type: agent-loop
---

## What This Video Demonstrates

HyperFrames is an open-source framework that generates videos from HTML, CSS, JavaScript, GSAP, Canvas, and WebGL — rendering them to video via FFmpeg. Because AI agents already understand HTML deeply, they can generate and edit video compositions reliably without touching expensive video generation models.

## Workflow Steps

1. Run `hermes update` to ensure Hermes Agent is current
2. Install the HyperFrames skill via Hermes (or point to the GitHub URL directly)
3. Provide source material: a script/transcript, a website URL, a GitHub repo, or raw text
4. (Optional) Use Shrimple sub-agent to research the topic and brainstorm a prompt
5. Run the HyperFrames agent — it opens a local studio preview server showing the timeline and all scenes during generation
6. Agent reads source material, generates HTML/CSS/JS compositions scene by scene
7. FFmpeg renders compositions to final video file (MP4)
8. Save as a reusable template (swap transcript/content to generate a new video)

## Tools Used

| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Hermes Agent | Orchestrator — runs skills, manages memory, 24/7 scheduling | Paid (Hermes subscription) |
| HyperFrames | Open-source video-from-HTML framework | Free (open source) |
| FFmpeg | Renders HTML compositions to MP4 | Free |
| GSAP | Animation library used inside HyperFrame compositions | Free (standard license) |
| Shrimple | Sub-agent for topic research and prompt brainstorming | Included in Hermes |

## Claude Code Integration Points

- HyperFrames compositions are HTML/CSS/JS files — Claude Code can read, edit, and debug them directly with no friction
- The `sc:build` or `sc:implement` skills could scaffold a new HyperFrames scene template
- A Claude Code hook (PostToolUse on Write) could auto-trigger `ffmpeg` rendering after a composition file is saved
- Claude Code agents could replace Shrimple for the research phase — reading a GitHub repo or website and outputting a structured storyboard prompt
- A cron-scheduled Claude Code agent could automate the full pipeline: pull new content → generate video → output to a delivery folder

## Key Insight

**HTML-native video generation lets AI agents create high-quality videos without expensive video generation models** — because agents already understand HTML well, they can reliably write and edit compositions that render to video, turning any structured source material (repos, websites, transcripts) into polished video output.

## Reusable Primitives

- HTML/CSS/JS as a video composition format — no proprietary format lock-in
- Reusable slide templates (save once, plug in new transcript to regenerate)
- Shrimple research → storyboard prompt → HyperFrames generation pipeline
- Local studio preview server for real-time timeline inspection during generation
- Social-native elements (fake social posts, lower thirds, subscribe CTAs) as composable scene modules
- `hermes update` → skill install pattern applicable to any Hermes-based workflow

## Limitations / Gotchas

- HyperFrames requires Hermes Agent — not available as a standalone Claude Code skill out of the box
- Video quality depends on HTML rendering fidelity; complex 3D or physics effects require WebGL knowledge
- No native audio generation — voiceover or music must be added separately
- The Shrimple research step adds time; for simple use cases it may be skippable but the video doesn't address how to skip it cleanly
- 24/7 automation requires a running Hermes instance (not a serverless Claude Code session)
- Build time (~9 minutes for a 6-slide deck) is non-trivial for high-volume content pipelines
