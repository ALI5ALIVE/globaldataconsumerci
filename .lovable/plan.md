
# Fix Layer 5 (Apex) Click Not Working

## Problem
Layer 5 (the apex with the AVA/Sparkles icon) is not responding to clicks properly. While the outer wrapper has `onPointerDownCapture={() => onLayerClick(5)}`, the inner AVA icon container has its own `onClick={() => handleModuleClick("ava")}` which may be interfering with the expected behavior.

The issue is that `onPointerDownCapture` fires on pointer DOWN, but the visual feedback and state update happen before the click completes. The inner `onClick` then fires and may cause unexpected behavior.

## Solution
Modify the Layer 5 foreignObject content to ensure clicking anywhere triggers the layer selection:

1. **Add `onClick` to outer wrapper** - In addition to `onPointerDownCapture`, add an `onClick` handler
2. **Remove redundant inner onClick** - The AVA icon doesn't need a separate module click handler since clicking it should just select Layer 5
3. **Add `pointer-events-none` to inner decorative div** - Let clicks pass through to the outer handler

## File to Update
**`src/components/globaldata-slides/GDPyramid3D.tsx`**

## Changes

### Lines 248-264 - Modify Layer 5 foreignObject content

**Current code:**
```tsx
<div 
  className="w-full h-full flex items-center justify-center cursor-pointer"
  onPointerDownCapture={() => onLayerClick(5)}
>
  <div
    className="p-5 sm:p-6 rounded-xl bg-gradient-to-b from-amber-400/30 to-amber-600/20 border-2 border-amber-400/50 cursor-pointer hover:scale-110 transition-all duration-300"
    style={{
      boxShadow: "0 0 32px 12px hsl(45, 93%, 58%, 0.6)",
    }}
    onClick={() => handleModuleClick("ava")}
  >
    <Sparkles 
      className="w-16 h-16 sm:w-20 sm:h-20 text-amber-400" 
      strokeWidth={2.5}
    />
  </div>
</div>
```

**Updated code:**
```tsx
<div 
  className="w-full h-full flex items-center justify-center cursor-pointer"
  onClick={() => onLayerClick(5)}
>
  <div
    className="p-5 sm:p-6 rounded-xl bg-gradient-to-b from-amber-400/30 to-amber-600/20 border-2 border-amber-400/50 hover:scale-110 transition-all duration-300 pointer-events-none"
    style={{
      boxShadow: "0 0 32px 12px hsl(45, 93%, 58%, 0.6)",
    }}
  >
    <Sparkles 
      className="w-16 h-16 sm:w-20 sm:h-20 text-amber-400" 
      strokeWidth={2.5}
    />
  </div>
</div>
```

## Summary of Changes

| Change | Before | After |
|--------|--------|-------|
| Outer div handler | `onPointerDownCapture={() => onLayerClick(5)}` | `onClick={() => onLayerClick(5)}` |
| Inner div onClick | `onClick={() => handleModuleClick("ava")}` | Removed |
| Inner div classes | `cursor-pointer` | `pointer-events-none` |

## Why This Works
- Using `onClick` on the outer wrapper ensures the layer selection fires on a complete click event
- Adding `pointer-events-none` to the inner decorative div means all clicks pass through to the outer wrapper
- Removing the inner `onClick` eliminates competing event handlers
- The hover effect on the inner div still works because it's CSS-based (hover states work even with `pointer-events-none` when the parent receives events)

## Outcome
- Clicking anywhere on Layer 5 (the apex with AVA icon) will select it and update the details panel
- Consistent behavior with other layers
- Visual hover effects are preserved
