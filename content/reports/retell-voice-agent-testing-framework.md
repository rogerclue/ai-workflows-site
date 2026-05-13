---
title: "MASTER Voice Agent Testing in 20 Minutes (Retell AI Guide)"
channel: Tech Tomlet
url: https://www.youtube.com/watch?v=AGMc9z-iPQI
date: 2026-05-13
tags: [retell-ai, voice-agents, testing, prompt-engineering, ai-agency]
tools: [Retell AI, Claude, ChatGPT, GPT-4.1]
use_cases: [voice-agent-testing, prompt-debugging]
complexity: intermediate
workflow_type: manual-assisted
---

## What This Video Demonstrates
Mark (Tech Tomlet) presents a 4-layer voice agent testing framework — manual chat, simulation, voice, and production deployment — that covers every testing angle before and after launch. The key discipline is separating brain testing (text layer) from voice testing so you fix logic issues efficiently before ever picking up a phone.

## Workflow Steps

### Layer 1 — Manual Chat Testing (text only)
1. Open agent in Retell chat panel (not voice call)
2. Walk through core critical scenarios manually (booking, cancellations, edge cases)
3. Watch tool invocations in real time — verify JSON payload is correct
4. If response is wrong: use **Replay Chat** to re-run the exact scenario before touching the prompt (verify it's a consistent error, not a one-time fluke)
5. Use **Debug → Regenerate** to get 1 or 10 variations of a response — see the probabilistic spread
6. Tweak prompt → Replay Chat → verify fix

### Layer 2 — Simulation Testing
1. Copy full agent prompt into GPT #1 (scenario generator): "Generate 25 most common scenarios that might break my agent" using RACE format
2. Copy output into GPT #2 (JSON formatter): converts scenarios into Retell-importable JSON
3. Download JSON → Import into Retell Simulations tab
4. Hit **Run Test** — all 25 simulations run simultaneously, each evaluated by defined success criteria
5. Review results: for each failure, copy the failed transcript + error into Claude with: *"Using best prompting practices for voice agents, analyze what went wrong and give me the simplest, clearest prompt fix to add to my master prompt"*
6. Paste snippet into agent → re-run that simulation → if still failing, give Claude the full prompt: *"Do not change anything besides the exact part that fixes this error. Output the entire unchanged prompt with only your modification"*
7. Rinse and repeat until near 100% pass rate

**Key simulation rules:**
- Use **tiny, surgical, single-assertion test scenarios** — one rule tested per scenario
- Never broad/multi-step tests: they cause fuzzy evaluation, hard-to-diagnose failures
- Always add **end call function** or simulations loop infinitely
- Use GPT-4.1 as the evaluator LLM (more expensive but more accurate)
- Pro tip: upload knowledge base and build scenarios that test paraphrased questions (not word-for-word) to stress KB retrieval

### Layer 3 — Voice Testing (manual calls)
1. Dial the agent from your actual phone
2. Test: pronunciation of names, email/phone readback speed, latency feel, accent in multilingual agents, handling of interruptions
3. Review call history transcripts after each call
4. Send to team members and ideally to people who don't know they're talking to a bot
5. Paste transcripts into Claude: *"Suggest prompt improvements and enumerate everything this agent might be doing wrong"* — batch multiple transcripts for holistic feedback

**Why voice testing can't be fully automated:** A voice agent testing another voice agent will never interrupt the way a real human does. Messy real-world speech patterns require human judgment.

### Layer 4 (Bonus) — Production Deployment Testing
1. First week of deployment = all hands on deck
2. Collect real call history from live calls
3. Feed transcripts into Claude for prompt refinement
4. Frame for clients: *"Your new receptionist needs training too — the difference is when we teach it something, it never forgets"*

## Tools Used
| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Retell AI | Agent platform — chat testing, simulations, call history | Paid (per minute) |
| GPT-4.1 | Simulation evaluator LLM + scenario generator GPT | Paid API |
| Claude | Prompt fix generation from failed simulation transcripts | Paid |
| ChatGPT | Custom GPT for scenario generation + JSON formatting | ChatGPT Plus |

## Claude Code Integration Points
- Build a Claude Code script that ingests Retell call history JSONs and auto-generates a prompt improvement report
- Automate the "failed simulation → Claude fix → re-import" loop with a script that batches failures
- Use Claude Code to generate the simulation JSON directly from a prompt file, bypassing the custom GPT step

## Key Insight
**Separate brain testing (text layer) from voice testing** — fix all logic, tool-calling, and knowledge base issues in manual chat and simulations before ever testing over the phone; voice testing is reserved exclusively for pronunciation, latency, and human interruption behavior that text can't surface.

## Reusable Primitives
- **Replay Chat** to verify consistent errors before touching the prompt
- **Debug → Regenerate × 10** to see probabilistic response spread for a single prompt state
- Tiny surgical simulation pattern: one rule per test scenario, not broad multi-step flows
- Custom GPT pair: scenario generator + JSON formatter → Retell import pipeline
- Claude as prompt surgeon: "fix only the failing part, output the full unchanged prompt"
- Production week 1 = best real-world training data; frame for clients as "receptionist training"

## Limitations / Gotchas
- Custom GPTs for scenario generation/JSON formatting are in Mark's paid community — not publicly shared
- Simulation evaluator can false-fail passing scenarios — always manually review failures
- Simulation testing should come *after* substantial manual testing, not as a first step
- Voice-to-voice automated testing exists but is insufficient — real human calls still required
- Conversational flow (rigid mode) works the same way but nodes visually move during testing
