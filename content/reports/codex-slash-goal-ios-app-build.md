---
title: "I Let OpenAI Codex /goal Build My iOS App for 1 Hour (Math Block)"
channel: Zach Sells AI
url: https://www.youtube.com/watch?v=hylVSjTcmP0
date: 2026-05-17
tags: [codex, ios-development, autonomous-coding, app-building, slash-goal]
tools: [OpenAI Codex, Xcode, iOS Shortcuts, RevenueCat]
use_cases: [ios-app-mvp, autonomous-build, no-babysit-development]
complexity: beginner
workflow_type: automated-pipeline
---

## What This Video Demonstrates

OpenAI Codex's experimental `/goal` feature accepts a single objective and works autonomously until complete — no intermediate prompting required. This video demos building a full iOS app (Math Block: solve a math problem before accessing Instagram/TikTok) in 1 hour 11 minutes with zero babysitting, producing a functional MVP with onboarding, difficulty levels, app icon, and a paywall stub.

## Workflow Steps

1. Create a project folder and add two files: `plan.md` (feature list and app description) and `agent.md` (behavioral instructions for the agent)
2. Write a `/goal` prompt that references `plan.md` as the source of truth for the objective
3. Submit the `/goal` prompt — Codex begins working autonomously, self-directing through implementation without further input
4. Wait: Codex runs for 1 hour 11 minutes, consuming 24,154 tokens, and produces a goal budget report on completion
5. Review the completed app: onboarding flow, difficulty selection (easy / medium / hard / insane), app icon, paywall stub
6. Test the iOS Shortcuts automation: the app intercepts social media app opens and requires a math problem to be solved first
7. Identify any bugs (e.g., "continue to Instagram" button redirecting back to Math Block) and fix them with a normal Codex task prompt
8. Plan monetization: $5/month subscription via RevenueCat, targeting 4,000 paying users for $20k MRR

## Tools Used

| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| OpenAI Codex (/goal) | Autonomous app builder — self-directs until objective complete | Paid ($200/month ChatGPT plan) |
| Xcode | iOS build and simulator environment | Free (macOS) |
| iOS Shortcuts | App interception automation — blocks social media until math solved | Free (iOS built-in) |
| RevenueCat | Planned subscription paywall implementation | Freemium |

## Claude Code Integration Points

- **Autonomous skills**: Claude Code's `/gsd-autonomous` or `/sc:implement` skills approximate the `/goal` pattern — a single-objective, self-directing run through a plan file
- **plan.md + agent.md pattern**: This file pair maps directly to a Claude Code project's `CLAUDE.md` + a task specification file — the same structured input for autonomous runs
- **Hooks**: A `Stop` hook in Claude Code could generate the equivalent of Codex's goal budget report (tokens used, files changed, time elapsed) at session end
- **Sub-agent decomposition**: Claude Code's agent orchestration can break a `plan.md` into parallel sub-tasks, potentially compressing the 1-hour build time further
- **Xcode integration**: Claude Code's Bash tool can run `xcodebuild` commands, run the simulator, and capture build errors — completing the same loop Codex runs internally
- **RevenueCat**: A `/paywall-setup` skill in Claude Code could handle the subscription implementation step that `/goal` left as a stub

## Key Insight

**The `plan.md` + `agent.md` file pair as the entire interface to an autonomous build run** — no chat, no prompting, no babysitting — reduces app development to spec writing and review, not coding.

## Reusable Primitives

- `plan.md` as the single source of truth for a `/goal` run — all features, requirements, and scope in one file
- `agent.md` as behavioral constraints for the autonomous agent — what it can and cannot do during the run
- `/goal` as a fire-and-forget pattern for well-scoped MVPs: write the spec, submit, review the output
- Goal budget report as a post-run audit: tokens consumed, time elapsed, objectives completed vs. outstanding
- iOS Shortcuts as a zero-code app interception layer — no custom Swift needed for the core mechanic

## Limitations / Gotchas

- `/goal` is experimental — behavior and availability may change; it is not the default Codex mode
- Heavy `/goal` usage hits rate limits even on the $200/month ChatGPT plan — not viable for rapid iteration or multiple runs per day
- The resulting app was ~50% production-ready: the paywall was a stub, at least one bug was found immediately, and App Store submission steps were not covered
- iOS Shortcuts automation is clever but fragile — Apple can change Shortcuts behavior in OS updates, breaking the core mechanic
- 24,154 tokens for one app build is significant; at scale (multiple apps, multiple `/goal` runs) token cost adds up fast
- Monetization projections ($20k MRR from 4,000 users) are aspirational — no distribution, ASO, or acquisition strategy was discussed
