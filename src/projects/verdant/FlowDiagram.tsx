import { type Scenario } from "./data";
import { NodeReading } from "./NodeReading";
import { FlowLines } from "./FlowLines";
import {
  SolarArray,
  WindField,
  BatteryBank,
  Inverter,
  SiteHouse,
} from "./EnergyObjects";
export function FlowDiagram({
  scenario,
  selected,
  node,
  onNode,
}: {
  scenario: Scenario;
  selected: number;
  node: string;
  onNode: (id: string) => void;
}) {
  const Source =
    selected === 0 ? SolarArray : selected === 1 ? WindField : BatteryBank;
  return (
    <div className="vd-flow-diagram" data-node={node}>
      <FlowLines charging={scenario.battery > 0} />
      <button
        className="vd-node vd-source"
        aria-pressed={node === "source"}
        onClick={() => onNode("source")}
      >
        <Source />
        <NodeReading label={scenario.source}>
          {scenario.generation.toFixed(1)}
          <small> kW</small>
        </NodeReading>
      </button>
      <button
        className="vd-node vd-inverter"
        aria-pressed={node === "conversion"}
        onClick={() => onNode("conversion")}
      >
        <Inverter />
        <NodeReading
          label="Conversion & distribution"
          note="Connected system"
        />
      </button>
      <button
        className="vd-node vd-home"
        aria-pressed={node === "home"}
        onClick={() => onNode("home")}
      >
        <SiteHouse />
        <NodeReading label="Site demand">
          {scenario.home.toFixed(1)}
          <small> kW</small>
        </NodeReading>
      </button>
      <button
        className="vd-node vd-battery"
        aria-pressed={node === "battery"}
        onClick={() => onNode("battery")}
      >
        <BatteryBank />
        <NodeReading label="Energy reserve" note={`${scenario.stored}% stored`}>
          {scenario.battery.toFixed(1)}
          <small> kW charging</small>
        </NodeReading>
      </button>
      <div className="vd-grid-export">
        <span className="vd-label">To the grid</span>
        <strong>{scenario.grid.toFixed(1)} kW</strong>
        <i />
      </div>
    </div>
  );
}
