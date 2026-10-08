import { useState } from "react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
import { type Coffee } from "./data";
export function Dispatch({ coffee }: { coffee: Coffee }) {
  const [frequency, setFrequency] = useState("Two weeks");
  const [saved, setSaved] = useState(false);
  return (
    <footer className="cinder-dispatch">
      <div>
        <span className="cinder-label">Keep the cupboard happy</span>
        <h2>
          The next bag,
          <br />
          at your pace.
        </h2>
      </div>
      <div className="cinder-dispatch-control">
        <p>{coffee.name} / 250 g / whole bean</p>
        <div aria-label="Coffee delivery frequency">
          {["Two weeks", "Four weeks"].map((name) => (
            <button
              key={name}
              aria-pressed={frequency === name}
              onClick={() => {
                setFrequency(name);
                setSaved(false);
              }}
            >
              {name}
            </button>
          ))}
        </div>
        <button className="cinder-dispatch-save" onClick={() => setSaved(true)}>
          {saved ? "Preference saved" : "Save a delivery rhythm"} →
        </button>
        <span role="status">
          {saved
            ? `${coffee.name} every ${frequency.toLowerCase()} is saved for this visit.`
            : "A little routine for the first cup."}
        </span>
      </div>
      <div className="cinder-footer-line">
        <BrandLogo brand={brand} />
        <span>Roast, brew, repeat.</span>
        <a href="#coffee">Back to the coffee ↑</a>
      </div>
    </footer>
  );
}
