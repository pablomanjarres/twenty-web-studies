import { ports } from "./data";
import { endpointLabelOffset, routeGeometryFor } from "./routeGeometry";
import { TransportIcon } from "./TransportIcon";
import type { Shipment } from "./data";
export function RouteCartography({
  shipments,
  selected,
  onSelect,
  zoom,
}: {
  shipments: Shipment[];
  selected: Shipment;
  onSelect: (id: string) => void;
  zoom: number;
}) {
  const movement = routeGeometryFor(selected);
  return (
    <svg
      className="md-cartography"
      viewBox="0 75 1000 375"
      preserveAspectRatio="xMidYMid meet"
      role="group"
      aria-label={`Shipment routes. Selected ${selected.id} from ${selected.origin} to ${selected.destination}`}
    >
      <defs>
        <pattern
          id="md-graticule"
          width="83.33"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M83.33 0H0V100"
            fill="none"
            stroke="#77919d"
            strokeWidth=".5"
            opacity=".2"
          />
        </pattern>
        <clipPath id="md-world-clip">
          <rect y="75" width="1000" height="375" />
        </clipPath>
      </defs>
      <g clipPath="url(#md-world-clip)">
        <g
          transform={`translate(${(1 - zoom) * 500} ${(1 - zoom) * 230}) scale(${zoom})`}
        >
          <rect width="1000" height="600" fill="url(#md-graticule)" />
          <image
            href={import.meta.env.BASE_URL + "images/meridian/land.svg"}
            width="1000"
            height="600"
          />
          {shipments.map((item) => (
            <g
              key={item.id}
              role="button"
              tabIndex={0}
              aria-label={`Inspect map route ${item.id}`}
              onClick={() => onSelect(item.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelect(item.id);
                }
              }}
            >
              <path
                className="md-route-hit"
                d={routeGeometryFor(item).path}
                fill="none"
                stroke="transparent"
                strokeWidth="18"
              />
              <path
                d={routeGeometryFor(item).path}
                fill="none"
                stroke={item.id === selected.id ? "#58D8DC" : "#617b8c"}
                strokeWidth={item.id === selected.id ? 2.3 : 1}
                strokeDasharray={item.id === selected.id ? undefined : "3 6"}
              />
            </g>
          ))}
          {ports.map((port) => {
            const labelOffset = endpointLabelOffset(selected, port.name);
            const active =
              port.name === selected.origin ||
              port.name === selected.destination;
            return (
              <g key={port.code}>
                <circle
                  cx={port.x}
                  cy={port.y}
                  r={active ? 10 : 5}
                  fill="#58D8DC"
                  opacity={active ? 0.2 : 0.12}
                />
                <circle
                  cx={port.x}
                  cy={port.y}
                  r="3"
                  fill={active ? "#58D8DC" : "#9dafb4"}
                />
                {active && (
                  <text
                    x={port.x + labelOffset.x}
                    y={port.y + labelOffset.y}
                    textAnchor="middle"
                    fill="#dae6e7"
                    fontSize="11"
                    fontFamily="Caleb Mono, monospace"
                  >
                    {port.code}
                  </text>
                )}
              </g>
            );
          })}
          <g transform={`translate(${movement.x - 14} ${movement.y - 14})`}>
            <circle cx="14" cy="14" r="23" fill="#58D8DC" opacity=".12" />
            <rect width="28" height="28" rx="3" fill="#58D8DC" />
            <g transform="translate(5 5)">
              <TransportIcon mode={selected.mode} size={18} color="#10222d" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
