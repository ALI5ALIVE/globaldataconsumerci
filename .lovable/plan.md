

# Plan: Enlarge Hub Diagram and Add Solution Labels

## What changes

### 1. Make the diagram bigger
Remove the `max-h-[520px] max-w-[520px]` constraints on the SVG in `CJOneLensHub.tsx` and replace with `max-h-[600px] max-w-[600px]`. In the parent slide (`CPSlide4ImagineOneLens.tsx`), give the hub container more vertical space and reduce bottom text margin so the diagram fills the slide.

### 2. Add solution names to each value chain stage
Each stage already has a `label` (e.g. "Discover\nTrends"). Add a `solutionName` field to each node in `valueChainStages`:

| Stage | Solution Name |
|-------|--------------|
| Discover Trends | Strategic Foresight |
| Size Opportunity | Market Sizing |
| Track Competition | Competitive Intelligence |
| Validate Innovation | Innovation Validation |
| Win at Shelf | Commercial Intelligence |
| Optimise Costs | Procurement Intelligence |

Render the solution name as a small subtitle below each stage card (smaller font, muted color, e.g. fontSize="6.5"). This visually links each value chain step to its named solution without making the diagram product-heavy — the verb-led stage name stays dominant, with the solution name as a quiet anchor beneath.

## Files to modify

| File | Change |
|------|--------|
| `src/components/consumer-journey/CJOneLensHub.tsx` | Add `solutionName` to data array, increase max size, render solution subtitle under each stage card |
| `src/components/consumer-pitch/CPSlide4ImagineOneLens.tsx` | Give hub more space in the layout |

