import { useState } from "react";
import {
  ArrowUpRight,
  Activity,
  CalendarDays,
  Users,
  Stethoscope,
} from "lucide-react";
import { asset, type Visit } from "./data";
import { CareTimeFigure, dailyVisits, visitMinutes } from "./overviewData";
import { PracticeChart } from "./PracticeChart";
import { UpcomingAppointments } from "./UpcomingAppointments";
import { AppointmentLedger } from "./AppointmentLedger";
import { countLabel } from "./countLabel";

export function Overview({
  appointments,
  day,
  onDay,
  onSelect,
  onCalendar,
}: {
  appointments: Visit[];
  day: number;
  onDay: (day: number) => void;
  onSelect: (id: number) => void;
  onCalendar: () => void;
}) {
  const [metric, setMetric] = useState<"visits" | "minutes">("visits");
  const current = dailyVisits(appointments, day);
  const minutes = visitMinutes(current);
  const stats = [
    {
      name: "Appointments today",
      value: current.length,
      icon: CalendarDays,
    },
    {
      name: "Clinicians on shift",
      value: new Set(current.map((v) => v.doctor)).size,
      icon: Stethoscope,
    },
    {
      name: "Patients expected",
      value: new Set(current.map((v) => v.patient)).size,
      icon: Users,
    },
  ];
  return (
    <section className="pv-overview" aria-label="Practice overview">
      <aside className="pv-overview-stats">
        <article className="pv-summary-card">
          <div className="pv-stat-top">
            <span className="pv-stat-icon">
              <Activity size={20} />
            </span>
            <span>
              Scheduled care time
              <strong>
                <CareTimeFigure minutes={minutes} />
              </strong>
            </span>
            <small>Today</small>
          </div>
          <div
            className="pv-mini-chart"
            aria-label="Appointments starting each hour from 8 to 16"
          >
            {Array.from({ length: 9 }, (_, i) => {
              const n = current.filter(
                (v) => Math.floor(v.time / 60) === i + 8,
              ).length;
              return (
                <span
                  key={i}
                  title={`${i + 8}:00 · ${countLabel(n, "appointment")}`}
                  style={{ height: `${16 + n * 20}px` }}
                />
              );
            })}
          </div>
          <div className="pv-mini-scale">
            <span>08:00</span>
            <span>16:00</span>
          </div>
        </article>
        <article className="pv-metric-panel" aria-label="Day at a glance">
          <dl>
            {stats.map(({ name, value, icon: Icon }) => (
              <div key={name}>
                <span className="pv-stat-icon" aria-hidden="true">
                  <Icon size={18} />
                </span>
                <dt>{name}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </article>
        <button className="pv-care-feature" onClick={onCalendar}>
          <img src={asset("doctor.jpg")} alt="Dr. Maya Allen" />
          <span className="pv-feature-label">A little preparation.</span>
          <strong>
            More room
            <br />
            for care.
          </strong>
          <span className="pv-feature-link">
            Open your calendar <ArrowUpRight size={16} />
          </span>
        </button>
      </aside>
      <div className="pv-overview-center">
        <PracticeChart
          appointments={appointments}
          day={day}
          metric={metric}
          onMetric={setMetric}
          onDay={onDay}
          onCalendar={onCalendar}
        />
        <AppointmentLedger visits={current} onSelect={onSelect} />
      </div>
      <UpcomingAppointments
        visits={current}
        day={day}
        onDay={onDay}
        onSelect={onSelect}
        onCalendar={onCalendar}
      />
    </section>
  );
}
