import { useEffect, useRef, useState } from "react";
import { Anchor, MapPin, Route } from "lucide-react";
import { MapTools } from "./MapTools";
import { planFor, planningPointsFor, handoffLabelFor } from "./PortPlanData";
import { portFor } from "./data";
import { TransportIcon } from "./TransportIcon";
import { portCameraFor } from "./portGeometry";
import type { Shipment } from "./data";

export function PortSchematic({ shipment }: { shipment: Shipment }) {
  const [zoom, setZoom] = useState(1);
  const [focus, setFocus] = useState("berth");
  const plan = planFor(shipment);
  const planningPoints = planningPointsFor(shipment);
  const selectedPoint =
    planningPoints.find((point) => point.id === focus) ?? planningPoints[0];
  const marker = plan.marker;
  const cartography = useRef<SVGSVGElement>(null);
  const [camera, setCamera] = useState("0 0 1000 700");
  useEffect(() => {
    const element = cartography.current;
    if (!element) return;
    const observer = new ResizeObserver(([entry]) => {
      setCamera(
        portCameraFor(
          entry.contentRect.width,
          entry.contentRect.height,
          marker,
          window.innerWidth,
        ).join(" "),
      );
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [marker[0], marker[1]]);
  return (
    <section
      className="md-port-schematic"
      aria-label={`${shipment.destination} port handoff plan`}
    >
      <header className="md-port-caption">
        <div>
          <span>
            <MapPin size={13} /> DESTINATION OPERATIONS
          </span>
          <h2>
            {shipment.destination}{" "}
            <small>{portFor(shipment.destination).code}</small>
          </h2>
        </div>
        <span className="md-map-badge">Port schematic</span>
      </header>
      <svg
        ref={cartography}
        className="md-port-cartography"
        viewBox={camera}
        role="group"
        aria-label={`Original schematic of the planned ${shipment.destination} handoff`}
      >
        <g
          transform={`translate(${(1 - zoom) * 500} ${(1 - zoom) * 350}) scale(${zoom})`}
        >
          <image
            href={import.meta.env.BASE_URL + `images/meridian/${plan.file}`}
            width="1000"
            height="700"
          />
          <text x="125" y="300" fill="#597c91" fontSize="18" letterSpacing="4">
            {plan.water.toUpperCase()}
          </text>
          <path
            d={plan.route}
            fill="none"
            stroke="#58d8dc"
            strokeWidth="12"
            opacity=".1"
          />
          <path
            d={plan.route}
            fill="none"
            stroke="#72e3e6"
            strokeWidth="2.5"
            strokeDasharray="7 6"
          />
          <g transform={`translate(${marker[0] - 15} ${marker[1] - 15})`}>
            <circle cx="15" cy="15" r="30" fill="#58d8dc" opacity=".12" />
            <circle cx="15" cy="15" r="20" fill="#58d8dc" />
            <g transform="translate(5 5)">
              <TransportIcon mode={shipment.mode} size={20} color="#13293c" />
            </g>
          </g>
          {planningPoints.map((point, index) => {
            const x = marker[0] + (index - 1) * 90,
              y = marker[1] + [-60, -100, 0][index];
            return (
              <g
                key={point.id}
                className="md-planning-point"
                role="button"
                tabIndex={0}
                aria-pressed={focus === point.id}
                aria-label={`Inspect ${point.label}`}
                onClick={() => setFocus(point.id)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setFocus(point.id);
                  }
                }}
                transform={`translate(${x} ${y})`}
              >
                <circle r="42" fill="transparent" />
                <circle
                  r="17"
                  fill="#162435"
                  stroke={focus === point.id ? "#78e4e6" : "#667a8e"}
                  strokeWidth="2"
                />
                <circle
                  r="4"
                  fill={focus === point.id ? "#78e4e6" : "#a4b5c5"}
                />
                <text y="32" textAnchor="middle" fill="#c2d4de" fontSize="11">
                  {point.label}
                </text>
              </g>
            );
          })}
        </g>
      </svg>
      <MapTools zoom={zoom} onZoom={setZoom} />
      <div className="md-plan-focus" aria-live="polite">
        <Anchor size={16} />
        <div>
          <strong>{selectedPoint.label}</strong>
          <p>{selectedPoint.note}</p>
        </div>
      </div>
      <footer className="md-map-legend">
        <span>
          <i /> {handoffLabelFor(shipment)}
        </span>
        <span>
          <Route size={12} /> Original schematic · destination planning
        </span>
      </footer>
    </section>
  );
}
