import type { CSSProperties, ReactNode } from "react";
import { asset, type DetailCrop, type Project } from "../data";

function DetailFigure({
  className,
  image,
  crop,
  children,
}: {
  className: string;
  image: string;
  crop: DetailCrop;
  children: ReactNode;
}) {
  const style = { "--focus": crop.focus, "--zoom": crop.zoom } as CSSProperties;
  return (
    <figure className={`forma-detail ${className}`}>
      <div style={style}>
        <img key={image} src={asset(image)} alt={crop.alt} loading="lazy" />
      </div>
      <figcaption>{children}</figcaption>
    </figure>
  );
}

export function MaterialStory({ project }: { project: Project }) {
  return (
    <section className="forma-materials">
      <DetailFigure
        className="forma-material-wide"
        image={project.image}
        crop={project.details.wide}
      >
        <span className="forma-label">02 / Light as a material</span>
      </DetailFigure>
      <div>
        <span className="forma-label">The details that endure</span>
        <h2 className="forma-statement">
          Honest materials.
          <br />A measured touch.
        </h2>
        <p className="forma-prose">
          We look for the quiet relationships: a grain against a shadow, the
          edge of a threshold, the way a room holds the afternoon.
        </p>
        <DetailFigure
          className="forma-material-close"
          image={project.image}
          crop={project.details.close}
        >
          {project.materials}
        </DetailFigure>
      </div>
    </section>
  );
}
