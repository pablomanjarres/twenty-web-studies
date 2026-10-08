import { useState } from "react";
import { Globe2 } from "lucide-react";
import { ports, portFor, coordinatesFor } from "./data";
import { RouteCartography } from "./RouteCartography";
import { MapTools } from "./MapTools";
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
  const [zoom, setZoom] = useState(1);
  return (
    <section className="md-network-map" aria-label="Route network">
      <header className="md-port-caption">
        <div>
          <span>
            <Globe2 size={13} /> GLOBAL FREIGHT NETWORK
          </span>
          <h2>
            {selected.origin} <small>→</small> {selected.destination}
          </h2>
        </div>
        <span className="md-map-badge">{ports.length} connected ports</span>
      </header>
      <RouteCartography
        shipments={shipments}
        selected={selected}
        onSelect={onSelect}
        zoom={zoom}
      />
      <MapTools zoom={zoom} onZoom={setZoom} />
      <div className="md-map-coordinate">
        {coordinatesFor(portFor(selected.origin))}
        <span>→ {portFor(selected.destination).code}</span>
      </div>
      <footer className="md-map-legend">
        <span>
          <i /> Selected movement
        </span>
        <span>Natural Earth coastlines · Route schematic</span>
      </footer>
    </section>
  );
}
