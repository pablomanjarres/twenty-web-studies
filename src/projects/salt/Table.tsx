import { useState } from "react";
import { ArrowUpRight, ChevronDown, Check } from "lucide-react";

export function Table() {
  const [guests, setGuests] = useState("2");
  const [time, setTime] = useState("19:30");
  const [selected, setSelected] = useState(false);
  return (
    <section className="salt-table" id="salt-table">
      <div>
        <span>See you at Salt</span>
        <h2>
          Your table
          <br />
          is calling.
        </h2>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSelected(true);
        }}
      >
        <div className="salt-table-fields">
          <label>
            Good company
            <select
              value={guests}
              onChange={(e) => {
                setGuests(e.target.value);
                setSelected(false);
              }}
            >
              {["1", "2", "3", "4", "5", "6"].map((n) => (
                <option value={n} key={n}>
                  {n} {n === "1" ? "guest" : "guests"}
                </option>
              ))}
            </select>
            <ChevronDown size={13} />
          </label>
          <label>
            Make a date
            <input
              type="date"
              defaultValue="2026-10-10"
              aria-label="Choose a date"
              onChange={() => setSelected(false)}
            />
          </label>
          <label>
            The right time
            <select
              value={time}
              onChange={(e) => {
                setTime(e.target.value);
                setSelected(false);
              }}
            >
              {["12:00", "13:30", "18:00", "19:30", "21:00"].map((t) => (
                <option value={t} key={t}>
                  {t}
                </option>
              ))}
            </select>
            <ChevronDown size={13} />
          </label>
        </div>
        <button className="salt-button" type="submit">
          {selected ? (
            <>
              <Check size={18} />
              Table time selected
            </>
          ) : (
            <>
              Choose this table <ArrowUpRight size={18} />
            </>
          )}
        </button>
        <p role="status">
          {selected
            ? `${guests} guests at ${time}. Your selection is ready.`
            : "For larger gatherings, come and chat with our team."}
        </p>
      </form>
    </section>
  );
}
