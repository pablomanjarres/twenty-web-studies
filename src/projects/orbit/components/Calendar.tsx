import { CalendarDays, ArrowUpRight } from "lucide-react";
import { Avatar } from "./Avatar";

export function Calendar() {
  return (
    <section className="orbit-calendar" id="schedule">
      <div className="orbit-section-heading">
        <h2>October 2026</h2>
        <CalendarDays size={16} />
      </div>
      <div className="orbit-calendar-grid">
        {["M", "T", "W", "T", "F", "S", "S"].map((i, k) => (
          <span key={k} className="orbit-day-name">
            {i}
          </span>
        ))}
        {Array.from({ length: 35 }, (_, i) => {
          const day = i - 2;
          return (
            <span
              key={i}
              className={`${day === 8 ? "selected" : ""} ${day < 1 || day > 31 ? "muted" : ""}`}
            >
              {day < 1 ? 30 + day : day > 31 ? day - 31 : day}
              {[12, 18, 24].includes(day) && <i />}
            </span>
          );
        })}
      </div>
      <div className="orbit-today-meeting">
        <span>
          <i /> Today, October 8
        </span>
        <h3>Brand direction review</h3>
        <p>
          10:30 – 11:15 AM <span>45 min</span>
        </p>
        <div>
          <div className="orbit-avatar-stack">
            <Avatar id={1} />
            <Avatar id={2} />
            <Avatar id={3} />
          </div>
          <a href="#tasks">
            View agenda <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
