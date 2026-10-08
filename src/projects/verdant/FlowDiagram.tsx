import { type Scenario } from "./data";
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
    <div className="vd-flow-diagram">
      <svg
        className="vd-flow-lines"
        viewBox="0 0 960 440"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <g fill="none" stroke="#d6dbc4" strokeWidth="2">
          <path d="M175 165H340Q380 165 380 215V242H475" />
          <path d="M475 242H590Q615 242 615 160H760" />
          <path d="M475 242H548Q570 242 570 348H720" />
          <path d="M475 242V397H290" />
        </g>
        <g fill="none" stroke="#8b9a71" strokeWidth="5">
          <path d="M175 165H340Q380 165 380 215V242H475" />
          <path d="M475 242H590Q615 242 615 160H760" />
        </g>
        <path
          d="M475 242H548Q570 242 570 348H720"
          fill="none"
          stroke="#e5c24d"
          strokeWidth={scenario.battery === 0 ? 2 : 5}
          strokeDasharray={scenario.battery === 0 ? "5 5" : undefined}
        />
        <path
          d="M475 242V397H290"
          fill="none"
          stroke="#819174"
          strokeWidth="2"
          strokeDasharray="5 6"
        />
        <g fill="#343d26">
          <circle cx="475" cy="242" r="5" />
          <path d="m304 165-10-5v10Z" />
          <path d="m682 160-10-5v10Z" />
          <path d="m650 348-10-5v10Z" />
        </g>
      </svg>
      <button
        className="vd-node vd-source"
        aria-pressed={node === "source"}
        onClick={() => onNode("source")}
      >
        <Source />
        <span>{scenario.source}</span>
        <strong>
          {scenario.generation.toFixed(1)}
          <small> kW</small>
        </strong>
      </button>
      <button
        className="vd-node vd-inverter"
        aria-pressed={node === "conversion"}
        onClick={() => onNode("conversion")}
      >
        <Inverter />
        <span>Conversion & distribution</span>
        <small>CONNECTED SYSTEM</small>
      </button>
      <button
        className="vd-node vd-home"
        aria-pressed={node === "home"}
        onClick={() => onNode("home")}
      >
        <SiteHouse />
        <span>Site demand</span>
        <strong>
          {scenario.home.toFixed(1)}
          <small> kW</small>
        </strong>
      </button>
      <button
        className="vd-node vd-battery"
        aria-pressed={node === "battery"}
        onClick={() => onNode("battery")}
      >
        <BatteryBank />
        <div>
          <span>Energy reserve</span>
          <strong>
            {scenario.battery.toFixed(1)}
            <small> kW charging</small>
          </strong>
          <small>{scenario.stored}% stored</small>
        </div>
      </button>
      <div className="vd-grid-export">
        <span>TO THE GRID</span>
        <strong>{scenario.grid.toFixed(1)} kW</strong>
        <i />
      </div>
    </div>
  );
}
