# AI Workflows — Master Tool Registry

Auto-generated from 64 video reports. Each entry includes cost/tier, role, and which reports reference it.

---

## Agent Runtimes & Orchestrators

| Tool | Description | Cost/Tier | Reports |
|------|-------------|-----------|---------|
| **Claude Code** | Primary CLI coding agent, orchestrates MCP servers, skills, and hooks | Paid (Claude Max) | all |
| **Expo / Expo Go** | React Native development toolchain; Expo Go enables phone testing without App Store submission; QR code → live app on device | Free / open-source | vibe-coded-400k-app-claude-code |
| **React Native** | Cross-platform mobile app framework; Claude Code sets up project scaffold automatically | Free / open-source | vibe-coded-400k-app-claude-code |
| **Playwright MCP** | Browser automation MCP server (Microsoft open-source); used for structured scraping of Meta Ads Library and web pages; install via `git clone github.com/microsoft/playwright-mcp` | Free/open-source | higgsfield-mcp-instagram-ad-campaign |
| **Codex** (OpenAI) | General-purpose knowledge work orchestrator with time-based pricing (5–10 hr/mo at $100/mo); parallel tasks, computer use, browser use, dictation, Chronicle memory | $100/mo | codex-best-software-ever, codex-infinite-canvas-magic-path, codex-slash-goal-ios-app-build |
| **Hermes Agent** | Open-source self-improving agent with persistent skill library, learning loop, cron scheduling, and multi-platform messaging | Free/open-source | hermes-agent-7-use-cases, hermes-agent-v012-self-maintaining, hermes-agent-seo-content-engine, hermes-agent-desktop-app-open-claw, hermes-workspace-agent-command-center, solopreneur-16-agent-harness, hermes-claude-code-os-bridge, hermes-hyperframes-video-generation |
| **Hermes Workspace** | Free open-source browser dashboard (localhost:3000) for Hermes Agent management: chat, memory, skills, kanban, cron jobs, 17-agent swarm mode, 3D office view, smart routing | Free/open-source | hermes-workspace-agent-command-center |
| **OpenClaw** | Underlying agent framework wrapped by Hermes desktop app; also available as standalone web app | Free/open-source | hermes-agent-desktop-app-open-claw |
| **GenSpark Claw** | Cloud-hosted OpenClaw instance; build and run AI agents from a browser with no local setup required | Free tier / paid | genspark-claw-7-ai-business-ideas |
| **Anti-Gravity** | Google's VS Code fork with improved Claude Code extension integration; used for React Native + Expo mobile development | Free | mobile-app-claude-code-react-native-expo-course |
| **EAS Build** | Expo Application Services; cloud build service for producing App Store and Play Store binaries without local Xcode | Free tier / paid | mobile-app-claude-code-react-native-expo-course |
| **Harbor** | Open-source GUI agent harness (org-chart view, knowledge bases, env vars) for multi-agent orchestration; built on OpenClaw | Open-source | greg-isenberg-ai-agents-run-business |
| **Claude Routines** | Native Claude (web/desktop) scheduled agent feature via `/schedule` command; 15 daily slots on Max, 5 on Pro | Claude Max/Pro | claude-routines-scheduled-agents |
| **Magic Path** | AI design canvas tool; connects to Codex via skill install; displays all designs in infinite canvas; supports component annotation and editing | Paid (subscription) | codex-infinite-canvas-magic-path |
| **Dogora** | Open-source self-hosted voice AI platform; Docker Compose deploy; visual workflow builder for voice agents; bring-your-own LLM/STT/TTS; full tracing (transcript, tool calls, state changes, recording) | Free/open-source | dogora-open-source-voice-ai-platform |
| **Claude Design** | Anthropic's AI-native design tool; code (HTML/CSS/JS) as universal medium; creates animated videos, slide decks, landing pages, mobile apps, design systems; clarifying questions before generation; built-in playtesting with screenshots | Claude subscription | claude-design-five-use-cases |

---

## Image Generation

