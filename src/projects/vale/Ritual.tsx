import { useState } from "react";
import { ArrowUpRight, Moon, Sun } from "lucide-react";
import { formulas, image } from "./data";

export function Ritual({ onSelect }: { onSelect: (index: number) => void }) {
  const [time, setTime] = useState("Morning");
  const selected = time === "Morning" ? formulas : [formulas[0], formulas[2]];
  return (
    <section id="ritual" className="vale-ritual">
      <div className="vale-ritual-top">
        <div>
          <span className="vale-section-intro">Care that feels like you.</span>
          <h2>A few good moments.</h2>
        </div>
        <div className="vale-time-tabs" aria-label="Ritual time">
          {["Morning", "Evening"].map((name) => (
            <button
              key={name}
              aria-pressed={time === name}
              onClick={() => setTime(name)}
            >
              {name === "Morning" ? <Sun size={16} /> : <Moon size={16} />}
              {name}
            </button>
          ))}
        </div>
      </div>
      <div className="vale-ritual-sequence">
        {selected.map((formula, index) => (
          <article key={formula.id}>
            <div className="vale-ritual-image">
              <img
                src={image(formula.image)}
                alt={formula.name}
                loading="lazy"
              />
              <span>Step {index + 1}</span>
            </div>
            <div className="vale-ritual-description">
              <h3>{formula.name}</h3>
              <p>{formula.use}</p>
              <a
                href="#formulas"
                onClick={() => onSelect(formulas.indexOf(formula))}
              >
                Choose {formula.name} <ArrowUpRight size={16} />
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
