import { useState } from "react";
import { ArrowUpRight, Wind } from "lucide-react";
import { image, approaches } from "./data";
import { EnergyDiagram } from "./EnergyDiagram";

export function Approaches() {
  const [selected, setSelected] = useState("Solar");
  const current =
    approaches.find((item) => item.name === selected) ?? approaches[0];
  return (
    <section className="ve-approaches" id="ve-approaches">
      <div className="ve-section-heading">
        <span className="ve-kicker">Three ways forward</span>
        <h2>
          Better by
          <br />
          natural design.
        </h2>
        <p>
          Different sources. One direction.
          <br />A thoughtful path to renewable power.
        </p>
      </div>
      <div
        className="ve-approach-tabs"
        role="group"
        aria-label="Energy approach"
      >
        {approaches.map(({ name, number, Icon }) => (
          <button
            key={name}
            aria-pressed={selected === name}
            onClick={() => setSelected(name)}
          >
            <span>{number}</span>
            <Icon size={24} />
            <strong>{name}</strong>
            <ArrowUpRight size={20} />
          </button>
        ))}
      </div>
      <div className="ve-project-layout">
        <div className="ve-project-image">
          {selected === "Storage" ? (
            <EnergyDiagram kind="Storage" />
          ) : (
            <img
              src={image(current.image)}
              alt={
                selected === "Solar"
                  ? "An open solar panel field beneath a broad sky"
                  : "Wind turbines generating energy at sunset"
              }
            />
          )}
          <span>{current.caption}</span>
        </div>
        <div className="ve-project-copy">
          <span className="ve-kicker">{current.location}</span>
          <h3>{current.title}</h3>
          <p>{current.text}</p>
          <div className="ve-project-detail">
            <span>Featured project study</span>
            <strong>{current.project}</strong>
            <div>
              <span>Planned capacity</span>
              <strong>{current.capacity}</strong>
            </div>
          </div>
          {selected !== "Storage" && <EnergyDiagram kind={current.name} />}
        </div>
      </div>
    </section>
  );
}
