import type { Trail } from "./data";
const contours = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  d: `M${-80 + i * 10} ${530 - i * 12} C${100 + i * 9} ${410 - i * 7}, ${170 + i * 8} ${570 - i * 14}, ${315 + i * 7} ${422 - i * 12} S${480 + i * 7} ${315 - i * 13}, ${585 + i * 5} ${357 - i * 15} S${740 + i * 6} ${120 - i * 7}, ${980 + i * 2} ${180 - i * 12}`,
}));
export function RouteMap({ trail }: { trail: Trail }) {
  return (
    <svg
      className="wf-map"
      viewBox="0 0 860 560"
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
            stroke="#c9d2bc"
            strokeWidth=".7"
          />
        </pattern>
      </defs>
      <rect width="860" height="560" fill="#e8eddd" />
      <rect width="860" height="560" fill="url(#wf-grid)" />
      <path
        d="M640 0C585 104 707 155 655 253S626 357 685 405L860 400V0Z"
        fill="#ceddcd"
      />
      <path
        d="M0 418C146 369 167 476 292 470S431 467 482 541L470 560H0Z"
        fill="#c7dfe0"
      />
      <g fill="none" stroke="#a8b69a" strokeWidth=".9">
        {contours.map((c) => (
          <path key={c.id} d={c.d} opacity={c.id % 3 === 0 ? 0.8 : 0.45} />
        ))}
      </g>
      <g fill="none" stroke="#fffdf6" strokeWidth="4">
        <path d="M104 200Q255 195 410 286T755 320" />
        <path d="M214 0Q315 118 430 158T738 505" />
      </g>
      <g
        fill="#7d8f70"
        fontFamily="IBM Plex Mono"
        fontSize="10"
        letterSpacing="1"
      >
        <text x="420" y="73">
          NORTHERN RIDGE
        </text>
        <text x="50" y="320">
          VALLEY FOREST
        </text>
        <text x="490" y="486">
          OPEN MEADOW
        </text>
        <text x="80" y="510" fill="#69878b">
          LOWER LAKE
        </text>
      </g>
      <path d={trail.path} fill="none" stroke="#f8faf6" strokeWidth="9" />
      <path
        d={trail.path}
        fill="none"
        stroke="#ec7650"
        strokeWidth="4"
        strokeDasharray="7 5"
      />
      <g fill="#183442" stroke="#faf9ed" strokeWidth="3">
        {trail.points.map((point, i) => (
          <circle
            key={i}
            cx={point.x}
            cy={point.y}
            r={i === 0 || i === 3 ? 9 : 8}
          />
        ))}
      </g>
      <g fontFamily="IBM Plex Mono" fontSize="12" fill="#183442">
        {trail.points.map((point, i) => (
          <text key={i} x={point.x - 11} y={point.y + (i < 2 ? 27 : -18)}>
            {String(i + 1).padStart(2, "0")}
          </text>
        ))}
      </g>
      <g transform="translate(765 72)" fill="none" stroke="#183442">
        <path d="M0 -30V30M-20 0H20" />
        <path d="m0-30-6 13H6Z" fill="#183442" />
        <text x="-4" y="-38" fill="#183442" stroke="none" fontSize="12">
          N
        </text>
      </g>
    </svg>
  );
}
