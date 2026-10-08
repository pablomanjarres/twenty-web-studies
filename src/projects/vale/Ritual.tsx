import { useState } from "react";
import { formulas, image } from "./data";
export function Ritual({ onSelect }: { onSelect: (index: number) => void }) {
  const [time, setTime] = useState("Morning");
  const selected = time === "Morning" ? formulas : [formulas[0], formulas[2]];
  return (
    <section id="ritual" className="vale-ritual">
      <div className="vale-ritual-top">
        <div>
          <span className="vale-label">The daily sequence</span>
          <h2>A few considered moments.</h2>
        </div>
        <div className="vale-time-tabs" aria-label="Ritual time">
          {["Morning", "Evening"].map((name) => (
            <button
              key={name}
              aria-pressed={time === name}
              onClick={() => setTime(name)}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
      <div className="vale-ritual-sequence">
        {selected.map((formula, index) => (
          <article key={formula.id}>
            <span className="vale-label">
              0{index + 1} / {formula.kind}
            </span>
            <img src={image(formula.image)} alt={formula.name} loading="lazy" />
            <div>
              <h3>{formula.name}</h3>
              <p>{formula.use}</p>
              <a
                href="#formulas"
                onClick={() => onSelect(formulas.indexOf(formula))}
              >
                View formula ↗
              </a>
            </div>
          </article>
        ))}
      </div>
      <p className="vale-ritual-note">
        {time === "Morning"
          ? "Begin slowly. A fresh start, a light layer, a soft finish."
          : "Let the day settle. Cleanse, then take a little time to finish."}
      </p>
    </section>
  );
}
