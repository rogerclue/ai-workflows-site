# AI Workflows — Master Tool Registry

Auto-generated from 31 video reports. Each entry includes cost/tier, role, and which reports reference it.

---

## Agent Runtimes & Orchestrators

| Tool | Description | Cost/Tier | Reports |
|------|-------------|-----------|---------|
| **Claude Code** | Primary CLI coding agent, orchestrates MCP servers, skills, and hooks | Paid (Claude Max) | all |
| **Expo / Expo Go** | React Native development toolchain; Expo Go enables phone testing without App Store submission; QR code → live app on device | Free / open-source | vibe-coded-400k-app-claude-code |
| **React Native** | Cross-platform mobile app framework; Claude Code sets up project scaffold automatically | Free / open-source | vibe-coded-400k-app-claude-code |
| **Playwright MCP** | Browser automation MCP server (Microsoft open-source); used for structured scraping of Meta Ads Library and web pages; install via `git clone github.com/microsoft/playwright-mcp` | Free/open-source | higgsfield-mcp-instagram-ad-campaign |
| **Codex** (OpenAI) | General-purpose knowledge work orchestrator with time-based pricing (5–10 hr/mo at $100/mo); parallel tasks, computer use, browser use, dictation, Chronicle memory | $100/mo | codex-best-software-ever |
| **Hermes Agent** | Open-source self-improving agent with persistent skill library, learning loop, cron scheduling, and multi-platform messaging | Free/open-source | hermes-agent-7-use-cases, hermes-agent-v012-self-maintaining, hermes-agent-seo-content-engine |
| **Harbor** | Open-source GUI agent harness (org-chart view, knowledge bases, env vars) for multi-agent orchestration; built on OpenClaw | Open-source | greg-isenberg-ai-agents-run-business |
| **Claude Routines** | Native Claude (web/desktop) scheduled agent feature via `/schedule` command; 15 daily slots on Max, 5 on Pro | Claude Max/Pro | claude-routines-scheduled-agents |

---

## Image Generation

| Tool | Description | Cost/Tier | Reports |
|------|-------------|-----------|---------|
| **GPT-image-2** | OpenAI photorealistic image generation; used for product images, UI mockups, and 6-panel cinematic storyboards; near-perfect text rendering | OpenAI paid / Included via Higgsfield / fal.ai | claude-higgsfield-mcp-marketing, codex-best-software-ever, claude-higgsfield-content-creation-storyboard, claude-cinematic-ads-agent-fal, seedance-ugc-skill-gpt-image-capcut, higgsfield-mcp-claude-all-ai-models |
| **fal.ai** | Model-as-a-service aggregator; hosts GPT-image-2 and C-dance 2.0 APIs; "Copy content for LLMs" pattern gives agents full API access without manual integration | Usage-based | claude-cinematic-ads-agent-fal, claude-code-seedance-fal-promotional-video, higgsfield-mcp-claude-all-ai-models |
| **wavespeed.ai** | Pay-as-you-go model-as-a-service provider; hosts same AI models as fal.ai (Seedance, GPT Image 2, etc.); alternative to Higgsfield subscription for cost-conscious users | Usage-based | higgsfield-mcp-claude-all-ai-models |
| **Nano Banana Pro** | Alternative image generation model for character reference sheets; available via Higgsfield | Included via Higgsfield | claude-higgsfield-content-creation-storyboard |
| **Flux** (via ComfyUI) | Local image generation model; accessed via Hermes News Portal subscription | Paid (subscription) | hermes-agent-7-use-cases |
| **ComfyUI** | Local image generation runner; bundled with Hermes v0.12 (hardware-gated); supports Flux | Free (local) | hermes-agent-7-use-cases, hermes-agent-v012-self-maintaining |

---

## Video Generation & Editing

