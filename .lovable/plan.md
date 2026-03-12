

# Resize Maturity Journey Layout — Graph Larger, Boxes Smaller

## Issue
The 4 content boxes below the graph currently take more vertical space than the curve visualization itself. User wants the graph to be the dominant visual element with compact summary boxes beneath.

## Changes to `src/components/consumer-journey/CJSlideMaturityJourney.tsx`

1. **Increase SVG height**: `max-h-[200px]` → `max-h-[300px]` to give the curve visual prominence
2. **Compress stage cards**: 
   - Padding: `p-3` → `p-2`
   - Internal gap: `gap-1.5` → `gap-1`
   - Remove the insight quote (bottom italic text) to save vertical space
   - Text sizes: keep current or reduce slightly where needed
3. **Reduce layout gap**: `gap-2` → `gap-1` between title, graph, and boxes
4. **Adjust grid**: Keep 4 columns but ensure cards are more compact vertically

## Result Layout
- Title (compact)
- Graph (~300px, dominant visual)
- 4 tight content boxes below (~120-140px total height)
