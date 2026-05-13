---
title: "Multi-Agent Voice Systems in Retell: When and How to Split Your Voice Agent"
channel: Owen Rensland
url: https://www.youtube.com/watch?v=Kwe-zrZ7clc
date: 2026-05-12
tags: [retell-ai, voice-agents, multi-agent, prompt-engineering, ai-agency]
tools: [Retell AI]
use_cases: [voice-agent-architecture, multi-agent-routing]
complexity: advanced
workflow_type: agent-loop
---

## What This Video Demonstrates

Owen Rensland's framework for when and how to split Retell voice agents into specialized multi-agent networks. The core decision rule is the "3 of 4 rule" — if three or more of {goal, tone, toolset, knowledge scope} differ between two jobs, split into separate agents. Covers specialist vs. router agent patterns, single prompt vs. conversational flow routing, and deterministic after-hours routing.

## Workflow Steps

1. List all distinct "jobs" the voice agent performs (booking, tech support, billing, routing, FAQ, etc.)
2. For each pair of jobs, score the four properties: goal, tone, toolset, knowledge scope
3. If 3 or more properties differ between two jobs → split those jobs into separate agents
4. Choose the agent type for each job: specialist (single prompt or conversational flow) or router
5. Add an agent transfer function to each agent with trigger condition in the prompt
6. Set "keep same voice" in Retell settings AND manually set identical voice on both agents (reliability issue)
7. Set post-call analysis to "both agent and transferred agent" so the full transcript is captured
8. Write transfer trigger in prompt: "Use [transfer function] the moment [trigger condition]. Don't ask permission, just swap."
9. For deterministic routing logic (time-based, VIP caller, department selection): use conversational flow with logic split nodes instead of LLM judgment

## Tools Used

| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Retell AI | Voice agent platform; hosts single-prompt agents, conversational flow agents, and multi-agent networks with transfer functions | Usage-based |

## Claude Code Integration Points

Claude Code can generate specialized agent prompts from a business brief — provide the job description, tone requirements, toolset, and knowledge scope, and a skill outputs a formatted Retell-ready prompt. A prompt template library skill could store reusable blocks for common voice agent jobs (booking, tech support, billing, routing).

## Key Insight

**A single-prompt voice agent degrades past 6,000–8,000 tokens — apply the "3 of 4 rule" to decide when to split, and use conversational flow for deterministic routing logic that LLMs cannot reliably handle.**

## Reusable Primitives

- 3-of-4 rule for agent splitting (score goal / tone / toolset / knowledge scope)
- Specialist vs. router agent pattern (specialist handles one job; router directs to specialists)
- Conversational flow for deterministic routing (time-based, VIP caller, department selection)
- Agent transfer function setup with explicit trigger condition in prompt
- Post-call analysis set to "both" to capture complete transcripts across transfers
- "Don't ask permission, just swap" trigger instruction pattern

## Limitations / Gotchas

- "Keep same voice" setting in Retell is unreliable — must manually set the identical voice model on both agents
- Transfer adds approximately 0.75–1 second of latency; noticeable in fast-paced conversations
- Conversational flow has rigid mode vs. flex mode — the distinction matters for complex routing logic
- Complex multi-agent networks are difficult to debug; full transcript capture is essential
- Post-call analysis must be explicitly set to "both agent and transferred agent" or half the transcript is lost
- Router agents add a hop that increases cost slightly; only justified when specialist separation is needed
