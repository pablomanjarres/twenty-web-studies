import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../data";

export function Projects({ search }: { search: string }) {
  const [category, setCategory] = useState("All projects");
  const visible = projects.filter(
    (i) =>
      (category === "All projects" || i.category === category) &&
      `${i.name} ${i.client}`.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <section className="orbit-projects" id="projects">
      <div className="orbit-section-heading">
        <h2>
          Active projects <span>3</span>
        </h2>
        <select
          aria-label="Filter projects"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {["All projects", "Design", "Development", "Marketing"].map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
      </div>
      <div className="orbit-project-grid">
        {visible.map((i) => (
          <ProjectCard key={i.name} project={i} />
        ))}
        {visible.length === 0 && (
          <p className="orbit-empty">
            No projects match your search. Try another name.
          </p>
        )}
      </div>
    </section>
  );
}
