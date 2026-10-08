import { useState } from "react";
import { brews, type Brew } from "./data";
export function BrewingSheet() {
  const [method, setMethod] = useState<Brew>("Pour-over");
  const recipe = brews[method];
  return (
    <section id="brew" className="cinder-brew-sheet">
      <div className="cinder-brew-top">
        <span className="cinder-label">Kitchen counter notes / 01</span>
        <h2>A better everyday cup.</h2>
        <nav aria-label="Brewing method">
          {(Object.keys(brews) as Brew[]).map((name) => (
            <button
              key={name}
              aria-pressed={method === name}
              onClick={() => setMethod(name)}
            >
              {name}
            </button>
          ))}
        </nav>
      </div>
      <div className="cinder-brew-body">
        <dl>
          <div>
            <dt>Coffee</dt>
            <dd>{recipe.dose}</dd>
          </div>
          <div>
            <dt>Water</dt>
            <dd>{recipe.water}</dd>
          </div>
          <div>
            <dt>Grind</dt>
            <dd>{recipe.grind}</dd>
          </div>
          <div>
            <dt>Time</dt>
            <dd>{recipe.time}</dd>
          </div>
        </dl>
        <ol>
          {recipe.steps.map((step, index) => (
            <li key={step}>
              <span>0{index + 1}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </div>
      <p className="cinder-brew-note">
        A starting point, not a rule. Follow your own taste.
      </p>
    </section>
  );
}
