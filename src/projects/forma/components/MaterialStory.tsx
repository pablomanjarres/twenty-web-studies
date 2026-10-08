import { asset, type Project } from "../data";
export function MaterialStory({ project }: { project: Project }) {
  return (
    <section className="forma-materials">
      <figure className="forma-material-wide">
        <img
          src={asset(project.image)}
          alt={`Material detail from ${project.name}`}
        />
        <figcaption>02 / LIGHT AS A MATERIAL</figcaption>
      </figure>
      <div>
        <span className="forma-kicker">THE DETAILS THAT ENDURE</span>
        <h2>
          Honest materials.
          <br />A measured touch.
        </h2>
        <p>
          We look for the quiet relationships: a grain against a shadow, the
          edge of a threshold, the way a room holds the afternoon.
        </p>
        <figure className="forma-material-close">
          <img
            src={asset(project.image)}
            alt="Close view of timber, soft furnishings, and natural light"
          />
          <figcaption>{project.materials}</figcaption>
        </figure>
      </div>
    </section>
  );
}
