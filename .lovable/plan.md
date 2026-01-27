
# Remove Territory Labels from Roadmap Graph

## Summary
Remove the "PRE-AI TERRITORY" and "AI-POWERED TERRITORY" labels and their background shading from the "Your Roadmap to Predictive Performance" slide (Slide 7).

## File to Edit
`src/components/globaldata-slides/GDSlide7MaturityCurve.tsx`

## Changes

### 1. Remove AI-POWERED TERRITORY section (lines 327-350)
Delete the entire `<g>` group containing the AI-powered territory rectangle and text label.

### 2. Remove PRE-AI TERRITORY section (lines 352-375)
Delete the entire `<g>` group containing the Pre-AI territory rectangle and text label.

### 3. Remove unused gradient definitions (lines 314-324)
Clean up the `<defs>` section by removing the two territory gradient definitions that are no longer needed:
- `gdAITerritoryGrad` (lines 315-318)
- `gdPreAITerritoryGrad` (lines 320-324)

## What Stays
- The "AI GATEWAY" label and dashed line at Stage 3 (lines 377-413)
- The "CONNECTED INTELLIGENCE" marker (lines 461-469)
- The hockey stick curve and all stage markers
- All axis labels and grid lines

## Visual Result
The graph will show only the hockey stick curve, stage markers, the "AI GATEWAY" threshold line, and the "CONNECTED INTELLIGENCE" marker—creating a cleaner, less cluttered visualization.
