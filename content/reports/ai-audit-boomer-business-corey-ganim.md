---
title: "How to make f*ck you money by AI maxxing boomer businesses"
channel: Corey Ganim
url: https://www.youtube.com/watch?v=OQ0ij7vFelw
date: 2026-05-05
tags: [ai-consulting, ai-audit, small-business, lead-generation, voice-agent, service-business]
tools: [Claude, Retell AI, Gamma, Zapier, Make.com, Fathom, GoHighLevel, Futurepedia]
use_cases: [ai-business-audit, client-discovery, automated-reporting, speed-to-lead-agent]
complexity: beginner
workflow_type: manual-assisted
---

## What This Video Demonstrates

Corey Ganim explains a zero-coding AI consulting business model: charge small "boomer" businesses $1,000 for a 45-minute discovery call → AI-generated audit report → upsell automation builds at $1,500–$10,000 each. The core insight is that 97% of SMBs haven't adopted basic AI tools, making almost any business a paying client.

## Workflow Steps

### Phase 1 — Discovery (Three Iterations)
**Original**: Follow client around their office for a day → too unscalable  
**V2**: Client records Loom screen capture of a deep work session → too much friction  
**V3 (current)**: Voice agent ("Annie") calls client, conducts 20–30 min structured interview → pipes transcript to report agent

1. Client calls a phone number (24/7, no scheduling required)
2. Voice agent (built on Retell AI) conducts intake: business overview, tools used, daily pain points
3. Agent asks industry-specific questions from a master question bank (built across 8+ industries)
4. Call ends → transcript automatically routed to report-generation agent

### Phase 2 — Report Generation
1. Report agent receives transcript
2. Claude analyzes transcript, identifies pain points
3. Claude searches AI tool directories (Futurepedia, "There's an AI for That") for off-the-shelf solutions
4. Agent generates a `.docx` file with structured assessment
5. `.docx` uploaded to Gamma template → AI auto-populates branded slide deck

**Report sections**:
- Executive summary (pain points + projected time reclaimed)
- Effort vs. impact matrix (maps all pain points on low/high axes)
- Recommended solutions (tool name, what it does, cost, time saved)
- 4-day quick win implementation plan
- Upsell opportunities (heavier-lift items uncovered in discovery)
- Financial impact quantification (hours/week × $100/hr − tool costs)

### Phase 3 — Delivery & Upsell
1. Report sent to client within 48 hours
2. 30-minute follow-up call: screen share through report, walk each recommendation
3. Upsell from menu (see below)

**Upsell menu** (5 categories):
| Service | Price Range |
|---------|------------|
| Process optimization (fix broken workflow before automating) | $3,000–$5,000 |
| Simple automation build (Zapier/Make.com) | $1,000–$3,000 |
| Custom knowledge system / GPT trained on company docs | $1,500–$3,000 |
| Speed-to-lead AI agent (web form → personalized reply → books call) | $2,000–$5,000 |
| GoHighLevel CRM setup + integrations | $3,000–$5,000 |

## Tools Used

| Tool | Role in Workflow | Cost/Tier |
|------|-----------------|-----------|
| Claude | Transcript analysis, tool research, report generation, workflow design | Paid (Claude subscription) |
| Retell AI | Voice agent platform — runs "Annie" the intake agent | Usage-based |
| Gamma | AI-powered slide deck / document tool; auto-populates audit report template | Paid (SaaS) |
| Zapier / Make.com | Automation builds sold as upsell deliverables to clients | Paid |
| Fathom | Meeting recording + transcript — recommended to clients as a quick win | Free tier |
| GoHighLevel | CRM + AI employee platform — sold as upsell; also used for speed-to-lead | SaaS subscription |
| Futurepedia | AI tool directory — Claude searches it for client-specific tool recommendations | Free |
| "There's an AI for That" | Secondary AI tool directory for research | Free |

## Claude Code Integration Points

- **Transcript → report pipeline**: The multi-skill agent chain (clean transcript → research tools → generate docx) is exactly a Claude Code multi-step workflow. Each "skill" Corey describes maps to a Claude Code skill file.
- **Voice agent → Claude handoff**: Retell transcript arrives as text → Claude Code picks it up, runs research + generation skills automatically. No human touches it between call end and docx delivery.
- **Futurepedia/tool-directory scraping**: A Claude Code skill using WebSearch or Playwright MCP could replicate the tool research step.
- **Gamma replacement**: Claude Code could generate the full structured HTML/PDF report directly, skipping Gamma for teams wanting a fully automated pipeline.
- **Speed-to-lead agent**: Classic Make.com/Zapier flow that could be built entirely in Claude Code with email/form webhooks + a response-generation skill.

## Key Insight

**The assessment is a paid lead-generation tool for higher-margin upsells** — at $1,000, clients are bought in enough to say yes to $3,500+ follow-on projects. Charging $200 undercuts perceived value and makes the upsell jump too large; $1,000 puts both the audit and the upsell "in the same ballpark."

## Reusable Primitives

- **Voice agent → transcript → AI report**: Any intake process (sales discovery, onboarding, support) can be replaced with a Retell voice agent + Claude report generator — zero human effort between call and deliverable
- **Effort vs. impact matrix**: A reusable Claude prompt pattern — give it a list of pain points, ask it to map each on effort (low/medium/high) vs. impact (low/medium/high), output as a 2×2 grid
- **4-day quick win plan**: After any recommendation set, prompt Claude to sequence the top picks into a day-by-day implementation plan — dramatically improves client follow-through
- **Financial impact slide**: Always quantify: (hours saved/week × $100/hr × 4 weeks) − monthly tool cost = monthly ROI. Makes the upsell obvious.
- **Free audit → paid upsell ladder**: Start 2–3 clients for free to get testimonials, then price $200 → $500 → $1,000 as confidence and case studies grow
- **Speed-to-lead agent**: Web form submit → Claude personalizes response using prospect data → books call. Highest-ROI first engagement for service businesses with inbound leads

## Limitations / Gotchas

- **Corey's agent stack uses multiple custom skills** — the "series of skills" his business partner Nick built is not off-the-shelf; beginners can replicate it manually with Claude + copy/paste, but the fully automated pipeline requires real agent/automation work
- **Gamma requires manual upload step** — the `.docx` → Gamma slide conversion isn't fully automated; someone has to upload the file and trigger generation (unless connected via API)
- **Voice agent quality varies by platform** — Retell AI is specifically called out as "one of the more human-like"; not all voice agent platforms perform at this level
- **"AI expert" bar is low but not zero** — Corey says "7 days of study" is enough, but confidently pitching automation builds requires actually knowing Zapier/Make.com at a working level
- **Futurepedia accuracy** — AI tool directories go stale quickly; Claude may recommend tools that have pivoted, shut down, or changed pricing
- **Industry specialization is a trap early** — Corey admits being a generalist spreads you thin; advice is to pick ONE upsell type and productize it before expanding
