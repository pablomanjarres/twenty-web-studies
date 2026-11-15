import { useState } from "react";
import { ArrowUpRight, Moon, Sun } from "lucide-react";
import { formulas, image, type Formula } from "./data";

const times = ["Morning", "Evening"] as const;
type Time = (typeof times)[number];

const notes: Record<Time, string> = {
  Morning: "Begin slowly. A fresh start, a light layer, a soft finish.",
  Evening: "Let the day settle. Cleanse, then take a little time to finish.",
};

const skippedAt = (time: Time, formula: Formula) =>
  time === "Evening" && formula.id === "dew-drop";

export function Ritual({ onSelect }: { onSelect: (index: number) => void }) {
  const [time, setTime] = useState<Time>("Morning");
  let step = 0;
  return (
    <section id="ritual" className="vale-ritual">
      <div className="vale-ritual-top">
        <div>
          <span className="vale-section-intro">Care that feels like you.</span>
          <h2>A few good moments.</h2>
          <p className="vale-ritual-lead" aria-live="polite">
            {notes[time]}
          </p>
        </div>
        <div className="vale-time-tabs" role="group" aria-label="Ritual time">
          {times.map((name) => (
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
        {formulas.map((formula, index) => {
          const skipped = skippedAt(time, formula);
          if (!skipped) step += 1;
          return (
            <article key={formula.id} data-skipped={skipped || undefined}>
              <span className="vale-ritual-step">
                {skipped ? "Morning only" : `Step ${step}`}
              </span>
              <div className="vale-ritual-image">
                <img src={image(formula.image)} alt="" loading="lazy" />
              </div>
              <div className="vale-ritual-description">
                <h3>{formula.name}</h3>
                <p>{formula.use}</p>
                <a
                  className="vale-link"
                  href="#formulas"
                  onClick={() => onSelect(index)}
                >
                  Choose {formula.name} <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
