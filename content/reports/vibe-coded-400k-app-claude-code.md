---
title: "How I Vibe Coded a $400K/mo App with Claude Code (Full Tutorial)"
channel: Jason Lee
url: https://www.youtube.com/watch?v=hDOUzlJwM1E
date: 2026-05-06
tags: [claude-code, mobile-app, react-native, expo, vibe-coding, app-store]
tools: [Claude Code, React Native, Expo, Expo Go, Anthropic API, Node.js, Dribbble]
use_cases: [mobile-app-development, ios-app-building, ai-powered-app, niche-app-business]
complexity: beginner
workflow_type: manual-assisted
---

## What This Video Demonstrates

Full walkthrough of building a coin identifier iOS app from scratch using Claude Code — no coding experience required. Covers the entire pipeline: design mockup → UI iteration → API integration → phone testing via Expo Go. Uses a real $400K/mo app (CoinInn) as the business model reference, showing how to clone a niche identifier app concept with AI.

## Workflow Steps

### Phase 0 — Niche Research (Business Model)
1. Go to Sensor Tower → search for simple identifier apps (coin, rock, antique, insect)
2. Find apps with single-feature concepts making $40K–$500K/mo
3. Identify the formula: one simple idea + standalone app per niche = recurring subscription revenue
4. Target: find a niche where competitors exist but market isn't saturated

### Phase 1 — Plan Before Prompting
1. Study the target app: identify its 3 core screens/functions
2. Go to **Claude chat** (not Code): paste the App Store link → ask "Give me the features this app has and write me an exact Claude Code prompt to build something similar"
3. Claude generates a detailed, structured prompt with specific UI elements you wouldn't know to describe yourself
4. Copy that prompt for use in Claude Code

### Phase 2 — Build the UI Mockup
1. Open Claude Code desktop app → connect to a local project folder
2. Select model: Sonnet for most tasks, Opus only for complex errors or architecture planning, Haiku for research/data tasks
3. Paste the generated prompt: specify screens, navigation, design style, and request "a complete project I can run and preview in a web browser on localhost"
4. Claude builds the full React Native + Expo project in minutes
5. Preview at localhost → identify broken elements → ask Claude to fix

### Phase 3 — Apply Design Reference
1. Go to Dribbble → search "[category] iOS app" → find a design you like → save image to the project folder Claude has access to
2. In Claude Code: click the file attach button → select the reference image → "Attach as context"
3. Prompt: "Extract the design elements of this screenshot (colors, button styles, contrast, UI element appearance). Revise the mock-up and apply this design to our mobile app."
4. Claude redesigns the UI to match the reference aesthetic without moving elements
5. Use the built-in preview pane (right-click → Preview) to review without switching to Chrome
6. Use the cursor tool in preview to select specific elements → ask Claude to change them (e.g., "change this to green") → no screenshots needed

### Phase 4 — Add AI Functionality (API Integration)
1. Go to platform.claude.com → API Keys → Create Key → name it (e.g., "coin-app") → copy key
2. **Never paste API key directly in chat** — instead ask Claude: "Create a .env file so I can paste in my API key"
3. Claude creates the `.env` file → open it → paste key → save
4. Prompt: "I want to build the camera function. I want to use Claude API to analyze the coins. Please guide me how to do it."
5. Claude installs dependencies, builds backend server, wires camera to API
6. Cost awareness: ~$0.009/scan with Claude Sonnet, ~$0.005/scan with OpenAI — ask Claude to calculate cost breakdown per 1,000 scans

### Phase 5 — Test on Physical Phone (Expo Go)
1. Install **Expo Go** app on iPhone from App Store
2. Ask Claude: "I want to test this on my phone using Expo Go. Please guide. I want to scan a barcode instead of typing the URL."
3. Claude generates a QR code → scan with iPhone camera → app opens in Expo Go
4. Test all features on real device
5. If errors occur (e.g., server 500): go back to Claude → describe the error → Claude diagnoses and fixes (common cause: .env API key path issues)

### Phase 6 — Pre-App Store Checklist (Not shown in detail)
Before publishing, need to add: user authentication, database, payment processing (in-app subscriptions), privacy policy, app icon, onboarding screen — all Apple requirements. Creator provides a free resource doc covering each item that can be fed to Claude for step-by-step guidance.

## Tools Used

| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Claude Code | Builds entire app from plain-English prompts | Claude Max/Pro subscription |
| React Native | Mobile app framework (Claude sets this up automatically) | Free/open-source |
| Expo | Development toolchain for React Native; enables phone testing without App Store | Free/open-source |
| Expo Go | iPhone app for testing React Native apps on device before publishing | Free |
| Anthropic API | Powers the coin analysis AI feature in the app | Usage-based (~$0.009/scan) |
| Node.js | Required backend runtime (one-time install) | Free |
| Dribbble | Design inspiration source for UI reference images | Free |

## Claude Code Integration Points

- **Claude chat → Claude Code handoff**: Use Claude chat to generate the detailed prompt, then paste into Claude Code — leverages Claude's knowledge of good prompts without requiring you to know technical specifics
- **File attachment for design reference**: Drag design screenshots directly into Claude Code prompt → Claude extracts and applies design tokens without manual CSS work
- **Built-in preview + cursor tool**: New Claude Code desktop feature — right-click → Preview → cursor tool lets you select UI elements and request changes without screenshot round-trips
- **`.env` file pattern**: Claude creates and manages the environment file for API keys — keeps credentials out of chat history
- **Error-driven iteration**: Simply describe the error (e.g., "server error 500") → Claude diagnoses and fixes — no need to understand the underlying code

## Key Insight

**Use Claude chat to generate your Claude Code prompt** — pasting an app link into Claude chat and asking it to write a detailed build prompt produces far more specific, implementation-ready instructions than anything you'd write yourself. The prompt Claude writes knows to specify things like "grid of 6-8 mock coins, each with circular photo placeholder" that you'd never think to include.

## Reusable Primitives

- **Niche app research loop**: Sensor Tower → find single-feature apps → identify portfolio companies → validate the formula → pick an underserved niche
- **Claude-chat-to-Claude-Code prompt pipeline**: Paste competitor app URL into Claude chat → get structured build prompt → paste into Claude Code → get working mockup
- **Design reference injection**: Save Dribbble screenshot to project folder → attach as context → "apply this design" → Claude redesigns without breaking layout
- **Expo Go testing loop**: Generate QR code → scan → test on device → report errors → Claude fixes → re-test; no App Store needed during development
- **API cost calculation**: Ask Claude to calculate per-scan costs across Claude vs OpenAI APIs — helps set subscription pricing with real margin data
- **Model tiering strategy**: Sonnet (medium effort) for most tasks → Opus only for complex unsolvable errors → Haiku for research and data tasks

## Limitations / Gotchas

- **App Store publishing not covered**: Video stops at working prototype; authentication, database, payments, and Apple compliance requirements are in a separate free resource — significant additional work
- **API key in .env, not chat**: Pasting API key directly in Claude Code chat is a security risk — always use .env file pattern
- **Expo Go is development only**: The phone testing via Expo Go is not the published app — final App Store submission requires additional Expo build steps (EAS Build) not shown
- **Model matters for hard errors**: Sonnet handles most tasks but complex bugs may require switching to Opus — costs more tokens
- **Business model caveat**: Creator explicitly says don't expect to clone CoinSnap and make $500K immediately — the point is that niche apps can reach these numbers, not that any clone will
- **Web apps / Chrome extensions easier path**: Creator mentions web apps and Chrome extensions skip App Store complexity entirely — worth considering as lower-friction alternative to iOS apps
