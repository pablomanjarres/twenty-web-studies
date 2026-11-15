import {
  AlertCircle,
  ArrowUpRight,
  Check,
  Clock3,
  Package,
} from "lucide-react";
import { portFor } from "./data";
import { handoffFor } from "./PortPlanData";
import { ProgressRule, toneForStatus } from "./ProgressRule";
import { StatusChip } from "./StatusChip";
import { VehicleIllustration } from "./VehicleIllustration";
import type { Shipment } from "./data";

export function OperationsDock({
  shipment,
  onManifest,
}: {
  shipment: Shipment;
  onManifest: () => void;
}) {
  const handoff = handoffFor(shipment);
  return (
    <div className="md-operations-docks">
      <section
        className="md-load-dock"
        aria-label={`Arrival details for ${shipment.id}`}
      >
        <header>
          <span>Selected movement</span>
          <button
            onClick={onManifest}
            aria-label={`Open manifest for ${shipment.id}`}
          >
            <ArrowUpRight size={16} />
          </button>
        </header>
        <div className="md-load-identity">
          <div>
            <strong>{shipment.id}</strong>
            <span>{shipment.vessel}</span>
          </div>
          <VehicleIllustration mode={shipment.mode} />
        </div>
        <div className="md-load-route">
          <span>
            <b>{portFor(shipment.origin).code}</b>
            <small>{shipment.origin}</small>
          </span>
          <i />
          <span>
            <b>{portFor(shipment.destination).code}</b>
            <small>{shipment.destination}</small>
          </span>
        </div>
        <div className="md-load-facts">
          <div>
            <small>
              <Clock3 size={12} /> Expected arrival
            </small>
            <b>{shipment.arrival}</b>
          </div>
          <div>
            <small>
              <Package size={12} /> Cargo
            </small>
            <b>{shipment.cargo}</b>
          </div>
        </div>
      </section>
      <section
        className="md-event-dock"
        aria-label="Operational handoff state"
        data-tone={handoff.tone}
      >
        <header>
          <span>Handoff desk</span>
          <StatusChip status={shipment.status} />
        </header>
        <div>
          {handoff.tone === "complete" ? (
            <Check size={20} />
          ) : (
            <AlertCircle size={20} />
          )}
          <h3>{handoff.title}</h3>
        </div>
        <p>{handoff.detail}</p>
        <footer>
          <span>Journey progress</span>
          <b>{shipment.progress}%</b>
          <ProgressRule
            value={shipment.progress}
            tone={toneForStatus(shipment.status)}
          />
        </footer>
      </section>
    </div>
  );
}
