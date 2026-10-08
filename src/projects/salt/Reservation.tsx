import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
export function Reservation() {
  const [party, setParty] = useState("2");
  const [date, setDate] = useState("2026-10-16");
  const [time, setTime] = useState("19:00");
  const [planned, setPlanned] = useState(false);
  return (
    <section id="tables" className="sl-tables">
      <div>
        <span>THERE’S A PLACE FOR YOU.</span>
        <h2>
          Stay for
          <br />
          another course.
        </h2>
        <p>
          A quick lunch, a birthday, or no reason at all.
          <br />
          Choose a time. We’ll set the table.
        </p>
      </div>
      <form
        className="sl-receipt"
        onSubmit={(e) => {
          e.preventDefault();
          setPlanned(true);
        }}
      >
        <div className="sl-receipt-top">
          <strong>SALT / TABLE NOTES</strong>
          <span>18 Harbour Lane</span>
        </div>
        <label>
          People
          <select
            value={party}
            onChange={(e) => {
              setParty(e.target.value);
              setPlanned(false);
            }}
          >
            {["1", "2", "3", "4", "5", "6"].map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>
        </label>
        <label>
          Date
          <input
            type="date"
            value={date}
            required
            onChange={(e) => {
              setDate(e.target.value);
              setPlanned(false);
            }}
          />
        </label>
        <label>
          Time
          <select
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
              setPlanned(false);
            }}
          >
            {["12:00", "13:00", "18:00", "19:00", "20:00", "21:00"].map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        <button>
          {planned ? "Your table plan is ready" : "Make a table plan"}
          <ArrowUpRight size={18} />
        </button>
        <p aria-live="polite">
          {planned
            ? `${party} people · ${date} · ${time}. Your selected table details are ready.`
            : "For parties of 7 or more, ask about our long table."}
        </p>
        <div className="sl-receipt-bottom">
          GOOD FOOD. GOOD COMPANY. SEE YOU SOON.
        </div>
      </form>
    </section>
  );
}
