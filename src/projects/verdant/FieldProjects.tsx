import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { image, scenarios } from "./data";
export function FieldProjects() {
  const [brief, setBrief] = useState(false);
  const [system, setSystem] = useState("Solar generation");
  const [site, setSite] = useState("Commercial rooftop");
  return (
    <>
      <section id="field" className="vd-field">
        <figure>
          <img
            src={image("turbines")}
            alt="Wind turbines generating power in an open field"
            loading="lazy"
          />
          <figcaption>IN THE FIELD / NORTHERN GENERATION</figcaption>
        </figure>
        <div className="vd-field-intro">
          <span>THINK IN SYSTEMS.</span>
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
                <span>{s.name}</span>
                <h3>{s.project}</h3>
                <strong>{s.capacity}</strong>
                <ArrowUpRight size={19} />
              </summary>
              <p>
                {s.description} A project study for {s.name.toLowerCase()}{" "}
                infrastructure.
              </p>
            </details>
          ))}
        </div>
      </section>
      <section id="connection" className="vd-connection">
        <div>
          <span>FROM A SITE TO A SYSTEM</span>
          <h2>
            What could your
            <br />
            next connection be?
          </h2>
          <p>
            Tell us where you’re starting.
            <br />A clear project begins with a better question.
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setBrief(true);
          }}
        >
          <label>
            What are you exploring?
            <select
              value={system}
              onChange={(e) => {
                setSystem(e.target.value);
                setBrief(false);
              }}
            >
              <option>Solar generation</option>
              <option>Wind generation</option>
              <option>Battery storage</option>
              <option>An integrated system</option>
            </select>
          </label>
          <label>
            Site type
            <select
              value={site}
              onChange={(e) => {
                setSite(e.target.value);
                setBrief(false);
              }}
            >
              <option>Commercial rooftop</option>
              <option>Open-field site</option>
              <option>Industrial campus</option>
              <option>Community facility</option>
            </select>
          </label>
          <button>
            {brief ? "Project outline prepared" : "Prepare a project outline"}
            <ArrowUpRight size={19} />
          </button>
          <p aria-live="polite">
            {brief
              ? `${system} · ${site}. Your project outline is ready for a first conversation.`
              : "Choose the system and the site. Start with the essentials."}
          </p>
        </form>
      </section>
    </>
  );
}
