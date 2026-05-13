# AI Workflows — Reusable Workflow Patterns

Extracted cross-report primitives. Each pattern is tool-agnostic where possible, with concrete implementations noted.

---

## 1. Brand Identity → Assets → Website (One Session)

**What it does**: Takes a product category + positioning → generates full brand identity, design system, marketing assets, and deploys to website.

**Steps**:
1. Brand inputs (product category, competitors, persona) → AI brand research + positioning
2. Brand positioning → design system PDF (colors, typography, voice, materials)
3. Design system + product inputs → product images, brand avatar, UGC videos
4. Brand assets → inject into website codebase → automated rebrand

**Tools**: Claude Code + Higgsfield MCP (Brand Launch Pack + GTM Pack skills)
**Report**: [Claude + Higgsfield MCP](reports/claude-higgsfield-mcp-marketing.md)
**Time**: ~15–30 minutes end-to-end
**Cost**: Claude Code subscription + Higgsfield subscription

---

## 2. URL → Full Social Media Kit

**What it does**: Provide a website URL and get a complete 14-asset social media kit dropped to desktop — no brand assets required upfront.

**Steps**:
1. `/gtm` in Claude Code → provide URL
2. Claude Code reads site, extracts brand signals
3. Higgsfield MCP generates: Instagram carousels, hero images, 1:1 squares, videos in multiple resolutions, UGC videos
4. Full media kit delivered to desktop folder

**Tools**: Claude Code + Higgsfield MCP (GTM Pack skill)
**Report**: [Claude + Higgsfield MCP](reports/claude-higgsfield-mcp-marketing.md)
**Time**: 2–5 minutes
**Cost**: Claude Code + Higgsfield

---

## 3. Scheduled Founder Intelligence Brief

**What it does**: Automatically aggregates email, calendar, Slack each morning into a prioritized task list with reply-ready email suggestions.

**Steps**:
1. Claude Routine triggers at 6:30am daily
2. Connects: Gmail + Google Calendar + Notion + Slack
3. Synthesizes top priorities + emails needing replies
4. Posts formatted brief to Slack #brief channel

**Tools**: Claude Routines (or Hermes Agent on cron)
**Reports**: [Claude Routines](reports/claude-routines-scheduled-agents.md), [Hermes Agent — 7 Use Cases](reports/hermes-agent-7-use-cases.md)
**Cadence**: Daily
**Limit**: Counts against Claude Max 15-slot daily budget

---

## 4. Analytics → Agent → Ad Platform Loop

**What it does**: Real business analytics data drives autonomous ad creation, budget adjustments, and multivariate testing — no human in the loop for routine optimization.

**Steps**:
1. PostHog (product analytics) feeds data to marketing agent
2. Agent analyzes performance, identifies winning/losing segments
3. Agent generates new ad creative variations
4. Agent adjusts budgets on Meta/Reddit Ads autonomously
5. Agent responds to natural language commands: "increase budget by $1k"

**Tools**: PostHog + Harbor marketing agent + Meta Ads API + Reddit Ads API
**Report**: [AI Agents Run My Business](reports/greg-isenberg-ai-agents-run-business.md)
**Validation**: ~$20k/mo revenue at small scale; path to $100k/mo ad budget

---

## 5. Nightly Transcript → Vector Database → Natural Language Query

**What it does**: All meeting recordings automatically flow into a queryable knowledge base. Ask "what are the biggest issues across my portfolio?" and get an answer.

**Steps**:
1. Fireflies (or Fathom) records all meetings → API
2. Nightly cron pulls transcripts → converts to Markdown
3. Markdown saved to Gbrain (second brain)
4. Vectors trained in Pinecone on all business/portfolio data
5. Natural language query: "Review last quarter, give me icebergs or issues"

**Tools**: Fireflies + Pinecone + Gbrain + Claude
**Report**: [AI Agents Run My Business](reports/greg-isenberg-ai-agents-run-business.md)
**Caveat**: Vector accuracy issues (wrong person as CEO, numbers slightly off); 1M token context ≈ "remembers a day"

---

## 6. Meeting Transcript → Structured Digest

**What it does**: All calls from the week automatically get summarized and organized in Notion for review.

**Steps**:
1. Fathom records all calls → transcript API
2. Claude Routine (weekly) pulls all transcripts
3. Generates summaries + action items per call
4. Saves structured digest to Notion in reviewable format

**Tools**: Fathom + Claude Routines + Notion
**Report**: [Claude Routines](reports/claude-routines-scheduled-agents.md)
**Cadence**: Weekly

---

## 7. Self-Interview for Content Ideas

**What it does**: Generates a steady stream of personal brand content ideas by interviewing you based on your actual work context.

**Steps**:
1. Claude Routine triggers weekly
2. Reads Google Calendar + Fathom call transcripts + Gmail for work context
3. Claude generates relevant interview questions based on what you actually did
4. Answers the questions itself using your work context
5. Saves Q&A to GitHub personal brand repo as content idea library

**Tools**: Claude Routines + Google Calendar + Fathom + Gmail + GitHub
**Report**: [Claude Routines](reports/claude-routines-scheduled-agents.md)
**Cadence**: Weekly; zero-friction content pipeline

---

## 8. Design System Selection → Polished UI Generation

**What it does**: Eliminates "AI slop" in UI generation by constraining output to a named design system before generating anything.

**Steps**:
1. Select design system (Anthropic, Stripe, Vercel, Brutalist, etc.) from 71 built-ins
2. Paste PRD executive summary as context
3. Define page structure (11-section framework: hero, problem, how-it-works, benefits, CTA, etc.)
4. AI generates within those constraints
5. Output: Conversion-optimized HTML landing page

**Tools**: Open Design (free) + Claude Code / Codex / Cursor as backend
**Report**: [Open Design](reports/open-design-vibe-coding-ui.md)
**Key insight**: The design system selection is the quality-control lever — never generate UI without it

---

## 9. Image → Working Code (UI-First Development)

**What it does**: Generate a UI mockup first, then use it as the spec for implementation — higher fidelity than text descriptions alone.

**Steps**:
1. Describe game/app concept in text
2. GPT-image-2 (or any image gen) creates visual mockup
3. "Turn that image into a working [game/app]"
4. Agent builds complete HTML/JS/React from image reference

**Tools**: GPT-image-2 + Codex (or Claude Code)
**Report**: [Codex](reports/codex-best-software-ever.md)
**Time**: 23 min autonomous for browser game; fidelity gap exists but output is functional

---

## 10. Natural Language → Edited Video

**What it does**: Raw video recording → trimmed, subtitled, motion-graphics video without touching a timeline editor.

**Steps**:
1. Drop raw MP4/MOV into Claude project with Hyperframes
2. Describe edits: "trim filler words, add motion graphics, add subtitles"
3. Hyperframes processes via Remotion under the hood
4. Output: Edited video + timeline for fine-tuning
5. Optional: Adjust motion graphic timing manually

**Tools**: Claude Code + Hyperframes (paid SaaS) + Remotion + ffmpeg
**Report**: [Claude Video Editing](reports/claude-video-editing-hyperframes.md)
**Limitation**: Template-based motion graphics; best for short-form content

---

## 11. Parallel Task Queue (Don't Wait, Delegate)

**What it does**: Run multiple long-horizon autonomous tasks simultaneously instead of waiting for each to complete before starting the next.

**Steps**:
1. Identify 3–5 independent tasks
2. Kick off all simultaneously in Codex (or Claude Code multi-agent)
3. Do other work while agents run
4. Check results when all are complete

