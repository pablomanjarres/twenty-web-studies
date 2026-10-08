import type { CSSProperties } from "react";
import { useId } from "react";
import type { Track } from "./data";
export function Artwork({
  track,
  compact = false,
}: {
  track: Track;
  compact?: boolean;
}) {
  const patternId = useId();
  return (
    <div
      className={`sr3-artwork sr3-artwork-${track.id} ${compact ? "is-compact" : ""}`}
      style={
        {
          "--sr3-cover": track.color,
          "--sr3-cover-ink": track.ink,
        } as CSSProperties
      }
      aria-hidden="true"
    >
      <svg viewBox="0 0 200 200">
        <defs>
          <pattern
            id={patternId}
            width="6"
            height="6"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 3h6"
              stroke="currentColor"
              strokeWidth=".5"
              opacity=".2"
            />
          </pattern>
        </defs>
        {track.id === 1 ? (
          <g fill="none" stroke="currentColor" strokeWidth="12">
            {[34, 57, 80].map((r) => (
              <circle key={r} cx="130" cy="102" r={r} />
            ))}
          </g>
        ) : track.id === 2 ? (
          <g fill="currentColor">
            {[0, 1, 2, 3, 4].map((i) => (
              <path
                key={i}
                d={`M${15 + i * 25} 30 Q${105 + i * 12} 85 ${30 + i * 25} 180 L${15 + i * 25} 180 Q${85 + i * 12} 85 ${1 + i * 25} 30Z`}
                opacity={0.2 + i * 0.15}
              />
            ))}
          </g>
        ) : track.id === 3 ? (
          <g fill="currentColor">
            <ellipse
              cx="90"
              cy="114"
              rx="35"
              ry="70"
              transform="rotate(-32 90 114)"
            />
            <ellipse
              cx="135"
              cy="106"
              rx="23"
              ry="54"
              transform="rotate(29 135 106)"
            />
            <path
              d="M92 175 115 46"
              stroke="var(--sr3-cover)"
              strokeWidth="2"
            />
          </g>
        ) : track.id === 4 ? (
          <g fill="currentColor">
            {Array.from({ length: 9 }, (_, i) => (
              <rect
                key={i}
                x={23 + (i % 3) * 57}
                y={27 + Math.floor(i / 3) * 57}
                width={49 - i * 2}
                height={49 - i * 2}
                transform={`rotate(${i * 5} ${45 + (i % 3) * 57} ${50 + Math.floor(i / 3) * 57})`}
                opacity={0.3 + i * 0.07}
              />
            ))}
          </g>
        ) : (
          <g fill="currentColor">
            <circle cx="104" cy="85" r="58" />
            {Array.from({ length: 12 }, (_, i) => (
              <rect key={i} x="19" y={115 + i * 5} width="165" height="2" />
            ))}
          </g>
        )}
        <rect width="200" height="200" fill={`url(#${patternId})`} />
      </svg>
      <span className="sr3-cover-label">
        SOUNDROOM<small>{track.year}</small>
      </span>
      <strong>{track.title}</strong>
    </div>
  );
}