| Tool | Description | Cost/Tier | Reports |
|------|-------------|-----------|---------|
| **GPT-image-2** | OpenAI photorealistic image generation; used for product images, UI mockups, 6-panel cinematic storyboards, and UGC avatar generation at 2K quality; near-perfect text rendering | OpenAI paid / Included via Higgsfield / fal.ai | claude-higgsfield-mcp-marketing, codex-best-software-ever, claude-higgsfield-content-creation-storyboard, claude-cinematic-ads-agent-fal, seedance-ugc-skill-gpt-image-capcut, higgsfield-mcp-claude-all-ai-models, claude-seedance-ugc-ads-alex-robinson |
| **fal.ai** | Model-as-a-service aggregator; hosts GPT-image-2 and C-dance 2.0 APIs; "Copy content for LLMs" pattern gives agents full API access without manual integration | Usage-based | claude-cinematic-ads-agent-fal, claude-code-seedance-fal-promotional-video, higgsfield-mcp-claude-all-ai-models |
| **wavespeed.ai** | Pay-as-you-go model-as-a-service provider; hosts same AI models as fal.ai (Seedance, GPT Image 2, etc.); alternative to Higgsfield subscription for cost-conscious users | Usage-based | higgsfield-mcp-claude-all-ai-models |
| **Nano Banana Pro** | Alternative image generation model for character reference sheets; available via Higgsfield | Included via Higgsfield | claude-higgsfield-content-creation-storyboard, claude-nanobanana-instagram-carousels, ai-ugc-studio-claude-code-skills |
| **Flux** (via ComfyUI) | Local image generation model; accessed via Hermes News Portal subscription | Paid (subscription) | hermes-agent-7-use-cases |
| **ComfyUI** | Local image generation runner; bundled with Hermes v0.12 (hardware-gated); supports Flux | Free (local) | hermes-agent-7-use-cases, hermes-agent-v012-self-maintaining |

---

## Video Generation & Editing

| Tool | Description | Cost/Tier | Reports |
|------|-------------|-----------|---------|
| **Hyperframes** | Open-source video rendering from HTML/code; V2 adds subtitles, floating card animations, 3D assets, color keying, and Hyperframes Studio (localhost timeline UI) | Free / open-source | claude-video-editing-hyperframes, hyperframes-v2-video-editing-bit-framework, hermes-hyperframes-video-generation |
| **Hyperframes Studio** | Localhost timeline UI for previewing and manually fine-tuning Hyperframes renders before final export | Included with Hyperframes | hyperframes-v2-video-editing-bit-framework |
| **fast-whisper** | Audio transcription with word-level timestamps; used under the hood by Hyperframes V2 raw footage pipeline | Free / open-source | hyperframes-v2-video-editing-bit-framework |
| **Nano Banana 2** | Generates logo/character images with green screen backgrounds for 3D logo workflow; also used for brand book generation and clean product renders (white background removal); available via Higgsfield | Via Higgsfield | hyperframes-v2-video-editing-bit-framework, higgsfield-mcp-claude-all-ai-models, claude-seedance-ugc-ads-alex-robinson, claude-nanobanana-instagram-carousels |
| **Kling 3.0** | Animates green-screen images into rotating 3D objects; used for 3D logo generation in Hyperframes pipeline | Via Higgsfield | hyperframes-v2-video-editing-bit-framework |
| **Remotion** | Programmatic video rendering framework; React-based, version-controlled; used by Hyperframes, Claude Code built-in skill, and Codex for motion graphics generation | Open-source | claude-video-editing-hyperframes, claude-capcut-animations-remotion, stop-using-claude-start-codex-isenberg |
| **Higgsfield MCP** | Claude Code MCP connector to Higgsfield AI's image + video generation platform; connect via Claude desktop Settings → Connectors → Add Custom Connector (remote URL: `https://mcp.higgsfield.ai/mcp`); also accessible via `/mcp` in IDE terminal | Higgsfield subscription | claude-higgsfield-mcp-marketing, higgsfield-mcp-instagram-ad-campaign, claude-higgsfield-content-creation-storyboard, higgsfield-mcp-claude-all-ai-models, claude-seedance-ugc-ads-alex-robinson |
| **C-dance 2.0** (aka Seedance 2.0 / SeaDance 2.0) | Cinematic video generation model by ByteDance; best current model for motion/cinematic scenes; natively understands storyboard format; face detection policy requires blurred-face workaround; marketed by Higgsfield as SeaDance 2.0 | Included in Higgsfield / fal.ai | claude-higgsfield-mcp-marketing, claude-higgsfield-content-creation-storyboard, claude-cinematic-ads-agent-fal, claude-seedance-ugc-autopilot-arcads, seedance-ugc-skill-gpt-image-capcut, claude-code-seedance-fal-promotional-video, seedance-prompting-omni-reference-genhq, claude-higgsfield-ugc-skill-marketing-studio, claude-cowork-arcads-dropshipping-ugc, higgsfield-mcp-solo-app-marketing-ads, claude-arcads-autonomous-ad-engine-pink, claude-browser-starop-ugc-five-formats, higgsfield-mcp-claude-all-ai-models, claude-seedance-ugc-ads-alex-robinson |
| **Higgsfield Marketing Studio** | UGC category management + avatar library within Higgsfield | Included | claude-higgsfield-mcp-marketing, claude-higgsfield-ugc-skill-marketing-studio, higgsfield-mcp-solo-app-marketing-ads |
| **ffmpeg** | Video processing CLI; used by `/watch` skill for frame extraction, and by Remotion/Hyperframes | Free | claude-video-editing-hyperframes |
| **CapCut** | Mobile/desktop video editing app; used for post-production of Seedance clips — arranging, adding captions, color grading, speed adjustment, export | Free/Pro | seedance-ugc-skill-gpt-image-capcut, claude-seedance-ugc-ads-alex-robinson |

