import { Plus } from "lucide-react";
import { type Scenario, image, photoAlt, scenarios } from "./data";
export function FieldProjects({ scenario }: { scenario: Scenario }) {
  return (
    <section id="field" className="vd-field">
      <figure>
        <img
          src={image(scenario.photo)}
          alt={photoAlt[scenario.photo]}
          loading="lazy"
        />
        <figcaption className="vd-label">
          In the field / {scenario.name}
        </figcaption>
      </figure>
      <div className="vd-field-intro">
        <span className="vd-label">Think in systems.</span>
        <h2>
          Good energy needs
          <br />a long view.
        </h2>
        <p>
          Each site has its own rhythm: the land, the weather, the people and
          the grid. We bring those relationships together before we draw the
          first connection.
        </p>
      </div>
      <div className="vd-project-ledger">
        {scenarios.map((s) => (
          <details key={s.name}>
            <summary>
              <span className="vd-label">{s.name}</span>
              <h3>{s.project}</h3>
              <strong>{s.capacity}</strong>
              <Plus size={20} strokeWidth={1.6} aria-hidden="true" />
            </summary>
            <p>
              {s.description} A project study for {s.name.toLowerCase()}{" "}
              infrastructure.
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
