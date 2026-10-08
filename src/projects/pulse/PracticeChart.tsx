import { ArrowUpRight } from "lucide-react";
import { days, type Visit } from "./data";
import { dailyVisits, visitMinutes, careTime } from "./overviewData";

export function PracticeChart({
  appointments,
  day,
  metric,
  onMetric,
  onDay,
}: {
  appointments: Visit[];
  day: number;
  metric: "visits" | "minutes";
  onMetric: (metric: "visits" | "minutes") => void;
  onDay: (day: number) => void;
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
        <ArrowUpRight size={19} />
      </div>
      <div className="pv-chart-toolbar">
        <div>
          <strong>
            {metric === "visits" ? count : careTime(visitMinutes(appointments))}
          </strong>
          <span>
            {metric === "visits" ? "visits this week" : "scheduled this week"}
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
              aria-label={`${d.name}: ${metric === "visits" ? `${values[i]} visits` : careTime(values[i])}`}
              aria-pressed={day === i}
              onClick={() => onDay(i)}
            >
              <span className="pv-bar-value">
                {metric === "visits" ? values[i] : careTime(values[i])}
              </span>
              <i
                style={{ height: `${Math.max(4, (values[i] / max) * 100)}%` }}
              />
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
