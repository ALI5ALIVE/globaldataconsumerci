

# Plan: Replace "System" with "Solution" Across GlobalData Slides

## Overview

Update all references to "system" (when referring to GlobalData's Connected Intelligence) to "solution" across the slide deck and narration. This terminology shift reinforces that GlobalData provides a unified **solution** rather than a technical "system"—a more value-oriented framing for executive audiences.

## References to Change

| Location | Line | Current Text | Proposed Text |
|----------|------|--------------|---------------|
| **Slide Components** | | | |
| `GDSlide0Title.tsx` | 9 | "One system, faster, aligned, confident" | "One solution, faster, aligned, confident" |
| `GDSlide3BeforeAfter.tsx` | 15 | "Unified system" (label) | "Unified solution" |
| `GDSlide4Proposition.tsx` | 59 | "One system that moves faster, aligns better, and acts with confidence" (subtitle) | "One solution that moves faster, aligns better, and acts with confidence" |
| `GDSlide4Proposition.tsx` | 73 | "into one trusted system—so organisations" | "into one trusted solution—so organisations" |
| `GDSlide6ValuePyramid.tsx` | 65 | "The intelligence system doesn't wait to be asked" | "The intelligence solution doesn't wait to be asked" |
| `GDSlide6ValuePyramid.tsx` | 73 | "across the connected system" | "across the connected solution" |
| `GDSlide9WhyGlobalData.tsx` | 105 | "operate intelligence as a connected system" | "operate intelligence as a connected solution" |
| **Narration** | | | |
| `globalDataNarration.ts` | 64 | "A unified system on one connected platform" | "A unified solution on one connected platform" |
| `globalDataNarration.ts` | 74 | "into one trusted system—so organisations" | "into one trusted solution—so organisations" |
| `globalDataNarration.ts` | 96 | "One connected system where intelligence compounds" | "One connected solution where intelligence compounds" |
| `globalDataNarration.ts` | 110 | "The intelligence system doesn't wait to be asked" | "The intelligence solution doesn't wait to be asked" |
| `globalDataNarration.ts` | 172 | "operate intelligence as a connected system" | "operate intelligence as a connected solution" |

## References NOT to Change

The following use "system" in a different context (describing customer's existing tools/siloed state) and should remain unchanged:

| Location | Context | Reason to Keep |
|----------|---------|----------------|
| `globalDataNarration.ts` line 106 | "You've got strong systems in specific domains" | Refers to customer's existing siloed tools, not GlobalData |

## Files Changed Summary

| File | Lines | Changes |
|------|-------|---------|
| `src/components/globaldata-slides/GDSlide0Title.tsx` | 9 | Update agenda item summary |
| `src/components/globaldata-slides/GDSlide3BeforeAfter.tsx` | 15 | Update "After" item label |
| `src/components/globaldata-slides/GDSlide4Proposition.tsx` | 59, 73 | Update subtitle and value proposition |
| `src/components/globaldata-slides/GDSlide6ValuePyramid.tsx` | 65, 73 | Update pyramid stage 4 description |
| `src/components/globaldata-slides/GDSlide9WhyGlobalData.tsx` | 105 | Update Performance Imperative text |
| `src/data/globalDataNarration.ts` | 64, 74, 96, 110, 172 | Update narration scripts (5 occurrences) |

## Outcome

After these changes:
- All references to GlobalData's Connected Intelligence will use "solution" terminology
- Customer's existing siloed "systems" remain described as such (correct usage for contrast)
- The messaging reinforces the value-oriented, outcome-focused positioning
- Narration audio will regenerate with the updated terminology

