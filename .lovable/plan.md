

## Enhance Slide 5 Value Chain: Default Selection and Richer Detail Panel

### Summary

Apply the same pattern from Slide 4 to Slide 5 (Value Chain):
1. **Default to first stage** - Initialize `activeStage` to `0` (Trend & Strategy) so there's never a blank panel
2. **Reset to default on hover-off** - When user hovers off, revert to default stage instead of `null`
3. **Enrich the detail panel** - Add JTBD, Pain-to-Outcome, Real Example, and Capability tags using `solutionDeepDives` data

---

### Current Issues

1. **Blank panel on load**: `activeStage` starts as `null`, showing "Hover over a workflow stage..."
2. **Blank panel on hover-off**: `handleStageHover(null)` clears the panel
3. **Limited detail content**: Current panel only shows:
   - Stage label
   - Combination name
   - Questions list
   - Short description

---

### Proposed Changes

#### 1. Default Stage Selection

Set initial state to first stage (Trend & Strategy):

```tsx
// Before
const [activeStage, setActiveStage] = useState<number | null>(null);

// After
const [activeStage, setActiveStage] = useState<number | null>(0);
```

#### 2. Revert to Default on Hover-Off

Update `handleStageHover` to revert to stage 0 instead of null:

```tsx
// Before
const handleStageHover = (index: number | null) => {
  if (!isNarrationControlled) {
    setActiveStage(index);
    if (index !== null) setActiveCombo(null);
  }
};

// After
const handleStageHover = (index: number | null) => {
  if (!isNarrationControlled) {
    setActiveStage(index !== null ? index : 0); // Revert to first stage
    if (index !== null) setActiveCombo(null);
  }
};
```

#### 3. Enrich Detail Panel Content

**Import solutionDeepDives data:**
```tsx
import { solutionDeepDives } from "@/data/solutionDeepDives";
```

**Map solution names to deep dive IDs:**
```tsx
const solutionToDeepDiveId: Record<string, string> = {
  "Strategic": "strategic",
  "Market": "market",
  "Competitive": "competitive",
  "Innovation": "innovation",
  "Sales": "sales",
};
```

**Enhanced detail panel structure:**

For each workflow stage, show the **primary solution's** rich content (first solution in the stage's array):

```text
+--------------------------------------------------+
| [Icons] Stage: Trend & Strategy                  |
| Combination: Where to Play                       |
|--------------------------------------------------|
| PRIMARY SOLUTION: Strategic Intelligence         |
|--------------------------------------------------|
| JOBS TO BE DONE                                  |
| When setting portfolio priorities...             |
| I want to see which categories are premiumizing  |
| So that I invest in growth spaces first          |
|--------------------------------------------------|
| FROM PAIN TO OUTCOME                             |
| [Pain box - red]                                 |
|        ↓                                         |
| [Capability box - neutral]                       |
|        ↓                                         |
| [Outcome box - primary]                          |
|--------------------------------------------------|
| REAL EXAMPLE                                     |
| Brand: A top-5 global beverage company           |
| Result: Captured 4% category share in 18 months  |
|--------------------------------------------------|
| KEY CAPABILITIES                                 |
| [Tag] [Tag] [Tag] [Tag]                          |
+--------------------------------------------------+
```

---

### New Detail Panel Code

Replace the current stage detail panel (lines 257-295) with an enriched version:

