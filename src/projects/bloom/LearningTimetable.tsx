import { useState } from "react";
import { Check, Lock, ArrowUpRight, Clock } from "lucide-react";
import { lessons, type Lesson } from "./data";
import { courseFor, isUnlocked, learningPlan, learningWeek } from "./courses";
export function LearningTimetable({
  completed,
  day,
  onDay,
  onSelect,
}: {
  completed: number[];
  day: number;
  onDay: (day: number) => void;
  onSelect: (lesson: Lesson) => void;
}) {
  const [view, setView] = useState("Week");
  const visible = view === "Week" ? learningWeek : [learningWeek[day]];
  return (
    <section className="bv-timetable">
      <div className="bv-section-heading">
        <div>
          <h2>Your learning plan</h2>
          <p>October 5–9, 2026</p>
        </div>
        <div className="bv-time-view">
          {["Week", "Day"].map((v) => (
            <button
              key={v}
              aria-pressed={view === v}
              onClick={() => setView(v)}
            >
              {v}
            </button>
          ))}
        </div>
      </div>
      <div className="bv-timetable-scroll">
        <div className={`bv-timetable-grid ${view === "Day" ? "is-day" : ""}`}>
          <div className="bv-time-axis">
            <span>TIME</span>
            <div>
              {["09:00", "10:00", "11:00", "12:00"].map((t) => (
                <i key={t}>{t}</i>
              ))}
            </div>
          </div>
          {visible.map((d) => {
            const i = learningWeek.indexOf(d);
            return (
              <div className="bv-time-column" key={d.name}>
                <button
                  className="bv-time-day"
                  aria-pressed={day === i}
                  onClick={() => onDay(i)}
                >
                  <strong>{d.date}</strong>
                  <span>{d.name}</span>
                </button>
                <div className="bv-time-events">
                  {learningPlan
                    .filter((p) => p.day === i)
                    .map((p) => {
                      const l = lessons.find((l) => l.id === p.lesson)!;
                      const done = completed.includes(l.id);
                      const unlocked = isUnlocked(l, completed);
                      return (
                        <button
                          key={l.id}
                          className={`bv-planned-lesson ${done ? "is-done" : ""}`}
                          style={{ top: p.top, background: courseFor(l).color }}
                          onClick={() => onSelect(l)}
                        >
                          <span>
                            {done ? (
                              <Check size={11} />
                            ) : unlocked ? (
                              <ArrowUpRight size={11} />
                            ) : (
                              <Lock size={10} />
                            )}
                            <i>{l.kind}</i>
                          </span>
                          <strong>{l.title}</strong>
                          <small>
                            {p.time} · {l.duration}
                          </small>
                        </button>
                      );
                    })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <p className="bv-plan-foot">
        <Clock size={12} />
        Your plan makes space for every lesson.
        <span>Locked lessons open as you progress.</span>
      </p>
    </section>
  );
}