| Tool | Description | Cost/Tier | Reports |
|------|-------------|-----------|---------|
| **Hyperframes** | Open-source video rendering from HTML/code; V2 adds subtitles, floating card animations, 3D assets, color keying, and Hyperframes Studio (localhost timeline UI) | Free / open-source | claude-video-editing-hyperframes, hyperframes-v2-video-editing-bit-framework |
| **Hyperframes Studio** | Localhost timeline UI for previewing and manually fine-tuning Hyperframes renders before final export | Included with Hyperframes | hyperframes-v2-video-editing-bit-framework |
| **fast-whisper** | Audio transcription with word-level timestamps; used under the hood by Hyperframes V2 raw footage pipeline | Free / open-source | hyperframes-v2-video-editing-bit-framework |
| **Nano Banana 2** | Generates logo/character images with green screen backgrounds for 3D logo workflow; also used for brand book generation; available via Higgsfield | Via Higgsfield | hyperframes-v2-video-editing-bit-framework, higgsfield-mcp-claude-all-ai-models |
| **Kling 3.0** | Animates green-screen images into rotating 3D objects; used for 3D logo generation in Hyperframes pipeline | Via Higgsfield | hyperframes-v2-video-editing-bit-framework |
| **Remotion** | Programmatic video rendering framework; React-based, version-controlled; used by Hyperframes, Claude Code built-in skill, and Codex for motion graphics generation | Open-source | claude-video-editing-hyperframes, claude-capcut-animations-remotion, stop-using-claude-start-codex-isenberg |
| **Higgsfield MCP** | Claude Code MCP connector to Higgsfield AI's image + video generation platform; connect via Claude desktop Settings → Connectors → Add Custom Connector (remote URL: `https://mcp.higgsfield.ai/mcp`); also accessible via `/mcp` in IDE terminal | Higgsfield subscription | claude-higgsfield-mcp-marketing, higgsfield-mcp-instagram-ad-campaign, claude-higgsfield-content-creation-storyboard, higgsfield-mcp-claude-all-ai-models |
| **C-dance 2.0** (aka Seedance 2.0 / SeaDance 2.0) | Cinematic video generation model by ByteDance; best current model for motion/cinematic scenes; natively understands storyboard format; face detection policy requires blurred-face workaround; marketed by Higgsfield as SeaDance 2.0 | Included in Higgsfield / fal.ai | claude-higgsfield-mcp-marketing, claude-higgsfield-content-creation-storyboard, claude-cinematic-ads-agent-fal, claude-seedance-ugc-autopilot-arcads, seedance-ugc-skill-gpt-image-capcut, claude-code-seedance-fal-promotional-video, seedance-prompting-omni-reference-genhq, claude-higgsfield-ugc-skill-marketing-studio, claude-cowork-arcads-dropshipping-ugc, higgsfield-mcp-solo-app-marketing-ads, claude-arcads-autonomous-ad-engine-pink, claude-browser-starop-ugc-five-formats, higgsfield-mcp-claude-all-ai-models |
| **Higgsfield Marketing Studio** | UGC category management + avatar library within Higgsfield | Included | claude-higgsfield-mcp-marketing, claude-higgsfield-ugc-skill-marketing-studio, higgsfield-mcp-solo-app-marketing-ads |
| **ffmpeg** | Video processing CLI; used by `/watch` skill for frame extraction, and by Remotion/Hyperframes | Free | claude-video-editing-hyperframes |
| **CapCut** | Mobile/desktop video editing app; used for post-production of Seedance clips — arranging, adding captions, color grading, export | Free/Pro | seedance-ugc-skill-gpt-image-capcut |

---

## UI & Design

| Tool | Description | Cost/Tier | Reports |
|------|-------------|-----------|---------|
| **Open Design** | Free open-source Claw Design clone (22k+ GitHub stars); 71 built-in design systems, bring-your-own LLM, HTML output | Free/open-source | open-design-vibe-coding-ui |
| **design.md** | Google open-source format for serializing a complete design system (colors, typography, spacing, animation) into a markdown file; attach to any agent for drift-free multi-medium UI | Free/open-source | design-md-ai-consistent-ui-generation |
| **Variant.com** | Community for discovering and remixing design.md files; one-click remix to find aesthetics | Free | design-md-ai-consistent-ui-generation |
| **Google Stitch** | Google's AI UI generation tool; works with design.md format | Google (beta) | design-md-ai-consistent-ui-generation |
| **21st.dev** | HTML component library; source of animation components (globes, shaders) for Hyperframes injection | Free | hyperframes-v2-video-editing-bit-framework |
| **TouchDesigner MCP** | Generative visuals / interactive media tool; bundled with Hermes v0.12 | TouchDesigner license | hermes-agent-v012-self-maintaining |

