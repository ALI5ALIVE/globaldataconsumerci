

# Add "You're Under Pressure" Slide & Revise Narration

## What Changes

The current title slide (Slide 0) doubles as both intro and pressure framing. We split it into two slides:

- **Slide 0 — Title**: Keeps the "Connected Intelligence for Consumer Brands" headline, stats strip, and quote. Gets a very short narration (a welcome/scene-setter, ~15 seconds).
- **Slide 1 — "You're Under More Pressure Than Ever"** (NEW): A dedicated emotional slide with animated pressure cards (Consumer Expectations, Market Velocity, Fragmented Data, First-Mover Risk). The full narrative hook starts here — the current slide 0 narration content moves here and expands.

All subsequent slides shift index by +1 (Monday becomes slide 2, Seven Sources becomes slide 3, etc.). Total slides: 12.

## File Changes

### 1. NEW: `src/components/consumer-journey/CJSlide1Pressure.tsx`
- Full-screen slide with 4 animated pressure cards:
  - **Consumer Expectations** — "Changing faster than your planning cycles"
  - **Market Velocity** — "Competitors move in weeks, you move in quarters"  
  - **Fragmented View** — "Your data lives in 7 different places"
  - **First-Mover Risk** — "Every missed signal is a missed category"
- Cards animate in with staggered delays
- Empathetic tone headline: "You're Under More Pressure Than Ever"
- Subtitle: "Your consumers are changing faster than you can track them."
- Uses CPSlideContainer or custom section with SlidePlayButton

### 2. UPDATE: `src/data/consumerJourneyNarration.ts`
- **Slide 0 narration** (title): Short intro — ~2 sentences welcoming the audience and setting the stage. E.g. *"Connected Intelligence for Consumer Brands. What you're about to see is a new way of working — one that turns fragmented data into the fastest path to growth."*
- **Slide 1 narration** (pressure): Takes the current slide 0 script content and expands it as the narrative opening. E.g. *"You're under more pressure than ever. The board wants evidence — not intuition. Consumer trends are shifting faster than your planning cycles. And your data? It lives in seven different places. There has to be a better way. Sound familiar? Picture your typical Monday."*
- All subsequent slideId values shift +1 (current slide 1→2, 2→3, etc.)

### 3. UPDATE: `src/pages/ConsumerJourneyDeck.tsx`
- Import new `CJSlide1Pressure` component
- Insert it after `CJSlide0Title` in the slide list
- Update `slides` array to include new entry at index 1: `{ id: "cj-slide-1", label: "The Pressure" }`
- Shift all other slide IDs accordingly
- Update `getNarrationProps` calls to match new indices (total 12 slides)

### 4. UPDATE: `src/components/consumer-journey/CJSlide0Title.tsx`
- No visual changes needed — it already works as a clean title slide
- The narration props will now trigger the short intro narration

