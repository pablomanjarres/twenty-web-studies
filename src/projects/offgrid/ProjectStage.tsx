import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projects, asset, type Project } from "./data";
export function ProjectStage({
  project,
  onSelect,
}: {
  project: Project;
  onSelect: (id: number) => void;
}) {
  return (
    <section className="fg-work" id="work">
      <header>
        <p>WORK, WITH A POINT OF VIEW.</p>
        <span>0{project.id} / 03</span>
      </header>
      <div className="fg-work-index">
        {projects.map((p) => (
          <button
            key={p.id}
            aria-pressed={p.id === project.id}
            onClick={() => onSelect(p.id)}
          >
            {p.name}
            <small>{p.discipline}</small>
            <ArrowUpRight size={24} />
          </button>
        ))}
      </div>
      <div className={`fg-case-stage fg-case-${project.id}`}>
        <img
          src={asset(project.image)}
          alt={
            project.id === 1
              ? "City architecture in an experimental cultural identity composition"
              : project.id === 2
                ? "Glass reflections within a material-led identity study"
                : "Light and steel architecture inside an exploratory editorial composition"
          }
        />
        <div className="fg-case-type">
          <span>
            {project.id === 1
              ? "OUT OF THE ORDINARY"
              : project.id === 2
                ? "A FIELD GUIDE TO POSSIBILITY"
                : "FOR THE OUTWARD-LOOKING"}
          </span>
          <strong>
            {project.id === 1 ? (
              <>
                OTHER
                <br />
                LANDS
              </>
            ) : project.id === 2 ? (
              <>
                MATTER
                <br />
                <i>IN FORM.</i>
              </>
            ) : (
              <>
                FAR
                <br />
                OUT
              </>
            )}
          </strong>
          <small>
            {project.id === 1
              ? "CULTURE DOESN’T STAND STILL."
              : project.id === 2
                ? "LOOK CLOSER. THINK FURTHER."
                : "A JOURNAL OF NEW PERSPECTIVES."}
          </small>
        </div>
        <div className="fg-case-print">
          <span>{project.name}</span>
          <i>0{project.id}</i>
          <small>
            {project.discipline}
            <br />
            {project.year}
          </small>
        </div>
      </div>
      <div className="fg-case-details">
        <h2>
          {project.name}
          <ArrowRight size={31} />
        </h2>
        <p>{project.summary}</p>
        <div>
          <span>WHAT WE DID</span>
          {project.services.map((s) => (
            <i key={s}>{s}</i>
          ))}
        </div>
      </div>
    </section>
  );
}
