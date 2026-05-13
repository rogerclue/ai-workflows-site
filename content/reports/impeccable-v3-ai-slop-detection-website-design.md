---
title: "Impeccable v3: Auto-Detect and Fix AI Slop in Your Website Designs"
channel: Jay (RoboNuggets)
url: https://www.youtube.com/watch?v=hicdJVLnp-Q
date: 2026-05-12
tags: [impeccable-style, vibe-coding, ui-design, claude-code, design-skills]
tools: [Impeccable Style, Claude Code]
use_cases: [ai-slop-detection, website-redesign, design-improvement]
complexity: intermediate
workflow_type: vibe-coding
---

## What This Video Demonstrates

Deep dive into Impeccable Style v3 — 37 AI slop patterns it detects, a Chrome extension for scanning live sites, and the full workflow: give Claude Code the repo URL → ask which commands apply → request 3 design variations → pick one → use the custom "tweak" skill to fine-tune with sliders → bake the patch back to Claude Code.

## Workflow Steps

1. Install the Impeccable Chrome extension and scan an existing live site to identify AI slop patterns
2. Give Claude Code the impeccable.style repository URL as context
3. Ask Claude: "Which Impeccable commands apply to the current design problems?" — delegate command selection rather than memorizing all 23 commands
4. Request 3 lightweight design variations with the same color palette but different layouts/treatments
5. Review all 3 variations in the browser and select the preferred one
6. Invoke the "tweak" skill to open a slider panel with controls for: font size, density, saturation, glow intensity, kerning, and roundness
7. Adjust sliders to taste until the design feels right
8. Click "bake" → copy the generated patch prompt → send to Claude Code to apply the changes

## Tools Used

| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Impeccable Style | Claude skill with 23 commands targeting 37 AI slop patterns; Chrome extension for scanning | Free (GitHub) |
| Claude Code | Applies Impeccable commands, generates design variations, applies baked patches | Paid (Claude Max) |

## Claude Code Integration Points

The entire workflow runs inside Claude Code. Impeccable skill commands are slash commands within Claude Code. The "tweak" skill generates an interactive HTML panel rendered in the browser; the "bake" output is a Claude Code prompt that applies changes to the codebase.

## Key Insight

**Don't memorize Impeccable's 23 commands — give Claude Code the repo URL and ask it to select which commands apply**, then request multiple variations before committing to one.

## Reusable Primitives

- Chrome extension → slop scan → fix pipeline (scan live site, identify patterns, fix in code)
- "Which commands apply?" delegation pattern (ask Claude to select tools, not the human)
- 3-variation design exploration before commitment (explore before executing)
- Tweak slider → bake patch workflow (interactive fine-tuning → code change)
- Color palette preservation constraint (same palette, different layouts — safe exploration)
- 37 AI slop pattern catalog (purple gradients, single Inter font, tab accent borders, monotone weights, overused glow, generic hero sections)

## Limitations / Gotchas

- Chrome extension only flags patterns — it does not fix them automatically
- 23 commands are overwhelming to memorize; the delegation pattern ("which apply?") is essential
- Design variations still require human judgment to evaluate and select
- The "bake" step generates a prompt patch that Claude must apply correctly — complex changes may need review
- Impeccable requires skill installation; not available out of the box
- v3 patterns are opinionated; some "slop" flags may be intentional design choices
