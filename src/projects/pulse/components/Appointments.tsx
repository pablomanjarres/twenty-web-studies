import { useState } from "react";
import {
  CalendarDays,
  ArrowUpRight,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { appointments } from "../data";

export function Appointments({ search }: { search: string }) {
  const [day, setDay] = useState(8);
  const [filter, setFilter] = useState("All appointments");
  const [selected, setSelected] = useState("Olivia Martinez");
  const rows = appointments.filter(
    (i) =>
      i.day === day &&
      (filter === "All appointments" || i.status === filter) &&
      i.name.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <section className="pulse-appointments" id="appointments">
      <div className="pulse-section-heading">
        <div>
          <h2>Your day, at a glance</h2>
          <span>October 2026</span>
        </div>
        <button
          className="pulse-outline-button"
          onClick={() => setDay(day === 8 ? 9 : 8)}
        >
          <CalendarDays size={13} />{" "}
          {day === 8 ? "View tomorrow" : "Back to today"}
        </button>
      </div>
      <div className="pulse-date-strip">
        {[
          { day: 5, name: "Mon" },
          { day: 6, name: "Tue" },
          { day: 7, name: "Wed" },
          { day: 8, name: "Thu" },
          { day: 9, name: "Fri" },
          { day: 10, name: "Sat" },
          { day: 11, name: "Sun" },
        ].map((i) => (
          <button
            key={i.day}
            className={day === i.day ? "selected" : ""}
            onClick={() => setDay(i.day)}
            aria-pressed={day === i.day}
          >
            <span>{i.name}</span>
            <strong>{i.day}</strong>
            {[8, 9].includes(i.day) && <i />}
          </button>
        ))}
      </div>
      <div className="pulse-appointment-toolbar">
        <span>
          {rows.length} appointments{" "}
          <small>• {day === 8 ? "Today" : `October ${day}`}</small>
        </span>
        <select
          aria-label="Appointment status"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          {["All appointments", "Confirmed", "Checked in", "Pending"].map(
            (i) => (
              <option key={i}>{i}</option>
            ),
          )}
        </select>
      </div>
      <div className="pulse-appointment-list">
        {rows.map((i) => (
          <button
            key={i.name}
            className={`pulse-appointment-row ${selected === i.name ? "selected" : ""}`}
            onClick={() => setSelected(i.name)}
          >
            <span className="pulse-appointment-time">
              {i.time}
              <small>{i.duration}</small>
            </span>
            <span
              className="pulse-patient-avatar"
              style={{ background: i.color }}
            >
              {i.initials}
            </span>
            <span className="pulse-appointment-name">
              <strong>{i.name}</strong>
              <small>{i.reason}</small>
            </span>
            <span
              className={`pulse-appointment-status ${i.status.toLowerCase().replace(" ", "-")}`}
            >
              <i />
              {i.status}
            </span>
            <ArrowUpRight size={14} />
          </button>
        ))}
        {rows.length === 0 && (
          <div className="pulse-no-appointments">
            <CalendarDays size={25} />
            <strong>A little room in the day.</strong>
            <p>
              No appointments match this view. Choose another day or status.
            </p>
          </div>
        )}
      </div>
      <div className="pulse-schedule-footer">
        <span>
          <CheckCircle2 size={13} /> Your schedule is up to date
        </span>
        <a href="#activity">
          View practice activity <ArrowRight size={13} />
        </a>
      </div>
    </section>
  );
}
