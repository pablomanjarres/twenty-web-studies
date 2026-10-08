import { Clock, ChevronRight, Check } from "lucide-react";
import { clinicians, days, timeLabel, type Visit } from "./data";
import { countLabel, countNoun } from "./countLabel";
function Appointment({
  visit,
  selected,
  onSelect,
  compact = false,
  flow = false,
}: {
  visit: Visit;
  selected: number;
  onSelect: (id: number) => void;
  compact?: boolean;
  flow?: boolean;
}) {
  return (
    <button
      className={`pv-visit pv-visit-${visit.tone} ${visit.id === selected ? "is-selected" : ""}`}
      style={
        compact || flow
          ? undefined
          : {
              top: `${(visit.time - 480) * (4 / 3)}px`,
              height: `${Math.max(visit.duration * (4 / 3) - 7, 46)}px`,
            }
      }
      onClick={() => onSelect(visit.id)}
      aria-pressed={visit.id === selected}
    >
      <span className="pv-visit-time">
        {timeLabel(visit.time)} — {timeLabel(visit.time + visit.duration)}
        {visit.status === "Checked in" && <Check size={11} />}
      </span>
      <strong>{visit.patient}</strong>
      <span className="pv-visit-purpose">{visit.purpose}</span>
      {compact && <ChevronRight size={18} />}
    </button>
  );
}
export function Schedule({
  appointments,
  selected,
  onSelect,
  doctor,
  day,
  view,
}: {
  appointments: Visit[];
  selected: number;
  onSelect: (id: number) => void;
  doctor: string;
  day: number;
  view: "day" | "week";
}) {
  const lanes =
    view === "day"
      ? clinicians
          .filter((c) => doctor === "all" || c.id === doctor)
          .map((c) => ({ id: c.id, title: c.name, sub: c.role }))
      : days.map((d, i) => ({
          id: String(i),
          title: `${d.short} ${d.date}`,
          sub: "October",
        }));
  return (
    <section
      className="pv-schedule"
      aria-label={
        view === "day"
          ? "Day appointment schedule"
          : "Weekly appointment schedule"
      }
    >
      <div className={`pv-grid-desktop ${view === "week" ? "pv-week" : ""}`}>
        <div
          className="pv-lane-headings"
          style={{
            gridTemplateColumns: `54px repeat(${lanes.length},minmax(0,1fr))`,
          }}
        >
          <span>GMT−5</span>
          {lanes.map((l) => (
            <div key={l.id}>
              <i />
              <strong>{l.title}</strong>
              <small>{l.sub}</small>
            </div>
          ))}
        </div>
        <div
          className="pv-grid-body"
          style={{
            gridTemplateColumns: `54px repeat(${lanes.length},minmax(0,1fr))`,
          }}
        >
          <div className="pv-time-rail">
            {Array.from({ length: 9 }, (_, i) => (
              <span key={i} style={{ top: `${i * 80}px` }}>
                {String(i + 8).padStart(2, "0")}:00
              </span>
            ))}
          </div>
          {lanes.map((l) => (
            <div className="pv-lane" key={l.id}>
              {appointments
                .filter((v) =>
                  view === "day" ? v.doctor === l.id : v.day === Number(l.id),
                )
                .sort((a, b) => a.time - b.time)
                .map((v) => (
                  <Appointment
                    key={v.id}
                    visit={v}
                    selected={selected}
                    onSelect={onSelect}
                    flow={view === "week"}
                  />
                ))}
            </div>
          ))}
          <div className="pv-now" style={{ top: 125.33 }}>
            <span>09:34</span>
            <i />
          </div>
        </div>
        <div className="pv-schedule-bottom">
          <Clock size={12} />
          <span>Leave room for a good conversation.</span>
          <span>{countLabel(appointments.length, "visit")} in this view</span>
        </div>
      </div>
      <div className="pv-agenda">
        <div className="pv-agenda-label">
          {view === "day" ? `${days[day].name}'s` : "This week's"}{" "}
          {countNoun(appointments.length, "visit")}
          <span>{appointments.length}</span>
        </div>
        {[...appointments]
          .sort((a, b) => a.day - b.day || a.time - b.time)
          .map((v) => (
            <div className="pv-agenda-row" key={v.id}>
              <span className="pv-agenda-time">
                {view === "week" && <small>{days[v.day].short}</small>}
                {timeLabel(v.time)}
              </span>
              <Appointment
                visit={v}
                selected={selected}
                onSelect={onSelect}
                compact
              />
            </div>
          ))}
        {!appointments.length && (
          <div className="pv-free-day">
            A little room in the day.<p>No visits match this view.</p>
          </div>
        )}
      </div>
    </section>
  );
}
