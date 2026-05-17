---
title: "16-Agent Harness for Solo Developers"
channel: Jordan Urbs
url: https://www.youtube.com/watch?v=eKbdk0MUhsU
date: 2026-05-17
tags: [agent-orchestration, hermes-agent, solopreneur, context-management, self-hosting]
tools: [Hermes Agent, Claude Opus, Docker Compose, Coolify, Traefik, Whisper]
use_cases: [solo-app-development, self-hosted-deployment, parallel-agent-coordination]
complexity: advanced
workflow_type: agent-loop
---

## What This Video Demonstrates

A 16-agent harness built inside Hermes Agent that gives solo developers a full product team: a Product Manager agent on Claude Opus orchestrates three councils (Technical, Creative, Delivery), each with three specialist agents, plus additional specialized agents for targeted tasks.

## Workflow Steps

1. Open Hermes Agent and run `/use client` to lock session context — all 16 agents share state from this point
2. Hand the initial requirement to the Product Manager agent (Claude Opus), which breaks it into scoped tasks per council
3. Technical Council (3 agents) handles architecture, implementation, and code review in parallel
4. Creative Council (3 agents) handles design, copy, and UX decisions in parallel
5. Delivery Council (3 agents) handles packaging, deployment configuration, and infrastructure
6. CTX plugin monitors token usage across agents — warns before any agent approaches its context limit
7. Delivery Council deploys via Docker Compose with Coolify or Technidium for orchestration and Traefik as reverse proxy
8. Iterate: PM agent reviews delivery output, re-tasks councils if anything is incomplete

## Tools Used

| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Hermes Agent | Multi-agent orchestration shell | Paid |
| Claude Opus | Product Manager agent (orchestrator) | Pay-per-token (expensive) |
| Docker Compose | Container definition for self-hosted apps | Free |
| Coolify / Technidium | Self-hosted PaaS orchestration layer | Free / self-hosted |
| Traefik | Reverse proxy and SSL termination | Free / open-source |
| Whisper | Local speech-to-text transcription | Free / local |
| CTX plugin | Context window monitoring across agents | Hermes add-on |

## Claude Code Integration Points

- **Hooks**: A `PreToolUse` hook could enforce the `/use client` context lock before any agent fires, preventing accidental context splits
- **Agent skills**: Each council maps directly to a Claude Code skill — Technical Council agents could be `/sc:implement`, `/sc:test`, and `/sc:build` chained in sequence
- **MCP servers**: Coolify and Traefik have REST APIs that could be exposed as MCP tools, letting the Delivery Council agents deploy without leaving the agent loop
- **CLAUDE.md**: Council role definitions and model assignments belong in a project-level CLAUDE.md so every agent in the session inherits the same constraints
- **CTX monitoring**: Claude Code's built-in context budget warnings serve the same role as the CTX plugin — no additional tooling needed if running inside Claude Code

## Key Insight

**Routing expensive Opus tokens only to the orchestrator** — not to worker agents — is what makes a 16-agent harness economically viable for a solo developer; worker agents run on cheaper models while the PM agent handles all cross-council reasoning.

## Reusable Primitives

- Session context locking (`/use client`) as a prerequisite before multi-agent work begins
- Council pattern: group agents by domain (technical / creative / delivery), run councils in parallel
- PM-as-orchestrator: one high-capability model plans, many cheaper models execute
- CTX monitoring plugin as a lightweight circuit breaker for context overflow
- Self-hosted Hermit Host stack (Docker Compose + Coolify + Traefik) as a reusable deployment target for any project

## Limitations / Gotchas

- 16 agents multiplies token spend rapidly — Opus on the PM agent alone is expensive at scale
- `/use client` context locking is Hermes-specific; replicating shared state in other frameworks requires explicit state-passing between agents
- Coolify/Technidium self-hosting adds ops overhead that defeats the "solo" premise if anything breaks
- Parallel council execution requires careful scope separation — councils that overlap on a file or config will conflict
- Video shows completed apps (Kakon Migo, Hermit Host, Whisper app) but does not show iteration cycles or debugging sessions; real build time likely longer than implied
