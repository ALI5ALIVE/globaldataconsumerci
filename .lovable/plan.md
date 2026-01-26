
## Fix Slide 3 Content Overflow and Title Slide Logo

### Problem 1: Title Slide Logo

**Current Issue**: The `globaldata-logo-white.svg` file is a simple text-only placeholder SVG, not the branded GlobalData logo with the circular "G" icon.

**Fix**: Replace the placeholder SVG with a proper GlobalData-style branded logo that includes:
- A circular "G" icon with an integrated arrow/orbital element
- The "GlobalData" text

**File to Change**: `src/assets/globaldata-logo-white.svg`

```xml
<!-- New branded logo SVG -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 32" fill="none">
  <!-- Circular G icon with arrow -->
  <circle cx="16" cy="16" r="14" stroke="white" stroke-width="2" fill="none"/>
  <path d="M16 6 C9 6 4 11 4 18 C4 25 9 30 16 30 C23 30 28 25 28 18 L20 18" 
        stroke="white" stroke-width="2" fill="none" stroke-linecap="round"/>
  <path d="M22 14 L28 18 L22 22" stroke="white" stroke-width="2" fill="none" 
        stroke-linecap="round" stroke-linejoin="round"/>
  <!-- Orbital dot -->
  <circle cx="26" cy="8" r="2.5" fill="#3B82F6"/>
  <!-- Text -->
  <text x="38" y="22" font-family="system-ui, -apple-system, sans-serif" 
        font-size="18" font-weight="600" fill="white">GlobalData</text>
</svg>
```

---

### Problem 2: Slide 3 Before/After Content Cut Off

**Current Issue**: 
- SVG illustrations use `h-32` (128px) which is too tall
- Combined with icon grids and indicator sections, content overflows the viewport
- The `GDSlideContainer` uses `py-12 sm:py-16` (48-64px) of vertical padding

**Root Cause Analysis**:
- Each Before/After column contains:
  - Label badge: ~20px
  - SVG illustration: 128px (h-32)  
  - 4-item icon grid: ~100px
  - 2-column indicator section: ~60px
  - Padding and margins: ~50px
- Total per column: ~360px minimum
- Plus: Title header (~80px), Metrics banner (~100px)
- Container padding: ~96px (48px top + 48px bottom)
- Total needed: ~630px+ but viewport height minus container padding leaves less space

**Technical Changes**:

#### 1. Reduce GDSlideContainer Padding

**File**: `src/components/globaldata-slides/GDSlideContainer.tsx`

**Line 46** - Reduce vertical padding:
```tsx
// Current
"h-screen w-full flex flex-col px-6 sm:px-10 lg:px-16 py-12 sm:py-16 snap-start relative overflow-hidden"

// New
"h-screen w-full flex flex-col px-6 sm:px-10 lg:px-16 py-6 sm:py-8 snap-start relative overflow-hidden"
```

**Line 92** - Reduce header margin:
```tsx
// Current
<div className="mb-4 sm:mb-6">

// New
<div className="mb-2 sm:mb-3">
```

---

#### 2. Reduce Illustration Height in Slide 3

**File**: `src/components/globaldata-slides/GDSlide3BeforeAfter.tsx`

**Lines 60, 107** - Reduce SVG container height from `h-32` to `h-20`:
```tsx
// Current
<div className="h-32 mb-2">

// New
<div className="h-20 mb-1">
```

**Lines 80, 127** - Reduce indicator section spacing:
```tsx
// Current
<div className="mt-3 pt-3 border-t ... grid grid-cols-2 gap-2">

// New
<div className="mt-2 pt-2 border-t ... grid grid-cols-2 gap-1">
```

**Lines 81, 85, 128, 132** - Reduce indicator box padding:
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
<div className="grid grid-cols-3 gap-2">
```

---

### Summary of All Changes

| File | Lines | Change |
|------|-------|--------|
| `globaldata-logo-white.svg` | All | Replace with branded logo with G icon |
| `GDSlideContainer.tsx` | 46 | `py-12 sm:py-16` → `py-6 sm:py-8` |
| `GDSlideContainer.tsx` | 92 | `mb-4 sm:mb-6` → `mb-2 sm:mb-3` |
| `GDSlide3BeforeAfter.tsx` | 60, 107 | `h-32 mb-2` → `h-20 mb-1` |
| `GDSlide3BeforeAfter.tsx` | 80, 127 | `mt-3 pt-3 gap-2` → `mt-2 pt-2 gap-1` |
| `GDSlide3BeforeAfter.tsx` | 81, 85, 128, 132 | `p-2` → `p-1.5` |
| `GDSlide3BeforeAfter.tsx` | 142 | `p-4` → `p-3` |
| `GDSlide3BeforeAfter.tsx` | 143 | `gap-4` → `gap-2` |

---

### Space Savings Calculation

**Before Changes** (approximate):
- Container padding: 96px
- Header: 80px
- Illustrations: 256px (128px x 2 rows worth)
- Content: 160px
- Metrics: 100px
- **Total**: 692px (exceeds many viewports)

**After Changes**:
- Container padding: 48px (saved 48px)
- Header: 60px (saved 20px)
- Illustrations: 160px (saved 96px)
- Content: 140px (saved 20px)
- Metrics: 80px (saved 20px)
- **Total**: 488px (fits 768px+ viewports comfortably)

---

### Expected Outcome

1. **Title Slide**: GlobalData logo displays with the branded circular G icon with arrow, matching the professional brand identity
2. **Slide 3**: Before/After columns with illustrations, copy boxes, and indicators all fit within viewport without scrolling
3. **All Slides**: Reduced container padding benefits all slides in the deck, giving more room for content