**Tools**: Codex (time-based model makes this economical) or Claude Code with parallel agents
**Report**: [Codex](reports/codex-best-software-ever.md)
**Key insight**: Time-based pricing (Codex) vs token-based (Claude Code) — parallel tasks are dramatically cheaper on time-based models

---

## 12. Three-Agent Business Stack (Minimum Viable Agent Org)

**What it does**: Replace an ops team for a solo-founder SaaS with three specialized agents covering support, development, and marketing.

**Agents**:
- **Support agent**: Customer email → ticket resolution or escalation → response
- **Dev agent**: Escalations → bug fix → PR → auto-merge P0 issues
- **Marketing agent**: Analytics data → ad optimization → creative generation

**Tools**: Harbor (agent harness) + Claude/OpenAI + PostHog + Meta Ads + Reddit Ads
**Report**: [AI Agents Run My Business](reports/greg-isenberg-ai-agents-run-business.md)
**Validation**: Solo founder, ~$20k/mo revenue, no ops team

---

## 13. Self-Maintaining Agent Skill Library (Curator Pattern)

**What it does**: Prevent skill library entropy — automatically prune dead skills, consolidate overlapping ones, and surface usage rankings weekly.

**Steps**:
1. Curator runs on 7-day cron cycle
2. Reviews entire skill library, grades by usage and performance
3. Consolidates overlapping skills
4. Prunes dead/inactive skills
5. Archives with full audit trail (JSON + human-readable MD report)
6. Protected/pinned skills never touched

**Tools**: Hermes Agent v0.12 (autonomous curator feature)
**Report**: [Hermes Agent v0.12](reports/hermes-agent-v012-self-maintaining.md)
**Applicable to**: Any accumulating knowledge base — skill libraries, report folders, tool configs

---

## 14. Skill Auto-Generation from Task Execution

**What it does**: Every novel complex task automatically becomes a reusable skill — agent gets faster at your specific workflows over time without manual skill authoring.

**How it works**:
1. Complete a complex task
2. Agent's self-improvement loop runs in background after each turn
3. Loop grades session against rubric
4. Applies "active update bias" — updates the skill that was actually used
5. Over weeks: skill library perfectly calibrated to your actual workflow patterns

**Tools**: Hermes Agent (self-improvement loop, any version)
**Report**: [Hermes Agent — 7 Use Cases](reports/hermes-agent-7-use-cases.md), [Hermes Agent v0.12](reports/hermes-agent-v012-self-maintaining.md)
**Claude Code equivalent**: After completing novel workflows, prompt Claude to write a skill file for reuse

---

## 15. Competitive Research → Creative Strategy → Batch Ad Generation

**What it does**: Starting from a single product image, autonomously researches competitor ads + industry trends, builds a strategic N×M creative matrix, and generates all ads via image generation MCP — no manual prompting per image.

**Steps**:
1. Provide product image + minimal brand context to Claude Code
2. Playwright MCP scrapes Meta Ads Library for brand's active ads (competitive intel)
3. WebSearch pulls current-year platform trend reports (CTR benchmarks, format data)
4. Claude synthesizes a Creative Brief (5 performance findings, category-specific insights)
5. Claude proposes N creative angles × M concepts = N×M unique ads
6. Each concept generates 2 aspect ratio variants (1:1 feed + 9:16 stories/reels)
7. **Approval Gate**: Claude presents full matrix, asks 3 yes/no questions, waits for "approved"
8. After approval, Claude batch-submits all jobs to Higgsfield MCP
9. Claude polls for completion, re-fires dropped jobs, downloads everything via curl
10. Output: Organized folder tree by angle + concept + ratio, top-5 A/B test picks

**Tools**: Claude Code + Playwright MCP + WebSearch + Higgsfield MCP
**Report**: [Higgsfield MCP — Instagram Ad Campaign](reports/higgsfield-mcp-instagram-ad-campaign.md)
**Scale**: 50 ads in one session (~$8 in Higgsfield credits, ~839 credits, 103MB)
**Key insight**: The approval gate before generation prevents wasted credits on a matrix you'd revise anyway

---

## 16. Voice Agent Intake → AI Report → Upsell (AI Consulting Business Pattern)

**What it does**: Replaces human discovery calls with a 24/7 voice agent that conducts structured intake interviews, automatically generates a branded assessment report, and creates natural upsell opportunities worth $1k–$10k per client.

**Steps**:
1. Client calls a dedicated phone number (or you schedule a Zoom call for early-stage)
2. Voice agent (Retell AI) conducts 20–30 min structured interview: business overview, tools used, daily pain points, team size
3. Agent uses a master question bank tuned by industry; starts general, goes specific
4. Transcript automatically routed to report-generation agent (Claude)
5. Claude analyzes pain points, searches Futurepedia/AI directories for matching tools
6. Claude generates structured `.docx` report (executive summary, effort/impact matrix, tool recommendations, 4-day quick win plan, upsell seeds, ROI quantification)
7. Upload `.docx` to Gamma template → branded slide deck auto-generated
8. Deliver report within 48 hours; schedule 30-min follow-up call
9. Screen-share through report → pitch upsell from menu (process optimization, automation build, custom GPT, speed-to-lead agent, CRM setup)

**Tools**: Retell AI + Claude + Gamma + Zapier/Make.com (for automation upsells)
**Report**: [AI Audit for Boomer Businesses](reports/ai-audit-boomer-business-corey-ganim.md)
**Pricing**: $1,000 assessment → $1,500–$10,000 upsells per client
**Sweet spot**: 5–50 employee businesses; any industry with repetitive manual processes
**Key insight**: The $1,000 price point is strategic — cheap enough to be a no-brainer, expensive enough that clients take it seriously and are primed for upsells

---

## 17. Prompt → Quantitative Trading Dashboard (Regime-First Architecture)

**What it does**: Build institutional-grade trading analysis tools (regime detection, backtesting, portfolio risk, sentiment) from plain-English prompts in Claude Code — no prior coding required. Each tool is a standalone Streamlit app.

**Steps**:
1. Define what you want to measure (regime, backtest layer, risk, sentiment, correlation)
2. Write a structured prompt specifying: algorithm choice, data source, features, UI layout, output metrics
3. Paste prompt into Claude Code (VS Code extension) → Claude builds complete Streamlit app
4. Run locally; iterate with follow-up prompts to fix or extend
5. Stack multiple tools into a validation pipeline:
   - Layer 1: Traditional backtest (walk-forward, out-of-sample)
   - Layer 2: Monte Carlo simulation (1,000 randomized variations)
   - Layer 3: Sensitivity analysis (parameter stability heatmap)
   - Layer 4: Multi-asset regime comparison (SPY, BTC, Gold, Bonds)
6. Only deploy live after 1+ month of paper trading validation

**Tools**: Claude Code + Streamlit + Yahoo Finance + Plotly + Alpaca/IBKR
**Report**: [Claude Code for Quant Trading](reports/claude-code-trading-quant-systems.md)
**Key insight**: "Knowing what to ask" (algorithm choice, bias avoidance, regime logic) is more valuable than coding skill — Claude handles implementation, you supply trading domain knowledge

---

## 18. SERP Gap Research → No-Code Utility Site → Google Ads Monetization

**What it does**: Find an underserved search query where Google is already ranking new sites, build a working utility tool in under an hour using an AI no-code builder, publish it, and monetize with Google Display Ads (RPM model).

