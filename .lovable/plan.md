

## Fix SolutionValuePanel: Pain to Outcome Layout and Default Market Selection

### Summary

Fix two issues in Slide 4 (Proposition):
1. **Pain to Outcome text overflowing** - The horizontal flow layout with `flex-shrink-0` causes long text to overflow. Change to a stacked vertical layout.
2. **Default to Market Intelligence** - Initialize `activeSegment` to `"Market Intelligence"` instead of `null`.

---

### Issue 1: Pain to Outcome Layout

**Current problem:**
The "Pain to Outcome" section uses a horizontal flex row with arrows between items:
```tsx
<div className="flex items-start gap-2 text-sm">
  <span className="... flex-shrink-0">{firstPain.pain}</span>
  <ArrowRight className="... flex-shrink-0" />
  <span className="... flex-shrink-0">{firstPain.capability}</span>
  <ArrowRight className="... flex-shrink-0" />
  <span className="...">{firstPain.outcome}</span>
</div>
```

The data contains long strings like:
- Pain: "Portfolio decisions based on outdated category reports"
- Capability: "Real-time category growth tracking"  
- Outcome: "6-month earlier visibility into category shifts"

These don't fit horizontally, and `flex-shrink-0` prevents them from wrapping.

**Fix:** Change to a vertical stacked layout with horizontal arrow connectors:

```text
+----------------------------------------+
| FROM PAIN TO OUTCOME                   |
|                                        |
| [Pain text - red background]           |
|            ↓                           |
| [Capability text - neutral bg]         |
|            ↓                           |
| [Outcome text - primary bg]            |
+----------------------------------------+
```

---

### Issue 2: Default Market Selection

**Current code (GDSlide4Proposition.tsx line 16):**
```tsx
const [activeSegment, setActiveSegment] = useState<string | null>(null);
```

**Fix:**
```tsx
const [activeSegment, setActiveSegment] = useState<string | null>("Market Intelligence");
```

This will:
- Show Market Intelligence panel on load
- Highlight the "Market Intelligence" segment on the wheel

---

### File Changes

#### File 1: `src/components/globaldata-slides/GDSlide4Proposition.tsx`

**Change:** Line 16 - Set default state to "Market Intelligence"

```tsx
// Before
const [activeSegment, setActiveSegment] = useState<string | null>(null);

// After
const [activeSegment, setActiveSegment] = useState<string | null>("Market Intelligence");
```

---

#### File 2: `src/components/globaldata-slides/SolutionValuePanel.tsx`

**Change:** Lines 74-86 - Replace horizontal flex layout with vertical stacked boxes

**Before:**
```tsx
{/* Pain to Outcome */}
<div className="mb-3 p-3 bg-card/60 rounded-lg border border-border/50">
  <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
    From Pain to Outcome
  </p>
  <div className="flex items-start gap-2 text-sm">
    <span className="text-destructive/80 text-xs flex-shrink-0">{firstPain.pain}</span>
    <ArrowRight className="w-3 h-3 text-muted-foreground flex-shrink-0 mt-0.5" />
    <span className="text-foreground text-xs flex-shrink-0">{firstPain.capability}</span>
    <ArrowRight className="w-3 h-3 text-muted-foreground flex-shrink-0 mt-0.5" />
    <span className="text-primary font-medium text-xs">{firstPain.outcome}</span>
  </div>
</div>
```

**After:**
```tsx
{/* Pain to Outcome - Vertical stacked layout */}
<div className="mb-3 p-3 bg-card/60 rounded-lg border border-border/50">
  <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
    From Pain to Outcome
  </p>
  <div className="flex flex-col gap-1.5">
    {/* Pain */}
    <div className="px-2.5 py-1.5 rounded-md bg-destructive/10 border border-destructive/20">
      <span className="text-xs text-destructive">{firstPain.pain}</span>
    </div>
    {/* Arrow Down */}
    <div className="flex justify-center">
      <ArrowDown className="w-3.5 h-3.5 text-muted-foreground" />
    </div>
    {/* Capability */}
    <div className="px-2.5 py-1.5 rounded-md bg-card border border-border">
      <span className="text-xs text-foreground">{firstPain.capability}</span>
    </div>
    {/* Arrow Down */}
    <div className="flex justify-center">
      <ArrowDown className="w-3.5 h-3.5 text-muted-foreground" />
    </div>
    {/* Outcome */}
    <div className="px-2.5 py-1.5 rounded-md bg-primary/15 border border-primary/30">
      <span className="text-xs text-primary font-medium">{firstPain.outcome}</span>
    </div>
  </div>
</div>
```

**Additional change:** Import `ArrowDown` instead of `ArrowRight`:
```tsx
// Line 1 - Update import
import { MousePointer2, ArrowDown } from "lucide-react";
```

---

### Visual Comparison

**Before (broken horizontal layout):**
```text
[Portfolio decisions...] → [Real-time...] → [6-month earlier...]
                     (overflows, text cut off)
```

**After (vertical stacked layout):**
```text
+--------------------------------------------+
| FROM PAIN TO OUTCOME                       |
|                                            |
| ┌────────────────────────────────────────┐ |
| │ Portfolio decisions based on outdated  │ |
| │ category reports                       │ |
| └────────────────────────────────────────┘ |
|                    ↓                       |
| ┌────────────────────────────────────────┐ |
| │ Real-time category growth tracking     │ |
| └────────────────────────────────────────┘ |
|                    ↓                       |
| ┌────────────────────────────────────────┐ |
| │ 6-month earlier visibility into        │ |
| │ category shifts                        │ |
| └────────────────────────────────────────┘ |
+--------------------------------------------+
```

---

### Implementation Steps

1. Update `SolutionValuePanel.tsx` import to use `ArrowDown` instead of `ArrowRight`
2. Replace the horizontal flex layout in the "Pain to Outcome" section with vertical stacked boxes
3. Add colored backgrounds to each box (red for pain, neutral for capability, primary for outcome)
4. Update `GDSlide4Proposition.tsx` to initialize `activeSegment` to `"Market Intelligence"`