---

## Analytics & Data

| Tool | Description | Cost/Tier | Reports |
|------|-------------|-----------|---------|
| **PostHog** | Product analytics; used as data feed for marketing agents and product briefs | Free tier / paid | greg-isenberg-ai-agents-run-business, claude-routines-scheduled-agents |
| **Airtable** | Kanban board for tracking ad generation variations, market research, and generated assets in autopilot ad pipelines | Free tier / paid | claude-higgsfield-content-creation-storyboard |
| **Dribbble** | Design inspiration gallery; used to find iOS app UI references; drag screenshot into Claude Code as design context | Free | vibe-coded-400k-app-claude-code |
| **Sensor Tower** | App store analytics; used to identify profitable niche app categories and validate revenue benchmarks ($40K–$500K/mo) | Paid | vibe-coded-400k-app-claude-code |
| **Stripe** | Revenue data connector for monthly revenue pulse routines | % of revenue | claude-routines-scheduled-agents |

---

## Memory, Knowledge & Vector Databases

| Tool | Description | Cost/Tier | Reports |
|------|-------------|-----------|---------|
| **Pinecone** | Vector database; used for portfolio intelligence (trained on 132 investments) and business data | Paid | greg-isenberg-ai-agents-run-business |
| **Mem Zero** | Semantic memory layer; pluggable into Hermes Agent for long-term natural language retrieval over conversation history | Usage-based | self-evolving-agents-memory-ai-jason |
| **Qdrant** | Vector database alternative to Pinecone; used as semantic memory backend in Hermes Agent | Free/paid | self-evolving-agents-memory-ai-jason |
| **SQLite** | Local database for raw conversation history (cold memory layer); Hermes Agent stores all sessions for searchable retrieval | Free | self-evolving-agents-memory-ai-jason |
| **Gbrain** | Markdown-based knowledge base / second brain; receives nightly transcript uploads | Paid | greg-isenberg-ai-agents-run-business |
| **Chronicle** | Screenshot-based persistent memory built into Codex; raises privacy concerns | Included in Codex | codex-best-software-ever |
| **Notion** | Knowledge base for meeting digests, product briefs, revenue reports from Claude Routines | Free / paid | claude-routines-scheduled-agents |
| **GitHub** (as knowledge base) | Version-controlled knowledge base for Claude Routines outputs (personal brand repo, content HQ) | Free | claude-routines-scheduled-agents |
| **NotebookLM** | Content research input; used by weekly content research routine | Free | claude-routines-scheduled-agents |

---

## Meeting & Communication

| Tool | Description | Cost/Tier | Reports |
|------|-------------|-----------|---------|
| **Fathom** | Call recording + transcript API; feeds meeting digest and self-interview routines; recommended as a quick-win tool in AI audits | Free tier / Paid | claude-routines-scheduled-agents, ai-audit-boomer-business-corey-ganim |
| **Fireflies** | Meeting recording + transcript API; feeds nightly cron → vector DB pipeline | Paid | greg-isenberg-ai-agents-run-business |
| **Slack** | Output channel for daily founder brief and DevOps alerts | Paid | hermes-agent-7-use-cases, claude-routines-scheduled-agents |
| **Google Meet** (Hermes) | Hermes v0.12 joins Meet calls as participant, transcribes, speaks, generates follow-ups | Google account | hermes-agent-v012-self-maintaining |
| **Spotify** (Hermes) | 7 native tools for playback, search, queue, playlist, device selection; can wire to cron | Spotify account | hermes-agent-v012-self-maintaining |

---

## AI Consulting & Client Delivery

