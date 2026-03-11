

# Plan: Add Product Platform Slide with Ava at Centre

Add a new slide between slide 4 (One Lens) and slide 5 (Connected Decision) that shows the five solutions arranged around a central Ava AI hub — similar to the sales pitch slide 7 layout but as a coded component.

## New Slide Order (11 slides, 0-10)

```text
 0  The Pressure
 1  Your Monday
 2  Seven Sources
 3  The Cost
 4  One Lens
 5  The Platform  ← NEW
 6  The Connected Decision
 7  Connected Intelligence
 8  Let's Talk
 9  Proof
10  Teams Transformed
```

## New Component: `CPSlide5Platform.tsx`

A radial layout with Ava (Brain icon + glow) at the centre and the five solutions arranged in a ring around her. Each solution card shows icon, title, one-line description, and a connecting line/arc to the centre. The plant-based story thread continues — subtitle: *"Five solutions. One AI agent. One taxonomy. Here's how they work together on your plant-based opportunity."*

Layout:
```text
        Strategic
           |
  Sales ---AVA--- Market
           |
  Innovation --- Competitive
```

- Centre: Ava avatar with pulsing glow, label "Ava — Your AI Intelligence Partner"
- Five solution cards in a circle, each with icon, title, and a short plant-based-specific one-liner
- Animated connection lines from each card to centre
- Taxonomy bar at bottom (reused pattern from CPSlide5ConnectedIntelligence)

## Files to Modify/Create

| File | Change |
|------|--------|
| `src/components/consumer-pitch/CPSlide5Platform.tsx` | **CREATE** — New radial platform slide with Ava centre |
| `src/pages/ConsumerJourneyDeck.tsx` | Import new component, insert at index 5, bump all subsequent narration props by 1 (6→10), update slides array to 11 entries |
| `src/data/consumerJourneyNarration.ts` | Insert new narration at slideId 5, shift existing 5–9 → 6–10 |
| `src/hooks/useConsumerJourneyNarration.ts` | Update max slide cap to 10 |

