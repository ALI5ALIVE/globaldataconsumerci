
## Fix Slides 3 and 4 - Content Overflow Issues

### Problem Analysis

Both slides are experiencing content cut-off because:

1. **Slide Container (`GDSlideContainer.tsx`)**: Uses `py-12 sm:py-16` (48-64px vertical padding) which reduces available content space significantly
2. **Slide 3**: SVG illustrations at `h-32` (128px each) take up too much space, plus fixed-height indicator boxes
3. **Slide 4**: The Connected Intelligence Wheel has no max-height constraint and expands beyond available space

---

### Technical Changes

#### 1. Reduce GDSlideContainer Vertical Padding

**File:** `src/components/globaldata-slides/GDSlideContainer.tsx`

**Line 46** - Reduce section padding:
```tsx
// Current
className={cn(
  "h-screen w-full flex flex-col px-6 sm:px-10 lg:px-16 py-12 sm:py-16 snap-start relative overflow-hidden",
  ...
)}

// New  
className={cn(
  "h-screen w-full flex flex-col px-6 sm:px-10 lg:px-16 py-8 sm:py-10 snap-start relative overflow-hidden",
  ...
)}
```

**Line 92** - Reduce header margin:
```tsx
// Current
<div className="mb-4 sm:mb-6">

// New
<div className="mb-3 sm:mb-4">
```

---

#### 2. Fix Slide 3 Before/After Layout

**File:** `src/components/globaldata-slides/GDSlide3BeforeAfter.tsx`

**Lines 60, 107** - Reduce SVG illustration height:
```tsx
// Current
<div className="h-32 mb-2">

// New
<div className="h-24 mb-1">
```

**Lines 80, 127** - Reduce indicator section spacing:
```tsx
// Current
<div className="mt-3 pt-3 border-t ... grid grid-cols-2 gap-2">

// New
<div className="mt-2 pt-2 border-t ... grid grid-cols-2 gap-1.5">
```

**Lines 81, 85, 128, 132** - Reduce indicator padding:
```tsx
// Current
<div className="bg-destructive/10 rounded-lg p-2 text-center">

// New
<div className="bg-destructive/10 rounded-lg p-1.5 text-center">
```

**Line 142** - Reduce metrics banner padding:
```tsx
// Current
<div className="bg-card border border-border/50 rounded-xl p-4">

// New
<div className="bg-card border border-border/50 rounded-xl p-3">
```

**Line 143** - Reduce metrics grid gap:
```tsx
// Current
<div className="grid grid-cols-3 gap-4">

// New
<div className="grid grid-cols-3 gap-3">
```

---

#### 3. Fix Slide 4 Wheel and Panel Layout

**File:** `src/components/globaldata-slides/GDSlide4Proposition.tsx`

**Line 41** - Constrain the grid height:
```tsx
// Current
<div className="flex-1 grid lg:grid-cols-2 gap-4 items-center min-h-0">

// New
<div className="flex-1 grid lg:grid-cols-2 gap-3 items-center min-h-0 max-h-full">
```

**Line 43** - Add max height to wheel container:
```tsx
// Current
<div className="flex items-center justify-center h-full">

// New
<div className="flex items-center justify-center h-full max-h-[320px]">
```

**File:** `src/components/globaldata-slides/ConnectedIntelligenceWheel.tsx`

**Line 88** - Add max-width and max-height constraints:
```tsx
// Current
<div className="relative w-full max-w-md mx-auto">
  <svg viewBox="0 0 400 400" className="w-full h-auto">

// New
<div className="relative w-full max-w-xs mx-auto">
  <svg viewBox="0 0 400 400" className="w-full h-auto max-h-[280px]">
```

**File:** `src/components/globaldata-slides/SolutionValuePanel.tsx`

**Lines 26, 48** - Reduce minimum heights and add max height:
```tsx
// Current
<div className="h-full min-h-[200px] flex items-center ...">

// New
<div className="h-full min-h-[160px] max-h-[320px] flex items-center ...">
```

```tsx
// Current (line 48)
className="h-full min-h-[200px] bg-card/50 border rounded-xl p-4 overflow-y-auto"

// New
className="h-full min-h-[160px] max-h-[320px] bg-card/50 border rounded-xl p-3 overflow-y-auto"
```

---

### Summary of Changes

| File | Lines | Change |
|------|-------|--------|
| `GDSlideContainer.tsx` | 46 | `py-12 sm:py-16` → `py-8 sm:py-10` |
| `GDSlideContainer.tsx` | 92 | `mb-4 sm:mb-6` → `mb-3 sm:mb-4` |
| `GDSlide3BeforeAfter.tsx` | 60, 107 | `h-32 mb-2` → `h-24 mb-1` |
| `GDSlide3BeforeAfter.tsx` | 80, 127 | `mt-3 pt-3 gap-2` → `mt-2 pt-2 gap-1.5` |
| `GDSlide3BeforeAfter.tsx` | 81, 85, 128, 132 | `p-2` → `p-1.5` |
| `GDSlide3BeforeAfter.tsx` | 142-143 | `p-4 gap-4` → `p-3 gap-3` |
| `GDSlide4Proposition.tsx` | 41 | Add `max-h-full` |
| `GDSlide4Proposition.tsx` | 43 | Add `max-h-[320px]` |
| `ConnectedIntelligenceWheel.tsx` | 88 | `max-w-md` → `max-w-xs`, add `max-h-[280px]` |
| `SolutionValuePanel.tsx` | 26, 48 | `min-h-[200px]` → `min-h-[160px] max-h-[320px]`, `p-4` → `p-3` |

---

### Expected Outcome

After these changes:
- **Slide 3**: Before/After columns with illustrations and copy boxes will fit within viewport without scrolling
- **Slide 4**: Connected Intelligence Wheel and Solution Value Panel will be fully visible
- Both slides will maintain `h-screen` constraint with `overflow-hidden`
- No content will be cut off at the top or bottom
- All slides following the same container will benefit from reduced padding
