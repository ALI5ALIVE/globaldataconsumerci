

## Ensure Solution Panel Always Shows Content (No Blank Space)

### Summary

Fix the blank space issue by modifying the `ConnectedIntelligenceWheel` component so it reverts to a default segment ("Market Intelligence") when the user hovers off, instead of setting the state to `null`.

---

### Root Cause

**Current behavior in `ConnectedIntelligenceWheel.tsx` (line 120):**
```tsx
onMouseLeave={() => onSegmentHover?.(null)}
```

When the user moves their mouse off a segment, it sets `activeSegment` to `null`, which causes the `SolutionValuePanel` to show the empty placeholder: "Hover over a segment to explore..."

---

### Solution

Change the `onMouseLeave` handler to pass the **default segment** instead of `null`. This requires:

1. Add a `defaultSegment` prop to `ConnectedIntelligenceWheel`
2. When hovering off any segment, call `onSegmentHover(defaultSegment)` instead of `onSegmentHover(null)`
3. Pass `"Market Intelligence"` as the default from `GDSlide4Proposition`

---

### File Changes

#### File 1: `src/components/globaldata-slides/ConnectedIntelligenceWheel.tsx`

**Update interface (lines 3-7):**
```tsx
interface ConnectedIntelligenceWheelProps {
  activeSegment?: string | null;
  defaultSegment?: string;  // Add this new prop
  onSegmentHover?: (segmentName: string | null) => void;
  onSegmentClick?: (segmentName: string) => void;
}
```

**Update component props (lines 9-13):**
```tsx
const ConnectedIntelligenceWheel = ({
  activeSegment,
  defaultSegment = "Market Intelligence",  // Add default value
  onSegmentHover,
  onSegmentClick,
}: ConnectedIntelligenceWheelProps) => {
```

**Update onMouseLeave handler (line 120):**
```tsx
// Before
onMouseLeave={() => onSegmentHover?.(null)}

// After
onMouseLeave={() => onSegmentHover?.(defaultSegment)}
```

---

#### File 2: `src/components/globaldata-slides/GDSlide4Proposition.tsx`

**Pass defaultSegment to the wheel (lines 44-48):**
```tsx
<ConnectedIntelligenceWheel
  activeSegment={activeSegment}
  defaultSegment="Market Intelligence"
  onSegmentHover={setActiveSegment}
  onSegmentClick={setActiveSegment}
/>
```

---

### Behavior After Fix

| Action | Before | After |
|--------|--------|-------|
| Page load | Market Intelligence shown | Market Intelligence shown |
| Hover on segment | That segment shown | That segment shown |
| Hover off segment | Blank placeholder | Market Intelligence shown |
| Click segment | That segment shown | That segment shown |

The Solution Value Panel will always display meaningful content - no more blank space.

---

### Implementation Steps

1. Add `defaultSegment` prop to `ConnectedIntelligenceWheel` interface and component
2. Set default value to `"Market Intelligence"`
3. Update `onMouseLeave` handler to use `defaultSegment` instead of `null`
4. Pass `defaultSegment="Market Intelligence"` from `GDSlide4Proposition`

