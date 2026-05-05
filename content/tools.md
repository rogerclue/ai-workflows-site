# AI Workflows — Master Tool Registry

Auto-generated from 8 video reports. Each entry includes cost/tier, role, and which reports reference it.

---

## Agent Runtimes & Orchestrators

| Tool | Description | Cost/Tier | Reports |
|------|-------------|-----------|---------|
| **Claude Code** | Primary CLI coding agent, orchestrates MCP servers, skills, and hooks | Paid (Claude Max) | all |
| **Codex** (OpenAI) | General-purpose knowledge work orchestrator with time-based pricing (5–10 hr/mo at $100/mo); parallel tasks, computer use, browser use, dictation, Chronicle memory | $100/mo | codex-best-software-ever |
| **Hermes Agent** | Open-source self-improving agent with persistent skill library, learning loop, cron scheduling, and multi-platform messaging | Free/open-source | hermes-agent-7-use-cases, hermes-agent-v012-self-maintaining |
| **Harbor** | Open-source GUI agent harness (org-chart view, knowledge bases, env vars) for multi-agent orchestration; built on OpenClaw | Open-source | greg-isenberg-ai-agents-run-business |
| **Claude Routines** | Native Claude (web/desktop) scheduled agent feature via `/schedule` command; 15 daily slots on Max, 5 on Pro | Claude Max/Pro | claude-routines-scheduled-agents |

---

## Image Generation

| Tool | Description | Cost/Tier | Reports |
|------|-------------|-----------|---------|
| **GPT-image-2** | OpenAI photorealistic image generation; used for product images and UI mockups | OpenAI paid / Included via Higgsfield | claude-higgsfield-mcp-marketing, codex-best-software-ever |
| **Flux** (via ComfyUI) | Local image generation model; accessed via Hermes News Portal subscription | Paid (subscription) | hermes-agent-7-use-cases |
| **ComfyUI** | Local image generation runner; bundled with Hermes v0.12 (hardware-gated); supports Flux | Free (local) | hermes-agent-7-use-cases, hermes-agent-v012-self-maintaining |

---

## Video Generation & Editing

| Tool | Description | Cost/Tier | Reports |
|------|-------------|-----------|---------|
| **Hyperframes** | Paid SaaS that exposes natural language → video editing (trim, motion graphics, subtitles) powered by Remotion | Paid (SaaS, price undisclosed) | claude-video-editing-hyperframes |
| **Remotion** | Programmatic video rendering framework (under the hood in Hyperframes); React-based, version-controlled | Open-source | claude-video-editing-hyperframes |
| **Higgsfield MCP** | Claude Code MCP connector to Higgsfield AI's image + video generation platform via OAuth | Higgsfield subscription | claude-higgsfield-mcp-marketing |
| **C-dance 2.0** (Sora) | UGC video generation model (via Higgsfield); produces avatar-based authentic-feeling videos | Included in Higgsfield | claude-higgsfield-mcp-marketing |
| **Higgsfield Marketing Studio** | UGC category management + avatar library within Higgsfield | Included | claude-higgsfield-mcp-marketing |
| **ffmpeg** | Video processing CLI; used by `/watch` skill for frame extraction, and by Remotion/Hyperframes | Free | claude-video-editing-hyperframes |

---

## UI & Design

| Tool | Description | Cost/Tier | Reports |
|------|-------------|-----------|---------|
| **Open Design** | Free open-source Claw Design clone (22k+ GitHub stars); 71 built-in design systems, bring-your-own LLM, HTML output | Free/open-source | open-design-vibe-coding-ui |
| **TouchDesigner MCP** | Generative visuals / interactive media tool; bundled with Hermes v0.12 | TouchDesigner license | hermes-agent-v012-self-maintaining |

---

## Analytics & Data

| Tool | Description | Cost/Tier | Reports |
|------|-------------|-----------|---------|
| **PostHog** | Product analytics; used as data feed for marketing agents and product briefs | Free tier / paid | greg-isenberg-ai-agents-run-business, claude-routines-scheduled-agents |
| **Stripe** | Revenue data connector for monthly revenue pulse routines | % of revenue | claude-routines-scheduled-agents |

---

## Memory, Knowledge & Vector Databases

