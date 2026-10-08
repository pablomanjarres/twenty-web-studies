import { Box, Check, Clock3, Plane, Ship, Truck } from "lucide-react";
import { portFor } from "./data";
import type { Shipment } from "./data";

export function ArrivalDetail({ shipment }: { shipment: Shipment }) {
  const Icon =
    shipment.mode === "Ocean" ? Ship : shipment.mode === "Air" ? Plane : Truck;
  return (
    <aside className="md-arrival-panel" id="md-arrival">
      <div className="md-panel-heading">
        <h2>Shipment in focus</h2>
        <Icon size={17} />
      </div>
      <div className="md-arrival-reference">
        <span>{shipment.id}</span>
        <span
          className={`md-status ${shipment.status.toLowerCase().replace(/ /g, "-")}`}
        >
          {shipment.status}
        </span>
      </div>
      <div className="md-arrival-route">
        <div>
          <span>Origin</span>
          <strong>{shipment.origin}</strong>
          <small>{portFor(shipment.origin).code}</small>
        </div>
        <div className="md-route-line">
          <i />
          <span />
          <i />
        </div>
        <div>
          <span>Destination</span>
          <strong>{shipment.destination}</strong>
          <small>{portFor(shipment.destination).code}</small>
        </div>
      </div>
      <div className="md-progress-heading">
        <span>Journey progress</span>
        <strong>{shipment.progress}%</strong>
      </div>
      <div className="md-progress">
        <span style={{ width: `${shipment.progress}%` }} />
      </div>
      <div className="md-arrival-data">
        <div>
          <span>
            <Clock3 size={13} />
            Expected arrival
          </span>
          <strong>{shipment.arrival}</strong>
        </div>
        <div>
          <span>
            <Box size={13} />
            Cargo
          </span>
          <strong>{shipment.cargo}</strong>
        </div>
        <div>
          <span>
            <Icon size={13} />
            Carrier reference
          </span>
          <strong>{shipment.vessel}</strong>
        </div>
      </div>
      <div className="md-arrival-note">
        <Check size={13} />
        <span>
          {shipment.status === "Delivered"
            ? "Delivery confirmed at destination."
            : shipment.status === "Scheduled"
              ? "New movement added to the schedule."
              : "Latest checkpoint received. Route in view."}
        </span>
      </div>
    </aside>
  );
}
