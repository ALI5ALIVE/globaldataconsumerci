

# Plan: Remove Duplicated "How Work Changes" Cards from Pyramid Slide

## Overview

Remove the **"How Work Changes"** behavioral shift card and **"Where Teams Spend Time"** time allocation bar from the **Intelligence Maturity Ladder** (Slide 7/Pyramid slide) because this content is duplicated in the following **"Transforming How Teams Work"** slide (Slide 8/Maturity Curve).

## Content Being Removed

| Element | Content Examples | Reason |
|---------|------------------|--------|
| **"How Work Changes" card** | "Reconciling conflicting data across providers" → "Reactive decisions just to keep up" + "We have data, but no confidence" | Shown in Slide 8 |
| **"Where Teams Spend Time" bar** | 60% Reconcile / 30% Analysis / 10% Strategic breakdown for each stage | Shown in Slide 8 |

## Files to Modify

### 1. `src/components/globaldata-slides/GDDetailsPanel.tsx`

**Changes:**
- Remove the import of `GDBehaviorShiftCard` and `GDTimeAllocationBar`
- Remove the `<GDBehaviorShiftCard />` component call (line 193-197)
- Remove the `<GDTimeAllocationBar />` component call (line 199-203)

### 2. `src/components/globaldata-slides/GDSlide6ValuePyramid.tsx` (Optional Cleanup)

**Changes:**
- Remove `behavioralShift` and `timeAllocation` properties from each layer in `layersData` array
- This is optional but keeps the data model clean since these properties are no longer displayed

## Before/After Comparison

**Before (Slide 7 Details Panel):**
```
┌─────────────────────────────────────┐
│ [1] Starting Point                  │
│     Fragmented & Reactive Intelligence │
├─────────────────────────────────────┤
│ WHAT IT LOOKS LIKE                  │
│ • Insight requests handled ad hoc   │
│ • Multiple disconnected tools       │
│ • Decisions made with incomplete data│
├─────────────────────────────────────┤
│ RESULT                              │
│ → High dependency on vendors        │
│ → High decision latency             │
├─────────────────────────────────────┤
│ VALUE PROOF                         │
│ [High vendor spend] [Low self-service] │
├─────────────────────────────────────┤
│ HOW WORK CHANGES     ← REMOVE       │
│ [From] → [To]        ← REMOVE       │
│ "Cultural marker"    ← REMOVE       │
├─────────────────────────────────────┤
│ WHERE TEAMS SPEND TIME  ← REMOVE    │
│ [60%][30%][10%]         ← REMOVE    │
└─────────────────────────────────────┘
```

**After (Slide 7 Details Panel):**
```
┌─────────────────────────────────────┐
│ [1] Starting Point                  │
│     Fragmented & Reactive Intelligence │
├─────────────────────────────────────┤
│ WHAT IT LOOKS LIKE                  │
│ • Insight requests handled ad hoc   │
│ • Multiple disconnected tools       │
│ • Decisions made with incomplete data│
├─────────────────────────────────────┤
│ RESULT                              │
│ → High dependency on vendors        │
│ → High decision latency             │
├─────────────────────────────────────┤
│ VALUE PROOF                         │
│ [High vendor spend] [Low self-service] │
└─────────────────────────────────────┘
```

## Content Differentiation

This change ensures clear content separation between slides:

| Slide | Focus | Content |
|-------|-------|---------|
| **Slide 7 (Pyramid)** | Diagnostic / "Where Are You?" | What It Looks Like, Result, Value Proof (assessment focus) |
| **Slide 8 (Curve)** | Operational / "How Work Changes" | Key Actions, Team Behavior, Real Example, Time Allocation (transformation focus) |

## Technical Implementation

### GDDetailsPanel.tsx Changes

**Lines to remove:**
- Line 2: Remove `GDBehaviorShiftCard` and `GDTimeAllocationBar` imports
- Lines 193-203: Remove both component calls

**Updated component structure:**
```tsx
const GDDetailsPanel = ({ layer, highlightedModule }: GDDetailsPanelProps) => {
  return (
    <div className="h-full flex flex-col gap-2.5 text-left">
      {/* Header with AI Readiness */}
      {/* ... keep ... */}
      
      {/* What It Looks Like */}
      {/* ... keep ... */}
      
      {/* Result */}
      {/* ... keep ... */}
      
      {/* Value Proof */}
      {/* ... keep ... */}
      
      {/* REMOVED: Behavioral Shift card */}
      {/* REMOVED: Time Allocation bar */}
    </div>
  );
};
```

## Summary

| File | Change |
|------|--------|
| `GDDetailsPanel.tsx` | Remove `GDBehaviorShiftCard` and `GDTimeAllocationBar` imports and component usage |
| `GDSlide6ValuePyramid.tsx` | (Optional) Clean up unused `behavioralShift` and `timeAllocation` data properties |

