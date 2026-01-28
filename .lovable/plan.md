
# Animation Timing Correction & Messaging Enhancement Plan

## Part 1: Animation Timing Corrections

After analyzing the narration scripts word-by-word against the current animation timings, I've identified that animations are triggering **before** the narrator mentions each element. The timing percentages need to be **increased (delayed)** to align with when the narrator actually speaks each point.

### Slide 1 - GDSlide1GrowthReality.tsx

**Problem:** Pain points and sections appear before narrator mentions them.

**Narration Flow Analysis:**
| Content | Narrator Starts At | Current Timing | Corrected Timing |
|---------|-------------------|----------------|------------------|
| Intro | 0% | 0% | 0% ✓ |
| "Market velocity..." | ~10% | 15% | 10% |
| "Shrinking windows..." | ~22% | 23% | 22% |
| "Asymmetric competition..." | ~34% | 31% | 34% |
| "Here's the paradox..." | ~46% | 42% | 46% |
| "The real problem..." | ~62% | 58% | 62% |
| "Category performers..." | ~82% | 78% | 82% |

**Change:** Update `stepTimings` array (lines 30-38)

---

### Slide 2 - GDSlide2IntelligenceGap.tsx

**Problem:** Root causes appear before narrator describes each one.

**Narration Flow Analysis:**
| Content | Narrator Starts At | Current Timing | Corrected Timing |
|---------|-------------------|----------------|------------------|
| Definition box | 0% | 0% | 0% ✓ |
| "First, signals fragment..." | ~15% | 12% | 15% |
| "Then, leaders debate..." | ~30% | 25% | 30% |
| "Third, decisions arrive late..." | ~42% | 38% | 42% |
| "Finally, decisions lack conviction..." | ~55% | 50% | 55% |
| "The quantified impact..." | ~68% | 62% | 68% |
| "This gap is where..." | ~88% | 85% | 88% |

**Change:** Update `stepTimings` array (lines 44-52)

---

### Slide 3 - GDSlide3BeforeAfter.tsx

**Problem:** Before/After sections reveal slightly early.

**Narration Flow Analysis:**
| Content | Narrator Starts At | Current Timing | Corrected Timing |
|---------|-------------------|----------------|------------------|
| Intro | 0% | 0% | 0% ✓ |
| "Look at the left side..." | ~12% | 10% | 12% |
| "Now look at the right side..." | ~45% | 38% | 45% |
| "The transformation..." | ~72% | 65% | 72% |

**Change:** Update `stepTimings` array (lines 28-33)

---

### Slide 4 - GDSlide4Proposition.tsx

**Problem:** Wheel and callout sections appear too early.

**Narration Flow Analysis:**
| Content | Narrator Starts At | Current Timing | Corrected Timing |
|---------|-------------------|----------------|------------------|
| Intro | 0% | 0% | 0% ✓ |
| "A unified solution..." (wheel visible) | ~28% | 20% | 28% |
| "This is intelligence designed..." | ~78% | 80% | 78% |

**Change:** Update `stepTimings` array (lines ~15-18)

---

### Slide 8 - GDSlide8ROI.tsx

**Problem:** ROI pillars appear before narrator describes each.

**Narration Flow Analysis:**
| Content | Narrator Starts At | Current Timing | Corrected Timing |
|---------|-------------------|----------------|------------------|
| Intro | 0% | 0% | 0% ✓ |
| "First, speed to decision..." | ~15% | 12% | 15% |
| "Second, better growth outcomes..." | ~38% | 32% | 38% |
| "Third, lower cost of intelligence..." | ~58% | 52% | 58% |
| "Here's the key message..." | ~78% | 72% | 78% |

**Change:** Update `stepTimings` array (lines 39-45)

---

## Part 2: Messaging Enhancement for Slides 6 & 7

### Key Messages to Reinforce:
1. **Connection unlocks new ways of working** - Stage 3 is the platform shift
2. **Apex is the aspiration** for all consumer brands
3. **Without connection, agentic/predictive capabilities are impossible**
4. **Build vs Buy** - building internally would take years

---

### Slide 6 - GDSlide6ValuePyramid.tsx (layersData)

**Stage 3 (CONNECTED) - Enhance `whyItMatters`:**

Current:
> "This is the platform shift that unlocks AI. Without connected, governed data, Stages 4 and 5 are unreachable—and competitors with unified intelligence will outpace you."

Enhanced:
> "This is the platform shift that unlocks new ways of working. Without connected, governed data, true agentic and predictive capabilities remain impossible—and building this foundation internally takes 3-5 years. Buy vs build: the gap widens every quarter you delay."

**Stage 5 (PREDICTIVE) - Enhance `whyItMatters`:**

Current:
> "AI compresses the insight-to-action gap while keeping humans in control — intelligence becomes a competitive moat."

Enhanced:
> "The aspiration for every consumer brand: AI anticipates while humans control. This level of predictive, agentic capability is only possible with connected foundations—and replicating it internally would take years. Intelligence becomes an unassailable competitive moat."

**Stage 5 (PREDICTIVE) - Add to result array:**
- Add: "The aspiration state for category-leading consumer brands"

---

### Slide 7 - GDSlide7MaturityCurve.tsx (stagesData)

**Stage 3 (CONNECTED) - Enhance `whyItMatters`:**

Current:
> "The AI threshold—unified data is the prerequisite for intelligent automation. Without it, Stages 4 and 5 remain out of reach."

Enhanced:
> "The AI threshold—unified data unlocks new ways of working and operational performance. Without it, true agentic and predictive capabilities remain out of reach. Building this foundation internally? 3-5 years minimum."

**Stage 5 (PREDICTIVE) - Enhance `whyItMatters`:**

Current:
> "AI anticipates and acts—but only for organizations that first achieved connection. This is where the AI advantage compounds"

Enhanced:
> "The aspiration for all consumer brands: AI anticipates and acts with conviction. But this level of agentic capability is only possible for organizations that first achieved connection. Building this internally would take years—the buy vs build case is clear."

**Stage 5 (PREDICTIVE) - Add to result array:**
- Add: "The aspiration state for category-leading consumer brands"

---

## Technical Implementation Summary

### Files to Modify

| File | Changes |
|------|---------|
| `GDSlide1GrowthReality.tsx` | Update `stepTimings` percentages |
| `GDSlide2IntelligenceGap.tsx` | Update `stepTimings` percentages |
| `GDSlide3BeforeAfter.tsx` | Update `stepTimings` percentages |
| `GDSlide4Proposition.tsx` | Update `stepTimings` percentages |
| `GDSlide8ROI.tsx` | Update `stepTimings` percentages |
| `GDSlide6ValuePyramid.tsx` | Update Stage 3 & 5 `whyItMatters` and `result` arrays |
| `GDSlide7MaturityCurve.tsx` | Update Stage 3 & 5 `whyItMatters` and `result` arrays |

---

## Expected Outcome

After implementation:
- **Animations will trigger at the exact moment** the narrator mentions each element
- **Slide 6 (Pyramid)** will reinforce: connection enables new ways of working, apex is the aspiration, build vs buy argument
- **Slide 7 (Maturity Curve)** will reinforce: same messaging plus operational performance gains
- Both slides will clearly communicate that **agentic/predictive capabilities require connected foundations**
- The **build vs buy** message will be prominent: "3-5 years to build internally"
