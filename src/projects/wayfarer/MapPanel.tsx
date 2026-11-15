import { RouteMap } from "./RouteMap";
import type { Trail } from "./data";

export function MapPanel({ trail }: { trail: Trail }) {
  return (
    <div className="wf-map-sheet">
      <RouteMap trail={trail} />
      <div className="wf-map-footer">
        <div>
          <strong>Journey {trail.id}</strong>
          <code>{trail.coordinates}</code>
        </div>
        <div>
          <span>
            <i /> Selected walking route
          </span>
          <span>Illustration, not for navigation</span>
        </div>
      </div>
    </div>
  );
}
