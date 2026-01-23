import { useIsMobile } from "@/hooks/use-mobile";
import { BarChart3, ShoppingCart, Users, TrendingUp, FileSpreadsheet } from "lucide-react";
import GDTransformationalIllustration from "./GDTransformationalIllustration";
import GDMetricsGauges from "./GDMetricsGauges";
import GDQuintupleLoop from "./GDQuintupleLoop";
import GDFragmentationIllustration from "./GDFragmentationIllustration";

interface PyramidLayerData {
  id: string;
  level: number;
  label: string;
  sublabel: string;
  colorClass: string;
  glowClass: string;
}

interface GDPyramid3DProps {
  layers: PyramidLayerData[];
  activeLayer: number;
  onLayerClick: (level: number) => void;
  onModuleClick?: (module: string) => void;
  compact?: boolean;
}

// CORRECTED: Level 1 = base (Red), Level 5 = apex (Gold)
const layerColors = {
  1: { main: "hsl(0, 70%, 50%)", dark: "hsl(0, 70%, 38%)", glow: "hsl(0, 70%, 50%)" },        // FRAGMENTED - Red (base)
  2: { main: "hsl(199, 89%, 48%)", dark: "hsl(199, 89%, 36%)", glow: "hsl(199, 89%, 48%)" },  // MANAGED - Blue
  3: { main: "hsl(195, 100%, 45%)", dark: "hsl(195, 100%, 35%)", glow: "hsl(195, 100%, 45%)" },  // CONNECTED - Sky Blue
  4: { main: "hsl(280, 65%, 55%)", dark: "hsl(280, 65%, 42%)", glow: "hsl(280, 65%, 55%)" },  // OPERATIONAL - Purple
  5: { main: "hsl(45, 93%, 58%)", dark: "hsl(45, 93%, 45%)", glow: "hsl(45, 93%, 58%)" },     // PREDICTIVE - Gold (apex)
};

// 5 silos for Level 2 (MANAGED)
const foundationSections = [
  { id: "nielseniq", label: "NielsenIQ", sublabel: "Point of Sale", icon: BarChart3, color: "hsl(210, 100%, 45%)" },
  { id: "circana", label: "Circana", sublabel: "Retail Analytics", icon: ShoppingCart, color: "hsl(280, 70%, 50%)" },
  { id: "kantar", label: "Kantar", sublabel: "Panel Data", icon: Users, color: "hsl(350, 85%, 55%)" },
  { id: "euromonitor", label: "Euromonitor", sublabel: "Market Research", icon: TrendingUp, color: "hsl(165, 70%, 40%)" },
  { id: "mintel", label: "Mintel", sublabel: "GNPD / Trends", icon: FileSpreadsheet, color: "hsl(35, 95%, 50%)" },
];

