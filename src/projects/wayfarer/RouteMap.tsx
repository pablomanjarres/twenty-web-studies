import type { CSSProperties } from "react";
import type { Trail } from "./data";

const terrainLabels = [
  { x: 420, y: 73, text: "Northern ridge" },
  { x: 105, y: 320, text: "Valley forest" },
  { x: 490, y: 486, text: "Open meadow" },
  { x: 95, y: 510, text: "Lower lake", fill: "var(--wf-ink)" },
];
const contours = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  d: `M${-80 + i * 10} ${530 - i * 12} C${100 + i * 9} ${410 - i * 7}, ${170 + i * 8} ${570 - i * 14}, ${315 + i * 7} ${422 - i * 12} S${480 + i * 7} ${315 - i * 13}, ${585 + i * 5} ${357 - i * 15} S${740 + i * 6} ${120 - i * 7}, ${980 + i * 2} ${180 - i * 12}`,
}));
export function RouteMap({ trail }: { trail: Trail }) {
  return (
    <svg
      className="wf-map"
      viewBox="40 30 740 500"
      role="img"
      aria-label={`Illustrated ${trail.region} route with ${trail.stops.length} stops`}
    >
      <defs>
        <pattern
          id="wf-grid"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M100 0H0V100"
            fill="none"
            stroke="#a0c7d5"
            strokeWidth=".7"
          />
        </pattern>
      </defs>
      <rect x="-200" y="-200" width="1260" height="960" fill="var(--wf-sky)" />
      <rect x="-200" y="-200" width="1260" height="960" fill="url(#wf-grid)" />
      <path
        d="M640 -200V0C585 104 707 155 655 253S626 357 685 405L1060 400V-200Z"
        fill="#bad9e3"
      />
      <path
        d="M-200 418H0C146 369 167 476 292 470S431 467 482 541L560 760H-200Z"
        fill="var(--wf-lake)"
      />
      <g fill="none" stroke="#82b0c1" strokeWidth=".9">
        {contours.map((c) => (
          <path key={c.id} d={c.d} opacity={c.id % 3 === 0 ? 0.8 : 0.45} />
        ))}
      </g>
      <g fill="none" stroke="var(--wf-white)" strokeWidth="4">
        <path d="M104 200Q255 195 410 286T755 320" />
        <path d="M170 -100L214 0Q315 118 430 158T738 505L800 640" />
      </g>
      <g className="wf-map-label" fill="var(--wf-terrain)" fontSize="15">
        {terrainLabels.map((label) => (
          <text key={label.text} x={label.x} y={label.y} fill={label.fill}>
            {label.text}
          </text>
        ))}
      </g>
      <g key={trail.id} className="wf-route">
        <path
          d={trail.path}
          pathLength={1}
          fill="none"
          stroke="var(--wf-white)"
          strokeWidth="9"
        />
        <path
          d={trail.path}
          pathLength={1}
          fill="none"
          stroke="var(--wf-ink)"
          strokeWidth="4"
        />
        {trail.points.map((point, i) => (
          <g key={i} style={{ "--i": i } as CSSProperties}>
            <circle
              cx={point.x}
              cy={point.y}
              r="16"
              fill="var(--wf-ink)"
              stroke="var(--wf-white)"
              strokeWidth="3"
            />
            <text
              x={point.x}
              y={point.y + 5}
              fontFamily="Manrope"
              fontSize="14"
              fontWeight="600"
              textAnchor="middle"
              fill="var(--wf-white)"
            >
              {i + 1}
            </text>
            <text
              className="wf-map-stop-name"
              x={point.x - 14}
              y={point.y - 22}
              fontSize="15"
              textAnchor="end"
              fill="var(--wf-ink)"
            >
              {trail.stops[i]}
            </text>
          </g>
        ))}
      </g>
      <g transform="translate(738 91)" fill="none" stroke="var(--wf-ink)">
        <path d="M0 -30V30M-20 0H20" />
        <path d="m0-30-6 13H6Z" fill="var(--wf-ink)" />
        <text x="-5" y="-38" fill="var(--wf-ink)" stroke="none" fontSize="15">
          N
        </text>
      </g>
    </svg>
  );
}
