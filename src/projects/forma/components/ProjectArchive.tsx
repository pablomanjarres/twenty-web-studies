import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { asset, projects } from "../data";

const phoneQuery = "(max-width: 760px)";

// On phones the index sits below the hero, so bring the swapped image into view.
function revealHero() {
  if (!window.matchMedia(phoneQuery).matches) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document
    .getElementById("home")
    ?.scrollIntoView({ behavior: reduce ? "instant" : "smooth" });
}

export function ProjectArchive({
  selected,
  onSelect,
}: {
  selected: number;
  onSelect: (index: number) => void;
}) {
  const project = projects[selected];
  const choose = (index: number) => {
    onSelect(index);
    revealHero();
  };
  return (
    <section className="forma-archive" id="home" aria-label="Selected work">
      <div className="forma-selected-project">
        <figure>
          <img
            key={project.image}
            src={asset(project.image)}
            alt={`${project.name}: a considered interior in natural materials and generous daylight`}
            fetchPriority="high"
          />
          <figcaption className="forma-label">
            <span>F / {String(selected + 1).padStart(2, "0")}</span>
            <span>
              {project.type} · {project.year}
            </span>
          </figcaption>
        </figure>
        <div className="forma-project-name" aria-live="polite">
          <h1>{project.name}</h1>
          <p>
            <span>{project.location}</span>
            <span>{project.area}</span>
            <span>{project.year}</span>
          </p>
          <a
            href="#dossier"
            aria-label={`Read ${project.name} project dossier`}
          >
            <ArrowDownRight size={24} strokeWidth={1.5} />
          </a>
        </div>
      </div>
      <aside className="forma-project-index">
        <div className="forma-index-title forma-label">
          <span>Selected work</span>
          <span>{String(projects.length).padStart(2, "0")}</span>
        </div>
        {projects.map((item, index) => {
          const current = index === selected;
          return (
            <button
              key={item.name}
              aria-pressed={current}
              onClick={() => choose(index)}
            >
              <span className="forma-record-meta forma-label">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{current ? "Viewing" : item.year}</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </span>
              <b>{item.name}</b>
              <small>{item.location}</small>
              <img src={asset(item.image)} alt="" />
            </button>
          );
        })}
        <div className="forma-index-note">
          <span className="forma-label">Our point of view</span>
          <p className="forma-statement">
            Space, shaped
            <br />
            by living.
          </p>
          <a className="forma-link" href="#practice">
            About the practice ↓
          </a>
        </div>
      </aside>
    </section>
  );
}
