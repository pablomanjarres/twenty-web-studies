import { useState, useEffect } from "react";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { formulas, image, money, type Formula } from "./data";
export function SpecimenSheet({
  formula,
  active,
  volume,
  onSelect,
  onVolume,
  onAdd,
}: {
  formula: Formula;
  active: number;
  volume: number;
  onSelect: (index: number) => void;
  onVolume: (index: number) => void;
  onAdd: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  useEffect(() => setExpanded(false), [formula.id]);
  return (
    <section id="formulas" className="vale-formulas">
      <aside className="vale-formula-index">
        <span className="vale-label">A botanical index</span>
        <h1>
          Care, in <br />
          three forms.
        </h1>
        <p>
          A small collection.
          <br />A considered daily ritual.
        </p>
        <nav aria-label="Select a formula">
          {formulas.map((item, index) => (
            <button
              key={item.id}
              aria-pressed={active === index}
              onClick={() => onSelect(index)}
            >
              <small>{item.number}</small>
              <span>
                {item.name}
                <em>{item.kind}</em>
              </span>
            </button>
          ))}
        </nav>
        <div className="vale-index-note">
          <span>Plant / Texture / Ritual</span>
          <span>
            Formulation notes
            <br />
            Collection 01
          </span>
        </div>
      </aside>
      <div className="vale-specimen-sheet">
        <div className="vale-sheet-top">
          <span>Specimen / {formula.number}</span>
          <span>{formula.latin}</span>
          <span>Botanical study</span>
        </div>
        <div className="vale-specimen-stage">
          <img
            className={`vale-pressed-plant vale-plant-${formula.id}`}
            src={image(formula.specimen)}
            alt={`${formula.plant} botanical specimen`}
            width="1254"
            height="1254"
          />
          <img
            className={`vale-formula-bottle vale-bottle-${formula.id}`}
            src={image(formula.image)}
            alt={`${formula.name} frosted green glass container`}
            width="1254"
            height="1254"
          />
          <div className="vale-plant-caption">
            <span>01 / Botanical base</span>
            <strong>{formula.plant}</strong>
            <small>{formula.latin}</small>
          </div>
          <div className="vale-bottle-caption">
            <span>02 / The vessel</span>
            <strong>Frosted glass</strong>
            <small>Stone-tone closure</small>
          </div>
          <button
            className={`vale-ingredient-note ${expanded ? "is-open" : ""}`}
            aria-expanded={expanded}
            onClick={() => setExpanded(!expanded)}
          >
            <span>03 / Ingredient note</span>
            <strong>
              {formula.ingredient}
              {expanded ? <Minus size={13} /> : <Plus size={13} />}
            </strong>
            <p>
              {expanded
                ? formula.explanation
                : `With ${formula.secondary.toLowerCase()}. Explore the formula.`}
            </p>
          </button>
          <span className="vale-cross vale-cross-one">+</span>
          <span className="vale-cross vale-cross-two">+</span>
        </div>
        <div className="vale-formula-caption">
          <div>
            <span className="vale-label">Formula {formula.number}</span>
            <h2>{formula.name}</h2>
            <p>{formula.note}</p>
          </div>
          <div className="vale-formula-order">
            <div className="vale-volumes" aria-label="Bottle volume">
              {formula.volumes.map((item, index) => (
                <button
                  key={item.label}
                  aria-pressed={volume === index}
                  onClick={() => onVolume(index)}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button className="vale-add" onClick={onAdd}>
              Add to ritual — {money(formula.volumes[volume].price)}{" "}
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
