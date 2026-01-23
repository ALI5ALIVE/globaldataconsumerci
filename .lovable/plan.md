

## Create Inline SVG Illustrations for Slide 3 Before/After Sections

### Overview

Create two new SVG illustration components that visually represent:
1. **Before: Fragmented Intelligence** - Disconnected silos with broken connections, scattered data, and warning indicators
2. **After: Connected Intelligence** - Unified platform with flowing connections, organized data, and success indicators

These will follow the same visual style as `GDFragmentationIllustration.tsx` - featuring node-based graphics with glow effects, animated elements, and interactive hover states.

---

### Visual Design

#### Before Illustration: `GDBeforeSilosIllustration.tsx`

```text
+------------------------------------------------------------------+
|                                                                  |
|    [NielsenIQ]----×----[IRI]----×----[Mintel]----×----[Social]   |
|         ⚠                ⚠               ⚠                       |
|                                                                  |
|    [Spreadsheets]--×--[BI Tools]--×--[Internal]--×--[Reports]    |
|                          ≠               ≠                       |
|                                                                  |
|              "Different Taxonomies • Manual Reconciliation"      |
+------------------------------------------------------------------+

Features:
- 8 scattered nodes in two staggered rows (organic layout)
- Dashed red broken connection lines with × marks
- ≠ symbols indicating taxonomy conflicts
- Pulsing orange warning indicators
- Hover glow effect on nodes
- Red/destructive color palette
```

#### After Illustration: `GDAfterConnectedIllustration.tsx`

```text
+------------------------------------------------------------------+
|                                                                  |
|         ┌──────────────────────────────────────────┐             |
|         │                  AVA                     │             |
|         │            (Central Hub)                 │             |
|         └──────────────────────────────────────────┘             |
|              ↙     ↓     ↓     ↓     ↘                           |
|    [Market]──[Strategic]──[Competitive]──[Innovation]──[Sales]   |
|         ↘         ↓           ↓           ↓         ↙            |
|              ═══════════════════════════════════                 |
|                      "Unified Taxonomy"                          |
|                                                                  |
|              "Connected Intelligence • Shared Truth"             |
+------------------------------------------------------------------+

Features:
- Central "Ava" hub with radiating connections
- 5 solution nodes in a connected arc
- Solid flowing connection lines (animated gradient)
- Checkmark indicators instead of warnings
- Unified flow ring around all nodes
- Primary blue/sky color palette
- Hover glow effect on nodes
```

---

### File 1: `src/components/globaldata-slides/GDBeforeSilosIllustration.tsx`

**New component for the "Before" fragmented state**

**Structure:**
```tsx
import { useState, useEffect } from "react";
import { BarChart3, Table2, ShoppingCart, PieChart, TrendingUp, 
         LayoutDashboard, MessageCircle, FileSpreadsheet } from "lucide-react";

interface GDBeforeSilosIllustrationProps {
  onNodeClick?: (node: string) => void;
}

const nodes = [
  // Row 1 - External data sources (staggered y)
  { id: "nielsen", label: "NielsenIQ", icon: BarChart3, x: 65, y: 45 },
  { id: "iri", label: "Circana", icon: ShoppingCart, x: 175, y: 55 },
  { id: "mintel", label: "Mintel", icon: TrendingUp, x: 285, y: 40 },
  { id: "social", label: "Social", icon: MessageCircle, x: 395, y: 52 },
  // Row 2 - Internal tools
  { id: "spreadsheets", label: "Spreadsheets", icon: Table2, x: 120, y: 110 },
  { id: "bi", label: "BI Tools", icon: PieChart, x: 230, y: 118 },
  { id: "internal", label: "Reports", icon: FileSpreadsheet, x: 340, y: 105 },
];

const brokenConnections = [
  // Row 1 connections
  { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 },
  // Row 2 connections
  { from: 4, to: 5 }, { from: 5, to: 6 },
  // Cross-row connections
  { from: 0, to: 4 }, { from: 2, to: 6 },
];

// Component with:
// - Animated warning pulse
// - Hover state tracking
// - SVG with defs for glow filters
// - Broken connection lines with × marks
// - ≠ taxonomy conflict indicators
// - Node circles with icons
// - Caption text
```

**Key Visual Elements:**
- `nodeRadius: 28` (slightly smaller than GDFragmentationIllustration to fit more nodes)
- `viewBox: "0 0 460 170"` (compact horizontal layout)
- Red/destructive color scheme: `hsl(0, 70%, 50%)`
- Dashed connection lines with 8px dash, 4px gap
- × break marks between nodes
- ≠ symbols for taxonomy conflicts
- Orange warning pulse animation (50ms interval)
- Hover scale effect (1.1x)

---

### File 2: `src/components/globaldata-slides/GDAfterConnectedIllustration.tsx`

**New component for the "After" connected state**

