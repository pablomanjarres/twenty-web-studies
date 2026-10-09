import type { Trail } from "./data";
const contours = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  d: `M${-80 + i * 10} ${530 - i * 12} C${100 + i * 9} ${410 - i * 7}, ${170 + i * 8} ${570 - i * 14}, ${315 + i * 7} ${422 - i * 12} S${480 + i * 7} ${315 - i * 13}, ${585 + i * 5} ${357 - i * 15} S${740 + i * 6} ${120 - i * 7}, ${980 + i * 2} ${180 - i * 12}`,
}));
export function RouteMap({ trail }: { trail: Trail }) {
  return (
    <svg
      className="wf-map"
      viewBox="70 30 710 500"
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
      <rect width="860" height="560" fill="var(--wf-sky)" />
      <rect width="860" height="560" fill="url(#wf-grid)" />
      <path
        d="M640 0C585 104 707 155 655 253S626 357 685 405L860 400V0Z"
        fill="#bad9e3"
      />
      <path
        d="M0 418C146 369 167 476 292 470S431 467 482 541L470 560H0Z"
        fill="var(--wf-lake)"
      />
      <g fill="none" stroke="#82b0c1" strokeWidth=".9">
        {contours.map((c) => (
          <path key={c.id} d={c.d} opacity={c.id % 3 === 0 ? 0.8 : 0.45} />
        ))}
      </g>
      <g fill="none" stroke="var(--wf-white)" strokeWidth="4">
        <path d="M104 200Q255 195 410 286T755 320" />
        <path d="M214 0Q315 118 430 158T738 505" />
      </g>
      <g
        fill="var(--wf-terrain)"
        fontFamily="IBM Plex Mono"
        fontSize="10"
        letterSpacing=".3"
      >
        <text x="420" y="73">
          Northern ridge
        </text>
        <text x="105" y="320">
          Valley forest
        </text>
        <text x="490" y="486">
          Open meadow
        </text>
        <text x="95" y="510" fill="var(--wf-ink)">
          Lower lake
        </text>
      </g>
      <path
        d={trail.path}
        fill="none"
        stroke="var(--wf-white)"
        strokeWidth="9"
      />
      <path d={trail.path} fill="none" stroke="var(--wf-ink)" strokeWidth="4" />
      <g fill="var(--wf-ink)" stroke="var(--wf-white)" strokeWidth="3">
        {trail.points.map((point, i) => (
          <circle key={i} cx={point.x} cy={point.y} r="15" />
        ))}
      </g>
      <g
        fontFamily="Manrope"
        fontSize="12"
        fontWeight="600"
        textAnchor="middle"
        fill="var(--wf-white)"
      >
        {trail.points.map((point, i) => (
          <text key={i} x={point.x} y={point.y + 4}>
            {i + 1}
          </text>
        ))}
      </g>
      <g transform="translate(738 91)" fill="none" stroke="var(--wf-ink)">
        <path d="M0 -30V30M-20 0H20" />
        <path d="m0-30-6 13H6Z" fill="var(--wf-ink)" />
        <text x="-4" y="-38" fill="var(--wf-ink)" stroke="none" fontSize="12">
          N
        </text>
      </g>
    </svg>
  );
}