const GDPyramid3D = ({
  layers,
  activeLayer,
  onLayerClick,
  onModuleClick,
  compact = false,
}: GDPyramid3DProps) => {
  const isMobile = useIsMobile();

  // Pyramid configuration - Further expanded for larger visual (~30% bigger)
  const layerConfig = {
    apex: { x: 820, y: 5 },
    baseLeft: { x: 5, y: 1350 },
    baseRight: { x: 1635, y: 1350 },
  };

  // CORRECTED: Level 1 at base, Level 5 at apex - Scaled for new height (5 → 1350 = 1345px)
  const layerBounds = {
    5: { top: 5, bottom: 274 },     // PREDICTIVE - Apex
    4: { top: 274, bottom: 543 },   // OPERATIONAL
    3: { top: 543, bottom: 812 },   // CONNECTED
    2: { top: 812, bottom: 1081 },  // MANAGED (with 5 silos)
    1: { top: 1081, bottom: 1350 }, // FRAGMENTED - Base
  };

  const getLeftX = (y: number) => {
    const { apex, baseLeft } = layerConfig;
    const t = (y - apex.y) / (baseLeft.y - apex.y);
    return apex.x + t * (baseLeft.x - apex.x);
  };

  const getRightX = (y: number) => {
    const { apex, baseRight } = layerConfig;
    const t = (y - apex.y) / (baseRight.y - apex.y);
    return apex.x + t * (baseRight.x - apex.x);
  };

  const getLayerPoints = (level: number) => {
    const bounds = layerBounds[level as keyof typeof layerBounds];
    const topLeft = getLeftX(bounds.top);
    const topRight = getRightX(bounds.top);
    const bottomLeft = getLeftX(bounds.bottom);
    const bottomRight = getRightX(bounds.bottom);

    return `${topLeft},${bounds.top} ${topRight},${bounds.top} ${bottomRight},${bounds.bottom} ${bottomLeft},${bounds.bottom}`;
  };

  // 5 sections for Level 2 (MANAGED silos)
  const getFoundationSectionPoints = (sectionIndex: number) => {
    const bounds = layerBounds[2];
    const topLeft = getLeftX(bounds.top);
    const topRight = getRightX(bounds.top);
    const bottomLeft = getLeftX(bounds.bottom);
    const bottomRight = getRightX(bounds.bottom);

    const topWidth = topRight - topLeft;
    const bottomWidth = bottomRight - bottomLeft;
    const sectionTopWidth = topWidth / 5;
    const sectionBottomWidth = bottomWidth / 5;

    const startTopX = topLeft + sectionIndex * sectionTopWidth;
    const endTopX = topLeft + (sectionIndex + 1) * sectionTopWidth;
    const startBottomX = bottomLeft + sectionIndex * sectionBottomWidth;
    const endBottomX = bottomLeft + (sectionIndex + 1) * sectionBottomWidth;

    return `${startTopX},${bounds.top} ${endTopX},${bounds.top} ${endBottomX},${bounds.bottom} ${startBottomX},${bounds.bottom}`;
  };

  const getLayerData = (level: number) => {
    return layers.find((l) => l.level === level);
  };

  // Label positions - Level 5 at top, Level 1 at bottom - Adjusted for larger pyramid
  const labelPositions = {
    5: { lineStartX: 1080, lineStartY: 140, lineEndX: 1750, lineEndY: 140, labelX: 1760, labelY: 140 },
    4: { lineStartX: 1180, lineStartY: 409, lineEndX: 1750, lineEndY: 409, labelX: 1760, labelY: 409 },
    3: { lineStartX: 1280, lineStartY: 678, lineEndX: 1750, lineEndY: 678, labelX: 1760, labelY: 678 },
    2: { lineStartX: 1380, lineStartY: 947, lineEndX: 1750, lineEndY: 947, labelX: 1760, labelY: 947 },
    1: { lineStartX: 1480, lineStartY: 1216, lineEndX: 1750, lineEndY: 1216, labelX: 1760, labelY: 1216 },
  };

  const handleModuleClick = (module: string) => {
    if (onModuleClick) {
      onModuleClick(module);
    }
  };

  const viewBox = isMobile ? "0 0 1650 1370" : "0 0 2000 1370";

  const apexX = layerConfig.apex.x;
  const apexY = layerConfig.apex.y;
  const leftBaseX = layerConfig.baseLeft.x;
  const rightBaseX = layerConfig.baseRight.x;
  const baseY = layerConfig.baseLeft.y;

  const foundationBounds = layerBounds[2];
  const foundationCenterY = (foundationBounds.top + foundationBounds.bottom) / 2;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <svg
        viewBox={viewBox}
        className="w-full"
        preserveAspectRatio="xMidYMid meet"
        style={{ 
          ...(compact ? {} : {
            minWidth: isMobile ? "660px" : "1040px",
            minHeight: isMobile ? "600px" : "900px",
          }),
          filter: isMobile ? "drop-shadow(0 20px 40px rgba(0,0,0,0.4))" : "drop-shadow(0 30px 60px rgba(0,0,0,0.5))",
        }}
      >
        <defs>
          {/* Gradients for each layer */}
          {[1, 2, 3, 4, 5].map((level) => {
            const colors = layerColors[level as keyof typeof layerColors];
            return (
              <linearGradient key={`grad-${level}`} id={`gd-layer-grad-${level}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={colors.main} />
                <stop offset="100%" stopColor={colors.dark} />
              </linearGradient>
            );
          })}

          {/* Silo section gradients (for Level 4) */}
          {foundationSections.map((section, index) => (
            <linearGradient key={`silo-${index}`} id={`gd-silo-section-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={section.color} />
              <stop offset="100%" stopColor={section.color.replace(/(\d+)%\)$/, (_, p) => `${Math.max(0, parseInt(p) - 15)}%)`)} />
            </linearGradient>
          ))}
          
          {/* Glow filters for active states */}
          {[1, 2, 3, 4, 5].map((level) => {
            const colors = layerColors[level as keyof typeof layerColors];
            return (
              <filter key={`glow-${level}`} id={`gd-active-glow-${level}`} x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="24" result="blur" />
                <feFlood floodColor={colors.glow} floodOpacity="0.7" />
                <feComposite in2="blur" operator="in" />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            );
          })}
        </defs>

        {/* Y-axis arrow - Intelligence Maturity */}
        <g className="performance-arrow">
          <line x1={40} y1={900} x2={40} y2={80} stroke="hsl(var(--muted-foreground))" strokeWidth="3" strokeOpacity="0.6" />
          <polygon points="40,56 28,84 52,84" fill="hsl(var(--muted-foreground))" fillOpacity="0.6" />
          <text x={-500} y={20} transform="rotate(-90)" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="20" fontWeight="600" fontFamily="'Space Grotesk', sans-serif" letterSpacing="0.08em" className="uppercase">
            Intelligence Maturity
          </text>
        </g>

        {/* Render layers 5, 4, 3, 1 (Level 2 is silos, rendered separately) */}
        {[5, 4, 3, 1].map((level) => {
          const points = getLayerPoints(level);
          const colors = layerColors[level as keyof typeof layerColors];
          const isActive = activeLayer === level;
          const bounds = layerBounds[level as keyof typeof layerBounds];
          const labelPos = labelPositions[level as keyof typeof labelPositions];
          const layerData = getLayerData(level);

          const centerY = (bounds.top + bounds.bottom) / 2;
          const rightEdgeX = getRightX(centerY);

          return (
            <g key={level}>
              <polygon
                points={points}
                fill={`url(#gd-layer-grad-${level})`}
                stroke={colors.main}
                strokeWidth={isActive ? "4" : "2"}
                className="cursor-pointer transition-all duration-300"
                onClick={() => onLayerClick(level)}
                style={{ filter: isActive ? `url(#gd-active-glow-${level})` : "none", opacity: isActive ? 1 : 0.85 }}
              />

              {level !== 5 && (
                <line x1={getLeftX(bounds.top)} y1={bounds.top} x2={getRightX(bounds.top)} y2={bounds.top} stroke="white" strokeWidth="2" strokeOpacity={isActive ? "0.4" : "0.2"} />
              )}

              <polygon points={points} fill="transparent" className="cursor-pointer hover:fill-white/10 transition-all duration-200" onClick={() => onLayerClick(level)} />

              {/* Layer labels on right side */}
              {!isMobile && (
                <>
                  <line x1={rightEdgeX + 10} y1={labelPos.labelY} x2={labelPos.lineEndX} y2={labelPos.labelY} stroke={isActive ? colors.main : "hsl(222, 30%, 30%)"} strokeWidth={isActive ? "3" : "2"} strokeDasharray={isActive ? "none" : "8 8"} className="transition-all duration-300" />
                  <circle cx={rightEdgeX + 10} cy={labelPos.labelY} r={isActive ? "10" : "6"} fill={isActive ? colors.main : "hsl(222, 30%, 40%)"} className="transition-all duration-300" />

                  <g className="cursor-pointer" onClick={() => onLayerClick(level)}>
                    <rect x={labelPos.lineEndX + 16} y={labelPos.labelY - 52} width="100" height="104" rx="10" fill={isActive ? "hsl(222, 47%, 12%)" : "transparent"} stroke={isActive ? colors.main : "transparent"} strokeWidth="2" className="transition-all duration-300" />
                    <foreignObject x={labelPos.lineEndX + 16} y={labelPos.labelY - 52} width="100" height="104">
                      <div style={{ width: '100%', height: '100%', padding: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <span style={{ color: isActive ? colors.main : 'hsl(210, 40%, 80%)', fontSize: '14px', fontWeight: 700, lineHeight: 1.2, wordBreak: 'break-word', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.06em' }}>
                          {layerData?.label}
                        </span>
                        <span style={{ color: isActive ? 'hsl(210, 40%, 90%)' : 'hsl(215, 20%, 55%)', fontSize: '12px', marginTop: '4px', lineHeight: 1.2, fontFamily: "'Inter', sans-serif" }}>
                          {layerData?.sublabel}
                        </span>
                      </div>
                    </foreignObject>
                  </g>
                </>
              )}
            </g>
          );
        })}

        {/* Embedded illustrations for layers 5, 4, 3, 1 - DOUBLED SIZE */}
        {/* Layer 5 (PREDICTIVE - Apex) - Transformational Illustration */}
        {(() => {
          const bounds = layerBounds[5];
          const layerHeight = bounds.bottom - bounds.top;
          const centerY = (bounds.top + bounds.bottom) / 2;
          const leftX = getLeftX(centerY);
          const rightX = getRightX(centerY);
          const width = (rightX - leftX) * 1.8;
          const height = layerHeight * 1.8;
          const offsetX = (rightX - leftX - width) / 2;
          const offsetY = (layerHeight - height) / 2;
          
          return (
            <foreignObject
              x={leftX + offsetX}
              y={bounds.top + offsetY}
              width={width}
              height={height}
              className="pointer-events-auto"
            >
              <GDTransformationalIllustration onNodeClick={handleModuleClick} />
            </foreignObject>
          );
        })()}

        {/* Layer 4 (OPERATIONAL) - Metrics Gauges */}
        {(() => {
          const bounds = layerBounds[4];
          const layerHeight = bounds.bottom - bounds.top;
          const centerY = (bounds.top + bounds.bottom) / 2;
          const leftX = getLeftX(centerY);
          const rightX = getRightX(centerY);
          const width = (rightX - leftX) * 1.4;
          const height = layerHeight * 1.6;
          const offsetX = (rightX - leftX - width) / 2;
          const offsetY = (layerHeight - height) / 2;
          
          return (
            <foreignObject
              x={leftX + offsetX}
              y={bounds.top + offsetY}
              width={width}
              height={height}
              className="pointer-events-auto"
            >
              <GDMetricsGauges onMetricClick={handleModuleClick} />
            </foreignObject>
          );
        })()}

        {/* Layer 3 (CONNECTED) - Quintuple Loop */}
        {(() => {
          const bounds = layerBounds[3];
          const layerHeight = bounds.bottom - bounds.top;
          const centerY = (bounds.top + bounds.bottom) / 2;
          const leftX = getLeftX(centerY);
          const rightX = getRightX(centerY);
          const width = (rightX - leftX) * 1.8;
          const height = layerHeight * 1.9;
          const offsetX = (rightX - leftX - width) / 2;
          const offsetY = (layerHeight - height) / 2;
          
          return (
            <foreignObject
              x={leftX + offsetX}
              y={bounds.top + offsetY}
              width={width}
              height={height}
              className="pointer-events-auto"
            >
              <GDQuintupleLoop onModuleClick={handleModuleClick} />
            </foreignObject>
          );
        })()}

        {/* Layer 1 (FRAGMENTED - Base) - Fragmentation Illustration */}
        {(() => {
          const bounds = layerBounds[1];
          const layerHeight = bounds.bottom - bounds.top;
          const centerY = (bounds.top + bounds.bottom) / 2;
          const leftX = getLeftX(centerY);
          const rightX = getRightX(centerY);
          const width = (rightX - leftX) * 1.8;
          const height = layerHeight * 1.9;
          const offsetX = (rightX - leftX - width) / 2;
          const offsetY = (layerHeight - height) / 2;
          
          return (
            <foreignObject
              x={leftX + offsetX}
              y={bounds.top + offsetY}
              width={width}
              height={height}
              className="pointer-events-auto"
            >
              <GDFragmentationIllustration onNodeClick={handleModuleClick} />
            </foreignObject>
          );
        })()}

        {/* Level 2 (MANAGED) - 5 Silos */}
        <g>
          {foundationSections.map((section, index) => {
            const points = getFoundationSectionPoints(index);
            const isActive = activeLayer === 2;
            const colors = layerColors[2];

            const topLeftX = getLeftX(foundationBounds.top);
            const topRightX = getRightX(foundationBounds.top);
            const bottomLeftX = getLeftX(foundationBounds.bottom);
            const bottomRightX = getRightX(foundationBounds.bottom);
            const topWidth = topRightX - topLeftX;
            const bottomWidth = bottomRightX - bottomLeftX;
            
            const sectionTopCenter = topLeftX + (topWidth / 5) * (index + 0.5);
            const sectionBottomCenter = bottomLeftX + (bottomWidth / 5) * (index + 0.5);
            const sectionCenterX = (sectionTopCenter + sectionBottomCenter) / 2;

            const IconComponent = section.icon;

            return (
              <g key={section.id}>
                <polygon
                  points={points}
                  fill={`url(#gd-silo-section-${index})`}
                  stroke={colors.main}
                  strokeWidth={isActive ? "4" : "2"}
                  className="cursor-pointer transition-all duration-300"
                  onClick={() => { onLayerClick(2); handleModuleClick(section.id); }}
                  style={{ filter: isActive ? `url(#gd-active-glow-2)` : "none", opacity: isActive ? 1 : 0.85 }}
                />
                <polygon points={points} fill="transparent" className="cursor-pointer hover:fill-white/10 transition-all duration-200" onClick={() => { onLayerClick(2); handleModuleClick(section.id); }} />

                {/* Silo icon - doubled size */}
                <foreignObject x={sectionCenterX - 24} y={foundationCenterY - 55} width="48" height="48" className="pointer-events-none">
                  <div className="w-full h-full flex items-center justify-center">
                    <IconComponent className="w-10 h-10 text-white/90" strokeWidth={2} />
                  </div>
                </foreignObject>

                <text x={sectionCenterX} y={foundationCenterY + 4} textAnchor="middle" fill="hsl(210, 40%, 98%)" fontSize="16" fontWeight="600" fontFamily="'Space Grotesk', sans-serif" letterSpacing="0.05em" className="uppercase pointer-events-none select-none">
                  {section.label}
                </text>
                <text x={sectionCenterX} y={foundationCenterY + 26} textAnchor="middle" fill="hsl(210, 40%, 80%)" fontSize="12" fontWeight="400" fontFamily="'Inter', sans-serif" className="pointer-events-none select-none">
                  {section.sublabel}
                </text>
              </g>
            );
          })}

          {/* Dividers between silos */}
          {[0, 1, 2, 3].map((index) => {
            const topLeftX = getLeftX(foundationBounds.top);
            const topRightX = getRightX(foundationBounds.top);
            const bottomLeftX = getLeftX(foundationBounds.bottom);
            const bottomRightX = getRightX(foundationBounds.bottom);
            const topWidth = topRightX - topLeftX;
            const bottomWidth = bottomRightX - bottomLeftX;

            const dividerTopX = topLeftX + (topWidth / 5) * (index + 1);
            const dividerBottomX = bottomLeftX + (bottomWidth / 5) * (index + 1);

            return (
              <g key={`divider-${index}`}>
                <line x1={dividerTopX} y1={foundationBounds.top} x2={dividerBottomX} y2={foundationBounds.bottom} stroke="hsl(199, 89%, 60%)" strokeWidth="3" strokeOpacity="0.5" />
              </g>
            );
          })}

          {/* Top edge highlight for silos */}
          <line x1={getLeftX(foundationBounds.top)} y1={foundationBounds.top} x2={getRightX(foundationBounds.top)} y2={foundationBounds.top} stroke="white" strokeWidth="2" strokeOpacity={activeLayer === 2 ? "0.4" : "0.2"} />

          {/* Silos label (right side) */}
          {!isMobile && (() => {
            const labelPos = labelPositions[2];
            const centerY = (foundationBounds.top + foundationBounds.bottom) / 2;
            const rightEdgeX = getRightX(centerY);
            const layerData = getLayerData(2);
            const isActive = activeLayer === 2;
            const colors = layerColors[2];

            return (
              <g>
                <line x1={rightEdgeX + 10} y1={labelPos.labelY} x2={labelPos.lineEndX} y2={labelPos.labelY} stroke={isActive ? colors.main : "hsl(222, 30%, 30%)"} strokeWidth={isActive ? "3" : "2"} strokeDasharray={isActive ? "none" : "8 8"} className="transition-all duration-300" />
                <circle cx={rightEdgeX + 10} cy={labelPos.labelY} r={isActive ? "10" : "6"} fill={isActive ? colors.main : "hsl(222, 30%, 40%)"} className="transition-all duration-300" />

                <g className="cursor-pointer" onClick={() => onLayerClick(2)}>
                  <rect x={labelPos.lineEndX + 16} y={labelPos.labelY - 52} width="100" height="104" rx="10" fill={isActive ? "hsl(222, 47%, 12%)" : "transparent"} stroke={isActive ? colors.main : "transparent"} strokeWidth="2" className="transition-all duration-300" />
                  <foreignObject x={labelPos.lineEndX + 16} y={labelPos.labelY - 52} width="100" height="104">
                    <div style={{ width: '100%', height: '100%', padding: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <span style={{ color: isActive ? colors.main : 'hsl(210, 40%, 80%)', fontSize: '14px', fontWeight: 700, lineHeight: 1.2, wordBreak: 'break-word', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.06em' }}>
                        {layerData?.label}
                      </span>
                      <span style={{ color: isActive ? 'hsl(210, 40%, 90%)' : 'hsl(215, 20%, 55%)', fontSize: '12px', marginTop: '4px', lineHeight: 1.2, fontFamily: "'Inter', sans-serif" }}>
                        {layerData?.sublabel}
                      </span>
                    </div>
                  </foreignObject>
                </g>
              </g>
            );
          })()}
        </g>

        {/* Outer pyramid edge highlights */}
        <path d={`M${apexX},${apexY} L${leftBaseX},${baseY}`} fill="none" stroke="white" strokeWidth="2" strokeOpacity="0.15" />
        <path d={`M${apexX},${apexY} L${rightBaseX},${baseY}`} fill="none" stroke="white" strokeWidth="2" strokeOpacity="0.25" />
        <path d={`M${leftBaseX},${baseY} L${rightBaseX},${baseY}`} fill="none" stroke="white" strokeWidth="2" strokeOpacity="0.1" />

        {/* AI GATEWAY threshold marker between Layer 3 and Layer 4 */}
        {!isMobile && (() => {
          const bounds = layerBounds[3];
          const leftX = getLeftX(bounds.bottom);
          const rightX = getRightX(bounds.bottom);
          const markerY = bounds.bottom;
          
          return (
            <g>
              {/* Dashed AI Gateway line */}
              <line 
                x1={leftX} 
                y1={markerY} 
                x2={rightX} 
                y2={markerY} 
                stroke="hsl(45, 93%, 58%)" 
                strokeWidth="4" 
                strokeDasharray="16,8"
                opacity="0.9"
              />
              
              {/* AI Gateway label on left side */}
              <rect 
                x={leftX - 180} 
                y={markerY - 20} 
                width="160" 
                height="40" 
                rx="6" 
                fill="hsl(45, 93%, 58%)" 
                fillOpacity="0.95" 
              />
              <text 
                x={leftX - 100} 
                y={markerY + 7} 
                textAnchor="middle" 
                fill="hsl(222, 47%, 11%)" 
                fontSize="15" 
                fontWeight="700" 
                fontFamily="'Space Grotesk', sans-serif" 
                letterSpacing="0.1em"
              >
                AI GATEWAY
              </text>
              
            </g>
          );
        })()}
      </svg>

      {/* Ambient glow effect */}
      <div
        className="absolute inset-0 -z-10 blur-3xl opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 40% 50%, ${
            layerColors[activeLayer as keyof typeof layerColors]?.glow || "hsl(173, 80%, 40%)"
          } 0%, transparent 70%)`,
        }}
      />
    </div>
  );
};

export default GDPyramid3D;
