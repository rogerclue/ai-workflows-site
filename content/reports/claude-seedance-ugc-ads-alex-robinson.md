---
title: "Claude + seedance 2.0 = the BEST AI UGC ads (Updated Tutorial)"
channel: Alex Robinson
url: https://www.youtube.com/watch?v=Py47FzLdF9E
date: 2026-05-07
tags: [ugc-video, seedance, higgsfield, claude, capcut, ecommerce]
tools: [Claude, Higgsfield, Seedance 2.0, GPT-image-2, Nano Banana 2, CapCut]
use_cases: [ugc-ad-script-generation, multi-scene-video-assembly, character-consistent-ugc, ecommerce-product-ads]
complexity: beginner
workflow_type: manual-assisted
---

## What This Video Demonstrates

A full end-to-end tutorial for building realistic AI UGC ads using a custom 32-page PDF script system, Claude for script generation, Higgsfield Seedance 2.0 for multi-scene clip generation, and CapCut for final assembly — optimized for e-commerce dropshipping advertisers who want character-consistent UGC without expensive talent.

## Workflow Steps

### Phase 1 — Assets Preparation

**Avatar Generation**
1. Go to ChatGPT → GPT Image 2.0 → set quality to 2K, ratio 9:6
2. Prompt: "Generate a candid and natural photo of an attractive [demographic] standing in [setting]." — use "candid and natural" for authentic UGC aesthetic
3. Save the generated UGC avatar image

**Product Image Cleanup**
1. Screenshot product from website
2. In Higgsfield: switch to Nano Banana 2 model → prompt: "Generate a high quality render of this image against a white background" → removes clutter around product
3. Save clean product image

**Upload to Higgsfield**
1. Upload avatar image → Higgsfield approves it (unless inappropriate or real-person replication)
2. Go to Elements tab → Add Element → name it `@bottle` (or `@[product]`) → upload clean product image
3. Product element is now tagged — Claude can reference it by name in prompts

### Phase 2 — Script Generation with Claude

**Setup**
1. Sign up for Claude → create a Project
2. Upload the creator's 32-page UGC Script Writing PDF to the project (linked in description)
3. Optional: build a Claude Code skill from the PDF using `/[skill-name]` for reuse across sessions

**Script Generation**
1. Upload to Claude: PDF + avatar image + product image + proven hook list (100 viral TikTok hooks)
2. Prompt: "Study this PDF and take my website and product, and create one ad using the [midfunnel punchy / full stack] framework. Be sure to use one of the viral hook frameworks attached."
3. Claude generates multi-chunk script where each chunk = one Seedance clip
4. Each chunk includes:
   - Voiceover text (natural-sounding, trained word pronunciation included)
   - Estimated runtime in seconds
   - Whether to `@[product]` tag is included or excluded per scene
   - Character lock / direction blocks that stay consistent across all clips
5. Optional: ask Claude to also generate the other format ("Now build me a full stack script")
6. Review and tweak script; tell Claude to reformat product references: "Reframe all chunks and make sure the @ of the product is `@bottle`"

**Two Script Formats**:
- **Midfunnel punchy**: shorter clips, fewer scenes, cheaper credits — for audiences already aware of the problem
- **Full stack**: longer video, more scenes, educates about the problem first — more credits, higher awareness play

### Phase 3 — Seedance Generation in Higgsfield

**Setup per clip**
1. Copy the Universal Direction Block from Claude's output (character lock + hair direction + UGC realism blocks)
2. In Higgsfield: Video tab → Seedance 2.0 → paste Universal Direction Block into prompt
3. Set resolution: **720p** (NOT 1080p — 1080p is 2× credits; 720p is sufficient quality)
4. Set aspect ratio: 9×6

**Generate each clip**
1. Copy chunk 1 prompt from Claude → go to Voiceover section in prompt → remove old voiceover → paste chunk 1
2. Check: does this chunk include `@bottle`? If script says "no bottle" → manually remove the `@bottle` tag from prompt (even if it auto-populated)
3. Set duration = recommended runtime from Claude (e.g., 6 seconds)
4. Hit Generate → move to next chunk while it renders (Pro plan: max 4 simultaneous generations)
5. Repeat for all chunks

