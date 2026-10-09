import { Droplets, Sprout } from "lucide-react";
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
        <div className="vale-ingredient-pair">
          <div>
            <Sprout size={22} />
            <strong>{formula.ingredient}</strong>
            <span>A botanical beginning.</span>
          </div>
          <div>
            <Droplets size={22} />
            <strong>{formula.secondary}</strong>
            <span>A part of the texture.</span>
          </div>
        </div>
        <p className="vale-texture-timing">
          A little moment, {formula.timing.toLowerCase()}.
        </p>
      </div>
    </section>
  );
}
