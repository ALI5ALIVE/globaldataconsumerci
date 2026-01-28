

# Differentiate Slide 8 (Your Roadmap) with New Content Angle

## The Problem
Both slides are telling the same story with nearly identical content:
- **Slide 7** (Your Position): Shows pyramid with "What It Looks Like", "Result", "Value Proof", Behavioral Shift, Time Allocation
- **Slide 8** (Your Roadmap): Shows curve with "What It Looks Like", "Result", "Value Proof"

Users see the same information twice, reducing impact.

## The Solution: Different Angle for Each Slide

| Slide | Question It Answers | Content Focus |
|-------|---------------------|---------------|
| **Slide 7 - Your Position** | "Where are we today?" | **Diagnosis** - Current state symptoms, pain points, what broken looks like |
| **Slide 8 - Your Roadmap** | "How do we get there?" | **Journey** - Specific actions, use cases, ways of working at each stage |

## New Content Strategy for Slide 8

Replace the current details panel content with **"Ways of Working"** that describe:

### 1. Key Actions (What teams actually DO at each stage)
Instead of describing symptoms, describe specific activities:

| Stage | Current Content (Symptoms) | New Content (Actions/Use Cases) |
|-------|---------------------------|--------------------------------|
| **Stage 1** | "Insights scattered across tools" | "Request insights via email, wait 2-3 weeks for response" |
| **Stage 2** | "Strong systems in specific domains" | "Run separate brand health tracker, innovation pipeline, competitive monitor" |
| **Stage 3** | "Unified taxonomy established" | "Query any data source with one search, export to any workflow" |
| **Stage 4** | "Intelligence embedded in workflows" | "Receive automated alerts when market share drops 2%+" |
| **Stage 5** | "AI anticipates market shifts" | "Ava flags emerging competitor launch 6 weeks before announcement" |

### 2. Team Behaviors (How collaboration changes)
| Stage | Team Behavior |
|-------|---------------|
| **Stage 1** | Brand, innovation, commercial teams each maintain separate data sources |
| **Stage 2** | Teams share quarterly reports but work from different baselines |
| **Stage 3** | Cross-functional teams access same dashboards in real-time |
| **Stage 4** | Decisions made in shared workspaces with embedded intelligence |
| **Stage 5** | AI recommends actions, humans approve and refine |

### 3. Real Use Cases (Tangible examples)
| Stage | Example Use Case |
|-------|------------------|
| **Stage 1** | "Which data do we trust for the board deck?" - 3 days debate |
| **Stage 2** | "Here's the brand health update" - but NPD team has different consumer data |
| **Stage 3** | "Pull the integrated view for UK protein snacks" - 10 minutes |
| **Stage 4** | "Alert: Competitor launched - here's recommended response" - same day action |
| **Stage 5** | "Ava recommends pausing product X based on trend signal" - validated in 2 hours |

## Technical Changes

### File: `src/components/globaldata-slides/GDSlide7MaturityCurve.tsx`

#### 1. Update `stagesData` with new content structure

Add new fields to each stage:
```typescript
interface MaturityStage {
  // ... existing fields
  waysOfWorking: {
    keyActions: string[];      // What teams DO
    teamBehavior: string;      // How collaboration works
    exampleUseCase: string;    // Concrete scenario
    timeToDecision: string;    // How long decisions take
  };
}
```

#### 2. Replace `MaturityStageDetails` with new component

Create `RoadmapStageDetails` that shows:
- **Key Actions** (icon: Wrench or Workflow)
- **Team Behavior** (icon: Users)
- **Example Use Case** (icon: Lightbulb or Quote)
- **Time to Decision** (icon: Clock)

### File: `src/data/globalDataNarration.ts`

#### 3. Update Slide 8 narration (slideId: 7)

Current narration repeats diagnostic content. Update to focus on the journey and actions:

