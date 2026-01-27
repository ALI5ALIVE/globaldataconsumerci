

# Update Slide Title Wording

## What Will Change
Update the title on Slide 1 (Market Pressure) from:
- **Current:** "The Market Rewards Speed and Punishes Hesitation"
- **New:** "The Market Rewards Speed and Punishes Delay"

## File to Update
**`src/components/globaldata-slides/GDSlide1GrowthReality.tsx`**

## Change Details
Update line 41, changing the `title` prop passed to `GDSlideContainer`:

```jsx
// Before
title="The Market Rewards Speed and Punishes Hesitation"

// After
title="The Market Rewards Speed and Punishes Delay"
```

## Result
- The slide title will display "The Market Rewards Speed and Punishes Delay"
- "Delay" is more action-oriented and directly ties to the time-to-decision theme of the slide
- No other changes needed

