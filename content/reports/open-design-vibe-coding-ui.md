---
title: "Open Design Is Every Vibe Coder's Dream"
channel: Sean Kochel
url: https://www.youtube.com/watch?v=MmTBkDmunk4
date: 2026-05-04
tags: [vibe-coding, ui-design, landing-page, mobile-app, design-system]
tools: [Open Design, Claude Code, Codex, Cursor, GPT-image-2, OpenAI]
use_cases: [landing-page-design, mobile-app-mockup, web-app-design, design-system-generation]
complexity: beginner
workflow_type: manual-assisted
---

## What This Video Demonstrates
Open Design is a free, open-source Claw Design clone (22k+ GitHub stars) that runs locally, supports any LLM backend (Claude Code, Codex, Cursor, Gemini), ships with 71 built-in design systems, and outputs actual HTML files. It solves the two core vibe-coding UI problems: (1) AI slop aesthetics and (2) non-converting page structure — by using design system templates and skills-based prompting.

## Workflow Steps

### Landing Page Workflow
1. Select design system (e.g., Anthropic, Brutalist, Editorial) from 71 built-ins
2. Paste executive summary from your PRD as context
3. Define page structure (11 sections: hero, problem, how it works, benefits, CTA, etc.)
4. Open Design asks clarifying questions via generative UI
5. Claude Code (or chosen CLI) builds the page behind the scenes
6. Output: HTML file with complete landing page, conversion-optimized structure

### Mobile App Mockup Workflow
1. Select design system
2. Use a pre-built skill that takes features → brainstorms UX paradigms → generates screen prompts
3. Paste prompts screen-by-screen into Open Design
4. Output: iOS-style mockup HTML files per screen (home feed, gap-fill, ad-hoc log)

### Mobile → Desktop Translation
1. Screenshot mobile mockups
2. Drag screenshots into new Open Design chat
3. "Mock up a web app version of this core functionality"
4. Output: Desktop 3-pane layout translation with navigation + canvas + sidebar

## Tools Used
| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Open Design | UI/design interface + skill runner | Free/open-source |
| Claude Code / Codex / Cursor | LLM backend (bring your own) | Varies |
| GPT-image-2 | Auto image generation during design if API key provided | OpenAI paid |
| 71 design systems | Pre-built style templates (Anthropic, Vercel, Stripe, etc.) | Included |
| Custom skills | UX → screen prompt generator, SaaS landing page structure | DIY |

## Claude Code Integration Points
- Open Design uses Claude Code as its CLI backend — this is a natural extension of existing Claude Code setup
- Skills in Open Design are the same pattern as Claude Code skills — custom skills from your library plug directly in
- The "SaaS landing page" skill is a reference implementation for how to structure conversion-optimized prompts
- HTML output files can be directly fed into Claude Code for conversion to React/Next.js components
- The PRD-driven approach (paste executive summary → get structured page) maps to Claude Code's spec-driven development

## Key Insight
**Design system selection at the start eliminates AI slop** — the #1 reason vibe-coded UIs look bad is lack of visual constraint. Forcing a named design system (Anthropic, Stripe, Vercel aesthetic) before generating solves this. The second key: **structure the page for conversion first** (11-section framework), then let AI fill in the content within that structure.

## Reusable Primitives
- **PRD executive summary → landing page** in ~5 minutes: copy the problem/solution/features section of any PRD, paste into a structured prompt, get a full conversion page
- **Design system as constraint = quality control**: always select a named design system before any UI generation task
- **Screen-by-screen mobile mockup from features list**: use the UX brainstorm → screen prompt → Open Design pipeline for rapid mobile prototyping
- **Mobile screenshot → desktop translation**: multimodal input (image of mobile UI) → generated desktop equivalent in one prompt
- **Skills for conversion structure**: encode your landing page framework (AIDA, problem-agitate-solve, etc.) as a skill for consistent output

## Limitations / Gotchas
- Design system previews don't render correctly in the UI (minor visual bug)
- "Bring your own key" means you still need a Claude/OpenAI subscription
- Output is HTML — needs manual conversion to React/Vue/etc. for real projects
- Without a spec (PRD), vague prompts produce vague results — garbage in, garbage out
- The UX brainstorm skill that generates screen prompts is not included — creator sells it separately
- Multimodal screenshot input works but fidelity gap between mobile screens and desktop output requires iteration