**Steps**:
1. Pick a seed category (calculator, generator, converter, checker)
2. Enter seed keyword into Clearer → filter max difficulty ≤ 10 → sort by difficulty
3. Identify queries that could be answered by a web app
4. Use Clearer's SERP analysis → flag queries where new/low-trust sites rank on page 1 (blue highlight = opportunity)
5. Open Hostinger Horizons → describe tool in plain English → get working app in minutes
6. Iterate with natural-language fixes: "move the button", "add this feature", "change colors"
7. Connect custom `.com` domain matching the tool's function
8. Sign up for Google AdSense → copy code → paste into Horizons chat → publish
9. Add legal pages, explanatory content, 3–5 related tools (required for AdSense approval)
10. Scale: repeat for multiple tools/sites; each adds independent traffic and ad revenue

**Tools**: Clearer + Hostinger Horizons + Google AdSense
**Report**: [Utility Site Passive Income](reports/utility-site-passive-income-hostinger.md)
**Revenue model**: RPM × page views (target $3–12 per 1,000 views); portfolio of 5–10 tools compounds
**Key insight**: The SERP gap signal (new sites already ranking) is more reliable than keyword difficulty alone — it proves Google is actively looking for better answers to that query

---

## 19. Product Image → Storyboard → Cinematic Video (4-Step Ad Agent)

**What it does**: Takes a single product image and autonomously produces a full cinematic advertisement — product analysis → storyboard options → GPT-image-2 storyboard image → C-dance 2.0 final video.

**Steps**:
1. Drop product image + brief context (use case, attributes, end-tag text) into Claude Code
2. Agent extracts brand name, product name, category automatically
3. Agent generates 3 distinct storyboard directions (concept name, vibe, hero moment, visual keywords)
4. **Human approval gate**: select preferred direction before any generation costs are incurred
5. Agent builds detailed GPT-image-2 prompt: 6 panels, layout, text placement, scene descriptions with timestamps; blurs any faces to bypass C-dance content policy
6. Agent calls GPT-image-2 via fal.ai → 6-panel storyboard image with correct text, timestamps, camera directions
7. Optional second gate: review storyboard before video generation
8. Agent summarizes pre-generation params (model, resolution, duration, aspect ratio)
9. Agent submits storyboard + product photo to C-dance 2.0 via fal.ai → 15-second cinematic video
10. Output: final video ready for use

**Tools**: Claude Code + fal.ai (GPT-image-2 + C-dance 2.0)
**Report**: [Claude Cinematic Ads Agent (fal.ai)](reports/claude-cinematic-ads-agent-fal.md)
**Key insight**: GPT-image-2's near-perfect text rendering produces storyboards detailed enough that C-dance interprets them directly as shot instructions — the two models complement each other
**Access pattern**: fal.ai "Copy content for LLMs" → paste into agent → agent gains full API access autonomously

---

## 20. Character Reference Sheet → Storyboard → Long-Form Video (Higgsfield Pipeline)

**What it does**: Generates consistent-character long-form videos by building explicit start/end frames for each scene, then stitching clips — mirrors professional director workflow.

**Steps**:
1. Photo → Claude + GPT-image-2 → multi-angle character reference sheet
2. Create video brief with full concept
3. Generate image prompts for each scene's start and end frames
4. Generate start/end frames using GPT-image-2 (highest realism) or Nano Banana Pro
5. Submit each clip: start frame + end frame + structured C-dance prompt → Higgsfield MCP
6. Claude stitches all clips via ffmpeg → final multi-scene video
7. Optional: Claude Routines (remote) autopilot → hourly generation → large A/B variation library

**Tools**: Claude Code + Higgsfield MCP + GPT-image-2 + C-dance 2.0 + Claude Routines
**Report**: [Claude + Higgsfield Content Creation](reports/claude-higgsfield-content-creation-storyboard.md)
**Key insight**: Start/end frame control (not just a text prompt) is the quality lever — explicit first and last frames give granular control over every scene transition
**Autopilot**: Claude Routines (remote) runs without local machine; brute-forces Higgsfield subscription value

---

## 21. Niche App Research → Mobile App Build → Phone Testing

**What it does**: Full pipeline from niche market research to a testable iOS app — no coding experience required.

**Steps**:
1. Sensor Tower → search simple identifier apps → find single-feature concepts making $40K–$500K/mo
2. Paste competitor App Store URL into Claude chat → ask for detailed Claude Code build prompt
3. Open Claude Code → paste generated prompt → Claude builds React Native + Expo project
4. Preview at localhost → iterate: drag Dribbble design screenshot as context → "apply this design"
5. API integration: ask Claude to create `.env` file → paste key → Claude wires camera to API
6. Expo Go: ask Claude to generate QR code → scan with iPhone → test on real device
7. Describe any errors to Claude → Claude diagnoses and fixes

**Tools**: Claude Code + React Native + Expo + Expo Go + Anthropic API + Dribbble + Sensor Tower
**Report**: [Vibe Coded $400K/mo App](reports/vibe-coded-400k-app-claude-code.md)
**Key insight**: Use Claude chat to write your Claude Code prompt — pasting a competitor app link produces far more specific build instructions than anything you'd write yourself
**Model tiering**: Sonnet for most tasks → Opus only for complex unsolvable errors → Haiku for research

---

## 22. Programmatic Motion Graphics via Remotion (Claude Code Skill)

**What it does**: Generate LUTs, animated overlays, motion backgrounds, and counting-number animations programmatically using Claude Code's built-in Remotion skill — free tier available.

**Steps**:
1. Free tier: Ask Claude Code to generate a LUT file for color grading; export to CapCut
2. Paid (Remotion skill): Describe animation → Claude generates React/Remotion component
   - Animated pill overlays (text + icons, timed to beats)
   - Motion backgrounds (particle systems, geometric patterns)
   - Map animations (route tracing, location pins)
   - SRT counting numbers (animated number sequences synced to transcript)
3. End every complex prompt with: "Ask me any clarifying questions so we nail this spot on"
4. Preview renders in Claude Code canvas; export to MP4 or use as component

**Tools**: Claude Code + Remotion (built-in skill)
**Report**: [Claude + CapCut Animations (Remotion)](reports/claude-capcut-animations-remotion.md)
**Key insight**: The clarifying-questions prompt suffix dramatically improves first-attempt quality on complex animation requests

---

## 23. Three-Layer Agent Memory Architecture (Hot / Warm / Cold)

**What it does**: Makes any agent continuously smarter by implementing structured memory tiers — facts always in context, domain knowledge loaded on demand, full history searchable — with async background processes that extract and update each layer automatically.

**Architecture**:
- **Hot memory** (always in system prompt, ≤4K chars): `user.md` (persona, preferences, workflow habits) + `memory.md` (environment facts, conventions)
- **Warm memory** (on demand): skills — domain knowledge files loaded only when relevant; primary store for task knowledge
- **Cold memory** (searchable): SQLite DB of raw conversation history; retrieve past sessions by keyword or semantic search
- **Semantic layer** (optional): Mem Zero or Qdrant for natural language retrieval over historical conversations

