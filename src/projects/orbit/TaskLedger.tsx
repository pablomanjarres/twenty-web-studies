import {
  ArrowUpRight,
  Circle,
  CheckCircle2,
  Clock3,
  CircleDot,
} from "lucide-react";
import { avatar, progress, type Task, type TaskStatus } from "./data";
export function Status({ status }: { status: TaskStatus }) {
  const Icon =
    status === "Done"
      ? CheckCircle2
      : status === "Review"
        ? CircleDot
        : status === "In progress"
          ? Clock3
          : Circle;
  return (
    <span
      className={`ov3-status ov3-status-${status.toLowerCase().replaceAll(" ", "-")}`}
    >
      <Icon size={12} />
      {status}
    </span>
  );
}
export function TaskLedger({
  tasks,
  filter,
  onFilter,
  onSelect,
}: {
  tasks: Task[];
  filter: string;
  onFilter: (value: string) => void;
  onSelect: (id: number) => void;
}) {
  const shown = tasks.filter((t) => filter === "All" || t.status === filter);
  return (
    <section className="ov3-ledger">
      <div className="ov3-section-heading">
        <h2>Work in motion</h2>
        <span>{tasks.length} tasks</span>
      </div>
      <div className="ov3-ledger-filters">
        {["All", "In progress", "Review", "Done"].map((value) => (
          <button
            key={value}
            aria-pressed={filter === value}
            onClick={() => onFilter(value)}
          >
            {value}
            {value === "All" && <span>{tasks.length}</span>}
          </button>
        ))}
      </div>
      <div className="ov3-ledger-labels">
        <span>TASK / OWNER</span>
        <span>STATUS</span>
        <span>PROGRESS</span>
        <span>DUE</span>
      </div>
      {shown.map((task) => (
        <button
          className="ov3-task-row"
          key={task.id}
          onClick={() => onSelect(task.id)}
        >
          <span className="ov3-task-title">
            <img src={avatar(task.avatar)} alt="" />
            <span>
              <strong>{task.title}</strong>
              <small>
                {task.owner} · {task.kind}
              </small>
            </span>
          </span>
          <Status status={task.status} />
          <span className="ov3-task-progress">
            <i>
              <b style={{ width: `${progress(task)}%` }} />
            </i>
            <small>{progress(task)}%</small>
          </span>
          <span className="ov3-task-due">
            {task.due}
            <ArrowUpRight size={13} />
          </span>
        </button>
      ))}
      {!shown.length && (
        <p className="ov3-empty">
          No tasks match this view. Try another status or search.
        </p>
      )}
    </section>
  );
}