| Tool | Description | Cost/Tier | Reports |
|------|-------------|-----------|---------|
| **Retell AI** | Voice agent platform; hosts intake agents that conduct structured discovery interviews with clients, pipe transcripts to report agents | Usage-based | ai-audit-boomer-business-corey-ganim |
| **Gamma** | AI-powered document/slideshow creation; auto-populates branded audit report templates from `.docx` uploads | Paid (SaaS) | ai-audit-boomer-business-corey-ganim |
| **Futurepedia** | Curated AI tool directory; Claude searches it to find off-the-shelf solutions matching client pain points | Free | ai-audit-boomer-business-corey-ganim |
| **GoHighLevel** | CRM + AI employee platform; sold as upsell to SMB clients; includes 24/7 AI phone agent for lead capture | SaaS subscription | ai-audit-boomer-business-corey-ganim |

---

## Social Media & Content Scheduling

| Tool | Description | Cost/Tier | Reports |
|------|-------------|-----------|---------|
| **Blotato** | Social media scheduling + infographic generation with Claude MCP connector; called directly from Claude Cowork to generate visuals and schedule posts without leaving chat | Paid | claude-cowork-social-media-blotato, claude-code-content-team-11-skills |
| **Buffer** | Social media scheduling output for some platforms; alternative to Blotato for distribution | Freemium | claude-cowork-social-media-blotato |

---

## Research & Web Intelligence

| Tool | Description | Cost/Tier | Reports |
|------|-------------|-----------|---------|
| **Perplexity** | Real-time research API; used for talking point extraction with current stats and recent news | API (paid) | claude-code-content-team-11-skills |
| **Firecrawl** | URL content extraction and web scraping API; used for repurposing web content into social posts | API (paid) | claude-code-content-team-11-skills |
| **X API** | Twitter/X analytics and post data; used in monthly feedback loop to pull performance metrics for skill-update analysis | Free tier / paid | claude-code-content-team-11-skills |

---

## SEO Tools

| Tool | Description | Cost/Tier | Reports |
|------|-------------|-----------|---------|
| **Ahrefs** | SEO analysis platform; backlink tracking, keyword research, competitor analysis, domain rating; used to measure SEO impact of Hermes content engine | Paid | hermes-agent-seo-content-engine |

---

## Advertising & Marketing Platforms

| Tool | Description | Cost/Tier | Reports |
|------|-------------|-----------|---------|
| **Meta Ads** | Autonomous ad management by marketing agent; PostHog data integration + multivariate testing | Ad spend | greg-isenberg-ai-agents-run-business |
| **Meta Ads Library** | Public database of all active Meta ads; scraped via Playwright MCP for competitive creative research | Free | higgsfield-mcp-instagram-ad-campaign |
| **Reddit Ads** | Autonomous ad management alongside Meta | Ad spend | greg-isenberg-ai-agents-run-business |
| **Shopify** | Target platform for website rebrand via Claude Code + Higgsfield brand assets | Shopify subscription | claude-higgsfield-mcp-marketing |
| **Arcads** | AI actor video generation platform with public API; used for bulk UGC ad generation with demographically-matched actors; Pro plan ($200/mo) required for API access | Pro ~$200/mo | claude-cowork-arcads-dropshipping-ugc, claude-seedance-ugc-autopilot-arcads, claude-arcads-autonomous-ad-engine-pink |
| **Starop** | AI video generation platform with 13 UGC ad formats; brand DNA auto-extraction from product URL; Claude Chrome extension drives it via browser automation | Paid | claude-browser-starop-ugc-five-formats, claude-cowork-arcads-dropshipping-ugc |

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
| **Claude Chrome Extension** | Official Claude browser extension enabling Claude to control Chrome; used with Claude Desktop code tab to automate UI interactions in web apps (Arcads, Starop) without API access | Free | claude-browser-starop-ugc-five-formats, claude-arcads-autonomous-ad-engine-pink, claude-cowork-arcads-dropshipping-ugc |

---

## Claude Code Skills (npm-installable)

