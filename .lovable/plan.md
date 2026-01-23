

## Fix Slide 5: Add Solution Labels and Fix Black-on-Black Styling

### Summary

Fix two issues in the Value Chain slide:
1. **Add solution text labels** - Show which solutions support each workflow stage, not just icons
2. **Fix dark styling** - Increase contrast so solution boxes are visible against the dark background

---

### Issue Analysis

**Current Problems:**

1. **Solution icons without labels** - Each workflow card shows 2-3 small icons, but no text explaining which solutions they represent. Users must guess what Target, TrendingUp, Swords icons mean.

2. **Poor contrast** - The solution icon containers use:
   ```tsx
   style={{ backgroundColor: solutionConfig[sol].color + "20" }}
   ```
   This creates 20% opacity backgrounds that are nearly invisible on the dark `bg-card/30` cards.

---

### Solution 1: Add Solution Text Labels

**Change workflow cards to show solution names:**

```text
+------------------------+
|   Trend & Strategy     |
|                        |
|  [Icon] Strategic      |
|  [Icon] Market         |
|                        |
|    "Where to Play"     |
+------------------------+
```

Each workflow card will display:
- Stage name (existing)
- Solution list with icon + label (improved)
- Combination tag (existing)

---

### Solution 2: Fix Black-on-Black Styling

**Increase opacity and add borders:**

| Element | Current | Fixed |
|---------|---------|-------|
| Icon container background | `color + "20"` (20%) | `color + "30"` (30%) |
| Icon container border | None | `1px solid ${color}60` |
| Card background | `bg-card/30` | `bg-card/50` |
| Card border when inactive | `border-border/50` | `border-border` |

---

### File Changes

**File:** `src/components/globaldata-slides/GDSlide5ValueChain.tsx`

#### Change 1: Update Workflow Card Solution Display (lines 213-227)

**Current:**
```tsx
{/* Solution Icons */}
<div className="flex justify-center gap-1 mb-2">
  {stage.solutions.map((sol) => {
    const Icon = solutionConfig[sol].icon;
    return (
      <div 
        key={sol}
        className="w-6 h-6 rounded-md flex items-center justify-center"
        style={{ backgroundColor: solutionConfig[sol].color + "20" }}
      >
        <Icon className="w-3.5 h-3.5" style={{ color: solutionConfig[sol].color }} />
      </div>
    );
  })}
</div>
```

**Fixed:**
```tsx
{/* Solution Labels with Icons */}
<div className="flex flex-col gap-1 mb-2">
  {stage.solutions.map((sol) => {
    const Icon = solutionConfig[sol].icon;
    return (
      <div 
        key={sol}
        className="flex items-center gap-1.5 px-2 py-0.5 rounded-md border"
        style={{ 
          backgroundColor: solutionConfig[sol].color + "15",
          borderColor: solutionConfig[sol].color + "40"
        }}
      >
        <Icon className="w-3 h-3" style={{ color: solutionConfig[sol].color }} />
        <span 
          className="text-[9px] font-medium"
          style={{ color: solutionConfig[sol].color }}
        >
          {sol}
        </span>
      </div>
    );
  })}
</div>
```

#### Change 2: Improve Card Contrast (lines 198-207)

**Current:**
```tsx
className={`flex-1 p-3 rounded-xl border cursor-pointer transition-all duration-200 ${
  isStageHighlighted(i)
    ? "border-primary bg-primary/10 shadow-lg scale-[1.02]"
    : "border-border/50 bg-card/30 hover:border-primary/30"
}`}
```

**Fixed:**
```tsx
className={`flex-1 p-3 rounded-xl border cursor-pointer transition-all duration-200 ${
  isStageHighlighted(i)
    ? "border-primary bg-primary/15 shadow-lg scale-[1.02]"
    : "border-border bg-card/50 hover:border-primary/40"
}`}
```

#### Change 3: Make Cards Taller for Solution Labels (lines 209-234)

Adjust padding and min-height to accommodate vertical solution list:
```tsx
<div
  className={`flex-1 p-4 rounded-xl border cursor-pointer transition-all duration-200 min-h-[140px] ${...}`}
>
```

---

### Expected Visual Result

Each workflow card will now display:

```text
+------------------------+
|   Trend & Strategy     |
|                        |
| ┌──────────────────┐   |
| │ ⎯ Strategic      │   |
| └──────────────────┘   |
| ┌──────────────────┐   |
| │ ↗ Market         │   |
| └──────────────────┘   |
|                        |
|    "Where to Play"     |
+------------------------+
```

- Each solution has a visible colored border
- Text label next to icon
- Cards have higher contrast background

---

### Implementation Steps

1. Update workflow card solution display to show vertical list with icon + text label
2. Add borders to solution containers for visibility
3. Increase card background opacity from `/30` to `/50`
4. Increase border visibility from `border/50` to full `border`
5. Add min-height to cards to accommodate solution labels
6. Adjust padding for better spacing

