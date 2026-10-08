import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function Practice() {
  const [open, setOpen] = useState("Material honesty");
  const values = [
    {
      name: "Material honesty",
      text: "We work with natural materials that grow more beautiful with time. Their texture, weight, and character guide the spaces we create.",
    },
    {
      name: "A sense of belonging",
      text: "Every project begins with listening. We design around the people who will live, work, and gather within a space.",
    },
    {
      name: "Built for the long view",
      text: "Good architecture outlasts a moment. We choose enduring forms and careful details over passing gestures.",
    },
  ];
  return (
    <section className="forma-practice" id="practice">
      <div>
        <span>The practice</span>
        <h2>
          Good spaces
          <br />
          make room
          <br />
          for life.
        </h2>
      </div>
      <div>
        <p className="forma-practice-intro">
          We believe the most meaningful spaces are the ones that feel entirely
          their own. A quiet balance of proportion, light, and material. Places
          to come back to.
        </p>
        <div className="forma-values">
          {values.map((i) => (
            <article key={i.name}>
              <button
                aria-expanded={open === i.name}
                onClick={() => setOpen(open === i.name ? "" : i.name)}
              >
                {i.name}
                {open === i.name ? <Minus size={18} /> : <Plus size={18} />}
              </button>
              {open === i.name && <p>{i.text}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
