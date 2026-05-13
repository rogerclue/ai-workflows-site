---
title: "Build a Mobile App With Claude Code: Full Course (React Native + Expo)"
channel: Nick (Claude Code course)
url: https://www.youtube.com/watch?v=BMMcmmnjrM8
date: 2026-05-12
tags: [claude-code, react-native, expo, mobile-app, vibe-coding]
tools: [Claude Code, Expo, React Native, Anti-Gravity, EAS Build]
use_cases: [mobile-app-development, app-store-publishing]
complexity: beginner
workflow_type: vibe-coding
---

## What This Video Demonstrates

Full course taking viewers from zero to a working mobile app on their phone using Claude Code, Expo, and React Native. Progression: local habit tracker → add API → add database → cloud → auth. Uses Anti-Gravity IDE (Google's VS Code fork) with the Claude Code extension. Key recommendation: build as a web app first, then port to mobile via Expo.

## Workflow Steps

1. Sign up for Claude Pro (sufficient for most development work)
2. Download Anti-Gravity IDE and install the Claude Code VS Code extension
3. Create a project folder and open it in Anti-Gravity
4. Prompt Claude Code to scaffold an Expo + React Native project
5. Develop in browser (web view) for fast iteration — no phone needed for early stages
6. Test on phone via Expo Go app using QR code hot reload
7. Progress through the stack: local storage → REST API → Supabase database → cloud deployment → auth
8. Build for production via EAS Build → submit to App Store or Play Store

## Tools Used

| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Claude Code | Primary development tool throughout; scaffolds projects, writes features, debugs | Paid (Claude Max) |
| Expo | React Native toolchain; Expo Go enables phone testing without App Store submission | Free / open-source |
| React Native | Cross-platform mobile framework; Claude Code scaffolds the entire project | Free / open-source |
| Anti-Gravity | Google's VS Code fork with better Claude Code extension integration | Free |
| EAS Build | Expo Application Services; cloud build service for App Store and Play Store binaries | Free tier / paid |

## Claude Code Integration Points

Claude Code is the primary development interface throughout the entire course — scaffolding, feature writing, debugging, and deployment commands all flow through Claude Code. Anti-Gravity IDE provides the VS Code extension environment; Claude Code handles all code generation.

## Key Insight

**Build as a web app first, then port to mobile via Expo** — this gives you both a web version and a mobile app from one codebase, and Claude Code can scaffold the entire Expo project in minutes while web iteration is faster than rebuilding on device.

## Reusable Primitives

- Web-first → mobile port pattern (build in browser, test on phone via Expo Go)
- Expo Go hot reload for rapid device testing (QR code → live app without App Store)
- Stack progression: local storage → API → database → cloud → auth (incremental complexity)
- EAS Build for production deployment (cloud compilation, no local Xcode required)
- Anti-Gravity + Claude Code extension setup (Google IDE with better extension support)
- Three mobile framework comparison: Expo + React Native (JS/TS) vs. Flutter + Firebase (Dart) vs. Capacitor (web wrapper)

## Limitations / Gotchas

- Anti-Gravity defaults to Google's Gemini model — must manually switch to Claude Code extension
- EAS Build has a free tier limit; frequent builds require a paid plan
- App Store submission requires an Apple Developer account ($99/year)
- React Native has platform-specific bugs (iOS vs. Android differences) that Claude Code sometimes misses
- The course is multi-hour; chapter markers are essential for targeted reference
- Expo managed workflow has limitations for apps requiring native modules outside Expo's supported set
