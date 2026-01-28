
# Increase Stage 4 & 5 Icons by 50% on Pyramid

## Summary

Increase the visual size of icons displayed within pyramid layers 4 (OPERATIONAL) and 5 (PREDICTIVE) by 50% for better visibility.

## Files to Modify

### 1. `src/components/globaldata-slides/GDPyramid3D.tsx`

**Stage 5 (PREDICTIVE - Apex) Icon** - Lines 346-355

| Property | Current | New (50% larger) |
|----------|---------|------------------|
| Icon size | `w-16 h-16 sm:w-20 sm:h-20` | `w-24 h-24 sm:w-[120px] sm:h-[120px]` |
| Container padding | `p-5 sm:p-6` | `p-7 sm:p-9` |

This makes the Ava sparkle icon grow from 64-80px to 96-120px.

### 2. `src/components/globaldata-slides/GDMetricsGauges.tsx`

**Ava Sparkle at Top** - Lines 60-67

| Property | Current | New (50% larger) |
|----------|---------|------------------|
| Circle radius | `r="16"` | `r="24"` |
| ForeignObject | `width="24" height="24"` | `width="36" height="36"` |
| Icon class | `w-6 h-6` | `w-9 h-9` |

**Metric Icons Inside Gauges** - Lines 133-137

| Property | Current | New (50% larger) |
|----------|---------|------------------|
| ForeignObject | `width="32" height="32"` | `width="48" height="48"` |
| Icon class | `w-6 h-6` | `w-9 h-9` |
| Position offset | `x={cx - 16} y={gaugeCenterY - 36}` | `x={cx - 24} y={gaugeCenterY - 44}` |

## Technical Notes

- Tailwind doesn't have `w-30` or `h-30`, so we use arbitrary values `w-[120px] h-[120px]` for the 50% increase on larger screens
- The gauge dimensions (radius, width) are kept the same since only icons were requested to be enlarged
- Position offsets are adjusted to keep icons centered after size increase
