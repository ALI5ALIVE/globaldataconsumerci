

## Align Narrative Around "Category Performance" vs "Category Leadership"

### Summary

A comprehensive audit of the GlobalData slide deck reveals **18 instances** across **7 files** where "leadership" terminology should be replaced with "performance" to align the value proposition around **connected intelligence driving category performance**.

The core messaging shift:
- **FROM**: "Connected Intelligence creates leadership" / "Category leadership through speed"
- **TO**: "Connected Intelligence drives category performance" / "Category performance through speed and foresight"

---

### Files Requiring Updates

| File | Instances | Priority |
|------|-----------|----------|
| `src/data/globalDataNarration.ts` | 8 | Critical (narration scripts) |
| `src/components/globaldata-slides/GDSlide2IntelligenceGap.tsx` | 2 | High |
| `src/components/globaldata-slides/GDSlide6ValuePyramid.tsx` | 4 | High |
| `src/components/globaldata-slides/GDSlide7MaturityCurve.tsx` | 3 | High |
| `src/components/globaldata-slides/GDSlide9WhyGlobalData.tsx` | 3 | High |
| `src/components/globaldata-slides/GDTransformationalIllustration.tsx` | 3 | Medium |

---

### Detailed Changes

#### 1. `src/data/globalDataNarration.ts` (Narration Scripts)

**Slide 0 (Line 18):**
```
// Before
"...That gap has a name. We call it the Intelligence Gap—and it's where growth stalls, relevance erodes, and leadership is lost."

// After
"...That gap has a name. We call it the Intelligence Gap—and it's where growth stalls, relevance erodes, and performance suffers."
```

**Slide 1 (Line 34):**
```
// Before
"Category leaders don't just have better data—they have connected intelligence that enables faster, unified action."

// After
"Category performers don't just have better data—they have connected intelligence that enables faster, unified action."
```

**Slide 2 (Lines 39, 54):**
```
// Before - Title
"Where Growth and Leadership Are Lost"

// After
"Where Growth and Performance Are Lost"

// Before - Body
"This gap is where growth stalls, relevance erodes, and leadership is lost."

// After
"This gap is where growth stalls, relevance erodes, and performance suffers."
```

**Slide 6 (Lines 102, 112):**
```
// Before
"...from fragmented point solutions to connected intelligence that drives category leadership."
"...Category leadership through speed and foresight."

// After
"...from fragmented point solutions to connected intelligence that drives category performance."
"...Category performance through speed and foresight."
```

**Slide 7 (Lines 120, 130):**
```
// Before
"...from fragmented insight to predictive leadership."
"...Category leadership through speed and foresight."

// After
"...from fragmented insight to predictive performance."
"...Category performance through speed and foresight."
```

**Slide 9 (Lines 162, 164):**
```
// Before
"The leadership imperative: organisations that close the Intelligence Gap..."
"...Connected Intelligence creates leadership."

// After
"The performance imperative: organisations that close the Intelligence Gap..."
"...Connected Intelligence drives category performance."
```

---

#### 2. `src/components/globaldata-slides/GDSlide2IntelligenceGap.tsx`

**Line 55 - Title prop:**
```tsx
// Before
title="Where Growth and Leadership Are Lost"

// After
title="Where Growth and Performance Are Lost"
```

**Line 128 - Bottom line text:**
```tsx
// Before
<span className="text-destructive">leadership is lost</span>

// After
<span className="text-destructive">performance suffers</span>
```

---

#### 3. `src/components/globaldata-slides/GDSlide6ValuePyramid.tsx`

**Line 13 - PREDICTIVE headline:**
```tsx
// Before
headline: "Predictive & Adaptive Category Leadership",

// After
headline: "Predictive & Adaptive Category Performance",
```

**Line 23 - Result array:**
```tsx
// Before
"Data-led category leadership, outpacing competition",

// After
"Data-led category performance, outpacing competition",
```

**Line 169 - whyItMatters:**
```tsx
// Before
"Fragmentation is where growth stalls, relevance erodes, and leadership is lost..."

// After
"Fragmentation is where growth stalls, relevance erodes, and performance suffers..."
```

**Line 300 - Subtitle:**
```tsx
// Before
subtitle="From fragmented point solutions to connected intelligence that drives category leadership"

// After
subtitle="From fragmented point solutions to connected intelligence that drives category performance"
```

---

#### 4. `src/components/globaldata-slides/GDSlide7MaturityCurve.tsx`

**Line 26 - whyItMatters:**
```tsx
// Before
"Fragmentation is where growth stalls, relevance erodes, and leadership is lost..."

// After
"Fragmentation is where growth stalls, relevance erodes, and performance suffers..."
```

**Line 159 - Result array:**
```tsx
// Before
"Category leadership through speed and foresight",

// After
"Category performance through speed and foresight",
```

**Line 271 - Subtitle:**
```tsx
// Before
subtitle="The measurable journey from fragmented insight to predictive leadership"

// After
subtitle="The measurable journey from fragmented insight to predictive performance"
```

---

#### 5. `src/components/globaldata-slides/GDSlide9WhyGlobalData.tsx`

**Line 32 - closingTruths array:**
```tsx
// Before
{ text: "Connected Intelligence creates leadership", icon: CheckCircle2 },

// After
{ text: "Connected Intelligence drives category performance", icon: CheckCircle2 },
```

**Line 106 - Leadership Imperative label:**
```tsx
// Before
<p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Leadership Imperative</p>

// After
<p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Performance Imperative</p>
```

**Line 108 - Body text:**
```tsx
// Before
"...will define the <span>next generation of category leaders</span>."

// After
"...will define the <span>next generation of category performers</span>."
```

---

#### 6. `src/components/globaldata-slides/GDTransformationalIllustration.tsx`

**Lines 76-99 - Trophy section:**
```tsx
// Before (multiple occurrences of "leadership")
{/* Trophy - Category Leadership */}
hoveredNode === "leadership" ? "scale-110" : ""
onMouseEnter={() => setHoveredNode("leadership")}
onClick={() => handleClick("leadership")}
hoveredNode === "leadership"
<span>Leadership</span>

// After
{/* Trophy - Category Performance */}
hoveredNode === "performance" ? "scale-110" : ""
onMouseEnter={() => setHoveredNode("performance")}
onClick={() => handleClick("performance")}
hoveredNode === "performance"
<span>Performance</span>
```

---

### Terminology Mapping

| Current Term | New Term |
|--------------|----------|
| "category leadership" | "category performance" |
| "leadership is lost" | "performance suffers" |
| "creates leadership" | "drives category performance" |
| "category leaders" | "category performers" |
| "Leadership Imperative" | "Performance Imperative" |
| "predictive leadership" | "predictive performance" |

---

### Validation Checklist

After changes, verify consistency across:
- [ ] All 11 slide narration scripts in `globalDataNarration.ts`
- [ ] Title slide takeaway remains aligned
- [ ] Pyramid visualization labels
- [ ] Maturity curve stage descriptions
- [ ] Transformational illustration labels
- [ ] "Why GlobalData" closing truths
- [ ] Intelligence Gap problem framing

---

### Summary Statistics

| Metric | Count |
|--------|-------|
| Files to modify | 6 |
| Total text changes | 18 |
| Narration script edits | 8 |
| UI component edits | 10 |

