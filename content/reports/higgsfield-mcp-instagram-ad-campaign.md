---
title: "I Tested Higgsfield's Official MCP In Claude"
channel: AI Aidan
url: https://www.youtube.com/watch?v=MMGVGA2DYro
date: 2026-05-05
tags: [ai-advertising, image-generation, mcp, instagram-ads, claude-code, marketing-automation]
tools: [Claude Code, Higgsfield MCP, Playwright MCP, WebSearch, Higgsfield AI]
use_cases: [instagram-ad-generation, competitive-research, creative-strategy, batch-image-generation]
complexity: intermediate
workflow_type: automated-pipeline
---

## What This Video Demonstrates

Aidan (397 Claude sessions, 77k messages, Opus 4.7 as his go-to model) shows how to connect the newly-released Higgsfield MCP to Claude Code and build a complete Instagram ad campaign — 50 images across 5 creative angles — starting from a single product photo. The workflow goes from zero context to a downloadable folder of production-ready ads in one Claude session.

## Workflow Steps

### Phase 1 — Setup: Connect Higgsfield MCP via Custom Connector
1. Open Claude desktop app → Settings → Connectors → Add Custom Connector
2. Name it "Higgsfield" and paste the remote MCP URL: `https://mcp.higgsfield.ai/mcp`
3. Authenticate with your Higgsfield API key
4. Claude now has access to Higgsfield tools directly (no local install required)

### Phase 2 — Research: Competitive Intelligence
1. Prompt Claude with product image + brand context (demo: OLIPOP Cherry Vanilla)
2. Claude runs **Playwright MCP** to scrape Meta Ads Library for the brand's active ads (260+ ads analyzed)
3. Claude runs **WebSearch** to pull 2026 Instagram trend reports (Sprout Social, Ballisto, Stackmatix, etc.)
4. Output: Creative Brief with 5 key performance findings:
   - UGC testimonial is the #1 format on IG in 2026 (2.5–4% CTR, 50% lower CPA vs polished brand)
   - Reels dominate; sound-on with direct-to-camera has 35% lower CPA than silent
   - First 3 seconds are the whole game: hook → problem-agitation → product reveal → CTA
   - Carousels get +40–60% engagement; "ingredient breakdown" angles convert well
   - OLIPOP's brand playbook is anti-polish and viral-trend-heavy

### Phase 3 — Strategy: Build the 50-Ad Matrix
1. Claude proposes 5 creative angles × 5 concepts each = 25 concepts
2. Each concept generates 2 aspect ratio variants (1:1 feed + 9:16 stories/reels) = **50 total ads**
3. **Approval Gate**: Claude presents matrix and asks for 3 quick decisions before proceeding:
   - Approve matrix or swap rows
   - Confirm human-model angle settings (rows 6–10, 20, 22, 25)
   - Confirm balance check (run `mcp__96b0492a__balance` + `list_workspaces` before generating)
4. User types "approved" → Claude locks matrix and begins generation

The 5 creative angles used:
- **A1: Lifestyle** — poolside, summer vibes, social settings
- **A2: Problem/Sol** — X vs check, watercolor stomachs, split-frame before/after
- **A3: Ingredients** — glowing fridge, hand swap, product beauty shots
- **A4: Aspirational** — beach lounge, rooftop dinner, bathroom shelf, farmers market
- **A5: Bonus** — mirror selfie attempts (UGC-style)

### Phase 4 — Generation: Batch Produce 50 Ads via Higgsfield MCP
1. Claude checks Higgsfield workspace balance and selects workspace (`nano_banana_2`)
2. Submits all 50 jobs to Higgsfield in batches (server-side concurrent limit applies)
3. Polls for completion; re-fires the 2 that got dropped server-side
4. Downloads all 50 images via `curl` into organized batch folders on local machine
5. Total: **50 ads, 103MB, 839 credits used** (~$8 at standard pricing)

