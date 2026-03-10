

# Plan: Revolutionary Consumer-First Pitch Deck — New Route

## Feedback Summary

The team's feedback was unanimous and clear:
- **"We've made it all about us, not about the client"** (Katie) — flip the lens entirely
- **"It feels incremental, but what we're doing is revolutionary"** (Katie) — the deck must match the ambition
- **"Show a stressed CMI lead struggling, then show one solution fixes everything"** (Mark) — emotional, problem-first
- **"One slide: you're grappling with 7 issues, 7 teams, 7 different ways → one lens"** (Sumit) — connected, not disaggregated
- **"A 360 solution — they don't need Mintel, Kantar, or Your Monitor anymore"** (Jesus) — tangible consolidation
- **"Not connected to the emotion of the target audience"** (Alistair) — needs to feel personal

## New Deck Architecture: 10 Slides

Radical restructure. Fewer slides. Client's perspective throughout. Emotional arc.

| # | Title | Purpose |
|---|-------|---------|
| 1 | **Your Monday Morning** | Open with the CMI lead's reality — bombarded, 7 tools, no single answer |
| 2 | **Seven Questions, Seven Sources** | The fragmentation pain visualised — teams in silos, conflicting answers |
| 3 | **What It's Costing You** | Missed trends, failed launches, slow decisions — the price of fragmentation |
| 4 | **Imagine One Lens** | The pivot — what if every question had one connected answer? |
| 5 | **Connected Intelligence** | The platform — one taxonomy, idea to shelf, every team aligned |
| 6 | **From Idea to Shelf** | Value chain — how connected intelligence flows through every decision |
| 7 | **Your Teams, Transformed** | Before/after — from 60% reconciliation to 75% strategy |
| 8 | **The Results Are Real** | Tangible outcomes — 70% faster, 2x success, 30% lower cost |
| 9 | **Nothing Like This Exists** | Why this is revolutionary, not incremental |
| 10 | **One Conversation** | CTA — 90 days to unified consumer intelligence |

## Narration Philosophy

Every script written in second person ("you", "your team", "your Monday"). No GlobalData product names until slide 5. Open with empathy, build tension, deliver the answer. ~6.5 minutes total.

### Sample Scripts

**Slide 1 — Your Monday Morning** (~45 words)
> "It's Monday morning. Your inbox is full. The CEO wants a view on plant-based. Sales needs competitive context for a retailer meeting. Innovation wants to know if the protein trend has peaked. You need answers — fast, aligned, defensible. But your data lives in seven different places."

**Slide 4 — Imagine One Lens** (~40 words)
> "Now imagine this. One place where every question — strategic, competitive, market, innovation, commercial — gets answered through the same lens. No reconciliation. No conflicting numbers. No twelve-week wait. Just one connected view from trend to shelf. That's not a dream. It exists."

**Slide 9 — Nothing Like This Exists** (~35 words)
> "This isn't another dashboard. This isn't incremental. No one has ever connected strategic foresight, market sizing, competitive tracking, innovation validation, and commercial intelligence through a single consumer-connected taxonomy. This is a first. Eight of the top ten FMCG companies already trust it."

## Files to Create

| File | Purpose |
|------|---------|
| `src/data/consumerPitchNarration.ts` | 10 slide narration scripts |
| `src/hooks/useConsumerPitchNarration.ts` | Narration hook (same pattern as existing) |
| `src/pages/ConsumerPitchDeck.tsx` | Page with 10 interactive HTML slides |
| `src/components/consumer-pitch/CPSlideContainer.tsx` | Slide container (reuse GD pattern) |
| `src/components/consumer-pitch/CPSlide1MondayMorning.tsx` | Emotional opening |
| `src/components/consumer-pitch/CPSlide2SevenSources.tsx` | Fragmentation visual |
| `src/components/consumer-pitch/CPSlide3TheCost.tsx` | Cost of inaction |
| `src/components/consumer-pitch/CPSlide4ImaginOneLens.tsx` | The pivot moment |
| `src/components/consumer-pitch/CPSlide5ConnectedIntelligence.tsx` | The platform |
| `src/components/consumer-pitch/CPSlide6IdeaToShelf.tsx` | Value chain |
| `src/components/consumer-pitch/CPSlide7TeamsTransformed.tsx` | Before/after |
| `src/components/consumer-pitch/CPSlide8Results.tsx` | ROI and outcomes |
| `src/components/consumer-pitch/CPSlide9NothingLikeThis.tsx` | Revolutionary positioning |
| `src/components/consumer-pitch/CPSlide10OneConversation.tsx` | CTA |

## File to Modify

| File | Change |
|------|--------|
| `src/App.tsx` | Add `/consumer-pitch` route |

## Visual Design

- Dark theme (matches existing decks)
- Slide 1: Animated notification/question bubbles overwhelming the screen
- Slide 2: Visual showing 7 disconnected tool icons vs 7 questions
- Slide 4: Dramatic reveal — convergence animation
- Slide 5: Central connected circle diagram
- Slide 6: Horizontal flow from Idea → Shelf with connected data points
- Slide 7: Split-screen before/after with time-allocation bars
- Slide 9: Bold typography, no diagrams — just conviction

