import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { asset, projects } from "../data";
export function ProjectArchive({
  selected,
  onSelect,
}: {
  selected: number;
  onSelect: (index: number) => void;
}) {
  const project = projects[selected];
  return (
    <section className="forma-archive" id="home">
      <div className="forma-selected-project">
        <figure>
          <img
            key={project.image}
            src={asset(project.image)}
            alt={`${project.name}: a considered interior in natural materials and generous daylight`}
            fetchPriority="high"
          />
          <figcaption>
            <span>F / {String(selected + 1).padStart(2, "0")}</span>
            <span>
              {project.type.toUpperCase()} · {project.year}
            </span>
          </figcaption>
        </figure>
        <div className="forma-project-name" aria-live="polite">
          <h1>{project.name}</h1>
          <div>
            <span>{project.location}</span>
            <span>{project.area}</span>
          </div>
          <a
            href="#dossier"
            aria-label={`Read ${project.name} project dossier`}
          >
            <ArrowDownRight size={24} />
          </a>
        </div>
      </div>
      <aside className="forma-project-index">
        <div className="forma-index-title">
          <span>SELECTED WORK</span>
          <span>02</span>
        </div>
        {projects.map((item, index) => (
          <button
            key={item.name}
            aria-pressed={index === selected}
            onClick={() => onSelect(index)}
          >
            <div>
              <span>
                0{index + 1} / {item.year}
              </span>
              <ArrowUpRight size={14} />
            </div>
            <b>{item.name}</b>
            <small>{item.location}</small>
            <img src={asset(item.image)} alt="" />
          </button>
        ))}
        <div className="forma-index-note">
          <span>OUR POINT OF VIEW</span>
          <p>
            Space, shaped
            <br />
            by living.
          </p>
          <a href="#practice">About the practice ↓</a>
        </div>
      </aside>
    </section>
  );
}
