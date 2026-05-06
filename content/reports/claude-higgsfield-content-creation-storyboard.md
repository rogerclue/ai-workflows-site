---
title: "Claude + Higgsfield Just Changed Content Creation Forever! (Tutorial)"
channel: Samin Yasar
url: https://www.youtube.com/watch?v=t6w-IpKjW1s
date: 2026-05-06
tags: [claude-code, higgsfield, ugc-video, content-creation, ad-generation, storyboard]
tools: [Claude Code, Higgsfield MCP, C-dance 2.0, GPT-image-2, Nano Banana Pro, Airtable, Claude Routines]
use_cases: [ugc-ad-generation, storyboard-video-production, autonomous-ad-pipeline, content-agency]
complexity: intermediate
workflow_type: automated-pipeline
---

## What This Video Demonstrates

Three-level tutorial for using Claude + Higgsfield MCP to create professional video ads and content — from basic UGC clips to a fully autonomous ad generation engine running on a schedule. Covers character reference sheets, the storyboard method for long-form video control, and using Claude Routines to run the whole pipeline on autopilot.

## Workflow Steps

### Level 1 — Setup & First Video

1. Download Claude desktop app → Settings → Customize → Connectors
2. Go to higgsfield.ai → MCP tab → copy the connector URL
3. In Claude: Add Custom Connector → paste URL → name "Higgsfield" → Always Allow
4. In any new chat: click + → Connectors → enable Higgsfield
5. Test: "Use Higgsfield MCP to create a C-dance video about [topic]" → confirms Claude + Higgsfield are connected

### Level 2 — Character Reference Sheet + Asset-Driven Videos

**Character Reference Sheet**
1. Take a photo of yourself (Photo Booth on Mac works) → drag into Claude chat
2. Prompt: "Use Higgsfield MCP and GPT Image model to create a character reference sheet of me. One image with all different sides of my face/head so I can feed this into AI."
3. Download the generated reference sheet → save for use in all future video prompts
4. This enables consistent character appearance across all generated videos

**Basic Asset Video**
1. Drag in: character reference sheet + product photo
2. Describe the scene in natural language: "Make a 4-second ad of me playing basketball, getting thirsty, taking a sip, reacting to it being cold"
3. Result: video generates but may have inconsistency issues without proper prompting

