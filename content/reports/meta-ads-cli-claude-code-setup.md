---
title: "Connect Your Meta Ads Account to Claude Code (Official CLI Setup)"
channel: Mike Futia
url: https://www.youtube.com/watch?v=YNiu_zzDDAc
date: 2026-05-12
tags: [meta-ads, claude-code, cli, reporting, marketing-automation]
tools: [Meta Ads CLI, Claude Code]
use_cases: [ad-reporting-automation, marketing-dashboard-creation]
complexity: intermediate
workflow_type: automated-pipeline
---

## What This Video Demonstrates

Full setup guide for Meta's official ads CLI connected to Claude Code via a `.env` file — enabling natural language ad reporting, performance dashboards, and weekly briefs without risk of account ban (unlike third-party connectors or unofficial API wrappers).

## Workflow Steps

1. Create a Meta Developer app at developers.facebook.com/apps with the Marketing API use case
2. Create a system user in Meta Business Suite (admin role)
3. Assign assets to the system user: page, ad account, app, pixels (full control)
4. Generate a never-expiring access token with the 7 required permissions
5. Install the CLI: `pip install uv` → `uv tool install meta-ads` → `uv tool update-shell`
6. Create a `.env` file with `META_ACCESS_TOKEN` and `AD_ACCOUNT_ID`
7. Test: run `meta auth-status` and `meta ads campaign list` in terminal
8. Open Claude Code and prompt for reports or dashboards using natural language

## Tools Used

| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Meta Ads CLI | Official Meta CLI for programmatic ad data access; read-only reporting | Free (official Meta tool) |
| Claude Code | Reads `.env`, calls CLI commands, generates HTML dashboards or markdown reports | Paid (Claude Max) |

## Claude Code Integration Points

Claude Code is the primary interface — it reads the `.env` credential file, executes Meta CLI commands via Bash, and transforms the raw JSON output into HTML dashboards or markdown reports based on natural language prompts. Example prompts: "Show me week-over-week performance for all active campaigns" or "Write an executive brief summarizing last month's ad spend and top performers."

## Key Insight

**The official Meta Ads CLI connected via `.env` token lets Claude Code pull any ad data and generate HTML dashboards or markdown reports in one prompt** — no clicking in Ads Manager, no third-party connector risk.

## Reusable Primitives

- `.env` credential pattern for CLI tools (store token once, Claude reads it every session)
- Meta system user + asset assignment setup (one-time, then never-expiring tokens)
- Natural language → CLI → HTML dashboard pipeline
- Week-over-week comparison report prompt template
- Executive brief prompt template (spend, top performers, recommendations)
- Official CLI approach avoids ToS risk from unofficial API wrappers

## Limitations / Gotchas

- Never-expiring tokens are a security risk if the `.env` file is exposed or committed to git
- Requires Meta Business verification for the developer app (can take days)
- Token needs regeneration if permissions change or system user access is revoked
- HTML dashboards require opening in a browser — not suitable for automated Slack delivery without extra tooling
- The video demonstrates read-only reporting; write operations (creating/modifying campaigns) are not covered
- `uv` tool installation adds a dependency layer; Python environment management required
