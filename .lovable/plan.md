

## Add Interactive Solution Value Proposition Panel to Slide 4

### Summary

Add an interactive panel next to the Connected Intelligence Wheel that displays condensed value propositions when users hover or click on each of the 5 intelligence segments. The panel will replace the static "What It Replaces / What It Is NOT" lists on the right side.

---

### Current State

The existing `GDSlide4Proposition.tsx` has a 2-column layout:
- **Left:** `ConnectedIntelligenceWheel` component (static SVG)
- **Right:** Two static cards ("What It Replaces" and "What It Is NOT")

The `ConnectedIntelligenceWheel` component renders 5 colored segments:
- Market Intelligence
- Innovation Intelligence  
- Sales Intelligence
- Strategic Intelligence
- Competitor Intelligence

---

### Solution Design

```text
+-------------------------------------------------------------------+
|  Connected Intelligence for Consumer Brands                       |
|  Closing the Intelligence Gap                                     |
+-------------------------------------------------------------------+
|                                                                   |
|  [Value Proposition Banner]                                       |
|                                                                   |
+-------------------------------------------------------------------+
|                                                                   |
|  +---------------------------+  +-------------------------------+ |
|  |                           |  |  [Active Segment Panel]       | |
|  |   Connected Intelligence  |  |  ┌─────────────────────────┐ | |
|  |        Wheel              |  |  │ Sales Intelligence      │ | |
|  |                           |  |  │                         │ | |
|  |   (segments are now       |  |  │ Prioritize markets,     │ | |
|  |    hoverable/clickable)   |  |  │ brands, and opportuni-  │ | |
|  |                           |  |  │ ties with AI-driven     │ | |
|  |                           |  |  │ insights.               │ | |
|  |                           |  |  │                         │ | |
|  |                           |  |  │ ✓ Action-ready intel-   │ | |
|  |                           |  |  │   ligence for pipeline  │ | |
|  |                           |  |  │   planning              │ | |
|  +---------------------------+  +-------------------------------+ |
|                                                                   |
+-------------------------------------------------------------------+
|  [Bottom callout]                                                 |
+-------------------------------------------------------------------+
```

---

### Condensed Value Propositions Data

| Solution | One-Liner | Outcome |
|----------|-----------|---------|
| **Sales Intelligence** | Prioritize markets, brands, and opportunities with AI-driven insights for revenue growth. | Action-ready intelligence for pipeline planning and expansion strategy. |
| **Strategic Intelligence** | Track market, category, and consumer shifts for informed, long-term strategic decisions. | Actionable insights on emerging risks and opportunities across portfolios and channels. |
| **Competitive Intelligence** | Outperform competitors by tracking their strategies, investments, and market share shifts. | Proprietary data and expert insights reveal competitor focus and relevance. |
| **Innovation Intelligence** | Accelerate innovation and reduce time-to-market with real-time consumer insight. | Validate concepts, optimize propositions, and prioritize pipelines based on demand. |
| **Market Intelligence** | Understand market dynamics and size growth opportunities across categories and segments. | Smarter strategic, portfolio, and investment decisions based on demand shifts. |

---

### Files to Modify

#### 1. Update ConnectedIntelligenceWheel Component

**File:** `src/components/globaldata-slides/ConnectedIntelligenceWheel.tsx`

**Changes:**
- Add props for interaction: `activeSegment`, `onSegmentHover`, `onSegmentClick`
- Make each segment path interactive with cursor pointer
- Add hover/active states with opacity/stroke changes
- Apply visual highlighting to the active segment

```tsx
interface ConnectedIntelligenceWheelProps {
  activeSegment?: string | null;
  onSegmentHover?: (segmentName: string | null) => void;
  onSegmentClick?: (segmentName: string) => void;
}

const ConnectedIntelligenceWheel = ({
  activeSegment,
  onSegmentHover,
  onSegmentClick,
}: ConnectedIntelligenceWheelProps) => {
  // ... existing code ...
  
  // Update segment rendering to include interaction:
  <path
    d={...}
    fill={segment.color}
    stroke={activeSegment === segment.name ? "white" : "white"}
    strokeWidth={activeSegment === segment.name ? "3" : "1"}
    opacity={activeSegment && activeSegment !== segment.name ? 0.5 : 1}
    className="cursor-pointer transition-all duration-200"
    onMouseEnter={() => onSegmentHover?.(segment.name)}
    onMouseLeave={() => onSegmentHover?.(null)}
    onClick={() => onSegmentClick?.(segment.name)}
  />
}
```

