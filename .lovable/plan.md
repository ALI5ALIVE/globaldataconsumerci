

# Plan: Enrich Slide 10 ("Why GlobalData") with Three-Pillar Delivery Model

## Current State vs Reference Image

| Aspect | Current Slide 10 | Reference Image (Target) |
|--------|------------------|--------------------------|
| **Pillar 1** | "Unmatched Proprietary Data" - 40+ years, 200+ markets | **"High-Impact Data"** - Real-time, trusted, actionable. 95% global GDP. Unified taxonomy. |
| **Pillar 2** | "Human + AI at Scale" - 1,000+ analysts + Ava | **"AI & Technology"** - Agentic AI that acts, not reports. Forecasting, surfacing answers in seconds. |
| **Pillar 3** | "Unified Taxonomy" - Single classification system | **"Human Expertise"** - Industry specialists, journalists, advisors embedded in workflows. |
| **Title** | "Built for Connected Intelligence at Scale" | Aligns well - keep |
| **Subtitle** | "Why GlobalData is uniquely positioned..." | Update to match delivery message |

## Key Language Changes from Reference Image

### Three Pillars (New Content)

| Pillar | Title | Tagline | Description |
|--------|-------|---------|-------------|
| **Data** | High-Impact Data | Real-time, trusted, actionable | Coverage of 95% of global GDP, analyst-validated and unified into a single taxonomy. Earlier signals, clearer context, decisions you can trust. |
| **AI** | AI & Technology | AI that accelerates execution | Agentic AI that acts, not just reports—forecasting moves, surfacing answers in seconds, guiding teams to act when timing matters most. |
| **Expertise** | Human Expertise | Domain experts who turn insight into impact | Industry specialists, journalists, and advisors embedded in your workflows—decoding complexity and transforming intelligence into confident action. |

### Core Value Statement (From Reference)
"Our connected intelligence platform unites high-impact data, AI, and human expertise to move teams from reactive to precision execution."

### Result Statement (From Reference)
"The result: Faster decision velocity, stronger market attainment, and consistent high-value wins."

## Files to Modify

### 1. `src/components/globaldata-slides/GDSlide9WhyGlobalData.tsx`

**Update `differentiators` array:**

```typescript
const differentiators = [
  { 
    icon: Database, 
    title: "High-Impact Data", 
    tagline: "Real-time, trusted, actionable",
    desc: "Coverage of 95% of global GDP, analyst-validated and unified into a single taxonomy. Earlier signals, clearer context, decisions you can trust.",
    color: "from-primary to-sky-400"
  },
  { 
    icon: Sparkles, // Changed from Users
    title: "AI & Technology", 
    tagline: "AI that accelerates execution",
    desc: "Agentic AI that acts, not just reports—forecasting moves, surfacing answers in seconds, guiding teams to act when timing matters most.",
    color: "from-sky-400 to-cyan-400"
  },
  { 
    icon: Users, // Changed from Layers
    title: "Human Expertise", 
    tagline: "Domain experts who turn insight into impact",
    desc: "Industry specialists, journalists, and advisors embedded in your workflows—decoding complexity and transforming intelligence into confident action.",
    color: "from-cyan-400 to-teal-400"
  },
];
```

**Update subtitle:**
- From: "Why GlobalData is uniquely positioned to close the Intelligence Gap"
- To: "High-impact data, AI, and human expertise—moving you from reactive to precision execution"

**Update closing truths:**
```typescript
const closingTruths = [
  { text: "Faster decision velocity", icon: Zap },
  { text: "Stronger market attainment", icon: TrendingUp },
  { text: "Consistent high-value wins", icon: Trophy },
];
```

**Update Final Takeaway:**
- From: "The future belongs to organisations that turn change into decisions..."
- To: "The result: Faster decision velocity, stronger market attainment, and consistent high-value wins."

### 2. `src/data/globalDataNarration.ts` (slideId: 9)

**Revised Narration Script:**

```text
Why GlobalData? Let me show you exactly how we deliver connected intelligence at scale.

Our platform brings together three essential elements.

First: High-Impact Data. Real-time, trusted, actionable. Coverage of ninety-five percent of global GDP, analyst-validated and unified into a single taxonomy. Earlier signals, clearer context, and decisions you can trust.

Second: AI and Technology that accelerates execution. This is Agentic AI that acts, not just reports—forecasting moves, surfacing answers in seconds, guiding your teams to act when timing matters most.

Third: Human Expertise. Industry specialists, journalists, and advisors embedded in your workflows—decoding complexity and transforming intelligence into confident action.

These three elements power our connected intelligence platform—moving your teams from reactive to precision execution.

The result? Faster decision velocity. Stronger market attainment. And consistent high-value wins.

The performance imperative: organisations that close the Intelligence Gap and operate intelligence as a connected system will define the next generation of category performers.

The future belongs to organisations that turn change into decisions—earlier, together, and with conviction.
```

## Updated Layout Structure

```text
+------------------------------------------------------------------+
| Built for Connected Intelligence at Scale                          |
| High-impact data, AI, and human expertise—moving you from          |
| reactive to precision execution                                    |
+------------------------------------------------------------------+
|                                                                    |
|  +------------------+  +------------------+  +------------------+  |
|  | HIGH-IMPACT DATA |  | AI & TECHNOLOGY  |  | HUMAN EXPERTISE  |  |
|  | Real-time,       |  | AI that          |  | Domain experts   |  |
|  | trusted,         |  | accelerates      |  | who turn insight |  |
|  | actionable       |  | execution        |  | into impact      |  |
|  |                  |  |                  |  |                  |  |
|  | 95% global GDP   |  | Agentic AI that  |  | Specialists,     |  |
|  | coverage...      |  | acts, not just   |  | journalists,     |  |
|  |                  |  | reports...       |  | advisors...      |  |
|  +------------------+  +------------------+  +------------------+  |
|                                                                    |
+------------------------------------------------------------------+
|  [Ava Highlight - Enterprise AI Analyst]                          |
+------------------------------------------------------------------+
|  Performance Imperative        | Results:                         |
|  Close the Intelligence Gap    | • Faster decision velocity       |
|  → Next-gen performers         | • Stronger market attainment     |
|                                | • Consistent high-value wins     |
+------------------------------------------------------------------+
|  THE RESULT: Faster decision velocity, stronger market             |
|  attainment, and consistent high-value wins.                       |
+------------------------------------------------------------------+
```

## Summary of Changes

| File | Changes |
|------|---------|
| `GDSlide9WhyGlobalData.tsx` | Update `differentiators` with new 3-pillar content (Data, AI, Expertise), add taglines, update subtitle, update closing truths, update final takeaway |
| `globalDataNarration.ts` | Revise slideId: 9 script to match new 3-pillar structure and language |

## Alignment with Deck Narrative

This ensures Slide 10 answers "How does GlobalData deliver?" with:
1. **High-Impact Data** - The foundation of trust
2. **AI & Technology** - The acceleration layer  
3. **Human Expertise** - The interpretation layer

This complements:
- Slide 7 (Maturity Ladder): "Where are you now?" — diagnosis
- Slide 8 (Maturity Curve): "How does work change?" — transformation
- Slide 9 (ROI): "What's the return?" — metrics
- **Slide 10**: "How does GlobalData deliver it?" — the three pillars