| Tool | Description | Cost/Tier | Reports |
|------|-------------|-----------|---------|
| **Claude Ads Skill** | Open-source Claude Code skill covering 6 ad platforms (Google, Meta, YouTube, LinkedIn, TikTok, Microsoft) with 190+ audit checks, industry templates, parallel subagent delegation; install via npm | Free (GitHub) | claude-ads-skill-multi-platform-planning |
| **Hyperframes skill** | Free Claude Code skill for AI video generation (script → voiceover → animated slides → render); integrates with Hermes agent | Free | hermes-agent-seo-content-engine |

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

## Trading & Quantitative Finance

| Tool | Description | Cost/Tier | Reports |
|------|-------------|-----------|---------|
| **Streamlit** | Python web app framework; renders interactive dashboards locally in browser; used for all trading system UIs | Free/open-source | claude-code-trading-quant-systems |
| **Yahoo Finance (yfinance)** | Free market data library for historical price data; used for regime detection and backtesting | Free | claude-code-trading-quant-systems |
| **Plotly** | Interactive charting library; Monte Carlo fan charts, correlation heatmaps, equity curves | Free/open-source | claude-code-trading-quant-systems |
| **Alpaca** | API-first broker with free paper trading tier; used for automated trade execution | Free (paper) / Commission | claude-code-trading-quant-systems |
| **IBKR (Interactive Brokers)** | High-volume broker API for serious automated trading | Commission-based | claude-code-trading-quant-systems |
| **Google News** | Free news source for sentiment analysis pipeline; scraped for ticker-specific sentiment scoring | Free | claude-code-trading-quant-systems |

---

## No-Code Site Builders & SEO

| Tool | Description | Cost/Tier | Reports |
|------|-------------|-----------|---------|
| **Hostinger Horizons** | AI-powered no-code website builder; builds full working web apps from text prompts; includes domain + hosting | Paid (~$3–10/mo) | utility-site-passive-income-hostinger |
| **Google AdSense** | Display ad network; monetizes page views automatically (RPM model, no clicks needed) | Free (revenue share) | utility-site-passive-income-hostinger |
| **Clearer** | SEO keyword research tool with SERP analysis; surfaces queries where new/low-trust sites already rank on page 1 | Paid (SaaS) | utility-site-passive-income-hostinger |
| **SimilarWeb** | Chrome extension for traffic estimation on competitor sites | Free tier | utility-site-passive-income-hostinger |

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
| Instagram ad campaign from single product image | Playwright MCP (competitive research) + Higgsfield MCP (generation) + Claude Code |
| UI prototyping with design system constraints | Open Design |
| Parallel long-running autonomous tasks | Codex |
| Product analytics → autonomous ad optimization | PostHog → marketing agent (Harbor) |
| Meeting transcript → structured digest | Fathom/Fireflies → Claude Routines → Notion |
| Portfolio/business intelligence via natural language | Fireflies → Pinecone → Gbrain |
| Cinematic ad from product image | fal.ai (GPT-image-2 storyboard → C-dance 2.0 video) via Claude Code skill |
| Mobile app with no coding experience | Claude chat (generate prompt) → Claude Code + React Native + Expo → Expo Go |
| Motion graphics / animated overlays | Claude Code + Remotion skill |
| Automated ad generation on a schedule | Claude Routines (remote) + Higgsfield MCP |
| Niche app market research | Sensor Tower → find single-feature apps → validate revenue |
| UGC video ads for physical products (API-driven, 200-500/mo) | Arcads Pro + CLAUDE.md brain + Claude Cowork |
| UGC video ads in browser (13 formats, no API required) | Claude Chrome Extension + Starop + Claude Code tab |
| Seedance video generation without browser UI | fal.ai API + Claude Code (paste LLM docs to configure) |
| Omni reference multi-ingredient video (character + location + product) | Higgsfield SeaDance 2.0 + Claude video prompt builder skill |
| Autonomous SEO content engine with daily publishing | Hermes Agent + Hyperframes + HeyGen + Netlify/WordPress |
| Multi-platform ad strategy PDF from website URL | Claude Code + Claude Ads skill (npm install) |
| UGC ad iteration and improvement feedback | Gemini (upload video file → frame-by-frame analysis) |
