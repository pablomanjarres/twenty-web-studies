import {
  X,
  Check,
  CalendarDays,
  UserRound,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";
import { useDialog } from "../../shared/useDialog";
import {
  avatar,
  statuses,
  isCheckComplete,
  progress,
  type Task,
  type TaskStatus,
} from "./data";
export function TaskDrawer({
  task,
  onClose,
  onStatus,
  onCheck,
  onNote,
}: {
  task: Task;
  onClose: () => void;
  onStatus: (status: TaskStatus) => void;
  onCheck: (index: number) => void;
  onNote: (note: string) => void;
}) {
  const ref = useDialog<HTMLDivElement>(onClose);
  return (
    <div className="ov3-drawer-backdrop" onClick={onClose}>
      <div
        className="ov3-drawer"
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label="Task details"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <header>
          <span>MAISON / TASK {String(task.id).padStart(2, "0")}</span>
          <button onClick={onClose} aria-label="Close task details">
            <X size={22} />
          </button>
        </header>
        <span className="ov3-task-kind">{task.kind}</span>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <dl>
          <div>
            <dt>
              <UserRound size={15} />
              Owner
            </dt>
            <dd>
              <img src={avatar(task.avatar)} alt="" />
              {task.owner}
            </dd>
          </div>
          <div>
            <dt>
              <CalendarDays size={15} />
              Due
            </dt>
            <dd>{task.due}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>
              <select
                aria-label="Change task status"
                value={task.status}
                onChange={(e) => onStatus(e.target.value as TaskStatus)}
              >
                {statuses.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </dd>
          </div>
        </dl>
        <section className="ov3-drawer-checks">
          <div>
            <h3>The next steps</h3>
            <span>{progress(task)}%</span>
          </div>
          {task.checks.map((check, index) => (
            <button
              key={check}
              onClick={() => onCheck(index)}
              aria-pressed={isCheckComplete(task, index)}
            >
              <i>{isCheckComplete(task, index) && <Check size={13} />}</i>
              {check}
            </button>
          ))}
        </section>
        <label className="ov3-task-note">
          <span>
            <MessageSquare size={16} />
            Working note
          </span>
          <textarea
            value={task.note}
            onChange={(e) => onNote(e.target.value)}
            placeholder="Keep a thought close to the work."
          />
        </label>
        <footer>
          Changes stay in this workspace.
          <ArrowUpRight size={14} />
        </footer>
      </div>
    </div>
  );
}
