import { useState } from "react";
import { ArrowUpRight, Sun, Moon } from "lucide-react";
import { rituals } from "./data";
import type { RitualName } from "./data";

export function Ritual({ onChoose }: { onChoose: () => void }) {
  const [time, setTime] = useState<RitualName>("Morning");
  const current = rituals[time];
  return (
    <section className="va-ritual" id="va-ritual">
      <div className="va-ritual-heading">
        <span className="va-kicker">A moment for you</span>
        <h2>
          Your day.
          <br />
          <i>Your ritual.</i>
        </h2>
        <p>
          Find a rhythm that feels good.
          <br />
          Begin with a little care.
        </p>
      </div>
      <div className="va-ritual-details">
        <div
          className="va-ritual-tabs"
          role="group"
          aria-label="Choose a ritual time"
        >
          {(["Morning", "Evening"] as RitualName[]).map((value) => (
            <button
              key={value}
              aria-pressed={time === value}
              onClick={() => setTime(value)}
            >
              {value === "Morning" ? <Sun size={16} /> : <Moon size={16} />}{" "}
              {value}
            </button>
          ))}
        </div>
        <div className="va-ritual-body">
          <span className="va-kicker">{current.label}</span>
          <h3>{current.heading}</h3>
          <p>{current.text}</p>
          <ol>
            {current.steps.map((step, index) => (
              <li key={step}>
                <span>0{index + 1}</span>
                {step}
              </li>
            ))}
          </ol>
          <button className="va-ritual-button" onClick={onChoose}>
            Start with the essentials <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
