const lines = [
  { name: "Power flow", kind: "power" },
  { name: "Storage charge", kind: "storage" },
  { name: "Grid export", kind: "grid" },
];
export function FlowLegend() {
  return (
    <ul className="vd-flow-legend" aria-label="Line key">
      {lines.map((line) => (
        <li key={line.kind}>
          <i className={`vd-swatch vd-swatch-${line.kind}`} />
          {line.name}
        </li>
      ))}
    </ul>
  );
}
