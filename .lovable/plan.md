

# Plan: Value Chain Persona Journey Deck — New Route

## Concept

New deck at `/consumer-pitch-journey` that follows the value chain through 5 persona-driven slides, each showing the emotional pain WITHOUT connected intelligence vs the emotional relief WITH it. Provocative, split-screen storytelling.

## Slide Architecture: 12 Slides

| # | Slide | Source |
|---|-------|--------|
| 1 | Your Monday Morning | Reuse CPSlide1 |
| 2 | Seven Questions, Seven Sources | Reuse CPSlide2 |
| 3 | What It's Costing You | Reuse CPSlide3 |
| 4 | **Trend & Strategy** — The Strategist | NEW persona slide |
| 5 | **Opportunity Sizing** — The Market Lead | NEW persona slide |
| 6 | **Competitive Tracking** — The CI Analyst | NEW persona slide |
| 7 | **Innovation Validation** — The Innovation Director | NEW persona slide |
| 8 | **Commercial Execution** — The Sales Lead | NEW persona slide |
| 9 | Imagine One Lens | Reuse CPSlide4 (adapted) |
| 10 | Your Teams, Transformed | Reuse CPSlide7 |
| 11 | The Results Are Real | Reuse CPSlide8 |
| 12 | Nothing Like This Exists + CTA | Combined CPSlide9 + 10 |

## Persona Slide Design (Slides 4–8)

Each slide is a dramatic split-screen:
- **Left (red/dark)**: "Without" — persona name, role, emotional pain quote, concrete problem
- **Right (green/bright)**: "With" — same persona, emotional relief quote, concrete outcome
- Animated reveal: left appears first (tension), then right slides in (resolution)

### The 5 Personas

| Step | Persona | Without (Pain) | With (Benefit) |
|------|---------|----------------|----------------|
| Trend & Strategy | Sarah, Head of Strategy | "I'm always 12 months late. By the time I've validated a trend, my competitor has launched." | "I see what's coming 18 months out. I walk into the board with foresight, not hindsight." |
| Opportunity Sizing | James, Market Intelligence Lead | "I spend 3 weeks pulling numbers from 4 different sources. The board still questions them." | "One click. 110 countries. Numbers the board trusts because everyone sees the same data." |
| Competitive Tracking | Priya, Competitive Intelligence Analyst | "I find out about competitor moves from trade press. By then, it's too late to respond." | "I track 25,000 companies in real-time. I see their moves before they announce them." |
| Innovation Validation | Marcus, Innovation Director | "We killed a product that would have been a hit. We launched one that flopped. Both based on gut feel." | "Every concept is scored against real consumer signals. Our launch success rate doubled." |
| Commercial Execution | Elena, National Account Manager | "I walk into buyer meetings with slides I made last night. No foresight. No proof points." | "I walk in with the full picture — trend data, market sizing, competitive context. The buyer leans in." |

## Narration Scripts

12 scripts in second person. Slides 1–3 reuse existing text. Slides 4–8 are persona-driven and emotionally charged. Slides 9–12 reuse existing with minor adaptations.

**Sample — Slide 4 (The Strategist):**
> "Meet Sarah. Head of Strategy at a top-five FMCG company. Without connected intelligence, she's always twelve months late. By the time she's validated a trend through three different providers, her competitor has already launched. She's not stupid — she's stranded. Now imagine Sarah with Connected Intelligence. Strategic foresight flags emerging themes eighteen months before they hit her category. She walks into the board with evidence, not excuses. Same person. Same role. Completely different impact."

## Files to Create

| File | Purpose |
|------|---------|
| `src/pages/ConsumerJourneyDeck.tsx` | Page with 12 slides, nav, narration |
| `src/data/consumerJourneyNarration.ts` | 12 narration scripts |
| `src/hooks/useConsumerJourneyNarration.ts` | Narration hook (same pattern) |
| `src/components/consumer-journey/PersonaSlide.tsx` | Reusable split-screen persona component |
| `src/components/consumer-journey/CJSlide12CTA.tsx` | Combined revolutionary + CTA slide |

## Files to Modify

| File | Change |
|------|--------|
| `src/App.tsx` | Add `/consumer-journey` route |

## Reused Components (imported directly)

- `CPSlide1MondayMorning`, `CPSlide2SevenSources`, `CPSlide3TheCost`
- `CPSlide4ImagineOneLens`, `CPSlide7TeamsTransformed`, `CPSlide8Results`
- `CPSlideContainer` (for the persona slides and CTA)

