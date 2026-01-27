

# Remove Bottom Stats Cards from Value Chain Slide

## What Will Change
Remove the three stat cards at the bottom of Slide 5 ("Intelligence That Compounds Across the Value Chain"):
- "5 Workflow stages"
- "3 Strategic combinations"
- "∞ Compounding value"

## File to Update
**`src/components/globaldata-slides/GDSlide5ValueChain.tsx`**

## Change Details
Delete lines 391-405, which contain:
```jsx
{/* Bottom Stats - pushed to bottom */}
<div className="grid grid-cols-3 gap-1.5 mt-auto">
  <div className="bg-card/50 border border-border/50 rounded-lg p-2 text-center">
    <p className="text-xl font-bold text-primary">5</p>
    <p className="text-[11px] text-muted-foreground">Workflow stages</p>
  </div>
  <div className="bg-card/50 border border-border/50 rounded-lg p-1.5 text-center">
    <p className="text-lg font-bold text-primary">3</p>
    <p className="text-[10px] text-muted-foreground">Strategic combinations</p>
  </div>
  <div className="bg-card/50 border border-border/50 rounded-lg p-1.5 text-center">
    <p className="text-lg font-bold text-primary">∞</p>
    <p className="text-[10px] text-muted-foreground">Compounding value</p>
  </div>
</div>
```

## Result
- The three bottom stat cards will be removed from the slide
- The Detail Panel will have more vertical space to breathe
- The slide will maintain its zero-scroll layout on 768p screens

