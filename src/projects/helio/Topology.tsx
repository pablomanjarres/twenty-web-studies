import { Check, Globe2 } from "lucide-react";
import { useState } from "react";
const regions = [
  { name: "Frankfurt", code: "EU-WEST", latency: "12 ms" },
  { name: "Virginia", code: "US-EAST", latency: "8 ms" },
  { name: "Singapore", code: "AP-SOUTH", latency: "19 ms" },
];
export function Topology({ ready }: { ready: boolean }) {
  const [selected, setSelected] = useState(0);
  return (
    <aside className="helio-topology">
      <div className="helio-panel-label">
        DEPLOYMENT TOPOLOGY <Globe2 size={13} />
      </div>
      <div className={`helio-topology-art ${ready ? "ready" : ""}`}>
        <div className="helio-topology-grid" />
        <img
          src={`${import.meta.env.BASE_URL}images/helio/compute-core.webp`}
          alt="Aluminium compute lattice with a cobalt glass core connected to distributed edge nodes"
        />
        <span className="helio-topology-cross top">+</span>
        <span className="helio-topology-cross bottom">+</span>
        <div className="helio-core-status">
          <i />
          {ready ? "EDGE RELEASE ACTIVE" : "COMPUTE CORE / STANDBY"}
        </div>
      </div>
      <div className="helio-region-list">
        {regions.map((region, i) => (
          <button
            key={region.code}
            aria-pressed={i === selected}
            onClick={() => setSelected(i)}
          >
            <span>{ready ? <Check size={12} /> : "○"}</span>
            <div>
              <b>{region.name}</b>
              <small>{region.code}</small>
            </div>
            <strong>{region.latency}</strong>
          </button>
        ))}
      </div>
      <div className="helio-region-detail">
        <span>SELECTED EDGE</span>
        <b>
          {regions[selected].code} / {ready ? "Healthy" : "Ready for release"}
        </b>
        <div>
          <i style={{ width: ready ? "92%" : "16%" }} />
        </div>
      </div>
    </aside>
  );
}
