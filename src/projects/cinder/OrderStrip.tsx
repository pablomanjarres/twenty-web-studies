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
        <span className="cinder-label">Your grind</span>
        <div>
          {grinds.map((name) => (
            <button
              key={name}
              aria-pressed={grind === name}
              onClick={() => onGrind(name)}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
      <div className="cinder-order-quantity">
        <span className="cinder-label">Bags / 250 g</span>
        <Quantity value={quantity} onChange={onQuantity} />
      </div>
      <button className="cinder-order-button" onClick={onAdd}>
        Add {coffee.name} — {money(coffee.price * quantity)}{" "}
        <ArrowRight size={18} />
      </button>
    </section>
  );
}
