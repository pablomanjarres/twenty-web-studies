import { useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export function Activity() {
  const [day, setDay] = useState(8);
  return (
    <aside className="bloom-right">
      <section className="bloom-calendar" id="bloom-calendar">
        <div className="bloom-section-heading">
          <h2>Your week</h2>
          <CalendarDays size={16} />
        </div>
        <div className="bloom-calendar-month">
          <span>October 2026</span>
          <div>
            <button
              onClick={() => setDay(Math.max(5, day - 1))}
              aria-label="Previous day"
            >
              <ChevronLeft size={14} />
            </button>
            <button
              onClick={() => setDay(Math.min(11, day + 1))}
              aria-label="Next day"
            >
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
        <div className="bloom-week">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <button
              key={i}
              onClick={() => setDay(i + 5)}
              className={day === i + 5 ? "active" : ""}
              aria-pressed={day === i + 5}
              aria-label={"October " + (i + 5)}
            >
              <span>{d}</span>
              <b>{i + 5}</b>
              <i />
            </button>
          ))}
        </div>
        <span className="bloom-day-label">
          {day === 8 ? "Today" : "October " + day}’s little plan
        </span>
        <div className="bloom-event peach">
          <span>16:00</span>
          <div>
            <h3>{day === 8 ? "Colour & composition" : "Creative practice"}</h3>
            <p>Live workshop / 45 min</p>
            <span>with Olivia Chen</span>
          </div>
        </div>
        <div className="bloom-event lavender">
          <span>18:30</span>
          <div>
            <h3>A little design practice</h3>
            <p>Personal goal / 20 min</p>
          </div>
        </div>
      </section>
      <section className="bloom-learning-chart">
        <div className="bloom-section-heading">
          <h2>Learning rhythm</h2>
          <span>This week</span>
        </div>
        <div className="bloom-chart-number">
          <b>
            4.5<small>hours</small>
          </b>
          <span>↗ 18% more</span>
        </div>
        <div className="bloom-chart-bars">
          {[45, 68, 38, 95, 72, 29, 15].map((height, i) => (
            <div key={i}>
              <span
                style={{ height: height + "%" }}
                className={i === 3 ? "active" : ""}
              />
              <small>{["M", "T", "W", "T", "F", "S", "S"][i]}</small>
            </div>
          ))}
        </div>
      </section>
      <section className="bloom-community">
        <div className="bloom-community-stars">✦ ✧ ✦</div>
        <h3>Better, together.</h3>
        <p>
          Share a small win. Ask a question.
          <br />
          Meet your kind of curious.
        </p>
        <a href="#bloom-path">
          Explore the community <ArrowUpRight size={13} />
        </a>
      </section>
    </aside>
  );
}
