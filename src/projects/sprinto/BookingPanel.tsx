import { ArrowUpRight, Check, Clock, CalendarDays } from "lucide-react";
import { courts, days, times, isAvailable, type BookingState } from "./data";
export function BookingPanel({
  booking,
  update,
  confirmed,
  confirm,
}: {
  booking: BookingState;
  update: (patch: Partial<BookingState>) => void;
  confirmed: boolean;
  confirm: () => void;
}) {
  const court = courts[booking.court];
  const day = days[booking.day];
  const selection = `${day.day} ${day.date} Oct · ${booking.time} · ${booking.duration} min`;
  const openCount = (dayIndex: number) =>
    times.filter((t) => isAvailable(booking.court, t, dayIndex)).length;
  return (
    <form
      className="sp-booking"
      onSubmit={(e) => {
        e.preventDefault();
        confirm();
      }}
    >
      <div className="sp-booking-heading">
        <span className="sp-eyebrow">Let’s play</span>
        <h2>Your next session.</h2>
        <CalendarDays size={22} aria-hidden="true" />
      </div>
      <div className="sp-booking-days" role="group" aria-label="Select a day">
        {days.map((d, i) => {
          const open = openCount(i);
          return (
            <button
              type="button"
              key={d.date}
              aria-pressed={booking.day === i}
              disabled={open === 0}
              onClick={() => update({ day: i })}
            >
              <span>{d.day}</span>
              <strong>{d.date}</strong>
              <small>{open ? `${open} open` : "Full"}</small>
            </button>
          );
        })}
      </div>
      <label className="sp-court-select">
        Your court
        <select
          value={booking.court}
          onChange={(e) => update({ court: Number(e.target.value) })}
        >
          {courts.map((c, i) => (
            <option key={c.name} value={i}>
              {c.name} — {c.kind.split(" · ")[0]}
            </option>
          ))}
        </select>
      </label>
      <fieldset className="sp-times">
        <legend>
          Start time <span className="sp-eyebrow">Oct 2026</span>
        </legend>
        {times.map((time) => (
          <button
            type="button"
            key={time}
            disabled={!isAvailable(booking.court, time, booking.day)}
            aria-pressed={booking.time === time}
            onClick={() => update({ time })}
          >
            {time}
          </button>
        ))}
      </fieldset>
      <label className="sp-duration">
        <span>
          <Clock size={16} aria-hidden="true" />
          Duration
        </span>
        <select
          value={booking.duration}
          onChange={(e) => update({ duration: Number(e.target.value) })}
        >
          <option value={60}>60 minutes</option>
          <option value={90}>90 minutes</option>
          <option value={120}>120 minutes</option>
        </select>
      </label>
      <div className="sp-checkout">
        <div className="sp-total">
          <span>
            {selection}
            <small>
              {court.name}
              <span className="sp-court-kind"> · {court.kind}</span>
            </small>
          </span>
          <strong>£{(court.price * booking.duration) / 60}</strong>
        </div>
        <button className="sp-confirm">
          {confirmed ? (
            <>
              <span>
                Session held<span className="sp-long"> in your plan</span>
              </span>
              <Check size={20} aria-hidden="true" />
            </>
          ) : (
            <>
              <span>
                Reserve<span className="sp-long"> this court</span>
              </span>
              <ArrowUpRight size={20} aria-hidden="true" className="sp-nudge" />
            </>
          )}
        </button>
      </div>
      <p className="sp-confirm-note" aria-live="polite">
        {confirmed
          ? `Held: ${court.name} · ${selection}`
          : "Up to 4 players. No membership needed."}
      </p>
    </form>
  );
}
