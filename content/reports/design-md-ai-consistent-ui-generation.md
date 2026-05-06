---
title: "My Secret to Stunning Apps (Google Design.md + AI Skills)"
channel: Greg Isenberg (Startup Ideas Podcast)
url: https://www.youtube.com/watch?v=oLu32YpiIJw
date: 2026-05-06
tags: [design-system, design-md, vibe-coding, ui-generation, agent-skills, consistency]
tools: [Claude Code, Codex, Lovable, Variant, Google Stitch, Framer, Figma]
use_cases: [consistent-ui-generation, design-system-serialization, landing-page-generation, multi-medium-design]
complexity: intermediate
workflow_type: manual-assisted
---

## What This Video Demonstrates

Designer Mang introduces `design.md` — Google's open-source format for serializing a complete design system (colors, typography, spacing, component rules, animation style) into a markdown file. This file is passed as context to AI agents (Claude Code, Codex, Lovable, etc.) to eliminate "design drift" and produce consistent, non-generic UI across web, mobile, slides, promo videos, and motion design — all from a single source of truth.

## Workflow Steps

### Part 1 — Find or Build a design.md File
1. Visit communities that share design.md files (e.g. Mang's own library, Variant.com community)
2. Browse designs → click "remix" rapidly until you find an aesthetic that resonates
3. Download the design.md file for that design — it contains: colors, typography, spacing, component rules, animation style
4. Alternatively: build your own by having an AI analyze a screenshot of a site you love → extract system → write to design.md
5. Combine skills: load design.md + a separate "laser effects" skill, or "glassmorphism" skill, etc. to compose your aesthetic

### Part 2 — Load design.md Into Your Agent
1. Open Claude Code, Codex, or any agent that supports file context
2. Attach design.md to your prompt: "Use this design system for all output"
3. Agent reads the file and commits the design system to session memory
4. Prompt: "Build a landing page for [product] using this design system"
5. Agent produces HTML/React/code that adheres to the colors, typography, spacing from design.md
6. Every subsequent prompt in the session inherits the same design system — no drift

### Part 3 — Multi-Medium Propagation from One design.md
1. Start with a single approved design (landing page, hero section, app screen)
2. Use the same design.md to generate: promo video (via Hyperframes or similar) → slide deck → mobile screens → email templates
3. All outputs share the same visual DNA — recognized as the same brand across mediums
4. When you move agents (Lovable → Cursor → Codex), carry the design.md file with you — the aesthetic transfers

### Part 4 — Skill Composition for Differentiation
1. design.md handles the foundation: colors, type, spacing
2. Add specialty skills on top for moat:
   - "laser effects" skill: adds light-ray animations to hero sections
   - "glassmorphism" skill: frosted glass card style
   - "liquid glass" skill: Apple-influenced soft card animations
3. Combine: design.md + one specialty skill = differentiated aesthetic that stands out from generic vibe-coded output
4. Skills are reusable across projects — build a library over time

### Part 5 — Using Variant.com for Rapid Aesthetic Discovery
1. Go to Variant.com community section
2. Click "remix" on designs one by one until something clicks
3. Each remix produces a variant you can inspect and extract as design.md
4. Once found: download, use as-is or mix elements from multiple remixes
5. Much faster than designing from scratch; gives AI-friendly starting point

## Tools Used

| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Claude Code | Primary agent for code generation from design.md context | Claude Max/Pro |
| Codex | Alternative agent (Mang's preference); accepts design.md as context | OpenAI (paid) |
| Lovable | Vibe-coding UI builder; can accept design.md for consistent output | Freemium |
| Variant.com | Community for discovering and remixing design.md files | Free |
| Google Stitch | Google's AI UI generation tool; works with design.md format | Google (beta) |
| Framer | Web design tool; design systems can be exported as design.md | Freemium |
| Figma | Design source for exporting typography, colors into design.md | Freemium |

## Claude Code Integration Points

- **design.md as CLAUDE.md for design**: the same principle behind CLAUDE.md (persistent instructions for Claude) applies to design — a design.md file in your project root gives Claude persistent visual constraints for every prompt in a session
- **Skill composition**: design.md is the "base system" skill; specialty skills (lasers, glass, animations) are additive ingredients — Claude reads all attached files and composes them into generation constraints
- **Cross-agent portability**: design.md travels with you between Claude Code, Codex, Lovable, and Google Stitch — the agent doesn't matter, the context file does
- **Screenshot → design.md extraction**: give Claude a screenshot of a design you love + prompt "Extract this as a design.md file with all colors, typography, spacing, and component rules" → instant design.md from any visual reference
- **Anti-drift pattern**: always attach design.md at session start before any UI generation prompt; Claude treats it as a hard constraint, preventing style regression across a long session

## Key Insight

**design.md is CLAUDE.md for aesthetics** — the same pattern that makes CLAUDE.md work (persistent markdown instructions that constrain agent behavior) applies directly to design. Serialize your design system into a markdown file once, attach it to every session, and every AI-generated UI output — across all agents and all mediums — stays on-brand. The moat comes from composing design.md with specialty skill files (effects, animations, typography choices) that are hard to replicate from a prompt alone.

## Reusable Primitives

- **design.md as portable design memory**: one markdown file encodes your brand's complete visual system; attach to any agent, any tool, any session — design transfers without re-prompting
- **Screenshot → design.md extraction**: paste a screenshot of any site/app you love into Claude or Codex → prompt "extract this as design.md" → instant template from any visual reference
- **Skill-as-moat pattern**: build a library of specialty design skills (effects, animations, style variants) that sit on top of design.md; these compound into a differentiated aesthetic that generics can't replicate in one prompt
- **Rapid remix workflow**: use Variant.com or similar community tools to click-remix until aesthetics click → download design.md → import into agent; faster than designing from scratch
- **Multi-medium from one file**: generate landing page → promo video → slides → mobile from the same design.md; all outputs share visual DNA — recognized as the same brand
- **Anti-drift session setup**: always attach design.md before any UI generation prompt in a long session; prevents the common problem where later screens drift away from earlier design quality

## Limitations / Gotchas

- **design.md communities are still nascent**: unlike templates (Figma community, Framer templates), the design.md ecosystem is new — fewer ready-made files available; often need to build your own
- **Agent still needs taste prompting**: design.md prevents drift but doesn't inject creativity; you still need to prompt for the "moat" elements (what makes it special, not just consistent)
- **Specialty skills require iteration**: the "laser skill" and similar effects need tuning per project — they don't auto-adapt to every brand context
- **Figma/Framer export to design.md is manual**: no one-click export yet; extracting an existing design system into design.md format requires manual work or AI-assisted extraction
- **"Commit to memory" is session-scoped**: telling an agent to "remember this design system" only works for the current session; design.md file attachment is the reliable cross-session approach
- **51-minute runtime**: this is a podcast with long tangents; the core design.md workflow is covered in roughly the first 25 minutes; remainder is broader design philosophy discussion
