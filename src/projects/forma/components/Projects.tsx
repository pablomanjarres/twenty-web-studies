import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../data";

export function Projects() {
  const [filter, setFilter] = useState("All projects");
  return (
    <section className="forma-projects" id="projects">
      <div className="forma-section-heading">
        <h2>Selected work</h2>
        <div className="forma-filters" aria-label="Project categories">
          {["All projects", "Residential", "Interiors"].map((i) => (
            <button
              key={i}
              onClick={() => setFilter(i)}
              aria-pressed={filter === i}
            >
              {i}
            </button>
          ))}
        </div>
      </div>
      <div className="forma-project-grid">
        {projects
          .filter((i) => filter === "All projects" || i.type === filter)
          .map((i) => (
            <ProjectCard key={i.name} project={i} />
          ))}
      </div>
    </section>
  );
}
