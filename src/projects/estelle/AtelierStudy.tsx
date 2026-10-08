import { image } from "./data";
export function AtelierStudy() {
  return (
    <section className="estelle-atelier-study">
      <div className="estelle-section-label">
        <span>02 / At the bench</span>
        <span>From a flat sheet, a new gesture</span>
      </div>
      <figure>
        <img
          src={image("workbench")}
          alt="Jeweller's pliers, file, snips, loupe and folded gold forms on an ivory stone workbench"
          loading="lazy"
        />
        <figcaption>
          <span>A surface, a curve, a patient hand.</span>
          <span>Study of tools & unfinished forms</span>
        </figcaption>
      </figure>
      <div className="estelle-atelier-text">
        <h2>
          The quiet work
          <br />
          behind the object.
        </h2>
        <p>
          Our language begins with a fold. A thin edge, a soft hollow, the space
          between two surfaces. At the bench, each shape is considered as both
          an object and something that moves with a body.
        </p>
        <p>
          The final polish is only one part of the piece. Weight, contact and
          proportion matter just as much. We return to the same curve until it
          feels resolved from every side.
        </p>
      </div>
    </section>
  );
}
