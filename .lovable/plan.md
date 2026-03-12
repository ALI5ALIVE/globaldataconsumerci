

# Swap Slides 9 & 10 + Reinforce GlobalData on DIY Slide

## Changes

### 1. Swap slide order in `src/pages/ConsumerJourneyDeck.tsx`

In the slides array and JSX rendering, swap "Why Not DIY?" (currently index 9) with "Proof" (currently index 8):

- New order: **8 = Why Not DIY?, 9 = Proof, 10 = Next Steps**
- Update `slides` array labels accordingly
- Swap the JSX components and their `getNarrationProps` indices

### 2. Update narration IDs in `src/data/consumerJourneyNarration.ts`

Swap `slideId` values for the Proof and DIY narrations so they match the new indices (8 ↔ 9).

### 3. Reinforce GlobalData infrastructure on DIY slide (`src/components/consumer-journey/CJSlideWhyNotDIY.tsx`)

Enhance the "Connected Intelligence" column to emphasize GlobalData's data quality advantage:

- Update connected points to reference GlobalData's specific strengths:
  - **"95% global GDP coverage"** — analyst-validated, unified taxonomy
  - **"1 platform, 1 contract"** — stays as-is
  - **"One consumer taxonomy"** — add "mapped across 50+ markets"
  - **"Intelligence flows"** — emphasize "Agentic AI + domain experts accelerate every layer"

- Add a small "Data Infrastructure" callout strip below the two columns (before the bottom quote) highlighting: "Built on 40+ years of market intelligence · 95% global GDP coverage · Analyst-validated · Real-time"

- Update the bottom quote to: *"Integration connects pipes. GlobalData connects meaning — with the world's deepest consumer intelligence infrastructure behind it."*

