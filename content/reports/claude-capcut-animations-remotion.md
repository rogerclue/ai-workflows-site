---
title: "Claude + CapCut = INSANE Animations (Full Workflow)"
channel: Matt Loui
url: https://www.youtube.com/watch?v=8oIFBQ9BhVU
date: 2026-05-05
tags: [claude-code, video-editing, motion-graphics, remotion, capcut, content-creation]
tools: [Claude Code, Remotion, CapCut, Node.js]
use_cases: [motion-graphics-generation, video-color-grading, animated-overlays, content-creation]
complexity: beginner
workflow_type: manual-assisted
---

## What This Video Demonstrates

Shows how to use Claude (free and paid) with Remotion to generate premium motion graphics — animated pill overlays, motion backgrounds, counting number effects, text highlighting, and map animations — all through natural language prompts, no coding required. Final output is imported into CapCut for video production.

## Workflow Steps

### Phase 1 — Free Claude Tricks (No Subscription)

**LUT Color Grade Generation**
1. Open Claude (claude.ai web or desktop app) → new chat
2. Prompt: "Generate a clean soft pastel .cube LUT file for studio YouTube videos. Cinematic and clean."
3. Claude generates and explains the LUT parameters (shadows, highlights, saturation, contrast)
4. Download the `.cube` file → import into CapCut: Adjustment → LUT → Import
5. Apply as layer over footage; reduce opacity to ~50% for subtlety
6. Iterate: ask Claude to modify (e.g., "remove the teal from the shadows") → download new file

**Animated Counting Numbers (SRT Method)**
1. Prompt Claude: "Generate an SRT file with numbers counting from 0 to 535. Each subtitle 0.1 seconds long. Add a dollar sign in front of all."
2. Download the `.srt` file → drag directly onto CapCut timeline
3. Select all subtitle clips → customize font, size, color
4. Create compound clip → use Speed control to compress duration (e.g., 10x speed)
5. Bonus: double-click compound clip → extend final number frame to "hold" on end value

### Phase 2 — Claude Code + Remotion (Paid, ~$17/mo Pro)

**One-Time Setup**
1. Install Node.js (nodejs.org → Get Node.js)
2. In Claude Code: paste `npx create-video@latest` → accept/bypass permissions
3. Navigate into project: `cd my-video && npm i`
4. Remotion installs with a skill that Claude Code loads for all subsequent generations

**Motion Backgrounds**
1. Find a reference image (e.g., Pinterest gradient background) → download
2. Claude Code: drag reference image into prompt + paste motion background prompt
3. Prompt pattern: "Using the Remotion skill, turn this into an aesthetic motion background. Change nothing about colors/textures. Make it a premium motion background. Rotate 90°, 16:9, 10 seconds long."
4. Claude builds Remotion composition → opens browser preview automatically
5. Iterate with natural language: "Make that blue gradient move 3x faster" → updates in ~5 seconds

**Animated Motion Graphics (Pill/Box Overlays)**
1. Find UI reference on Pinterest (e.g., "pill-shaped UI buttons")
2. Claude Code: drag reference → paste prompt ending with **"Ask me any clarifying questions so we nail this spot on"**
3. Claude asks 5–7 clarifying questions (layout, animation duration, colors, aspect ratio, background)
4. Answer questions → Claude builds composition (~2–4 minutes)
5. Make numerical adjustments: "Make animation 10 seconds. Change font to Inter Semibold. Make everything 10% larger."
6. When done: "Please make the background transparent" → renders with alpha channel
7. Render → import `.webm` with transparency into CapCut → overlay on footage or motion background

**Text Search Bar Animation**
1. Find reference image of a search bar → drag into Claude Code
2. Prompt: "Use Remotion best practices. Build a pill-type rectangular box with glows orbiting it, tracked to outer perimeter. Ask clarifying questions."
3. Answer layout/glow/timing questions → Claude builds
4. Add live typing effect: "Lock in box design. Add text (Montserrat font) that types 'How do I create stunning motion graphics like this.' Make it look like real typing — mixed speed, errors, backspaces."

