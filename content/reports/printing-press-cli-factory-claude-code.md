---
title: "Printing Press: Build Claude Code CLIs That Use 35x Fewer Tokens Than MCPs"
channel: Nate Herk
url: https://www.youtube.com/watch?v=YHk45NEpspE
date: 2026-05-12
tags: [claude-code, cli, mcp, token-efficiency, automation]
tools: [Printing Press, Claude Code, Go]
use_cases: [cli-tool-creation, token-efficiency-optimization]
complexity: intermediate
workflow_type: automated-pipeline
---

## What This Video Demonstrates

Printing Press (printingpress.dev) is a CLI factory and library of 50+ pre-built CLIs for Claude Code. CLIs use 35x fewer tokens than MCPs and achieve near-100% reliability versus roughly 72% for MCPs. Custom CLIs can be built in approximately 10 minutes using natural language; the output is a compiled Go binary.

## Workflow Steps

1. Install Go (required dependency for Printing Press CLI compilation)
2. Visit printingpress.dev and browse the library of 50+ pre-built CLIs
3. Install a pre-built CLI: copy the install command from the site and run it in terminal
4. Test the CLI in terminal to confirm it works as expected
5. Claude Code auto-discovers installed CLIs in PATH and can call them directly
6. To build a custom CLI: describe the desired tool in natural language to the Printing Press builder
7. Printing Press generates the Go source and compiles a binary
8. Install the binary and use it immediately from Claude Code

## Tools Used

| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Printing Press | CLI factory + pre-built CLI library for Claude Code; generates Go binaries from natural language | Free / paid tiers |
| Claude Code | Discovers and calls installed CLIs; primary agent runtime | Paid (Claude Max) |
| Go | Compilation runtime for Printing Press CLIs; required dependency | Free/open-source |

## Claude Code Integration Points

Claude Code is the primary consumer — it auto-discovers CLIs in PATH and calls them as tools during agent tasks. Printing Press generates the CLIs that Claude Code uses. This replaces MCP servers for repetitive, well-defined tasks where full schema + protocol overhead is wasteful.

## Key Insight

**CLIs are 35x more token-efficient than MCPs because they pass only the data Claude needs, not the full tool schema and protocol overhead** — for high-frequency agent tasks (1,000+ calls/day), this difference is significant in both cost and latency.

## Reusable Primitives

- CLI-first agent tool philosophy (prefer CLI over MCP for repetitive well-defined tasks)
- printingpress.dev pre-built CLI library (50+ ready-to-install tools)
- Natural language → Go binary pipeline (describe tool → get compiled CLI in ~10 minutes)
- CLI vs MCP efficiency decision framework: high-frequency repetitive = CLI; complex stateful = MCP
- Batch CLI installation pattern for setting up a new agent environment

## Limitations / Gotchas

- Go installation is a non-trivial prerequisite for non-developers
- Custom CLI generation quality varies — complex tools may require multiple iterations
- Pre-built CLIs are generic and may need customization for specific use cases
- Go binaries require separate compilation for each OS (macOS binary won't run on Linux)
- The 35x efficiency claim assumes typical MCP overhead; actual savings vary by tool complexity
- Printing Press itself is a newer tool; pre-built library breadth is still growing
