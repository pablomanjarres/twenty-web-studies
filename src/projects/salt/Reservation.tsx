import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { ChoiceGroup } from "./ChoiceGroup";

const partySizes = ["1", "2", "3", "4", "5", "6"];
const times = ["12:00", "13:00", "18:00", "19:00", "20:00", "21:00"];
const months = "JAN FEB MAR APR MAY JUN JUL AUG SEP OCT NOV DEC".split(" ");

function receiptDate(iso: string) {
  const [year, month, day] = iso.split("-");
  return `${Number(day)} ${months[Number(month) - 1]} ${year}`;
}

export function Reservation() {
  const [party, setParty] = useState("2");
  const [date, setDate] = useState("2026-10-16");
  const [time, setTime] = useState("19:00");
  const [planned, setPlanned] = useState(false);
  const update = (set: (value: string) => void) => (value: string) => {
    set(value);
    setPlanned(false);
  };
  return (
    <section id="tables" className="sl-tables">
      <div>
        <span className="sl-label">THERE’S A PLACE FOR YOU.</span>
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
          <strong className="sl-label">SALT / TABLE NOTES</strong>
          <span>Coastal kitchen</span>
        </div>
        <ChoiceGroup
          label="People"
          options={partySizes}
          value={party}
          onChange={update(setParty)}
        />
        <label className="sl-field">
          <span className="sl-label">Date</span>
          <input
            type="date"
            value={date}
            required
            onChange={(e) => update(setDate)(e.target.value)}
          />
        </label>
        <ChoiceGroup
          label="Time"
          options={times}
          value={time}
          onChange={update(setTime)}
          className="sl-choices-time"
        />
        <button type="submit" disabled={!date}>
          {planned ? "Your table plan is ready" : "Make a table plan"}
          <ArrowUpRight size={18} />
        </button>
        <div className="sl-receipt-note" aria-live="polite">
          {planned ? (
            <>
              <p className="sl-label">
                {party} {party === "1" ? "PERSON" : "PEOPLE"}
                <br />
                {receiptDate(date)}
                <br />
                {time}
              </p>
              <p>We’ll set the table.</p>
            </>
          ) : (
            <p>For parties of 7 or more, ask about our long table.</p>
          )}
        </div>
        <div className="sl-receipt-bottom sl-label">
          GOOD FOOD. GOOD COMPANY. SEE YOU SOON.
        </div>
      </form>
    </section>
  );
}
