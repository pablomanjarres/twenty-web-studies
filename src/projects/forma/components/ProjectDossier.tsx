import { SpatialPlan } from "./SpatialPlan";
import type { Project } from "../data";
export function ProjectDossier({ project }: { project: Project }) {
  return (
    <section className="forma-dossier" id="dossier">
      <div>
        <span className="forma-label">Project dossier</span>
        <h2>{project.short}</h2>
        <p className="forma-prose">{project.description}</p>
        <dl>
          {[
            ["Location", project.location],
            ["Year", project.year],
            ["Area", project.area],
            ["Material palette", project.materials],
          ].map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <SpatialPlan project={project} />
    </section>
  );
}
