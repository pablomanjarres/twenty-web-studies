import { CalendarDays, ArrowUpRight } from "lucide-react";
import { lessons, type Lesson } from "./data";
import { isUnlocked, learningPlan, learningWeek } from "./courses";
export function LearningSide({
  day,
  completed,
  onDay,
  onSelect,
}: {
  day: number;
  completed: number[];
  onDay: (day: number) => void;
  onSelect: (lesson: Lesson) => void;
}) {
  const planned = learningPlan.filter((p) => p.day === day);
  return (
    <aside className="bv-learning-side">
      <section className="bv-month-card">
        <div className="bv-section-heading">
          <h2>October 2026</h2>
          <CalendarDays size={17} />
        </div>
        <div className="bv-month-grid">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <span key={i}>{d}</span>
          ))}
          {Array.from({ length: 34 }, (_, i) => {
            const n = i - 2;
            return n > 0 ? (
              <button
                key={i}
                disabled={n < 5 || n > 9}
                aria-label={`October ${n}`}
                aria-pressed={n === learningWeek[day].date}
                onClick={() => onDay(n - 5)}
              >
                {n}
              </button>
            ) : (
              <i key={i} />
            );
          })}
        </div>
        <div className="bv-day-plan">
          <p>
            {learningWeek[day].name}, October {learningWeek[day].date}
            <span>
              {planned.length} {planned.length === 1 ? "session" : "sessions"}
            </span>
          </p>
          {planned.map((p) => {
            const l = lessons.find((l) => l.id === p.lesson)!;
            return (
              <button key={l.id} onClick={() => onSelect(l)}>
                <i />
                <div>
                  <strong>{l.title}</strong>
                  <small>
                    {p.time} · {l.duration} ·{" "}
                    {completed.includes(l.id)
                      ? "Complete"
                      : isUnlocked(l, completed)
                        ? "Ready"
                        : "Locked"}
                  </small>
                </div>
                <ArrowUpRight size={14} />
              </button>
            );
          })}
        </div>
      </section>
      <StudyActivity completed={completed} />
      <div className="bv-guidance">
        <span>MAKE IT A HABIT</span>
        <h3>
          Small sessions.
          <br />
          Lasting discoveries.
        </h3>
        <p>Your next creative step is already in your plan.</p>
        <button onClick={() => onSelect(lessons[0])}>
          Read the course guide <ArrowUpRight size={14} />
        </button>
      </div>
    </aside>
  );
}
function StudyActivity({ completed }: { completed: number[] }) {
  const values = learningWeek.map((_, day) => {
    const ids = learningPlan.filter((p) => p.day === day).map((p) => p.lesson);
    return {
      planned: lessons
        .filter((l) => ids.includes(l.id))
        .reduce((n, l) => n + parseInt(l.duration), 0),
      done: lessons
        .filter((l) => ids.includes(l.id) && completed.includes(l.id))
        .reduce((n, l) => n + parseInt(l.duration), 0),
    };
  });
  const total = values.reduce((n, v) => n + v.done, 0);
  const plan = values.reduce((n, v) => n + v.planned, 0);
  return (
    <section className="bv-study-activity">
      <div className="bv-section-heading">
        <h2>Learning activity</h2>
        <span>This week</span>
      </div>
      <strong>
        {total}
        <small> min practiced</small>
      </strong>
      <div className="bv-study-bars">
        {values.map((v, i) => (
          <div
            key={i}
            aria-label={`${learningWeek[i].name}: ${v.done} of ${v.planned} planned minutes`}
          >
            <span style={{ height: `${(v.planned / 19) * 100}%` }}>
              <i style={{ height: `${(v.done / v.planned) * 100}%` }} />
            </span>
            <small>{learningWeek[i].name[0]}</small>
          </div>
        ))}
      </div>
      <p>
        <i />
        Practiced <i className="bv-planned-dot" /> Planned{" "}
        <span>
          {total} / {plan} min
        </span>
      </p>
    </section>
  );
}
