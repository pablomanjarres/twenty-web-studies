import { useState } from "react";
import { ArrowUpRight, ArrowRight, ChevronDown, X } from "lucide-react";

export function Booking() {
  const [arrival, setArrival] = useState("2026-10-20");
  const [departure, setDeparture] = useState("2026-10-23");
  const [guests, setGuests] = useState("2");
  const [show, setShow] = useState(false);
  const nights = Math.round(
    (new Date(departure).getTime() - new Date(arrival).getTime()) / 86400000,
  );
  return (
    <>
      <form
        className="vestra-booking"
        id="booking"
        onSubmit={(e) => {
          e.preventDefault();
          setShow(true);
        }}
      >
        <label>
          Arrival
          <input
            type="date"
            value={arrival}
            onChange={(e) => setArrival(e.target.value)}
            required
          />
        </label>
        <label>
          Departure
          <input
            type="date"
            min={arrival}
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
            required
          />
        </label>
        <label>
          Guests
          <span className="vestra-select-wrap">
            <select value={guests} onChange={(e) => setGuests(e.target.value)}>
              <option value="1">1 guest</option>
              <option value="2">2 guests</option>
              <option value="3">3 guests</option>
              <option value="4">4 guests</option>
            </select>
            <ChevronDown size={15} />
          </span>
        </label>
        <button type="submit">
          Explore availability <ArrowRight size={18} />
        </button>
      </form>
      {show && (
        <div className="vestra-availability" role="status">
          <button
            aria-label="Close availability"
            onClick={() => setShow(false)}
          >
            <X size={16} />
          </button>
          {nights > 0 ? (
            <>
              <strong>Your mountain pause awaits.</strong>
              <p>
                {nights} nights · {guests} {guests === "1" ? "guest" : "guests"}{" "}
                · Alpine suite from €320 per night.
              </p>
              <a href="#stay" onClick={() => setShow(false)}>
                Explore the alpine suite <ArrowUpRight size={16} />
              </a>
            </>
          ) : (
            <>
              <strong>Give yourself a little time.</strong>
              <p>
                Choose a departure date after your arrival to explore your stay.
              </p>
            </>
          )}
        </div>
      )}
    </>
  );
}
