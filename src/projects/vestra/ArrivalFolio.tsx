import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { rooms } from "./data";
export function ArrivalFolio() {
  const [arrival, setArrival] = useState("2026-11-12");
  const [departure, setDeparture] = useState("2026-11-15");
  const [guests, setGuests] = useState("2");
  const [room, setRoom] = useState(0);
  const [outlined, setOutlined] = useState(false);
  const nights = Math.round(
    (Date.parse(departure) - Date.parse(arrival)) / 86400000,
  );
  const valid = Number.isFinite(nights) && nights > 0;
  function changed() {
    setOutlined(false);
  }
  return (
    <form
      id="vs-arrival-folio"
      className="vs-folio"
      onSubmit={(e) => {
        e.preventDefault();
        setOutlined(true);
      }}
    >
      <div className="vs-dates">
        <label>
          Arrival
          <input
            type="date"
            value={arrival}
            required
            onChange={(e) => {
              setArrival(e.target.value);
              changed();
            }}
          />
        </label>
        <label>
          Departure
          <input
            type="date"
            value={departure}
            min={arrival}
            required
            onChange={(e) => {
              setDeparture(e.target.value);
              changed();
            }}
          />
        </label>
      </div>
      <div className="vs-dates">
        <label>
          Your room
          <select
            value={room}
            onChange={(e) => {
              setRoom(Number(e.target.value));
              changed();
            }}
          >
            {rooms.map((r, i) => (
              <option value={i} key={r.name}>
                {r.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Guests
          <select
            value={guests}
            onChange={(e) => {
              setGuests(e.target.value);
              changed();
            }}
          >
            {["1", "2", "3", "4"].map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>
        </label>
      </div>
      <p className="vs-room-note">{rooms[room].note}</p>
      <div className="vs-stay-total">
        <span>
          {valid
            ? `${nights} nights · ${guests} guests`
            : "Choose a departure after arrival"}
        </span>
        <strong>
          {valid ? `€${(nights * rooms[room].rate).toLocaleString()}` : "—"}
        </strong>
      </div>
      <button className="vs-folio-action" disabled={!valid}>
        {outlined ? "Stay outline ready" : "Explore this stay"}
        <ArrowUpRight size={17} />
      </button>
      <p className="vs-stay-message" aria-live="polite">
        {outlined
          ? `${rooms[room].name} · ${arrival} — ${departure}. Your stay outline is ready to review.`
          : "Breakfast, the sauna and a slower morning included."}
      </p>
    </form>
  );
}
