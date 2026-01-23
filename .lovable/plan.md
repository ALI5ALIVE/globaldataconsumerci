

## Resize Slide 7: Reduce Copy Box, Increase Maturity Curve

### Current Layout

The slide uses a **50/50 grid layout** on large screens:
- `grid-cols-1 lg:grid-cols-2` - Equal width columns
- LEFT: Maturity curve SVG (50%)
- RIGHT: Details panel / copy box (50%)

---

### Proposed Change

Change to a **2:1 ratio** layout where:
- LEFT: Maturity curve takes **2/3** of the width (66%)
- RIGHT: Copy box takes **1/3** of the width (33%)

---

### Technical Implementation

**File:** `src/components/globaldata-slides/GDSlide7MaturityCurve.tsx`

**Line 282 - Grid Container:**
```tsx
// Current
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">

// New - 2:1 ratio
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
```

**Line 284 - Maturity Curve Container (span 2 columns):**
```tsx
// Current
<div className="bg-card/30 rounded-xl border border-border/30 p-4 md:p-6 flex items-center justify-center">

// New - span 2 of 3 columns
<div className="bg-card/30 rounded-xl border border-border/30 p-4 md:p-6 flex items-center justify-center lg:col-span-2">
```

**Line 287 - Increase SVG max height:**
```tsx
// Current
className="w-full h-auto max-h-[400px]"

// New - taller to use the extra space
className="w-full h-auto max-h-[500px]"
```

---

### Visual Comparison

| Element | Current | New |
|---------|---------|-----|
| Maturity Curve | 50% width, 400px max height | 66% width, 500px max height |
| Copy Box | 50% width | 33% width |
| Layout | `lg:grid-cols-2` | `lg:grid-cols-3` with curve spanning 2 |

---

### Files to Modify
- `src/components/globaldata-slides/GDSlide7MaturityCurve.tsx` (lines 282, 284, 287)

