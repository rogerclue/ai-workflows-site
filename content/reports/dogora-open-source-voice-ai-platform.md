---
title: "Dogora: Open-Source Self-Hosted Voice AI Platform (Vapi Alternative)"
channel: Better Stack
url: https://www.youtube.com/watch?v=xD9JEvfCH9k
date: 2026-05-17
tags: [voice-ai, open-source, self-hosting, workflow-builder, vapi-alternative]
tools: [Dogora, Docker Compose, GitHub]
use_cases: [lead-qualification, voice-agent-deployment, self-hosted-voice-ai]
complexity: intermediate
workflow_type: automated-pipeline
---

## What This Video Demonstrates

Dogora is an open-source, self-hostable voice AI platform that positions itself between hosted services like Vapi/Bland/Retell (fast but locked-in) and low-level frameworks like Pipecat/LiveKit (full control, no UI). It offers a visual drag-and-drop workflow builder with full call tracing and bring-your-own-provider support.

## Workflow Steps

1. Clone the Dogora repository and run `docker compose up` — containers spin up immediately with no manual configuration
2. Open the visual workflow builder in the Dogora UI
3. Drag nodes onto the canvas: prompt node → qualification step node → API tool call node → branch node → transfer node
4. Configure each node: set prompts, define branch conditions (qualified vs. not qualified), and wire the API tool call to your CRM endpoint
5. Assign your own LLM, STT (speech-to-text), and TTS (text-to-speech) providers in the provider settings
6. Deploy the agent and place a test call
7. Review the full trace: transcript, tool calls, state changes, and recording in a single view
8. Iterate on node configuration based on trace output

## Tools Used

| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Dogora | Visual workflow builder + call orchestration | Free / open-source (self-hosted) |
| Docker Compose | Container orchestration for local/server deploy | Free |
| GitHub | Source and version control for Dogora config | Free |
| LLM provider (BYOP) | Inference for conversation logic | Varies by provider |
| STT provider (BYOP) | Speech-to-text transcription | Varies by provider |
| TTS provider (BYOP) | Text-to-speech synthesis | Varies by provider |
| CRM (via API tool node) | Lead data destination for qualified callers | Varies |

## Claude Code Integration Points

- **MCP server**: Dogora's REST API could be wrapped as an MCP server, allowing a Claude Code agent to create, update, and deploy Dogora workflows programmatically
- **Prompt node authoring**: Claude Code skills like `/sc:design` or a custom `/voice-prompt-writer` skill could draft and iterate on node prompts before they are pasted into the visual builder
- **Trace analysis**: A Claude Code agent could consume Dogora's trace JSON output after calls and surface patterns — common drop-off points, failed tool calls, branch distribution
- **Branch logic generation**: Claude Code could generate the conditional logic for branch nodes from a plain-English qualification criteria description
- **Hooks**: A `PostToolUse` hook could automatically push updated Dogora workflow configs to a GitHub repo after each edit session

## Key Insight

**The visual workflow builder + full call tracing in one interface** is Dogora's core differentiator — you can see exactly which node fired, what the tool call returned, and where the call branched, without stitching together logs from multiple services.

## Reusable Primitives

- Docker Compose as the zero-config self-hosting entry point for voice AI infrastructure
- Node types (prompt, qualification, API tool call, branch, transfer) as a reusable vocabulary for any voice agent workflow
- Bring-your-own-provider pattern: decouple the orchestration layer from inference/speech vendors
- Unified trace view (transcript + tool calls + state + recording) as a debugging primitive for any voice agent
- Branch node on CRM API response as the standard pattern for human-transfer qualification flows

## Limitations / Gotchas

- Very low GitHub star count at time of recording — community and long-term maintenance are unproven
- Self-hosting means you own the infrastructure: uptime, scaling, and security are your problem
- "Bring your own providers" requires accounts and API keys for LLM, STT, and TTS — the setup cost is higher than a fully managed service
- Visual builder works for linear flows but complex branching logic may become unwieldy at scale
- No mention of telephony provider integration details — getting a phone number wired in likely requires additional configuration not shown
- Compared benchmarks against Vapi/Bland/Retell latency were not provided; real-world latency of self-hosted setup depends heavily on where you deploy
