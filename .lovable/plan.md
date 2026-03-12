

# Revise Strategic Intelligence: Macro + Micro Themes

## What Changes

Sarah's Strategic Intelligence panel currently shows three flat "converging signals" (Plant Protein, Clean Label, Gut Health). We'll restructure this into a **macro/micro theme hierarchy** that better reflects how Strategic Intelligence actually works for consumer brands — identifying big forces and then zooming into category-level signals.

## Visual: `src/components/consumer-journey/CJSlideConnectedDecision.tsx`

Replace the `MiniTrendLine` component's flat theme pills with a two-tier layout:

**Macro Themes** (industry-level forces):
- "Health & Wellness" — broad consumer mega-trend
- "Sustainability" — regulatory + consumer pressure

**Micro Themes** (category-specific signals converging under the macros):
- "Plant Protein" ← under Health & Wellness
- "Clean Label" ← under Health & Wellness  
- "Gut Health" ← under Health & Wellness
- "Ethical Sourcing" ← under Sustainability

Layout: Two small rows with macro labels on the left and micro pills nested/indented to the right. Keep the convergence score (92/100) and the trend line SVG. Replace the "↑ 38%" header stat with "3 MACRO · 4 MICRO" to signal the hierarchy. Keep the "3 brands entered" footnote.

## Narration: `src/data/consumerJourneyNarration.ts`

Update the Sarah section in slideId 6 script from:

> "three converging signals: plant protein, clean label, and gut health — all accelerating"

To:

> "two macro themes — Health and Wellness, and Sustainability — with four micro signals converging beneath them: plant protein, clean label, gut health, and ethical sourcing — all accelerating in Southeast Asia. Convergence score: ninety-two out of a hundred."

Also update the One Lens narration (slideId 5) Sarah line from:

> "spot emerging disruptions and converging themes"

To:

> "spot macro forces and the micro signals converging beneath them — giving you predictive foresight before the market shifts"

Everything else on the slide stays the same.

