import { ArrowRight } from "lucide-react";
import { ports, portFor, pathFor } from "./data";
import type { Shipment } from "./data";

export function RouteMap({
  shipments,
  selected,
  onSelect,
}: {
  shipments: Shipment[];
  selected: Shipment;
  onSelect: (id: string) => void;
}) {
  return (
    <section className="md-map-panel" id="md-map">
      <div className="md-panel-heading">
        <div>
          <h2>Live route network</h2>
          <span>Across the world. In one view.</span>
        </div>
        <span className="md-live">
          <i />
          {
            shipments.filter((shipment) => shipment.status !== "Delivered")
              .length
          }{" "}
          active routes
        </span>
      </div>
      <div className="md-map">
        <svg
          viewBox="0 0 900 330"
          role="img"
          aria-label={`Route network. Selected shipment from ${selected.origin} to ${selected.destination}`}
        >
          <defs>
            <pattern
              id="md-map-grid"
              width="45"
              height="45"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M45 0H0V45"
                fill="none"
                stroke="#7390A9"
                strokeWidth=".5"
                opacity=".12"
              />
            </pattern>
            <radialGradient id="md-map-glow">
              <stop offset="0" stopColor="#58D8DC" stopOpacity=".08" />
              <stop offset="1" stopColor="#58D8DC" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="900" height="330" fill="url(#md-map-grid)" />
          <ellipse
            cx="450"
            cy="165"
            rx="410"
            ry="145"
            fill="url(#md-map-glow)"
          />
          <g fill="#263B4D" stroke="#405B6B" strokeWidth=".7">
            <path d="m117 65 33-21 70-10 44 19 40-10 33 19-18 20-32 1-18 18-19 12-11 25-29 9-10 29-17 5-5-32-30-16-15-30-27-7Z" />
            <path d="m240 179 29 3 24 18 2 20 19 24-12 33-15 33-18-18-5-32-11-29-12-18Z" />
            <path d="m303 42 10-24 39-8 33 12-18 30-32 11Z" />
            <path d="m431 78 17-15 29 6 4-15 18-2 21 14-7 19-19 3-2 25-22 7-11-14-23 3Z" />
            <path d="m433 138 23-22 44 3 21 20 8 28-24 24-12 42-24 16-14-23-8-28-20-28Z" />
            <path d="m522 69 35-24 59 1 30-21 42 20 42-4 38 21 49-5 23 29-23 15-26 26-10 29-24 22-22-14-20-30-28 17-13 35-17-6-14-39-20-16-20-23-40 6-19-18Z" />
            <path d="m655 195 15 17 6 24-10 5-18-30Z" />
            <path d="m700 246 21-9 28 13-4 8-30-5Z" />
            <path d="m737 261 22-19 35 8 30 20-3 24-31 8-29-15-20 4Z" />
            <path d="m831 287 10-12 7 16-8 16Z" />
          </g>
          <g opacity=".8">
            {shipments
              .filter((shipment) => shipment.status !== "Delivered")
              .map((shipment) => (
                <path
                  key={shipment.id}
                  d={pathFor(shipment)}
                  stroke={shipment.id === selected.id ? "#58D8DC" : "#567286"}
                  strokeWidth={shipment.id === selected.id ? "2.5" : "1"}
                  strokeDasharray={shipment.id === selected.id ? "none" : "3 5"}
                  fill="none"
                  onClick={() => onSelect(shipment.id)}
                  style={{ cursor: "pointer" }}
                />
              ))}
          </g>
          {ports.map((port) => (
            <g key={port.code}>
              <circle
                cx={port.x}
                cy={port.y}
                r={
                  selected.origin === port.name ||
                  selected.destination === port.name
                    ? 11
                    : 7
                }
                fill="#58D8DC"
                opacity=".12"
              />
              <circle
                cx={port.x}
                cy={port.y}
                r={
                  selected.origin === port.name ||
                  selected.destination === port.name
                    ? 3.3
                    : 2.5
                }
                fill={
                  selected.origin === port.name ||
                  selected.destination === port.name
                    ? "#58D8DC"
                    : "#90ADBC"
                }
              />
              <text
                x={port.x}
                y={port.y + 20}
                textAnchor="middle"
                fill="#9FB7C9"
                fontSize="9"
                fontFamily="DM Sans"
              >
                {port.name}
              </text>
            </g>
          ))}
          <text
            x="26"
            y="309"
            fill="#5E7C93"
            fontSize="9"
            fontFamily="Caleb Mono, monospace"
          >
            NETWORK / 06 PORTS
          </text>
          <text
            x="756"
            y="309"
            fill="#5E7C93"
            fontSize="9"
            fontFamily="Caleb Mono, monospace"
          >
            08 OCT 2026
          </text>
        </svg>
        <div className="md-map-route">
          <span>Selected route</span>
          <strong>
            {portFor(selected.origin).code}
            <ArrowRight size={12} />
            {portFor(selected.destination).code}
          </strong>
          <small>{selected.id}</small>
        </div>
      </div>
      <div className="md-map-footer">
        <span>
          <i className="md-cyan-dot" />
          Selected movement
        </span>
        <span>
          <i className="md-gray-dot" />
          Connected routes
        </span>
        <span>Network overview</span>
      </div>
    </section>
  );
}
