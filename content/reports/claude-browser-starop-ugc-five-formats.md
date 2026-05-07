---
title: "Claude Takes Over My Browser to Make UGC Ads (5 Formats, Full Workflow)"
channel: David — ecommerce AI marketer
url: https://www.youtube.com/watch?v=QMXpYLhXNAg
date: 2026-05-06
tags: [ugc, starop, browser-automation, claude-cowork, ecommerce, ad-formats]
tools: [Claude Desktop, Claude Chrome Extension, Starop, Custom Skill Files]
use_cases: [browser-automated-multi-format-ugc-ad-generation, five-format-testing-in-one-session]
complexity: intermediate
workflow_type: automated-pipeline
---

## What This Video Demonstrates

Claude takes full browser control via the Chrome extension to navigate Starop, input prompts, configure settings, click generate, wait for results, collect video URLs, and report back — all without user intervention. Two skill files teach Claude how to write prompts and how to operate Starop. The session covers five distinct ad formats in a single run: handheld iPhone, one-shot edited commercial, cinematic short film, Pixar animation, and podcast.

## Workflow Steps

**Input:** Product URL, brand kit in Starop, chosen actor, target format list

1. Set up: Claude Desktop code tab open + Chrome extension installed and connector toggled on
2. Configure brand in Starop: paste product URL → auto-extract brand colors, images, product descriptions (add specific product page for individual products)
3. Drag-drop two skill files into Claude chat: skill 1 (prompt writing), skill 2 (Starop video generation)
4. Say: "Please help me make ads for my brand [product name]" → Claude walks through setup confirmation (paid plan, Chrome extension, Starop account)
5. Claude verifies Chrome extension connection → navigates to Starop to validate brand DNA setup
6. Choose format(s) from 13 available → specify actor (upload to Starop account or use library)
7. Claude generates prompts for each format → user reviews and approves (or requests edits)
8. Claude takes over browser: inputs prompts into Starop UI, selects configuration, clicks generate, tracks all jobs in parallel
9. Claude waits for generations to complete → collects video URLs → delivers final message with all URLs
10. Review 5 videos → refine with Claude: "make the script longer", "add more scenes", "different energy"
11. For 30-45s videos: tell Claude you want a longer video → it generates prompts for sections → generates separately → sections sync via same actor / product / voice

**Output:** Up to 5 video ad variants across different formats, URLs collected and delivered in one message

## Tools Used

| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Claude Desktop (code tab) | Orchestrator + prompt writer | Pro plan ($20/mo) |
| Claude Chrome Extension | Browser control — UI navigation, form input, button clicking | Free |
| Starop | AI video generation, 13 UGC formats, actor library | Paid tier |
| Custom skill files (2) | Prompt structure + Starop integration knowledge | Free (provided by creator) |

## Claude Code Integration Points

- The code tab is Claude Code lite — same capability without terminal overhead
- The Chrome extension enables browser automation that would otherwise require Playwright or Puppeteer
- Skill files are drop-in Claude Code skill files — exact same format, directly portable
- For Claude Code CLI users: the same workflow gains full bash access for downloading and batch-processing videos locally

## Key Insight

**"Claude isn't improvising everything — it's following the prompt for different scenes, then improvising the visuals"** — this distinction gives creators predictable control over script, pacing, and marketing beats while letting the AI handle visual interpretation, so specific conversion goals can be hit reliably without sacrificing creative variety.

## Reusable Primitives

- **Brand DNA auto-extraction:** paste product URL into Starop → brand kit created automatically (images, colors, description)
- **Parallel generation tracking:** Claude queues all 5 format generations simultaneously, tracks status, reports all URLs when done
- **13-format skill file:** covers iPhone handheld, one-shot commercial, Pixar, cinematic, podcast, ASMR, and more — drop-in reusable
- **Actor upload and reference:** upload actor image to Starop → reference by name in Claude prompt → used consistently across all formats
- **Extended video sectioning:** describe a 30-45s video → Claude splits into sections → generates each → same actor and voice syncs across all sections
- **Gemini ad feedback loop:** download video → upload to Gemini → "give honest feedback" → structured improvement suggestions

## Limitations / Gotchas

- Starop brand DNA must be configured before Claude starts — it is a prerequisite, not automated by Claude
- Cinematic short film format is the hardest to make feel like a real ad — works best for niche storytelling products
- Podcast format generates as a short clip — for better results, request a compilation of multiple clips
- One-shot commercial is impressive but at 14 seconds feels very fast-paced — longer scripts are recommended
- First-pass generations almost always need refinement — budget time for 2-3 rounds
- Actor and product accuracy is strong but Starop does not guarantee 100% faithful reproduction on every generation
