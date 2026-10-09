import { Compass } from "lucide-react";
import { RouteMap } from "./RouteMap";
import type { Trail } from "./data";

export function MapPanel({ trail }: { trail: Trail }) {
  return (
    <div className="wf-map-sheet">
      <div className="wf-map-heading">
        <span>Your route, at a glance</span>
        <Compass size={21} />
      </div>
      <RouteMap trail={trail} />
      <div className="wf-map-route-name">
        <span>Journey {trail.id}</span>
        <strong>{trail.name}</strong>
      </div>
      <div className="wf-map-caption">
        <span>
          <i /> Selected walking route
        </span>
        <small>Route illustration · not for navigation</small>
      </div>
    </div>
  );
}
