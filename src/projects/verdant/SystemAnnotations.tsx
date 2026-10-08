import { ArrowUpRight } from "lucide-react";
import { type Scenario, nodes } from "./data";
export function OperatingNotes({ scenario }: { scenario: Scenario }) {
  return (
    <div className="vd-operating-notes">
      <span>CONNECTED ENERGY / FIELD MODEL 01</span>
      <h1>See where the energy goes.</h1>
      <p>
        {scenario.name.toUpperCase()} · {scenario.subtitle.toUpperCase()}
      </p>
    </div>
  );
}
export function FocusAnnotation({
  active,
  generation,
}: {
  active: (typeof nodes)[number];
  generation: number;
}) {
  return (
    <div className="vd-node-caption" aria-live="polite">
      <span>
        <i /> FOCUS / {active.name.toUpperCase()}
      </span>
      <p>{active.detail}</p>
      <div className="vd-balance-note">
        <small>BALANCED INPUT</small>
        <strong>
          {generation.toFixed(1)} <em>kW</em>
        </strong>
      </div>
      <ArrowUpRight size={19} />
    </div>
  );
}
