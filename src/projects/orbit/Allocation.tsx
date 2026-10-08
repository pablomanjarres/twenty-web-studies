import { stageColors, type Task } from "./data";
export function Allocation({ tasks }: { tasks: Task[] }) {
  const total = tasks.reduce((sum, t) => sum + t.hours, 0);
  const kinds = Object.keys(stageColors).map((kind) => ({
    kind,
    hours: tasks
      .filter((t) => t.kind === kind)
      .reduce((sum, t) => sum + t.hours, 0),
  }));
  const done = tasks.filter((t) => t.status === "Done").length;
  return (
    <section className="ov3-allocation">
      <div>
        <h2>Maison storefront</h2>
        <span>
          {done} of {tasks.length} tasks complete
        </span>
        <strong>
          {total}h<small>planned hours</small>
        </strong>
      </div>
      <div
        className="ov3-allocation-strip"
        aria-label="Planned time by project stage"
      >
        {kinds
          .filter((k) => k.hours)
          .map(({ kind, hours }) => (
            <span
              key={kind}
              style={{
                width: `${(hours / total) * 100}%`,
                background: stageColors[kind],
              }}
              title={`${kind}: ${hours} hours`}
            />
          ))}
      </div>
      <footer>
        {kinds.map(({ kind, hours }) => (
          <span key={kind}>
            <i style={{ background: stageColors[kind] }} />
            {kind}
            <b>{hours}h</b>
          </span>
        ))}
      </footer>
    </section>
  );
}
