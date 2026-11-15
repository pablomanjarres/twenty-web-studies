import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import { days, type Visit } from "./data";
import {
  CareTimeFigure,
  careTime,
  dailyVisits,
  visitMinutes,
} from "./overviewData";
import { countLabel, countNoun } from "./countLabel";

export function PracticeChart({
  appointments,
  day,
  metric,
  onMetric,
  onDay,
  onCalendar,
}: {
  appointments: Visit[];
  day: number;
  metric: "visits" | "minutes";
  onMetric: (metric: "visits" | "minutes") => void;
  onDay: (day: number) => void;
  onCalendar: () => void;
}) {
  const values = days.map((_, i) => {
    const visits = dailyVisits(appointments, i);
    return metric === "visits" ? visits.length : visitMinutes(visits);
  });
  const max = Math.max(...values, 1);
  const count = appointments.length;
  return (
    <article className="pv-practice-chart pv-white-card">
      <div className="pv-card-title">
        <h2>Practice activity</h2>
        <button aria-label="Open calendar" onClick={onCalendar}>
          <ArrowUpRight size={19} />
        </button>
      </div>
      <div className="pv-chart-toolbar">
        <div>
          <strong>
            {metric === "visits" ? (
              count
            ) : (
              <CareTimeFigure minutes={visitMinutes(appointments)} />
            )}
          </strong>
          <span>
            {metric === "visits"
              ? `${countNoun(count, "visit")} this week`
              : "scheduled this week"}
          </span>
        </div>
        <div className="pv-metric-toggle" aria-label="Practice chart metric">
          <button
            aria-pressed={metric === "visits"}
            onClick={() => onMetric("visits")}
          >
            Visits
          </button>
          <button
            aria-pressed={metric === "minutes"}
            onClick={() => onMetric("minutes")}
          >
            Care time
          </button>
        </div>
      </div>
      <div className="pv-bar-chart">
        <div className="pv-chart-axis">
          {[1, 0.75, 0.5, 0.25, 0].map((n) => (
            <span key={n}>
              {metric === "visits"
                ? Math.round(max * n)
                : `${Math.round((max * n) / 60)}h`}
            </span>
          ))}
        </div>
        <div className="pv-chart-lines" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((i) => (
            <i key={i} />
          ))}
        </div>
        <div className="pv-chart-bars">
          {days.map((d, i) => (
            <button
              key={d.short}
              aria-label={`${d.name}: ${metric === "visits" ? countLabel(values[i], "visit") : careTime(values[i])}`}
              aria-pressed={day === i}
              className={values[i] ? undefined : "is-empty"}
              style={
                {
                  "--bar": `${Math.max(4, (values[i] / max) * 100)}%`,
                } as CSSProperties
              }
              onClick={() => onDay(i)}
            >
              <span className="pv-bar-value" aria-hidden="true">
                {metric === "visits" ? values[i] : careTime(values[i])}
              </span>
              <i />
              <span className="pv-bar-day">{d.short}</span>
            </button>
          ))}
        </div>
      </div>
      <p className="pv-chart-caption">
        <i />
        Scheduled appointments · October 5–9
        <span>Select a day to view its appointments</span>
      </p>
    </article>
  );
}