**New narration focus:**
```
"This is your roadmap—the specific actions and ways of working that unlock each stage.

At stage one, teams request insights via email and wait weeks. Different functions maintain separate data sources. The question that wastes the most time? 'Which data do we trust?'

At stage two, you've got structure within silos. Brand runs a health tracker. Innovation runs a pipeline tool. Competitive runs a monitor. They share quarterly reports, but work from different baselines.

Stage three changes everything. One search across all data. Real-time dashboards shared cross-functionally. The debate about which data to trust disappears—because there's one truth.

Stage four embeds intelligence into action. Automated alerts when share drops. Decision recommendations surfaced proactively. What took a week now takes a day.

And stage five—predictive. Ava flags an emerging competitor launch six weeks before announcement. Recommends which products to defend, which to deprioritize. You validate in hours, not weeks.

The roadmap isn't just about maturity levels—it's about transforming how your teams actually work together."
```

## Visual Summary

```text
SLIDE 7 (PYRAMID)                    SLIDE 8 (CURVE)
┌─────────────────────┐              ┌─────────────────────┐
│  WHERE ARE WE?      │              │  HOW DO WE GET THERE?│
│                     │              │                     │
│  ▸ What It Looks    │              │  ▸ Key Actions      │
│    Like (symptoms)  │              │    (what teams DO)  │
│  ▸ Result           │              │  ▸ Team Behavior    │
│    (outcomes)       │              │    (collaboration)  │
│  ▸ Value Proof      │              │  ▸ Example Use Case │
│    (metrics)        │              │    (tangible)       │
│  ▸ Behavioral Shift │              │  ▸ Time to Decision │
│    (from → to)      │              │    (speed change)   │
│  ▸ Time Allocation  │              │                     │
│    (where time goes)│              │                     │
└─────────────────────┘              └─────────────────────┘
    DIAGNOSIS                            ACTION PLAN
```

## Files to Modify

1. **`src/components/globaldata-slides/GDSlide7MaturityCurve.tsx`**
   - Update `stagesData` with new `waysOfWorking` content
   - Create new `RoadmapStageDetails` component (or update `MaturityStageDetails`)

2. **`src/components/MaturityStageDetails.tsx`**
   - Replace with new detail structure focused on actions/use cases

3. **`src/data/globalDataNarration.ts`**
   - Update `slideId: 7` script to focus on ways of working and actions

## Content for Each Stage (Full Detail)

### Stage 1 - Fragmented
- **Key Actions**: Request insights via email; export data to spreadsheets manually; schedule ad-hoc vendor calls
- **Team Behavior**: Brand, innovation, commercial teams each maintain separate data sources and vendor relationships
- **Example Use Case**: "Which Nielsen data do we trust vs Kantar?" — 3 days debating before any decision
- **Time to Decision**: 12+ weeks

### Stage 2 - Managed
- **Key Actions**: Run separate brand tracker, innovation pipeline, competitive monitor; share quarterly reports
- **Team Behavior**: Teams have their own tools that work well internally, but alignment happens only in big meetings
- **Example Use Case**: "Here's the brand health update" — but NPD has different consumer segmentation
- **Time to Decision**: 6-8 weeks

### Stage 3 - Connected
- **Key Actions**: Query any data with one search; export to any workflow; share dashboards cross-functionally
- **Team Behavior**: Real-time access to same truth; async collaboration replaces alignment meetings
- **Example Use Case**: "Pull the integrated view for UK protein snacks" — done in 10 minutes
- **Time to Decision**: 2-3 weeks

### Stage 4 - Optimized
- **Key Actions**: Receive automated alerts; get decision recommendations; run scenario models
- **Team Behavior**: Decisions made in shared workspaces with embedded intelligence; fewer meetings, faster action
- **Example Use Case**: "Alert: Competitor launched at 15% lower price — here's recommended response"
- **Time to Decision**: 3-5 days

### Stage 5 - Predictive
- **Key Actions**: Ava flags emerging signals; generates positioning recommendations; validates with real-time data
- **Team Behavior**: AI recommends, humans approve and refine; strategic focus replaces reactive firefighting
- **Example Use Case**: "Ava recommends pausing Product X investment based on weakening trend signal"
- **Time to Decision**: Hours

