

# Add Procurement Narrative to Slide 5 (One Lens)

The slide currently has a "David / Optimise Costs / Procurement Intelligence" node in the hub diagram but the subtitle text doesn't mention the procurement/vendor-consolidation value proposition. We need to add this messaging.

## Changes

### 1. `src/components/consumer-pitch/CPSlide4ImagineOneLens.tsx`
Replace the single subtitle line with two lines — keep the existing one and add a second animated line below it highlighting the procurement narrative:

- **Existing**: "One opportunity — plant-based protein — seen through one connected lens. From the first signal to the shelf."
- **Add below** (with slightly later animation delay): "And David? He consolidates fourteen contracts into one — best-in-class solutions, 30% lower cost, with data access his teams never had before."

### 2. `src/data/consumerJourneyNarration.ts` — Slide 4 script
Append to the narration script for slide 4 a closing sentence about the procurement value:
> "And David consolidates fourteen vendor contracts into one — giving every team access to best-in-class intelligence they never had before, at thirty percent lower total cost of ownership."

Two files changed. No structural or layout changes to the hub diagram itself.

