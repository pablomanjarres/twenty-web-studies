const flows = [
  {
    id: "source",
    d: "M175 165H340Q380 165 380 215V242H475",
    arrow: "m304 165-10-5v10Z",
  },
  {
    id: "home",
    d: "M475 242H590Q615 242 615 160H760",
    arrow: "m682 160-10-5v10Z",
  },
  {
    id: "storage",
    d: "M475 242H548Q570 242 570 348H720",
    arrow: "m650 348-10-5v10Z",
  },
  { id: "grid", d: "M475 242V397H290" },
];
export function FlowLines({ charging }: { charging: boolean }) {
  return (
    <svg
      className="vd-flow-lines"
      viewBox="0 0 960 440"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {flows.map((flow) => {
        const idle = flow.id === "storage" && !charging;
        const moving = flow.id !== "grid" && !idle;
        return (
          <g
            key={flow.id}
            className={`vd-path vd-path-${flow.id}${idle ? " is-idle" : ""}`}
          >
            <path
              className="vd-track"
              d={flow.d}
              vectorEffect="non-scaling-stroke"
            />
            <path
              className="vd-line"
              d={flow.d}
              vectorEffect="non-scaling-stroke"
            />
            {moving && (
              <path
                className="vd-pulse"
                d={flow.d}
                vectorEffect="non-scaling-stroke"
              />
            )}
            {flow.arrow && <path className="vd-arrow" d={flow.arrow} />}
          </g>
        );
      })}
      <circle className="vd-hub" cx="475" cy="242" r="5" />
    </svg>
  );
}