---

## UI & Design

| Tool | Description | Cost/Tier | Reports |
|------|-------------|-----------|---------|
| **Open Design** | Free open-source Claw Design clone (22k+ GitHub stars); 71 built-in design systems, bring-your-own LLM, HTML output | Free/open-source | open-design-vibe-coding-ui, 9-free-vibe-design-tools-professional-ui |
| **design.md** | Google open-source format for serializing a complete design system (colors, typography, spacing, animation) into a markdown file; attach to any agent for drift-free multi-medium UI | Free/open-source | design-md-ai-consistent-ui-generation |
| **Variant.com** | Community for discovering and remixing design.md files; one-click remix to find aesthetics | Free | design-md-ai-consistent-ui-generation |
| **Google Stitch** | Google's AI UI generation tool; works with design.md format | Google (beta) | design-md-ai-consistent-ui-generation |
| **21st.dev** | HTML component library; source of animation components (globes, shaders) for Hyperframes injection | Free | hyperframes-v2-video-editing-bit-framework |
| **TouchDesigner MCP** | Generative visuals / interactive media tool; bundled with Hermes v0.12 | TouchDesigner license | hermes-agent-v012-self-maintaining |
| **Impeccable Style** | Claude skill (23 commands) that detects and fixes 37 AI slop patterns in UI/web design; v3 includes Chrome extension for live site scanning and "tweak" slider panel for interactive fine-tuning | Free (GitHub) | impeccable-v3-ai-slop-detection-website-design, 9-free-vibe-design-tools-professional-ui |
| **Referral Styles** | Library of 2,000 design system markdown files; inject into any agent to enforce professional design constraints | Free | 9-free-vibe-design-tools-professional-ui |
| **KD Icons** | AI vector icon generator; describe an icon in natural language and receive an SVG | Free tier / paid | 9-free-vibe-design-tools-professional-ui |
| **Design Spells** | Curated gallery of real-world UI pattern inspiration for vibe-coded projects | Free | 9-free-vibe-design-tools-professional-ui |
| **SVGL** | Tech company SVG logo library; copy-paste for social proof sections | Free | 9-free-vibe-design-tools-professional-ui |
| **Cult UI** | ShadCN-based component library with pre-built blocks including onboarding flows and modals | Free | 9-free-vibe-design-tools-professional-ui |
| **Untitled UI** | Largest open-source React/Tailwind component library; marketing templates require pro plan | Free (pro for templates) | 9-free-vibe-design-tools-professional-ui |
| **Banana Pro Director** | Claude skill for structured image/character prompt generation; injects lighting, camera angle, and style tags | Free (GitHub) | banana-pro-cinema-worldbuilder-claude-skills |
| **Cinema Worldbuilder** | Claude skill with 5 video prompt modes (Symbol, Camera, Scene, Narrative, World); outputs multi-part video prompts with timing and motion cues | Free (GitHub) | banana-pro-cinema-worldbuilder-claude-skills |

---

## MCP Servers