**Video Prompt Builder Skill (for quality output)**
1. Install the C-dance prompting skill (creator's Claude Club resource)
2. Use skill: "Use the video prompting skill to write a prompt of [scene description]"
3. Skill generates a structured shot-by-shot timeline with effects, timing, and technical parameters
4. Then: "Use the attached images and prompt to create a new video" → much more accurate, realistic output
5. Key inputs for C-dance: start image, end image, reference video, audio — all optional but improve control
6. C-dance duration options: 4–15 seconds; multiple aspect ratios supported

### Level 3 — Storyboard Method for Long Videos

**The Storyboard Pipeline**
1. Create a brief describing the full video concept
2. Generate image prompts for each scene's start and end frames
3. Generate those frames using GPT-image-2 or Nano Banana Pro
4. Use start/end frames as "omni references" for C-dance to generate each clip
5. Stitch all clips together with Claude's video engine tool (ffmpeg-based)
6. Output: multi-scene video with consistent character and story arc

**AI Storyboard Video Starter (pre-built tool)**
1. Creator provides a Mural board resource → copy URL → paste into Claude Code with new folder
2. Say: "Can you set up my environment for me?" → Claude reads resource, installs tools, creates folder structure
3. Folder structure: `projects/[campaign-name]/` → creative-brief, shot-list, image-prompts, video-prompts, references, approved/, attempts/
4. Workflow: Claude asks what to make → you provide references → it generates brief → you approve/disapprove → generates shot list → generates frames → makes clips → stitches together
5. Each step has human approval gates before proceeding

**Running a UGC Ad Campaign**
1. Start new session with project folder selected
2. "Using this project, make a new project. I want UGC-type ads for this product. Ask for references."
3. Drag in product photo → "that's the product. Generate ads with dialogue about the benefits."
4. Claude researches product benefits, generates shot list, produces videos via Higgsfield, stitches final output
5. All assets organized in finder: image-prompts/, video-prompts/, approved/, final-output/

### Autopilot Engine — Claude Routines

1. In Claude desktop: top-left → Routines → New Routine
2. Select "Remote" (runs on cloud, not your computer — doesn't require machine to be on)
3. Name the routine (e.g., "Autopilot Dr. Berg Ads")
4. Select Higgsfield connector
5. Set prompt: "Every hour, create 3 different ads for [brand]. Use the Higgsfield MCP and the video skill."
6. Hit Create → routine runs on schedule automatically
7. Scale: brute-forces Higgsfield usage to maximize subscription value; builds up large variation library for A/B testing

**Airtable Integration (advanced)**
- Connect Airtable as a Kanban board to track all generated ad variations
- Jobs run market research, generate contact sheets, produce frame-by-frame storyboards
- All start/end frames visible in one place; videos generated autonomously

## Tools Used

| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Claude Code | Creative director; orchestrates all generation and storyboard logic | Claude Max/Pro |
| Higgsfield MCP | Film crew; generates images and videos via C-dance, GPT-image-2, Nano Banana Pro | Higgsfield subscription |
| C-dance 2.0 | Primary video generation model (via Higgsfield) | Included in Higgsfield |
| GPT-image-2 | Best image model for start/end frames; highest realism | Included via Higgsfield |
| Nano Banana Pro | Alternative image model for character reference generation | Included via Higgsfield |
| Claude Routines | Schedules autonomous ad generation pipeline (local or remote) | Claude Max/Pro |
| Airtable | Kanban board for tracking ad variations, market research, generated assets | Free tier / paid |

## Claude Code Integration Points

- **Higgsfield as MCP connector**: Claude directly calls Higgsfield's API through the connector — no manual API calls needed
- **Video prompt builder skill**: Custom skill that structures natural language descriptions into proper C-dance prompt format (shot list, effects timeline, technical parameters)
- **Storyboard environment setup**: Paste a resource URL → Claude reads it, installs tools, scaffolds entire project folder structure
- **Claude Routines for autopilot**: Native Claude scheduling feature runs the full ad generation pipeline on a cron schedule without user interaction
- **ffmpeg stitching**: Claude uses ffmpeg under the hood to stitch clips into final long-form video

## Key Insight

**The storyboard method + start/end frame control is the quality lever** — generating individual scene clips with explicit first and last frames (using GPT-image-2 for realism), then stitching them, produces far better results than asking for a long video in one shot. This mirrors how professional directors work and gives granular control over every scene transition.

## Reusable Primitives

- **Character reference sheet pattern**: One photo → Claude + GPT-image-2 → multi-angle reference sheet → attach to every future video prompt for character consistency
- **Video prompt builder skill**: Natural language scene description → structured shot-by-shot C-dance prompt → dramatically better output quality
- **Storyboard pipeline**: Brief → image prompts → start/end frames → C-dance clips → ffmpeg stitch → long-form video with full scene control
- **Approval gate workflow**: Claude generates draft at each stage → human approves/disapproves → proceeds to next stage; maintains quality control without losing automation benefits
- **Claude Routines autopilot**: Set remote routine → hourly ad generation → builds large creative variation library for A/B testing without manual prompting
- **Agency business model**: Set up pipeline for a brand → deliver sample ads → pitch $5K/mo retainer for ongoing creative generation; replaces traditional agencies at fraction of cost

## Limitations / Gotchas

- **Higgsfield rate limits**: Can't generate 100 creatives in an afternoon manually — the autopilot routine workaround is specifically designed to drip around these limits
- **Video prompt skill is paywalled**: The C-dance prompting skill that dramatically improves output quality is inside the creator's paid community (Claude Club) — not publicly available
- **Character consistency is imperfect**: Even with reference sheets, C-dance doesn't always produce an exact likeness — multiple attempts and prompt refinement required
- **Remote routines require careful prompting**: The routine prompt must be as detailed as your best manual session prompt — vague routines produce vague output
- **Storyboard tool is external**: The AI Storyboard Video Starter is a Mural board resource from creator's community, not a native Claude feature
- **Airtable integration not shown in detail**: The Airtable Kanban setup is shown as an end result, not a step-by-step tutorial — requires additional setup
- **Local vs remote routines**: Local routines require your computer to be on; remote routines run independently but cost more in cloud compute
