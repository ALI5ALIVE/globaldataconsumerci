

## Ensure All Slides Fit Within Screen Without Scrolling

### Problem Analysis

The current slide architecture allows content to overflow beyond the viewport height because:

1. **GDSlideContainer** uses `min-h-screen` - this sets a minimum height but allows slides to grow taller
2. **Content areas** use `flex-1` which can expand indefinitely
3. **No height constraints** on content sections means complex slides (pyramid, maturity curve, value chain) can push beyond screen bounds

### Solution Overview

Convert all slides from flexible-height containers to fixed viewport-height containers with proper content constraints.

---

### Technical Changes

#### 1. Update GDSlideContainer (Primary Fix)

**File:** `src/components/globaldata-slides/GDSlideContainer.tsx`

Change the section container from `min-h-screen` to `h-screen` with `overflow-hidden`:

```tsx
// Current (line 43-49)
className={cn(
  "min-h-screen w-full flex flex-col px-6 sm:px-10 lg:px-16 py-16 sm:py-20 snap-start relative",
  ...
)}

// New - Fixed height with overflow hidden
className={cn(
  "h-screen w-full flex flex-col px-6 sm:px-10 lg:px-16 py-12 sm:py-16 snap-start relative overflow-hidden",
  ...
)}
```

Also constrain the content area:

```tsx
// Current (line 111)
<div className="w-full flex-1">{children}</div>

// New - Add overflow handling
<div className="w-full flex-1 overflow-hidden">{children}</div>
```

---

#### 2. Update SlideContainer (For Comply365 Deck Consistency)

**File:** `src/components/slides/SlideContainer.tsx`

Apply the same changes as GDSlideContainer:
- Change `min-h-screen` to `h-screen`
- Add `overflow-hidden`
- Reduce padding from `py-16 sm:py-20` to `py-12 sm:py-16`

---

#### 3. Update GDSlide0Title (Title Slide)

**File:** `src/components/globaldata-slides/GDSlide0Title.tsx`

Change `min-h-screen` to `h-screen`:

```tsx
// Current (line 35)
className="min-h-screen w-full flex flex-col items-center justify-center px-6 sm:px-10 lg:px-16 py-16 snap-start relative overflow-hidden bg-background"

// New
className="h-screen w-full flex flex-col items-center justify-center px-6 sm:px-10 lg:px-16 py-12 snap-start relative overflow-hidden bg-background"
```

---

#### 4. Update Individual Slide Content Heights

For slides with complex layouts, add explicit height constraints:

**GDSlide6ValuePyramid.tsx** (line 319):
```tsx
// Current
<div className="grid lg:grid-cols-[3fr_2fr] gap-6 lg:gap-8 items-stretch h-full">

// New - Add max height constraint
<div className="grid lg:grid-cols-[3fr_2fr] gap-4 lg:gap-6 items-stretch h-full max-h-full overflow-hidden">
```

**GDSlide7MaturityCurve.tsx** (line 281):
```tsx
// Current
<div className="space-y-4">

// New - Constrain to available height
<div className="flex flex-col gap-3 h-full max-h-full overflow-hidden">
```

**GDSlide5ValueChain.tsx** (line 169):
```tsx
// Current
<div className="flex flex-col gap-4 h-full">

// New
<div className="flex flex-col gap-3 h-full max-h-full overflow-hidden">
```

---

#### 5. Reduce Spacing Throughout All Slides

To ensure content fits, reduce:
- **Container padding**: `py-16 sm:py-20` → `py-12 sm:py-16`
- **Header margins**: `mb-8 sm:mb-12` → `mb-4 sm:mb-6`
- **Content gaps**: `gap-6` → `gap-3` or `gap-4` where appropriate

---

### Files to Modify

| File | Changes |
|------|---------|
| `src/components/globaldata-slides/GDSlideContainer.tsx` | `min-h-screen` → `h-screen`, add overflow-hidden, reduce padding |
| `src/components/slides/SlideContainer.tsx` | Same as above |
| `src/components/globaldata-slides/GDSlide0Title.tsx` | `min-h-screen` → `h-screen` |
| `src/components/globaldata-slides/GDSlide5ValueChain.tsx` | Reduce gaps, add overflow constraints |
| `src/components/globaldata-slides/GDSlide6ValuePyramid.tsx` | Reduce gaps, add overflow constraints |
| `src/components/globaldata-slides/GDSlide7MaturityCurve.tsx` | Change layout to flex with proper constraints |
| `src/components/globaldata-slides/GDSlide8ROI.tsx` | Reduce gaps |
| `src/components/globaldata-slides/GDSlide9WhyGlobalData.tsx` | Reduce gaps |

---

### Summary

| Change | Impact |
|--------|--------|
| `h-screen` instead of `min-h-screen` | Fixes slide to exactly viewport height |
| `overflow-hidden` on containers | Prevents any content from extending beyond bounds |
| Reduced padding (py-16 → py-12) | Creates more vertical space for content |
| Reduced header margins | More space for main content |
| Reduced content gaps | More compact layouts that fit within bounds |

This ensures each slide is exactly one viewport tall with no scrolling required within individual slides.

