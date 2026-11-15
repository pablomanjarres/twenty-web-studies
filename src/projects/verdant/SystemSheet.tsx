import { useState } from "react";
import { type Scenario, nodes } from "./data";
import { FlowDiagram } from "./FlowDiagram";
import { FlowLegend } from "./FlowLegend";
import { SourceLegend } from "./SourceLegend";
import { OperatingNotes, FocusAnnotation } from "./SystemAnnotations";
export function SystemSheet({
  scenario,
  selected,
  onSelect,
}: {
  scenario: Scenario;
  selected: number;
  onSelect: (index: number) => void;
}) {
  const [node, setNode] = useState("conversion");
  const active = nodes.find((n) => n.id === node)!;
  return (
    <section id="system" className="vd-system">
      <OperatingNotes scenario={scenario} />
      <SourceLegend selected={selected} onSelect={onSelect} />
      <FlowDiagram
        scenario={scenario}
        selected={selected}
        node={node}
        onNode={setNode}
      />
      <FocusAnnotation active={active} generation={scenario.generation} />
      <div className="vd-system-bottom">
        <FlowLegend />
        <p>{scenario.description}</p>
        <span className="vd-label">EXAMPLE SITE · VALUES IN kW</span>
      </div>
    </section>
  );
}