**Text Highlighting Effect**
1. Take screenshot of text to highlight → drag into Claude Code
2. Prompt: specify which words to highlight → Claude generates smooth highlight animation
3. If result looks choppy: "The highlight looks staggered/choppy. Make it smooth." → fixed in ~45 seconds

**Map Animation**
1. Prompt: describe origin → destination path, map style, camera behavior, composition size
2. If Mapbox token error: "Don't use Mapbox, use another map" → Claude switches to open-source map
3. Add globe effect + color: "Make the map colorful and add a globe effect"
4. Render with Claude's render command → transparent background output

### Key Workflow Principle: Clarifying Questions Pattern
- End EVERY complex prompt with: **"Ask me any clarifying questions so we nail this spot on"**
- This triggers Claude to surface ambiguities before generating — saves tokens and iterations
- Claude uses Remotion's schema knowledge to ask relevant technical questions (layout, timing, aspect ratio, animation behavior)
- Give numerical values for changes ("decrease glow size by 30%") rather than vague descriptors

## Tools Used

| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Claude (web/desktop) | Free tier: LUT generation, SRT generation for animated numbers | Free |
| Claude Code | Remotion-powered motion graphics generation via natural language | Pro ($17/mo) or Max |
| Remotion | Programmatic video composition framework; Claude uses it as a skill to generate motion graphics | Free/open-source (installed via npx) |
| Node.js | Required runtime for Remotion | Free |
| CapCut | Final video editor; imports LUTs, SRTs, and rendered Remotion clips | Free / paid |

## Claude Code Integration Points

- **Remotion as Claude Code skill**: Claude Code has a built-in Remotion skill that gives it full knowledge of Remotion's API — this is what enables natural language → motion graphic generation
- **Image reference input**: Claude Code accepts drag-and-drop image references, enabling design-matching from Pinterest screenshots
- **Live preview**: Remotion opens a browser preview that updates in real time as Claude makes changes — no re-render needed for iteration
- **Bypass permissions mode**: Switch from "Accept Edits" to "Bypass Permissions" to allow Claude to run all file operations without confirmation dialogs
- **Transparent render output**: Claude can render with alpha channel for overlay use in any video editor

## Key Insight

**The "ask clarifying questions" prompt ending is the quality-control lever** — appending "Ask me any clarifying questions so we nail this spot on" transforms Claude from a one-shot generator into an interactive design collaborator, surfacing ambiguities before generation and dramatically reducing wasted iterations.

## Reusable Primitives

- **LUT generation loop**: "Generate [aesthetic] .cube LUT file" → download → import to CapCut → adjust opacity → iterate with Claude for tweaks
- **SRT counting animation**: Generate `.srt` with 0.1s intervals → drag to CapCut timeline → compound clip → speed ramp → hold last frame
- **Remotion clarifying questions pattern**: Any complex motion graphic prompt → end with "Ask clarifying questions" → answer 5–7 questions → generate → iterate numerically
- **Transparent overlay pipeline**: Generate Remotion composition → request transparent background → render → import to CapCut as overlay layer
- **Reference-driven design**: Drag Pinterest screenshot into Claude Code prompt → "make this into a motion [background/graphic]" → Claude matches aesthetic without writing CSS manually
- **Numerical iteration**: "Make X 30% smaller / 2x faster" gives Claude precise targets and reduces back-and-forth vs. vague descriptors

## Limitations / Gotchas

- **Remotion only works in Claude Code, not Claude chat or co-work**: The Remotion skill is exclusive to the Code interface — a mistake many users make initially
- **Mapbox token required for map animations**: Default map generation attempts to use Mapbox (requires API key); workaround is to ask Claude to use an open-source map alternative
- **Preview vs render quality**: Remotion browser preview can look "spotty" at full playback speed — final rendered file is cleaner; always render before judging quality
- **Node.js prerequisite**: Remotion requires Node.js installed first; Claude can't install system-level dependencies
- **CapCut Lab paywall**: The creator's extended tutorial content is behind a paid course — this video covers the core workflow but references more use cases gated behind that
- **Token usage**: Running multiple parallel generations burns tokens quickly; creator upgraded to Max plan for testing but claims Pro ($17/mo) is sufficient for normal use
