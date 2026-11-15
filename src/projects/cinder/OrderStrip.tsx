import { ArrowRight } from "lucide-react";
import { grinds, money, type Coffee, type Grind } from "./data";
import { Quantity } from "./Quantity";
export function OrderStrip({
  coffee,
  grind,
  onGrind,
  quantity,
  onQuantity,
  onAdd,
}: {
  coffee: Coffee;
  grind: Grind;
  onGrind: (grind: Grind) => void;
  quantity: number;
  onQuantity: (value: number) => void;
  onAdd: () => void;
}) {
  return (
    <section className="cinder-order-strip" aria-label="Coffee order">
      <div className="cinder-grind-controls">
        <span className="cinder-label" id="cinder-grind-label">
          Your grind
        </span>
        <div
          className="cinder-segmented"
          role="group"
          aria-labelledby="cinder-grind-label"
        >
          {grinds.map((name) => (
            <button
              key={name}
              className="cinder-ui"
              aria-pressed={grind === name}
              onClick={() => onGrind(name)}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
      <div className="cinder-order-quantity">
        <span className="cinder-label cinder-sr-only-phone">Bags / 250 g</span>
        <Quantity value={quantity} onChange={onQuantity} />
      </div>
      <button className="cinder-order-button cinder-ui" onClick={onAdd}>
        <span>Add {coffee.name}</span>
        <span className="cinder-order-price cinder-price">
          {money(coffee.price * quantity)}
        </span>
        <ArrowRight size={20} aria-hidden="true" />
      </button>
    </section>
  );
}
