import { useState } from "react";
import { scenarios, nodes } from "./data";
import { FlowDiagram } from "./FlowDiagram";
import { SourceLegend } from "./SourceLegend";
import { OperatingNotes, FocusAnnotation } from "./SystemAnnotations";
export function SystemSheet() {
  const [selected, setSelected] = useState(0);
  const [node, setNode] = useState("conversion");
  const scenario = scenarios[selected];
  const active = nodes.find((n) => n.id === node)!;
  return (
    <section id="system" className="vd-system">
      <OperatingNotes scenario={scenario} />
      <SourceLegend selected={selected} onSelect={setSelected} />
      <FlowDiagram
        scenario={scenario}
        selected={selected}
        node={node}
        onNode={setNode}
      />
      <FocusAnnotation active={active} generation={scenario.generation} />
      <div className="vd-system-bottom">
        <span>
          <i /> Power flow
        </span>
        <p>{scenario.description}</p>
        <span>EXAMPLE SITE · VALUES IN kW</span>
      </div>
    </section>
  );
}