**Structure:**
```tsx
import { useState, useEffect } from "react";
import { Target, TrendingUp, Swords, Lightbulb, BarChart3, 
         Sparkles, CheckCircle2 } from "lucide-react";

interface GDAfterConnectedIllustrationProps {
  onNodeClick?: (node: string) => void;
}

const centralHub = { id: "ava", label: "Ava AI", icon: Sparkles, x: 230, y: 40 };

const solutionNodes = [
  { id: "market", label: "Market", icon: TrendingUp, color: "hsl(199, 89%, 48%)", x: 55, y: 95 },
  { id: "strategic", label: "Strategic", icon: Target, color: "hsl(142, 70%, 45%)", x: 140, y: 105 },
  { id: "competitive", label: "Competitive", icon: Swords, color: "hsl(330, 80%, 55%)", x: 230, y: 110 },
  { id: "innovation", label: "Innovation", icon: Lightbulb, color: "hsl(45, 90%, 50%)", x: 320, y: 105 },
  { id: "sales", label: "Sales", icon: BarChart3, color: "hsl(280, 65%, 55%)", x: 405, y: 95 },
];

// Component with:
// - Central Ava hub with radiating connections
// - Solution nodes in connected arc
// - Solid gradient connection lines
// - Animated flow effect (optional)
// - Checkmark success indicators
// - Unified ring around all nodes
// - "Connected Intelligence" caption
```

**Key Visual Elements:**
- `viewBox: "0 0 460 160"`
- Central hub at top with radiating lines to all nodes
- Primary blue color scheme: `hsl(217, 100%, 50%)`
- Solid connection lines (no dashes)
- Gradient stroke from primary to sky blue
- ✓ checkmarks near connections
- Unified arc/ring connecting all solution nodes
- Green pulse animation for success state
- Hover glow effect matching brand colors

---

### File 3: Update `src/components/globaldata-slides/GDSlide3BeforeAfter.tsx`

**Changes to integrate the new illustrations:**

**Add imports:**
```tsx
import GDBeforeSilosIllustration from "./GDBeforeSilosIllustration";
import GDAfterConnectedIllustration from "./GDAfterConnectedIllustration";
```

**Modify Before column (lines 56-82):**
```tsx
{/* Before Column */}
<div className="relative">
  <div className="absolute -top-2.5 left-3 px-2 py-0.5 bg-destructive/20 border border-destructive/30 rounded text-[10px] font-semibold text-destructive uppercase tracking-wider z-10">
    Before: Fragmented Intelligence
  </div>
  <div className="bg-card/30 border border-destructive/20 rounded-xl p-4 pt-6 h-full flex flex-col">
    {/* NEW: SVG Illustration */}
    <div className="h-36 mb-3">
      <GDBeforeSilosIllustration />
    </div>
    
    {/* Existing icon list (condensed) */}
    <div className="grid grid-cols-2 gap-2 flex-1">
      {beforeItems.map((item, i) => (
        <div key={i} className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded-md bg-destructive/10 border border-destructive/20 flex items-center justify-center shrink-0">
            <item.icon className="w-3.5 h-3.5 text-destructive" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-semibold text-foreground truncate">{item.label}</div>
            <div className="text-[10px] text-muted-foreground truncate">{item.desc}</div>
          </div>
        </div>
      ))}
    </div>

    {/* Warning indicators (keep existing) */}
    <div className="mt-3 pt-3 border-t border-destructive/20 grid grid-cols-2 gap-2">
      ...
    </div>
  </div>
</div>
```

**Modify After column (lines 93-124) - same pattern:**
```tsx
{/* After Column */}
<div className="relative">
  <div className="absolute -top-2.5 left-3 ...">After: Connected Intelligence</div>
  <div className="bg-card/30 border border-primary/20 rounded-xl p-4 pt-6 h-full flex flex-col">
    {/* NEW: SVG Illustration */}
    <div className="h-36 mb-3">
      <GDAfterConnectedIllustration />
    </div>
    
    {/* Existing icon list (condensed to 2-column grid) */}
    <div className="grid grid-cols-2 gap-2 flex-1">
      {afterItems.map((item, i) => (
        ...
      ))}
    </div>

    {/* Success indicators (keep existing) */}
    ...
  </div>
</div>
```

---

### Layout Comparison

| Element | Current | After Changes |
|---------|---------|---------------|
| Before column | 4 icon rows only | SVG illustration + 2x2 icon grid |
| After column | 4 icon rows only | SVG illustration + 2x2 icon grid |
| Visual height | ~280px per column | ~340px per column (illustration adds ~140px) |
| Icon grid | Vertical list | 2-column compact grid |
| Metrics banner | Unchanged | Unchanged |

---

### Color Palette Reference

**Before (Destructive):**
- Primary: `hsl(0, 70%, 50%)` - Red
- Glow: `hsl(0, 70%, 55%)`
- Warning: `hsl(30, 90%, 55%)` - Orange
- Background: `hsl(0, 70%, 50%, 0.1)`

**After (Primary/Success):**
- Primary: `hsl(217, 100%, 50%)` - Blue (Comply365 brand)
- Accent: `hsl(195, 100%, 45%)` - Sky blue
- Success: `hsl(142, 70%, 45%)` - Green (for checkmarks)
- Background: `hsl(217, 100%, 50%, 0.1)`

---

### Implementation Summary

| File | Action | Description |
|------|--------|-------------|
| `GDBeforeSilosIllustration.tsx` | Create | New SVG component with fragmented silos, broken connections, warnings |
| `GDAfterConnectedIllustration.tsx` | Create | New SVG component with Ava hub, connected solutions, success indicators |
| `GDSlide3BeforeAfter.tsx` | Modify | Import new components, add illustration containers, adjust icon grid to 2-column |

---

### Interactive Features

Both illustrations will include:
- **Hover effects**: Nodes scale to 1.1x and apply glow filter
- **Click handlers**: Optional `onNodeClick` callback for future deep-dive integration
- **Animated elements**: 
  - Before: Pulsing orange warning indicators
  - After: Flowing gradient animation on connections
- **Responsive sizing**: SVG viewBox scales to container width

