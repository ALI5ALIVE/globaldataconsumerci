

## Fix Box Alignment on Intelligence Gap Slide

### Issue Identified

The two columns have **mismatched dimension ordering**:

| Row | Why It Exists (Left) | Quantified Impact (Right) |
|-----|---------------------|---------------------------|
| 1   | BREADTH             | Speed                     |
| 2   | ALIGNMENT           | Breadth                   |
| 3   | SPEED               | Alignment                 |
| 4   | CONFIDENCE          | Confidence                |

Each row should have matching dimensions so the root cause aligns with its quantified impact.

---

### Solution

Reorder the `impacts` array to match the order of `rootCauses`:

| Row | Why It Exists | Quantified Impact |
|-----|---------------|-------------------|
| 1   | BREADTH       | Breadth (3-5 sources) |
| 2   | ALIGNMENT     | Alignment (40% launches) |
| 3   | SPEED         | Speed (12+ weeks) |
| 4   | CONFIDENCE    | Confidence (68% teams) |

---

### Implementation

**File:** `src/components/globaldata-slides/GDSlide2IntelligenceGap.tsx`

**Lines 36-41:** Reorder the `impacts` array to match root causes order:

```tsx
const impacts = [
  { value: "3-5", label: "sources", desc: "conflicting data per decision", dimension: "Breadth" },
  { value: "40%", label: "launches", desc: "miss optimal windows", dimension: "Alignment" },
  { value: "12+", label: "weeks", desc: "average decision latency", dimension: "Speed" },
  { value: "68%", label: "teams", desc: "lack confidence to act decisively", dimension: "Confidence" },
];
```

---

### Additional Layout Fix

To ensure the boxes have exactly the same height across rows, update the grid container and column styling:

**Line 79:** Add `items-stretch` to the grid:
```tsx
<div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
```

**Lines 81 and 104:** Change both column containers from `space-y-2` to `flex flex-col gap-2` and add `h-full` to ensure they stretch equally:
```tsx
<div className="flex flex-col gap-2 h-full">
```

**Lines 84-99 and 107-119:** Add `h-full` to each card container to make rows align:
```tsx
className="flex items-start gap-3 bg-card/50 border border-border/50 rounded-lg p-3 group hover:border-destructive/30 transition-all h-full"
```

---

### Visual Result After Fix

| Why It Exists | Quantified Impact |
|---------------|-------------------|
| Signals Fragment (BREADTH) | 3-5 sources (Breadth) |
| Leaders Debate (ALIGNMENT) | 40% launches (Alignment) |
| Decisions Arrive Late (SPEED) | 12+ weeks (Speed) |
| Decisions Lack Conviction (CONFIDENCE) | 68% teams (Confidence) |

Each row will now have matching dimensions with equal-height boxes.
