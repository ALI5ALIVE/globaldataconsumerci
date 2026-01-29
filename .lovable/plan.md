

# Plan: Add Color-Coded Swim Lanes to Slide 3

## Overview

Transform the "Why It Exists" and "Quantified Impact" sections into visually aligned swim lanes where each row shares a distinct color, creating a clear visual connection between each root cause and its corresponding impact.

## Proposed Color Palette

Each of the four rows will have a unique color theme:

| Row | Dimension | Color Theme | HSL Value |
|-----|-----------|-------------|-----------|
| 1 | Breadth | Amber/Orange | `45 93% 58%` (warm gold) |
| 2 | Alignment | Purple/Plum | `280 65% 55%` (violet) |
| 3 | Speed | Cyan/Teal | `195 100% 45%` (sky blue) |
| 4 | Confidence | Red/Coral | `0 75% 55%` (destructive red) |

## Visual Design

```text
┌─────────────────────────────────────────────────────────────────────────┐
│  Why It Exists                    │  Quantified Impact                  │
├───────────────────────────────────┼─────────────────────────────────────┤
│  ┌─────────────────────────────┐  │  ┌─────────────────────────────┐    │
│  │ [AMBER] Signals Fragment    │◄─┼─►│ [AMBER] 3-5 sources         │    │
│  └─────────────────────────────┘  │  └─────────────────────────────┘    │
│  ┌─────────────────────────────┐  │  ┌─────────────────────────────┐    │
│  │ [PURPLE] Leaders Debate     │◄─┼─►│ [PURPLE] 40% launches       │    │
│  └─────────────────────────────┘  │  └─────────────────────────────┘    │
│  ┌─────────────────────────────┐  │  ┌─────────────────────────────┐    │
│  │ [CYAN] Decisions Late       │◄─┼─►│ [CYAN] 12+ weeks            │    │
│  └─────────────────────────────┘  │  └─────────────────────────────┘    │
│  ┌─────────────────────────────┐  │  ┌─────────────────────────────┐    │
│  │ [RED] Lack Conviction       │◄─┼─►│ [RED] 68% teams             │    │
│  └─────────────────────────────┘  │  └─────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────────────┘
```

## Technical Implementation

### Data Structure Update

Add a `color` property to both `rootCauses` and `impacts` arrays:

```typescript
const swimLaneColors = [
  { bg: "bg-amber-500/10", border: "border-amber-500/30", text: "text-amber-500", gradient: "from-amber-500/10" },
  { bg: "bg-purple-500/10", border: "border-purple-500/30", text: "text-purple-500", gradient: "from-purple-500/10" },
  { bg: "bg-cyan-500/10", border: "border-cyan-500/30", text: "text-cyan-500", gradient: "from-cyan-500/10" },
  { bg: "bg-red-500/10", border: "border-red-500/30", text: "text-red-500", gradient: "from-red-500/10" },
];
```

### Card Styling Changes

**"Why It Exists" cards** (lines 84-96):
- Replace `bg-card/50 border-border/50` with row-specific colors
- Update icon background from `bg-destructive/10` to row color
- Update badge background and text color
- Update detail text color

**"Quantified Impact" cards** (lines 103-113):
- Replace `from-destructive/10 border-destructive/20` with row-specific gradient
- Update dimension label color
- Update value and label text colors

### File to Modify

| File | Change |
|------|--------|
| `src/components/globaldata-slides/GDSlide2IntelligenceGap.tsx` | Add color array, apply per-row styling to both card columns |

## Outcome

- Each row is visually linked through consistent color coding
- Immediate visual connection between "why" and "impact" pairs
- Professional palette that maintains the deck's dark theme
- Clearer audience comprehension of the cause-effect relationships

