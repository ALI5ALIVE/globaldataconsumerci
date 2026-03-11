

# Plan: Add Empathy-Driven Title Slide to Consumer Journey Deck

## Concept

A full-screen opening slide that **empathises first** before selling anything. The narrative arc: pressure → pace → frustration → hope ("there must be a better way"). No product, no logo — just raw connection with the audience's daily reality.

**Layout:** Dark, cinematic. Three staggered "pressure cards" animate in (board pressure, speed of change, data chaos), followed by a pulsing bottom line: *"There has to be a better way."* — the emotional bridge into the rest of the deck.

```text
┌──────────────────────────────────────────────────┐
│                                                  │
│     You're under more pressure than ever.        │
│     Deliver growth. Move faster. Prove ROI.      │
│                                                  │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐   │
│  │ 📊 Board   │ │ ⚡ Market  │ │ 🔀 Data    │   │
│  │ wants      │ │ moves      │ │ lives in   │   │
│  │ evidence   │ │ faster     │ │ 7 places   │   │
│  │ not slides │ │ than you   │ │ none agree │   │
│  └────────────┘ └────────────┘ └────────────┘   │
│                                                  │
│     "There has to be a better way."              │
│                                                  │
│              ↓ Scroll to begin                   │
└──────────────────────────────────────────────────┘
```

## Files

| File | Change |
|------|--------|
| `src/components/consumer-journey/CJSlide0Title.tsx` | **Create** — new empathy-driven title slide with animated pressure cards and emotional hook |
| `src/pages/ConsumerJourneyDeck.tsx` | Insert `CJSlide0Title` as the first slide (index 0), shift all existing slides by 1, update slides array (now 14), fix narration indices |
| `src/data/consumerJourneyNarration.ts` | Add narration for slide 0 (empathy opening), shift all existing slideIds by +1 |

## Details

**CJSlide0Title** component:
- Headline: "You're under more pressure than ever." with gradient accent on "more pressure"
- Subline: "Deliver growth. Move faster. Prove ROI. And do it with fewer resources."
- Three animated pressure cards (Framer Motion stagger):
  - "Board Demand" — "Evidence-based strategy, not PowerPoint promises"
  - "Market Velocity" — "Consumer trends shift faster than your planning cycles"
  - "Data Fragmentation" — "Seven tools, seven logins, seven versions of the truth"
- Emotional closer fading in last: *"There has to be a better way."*
- Scroll indicator at bottom
- Uses `CPSlideContainer` for consistency
- Dark variant, no product branding

**Narration script** (new slide 0): Empathetic opener about the pressure CMOs, CSOs, and Category Leaders face — speed, evidence, alignment — building to the "better way" pivot.

