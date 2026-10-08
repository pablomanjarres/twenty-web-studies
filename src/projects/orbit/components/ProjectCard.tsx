import { MoreHorizontal, Clock3 } from "lucide-react";
import { Avatar } from "./Avatar";
import { projects } from "../data";

export function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <article className="orbit-project">
      <div className="orbit-project-top">
        <span style={{ background: project.color, color: project.ink }}>
          {project.icon}
        </span>
        <span className="orbit-project-category">{project.category}</span>
        <button
          aria-label={`More about ${project.name}`}
          onClick={() =>
            document
              .getElementById("tasks")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <MoreHorizontal size={18} />
        </button>
      </div>
      <h3>{project.name}</h3>
      <p>{project.client}</p>
      <div className="orbit-project-progress-label">
        <span>Progress</span>
        <strong>{project.progress}%</strong>
      </div>
      <div className="orbit-progress-track">
        <i style={{ width: project.progress + "%", background: project.ink }} />
      </div>
      <div className="orbit-project-bottom">
        <div className="orbit-avatar-stack">
          {project.team.map((id) => (
            <Avatar key={id} id={id} />
          ))}
        </div>
        <span>
          <Clock3 size={11} />
          {project.date}
        </span>
      </div>
      <span className="orbit-project-task-count">{project.tasks}</span>
    </article>
  );
}
