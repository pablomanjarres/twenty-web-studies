import { image, type Formula } from "./data";
export function TextureStudy({ formula }: { formula: Formula }) {
  return (
    <section className="vale-texture-study">
      <div className="vale-texture-copy">
        <span className="vale-label">A closer look / {formula.number}</span>
        <h2>{formula.textureName}</h2>
        <p>{formula.use}</p>
        <dl>
          <div>
            <dt>When</dt>
            <dd>{formula.timing}</dd>
          </div>
          <div>
            <dt>Where</dt>
            <dd>Within your daily ritual</dd>
          </div>
          <div>
            <dt>Finish</dt>
            <dd>A moment to yourself</dd>
          </div>
        </dl>
      </div>
      <figure>
        <img
          src={image(formula.texture)}
          alt={`${formula.name} material texture study`}
          loading="lazy"
        />
        <figcaption>Texture study / {formula.name}</figcaption>
      </figure>
    </section>
  );
}
