

# Plan: Enhance Slide 9 ROI with Stage Names, Matched Colors, and Maturity Assessment/Value Calculator CTA

## Overview

Update Slide 9 ("The Return: Speed, Success, Savings") to reference the actual maturity stage names (Fragmented, Managed, Connected, Optimized, Predictive), apply the same color scheme used in the Maturity Curve, and add a prominent CTA inviting users to try either a "Maturity Assessment" or "Value Calculator" to see what value they can unlock.

## Current State Analysis

The ROI slide currently shows:
- Generic "Stage 1", "Stage 2", etc. labels
- A single gradient color for all stage bars
- No call-to-action or interactive element
- Bar heights correctly increase with stage (32px to 96px) showing value compounding

## Proposed Changes

### File: `src/components/globaldata-slides/GDSlide8ROI.tsx`

#### 1. Add Stage Names and Colors Data

Add a stage configuration array matching the Maturity Curve:

| Stage | Name | Color |
|-------|------|-------|
| 1 | Fragmented | `hsl(0 70% 50%)` (red) |
| 2 | Managed | `hsl(199 89% 48%)` (sky blue) |
| 3 | Connected | `hsl(173 80% 40%)` (teal) |
| 4 | Optimized | `hsl(280 65% 55%)` (purple) |
| 5 | Predictive | `hsl(45 93% 58%)` (gold) |

#### 2. Update Visual Compounding Chart

**Current:**
- Generic "Stage 1", "Stage 2" labels
- Single gradient color for all bars

**Proposed:**
- Display stage names (e.g., "Fragmented", "Managed") instead of "Stage 1"
- Apply individual stage colors to each bar
- Keep existing bar height progression (already correctly shows value increasing)

#### 3. Add Maturity Assessment / Value Calculator CTA

Add a prominent call-to-action below the "Key Message" box:

**Visual Design:**
- Gradient border button with hover effect
- Icon: Calculator or diagnostic icon
- Text: "Try the Maturity Assessment or Value Calculator"
- Subtext: "See what you can unlock at each stage"
- Action: Placeholder for future functionality

**Placement:** Between the "Key Message" box and the visual compounding chart

## Visual Mockup (Corrected)

```text
+---------------------------------------------------------------------+
|  [Three ROI Pillar Cards - Speed, Success, Savings]                 |
+---------------------------------------------------------------------+
|  Zap Key Message: ROI compounds as organisations move up...         |
+---------------------------------------------------------------------+
|  +---------------------------------------------------------------+  |
|  |  Calculator  Try the Maturity Assessment or Value Calculator  |  |
|  |              See what you can unlock at each stage            |  |
|  +---------------------------------------------------------------+  |
+---------------------------------------------------------------------+
|  [Visual Compounding Chart - Value INCREASES with Maturity]         |
|                                                                     |
|                                                  +----+             |
|                                       +----+     | ## | (gold)      |
|                            +----+     | ## |     | ## |             |
|                 +----+     | ## |     | ## |     | ## | (purple)    |
|      +----+     | ## |     | ## |     | ## |     | ## |             |
|      | ## |     | ## |     | ## |     | ## |     | ## | (teal)      |
|      | ## |     | ## |     | ## |     | ## |     | ## |             |
|      +----+     +----+     +----+     +----+     +----+ (sky)       |
|      (red)                                                          |
|     ---------------------------------------------------------------  |
|     Frag      Managed    Connected   Optimised  Predictive          |
|                                                                     |
|  Arrow  Value compounds exponentially as maturity increases         |
+---------------------------------------------------------------------+
```

## Code Changes Summary

| Section | Change |
|---------|--------|
| Stage data | Add `stageConfig` array with names and colors |
| Bar rendering | Apply individual stage colors from `stageConfig` |
| Labels | Display stage names instead of "Stage X" |
| CTA | Add button offering "Maturity Assessment or Value Calculator" |

## Files Changed

| File | Lines | Change |
|------|-------|--------|
| `src/components/globaldata-slides/GDSlide8ROI.tsx` | 2-4, 37-42, 116-125, 130-132 | Import Calculator icon, add stage config array, add CTA button between key message and chart, update chart to use stage names and colors |

## Outcome

- Stage names visible: "Fragmented, Managed, Connected, Optimised, Predictive"
- Colors match the Maturity Curve exactly for visual consistency
- CTA button invites users to engage with either a Maturity Assessment or Value Calculator
- Visual chart clearly shows value increasing as maturity increases (taller bars = more value)
- Reinforces the progression narrative across both slides

