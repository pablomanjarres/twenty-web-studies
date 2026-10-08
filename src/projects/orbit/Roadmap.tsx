import { ArrowUpRight } from "lucide-react";
import { avatar, progress, stageColors, type Task } from "./data";
export function Roadmap({
  tasks,
  onSelect,
}: {
  tasks: Task[];
  onSelect: (id: number) => void;
}) {
  return (
    <section className="ov3-roadmap">
      <div className="ov3-section-heading">
        <div>
          <h2>The week ahead</h2>
          <span>A shared rhythm for the collection launch.</span>
        </div>
        <span className="ov3-section-note">5 OCT — 11 OCT</span>
      </div>
      <div className="ov3-roadmap-days">
        {[
          "Mon 05",
          "Tue 06",
          "Wed 07",
          "Thu 08",
          "Fri 09",
          "Sat 10",
          "Sun 11",
        ].map((day, i) => (
          <span className={i === 3 ? "is-today" : ""} key={day}>
            {day}
          </span>
        ))}
      </div>
      <div className="ov3-roadmap-track">
        <div className="ov3-day-lines" aria-hidden="true">
          {Array.from({ length: 7 }, (_, i) => (
            <i key={i} className={i === 3 ? "is-today" : ""} />
          ))}
        </div>
        {tasks.slice(0, 5).map((task) => (
          <div className="ov3-roadmap-row" key={task.id}>
            <button
              style={{
                left: `${(task.start / 7) * 100}%`,
                width: `${(task.days / 7) * 100}%`,
                background: stageColors[task.kind],
              }}
              onClick={() => onSelect(task.id)}
              aria-label={`Open ${task.title}`}
            >
              <span>
                {task.kind}
                <small>{progress(task)}%</small>
              </span>
              <i
                className="ov3-bar-progress"
                style={{ width: `${progress(task)}%` }}
              />
              <img src={avatar(task.avatar)} alt={task.owner} />
              <ArrowUpRight size={13} />
            </button>
          </div>
        ))}
      </div>
      <footer>
        <span>
          <i />
          Today
        </span>
        <span>Every stage has a clear next step.</span>
      </footer>
    </section>
  );
}
