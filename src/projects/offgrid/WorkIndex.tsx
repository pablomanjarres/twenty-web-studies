import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { image, works } from "./data";

export function WorkCard({ work }: { work: (typeof works)[number] }) {
  return (
    <article className={`og-work-card ${work.className}`}>
      <div className="og-work-image">
        <img
          src={image(work.image)}
          alt={
            work.name === "STILL / MOVING"
              ? "Fashion campaign portrait"
              : work.name === "A different frequency"
                ? "Abstract light moving through ribbed glass"
                : "A large event space filled with people and light"
          }
        />
        {work.name === "A different frequency" && (
          <span className="og-work-poster">
            MAKE
            <br />
            SOME
            <br />
            NOISE.
          </span>
        )}
        <a
          href="#og-contact"
          aria-label={`Discuss a project like ${work.name}`}
        >
          <ArrowUpRight size={24} />
        </a>
      </div>
      <div className="og-project-meta">
        <span>
          {work.type} / {work.year}
        </span>
        <span>Offgrid studio</span>
      </div>
      <h3>{work.name}</h3>
      <p>{work.detail}</p>
    </article>
  );
}

export function WorkIndex() {
  const [filter, setFilter] = useState("All");
  return (
    <section className="og-work" id="og-work">
      <div className="og-work-heading">
        <h2>
          Proof of
          <br />a good idea.
        </h2>
        <div role="group" aria-label="Filter studio work">
          {["All", "Brand", "Digital"].map((value) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              aria-pressed={filter === value}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
      <div className="og-work-grid">
        {works
          .filter((work) => filter === "All" || work.type === filter)
          .map((work) => (
            <WorkCard key={work.name} work={work} />
          ))}
      </div>
    </section>
  );
}
