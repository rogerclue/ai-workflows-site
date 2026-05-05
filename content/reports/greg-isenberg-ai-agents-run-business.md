---
title: "AI Agents Run My Business and Life — Andrew Wilkinson Interview"
channel: Greg Isenberg
url: https://www.youtube.com/watch?v=65IAqRUxg3c
date: 2026-05-04
tags: [agent-infrastructure, business-automation, marketing-agents, vector-database, vibe-coding]
tools: [Harbor, OpenClaw, Claude Code, PostHog, Meta Ads, Reddit Ads, Fireflies, Pinecone, Gbrain]
use_cases: [business-automation, marketing-agent, support-agent, dev-agent, portfolio-intelligence, vibe-coding]
complexity: advanced
workflow_type: automated-pipeline
---

## What This Video Demonstrates
Andrew Wilkinson (Tiny conglomerate, 24+ businesses) describes his full AI agent stack for running personal life and businesses. Core insight: he built a personality test app solo using vibe coding, then replaced his entire operations team with three agent types (dev, marketing, support) running on Harbor (open-source agent harness). The marketing agent autonomously manages Meta and Reddit ad accounts with PostHog data integration and multivariate testing.

## Workflow Steps

### Three-Agent Business Stack (Harbor)
1. **Support agent**: Receives customer emails → handles ticket or escalates to dev agent → if P0 security issue, auto-fixes and merges PR → emails customer with resolution
2. **Dev agent**: Receives escalations from support → fixes bugs → creates PRs for review → auto-merges P0 fixes
3. **Marketing agent**: Hooks into PostHog (analytics) → manages Meta + Reddit ads → runs multivariate tests → creates ad creative → adjusts budgets → responds to natural language budget/strategy commands

### Data Intelligence Stack (Personal / Portfolio)
1. Fireflies records all meetings → nightly cron → API pulls transcripts → builds Markdown files → saves to Gbrain
2. Vector databases (Pinecone) trained on family office data (132 investments, $16M → $36M)
3. Vector database trained on Tiny's 24 businesses (financial data, expense trends, CEO updates)
4. Natural language queries: "Review last quarter, give me icebergs or issues"
5. Output: Portfolio intelligence without manually reviewing all data

### Vibe Coding + Agent Operations Model
1. Built personality test app (40-min test → 100-page AI-written report, Robert Greene style) solo via vibe coding
2. Instead of hiring ops team: spun up Harbor agent harness
3. Harbor = GUI for OpenClaw-style agents with org chart view, knowledge bases, databases, env vars
4. Agents handle support, dev fixes, marketing — founder just approves PRs and sends budget messages

## Tools Used
| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Harbor (github/geekforbrains/harbor) | Agent harness / GUI for multi-agent orchestration | Open-source |
| OpenClaw | Underlying agent framework (replaced by Harbor for visibility) | Open-source |
| Claude Code | Primary coding environment | Paid |
| PostHog | Analytics data feed for marketing agent | Free tier / paid |
| Meta Ads + Reddit Ads | Platforms managed autonomously by marketing agent | Ad spend |
| Fireflies | Meeting recording + transcript API | Paid |
| Pinecone | Vector database for portfolio intelligence | Paid |
| Gbrain | Markdown knowledge base / second brain | Paid |

## Claude Code Integration Points
- Harbor is the closest existing equivalent to a Claude Code multi-agent dashboard — study its architecture
- The **marketing agent pattern** (PostHog data → ad platform management → multivariate testing) is directly buildable in Claude Code with MCP servers for Meta/Google Ads APIs
- The **support → dev → auto-merge P0** pipeline could be replicated with Claude Code + GitHub MCP
- The **nightly cron → vector DB update** pattern maps to scheduled Claude Code agents feeding a knowledge base
- Vector database + natural language query is the architecture for the AIWorkflows knowledge base you're building
- The `~$20k revenue, solo founder, no ops team` outcome is the target proof point for AI-operated micro-businesses

## Key Insight
**The marketing agent is the most immediately valuable**: it connects real business data (PostHog analytics) to ad platform management, runs multivariate tests, creates creative, and adjusts budgets — all autonomously. Andrew's comment that "support is not a job very soon" is less interesting than the marketing agent claim, which has concrete $20k revenue validation at small scale with a path to $100k/month ad budget.

## Reusable Primitives
- **Three-agent business stack** (support + dev + marketing): the minimum viable agent org for a solo-founder SaaS
- **PostHog → marketing agent → ad platform loop**: analytics data driving autonomous ad optimization is replicable for any product with PostHog + Meta/Reddit
- **Nightly cron → transcript → vector DB**: Fireflies/Fathom API + Pinecone + Gbrain is a proven stack for personal knowledge management at scale
- **Natural language budget commands to marketing agent**: "increase budget by $1k" → agent executes — the interface model for any autonomous spend management system
- **Harbor org chart UX model**: the mental model of "hire agents like employees with defined roles" is the right framing for explaining multi-agent systems to non-technical stakeholders

## Limitations / Gotchas
- Harbor is Andrew's friend's project — not widely known, limited documentation
- OpenClaw "not deterministic enough" for their use case — they switched to Harbor
- Marketing agent described but not demonstrated live — actual implementation details sparse
- "Three to six months from handing businesses off to AI" — optimistic; support is solved, product/strategy are not
- Vector DB accuracy issues acknowledged: "often says wrong person is CEO, numbers a bit off"
- Context window is the key bottleneck: 1M tokens ≈ "remembers a day" — 5-10M needed for full company memory
- Autonomous company hype (Pulsia etc.) called out as "selling a dream" — agents still require step-by-step instruction like "genius babies"
