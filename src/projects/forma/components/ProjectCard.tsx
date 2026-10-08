import { ArrowUpRight } from "lucide-react";
import { asset, projects } from "../data";

export function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <article className="forma-project-card">
      <a href="#contact" aria-label={`Discuss ${project.name}`}>
        <img
          src={asset(project.image)}
          alt={`${project.type} project ${project.name}`}
        />
        <span className="forma-project-arrow">
          <ArrowUpRight size={23} />
        </span>
      </a>
      <div>
        <h3>{project.name}</h3>
        <span>{project.year}</span>
      </div>
      <p>
        {project.type} / {project.location}
      </p>
    </article>
  );
}