| Tool | Description | Cost/Tier | Reports |
|------|-------------|-----------|---------|
| **Pinecone** | Vector database; used for portfolio intelligence (trained on 132 investments) and business data | Paid | greg-isenberg-ai-agents-run-business |
| **Gbrain** | Markdown-based knowledge base / second brain; receives nightly transcript uploads | Paid | greg-isenberg-ai-agents-run-business |
| **Chronicle** | Screenshot-based persistent memory built into Codex; raises privacy concerns | Included in Codex | codex-best-software-ever |
| **Notion** | Knowledge base for meeting digests, product briefs, revenue reports from Claude Routines | Free / paid | claude-routines-scheduled-agents |
| **GitHub** (as knowledge base) | Version-controlled knowledge base for Claude Routines outputs (personal brand repo, content HQ) | Free | claude-routines-scheduled-agents |
| **NotebookLM** | Content research input; used by weekly content research routine | Free | claude-routines-scheduled-agents |

---

## Meeting & Communication

| Tool | Description | Cost/Tier | Reports |
|------|-------------|-----------|---------|
| **Fathom** | Call recording + transcript API; feeds meeting digest and self-interview routines | Paid | claude-routines-scheduled-agents |
| **Fireflies** | Meeting recording + transcript API; feeds nightly cron → vector DB pipeline | Paid | greg-isenberg-ai-agents-run-business |
| **Slack** | Output channel for daily founder brief and DevOps alerts | Paid | hermes-agent-7-use-cases, claude-routines-scheduled-agents |
| **Google Meet** (Hermes) | Hermes v0.12 joins Meet calls as participant, transcribes, speaks, generates follow-ups | Google account | hermes-agent-v012-self-maintaining |
| **Spotify** (Hermes) | 7 native tools for playback, search, queue, playlist, device selection; can wire to cron | Spotify account | hermes-agent-v012-self-maintaining |

---

## Advertising & Marketing Platforms

| Tool | Description | Cost/Tier | Reports |
|------|-------------|-----------|---------|
| **Meta Ads** | Autonomous ad management by marketing agent; PostHog data integration + multivariate testing | Ad spend | greg-isenberg-ai-agents-run-business |
| **Reddit Ads** | Autonomous ad management alongside Meta | Ad spend | greg-isenberg-ai-agents-run-business |
| **Shopify** | Target platform for website rebrand via Claude Code + Higgsfield brand assets | Shopify subscription | claude-higgsfield-mcp-marketing |

---

## Local Model Providers

| Tool | Description | Cost/Tier | Reports |
|------|-------------|-----------|---------|
| **LM Studio** | Local LLM provider; now first-class in Hermes v0.12; slower than cloud for computer use | Free | hermes-agent-v012-self-maintaining |

---

## Automation Infrastructure

| Tool | Description | Cost/Tier | Reports |
|------|-------------|-----------|---------|
| **n8n** | Workflow automation platform; recommended for high-frequency, deterministic (non-reasoning) tasks | Open-source / paid | claude-routines-scheduled-agents |
| **Browser Use** | Built-in browser automation in Codex; also available via Hermes News Portal | Included in Codex / Hermes | codex-best-software-ever, hermes-agent-7-use-cases |
| **Computer Use plugin** (Codex) | Mouse control across native Mac apps via Codex | Included | codex-best-software-ever |

---

## Messaging Platform Connectors

| Tool | Description | Cost/Tier | Reports |
|------|-------------|-----------|---------|
| **iMessage / WeChat / Android** | Native messaging connectors for Hermes (v0.9+) | Platform-native | hermes-agent-7-use-cases |
| **Telegram / Discord** | Messaging platform adapters via Hermes plugin architecture | Free | hermes-agent-v012-self-maintaining |

---

## Voice & Audio

| Tool | Description | Cost/Tier | Reports |
|------|-------------|-----------|---------|
| **ElevenLabs** | Voice output / TTS for Hermes content workflows | Paid | hermes-agent-7-use-cases |

---

## Decision Matrix: Which Tool When

| Scenario | Recommended Tool |
|----------|-----------------|
| Scheduled autonomous reasoning task (weekly/monthly) | Claude Routines |
| High-frequency deterministic automation (hourly) | n8n |
| Multi-agent orchestration with org-chart visibility | Harbor |
| Self-improving agent with persistent skill library | Hermes Agent |
| Video editing from natural language | Hyperframes |
| Brand identity + marketing assets from scratch | Higgsfield MCP + Claude Code |
| UI prototyping with design system constraints | Open Design |
| Parallel long-running autonomous tasks | Codex |
| Product analytics → autonomous ad optimization | PostHog → marketing agent (Harbor) |
| Meeting transcript → structured digest | Fathom/Fireflies → Claude Routines → Notion |
| Portfolio/business intelligence via natural language | Fireflies → Pinecone → Gbrain |
