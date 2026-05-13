---
title: "The ASO Masterclass: How Sebastian Grew His App to $100K/Month"
channel: Starter Story
url: https://www.youtube.com/watch?v=I2GG0lyb_RI
date: 2026-05-12
tags: [aso, app-store, mobile-apps, keywords, reviews]
tools: [Ahrefs, App Store Connect]
use_cases: [app-store-optimization, mobile-app-growth]
complexity: beginner
workflow_type: manual-assisted
---

## What This Video Demonstrates

Sebastian (Habit Kit, $100K/month) breaks down the three ASO foundations that took his app from invisible to top-3 for "habit tracker": keyword optimization (name + subtitle + keyword field), screenshot conversion optimization (A/B tested via Apple's product page optimization tool), and review acquisition (timing, response strategy, and the email signature trick).

## Workflow Steps

**Keyword research:**
1. Use an LLM to brainstorm all possible search terms for the app category
2. Validate each with Ahrefs: check popularity score and difficulty score
3. Target high-popularity keywords even if difficulty is high — volume matters more than ease at this stage

**App name + metadata:**
4. Put the primary keyword first in the app name before the brand name (e.g., "Habit Tracker – Habit Kit")
5. Use the 30-character subtitle for secondary keywords (different from the name field)
6. Fill the 100-character keyword field: commas as separators, no spaces, no repeated words, no plurals if singular is indexed

**Screenshots:**
7. Lead with the best feature on the first screenshot — not a brand logo or tagline
8. Show real app UI, not marketing graphics or lifestyle imagery
9. Run an A/B test using Apple's product page optimization tool before committing to a layout

**Reviews:**
10. Trigger the review prompt at the first happy moment (e.g., right after a user completes their first habit)
11. Respond to every review — positive and negative — to signal engagement to the App Store algorithm
12. Add "If you're enjoying the app, I'd be grateful for a review" to your email signature

## Tools Used

| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Ahrefs | Keyword validation: popularity score + difficulty score for App Store search terms | Paid |
| App Store Connect | Apple's developer portal; product page optimization A/B testing tool built in | Free (Apple Developer account required) |

## Claude Code Integration Points

Claude Code with an Ahrefs API connection could automate the keyword research phase — generate a keyword list from a brief, validate all terms via API, rank by popularity/difficulty ratio, and output a formatted keyword field string. A review sentiment analysis skill could parse App Store review text to identify the top feature requests and bug reports, prioritizing the product roadmap.

## Key Insight

**Put your primary keyword first in your app name before your brand name** — indie developers cannot afford the brand recognition that lets Duolingo lead with "Duolingo" and still rank for "language learning."

## Reusable Primitives

- Keyword-first app naming pattern (primary keyword → brand name, not brand name → keyword)
- 100-character keyword field strategy (commas not spaces, no repeats, no plurals)
- Screenshot A/B test workflow using Apple's built-in product page optimization
- Happy-moment review prompt timing (first goal achieved, not first app launch)
- Email signature review request ("If you're enjoying the app…")
- Respond-to-every-review strategy for algorithm engagement signals

## Limitations / Gotchas

- ASO takes 6–12+ months to show meaningful ranking results; not a quick-win channel
- The keyword field is invisible to users — it only affects search indexing
- Apple limits product page optimization tests to 3 variants at a time
- Review volume matters as much as rating for App Store ranking — low review count hurts even with 5 stars
- Including competitor app names in the keyword field may get an app rejected or penalized
- Ahrefs App Store data lags slightly behind actual App Store search volume
