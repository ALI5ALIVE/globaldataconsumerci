

# Make Slide 9 (The Return) Completely Static

## Goal
Remove all animation logic from "The Return" slide so that all content (3 ROI pillars, key message, and 5 stage bars) is visible immediately on load as static content.

---

## Current State
The slide has complex animation logic:
- `computeTimingsFromScript()` function that derives animation timings from narration
- `activeStep` and `highlightedStage` states controlling visibility
- `useEffect` syncing animations to narration progress
- `isVisible()` and `isPillarVisible()` helper functions
- Conditional opacity/translate classes on pillars and key message
- Stage bars with dynamic highlighting based on progress

---

## Changes Required

### File: `src/components/globaldata-slides/GDSlide8ROI.tsx`

### 1. Remove Animation Logic
Delete the following:
- `computeTimingsFromScript()` function (lines 41-99)
- `stepOrder` constant (line 101)
- All state variables: `activeStep`, `highlightedStage`, `isNarrationControlled`, `hasEverPlayed` (lines 116-123)
- The `useMemo` call for timings (line 113)
- The entire `useEffect` block (lines 125-150)
- `isVisible()` and `isPillarVisible()` helper functions (lines 152-158)
- Import for `getGlobalDataNarration` (line 5)

### 2. Update UI to Static Display

**ROI Pillars (lines 180-184):**
Change from:
```tsx
className={`... ${isPillarVisible(i) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
```
To:
```tsx
className="bg-card/50 border border-border/50 rounded-xl p-4 hover:border-primary/30 transition-all group flex flex-col"
```

**Compounding Message (lines 219-221):**
Change from:
```tsx
className={`... ${isVisible('compounding') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
```
To:
```tsx
className="bg-gradient-to-r from-primary/10 to-sky-500/5 border border-primary/30 rounded-xl p-4"
```

**Stage Bars (lines 238-260):**
Change from dynamic highlighting logic to static graduated display:
```tsx
{[1, 2, 3, 4, 5].map((stage) => (
  <div key={stage} className="flex flex-col items-center">
    <div 
      className="w-14 bg-gradient-to-t from-primary to-sky-400 rounded-t-lg"
      style={{ 
        height: `${16 + stage * 16}px`,
        opacity: 0.4 + (stage * 0.12)
      }}
    />
    <span className="text-[10px] mt-1.5 text-muted-foreground">
      Stage {stage}
    </span>
  </div>
))}
```

---

## Simplified Component Structure

After changes, the component will:
1. Keep all visual elements (3 pillars, key message, 5 stage bars)
2. Show everything immediately on load
3. Pass narration props to container for play button functionality
4. Have no internal animation state

---

## What Stays the Same
- The `roiPillars` data array with all benefits
- The visual layout and styling
- The key message content
- The 5 stage bars in the compounding chart
- Narration props passed to `GDSlideContainer` (play button still works)

---

## Result
Slide 9 (The Return) will display:
- All 3 ROI pillars (Speed, Growth, Cost) with their metrics (70%, 2x, 30%)
- The key message about ROI compounding
- All 5 stage bars showing the maturity progression

All content visible immediately as static elements - no animation, no progressive reveal.

