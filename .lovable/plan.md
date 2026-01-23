

## Slide Deck Layout Optimization Plan

### Problem Summary

After reviewing all slide components and the shared container, I've identified several issues that cause content overflow and cut-off elements across the GlobalData slide deck:

**Core Issues Identified:**

1. **Slide 10 (Solutions)**: Uses `space-y-6 sm:space-y-8` which doesn't constrain height - content overflows
2. **Slide 7 (Maturity Curve)**: Grid layout doesn't have `flex-1` to fill available space properly
3. **Slides 1, 2, 3**: Use `flex-1` on inner grids which can cause overflow when combined with `gap-6` 
4. **Variable spacing**: Different slides use inconsistent gap values (gap-4, gap-5, gap-6) causing uneven layouts
5. **Missing overflow constraints**: Some child elements lack `overflow-hidden` protection

---

### Technical Implementation

#### 1. Fix GDSlide10Solutions (Most Critical)

**File:** `src/components/globaldata-slides/GDSlide10Solutions.tsx`

**Current Issue (line 74):**
```tsx
<div className="space-y-6 sm:space-y-8">
```
Uses `space-y` which doesn't constrain to parent height.

**Fix:**
```tsx
<div className="flex flex-col gap-4 h-full max-h-full overflow-hidden">
```

Also reduce spacing in children:
- Line 97: Change grid gap from `gap-4` to `gap-3`
- Line 132: Stats grid reduce gap to `gap-3`
- GDSolutionsFlow component may need height constraints

---

#### 2. Fix GDSlide7MaturityCurve Grid

**File:** `src/components/globaldata-slides/GDSlide7MaturityCurve.tsx`

**Current Issue (line 282):**
```tsx
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
```
Grid doesn't fill parent height, causing SVG to not scale properly.

**Fix:**
```tsx
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch flex-1">
```

Also update the wrapper (line 281) to use `flex-1` instead of just `h-full`:
```tsx
<div className="flex flex-col gap-3 flex-1 max-h-full overflow-hidden">
```

---

#### 3. Standardize Slide 1-4 Layouts

**File:** `src/components/globaldata-slides/GDSlide1GrowthReality.tsx`

**Current (line 52):**
```tsx
<div className="flex flex-col gap-6 h-full">
```

**Fix:**
```tsx
<div className="flex flex-col gap-4 h-full max-h-full overflow-hidden">
```

---

**File:** `src/components/globaldata-slides/GDSlide2IntelligenceGap.tsx`

**Current (line 66):**
```tsx
<div className="flex flex-col gap-6 h-full">
```

**Fix:**
```tsx
<div className="flex flex-col gap-4 h-full max-h-full overflow-hidden">
```

---

**File:** `src/components/globaldata-slides/GDSlide3BeforeAfter.tsx`

**Current (line 50):**
```tsx
<div className="flex flex-col gap-4 h-full">
```

**Fix:**
```tsx
<div className="flex flex-col gap-3 h-full max-h-full overflow-hidden">
```

Also add height constraint to illustrations (lines 60, 107):
```tsx
<div className="h-32 mb-2">
```

---

**File:** `src/components/globaldata-slides/GDSlide4Proposition.tsx`

**Current (line 32):**
```tsx
<div className="flex flex-col gap-5 h-full">
```

**Fix:**
```tsx
<div className="flex flex-col gap-4 h-full max-h-full overflow-hidden">
```

---

#### 4. Fix GDSolutionsFlow Component Height

**File:** `src/components/globaldata-slides/GDSolutionsFlow.tsx`

Add height constraints to ensure it fits within available space:
- Reduce card min-height from 140px to 120px
- Add `max-h-full overflow-hidden` to main container

---

#### 5. Adjust GDSlide0Title Vertical Spacing

**File:** `src/components/globaldata-slides/GDSlide0Title.tsx`

**Current (line 65):**
```tsx
<div className="relative z-10 max-w-5xl w-full text-center space-y-8 sm:space-y-12">
```

**Fix:**
```tsx
<div className="relative z-10 max-w-5xl w-full text-center space-y-6 sm:space-y-8">
```

Also reduce agenda grid spacing (line 103):
```tsx
<div className="pt-2 sm:pt-4">
```

---

### Summary of Changes

| File | Line(s) | Change |
|------|---------|--------|
| `GDSlide0Title.tsx` | 65, 103 | Reduce spacing |
| `GDSlide1GrowthReality.tsx` | 52 | Add overflow-hidden, reduce gap |
| `GDSlide2IntelligenceGap.tsx` | 66 | Add overflow-hidden, reduce gap |
| `GDSlide3BeforeAfter.tsx` | 50, 60, 107 | Reduce gaps, constrain illustration height |
| `GDSlide4Proposition.tsx` | 32 | Reduce gap, add overflow-hidden |
| `GDSlide7MaturityCurve.tsx` | 281-282 | Use flex-1, items-stretch |
| `GDSlide10Solutions.tsx` | 74, 97, 132 | Convert to flex layout, reduce gaps |
| `GDSolutionsFlow.tsx` | Main container | Add max-h-full, reduce card heights |

---

### Design Principles Applied

1. **Consistent gap sizing**: Standardize to `gap-3` or `gap-4` across all slides
2. **Height inheritance**: Use `h-full max-h-full` to ensure containers respect parent bounds
3. **Overflow protection**: Add `overflow-hidden` to prevent content spillover
4. **Flex-based layouts**: Use `flex-1` for content areas that should fill remaining space
5. **Reduced illustration heights**: Scale down SVG containers from h-36 to h-32 where needed

