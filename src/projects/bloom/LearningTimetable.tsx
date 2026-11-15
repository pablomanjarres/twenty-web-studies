import { useState, type CSSProperties } from "react";
import { Check, Lock, ArrowUpRight, Clock } from "lucide-react";
import { lessons, type Lesson } from "./data";
import { courseFor, learningPlan, learningWeek, lessonStatus } from "./courses";
const HOUR = 64;
const FIRST_HOUR = 9;
const hours = ["09:00", "10:00", "11:00", "12:00"];
const offset = (time: string) => {
  const [h, m] = time.split(":").map(Number);
  return (h - FIRST_HOUR + m / 60) * HOUR;
};
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
            <span>Time</span>
            <div style={{ height: hours.length * HOUR }}>
              {hours.map((t, i) => (
                <i key={t} style={{ top: i * HOUR }}>
                  {t}
                </i>
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
                <div
                  className="bv-time-events"
                  style={
                    {
                      height: hours.length * HOUR,
                      "--bv-hour": `${HOUR}px`,
                    } as CSSProperties
                  }
                >
                  {learningPlan
                    .filter((p) => p.day === i)
                    .map((p) => {
                      const l = lessons.find((l) => l.id === p.lesson)!;
                      const status = lessonStatus(l, completed);
                      return (
                        <button
                          key={l.id}
                          className={`bv-planned-lesson is-${status}`}
                          style={
                            {
                              top: offset(p.time),
                              "--lesson-color": courseFor(l).color,
                            } as CSSProperties
                          }
                          onClick={() => onSelect(l)}
                        >
                          <span>
                            {status === "done" ? (
                              <Check size={14} aria-hidden="true" />
                            ) : status === "ready" ? (
                              <ArrowUpRight size={14} aria-hidden="true" />
                            ) : (
                              <Lock size={13} aria-hidden="true" />
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
        <Clock size={14} aria-hidden="true" />
        Your plan makes space for every lesson.
        <span>Locked lessons open as you progress.</span>
      </p>
    </section>
  );
}