| Tool | Description | Cost/Tier | Reports |
|------|-------------|-----------|---------|
| **Mobbin MCP** | Single `search_screens` tool accessing Mobbin's database of hundreds of thousands of real app UI screenshots; use for design research, mood boards, trend analysis, pattern critique | $10-15/month (Mobbin subscription required) | mobbin-mcp-design-inspiration-claude, codex-infinite-canvas-magic-path |
| **Zapia MCP** | Gmail and Calendar MCP integration; principle of least access — draft-only mode, no send permission | Freemium | hermes-claude-code-os-bridge |

---

## Data & APIs

| Tool | Description | Cost/Tier | Reports |
|------|-------------|-----------|---------|
| **Apollo.io** | B2B lead database and scraping API; used for lead generation (e.g., 20 roofing companies in Austin); integrate via API key in Hermes Agent | Usage-based | hermes-claude-code-os-bridge |

---

## Design & UI Tools

| Tool | Description | Cost/Tier | Reports |
|------|-------------|-----------|---------|
| **Obsidian** | Local markdown knowledge management app; connected to Hermes Agent as persistent memory store across sessions | Free / commercial | hermes-claude-code-os-bridge |
| **Mobbin** | UI screenshot database for real mobile/web app designs; used as design reference for inspiration and pattern research | $10-15/month | mobbin-mcp-design-inspiration-claude |

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
| **Retell AI** | Voice agent platform; hosts intake agents, outbound calling, and multi-agent voice networks with transfer functions; supports single-prompt and conversational flow agents | Usage-based | ai-audit-boomer-business-corey-ganim, ai-agency-meta-ads-followup-automation-build, retell-multi-agent-voice-systems-split-guide, retell-voice-agent-testing-framework, retell-conversational-flow-complete-guide |
| **GPT-4.1** | OpenAI's best model for simulation evaluator in Retell testing; used as the LLM powering test scenario evaluation — more accurate than GPT-4.1 mini but more expensive | OpenAI API (paid) | retell-voice-agent-testing-framework |
| **Gamma** | AI-powered document/slideshow creation; auto-populates branded audit report templates from `.docx` uploads | Paid (SaaS) | ai-audit-boomer-business-corey-ganim |
| **Futurepedia** | Curated AI tool directory; Claude searches it to find off-the-shelf solutions matching client pain points | Free | ai-audit-boomer-business-corey-ganim |
| **GoHighLevel** | CRM + AI employee platform; sold as upsell to SMB clients; includes 24/7 AI phone agent for lead capture and SMS/email nurture sequences | SaaS subscription | ai-audit-boomer-business-corey-ganim, ai-agency-meta-ads-followup-automation-build |
| **n8n** | Workflow automation platform; used as webhook receiver and routing backbone for Meta lead form → CRM → voice agent pipelines | Open-source / paid | claude-routines-scheduled-agents, ai-agency-meta-ads-followup-automation-build |
| **Facebook Lead Forms** | Native Meta ad format that fires a webhook on submission without requiring a landing page; triggers speed-to-lead pipelines | Free (part of Meta Ads) | ai-agency-meta-ads-followup-automation-build |

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
| **Perplexity** | Real-time research API; used for talking point extraction with current stats and recent news; also used as AI code-generation assistant (paste request/response examples → generate Python wrapper) | API (paid) | claude-code-content-team-11-skills, scrape-website-video-api |
| **Browser DevTools** | Native browser developer tools for inspecting network requests, XHR/Fetch calls, and page structure; used to reverse-engineer web app API flows | Free (built into all browsers) | scrape-website-video-api |
| **Firecrawl** | URL content extraction and web scraping API; used for repurposing web content into social posts | API (paid) | claude-code-content-team-11-skills |
| **X API** | Twitter/X analytics and post data; used in monthly feedback loop to pull performance metrics for skill-update analysis | Free tier / paid | claude-code-content-team-11-skills |

---

## SEO Tools

| Tool | Description | Cost/Tier | Reports |
|------|-------------|-----------|---------|
| **Ahrefs** | SEO analysis platform; backlink tracking, keyword research, competitor analysis, domain rating; also used for App Store keyword validation (popularity + difficulty scoring) | Paid | hermes-agent-seo-content-engine, aso-masterclass-app-store-optimization-habit-kit |
| **App Store Connect** | Apple's developer portal; includes product page optimization tool for A/B testing screenshots; required for App Store publishing | Free (Apple Developer account $99/yr) | aso-masterclass-app-store-optimization-habit-kit |

---

## Advertising & Marketing Platforms

