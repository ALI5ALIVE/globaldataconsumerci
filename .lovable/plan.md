

# Plan: Create World-Class CTA Slide (Slide 11)

## Overview

Create a compelling Call-to-Action slide that closes the sales loop with two clear pathways: **Discovery Session** (strategic conversation) and **Intelligence Audit** (diagnostic assessment). The design will be visually striking with clear next steps, urgency drivers, and trust signals.

## Design Philosophy

The CTA slide follows the "Art of the Possible" framework:
- **Acknowledge their journey** - Reference what they've just learned
- **Create urgency** - Quantify the cost of inaction
- **Offer two clear paths** - Discovery (exploratory) vs Audit (diagnostic)
- **Remove friction** - Clear outcomes, no commitment language
- **Build trust** - Social proof and credibility signals

## Visual Layout

```
┌─────────────────────────────────────────────────────────────────────────┐
│  HEADLINE: Let's Close Your Intelligence Gap                           │
│  SUBTITLE: Choose your path to Connected Intelligence                  │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌─────────────────────────────┐  ┌─────────────────────────────┐      │
│  │   DISCOVERY SESSION         │  │   INTELLIGENCE AUDIT         │      │
│  │   ─────────────────────     │  │   ─────────────────────      │      │
│  │   "See the Art of the       │  │   "Benchmark Your Current    │      │
│  │    Possible"                │  │    Intelligence Landscape"   │      │
│  │                             │  │                              │      │
│  │   • Deep dive into 5 core   │  │   • Map your current tools   │      │
│  │     solutions               │  │     and data sources         │      │
│  │   • Use cases for your      │  │   • Identify gaps and        │      │
│  │     specific challenges     │  │     redundancies             │      │
│  │   • Live platform demo      │  │   • Maturity stage           │      │
│  │                             │  │     assessment               │      │
│  │   Duration: 60 min          │  │   Duration: 90 min           │      │
│  │   Format: Virtual/In-person │  │   Deliverable: Audit Report  │      │
│  │                             │  │                              │      │
│  │   [  Schedule Discovery  ]  │  │   [  Request Audit  ]        │      │
│  └─────────────────────────────┘  └─────────────────────────────┘      │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│  URGENCY BAR: The Cost of Waiting                                       │
│  ┌────────────────────────────────────────────────────────────────┐    │
│  │ Every week of decision latency = lost market windows,          │    │
│  │ competitor advantage, and compounding intelligence debt         │    │
│  └────────────────────────────────────────────────────────────────┘    │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│  TRUST SIGNALS (horizontal bar)                                         │
│  ┌────┬────┬────┬────┬────┐                                            │
│  │ 8/10 Top │ 95% │ 200+ │ 15+ │ ISO     │                             │
│  │ FMCG    │ GDP │ Brands│ Years│ Certified│                           │
│  └────┴────┴────┴────┴────┘                                            │
└─────────────────────────────────────────────────────────────────────────┘
```

## Technical Implementation

### File 1: `src/components/globaldata-slides/GDSlide10CTA.tsx` (NEW)

```tsx
// Core structure:
// - Uses GDSlideContainer with slideNumber={11}
// - Two-column card layout for the two CTA options
// - Urgency banner with gradient accent
// - Trust signal badges at bottom
// - Interactive hover states on CTA cards

import GDSlideContainer from "./GDSlideContainer";
import { 
  Compass, ClipboardCheck, Calendar, FileText, 
  Users, Globe, Award, Clock, ArrowRight,
  Sparkles, Target, Lightbulb
} from "lucide-react";
import type { SlideNarrationProps } from "@/types/slideProps";
```

**Key Components:**

1. **Discovery Session Card** (Primary CTA - Blue gradient border)
   - Tagline: "See the Art of the Possible"
   - Icon: Compass or Lightbulb
   - 3 bullet points: Deep dive into solutions, Use cases for your challenges, Live platform demo
   - Duration badge: 60 minutes
   - Format badge: Virtual or In-person
   - CTA Button: "Schedule Discovery"

2. **Intelligence Audit Card** (Secondary CTA - Cyan/teal gradient border)
   - Tagline: "Benchmark Your Intelligence Landscape"
   - Icon: ClipboardCheck or Target
   - 3 bullet points: Map current tools & sources, Identify gaps & redundancies, Maturity stage assessment
   - Duration badge: 90 minutes
   - Deliverable badge: Custom Audit Report
   - CTA Button: "Request Audit"

3. **Urgency Banner** (Below cards)
   - Gradient background (primary to sky)
   - Text: "Every week of decision latency compounds: missed windows, competitor advantage, and intelligence debt that's harder to recover"
   - Clock icon for emphasis

4. **Trust Signals** (Bottom row - 5 badges)
   - "8 of Top 10 FMCG" - Users icon
   - "95% Global GDP Coverage" - Globe icon
   - "200+ Consumer Brands" - Award icon
   - "15+ Years Expertise" - Clock icon
   - "Enterprise Security" - Shield icon

