

# Plan: Update Slide 3 (Intelligence Gap) - Centered Copy, Larger Text, and Aligned Narration Order

## Overview

Two changes requested:
1. **Visual**: Make the copy in the "Why It Exists" and "Quantified Impact" cards more centrally aligned with larger text
2. **Narration**: Restructure the script so each root cause is immediately followed by its corresponding quantified impact

---

## Part 1: Visual Changes to Cards

### Current State
- Cards use left-aligned text with small font sizes (`text-[10px]`, `text-xs`)
- Content is aligned to the left with icons

### Proposed Changes

| Element | Current | Proposed |
|---------|---------|----------|
| Card layout | Left-aligned with icon on left | Center-aligned content within cards |
| Title text | `text-xs` (~12px) | `text-sm` (~14px) |
| Description text | `text-[10px]` | `text-xs` (~12px) |
| Detail text | `text-[10px]` | `text-xs` (~12px) |
| Impact value | `text-lg` | `text-xl` |
| Impact description | `text-[10px]` | `text-xs` |
| Text alignment | `text-left` (implicit) | `text-center` |

### File to Modify
`src/components/globaldata-slides/GDSlide2IntelligenceGap.tsx`

---

## Part 2: Narration Script - Paired Sequencing

### Current Narration Structure (lines 37-54)
```
Why does it exist? Four reasons.
→ All 4 "why" reasons listed
→ Then: "The quantified impact?"
→ All 4 impacts listed together
```

### Proposed Narration Structure
```
Why does it exist?

Signals fragment across tools, teams, and vendors—no single source of truth.
The impact: three to five conflicting data sources per decision.

Leaders debate data instead of committing to direction—analysis paralysis.
The impact: forty percent of launches miss optimal windows.

Decisions arrive late—too late to matter, missed windows.
The impact: twelve-plus weeks average decision latency.

Decisions lack conviction—teams hedge instead of committing.
The impact: sixty-eight percent of teams lack the confidence to act decisively.

This gap is where growth stalls, relevance erodes, and performance suffers.
```

### File to Modify
`src/data/globalDataNarration.ts` (lines 37-54, slideId 2)

---

## Technical Details

### Card Layout Changes (GDSlide2IntelligenceGap.tsx)

**"Why It Exists" cards (lines 83-100):**
- Change flex layout to center content
- Increase font sizes for title and descriptions
- Center text alignment

**"Quantified Impact" cards (lines 106-119):**
- Center the value/label display
- Increase font sizes
- Center text alignment

### Narration Script Changes (globalDataNarration.ts)

Rewrite slideId 2 script to interleave each root cause with its matching impact:

| Order | Root Cause | Paired Impact |
|-------|------------|---------------|
| 1 | Signals Fragment (Breadth) | 3-5 conflicting sources |
| 2 | Leaders Debate (Alignment) | 40% launches miss windows |
| 3 | Decisions Arrive Late (Speed) | 12+ weeks latency |
| 4 | Decisions Lack Conviction (Confidence) | 68% teams lack confidence |

---

## Files to Change

| File | Lines | Change |
|------|-------|--------|
| `src/components/globaldata-slides/GDSlide2IntelligenceGap.tsx` | 83-119 | Update card layout for centered, larger text |
| `src/data/globalDataNarration.ts` | 37-54 | Restructure script to pair each "why" with its impact |

---

## Outcome

- Cards display with more prominent, centrally-aligned text for better visual impact
- Narration flows logically: each root cause is immediately followed by its quantified impact
- Better audience comprehension as the "why" and "what it costs" are paired together
- Maintains the four-row height alignment between left and right columns

