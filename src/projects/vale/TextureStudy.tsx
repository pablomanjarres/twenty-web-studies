import { image, type Formula } from "./data";

export function TextureStudy({ formula }: { formula: Formula }) {
  return (
    <section id="texture" className="vale-texture-study">
      <figure>
        <img
          src={image(formula.texture)}
          alt={`${formula.name} material texture closeup`}
          loading="lazy"
        />
        <figcaption>{formula.name}, up close.</figcaption>
      </figure>
      <div className="vale-texture-copy">
        <span className="vale-section-intro">Feel the difference.</span>
        <h2>{formula.textureName}</h2>
        <p>{formula.use}</p>
        <div className="vale-specimen">
          <img
            src={image(formula.specimen)}
            alt=""
            width="160"
            height="160"
            loading="lazy"
          />
          <div>
            <strong>{formula.plant}</strong>
            <span>{formula.latin}</span>
          </div>
        </div>
        <dl className="vale-texture-facts">
          <div>
            <dt>Key ingredient</dt>
            <dd>{formula.ingredient}</dd>
          </div>
          <div>
            <dt>Alongside</dt>
            <dd>{formula.secondary}</dd>
          </div>
          <div>
            <dt>When</dt>
            <dd>{formula.timing}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