| Tool | Description | Cost/Tier | Reports |
|------|-------------|-----------|---------|
| **Meta Ads** | Autonomous ad management by marketing agent; PostHog data integration + multivariate testing | Ad spend | greg-isenberg-ai-agents-run-business |
| **Meta Ads Library** | Public database of all active Meta ads; scraped via Playwright MCP for competitive creative research | Free | higgsfield-mcp-instagram-ad-campaign |
| **Meta Ads CLI** | Official Meta command-line tool for programmatic ad data access; connects to Claude Code via `.env` token for natural language reporting and HTML dashboards; never-expiring system user tokens; read-only | Free (official Meta tool) | meta-ads-cli-claude-code-setup |
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
| **Impeccable Style skill** | Claude Code slash command skill with 23 commands targeting 37 AI slop patterns; v3 adds Chrome extension + "tweak" slider panel + "bake" patch output | Free (GitHub) | impeccable-v3-ai-slop-detection-website-design, 9-free-vibe-design-tools-professional-ui |

---

## CLI Tools for Claude Code

| Tool | Description | Cost/Tier | Reports |
|------|-------------|-----------|---------|
| **Printing Press** | CLI factory and library of 50+ pre-built CLIs for Claude Code; generates Go binaries from natural language descriptions; CLIs use 35x fewer tokens than MCPs with near-100% reliability | Free / paid tiers (printingpress.dev) | printing-press-cli-factory-claude-code |
| **Go** | Compilation runtime required by Printing Press to build CLI binaries; must be installed before using Printing Press custom CLI builder | Free/open-source | printing-press-cli-factory-claude-code |

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

## Security & Code Quality

| Tool | Description | Cost/Tier | Reports |
|------|-------------|-----------|---------|
| **Claude Security** | AI-powered codebase security scanning built into Claude Enterprise; scans entire repos, traces data flows across files, validates findings before surfacing (eliminates false positives), generates patches for approved issues; enterprise beta as of 2026-05 | Claude Enterprise | claude-security-enterprise-code-scanning |
| **Snyk** | Legacy static analysis security tool; pattern-based vulnerability detection; replaced/supplemented by Claude Security in many workflows | Paid SaaS | claude-security-enterprise-code-scanning |
| **SonarQube** | Legacy code quality and security scanning platform; pattern-based; compared unfavorably to reasoning-based Claude Security approach | Free/Paid | claude-security-enterprise-code-scanning |

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
| Sell AI automation services to SMBs | "Operational waste elimination" framing + discovery call ROI formula + GoHighLevel + n8n delivery |
| Speed-to-lead automation for client lead gen | Meta lead forms → n8n → GoHighLevel → Retell AI (60-second outbound call) |
| Voice agent prompting for Retell AI | 6-part GPT-4.1 playbook structure (Role → Personality → Context → Instructions → Stages → Examples) |
| Decide when to split a Retell voice agent | Apply 3-of-4 rule (goal / tone / toolset / knowledge scope); split if 3+ differ |
| Find AI agent business ideas quickly | GenSpark Claw + messy feed → mispriced asset → trigger → buyer → monetize framework |
| Better image/video prompts without manual expertise | Banana Pro Director (image) + Cinema Worldbuilder (video) Claude skills |
| Eliminate AI slop from vibe-coded UI | Impeccable v3 Chrome scan → Claude Code fix → tweak sliders → bake patch |
| Professional design system for vibe-coded project | Referral Styles (2,000 markdown design systems) + Impeccable teach + Cult UI components |
| Natural language Meta ad reporting without Ads Manager | Meta Ads CLI + .env token + Claude Code → HTML dashboards |
| High-frequency Claude Code agent tools without MCP overhead | Printing Press CLIs (35x token savings; Go binaries; printingpress.dev) |
| Build mobile app from zero with no coding experience | Anti-Gravity IDE + Claude Code + Expo + React Native + Expo Go testing |
| App Store growth for indie app | ASO: keyword-first naming + Ahrefs validation + screenshot A/B test + happy-moment review prompt |
| Local agent management without terminal | Hermes Workspace (localhost:3000) or Hermes desktop app (one-click installer) |
| Run many parallel agent tasks simultaneously | Hermes Workspace swarm mode + smart routing (complex → Claude, simple → local) |
| Visual outputs for stakeholders without Gamma/PowerPoint | Claude Code HTML slides ("build a 2-way interactive HTML page explaining X") |
