import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { filters, image, works, worksFor } from "./data";

export function WorkCard({ work }: { work: (typeof works)[number] }) {
  return (
    <article className={`og-original-work-card ${work.className}`}>
      <div className="og-original-work-image">
        <img src={image(work.image)} alt={work.alt} />
        {work.name === "A different frequency" && (
          <span className="og-original-work-poster">
            MAKE
            <br />
            SOME
            <br />
            NOISE.
          </span>
        )}
        <a
          href="#og-original-contact"
          aria-label={`Discuss a project like ${work.name}`}
        >
          <ArrowUpRight size={24} />
        </a>
      </div>
      <h3>{work.name}</h3>
      <span className="og-original-project-meta">
        {work.type}, {work.year}
      </span>
      <p>{work.detail}</p>
    </article>
  );
}

export function WorkIndex() {
  const [filter, setFilter] = useState("All");
  const visible = worksFor(filter);
  return (
    <section className="og-original-work" id="og-original-work">
      <div className="og-original-work-heading">
        <h2>
          Proof of
          <br />a good idea.
        </h2>
        <div role="group" aria-label="Filter studio work">
          {filters.map((value) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              aria-pressed={filter === value}
            >
              {value}
              <span className="og-original-chip-count">
                {worksFor(value).length}
              </span>
            </button>
          ))}
        </div>
        <p className="og-original-sr" aria-live="polite">
          Showing {visible.length}{" "}
          {visible.length === 1 ? "project" : "projects"}
        </p>
      </div>
      <div className="og-original-work-grid">
        {visible.map((work) => (
          <WorkCard key={work.name} work={work} />
        ))}
      </div>
    </section>
  );
}
