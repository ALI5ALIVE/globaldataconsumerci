

## Fix Slide 3: Remove Animation and Increase Container Size

### Summary

Two fixes needed:
1. **Remove animation** from the "After" illustration by eliminating the `useEffect` interval and using static values
2. **Increase container height** to prevent images from overlapping the text below

---

### Changes Required

#### File 1: `src/components/globaldata-slides/GDAfterConnectedIllustration.tsx`

**Remove animation effect (lines 19-26):**

Delete the `flowOffset` state and `useEffect`:
```tsx
// REMOVE these lines:
const [flowOffset, setFlowOffset] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setFlowOffset((prev) => (prev + 1) % 20);
  }, 80);
  return () => clearInterval(interval);
}, []);
```

**Update unified arc (line 103):**
```tsx
// Before
strokeDasharray={`${flowOffset} 5`}

// After - use static solid line
strokeDasharray="none"
```

**Update hub outer ring (line 139):**
```tsx
// Before
strokeDasharray={`${10 + flowOffset} 5`}

// After - use static dashed pattern
strokeDasharray="10 5"
```

**Remove unused import:**
```tsx
// Before
import { useState, useEffect } from "react";

// After
import { useState } from "react";
```

---

#### File 2: `src/components/globaldata-slides/GDSlide3BeforeAfter.tsx`

**Increase illustration container heights:**

Currently both containers use `h-32` (128px). The SVG viewBoxes are 150-155px tall, plus labels extend ~12px below nodes. Need to increase to `h-36` (144px) to give proper space.

**Line 60 - Before illustration:**
```tsx
// Before
<div className="h-32 mb-3">

// After
<div className="h-36 mb-3">
```

**Line 107 - After illustration:**
```tsx
// Before
<div className="h-32 mb-3">

// After
<div className="h-36 mb-3">
```

---

### Visual Result

| Change | Before | After |
|--------|--------|-------|
| Arc animation | Flowing dash pattern | Static solid line |
| Hub ring animation | Rotating dash pattern | Static dashed ring |
| Container height | 128px (h-32) | 144px (h-36) |
| Text overlap | Images clip into text | Proper spacing |

---

### Files Summary

| File | Lines Changed | Description |
|------|---------------|-------------|
| `GDAfterConnectedIllustration.tsx` | 4 edits | Remove useEffect, remove flowOffset state, static strokeDasharray |
| `GDSlide3BeforeAfter.tsx` | 2 edits | Change h-32 to h-36 on lines 60 and 107 |