### File 2: `src/pages/GlobalDataDeck.tsx` (MODIFY)

Add Slide 11 to the deck:

**Line 14:** Add import
```tsx
import GDSlide10CTA from "@/components/globaldata-slides/GDSlide10CTA";
```

**Lines 16-27:** Update slides array
```tsx
const slides = [
  { id: "gd-slide-0", label: "Title" },
  { id: "gd-slide-1", label: "Market Pressure" },
  { id: "gd-slide-2", label: "Intelligence Gap" },
  { id: "gd-slide-3", label: "Transformation" },
  { id: "gd-slide-4", label: "The Answer" },
  { id: "gd-slide-5", label: "Value Chain" },
  { id: "gd-slide-6", label: "Your Position" },
  { id: "gd-slide-7", label: "Your Roadmap" },
  { id: "gd-slide-8", label: "The Return" },
  { id: "gd-slide-9", label: "Why GlobalData" },
  { id: "gd-slide-10", label: "Next Steps" },  // NEW
];
```

**Line 200:** Add slide component after GDSlide9WhyGlobalData
```tsx
<GDSlide10CTA {...getNarrationProps(10)} />
```

### File 3: `src/data/globalDataNarration.ts` (MODIFY)

Add narration for Slide 11 (slideId: 10):

```typescript
{
  slideId: 10,
  title: "Let's Close Your Intelligence Gap",
  script: `You've seen the Intelligence Gap. You've seen where your organisation likely sits on the maturity ladder. And you've seen what's possible when intelligence becomes connected.

Now the question is: what's the right next step for you?

We offer two pathways.

The first is a Discovery Session. This is where we go deep into GlobalData's five core intelligence solutions—and show you exactly how they apply to your specific challenges. You'll see the platform live, explore use cases relevant to your category, and understand what connected intelligence looks like in practice. It takes about sixty minutes, and we can do it virtually or in person.

The second option is an Intelligence Audit. This is for organisations ready to take a hard look at their current landscape. We'll map your existing tools and data sources, identify gaps and redundancies, and benchmark your maturity stage. You'll walk away with a custom audit report—a clear picture of where you are and what it would take to close the gap. This takes about ninety minutes and delivers a tangible diagnostic.

Here's the reality. Every week of decision latency compounds. Missed market windows. Competitor advantage. Intelligence debt that becomes harder to recover.

The brands that act now will define the next generation of category performers.

Let's start the conversation.`,
  voiceId: DEFAULT_VOICE_ID,
},
```

## CTA Card Content Details

### Discovery Session Card

| Element | Content |
|---------|---------|
| **Headline** | Discovery Session |
| **Tagline** | See the Art of the Possible |
| **Bullet 1** | Deep dive into 5 core intelligence solutions |
| **Bullet 2** | Use cases tailored to your specific challenges |
| **Bullet 3** | Live platform demonstration |
| **Duration** | 60 minutes |
| **Format** | Virtual or In-person |
| **Button** | Schedule Discovery |

### Intelligence Audit Card

| Element | Content |
|---------|---------|
| **Headline** | Intelligence Audit |
| **Tagline** | Benchmark Your Current Landscape |
| **Bullet 1** | Map your existing tools and data sources |
| **Bullet 2** | Identify gaps, redundancies, and blind spots |
| **Bullet 3** | Maturity stage assessment with recommendations |
| **Duration** | 90 minutes |
| **Deliverable** | Custom Audit Report |
| **Button** | Request Audit |

## Styling Specifications

| Element | Style |
|---------|-------|
| **Card hover** | `hover:border-primary/50 hover:scale-[1.02]` |
| **Discovery card border** | `border-primary/30` with `bg-gradient-to-br from-primary/5 to-sky-400/5` |
| **Audit card border** | `border-cyan-500/30` with `bg-gradient-to-br from-cyan-500/5 to-teal-400/5` |
| **CTA buttons** | `bg-primary hover:bg-primary/90` with arrow icon |
| **Urgency banner** | `bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-amber-500/30` |
| **Trust badges** | `bg-card/50 border-border/50` compact horizontal layout |

## Files Changed Summary

| File | Action | Purpose |
|------|--------|---------|
| `src/components/globaldata-slides/GDSlide10CTA.tsx` | CREATE | New CTA slide component |
| `src/pages/GlobalDataDeck.tsx` | MODIFY | Add slide to deck navigation and render |
| `src/data/globalDataNarration.ts` | MODIFY | Add narration script for slide 11 |

## Outcome

The CTA slide will:
- Provide two clear, differentiated next-step options
- Create urgency through the "cost of waiting" messaging
- Build trust with social proof badges
- Match the existing design system and 768p viewport optimization
- Include full narration support for the presentation flow