#### 2. Create Value Proposition Panel Component

**File:** `src/components/globaldata-slides/SolutionValuePanel.tsx` (new file)

**Structure:**
```tsx
interface SolutionValuePanelProps {
  activeSolution: string | null;
}

const solutionData = {
  "Sales Intelligence": {
    icon: TrendingUp,
    headline: "Sales Intelligence",
    oneLiner: "Prioritize markets, brands, and opportunities with AI-driven insights for revenue growth.",
    outcome: "Action-ready intelligence for pipeline planning and expansion strategy.",
    color: "hsl(195 85% 50%)",
  },
  "Strategic Intelligence": { ... },
  "Competitive Intelligence": { ... },
  "Innovation Intelligence": { ... },
  "Market Intelligence": { ... },
};

// Renders:
// - Default state: "Hover over a segment to explore solutions" prompt
// - Active state: Animated card with headline, one-liner, outcome
```

#### 3. Update GDSlide4Proposition Component

**File:** `src/components/globaldata-slides/GDSlide4Proposition.tsx`

**Changes:**
- Add `useState` for `activeSegment`
- Pass interaction handlers to `ConnectedIntelligenceWheel`
- Replace "What It Replaces / What It Is NOT" with `SolutionValuePanel`

```tsx
const GDSlide4Proposition = ({ ... }: SlideNarrationProps) => {
  const [activeSegment, setActiveSegment] = useState<string | null>(null);
  
  return (
    <GDSlideContainer ...>
      <div className="flex flex-col gap-5 h-full">
        {/* Value Proposition Banner - keep existing */}
        
        <div className="flex-1 grid lg:grid-cols-2 gap-6 items-center">
          {/* Left: Interactive Wheel */}
          <ConnectedIntelligenceWheel
            activeSegment={activeSegment}
            onSegmentHover={setActiveSegment}
            onSegmentClick={setActiveSegment}
          />
          
          {/* Right: Solution Value Panel (replaces What It Replaces/NOT) */}
          <SolutionValuePanel activeSolution={activeSegment} />
        </div>
        
        {/* Bottom callout - keep existing */}
      </div>
    </GDSlideContainer>
  );
};
```

---

### Technical Details

#### SolutionValuePanel Component Behavior

**Default State (no segment hovered):**
```tsx
<div className="h-full flex items-center justify-center bg-card/30 border border-border/30 rounded-xl p-6">
  <div className="text-center">
    <MousePointer2 className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
    <p className="text-sm text-muted-foreground">
      Hover over a segment to explore our intelligence solutions
    </p>
  </div>
</div>
```

**Active State (segment hovered/clicked):**
```tsx
<div className="h-full bg-card/50 border rounded-xl p-5 animate-fade-in"
     style={{ borderColor: solution.color + "50" }}>
  <div className="flex items-center gap-3 mb-4">
    <div className="w-10 h-10 rounded-lg flex items-center justify-center"
         style={{ backgroundColor: solution.color + "20" }}>
      <solution.icon className="w-5 h-5" style={{ color: solution.color }} />
    </div>
    <h3 className="text-lg font-bold text-foreground">{solution.headline}</h3>
  </div>
  
  <p className="text-sm text-foreground leading-relaxed mb-4">
    {solution.oneLiner}
  </p>
  
  <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
      Outcome
    </p>
    <p className="text-sm text-muted-foreground">
      {solution.outcome}
    </p>
  </div>
</div>
```

#### Wheel Segment Visual States

| State | Stroke Width | Opacity | Cursor |
|-------|-------------|---------|--------|
| Default | 1px white | 1.0 | pointer |
| Hovered | 3px white | 1.0 | pointer |
| Other (when one is active) | 1px white | 0.5 | pointer |

---

### Animation Details

- Panel content uses `animate-fade-in` class for smooth transitions
- Segment highlighting uses CSS `transition-all duration-200`
- Panel background color subtly tints to match active segment color

---

### Implementation Steps

1. Create `SolutionValuePanel.tsx` with value proposition data and both default/active states
2. Update `ConnectedIntelligenceWheel.tsx` to accept interaction props and add hover/click handlers to segment paths
3. Update `GDSlide4Proposition.tsx` to manage `activeSegment` state and wire up the components
4. Test hover and click interactions on all 5 segments
5. Verify animations and visual feedback work smoothly