```tsx
{activeData && (() => {
  // Get the primary solution's deep dive
  const primarySol = activeData.solutions[0];
  const deepDiveId = solutionToDeepDiveId[primarySol];
  const deepDive = solutionDeepDives.find(s => s.id === deepDiveId);
  const firstPain = deepDive?.painToCapability[0];

  return (
    <div className="bg-gradient-to-r from-primary/10 to-sky-500/5 border border-primary/30 rounded-xl p-4 animate-fade-in">
      <div className="flex gap-4">
        {/* Left: Icons + Stage Info */}
        <div className="shrink-0">
          <div className="flex gap-1 mb-2">
            {activeData.solutions.map((sol) => {
              const Icon = solutionConfig[sol].icon;
              return (
                <div key={sol} className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: solutionConfig[sol].color + "20" }}>
                  <Icon className="w-4 h-4" style={{ color: solutionConfig[sol].color }} />
                </div>
              );
            })}
          </div>
          <p className="text-xs text-muted-foreground">Stage {workflowStages.indexOf(activeData) + 1}</p>
        </div>

        {/* Right: Rich Content */}
        <div className="flex-1 grid grid-cols-3 gap-4">
          {/* Column 1: JTBD */}
          {deepDive && (
            <div className="p-3 bg-card/60 rounded-lg border border-border/50">
              <p className="text-[10px] font-semibold text-muted-foreground uppercase mb-1">
                Jobs to Be Done
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="text-primary font-medium">When</span> {deepDive.jtbd.when}...{" "}
                <span className="text-primary font-medium">I want to</span> {deepDive.jtbd.iWantTo}{" "}
                <span className="text-primary font-medium">so that</span> {deepDive.jtbd.soThat}.
              </p>
            </div>
          )}

          {/* Column 2: Pain to Outcome */}
          {firstPain && (
            <div className="p-3 bg-card/60 rounded-lg border border-border/50">
              <p className="text-[10px] font-semibold text-muted-foreground uppercase mb-1">
                From Pain to Outcome
              </p>
              <div className="flex flex-col gap-1">
                <div className="px-2 py-1 rounded bg-destructive/10 border border-destructive/20">
                  <span className="text-[10px] text-destructive">{firstPain.pain}</span>
                </div>
                <ArrowDown className="w-3 h-3 text-muted-foreground mx-auto" />
                <div className="px-2 py-1 rounded bg-card border border-border">
                  <span className="text-[10px] text-foreground">{firstPain.capability}</span>
                </div>
                <ArrowDown className="w-3 h-3 text-muted-foreground mx-auto" />
                <div className="px-2 py-1 rounded bg-primary/15 border border-primary/30">
                  <span className="text-[10px] text-primary font-medium">{firstPain.outcome}</span>
                </div>
              </div>
            </div>
          )}

          {/* Column 3: Real Example + Capabilities */}
          {deepDive && (
            <div className="space-y-2">
              <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-[10px] font-semibold text-primary uppercase mb-0.5">Real Example</p>
                <p className="text-[10px] text-muted-foreground">{deepDive.example.brand}</p>
                <p className="text-[10px] text-foreground font-medium">{deepDive.example.result}</p>
              </div>
              <div className="flex flex-wrap gap-1">
                {deepDive.capabilities.slice(0, 3).map((cap, i) => (
                  <span key={i} className="px-1.5 py-0.5 rounded bg-primary/10 text-primary text-[9px]">
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
})()}
```

---

### Additional Imports

Add `ArrowDown` to the icon imports:

```tsx
import { Target, TrendingUp, Swords, Lightbulb, BarChart3, ChevronRight, ArrowDown } from "lucide-react";
```

Add deep dive data import:

```tsx
import { solutionDeepDives } from "@/data/solutionDeepDives";
```

---

### Behavior After Changes

| Action | Before | After |
|--------|--------|-------|
| Page load | Blank placeholder | Trend & Strategy panel shown |
| Hover on stage | That stage shown | That stage shown (enriched) |
| Hover off stage | Blank placeholder | Trend & Strategy panel shown |
| Hover on combo | Combo shown | Combo shown (unchanged) |

---

### Files to Modify

| File | Changes |
|------|---------|
| `src/components/globaldata-slides/GDSlide5ValueChain.tsx` | Add imports, default state, enriched detail panel |

---

### Technical Details

1. **Default state**: Initialize `activeStage` to `0` instead of `null`
2. **Hover handler**: Revert to `0` instead of `null` when hovering off
3. **Data mapping**: Use `solutionToDeepDiveId` to connect stage solutions to deep dive content
4. **Primary solution**: Show deep dive for first solution in stage's array (e.g., "Strategic" for "Trend & Strategy")
5. **Layout**: Three-column grid for JTBD, Pain-to-Outcome, and Example+Capabilities
6. **Combo panel**: Keep existing combo detail panel unchanged (it shows different content)