### Phase 5 — Delivery
1. Claude outputs organized folder tree: `batch-1-lifestyle/1x1/`, `batch-1-lifestyle/9x16/`, etc.
2. Naming convention: `{concept-name}.png` — same number across 1:1 and 9:16 for easy sorting
3. Claude recommends top 5 picks for A/B test by creative angle
4. Offers to generate contact-sheet PDF (5 grids, one per batch) for easy review

## Tools Used

| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Claude Code | Orchestrator, prompt design, research synthesis, strategy, batch management | Max plan ~$20/mo |
| Higgsfield MCP | Remote MCP server — generates all images from text prompts | Credits-based; 839 credits for 50 ads (~$8) |
| Playwright MCP | Scrapes Meta Ads Library for competitive ad research | Free (open source, `github.com/microsoft/playwright-mcp`) |
| WebSearch | Pulls 2026 Instagram trend reports from industry sources | Included in Claude |
| Higgsfield AI | Image generation backend (accessed via MCP, not direct UI) | Same credits pool |

## Claude Code Integration Points

- **Higgsfield MCP via Custom Connector**: The critical unlock — connects directly in Claude desktop via Settings → Connectors → Add Custom Connector → paste remote MCP URL. No local install, no config file editing.
- **Playwright MCP**: Installed by cloning `github.com/microsoft/playwright-mcp` and adding as a local MCP server. Used for structured web scraping (Meta Ads Library).
- **Projects mode**: Aidan runs this inside a dedicated "Ads" project in Claude Code for persistent context across the session.
- **Approval Gate pattern**: Claude builds in a human checkpoint before expensive generation steps — presents matrix, asks 3 yes/no questions, waits for "approved" before spending credits.
- **Skill codification**: At the end, Aidan prompts Claude to save this entire workflow as a reusable skill (`/ad-creator`) so it can be relaunched anytime.

## Key Insight

**The MCP connector turns Claude from a strategist into an executor** — instead of Claude writing prompts you then paste into Higgsfield manually, it submits, polls, and downloads all 50 jobs autonomously. The human only makes 3 decisions: approve the matrix, confirm model settings, and check the balance.

## Reusable Primitives

- **Competitive scrape → creative brief**: Use Playwright MCP on Meta Ads Library + WebSearch on trend reports → synthesize into a structured brief before generating anything
- **Approval Gate pattern**: Build in a pre-generation checkpoint where Claude presents the full plan and waits for explicit "approved" before spending API credits or generating assets
- **N×M creative matrix**: Any product can be mapped to `angles × concepts × ratios` to systematically fill a campaign grid rather than generating one-off images
- **Batch-with-retry**: Claude submits all jobs, polls for dropped/failed generations, re-fires them, then downloads everything in one `curl` sweep
- **Remote MCP via Custom Connector**: Any tool with a remote MCP endpoint can be connected to Claude desktop without editing config files — Settings → Connectors → Add Custom Connector
- **Skill codification at session end**: End every major workflow session by prompting Claude to save the workflow as a reusable skill for future one-command recall

## Limitations / Gotchas

- **Higgsfield concurrent job limit**: Server-side limit causes some jobs to get dropped silently — Claude catches this by polling and re-firing, but expect 2–5% failure rate on large batches
- **`soul_2` model for human shots**: Higgsfield's human-generation model (`soul_2`) produces bare product shots rather than true selfies; the "mirror selfie" UGC concept didn't work as expected
- **Balance check is mandatory**: Running out of Higgsfield credits mid-batch leaves orphaned jobs — Claude checks balance before every generation run
- **Aspect ratio ordering**: Claude batches by concept (not by ratio), so 1:1 and 9:16 variants are in separate subfolders — requires a sort step if you want to compare both ratios of the same concept side-by-side
- **OLIPOP is a real brand**: Aidan flags that generating ads using a real brand's identity for commercial use carries legal risk — treat as portfolio/exercise unless you have authorization
- **Playwright MCP setup**: Not a one-click install — requires cloning the Microsoft repo and registering as a local MCP server manually
