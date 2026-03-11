

# Fix Solution Names and Procurement on One Lens Slide

## Issues

1. **Wrong solution names** in `CJOneLensHub.tsx`:
   - "Strategic Foresight" → should be **"Strategic Intelligence"**
   - "Innovation Validation" → should be **"Innovation Intelligence"**

2. **Procurement is not a solution** — it's a benefit of consolidation (lower cost, 1 vendor, best-in-class). The 6th node currently shows "Procurement Optimisation" as if it's a product. It should be reframed or removed.

3. **Narration for slide 4** doesn't mention the procurement/cost benefit. It should reference David and the consolidation value (1 vendor, lower TCO, best-in-class solutions).

## Changes

### `src/components/consumer-journey/CJOneLensHub.tsx`

- Line 7: `"Strategic\nForesight"` → `"Strategic\nIntelligence"`
- Line 31: `"Innovation\nValidation"` → `"Innovation\nIntelligence"`
- Lines 46-52: Replace the "Procurement Optimisation" node with a **benefit node** reframed as:
  - Label: `"One Vendor\nLower Cost"`
  - solutionName: `"Best-in-class, consolidated"`
  - Questions updated to reflect value: "Why pay for 14 contracts?" / "How do we get best-in-class at lower TCO?"
  - David's role updated to `"Head of Procurement"` (stays as the persona advocating this benefit)

### `src/data/consumerJourneyNarration.ts`

- Slide 4 narration (line 38): Add David and the procurement benefit to the script. Append before the closing line something like: *"And David? He sees fourteen contracts become one — lower cost, best-in-class solutions, zero compromise."*

