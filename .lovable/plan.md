
## Fix Content Overflow Issues Across GlobalData Deck Slides

### Problem Summary

The user reports that content is being cut off on Slide 3 (Before/After copy boxes) and Slide 4 (Connected Intelligence Wheel), requiring scrolling on laptop screens (1366x768). The target is to ensure all slides fit within the viewport without scrolling on standard laptop screens.

---

### Root Cause Analysis

After reviewing the code, I identified the following issues:

1. **Slide 3 (GDSlide3BeforeAfter.tsx)**
   - The grid containing Before/After columns uses `flex-1` which tries to expand beyond available space
   - SVG containers at `h-20` (80px) combined with icon grids and indicators creates overflow
   - The layout doesn't properly constrain to available height

2. **Slide 4 (GDSlide4Proposition.tsx)**
   - `ConnectedIntelligenceWheel` component has no max-height constraint (`max-w-md` but no height limit)
   - The wheel SVG expands freely, pushing the `SolutionValuePanel` off-screen
   - Gap between elements at `gap-3`/`gap-4` adds unnecessary space

3. **ConnectedIntelligenceWheel.tsx**
   - Uses `max-w-md` (448px) which on smaller screens causes the SVG to be too large
   - No height constraints on the wrapper or SVG

4. **SolutionValuePanel.tsx**
   - Uses `min-h-[200px]` which prevents proper shrinking when space is limited
   - Content sections have generous padding

---

### Technical Solution

#### 1. Fix Slide 3 - Before/After Layout

**File:** `src/components/globaldata-slides/GDSlide3BeforeAfter.tsx`

**Changes:**
- Add responsive tabs for smaller screens (as user requested)
- On larger screens, keep side-by-side layout with constrained heights
- Reduce SVG container from `h-20` to `h-16`
- Remove `flex-1` from grid to prevent over-expansion
- Tighten spacing in icon grid and indicators

```text
Current Layout (Lines 50-157):
+------------------------------------------+
| flex flex-col gap-3 h-full max-h-full    |
|   +-- grid lg:grid-cols-2 gap-4 flex-1   | <- flex-1 causes expansion
|   |     +-- Before Column                |
|   |     |   h-20 illustration            | <- Too tall
|   |     |   grid grid-cols-2 gap-2 flex-1|
|   |     |   indicators gap-1             |
|   |     +-- After Column                 |
|   +-- Metrics Banner p-3                 |
+------------------------------------------+

New Layout:
+------------------------------------------+
| flex flex-col gap-2 h-full max-h-full    | <- Reduced gap
|   +-- Tabs (hidden lg:hidden)            | <- NEW: Mobile tabs
|   +-- grid lg:grid-cols-2 gap-3          | <- No flex-1
|   |     +-- Before Column                |
|   |     |   h-14 illustration            | <- Reduced height
|   |     |   grid grid-cols-2 gap-1.5     |
|   |     |   indicators gap-1             |
|   |     +-- After Column                 |
|   +-- Metrics Banner p-2                 | <- Reduced padding
+------------------------------------------+
```

**Specific Line Changes:**

| Line | Current | New |
|------|---------|-----|
| 50 | `gap-3 h-full max-h-full` | `gap-2 h-full max-h-full` |
| 52 | `grid lg:grid-cols-2 gap-4 flex-1` | `grid lg:grid-cols-2 gap-3` |
| 60, 107 | `h-20 mb-1` | `h-14 mb-1` |
| 65, 112 | `grid-cols-2 gap-2 flex-1` | `grid-cols-2 gap-1.5` |
| 68, 115 | `w-7 h-7` | `w-6 h-6` |
| 80, 127 | `mt-2 pt-2 ... gap-1` | `mt-1.5 pt-1.5 ... gap-1` |
| 142 | `p-3` | `p-2` |
| 143 | `gap-2` | `gap-1.5` |

**Add Tab State (new code at line 27):**
```tsx
const [activeTab, setActiveTab] = useState<'before' | 'after'>('before');
```

