const ThreePillarDiagram = () => {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full max-h-[320px]">
      <defs>
        {/* Gradient for the outer ring */}
        <linearGradient id="outerRingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(40 30% 85%)" />
          <stop offset="100%" stopColor="hsl(35 25% 80%)" />
        </linearGradient>
        
        {/* Gradients for the three circles */}
        <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(217 100% 55%)" />
          <stop offset="100%" stopColor="hsl(195 100% 50%)" />
        </linearGradient>
        
        <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(280 70% 55%)" />
          <stop offset="100%" stopColor="hsl(320 70% 60%)" />
        </linearGradient>
        
        <linearGradient id="humanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(160 60% 45%)" />
          <stop offset="100%" stopColor="hsl(180 60% 50%)" />
        </linearGradient>
        
        <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(217 100% 50%)" />
          <stop offset="100%" stopColor="hsl(217 100% 45%)" />
        </linearGradient>
      </defs>
      
      {/* Outer beige ring */}
      <circle 
        cx="200" 
        cy="200" 
        r="180" 
        fill="url(#outerRingGradient)" 
        opacity="0.4"
      />
      
      {/* Three overlapping circles - positioned in a triangle formation */}
      {/* Top circle - High-impact data */}
      <circle 
        cx="200" 
        cy="130" 
        r="75" 
        fill="url(#dataGradient)" 
        opacity="0.25"
      />
      
      {/* Bottom left circle - AI & Technology */}
      <circle 
        cx="140" 
        cy="250" 
        r="75" 
        fill="url(#aiGradient)" 
        opacity="0.25"
      />
      
      {/* Bottom right circle - Human Expertise */}
      <circle 
        cx="260" 
        cy="250" 
        r="75" 
        fill="url(#humanGradient)" 
        opacity="0.25"
      />
      
      {/* Center circle - Consumer Intelligence */}
      <circle 
        cx="200" 
        cy="200" 
        r="50" 
        fill="url(#centerGradient)"
      />
      
      {/* Center label */}
      <text 
        x="200" 
        y="193" 
        textAnchor="middle" 
        className="fill-white text-[11px] font-semibold"
      >
        Consumer
      </text>
      <text 
        x="200" 
        y="210" 
        textAnchor="middle" 
        className="fill-white text-[11px] font-semibold"
      >
        Intelligence
      </text>
      
      {/* Outer labels for each pillar */}
      {/* High-impact data - top */}
      <text 
        x="200" 
        y="70" 
        textAnchor="middle" 
        className="fill-foreground text-[10px] font-medium"
      >
        High-impact
      </text>
      <text 
        x="200" 
        y="84" 
        textAnchor="middle" 
        className="fill-foreground text-[10px] font-medium"
      >
        data
      </text>
      
      {/* AI & Technology - bottom left */}
      <text 
        x="85" 
        y="290" 
        textAnchor="middle" 
        className="fill-foreground text-[10px] font-medium"
      >
        AI &
      </text>
      <text 
        x="85" 
        y="304" 
        textAnchor="middle" 
        className="fill-foreground text-[10px] font-medium"
      >
        technology
      </text>
      
      {/* Human Expertise - bottom right */}
      <text 
        x="315" 
        y="290" 
        textAnchor="middle" 
        className="fill-foreground text-[10px] font-medium"
      >
        Human
      </text>
      <text 
        x="315" 
        y="304" 
        textAnchor="middle" 
        className="fill-foreground text-[10px] font-medium"
      >
        expertise
      </text>
      
      {/* Small indicator circles on the overlapping areas */}
      <circle cx="200" cy="130" r="6" fill="hsl(217 100% 50%)" opacity="0.8" />
      <circle cx="140" cy="250" r="6" fill="hsl(280 70% 55%)" opacity="0.8" />
      <circle cx="260" cy="250" r="6" fill="hsl(160 60% 45%)" opacity="0.8" />
    </svg>
  );
};

export default ThreePillarDiagram;
