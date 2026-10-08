import { ArrowRight } from "lucide-react";
import { portFor } from "./data";
import { VehicleIllustration } from "./VehicleIllustration";
import type { Shipment } from "./data";
export function MovementCard({
  shipment,
  selected,
  onSelect,
}: {
  shipment: Shipment;
  selected: boolean;
  onSelect: (id: string) => void;
}) {
  return (
    <button
      className="md-movement-card"
      aria-pressed={selected}
      onClick={() => onSelect(shipment.id)}
    >
      <div className="md-movement-card-heading">
        <b>{shipment.id}</b>
        <span data-status={shipment.status}>
          <i />
          {shipment.status}
        </span>
      </div>
      <div className="md-movement-carrier">
        <div>
          <strong>{shipment.vessel}</strong>
          <small>
            {shipment.mode} · {shipment.cargo}
          </small>
        </div>
        <VehicleIllustration mode={shipment.mode} />
      </div>
      <div className="md-movement-endpoints">
        <div>
          <small>Origin</small>
          <strong>{portFor(shipment.origin).code}</strong>
        </div>
        <ArrowRight size={14} />
        <div>
          <small>Destination</small>
          <strong>{portFor(shipment.destination).code}</strong>
        </div>
      </div>
      <footer>
        <span>Arrival {shipment.arrival}</span>
        <b>{shipment.progress}%</b>
      </footer>
    </button>
  );
}
