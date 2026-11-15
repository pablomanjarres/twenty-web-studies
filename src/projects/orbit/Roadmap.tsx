import { ArrowUpRight } from "lucide-react";
import { avatar, progress, stageColors, type Task } from "./data";

// Roadmap bars carry 14px labels, so each stage gets a label color that
// clears 4.5:1; green uses a deeper fill reserved for these bars.
const barTheme: Record<string, { background: string; color: string }> = {
  Design: { background: stageColors.Design, color: "#fff" },
  Research: { background: "#127a63", color: "#fff" },
  Content: { background: stageColors.Content, color: "#242629" },
  Review: { background: stageColors.Review, color: "#242629" },
};
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
        <span className="ov3-section-note ov3-caps">5–11 Oct</span>
      </div>
      <div className="ov3-roadmap-grid">
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
            <span key={day}>
              {i === 3 ? <b className="is-today">{day}</b> : day}
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
                className={task.days === 1 ? "is-short" : undefined}
                style={{
                  left: `${(task.start / 7) * 100}%`,
                  width: `${(task.days / 7) * 100}%`,
                  ...barTheme[task.kind],
                }}
                onClick={() => onSelect(task.id)}
                aria-label={`Open ${task.title}, ${progress(task)}% complete, ${task.owner}`}
              >
                <span>
                  {task.kind}
                  <small>{progress(task)}%</small>
                </span>
                <i className="ov3-bar-rail" aria-hidden="true">
                  <b style={{ width: `${progress(task)}%` }} />
                </i>
                <img src={avatar(task.avatar)} alt="" />
                <ArrowUpRight size={14} aria-hidden="true" />
              </button>
            </div>
          ))}
        </div>
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
