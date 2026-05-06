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
```
