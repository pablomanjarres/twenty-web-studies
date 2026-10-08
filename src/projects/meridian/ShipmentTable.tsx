import { ArrowRight, ArrowUpRight } from "lucide-react";
import { portFor } from "./data";
import { TransportIcon } from "./TransportIcon";
import type { Shipment } from "./data";

export function ShipmentTable({
  shipments,
  selected,
  onSelect,
}: {
  shipments: Shipment[];
  selected: string;
  onSelect: (id: string) => void;
}) {
  return (
    <section className="md-table-panel" id="md-shipments">
      <div className="md-table-header">
        <div>
          <h2>Shipment overview</h2>
          <span>{shipments.length} movements in this view</span>
        </div>
      </div>
      <div className="md-table-scroll">
        <table>
          <thead>
            <tr>
              <th>Shipment ID</th>
              <th>Route</th>
              <th>Transport</th>
              <th>Cargo</th>
              <th>Status</th>
              <th>Expected arrival</th>
              <th aria-label="View shipment" />
            </tr>
          </thead>
          <tbody>
            {shipments.map((shipment) => {
              return (
                <tr
                  key={shipment.id}
                  className={selected === shipment.id ? "md-row-selected" : ""}
                >
                  <td>
                    <button
                      className="md-id-button"
                      onClick={() => onSelect(shipment.id)}
                    >
                      {shipment.id}
                    </button>
                  </td>
                  <td>
                    <span className="md-table-route">
                      {portFor(shipment.origin).code}
                      <ArrowRight size={11} />
                      {portFor(shipment.destination).code}
                    </span>
                  </td>
                  <td>
                    <span className="md-table-mode">
                      <TransportIcon mode={shipment.mode} size={13} />
                      {shipment.mode}
                    </span>
                  </td>
                  <td>{shipment.cargo}</td>
                  <td>
                    <span
                      className={`md-status ${shipment.status.toLowerCase().replace(/ /g, "-")}`}
                    >
                      {shipment.status}
                    </span>
                  </td>
                  <td>{shipment.arrival}</td>
                  <td>
                    <button
                      className="md-row-view"
                      onClick={() => onSelect(shipment.id)}
                      aria-label={`View ${shipment.id}`}
                    >
                      <ArrowUpRight size={15} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {shipments.length === 0 && (
          <div className="md-empty">
            No movements match this view. Try another port, reference, or
            transport mode.
          </div>
        )}
      </div>
      <div className="md-table-footer">
        <span>
          Route and arrival details update when you select a shipment.
        </span>
        <span>October 2026</span>
      </div>
    </section>
  );
}