**Add Tabs UI (insert after line 51):**
```tsx
{/* Mobile Tabs */}
<div className="flex lg:hidden gap-2 mb-2">
  <button
    onClick={() => setActiveTab('before')}
    className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${
      activeTab === 'before'
        ? 'bg-destructive/20 text-destructive border border-destructive/30'
        : 'bg-card/50 text-muted-foreground border border-border/50'
    }`}
  >
    Before
  </button>
  <button
    onClick={() => setActiveTab('after')}
    className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${
      activeTab === 'after'
        ? 'bg-primary/20 text-primary border border-primary/30'
        : 'bg-card/50 text-muted-foreground border border-border/50'
    }`}
  >
    After
  </button>
</div>
```

**Conditionally show columns on mobile:**
```tsx
{/* Before Column - Line 54 */}
<div className={`relative ${activeTab === 'before' ? 'block' : 'hidden'} lg:block`}>

{/* After Column - Line 101 */}
<div className={`relative ${activeTab === 'after' ? 'block' : 'hidden'} lg:block`}>
```

---

#### 2. Fix Slide 4 - Proposition Layout

**File:** `src/components/globaldata-slides/GDSlide4Proposition.tsx`

**Changes:**
- Add explicit max-height constraint to the wheel container
- Reduce gaps between sections
- Add overflow handling

| Line | Current | New |
|------|---------|-----|
| 32 | `gap-3 h-full max-h-full` | `gap-2 h-full max-h-full` |
| 34 | `rounded-xl p-4` | `rounded-xl p-3` |
| 41 | `gap-4 items-center min-h-0` | `gap-3 items-center min-h-0 max-h-[calc(100%-100px)]` |
| 43 | `h-full` | `h-full max-h-[300px]` |
| 57 | `rounded-lg p-3` | `rounded-lg p-2` |

---

#### 3. Fix ConnectedIntelligenceWheel Size

**File:** `src/components/globaldata-slides/ConnectedIntelligenceWheel.tsx`

**Changes:**
- Reduce max-width from `max-w-md` to `max-w-xs`
- Add max-height constraint to SVG

| Line | Current | New |
|------|---------|-----|
| 88 | `max-w-md mx-auto` | `max-w-xs mx-auto` |
| 89 | `w-full h-auto` | `w-full h-auto max-h-[280px]` |

---

#### 4. Fix SolutionValuePanel Height

**File:** `src/components/globaldata-slides/SolutionValuePanel.tsx`

**Changes:**
- Reduce minimum height and add maximum height constraint
- Reduce padding in content sections

| Line | Current | New |
|------|---------|-----|
| 26 | `min-h-[200px]` | `min-h-[150px] max-h-[300px]` |
| 48 | `min-h-[200px]` | `min-h-[150px] max-h-[300px]` |
| 48 | `p-4` | `p-3` |
| 63 | `mb-2 p-2` | `mb-1.5 p-1.5` |
| 75 | `mb-2 p-2` | `mb-1.5 p-1.5` |
| 104 | `mb-2 p-2` | `mb-1.5 p-1.5` |

---

### Files to Modify

| File | Changes |
|------|---------|
| `GDSlide3BeforeAfter.tsx` | Add tab state, add mobile tabs UI, reduce heights/gaps/padding |
| `GDSlide4Proposition.tsx` | Add max-height constraints, reduce gaps/padding |
| `ConnectedIntelligenceWheel.tsx` | Reduce max-width, add max-height to SVG |
| `SolutionValuePanel.tsx` | Reduce min-height, add max-height, reduce padding |

---

### Expected Height Calculation (768px viewport)

**After changes:**

| Element | Height |
|---------|--------|
| Container padding | 48px |
| Header (title + subtitle) | 60px |
| Available for content | 660px |

**Slide 3 content:**
- Main gap: 8px
- Before/After grid: ~220px (with reduced heights)
- Metrics banner: ~60px
- Total: ~290px (fits comfortably)

**Slide 4 content:**
- Main gap: 8px
- Value proposition box: ~60px
- Intelligence hub: 300px max (wheel + panel)
- Bottom callout: ~50px
- Total: ~420px (fits comfortably)

---

### Testing Checklist

After implementation:
1. View deck at 1366x768 resolution
2. Verify Slide 3 Before/After columns show fully without scrolling
3. Verify Slide 4 wheel and panel fit without cutoff
4. Test mobile tabs work correctly on Slide 3
5. Verify all other slides still fit properly
