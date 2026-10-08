import { useState } from "react";
import { type Piece, type Material, visitDays, visitTimes } from "./data";
export function Appointment({
  piece,
  material,
}: {
  piece: Piece;
  material: Material;
}) {
  const [day, setDay] = useState(visitDays[0]);
  const [time, setTime] = useState(visitTimes[0]);
  const [saved, setSaved] = useState(false);
  return (
    <section className="estelle-appointment" id="estelle-visit">
      <div className="estelle-section-label">
        <span>04 / The atelier folio</span>
        <span>By a slower appointment</span>
      </div>
      <div className="estelle-visit-layout">
        <div>
          <span className="estelle-micro">A personal viewing</span>
          <h2>Come closer.</h2>
          <p>
            See the piece in natural light. Feel its weight, try its
            proportions, and talk through the details at your own pace.
          </p>
          <div className="estelle-visit-piece">
            <span>Your current study</span>
            <strong>{piece.name}</strong>
            <span>{material.name}</span>
          </div>
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setSaved(true);
          }}
          onChange={() => setSaved(false)}
        >
          <div className="estelle-visit-row">
            <label>
              Your name
              <input
                type="text"
                required
                autoComplete="name"
                placeholder="Full name"
              />
            </label>
            <label>
              Email
              <input
                type="email"
                required
                autoComplete="email"
                placeholder="Your email address"
              />
            </label>
          </div>
          <div className="estelle-visit-row">
            <label>
              Preferred day
              <select
                value={day}
                onChange={(event) => setDay(event.target.value)}
              >
                {visitDays.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <label>
              A quiet hour
              <select
                value={time}
                onChange={(event) => setTime(event.target.value)}
              >
                {visitTimes.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
          </div>
          <button type="submit">
            Keep my viewing notes <span>↗</span>
          </button>
          <p className="estelle-visit-status" role="status">
            {saved
              ? `Viewing notes saved for this visit: ${piece.name} in ${material.name}, ${day} at ${time}.`
              : "Your selection stays in this viewing folio."}
          </p>
        </form>
      </div>
    </section>
  );
}
