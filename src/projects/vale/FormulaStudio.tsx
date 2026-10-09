import { ArrowUpRight, Plus } from "lucide-react";
import { formulas, image, money, type Formula } from "./data";

type Props = {
  formula: Formula;
  active: number;
  volume: number;
  onSelect: (index: number) => void;
  onVolume: (index: number) => void;
  onAdd: () => void;
};

function FormulaSelector({
  active,
  onSelect,
}: Pick<Props, "active" | "onSelect">) {
  return (
    <div className="vale-formula-switch" aria-label="Choose your formula">
      {formulas.map((formula, index) => (
        <button aria-pressed={active === index} onClick={() => onSelect(index)}>
          {formula.name}
        </button>
      ))}
    </div>
  );
}

function PurchaseTray({
  formula,
  volume,
  onVolume,
  onAdd,
}: Pick<Props, "formula" | "volume" | "onVolume" | "onAdd">) {
  return (
    <div className="vale-purchase-tray">
      <div className="vale-selected-formula" aria-live="polite">
        <div>
          <span>{formula.kind}</span>
          <h2>{formula.name}</h2>
        </div>
        <strong>{money(formula.volumes[volume].price)}</strong>
      </div>
      <div className="vale-purchase-actions">
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
          Add to ritual <Plus size={18} />
        </button>
      </div>
    </div>
  );
}

export function FormulaStudio(props: Props) {
  const { formula, active, onSelect } = props;
  return (
    <section id="formulas" className="vale-studio">
      <div className="vale-studio-copy">
        <span className="vale-studio-intro">
          Botanical care, beautifully simple.
        </span>
        <h1>
          Softer
          <br />
          by nature.
        </h1>
        <p>
          A fresh start. A light layer. A soft finish.
          <br />
          Find a little care for your every day.
        </p>
        <FormulaSelector active={active} onSelect={onSelect} />
      </div>
      <div className={`vale-product-stage vale-stage-${formula.id}`}>
        <div className="vale-studio-halo" aria-hidden="true" />
        <div className="vale-studio-plinth" aria-hidden="true" />
        <img
          className="vale-studio-product"
          src={image(formula.image)}
          alt={`${formula.name} in frosted green glass with a stone-tone closure`}
          width="1254"
          height="1254"
        />
        <details className="vale-ingredient-capsule" key={formula.id}>
          <summary>
            <span className="vale-ingredient-orb" aria-hidden="true" />
            <span>
              <small>At the heart of {formula.name}</small>
              {formula.ingredient}
            </span>
          </summary>
          <p>{formula.explanation}</p>
        </details>
      </div>
      <PurchaseTray {...props} />
      <a className="vale-discover" href="#texture">
        A closer look <ArrowUpRight size={17} />
      </a>
    </section>
  );
}