**Async extraction triggers** (don't block main agent):
1. After every complex task → skill reviewer sub-agent reviews conversation → creates/patches skill if non-trivial approach used
2. Every 10 agent turns → memory reviewer spawns → checks for revealed user preferences/persona → updates `user.md` / `memory.md`
3. Hooks reinforce behavior: `UserPromptSubmit` hook appends memory reminder; `PostToolUse` (Bash) catches errors and appends learning prompt

**Implementation options**:
- **Hermes Agent**: native 4-tier implementation out of the box
- **Claude Code**: enable Auto Memory feature + use CLAUDE.md as index to warm memory files + add hooks
- **Open Claw / any agent**: add `.learnings/` folder (learnings.md, errors.md, feature-requests.md) + hooks

**Tools**: Claude Code / Hermes Agent / Open Claw + SQLite + Mem Zero / Qdrant (optional)
**Report**: [Self-Evolving Agents — Memory Architecture](reports/self-evolving-agents-memory-ai-jason.md)
**Key insight**: The async background skill/memory extractor (not the main agent, not the human) is what makes agents feel progressively smarter — it requires no manual capture and doesn't slow down the primary workflow

---

## 24. BIT Framework — Iterative Agent Taste Training

**What it does**: Systematically improves an agent's output quality toward your specific taste over multiple sessions — without manual prompt engineering. Applies to any creative workflow (video, writing, design, code style).

**Steps**:
1. **Build**: Complete a creative session with heavy iterative feedback to guide quality toward your standard
2. **Integrate**: After session, prompt: "Capture all learnings and update the [skill] based on my feedback and our best practices" — Claude reviews session → updates skill file
3. **Tune**: Next session, start with the updated skill; less guidance needed; continue feedback loop
4. Repeat: each cycle, the skill gets closer to your specific quality standard

**Shortcut — `/calibrate` skill pattern**: build a dedicated end-of-session skill that auto-runs the Integrate step; prompts Claude to output 6 bullet-point recommendations for skill updates → review → apply

**Tools**: Claude Code + any creative skill (Hyperframes helper, write-content, design.md, etc.)
**Report**: [Claude + Hyperframes V2](reports/hyperframes-v2-video-editing-bit-framework.md)
**Key insight**: The feedback loop is the moat — manual prompting gets you one good output; BIT gets you an agent that produces good outputs by default after N sessions

---

## 25. Interview-to-Skill Creation

**What it does**: Creates a personalized agent skill file by having Claude interview you — faster and more accurate than writing a skill from scratch, and produces a skill that genuinely reflects your preferences.

**Steps**:
1. Open Claude (Cowork or Code) and say: "I want to create a skill that [does X] in my voice/style"
2. Claude interviews you: asks about tone, style, audience, examples you like/dislike, constraints
3. Based on answers, Claude drafts a skill `.md` file
4. Review draft → approve or iterate → save as skill
5. Use "update the skill" pattern after each session to continuously improve it

**Applicable to**: write-content skills, coding style skills, design preferences, review criteria — any domain where "taste" matters

**Tools**: Claude Cowork / Claude Code
**Reports**: [Claude Cowork — Social Media Automation](reports/claude-cowork-social-media-blotato.md), [Content Team with Claude Code — 11 Skills](reports/claude-code-content-team-11-skills.md)
**Key insight**: The interview externalizes implicit preferences that you couldn't easily articulate in a prompt — Claude's questions surface what you actually want

---

## 26. Orchestrator + Sub-Skill Architecture (Content Team Pattern)

**What it does**: Replaces a content team with a system of specialized skills coordinated by one orchestrator — each skill handles one "team member" role, the orchestrator acts as project manager.

**Skill roles** (example from 11-skill content system):
- **Orchestrator**: receives request → decides which skills to invoke → sequences output
- **Audience profile**: holds ICP; used by all other skills
- **Writing style**: voice, tone, platform formatting rules
- **Talking point extractor**: given URL/topic → pulls key claims, stats, angles (via Perplexity)
- **Lookalike content**: analyzes post library → extracts winning patterns → shapes new ideas
- **Post enricher**: takes draft → adds hooks, data, examples, CTAs
- **Platform skills**: separate formatter per platform (Twitter thread, LinkedIn, Instagram)
- **Feedback skill**: pulls analytics → identifies top/bottom posts → proposes skill updates monthly

**Tools**: Claude Code + Blotato + Perplexity + Firecrawl + X API + OpenAI API
**Report**: [Content Team with Claude Code — 11 Skills](reports/claude-code-content-team-11-skills.md)
**Key insight**: The monthly feedback loop skill is the compounding mechanism — after 6 months, the system knows your audience better than most human teams

---

## 27. design.md — Portable Design System for AI Agents

**What it does**: Eliminates design drift across long sessions and across different AI tools by encoding a complete design system into a single markdown file that any agent can consume.

**Steps**:
1. Find a design.md: browse Variant.com → click remix until aesthetics click → download; OR extract from screenshot: paste image into Claude → "extract this as design.md with all colors, typography, spacing, component rules"
2. Save design.md to project root (or attach per session)
3. At session start: attach design.md to Claude Code / Codex / Lovable prompt
4. Agent commits design system to session memory — all outputs from that session inherit it
5. For differentiation: add specialty skill files on top (laser effects, glassmorphism, liquid glass)
6. Multi-medium: use same design.md to generate landing page → promo video → slides → mobile screens — all share visual DNA

**Anti-drift rule**: always attach design.md before any UI generation prompt in a long session

**Tools**: Claude Code / Codex / Lovable + Variant.com + Google Stitch
**Report**: [design.md — AI Consistent UI Generation](reports/design-md-ai-consistent-ui-generation.md)
**Key insight**: design.md is CLAUDE.md for aesthetics — the same pattern that makes CLAUDE.md work applies directly to visual consistency across sessions and tools

---

## Pattern 28: UGC Ad Planning Framework (Hook → Problem → Solution → CTA)

**What it does**: Structures any UGC ad into a proven 4-part formula that maximizes watch time and conversion by frontloading attention capture in the first 3 seconds.

**Steps**:
1. **Hook**: Make the right viewer feel called out within 3 seconds — bold, relatable, controversial, or unexpected; make them feel you're talking directly to them
2. **Problem**: Name the pain the viewer is experiencing; quantify the cost of not solving it
3. **Solution**: Show how the product solves it; make them care about the outcome, not just the features
4. **CTA**: Direct, specific action — visit URL, download app, try free

**Hook generation pattern**: give Claude your product URL + target audience → "generate 5 hook variations" → Claude asks clarifying questions → select best angle

**Tools**: Claude (any), custom UGC skill
**Reports**: [Higgsfield MCP Solo App Marketing Ads](reports/higgsfield-mcp-solo-app-marketing-ads.md), [Claude + Higgsfield UGC Skill](reports/claude-higgsfield-ugc-skill-marketing-studio.md)
**Key insight**: Frontload all creative effort into the hook — once a viewer stays past 3 seconds, they'll likely watch the rest

---

## Pattern 29: Claude Skill → Video Generation Platform (Prompt Builder Pattern)

**What it does**: A reusable Claude skill file encodes all platform-specific prompting knowledge (terminology, parameter syntax, timing structure, VFX language), so every generation starts from expert-level prompts without manual expertise.

**Steps**:
1. Build skill file encoding: scene timing structure, camera behavior vocabulary, lighting design, color hex codes, character description format, atmospheric effects terminology
2. User inputs simple description → Claude skill generates full platform-ready prompt
3. Check character limit (Seedance: 4000, Higgsfield: 3000) → if over: paste back to Claude → "make under [X] chars"
4. Copy prompt → paste into generation platform or submit via API

**Applicable to**: Seedance/SeaDance prompting, Higgsfield UGC Marketing Studio, Arcads, fal.ai Seedance API

**Tools**: Claude + custom skill file
**Reports**: [Seedance Prompting + Omni Reference](reports/seedance-prompting-omni-reference-genhq.md), [Claude Code + Seedance + fal.ai](reports/claude-code-seedance-fal-promotional-video.md), [Claude + Higgsfield UGC Skill](reports/claude-higgsfield-ugc-skill-marketing-studio.md), [Claude + Seedance 2.0 UGC Ads](reports/claude-seedance-ugc-ads-alex-robinson.md)
**Key insight**: The skill file IS the competitive advantage — encode expert-level platform knowledge once, use it forever

---

## Pattern 30: Omni Reference — Multi-Ingredient Video Generation

**What it does**: Instead of describing what you want in text, upload multiple "ingredient" images (character sheet + location + product/object) and let the video model synthesize them into a coherent scene that accurately represents all inputs.

**Steps**:
1. Prepare ingredients: character sheet (multi-angle photos of person/avatar), location image, optional product/text reference
2. Upload all ingredients to Higgsfield/SeaDance prompt bar
3. Write brief prompt describing the action/scenario
4. Model generates video incorporating all ingredients

**Use cases**:
- Character in specific location: character sheet + location image
- 3D text in scene: location image + 3D text reference image
- Product interaction: character sheet + product image
- Full story scene: character sheet + second character sheet + location

**Tools**: Higgsfield (SeaDance 2.0)
**Report**: [Seedance Prompting + Omni Reference](reports/seedance-prompting-omni-reference-genhq.md)
**Key insight**: Omni reference shifts the paradigm from "describe what you want" to "show what ingredients you have" — dramatically improves character accuracy and scene consistency

---

## Pattern 31: Voice Consistency Trick for Multi-Clip Video Production

**What it does**: Maintains consistent voice and character identity across multiple independently generated video clips by extracting audio from the first clip and uploading it as a voice reference for subsequent clips.

**Steps**:
1. Generate first video clip (15 seconds max in Seedance)
2. Extract audio from clip 1: `ffmpeg -i clip1.mp4 -vn -acodec mp3 voice_reference.mp3`
3. For clip 2+: upload voice_reference.mp3 as a reference element alongside the character sheet
4. Generate subsequent clips — voice stays consistent
5. Stitch all clips: `ffmpeg -f concat -i file_list.txt -c copy final_video.mp4`

**Tools**: Seedance 2.0, ffmpeg, Claude Code (to run ffmpeg)
**Reports**: [Seedance UGC Skill + GPT Image + CapCut](reports/seedance-ugc-skill-gpt-image-capcut.md), [Claude + Seedance/Arcads UGC Autopilot](reports/claude-seedance-ugc-autopilot-arcads.md)
**Key insight**: The voice reference trick is the missing piece for multi-clip productions — without it, each clip generates a different voice, making longer videos feel disjointed

---

## Pattern 32: Competitor Ad Clone Workflow

**What it does**: Analyzes the structure of a winning competitor ad (hook type, pacing, script formula, visual style) and rebuilds it with a fresh avatar and original dialogue — capturing proven effectiveness without copying.

**Steps**:
1. Identify winning ad on TikTok/Meta (high engagement, running for weeks = confirmed winner)
2. Download ad → analyze with Gemini or Claude: "analyze this ad's structure — hook type, problem framing, pacing, CTA approach"
3. Claude identifies what made it work (emotional register, problem specificity, visual style)
4. Generate fresh script using same structural formula but original copy and different product angle
5. Select different actor/avatar from library
6. Generate new video — proven structure, fresh execution

**Tools**: Gemini (video analysis), Claude (script rewrite), Arcads/Seedance (generation)
**Reports**: [Claude + Higgsfield UGC Skill](reports/claude-higgsfield-ugc-skill-marketing-studio.md), [Claude + Seedance/Arcads UGC Autopilot](reports/claude-seedance-ugc-autopilot-arcads.md)
**Key insight**: The structure (hook type, pacing, problem framing) is what makes an ad work — the specific copy and actor are interchangeable; clone the structure, not the content

---

## Pattern 33: 48-Hour Ad Performance Feedback Loop

**What it does**: Closes the loop between ad generation and optimization by feeding real performance data back into Claude every 48 hours, so the system learns what works and compounds that intelligence into every subsequent batch.

**Steps**:
1. Run generated ads (Meta/TikTok) for 48 hours
2. Paste performance data into Claude: CTR, CPM, ROAS, watch time by ad variant
3. Claude analyzes: which hooks performed? which actors? which problem framings?
4. Claude identifies winning patterns and failure modes
5. Claude writes next batch of scripts optimized for identified winners
6. Save learned patterns to CLAUDE.md permanently → agent carries forward intelligence
7. Repeat every 48 hours

**Tools**: Claude Cowork/Code, CLAUDE.md, Meta/TikTok Ads Manager (data source)
**Reports**: [Claude Cowork + Arcads Dropshipping UGC](reports/claude-cowork-arcads-dropshipping-ugc.md), [Claude + Arcads Autonomous Ad Engine](reports/claude-arcads-autonomous-ad-engine-pink.md)
**Key insight**: The 48-hour feedback loop turns an ad machine into a learning system — the same infrastructure that generates volume also generates intelligence when performance data flows back in

---

## Pattern 34: fal.ai LLM Docs → Instant Skill Update

**What it does**: Any fal.ai model page includes a "Copy content for LLMs" section specifically designed to be pasted into AI agents — giving Claude complete API syntax, parameter schemas, and best practices in one paste.

**Steps**:
1. Go to fal.ai model page (e.g., Seedance 2.0, Flux, SDXL)
2. Find "LLM content" or "Copy content for LLMs" section → copy
3. Paste into Claude Code conversation: "Update my skill file with this new model capability"
4. Claude reads the docs, understands parameter syntax, and updates skill file
5. Skill now generates valid API calls for that model without guessing

**Applicable to**: Any fal.ai hosted model; pattern also works for other providers that publish LLM-optimized docs

**Tools**: Claude Code, fal.ai API
**Report**: [Claude Code + Seedance + fal.ai Promotional Video](reports/claude-code-seedance-fal-promotional-video.md)
**Key insight**: fal.ai's "LLM content" section removes all integration friction — one paste gives Claude everything it needs to call any model correctly

---

## Pattern 35: Autonomous SEO Content Engine (Hermes + Hyperframes)

**What it does**: Fully autonomous content flywheel: keyword research → content strategy → article writing → video generation → publishing → daily scheduled execution, without human involvement in the execution loop.

**Steps**:
1. Set up Hermes with website context → run strategy swarm (12 parallel agents): competitor gap, content calendar, topical map, internal linking rules, featured snippet opportunities
2. Set persistent goal: "rank this site, publish one post every morning" → Hermes loops until complete (20-50 turns with AI quality judge)
3. Connect Hyperframes skill → one-prompt video generation: script → voiceover → animated slides → render
4. Connect HeyGen API → add AI avatar to videos
5. Set scheduled task: "one video + one article per day from content calendar"
6. Distribute: publish article → post video to YouTube + LinkedIn + Reddit + X = multiple rankings for same keyword
7. Self-improvement: Hermes analyzes own output each session → updates its skills → quality compounds

**Tools**: Hermes Agent + Hyperframes + HeyGen + Netlify/WordPress + Ahrefs
**Report**: [Hermes Agent SEO Content Engine](reports/hermes-agent-seo-content-engine.md)
**Key insight**: AI has leveled the content playing field — backlinks are now the critical differentiator; content engine without backlink building will plateau for competitive keywords

---

## Pattern 36: CLAUDE.md Agent Brain for Autonomous Ad Generation

**What it does**: Encodes all agent operating instructions into CLAUDE.md so every new session instantly restores full context — role, quality standards, API structure, and script format — without re-briefing.

**CLAUDE.md structure for ad agent**:
```
# Role
You are a [Product Name] advertising agent. You create bulk UGC-style video ads using the [Platform] API.

# Script Structure  
Hook (0-3s): [format]
Problem (3-8s): [format]
Solution (8-12s): [format]
CTA (12-15s): [format]

# Quality Checklist
- [ ] CTA always present
- [ ] Timing matches structure
- [ ] Character matches target demographic
- [ ] Product mentioned by name

# API Reference
Endpoint: [platform API endpoint]
Auth: from .env PLATFORM_AUTH_HEADER
Script format: [JSON structure]
```

**Tools**: Claude Code/Cowork, any UGC API (Arcads, Starop, etc.)
**Reports**: [Claude + Arcads Autonomous Ad Engine](reports/claude-arcads-autonomous-ad-engine-pink.md), [Claude Cowork + Arcads Dropshipping UGC](reports/claude-cowork-arcads-dropshipping-ugc.md)
**Key insight**: CLAUDE.md is the agent's permanent memory — encode the operating manual once, and every session inherits full expertise without re-briefing

---

## 37. Logo → Full Brand Kit via Higgsfield MCP (Multi-Model Comparison Pattern)

**What it does**: Takes a single logo and produces a complete brand kit in one Claude session — brand book (two models compared side-by-side), 6-panel logo animation storyboard, Seedance logo animation video, landing page mockup, and working localhost website.

**Steps**:
1. Attach logo image to Claude Code chat with Higgsfield MCP connected
2. Request brand book with two models: "Create brand book for this logo — use Nano Banana 2 for one and GPT Image 2 for the other so we can compare" → Higgsfield skill shows plan before generating (credit-gate)
3. Review both brand books → select preferred model for subsequent work
4. Request 6-panel storyboard: "Create a logo animation storyboard with GPT Image 2 — 6 panels showing how the logo evolves" → each panel gets a scene description
5. Feed storyboard to Seedance: "Send this storyboard to Seedance 2.0 via Higgsfield MCP, follow the storyboard instructions" → credit-gate fires → downgrade to 480p/4s if needed → generate animation
6. Request landing page mockup: "Using GPT Image 2, create a landing page mockup using our design system color palettes"
7. Fork conversation (VS Code extension) → "Translate that landing page mockup into a working landing page, open on localhost, make it interactive"
8. Output: brand book + logo animation + working website — all from one logo

**Credit-gate pattern**: the Higgsfield skill causes Claude to show resolution + duration + model specs before any expensive generation — always gives you a chance to downgrade

**Multi-model comparison pattern**: request the same asset from two models in one prompt → Claude generates both via Higgsfield → compare before committing to one for all subsequent work

**Tools**: Claude Code + Higgsfield MCP + Nano Banana 2 + GPT Image 2 + Seedance 2.0
**Report**: [Automate EVERY AI Model with Higgsfield + Claude](reports/higgsfield-mcp-claude-all-ai-models.md)
**Key insight**: **Staying in one Claude conversation from logo to working website** eliminates context loss — the brand colors, typography, and design decisions made in step 2 are still in context when building the website in step 7, so everything stays visually consistent without re-briefing

---

## Pattern 39: PDF Framework → Claude Project → Multi-Chunk Video Script

**What it does**: Turns any domain-expert document (script frameworks, hook libraries, brand guides) into Claude's operating "brain" for a session — upload once to a Claude Project, and Claude generates fully-formatted multi-chunk Seedance scripts that include runtime estimates, product tagging, and consistency direction blocks without any manual prompt engineering.

**Steps**:
1. Prepare two assets: a domain PDF (e.g., UGC script framework with hook library) + viral hook list
2. Create a Claude Project → upload the PDF as project knowledge
3. Per session: attach avatar image + product image + paste hook list → send one prompt: "Study this PDF and create one ad using the [framework type] format"
4. Claude outputs multi-chunk script where each chunk includes:
   - Voiceover text (naturally phrased, handles tricky word pronunciations)
   - Estimated runtime (seconds) for that clip
   - Universal Direction Block (stays the same across all clips — character lock, hair, UGC realism blocks)
   - Per-clip direction (framing, action, product `@tag` include/exclude flag)
5. Copy Universal Direction Block → paste as prompt prefix in every Higgsfield generation
6. Copy each chunk → replace voiceover section → adjust runtime → generate
7. Optional: turn PDF into a Claude Code skill (`/ugc-script`) for one-command generation in future sessions

**Key format detail**: Claude outputs `@[element-name]` product tags that auto-populate product images in Higgsfield when the element name matches — eliminates manual re-attachment per clip.

**Tools**: Claude (Project) + Higgsfield Seedance 2.0 + CapCut
**Report**: [Claude + Seedance 2.0 UGC Ads](reports/claude-seedance-ugc-ads-alex-robinson.md)
**Key insight**: The PDF upload makes Claude an expert in your specific script methodology — it doesn't just generate scripts, it generates scripts that already know your hook style, pacing constraints, and platform vocabulary, which is why the output sounds natural without post-editing

---

## Pattern 38: DevTools-First API Discovery → Python Wrapper

**What it does**: Reverse-engineers any web-based AI tool's generation API by inspecting live network requests, then wraps it in a Python API layer for unlimited programmatic access — bypassing UI limits.

**Steps**:
1. Open target website → trigger the generation action you want to automate
2. Open DevTools (F12) → Network tab → XHR/Fetch filter → reproduce the action
3. Identify the key request: endpoint URL, auth headers (Bearer token, cookies), request payload, response format
4. Use AI (Claude Code or Perplexity) to generate a Python wrapper: "Here is the request I observed. Write a Python function that replicates this call."
5. Iterate: paste response examples → ask AI to add error handling, retry logic, response parsing
6. Wrap in a lightweight web interface or script for repeated use

**Note**: This pattern carries ToS risk — most platforms prohibit automated access via undocumented APIs. The video itself is a teaser only; no specific platform or code is shown.

**Tools**: Browser DevTools + Python + Claude Code or Perplexity
**Report**: [Scrape Website → Personal Video API](reports/scrape-website-video-api.md)
**Key insight**: Any AI generation platform accessible via browser is accessible via Python — DevTools reveals the exact API calls the site makes, and an AI assistant can translate those into reusable code within minutes

---

## Pattern 40: Messy Feed → Mispriced Asset → Agent → Buyer (Weekend Business Formula)

**What it does**: Finds underserved arbitrage opportunities in public data feeds and builds a lightweight AI agent that alerts buyers faster than they can monitor manually — turning information asymmetry into a subscription or lead-gen business.

**Steps**:
1. Identify a "messy feed" — a stream of public data that is high-volume and hard to monitor manually (expiring domains, estate sale listings, job board postings, permit filings, FOIA releases)
2. Define the mispriced or overlooked asset within that feed (expiring domains with backlinks, liquidation inventory below market, roles posted without recruiter awareness)
3. Build trigger logic: daily scan → extract relevant items → filter by criteria → alert
4. Identify the buyer — who pays for speed or insight that this feed provides?
5. Choose a monetization model: subscription (recurring), per-lead (transaction), or commission (success-fee)
6. Use GenSpark Claw or Claude Code to build the agent without local infrastructure

**Tools**: GenSpark Claw (no-terminal cloud agent), Claude Code (local scraper/alerting logic)
**Report**: [7 Tiny AI Agent Business Ideas](reports/genspark-claw-7-ai-business-ideas.md)
**Key insight**: The arbitrage insight (which feed, which asset, which buyer) is more valuable than the technology — the agent is just a speed multiplier on a valid business model

---

## Pattern 41: AI Agency Sales System (Operational Waste Elimination)

**What it does**: Gives AI agency owners a repeatable sales process — positioning, discovery call framework, ROI calculation, and objection handling — that converts SMB prospects into $1,500–$4,000/month retainer clients.

**Steps**:
1. Position as "operational waste eliminator" — never lead with "AI" or "chatbots"
2. Research prospect's industry before the call; identify common time-drain patterns
3. Run discovery call: team size → biggest time drains → current tools → "what would you do with 10 extra hours/week?"
4. Quantify waste on the call: hours/week × hourly rate × 52 = annual cost of the problem
5. Map pain to one of 5 ROI pillars: lead gen, support deflection, data entry, scheduling, or reporting
6. Present proposal showing current cost / AI solution cost / annual ROI / payback period
7. Handle objections with prepared scripts; close on a pilot scope not the full vision

**ROI formula**: (hours saved/week × hourly rate × 52) − tool cost = annual ROI
**Tools**: GoHighLevel + n8n (delivery); Retell AI (voice agent deliverables)
**Report**: [AI Agency Sales System](reports/ai-agency-sales-system-discovery-call.md)
**Key insight**: Frame every proposal around the ROI math — once the numbers are on the table, the purchase decision becomes financially obvious rather than speculative

---

## Pattern 42: 6-Part Voice AI Prompt Structure

**What it does**: Produces reliable, consistent voice agent behavior by structuring prompts with six explicit sections — eliminating the need to enumerate edge cases by using example interactions as implicit rules.

**Structure**:
1. **Role/Objective**: 1–2 sentences — what the agent does and for whom
2. **Personality**: tone, pace, formality, energy — match to brand voice
3. **Context**: business info, hours, FAQs, pricing, key facts
4. **Instructions**: (a) communication guidelines — interruptions, silences, off-topic, escalation; (b) tool usage rules — when to transfer, message-take, book
5. **Numbered Stages**: 5–7 steps (greeting → qualify → handle → resolve → close → wrap-up)
6. **Example Interactions**: 2–3 sample dialogues demonstrating correct behavior for the most common caller types

**Tools**: Retell AI, GPT-4.1
**Report**: [Voice AI Prompt Structure](reports/voice-ai-prompt-structure-gpt41-playbook.md)
**Key insight**: Example interactions replace dozens of edge-case rules — the model generalizes from demonstrations rather than requiring every scenario to be explicitly scripted

---

## Pattern 43: 3-of-4 Rule for Voice Agent Splitting

**What it does**: Provides a clear, repeatable decision rule for when to split a monolithic voice agent into a multi-agent network — preventing both over-splitting (unnecessary complexity) and under-splitting (degraded performance).

**Steps**:
1. List all distinct "jobs" the agent performs (booking, tech support, billing, routing, FAQ, etc.)
2. For each pair of jobs, score four properties: goal, tone, toolset, knowledge scope
3. If 3 or more of the four differ → split into separate specialist agents
4. If 2 or fewer differ → keep in one agent
5. For router agents (3+ specialists): add an agent transfer function with explicit trigger condition: "Use [function] the moment [trigger]. Don't ask permission, just swap."
6. For deterministic routing (time-based, VIP caller, department): use conversational flow with logic split nodes — not LLM judgment
7. Set post-call analysis to "both agent and transferred agent" to capture full transcripts

**Tools**: Retell AI
**Report**: [Retell Multi-Agent Voice Systems](reports/retell-multi-agent-voice-systems-split-guide.md)
**Key insight**: A single-prompt agent degrades past ~7,000 tokens — the 3-of-4 rule gives an objective threshold for splitting before degradation occurs, not after it's noticed

---

## Pattern 44: CLI-First Agent Tool Philosophy

**What it does**: Replaces MCP servers with compiled CLI tools for repetitive, well-defined agent tasks — dramatically reducing token consumption and improving reliability for high-frequency operations.

**Steps**:
1. For any repetitive agent task (file operations, API calls, data transforms), ask: is this well-defined enough to be a CLI?
2. If yes: browse printingpress.dev for a pre-built CLI, or describe the tool in natural language to build a custom one
3. Install the CLI binary (Go-based; runs on macOS/Linux/Windows with separate compilation)
4. Claude Code auto-discovers CLIs in PATH — no additional configuration needed
5. For MCP vs CLI decision: use CLI when task is repetitive + well-defined; use MCP when task is stateful, complex, or requires two-way protocol

**Token efficiency**: CLIs pass only input/output data; MCPs pass full schema + protocol overhead per call — ~35x difference
**Tools**: Printing Press + Claude Code + Go
**Report**: [Printing Press CLI Factory](reports/printing-press-cli-factory-claude-code.md)
**Key insight**: For 1,000 agent calls/day, the MCP-to-CLI switch saves significant API cost and latency — the pre-built library means most common tools are one install command away

---

## Pattern 45: Official API CLI → Natural Language Reports

**What it does**: Connects a platform's official CLI to Claude Code via a `.env` credential file, enabling natural language queries that produce HTML dashboards or markdown reports without manual UI navigation.

**Steps**:
1. Create official API credentials (system user, never-expiring token, minimal required permissions)
2. Store credentials in a `.env` file (never commit to git)
3. Install the platform CLI tool
4. Claude Code reads `.env` and calls CLI commands via Bash tool
5. Claude transforms raw JSON output into HTML dashboards or markdown reports from natural language prompts
6. Example: "Show week-over-week performance for all active campaigns" → Claude runs CLI → formats HTML table

**Applicable to**: Meta Ads CLI, any platform with an official CLI and machine-readable output
**Tools**: Meta Ads CLI + Claude Code
**Report**: [Meta Ads CLI + Claude Code](reports/meta-ads-cli-claude-code-setup.md)
**Key insight**: The official CLI approach eliminates ToS risk from unofficial scrapers while the `.env` pattern gives Claude persistent access without re-authentication each session

---

## Pattern 46: Keyword-First App Naming + ASO Stack

**What it does**: Maximizes App Store discoverability for indie apps by front-loading primary keywords in the app name, optimizing all metadata fields, A/B testing screenshots, and timing review requests at the first moment of user success.

**Steps**:
1. LLM brainstorm → Ahrefs validation (popularity + difficulty) → target high-popularity even if competitive
2. App name: [Primary Keyword] – [Brand Name] (keyword first, always)
3. Subtitle (30 chars): secondary keywords different from name field
4. Keyword field (100 chars): comma-separated, no spaces, no repeats, no plurals
5. First screenshot: best feature, real UI — not marketing graphics
6. A/B test screenshots via Apple's product page optimization tool
7. Review prompt: trigger at first moment of success (first habit completed, first task done)
8. Respond to every review (positive and negative) to signal engagement to the algorithm
9. Email signature: "If you're enjoying the app, I'd be grateful for a review"

**Tools**: Ahrefs + App Store Connect
**Report**: [ASO Masterclass](reports/aso-masterclass-app-store-optimization-habit-kit.md)
**Key insight**: Indie developers cannot afford brand-first naming — putting the primary keyword first in the app name is the single highest-leverage ASO change available

---

## Pattern 47: Web-First → Mobile Port (Claude Code + Expo)

**What it does**: Builds both a web app and a mobile app from one codebase by developing in browser first (fast iteration) then porting to mobile via Expo — with Claude Code scaffolding and writing the entire project.

**Steps**:
1. Open Anti-Gravity IDE + Claude Code extension
2. Prompt Claude Code to scaffold Expo + React Native project
3. Develop and iterate in browser web view (fast, no device needed)
4. Test on phone via Expo Go (QR code → live hot-reload app, no App Store submission)
5. Progress stack incrementally: local storage → REST API → Supabase → cloud → auth
6. Production: EAS Build → compile binary → submit to App Store / Play Store

**Tools**: Claude Code + Expo + React Native + Anti-Gravity IDE + EAS Build + Expo Go
**Report**: [Build a Mobile App With Claude Code](reports/mobile-app-claude-code-react-native-expo-course.md)
**Key insight**: Build as a web app first — web iteration is faster than rebuilding on device, and the Expo codebase gives you both a web version and a mobile app without duplication

---

## Pattern 48: HTML Output as Agent Communication Layer

**What it does**: Uses HTML outputs from Claude Code instead of markdown for four specific use cases where visual representation dramatically increases comprehension and stakeholder engagement.

**Use cases**:
- **Understand**: "Build a 2-way interactive HTML page explaining [complex concept]" — visual > text wall
- **Explain**: HTML slides for stakeholder presentations — self-contained, no Gamma account needed
- **Prototype**: "Create an HTML file showing [UI component] with interactive controls" — faster than framework scaffold
- **Tweak**: HTML slider panel (Impeccable "tweak" skill) for design parameter adjustment → bake back to code

**Rule**: markdown for versioned files (CLAUDE.md, project docs); HTML for one-off visual outputs

**Tools**: Claude Code (native); Impeccable "tweak" skill for design panels
**Report**: [HTML vs Markdown for Claude Code](reports/html-vs-markdown-claude-code-outputs.md)
**Key insight**: HTML is 2–4x slower to generate but produces dramatically higher ROI per token because humans actually read and engage with visual outputs — the slowdown is worth it for communication-critical outputs

---

## Decision Framework: Automation Tool Selection

```
Is the task reasoning-heavy AND runs infrequently (weekly/monthly)?
  → Claude Routines

Is the task deterministic AND runs frequently (hourly/daily)?
  → n8n

Does the task require multiple specialized agents with defined roles?
  → Harbor

Do you need a self-improving agent that builds persistent memory?
  → Hermes Agent

Do you need brand assets + video generated from a brief?
  → Claude Code + Higgsfield MCP

Do you need parallel long-running tasks with time-based pricing?
  → Codex

Do you need UI that doesn't look like AI slop?
  → Open Design (pick design system first)

Do you want to build trading/quant tools without coding?
  → Claude Code + Streamlit (regime-first: detect market environment before choosing strategy)

Do you want to build a passive income website without coding?
  → Hostinger Horizons + Clearer (find SERP gap first, then build)

Do you want to sell AI services to non-technical businesses?
  → AI audit model: Retell intake agent + Claude report + Gamma delivery + upsell menu

Do you want to make a cinematic product ad from a single image?
  → Claude Code + fal.ai (GPT-image-2 storyboard → C-dance 2.0 video); use approval gates before each generation step

Do you want consistent-character long-form video?
  → Character reference sheet + start/end frames → C-dance clips via Higgsfield MCP → ffmpeg stitch

Do you want to build a mobile app without coding experience?
  → Claude chat (generate prompt from competitor URL) → Claude Code + Expo → Expo Go testing

Do you want programmatic motion graphics?
  → Claude Code + Remotion skill (free: LUTs; paid: animated overlays, backgrounds, map animations)

Do you need an agent platform without a terminal (non-technical founders)?
  → Codex (skills, automations, browser use, Remotion — all in a GUI)

Do you want to edit raw footage into an animated video with motion graphics?
  → Claude Code + Hyperframes V2 (storyboard first, then render; BIT framework for quality calibration)

Do you want consistent brand design across all AI-generated outputs?
  → design.md (serialize design system once → attach to every agent session → zero drift)

Do you want to build a social media content skill in your own voice?
  → Claude Cowork interview-to-skill pattern → "update the skill" loop after each session

Do you want to replace a content team with an automated system?
  → 11-skill orchestrator pattern (Claude Code) + monthly analytics feedback loop

Do you want to generate UGC ads via API at scale (200-500/mo)?
  → CLAUDE.md brain + Arcads Pro API + Claude Cowork (feedback loop every 48 hours)

Do you want to generate UGC ads in-browser across 13 formats?
  → Claude Chrome Extension + Starop + Claude Desktop code tab

Do you need voice consistency across multi-clip Seedance videos?
  → Extract audio from clip 1 as MP3 voice reference → upload with character sheet for clip 2+

Do you want to clone a winning competitor ad without copying it?
  → Download ad → Gemini/Claude structure analysis → rebuild with fresh actor + same structural formula

Do you want autonomous daily SEO content (articles + videos)?
  → Hermes Agent + Hyperframes + scheduled persistent goals + backlink campaign (backlinks still required)

Do you want to call Seedance or any fal.ai model from Claude Code without UI?
  → Paste fal.ai "LLM content" docs into Claude Code → instant skill update → API calls via bash

Do you want a brand book, logo animation, and landing page from a single logo?
  → Higgsfield MCP + Claude Code (multi-model comparison → storyboard → Seedance → mockup → working site)

Should you use Higgsfield subscription or fal.ai pay-as-you-go?
  → Existing Higgsfield subscriber: use the MCP; new to ecosystem: fal.ai or wavespeed.ai (same models, often cheaper, no lock-in)

Do you want to sell AI services to SMBs without technical heavy lifting?
  → "Operational waste elimination" positioning + discovery call ROI formula + GoHighLevel + n8n delivery stack

Do you need speed-to-lead for a client's Meta lead gen campaign?
  → Meta lead forms → n8n webhook → GoHighLevel CRM → Retell AI outbound call within 60 seconds

Do you need to prompt a Retell AI voice agent well?
  → Use the 6-part GPT-4.1 playbook structure: Role → Personality → Context → Instructions → Numbered Stages → Example Interactions

Do you need to decide whether to split a Retell voice agent into multiple agents?
  → Apply the 3-of-4 rule: score goal / tone / toolset / knowledge scope; split if 3+ differ between any two jobs

Do you want to find a weekend AI agent business idea?
  → Messy feed → mispriced asset → trigger → buyer → monetize; build agent with GenSpark Claw or Claude Code

Do you want better AI image/video prompts without learning platform syntax?
  → Install Banana Pro Director (image) + Cinema Worldbuilder (video) Claude skills — describe in plain language, get expert prompts

Do you want to remove AI slop from a vibe-coded website?
  → Impeccable v3: Chrome extension scans → Claude Code applies fixes → tweak sliders → bake patch back to code

Do you want a professional design system for a vibe-coded project with no budget?
  → Referral Styles (2,000 free design system markdown files) + Impeccable teach + Cult UI components

Do you want natural language Meta Ads reporting without clicking in Ads Manager?
  → Meta Ads CLI + .env never-expiring token + Claude Code → HTML dashboards or markdown reports

Do you want token-efficient Claude Code tools for repetitive tasks?
  → Printing Press CLIs (35x fewer tokens than MCPs; 50+ pre-built; custom Go binaries in ~10 minutes)

Do you want to build a mobile app with no coding experience?
  → Anti-Gravity IDE + Claude Code + Expo + React Native; build web-first, test on phone via Expo Go

Do you want App Store growth for an indie mobile app?
  → ASO stack: keyword-first app name + Ahrefs validation + 100-char keyword field + screenshot A/B test + happy-moment review prompt

Do you want local AI agent management without a terminal?
  → Hermes desktop app (one-click installer) or Hermes Workspace (localhost:3000 dashboard with kanban, cron, swarm)

Do you need stakeholder-friendly visual outputs without Gamma or PowerPoint?
  → Ask Claude Code to "build a 2-way interactive HTML page explaining X" — self-contained, no extra tool accounts
```