**Quality check & regeneration**
1. Download each clip as it completes → import to CapCut
2. Review voice consistency across clips (common issue: clip 3 sounds different)
3. If voice drifts: in Higgsfield → Change Voice → pick consistent voice from library
4. If clip is too fast: shorten runtime (e.g., 6s → 5s) and regenerate
5. Expect 1–2 clips to need regeneration — budget credits accordingly

### Phase 4 — CapCut Assembly

1. Import all clips to CapCut timeline in order
2. Fix pacing issues: select fast clip → Speed → reduce to 90% (sweet spot between natural and slow)
3. Add captions: Auto-caption → change font to Classic → add black outline preset → resize and reposition
4. Add background music
5. Optional: add B-roll over glitchy segments to mask imperfections
6. Export final video

## Tools Used
| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Claude | Script generation using 32-page PDF framework; multi-chunk output formatted for direct Seedance input | Free / Pro |
| Higgsfield | Seedance 2.0 video generation; element tagging for product consistency; avatar upload + approval | Plus plan ($49/mo) |
| Seedance 2.0 | AI UGC video generation; character-consistent multi-scene clips from text prompts | Via Higgsfield credits |
| GPT-image-2 (ChatGPT) | UGC avatar generation at 2K quality; "candid and natural" prompt style | ChatGPT Plus/Pro |
| Nano Banana 2 | Clean product image rendering (white background, no props) | Via Higgsfield |
| CapCut | Final video assembly; caption generation; speed adjustment; music | Free / Pro |

## Claude Code Integration Points
- The 32-page PDF can be turned into a Claude Code skill: "Build a skill from this PDF" → `/ugc-script` command generates formatted multi-chunk Seedance scripts on demand
- The creator mentions building an advertorial skill in Claude Code that outputs directly into PageFly/Shopify — same pattern applies to UGC scripts
- Claude Code could automate the Higgsfield API calls for each chunk (using fal.ai or Higgsfield MCP) to eliminate the manual copy-paste-generate loop

## Key Insight
**The secret to realistic AI UGC is script authenticity, not visual realism** — Seedance already produces visually convincing characters, but if the script sounds unnatural or AI-written, viewers immediately notice; the PDF framework + viral hook library is specifically engineered to make Claude write voiceovers that sound like real people speaking naturally, which is the actual quality lever.

## Reusable Primitives
- **PDF-as-Claude-training**: upload a domain-expert document (script frameworks, hook libraries, brand guides) to a Claude Project → Claude internalizes it as its "brain" for that domain without prompt engineering
- **Universal Direction Block**: extract a set of unchanging cinematography/character instructions from Claude → paste into every Seedance prompt as a prefix → maintains visual consistency across all clips
- **`@element` tagging**: tag product images as named elements in Higgsfield → Claude references them by name in prompts → product auto-populates without manual re-upload per clip
- **Estimated runtime in prompt**: train Claude to output recommended clip duration per chunk → eliminates guesswork when setting Seedance clip length
- **720p over 1080p rule**: always generate at 720p for UGC ads — half the credits, still sufficient for social media distribution
- **90% speed fix**: when a Seedance clip pacing sounds too fast, slowing to 90% in CapCut fixes it without regeneration, saving credits
- **B-roll mask**: cover glitchy AI segments with real or stock B-roll rather than regenerating — faster and cheaper

## Limitations / Gotchas
- **Voice drift between clips**: Seedance doesn't guarantee the same voice across separately generated clips; requires manual voice selection via "Change Voice" in Higgsfield to restore consistency
- **Product tag leakage**: if Claude says "no bottle" but `@bottle` is pasted into the Higgsfield prompt, the product still generates — must manually remove the tag
- **Credit burn on 1080p**: 1080p is 2× credits vs. 720p — easy mistake that drains subscription fast
- **Pro plan limit of 4 simultaneous generations**: can't batch all 5+ clips at once; must wait for one to finish before submitting the last
- **Script PDF is creator's paid product**: the 32-page framework is the key ingredient; video makes it sound free (like/subscribe), but it's behind a School community
- **Regeneration is expected**: plan for 1–3 clips to need regeneration per ad — factor this into credit budget
- **Still requires manual copy-paste**: unlike fully automated tools (some built into Higgsfield), this is a per-clip manual workflow — more control, more tedium
