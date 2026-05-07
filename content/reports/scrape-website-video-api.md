---
title: "I Scraped a Website and Turned It Into My Own Video API"
channel: Creator's Journey
url: https://www.youtube.com/watch?v=XnztWtdnv3U
date: 2026-05-07
tags: [web-scraping, api-reverse-engineering, video-generation, python, perplexity]
tools: [Perplexity, Python, Browser DevTools]
use_cases: [reverse-engineering-web-app-api, building-custom-video-api-wrapper, scraping-to-personal-api]
complexity: intermediate
workflow_type: manual-assisted
---

## What This Video Demonstrates

A 2-minute teaser (no full breakdown) describing how the creator reverse-engineered a video generation website's API by inspecting network requests, built a Python API wrapper around it, and wrapped that in a custom website — effectively creating unlimited personal access to the platform's generation pipeline. Perplexity was used to accelerate the Python code writing.

## Workflow Steps

### High-Level Process (No Technical Detail Shown)
1. Open the target video generation website → study the UX carefully
2. Use a browser extension to inspect the page, scrape structure, and observe network requests
3. Analyze the video generation flow: what requests are made, what the response structure looks like
4. Use Perplexity to help write a Python API wrapper that replicates the site's request/response behavior
5. Build a small website or interface around the Python API to make it feel like a real product
6. Use the wrapper to generate videos without going through the original site's UI

**Note:** This video is a teaser only — the creator promises a "full breakdown" in a future video. No code, no specific site, no implementation details are shown.

## Tools Used
| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Browser DevTools / Extension | Inspect network requests, scrape page structure | Free |
| Perplexity | AI-assisted Python code generation for the API wrapper | Free / Pro |
| Python | Building the API wrapper that mirrors the site's request behavior | Free |

## Claude Code Integration Points
- Claude Code could replace Perplexity here: paste network request/response examples → ask Claude to generate a Python wrapper matching that behavior
- Claude Code bash execution could automate the API wrapper testing loop (make request → inspect response → iterate)
- A Claude skill could be built around the reverse-engineered API once the wrapper is stable — turning it into a reusable MCP server

## Key Insight
**Web scraping + network inspection can turn any web-based AI tool into a personal API** — if a site's generation flow is visible in DevTools, you can replicate it in Python and bypass the UI entirely, removing per-use limits tied to the front-end.

## Reusable Primitives
- **DevTools-first API discovery**: open any AI web tool → inspect XHR/Fetch requests → identify the generation endpoint, auth headers, and payload format
- **Perplexity-as-code-assistant**: paste request/response examples into Perplexity with "write a Python function that replicates this" → faster than manual coding
- **Wrapper-to-product pattern**: reverse-engineered API → Python wrapper → lightweight web UI = personal product from public tool
- **Claude Code as Perplexity substitute**: same paste-and-generate approach works with Claude Code for more iterative debugging

## Limitations / Gotchas
- **This is a teaser, not a tutorial** — no code, no site name, no implementation steps are shown; full breakdown promised in a future video
- **Terms of service risk**: reverse-engineering and wrapping third-party web apps may violate ToS; creator does not address this
- **Fragility**: scraped APIs break whenever the target site updates its frontend or auth mechanism
- **Auth complexity**: most AI platforms use session tokens, CSRF headers, or rate limiting that make simple request replication difficult
- **No specific video generation platform named** — unclear which tool was targeted
