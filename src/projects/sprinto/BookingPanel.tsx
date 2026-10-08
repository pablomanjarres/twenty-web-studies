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
  return (
    <form
      className="sp-booking"
      onSubmit={(e) => {
        e.preventDefault();
        confirm();
      }}
    >
      <div className="sp-booking-heading">
        <span>LET’S PLAY</span>
        <h2>Your next session.</h2>
        <CalendarDays size={21} />
      </div>
      <div className="sp-booking-days" aria-label="Select a day">
        {days.map((d, i) => (
          <button
            type="button"
            key={d.date}
            aria-pressed={booking.day === i}
            onClick={() => update({ day: i })}
          >
            <span>{d.day}</span>
            <strong>{d.date}</strong>
          </button>
        ))}
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
          Start time <span>October 2026</span>
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
          <Clock size={15} />
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
      <div className="sp-total">
        <span>
          {court.kind}
          <small>Per court · up to 4 players</small>
        </span>
        <strong>£{(court.price * booking.duration) / 60}</strong>
      </div>
      <button className="sp-confirm">
        {confirmed ? (
          <>
            <span>Session held in your plan</span>
            <Check size={20} />
          </>
        ) : (
          <>
            <span>Reserve this court</span>
            <ArrowUpRight size={20} />
          </>
        )}
      </button>
      <p className="sp-confirm-note" aria-live="polite">
        {confirmed
          ? `${court.name} · ${days[booking.day].day} ${days[booking.day].date} Oct · ${booking.time} · ${booking.duration} min`
          : "No membership needed. Just bring your game."}
      </p>
    </form>
  );
}
