import { ArrowUpRight, Plus, Clock } from "lucide-react";
import { days, timeLabel, type Visit } from "./data";
import { PatientPortrait } from "./overviewData";

export function UpcomingAppointments({
  visits,
  day,
  onDay,
  onSelect,
  onCalendar,
}: {
  visits: Visit[];
  day: number;
  onDay: (day: number) => void;
  onSelect: (id: number) => void;
  onCalendar: () => void;
}) {
  return (
    <aside className="pv-upcoming pv-white-card">
      <div className="pv-card-title">
        <h2>
          Daily
          <br />
          appointments
        </h2>
        <button aria-label="Open full calendar" onClick={onCalendar}>
          <ArrowUpRight size={19} />
        </button>
      </div>
      <div className="pv-day-pills">
        {days.map((d, i) => (
          <button
            key={d.short}
            aria-label={`View ${d.name} appointments`}
            aria-pressed={day === i}
            onClick={() => onDay(i)}
          >
            <strong>{d.date}</strong>
            <span>{d.short}</span>
          </button>
        ))}
      </div>
      <div className="pv-upcoming-list">
        {visits.slice(0, 3).map((v, i) => (
          <div className="pv-upcoming-row" key={v.id}>
            <span>
              {timeLabel(v.time)}
              <small>{v.duration} min</small>
            </span>
            <button
              onClick={() => onSelect(v.id)}
              className={`pv-upcoming-visit pv-upcoming-tone-${i % 3}`}
            >
              <PatientPortrait visit={v} />
              <strong>
                {v.patient}
                <small>{v.purpose}</small>
              </strong>
              <ArrowUpRight size={13} />
            </button>
          </div>
        ))}
      </div>
      {!visits.length && (
        <p className="pv-overview-empty">
          No visits are scheduled for this day.
        </p>
      )}
      <button className="pv-calendar-link" onClick={onCalendar}>
        <Plus size={16} />
        View the complete day
      </button>
      <div className="pv-upcoming-foot">
        <Clock size={15} />
        <span>{visits.length} visits · Room for a good conversation.</span>
      </div>
    </aside>
  );
}
