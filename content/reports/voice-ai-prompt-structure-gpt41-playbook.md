---
title: "The Ultimate Voice AI Prompt Structure (From the GPT-4.1 Playbook)"
channel: Alejo & Paige
url: https://www.youtube.com/watch?v=7ofIeyn4LGs
date: 2026-05-12
tags: [voice-ai, prompt-engineering, retell-ai, agent-design]
tools: [Retell AI, GPT-4.1]
use_cases: [voice-agent-prompting, ai-agent-design]
complexity: intermediate
workflow_type: manual-assisted
---

## What This Video Demonstrates

Alejo and Paige adapt OpenAI's 29-page GPT-4.1 prompting guide into a 6-part voice AI prompt structure — Role/Objective → Personality → Context → Instructions → Numbered Stages → Example Interactions — showing how structured prompts with example dialogues eliminate dozens of edge-case rules by letting the model generalize from demonstrations.

## Workflow Steps

1. Define Role/Objective in 1-2 sentences: what the agent does and for whom
2. Set Personality: tone, pace, formality, energy level — match to brand voice
3. Provide Context: business info, hours of operation, FAQs, pricing, key facts the agent needs
4. Write Instructions block with two sub-sections:
   - Communication guidelines: how to handle interruptions, silences, off-topic questions, escalations
   - Tool usage rules: when to transfer, when to take a message, when to book
5. Define Numbered Stages (5–7 steps): greeting → qualify → handle request → resolve → close → wrap-up
6. Add 2–3 Example Interactions showing correct behavior for the most common caller types

## Tools Used

| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Retell AI | Voice agent platform where the 6-part prompt structure is applied | Usage-based |
| GPT-4.1 | Underlying model powering the voice agent; the playbook was written for this model | OpenAI paid |

## Claude Code Integration Points

Claude Code could generate voice prompt drafts from a business brief — provide the business name, industry, FAQs, and top 3 caller intents, and a skill outputs a formatted 6-part prompt ready to paste into Retell AI. A prompt testing skill could simulate caller conversations by role-playing as different caller types against the draft prompt, surfacing issues before deployment.

## Key Insight

**Structuring voice prompts with numbered stages and example interactions eliminates the need for dozens of edge-case rules** — the model fills in gaps from demonstrations rather than requiring every scenario to be explicitly scripted.

## Reusable Primitives

- 6-part voice prompt template (Role → Personality → Context → Instructions → Stages → Examples)
- Numbered stages pattern for predictable conversation flow
- Example interactions as implicit rules (show, don't tell)
- Communication guidelines block (interruptions, silence, off-topic, escalation)
- Tool usage rules block (transfer triggers, message-taking conditions, booking criteria)
- GPT-4.1 playbook adaptation for voice (shorter sentences, pacing cues, no markdown)

## Limitations / Gotchas

- GPT-4.1 paper is written for chat agents — voice requires shorter sentences and explicit pacing instructions
- Numbered stages need careful ordering; wrong stage sequencing creates awkward conversation flow
- Example interactions take significant time to write well — 2–3 good examples outperform 10 mediocre ones
- The 29-page original playbook has nuances this video necessarily simplifies
- Retell AI-specific syntax (tool names, transfer function calls) must be adapted from the generic template
