import { ArrowRight, Minus, Plus, X } from "lucide-react";
import { useDialog } from "../../shared/useDialog";
import { coffees } from "./data";
import type { CartItem } from "./data";

export function Basket({
  items,
  onClose,
  onChange,
}: {
  items: CartItem[];
  onClose: () => void;
  onChange: (index: number, delta: number) => void;
}) {
  const dialog = useDialog<HTMLElement>(onClose);
  const total = items.reduce(
    (sum, item) =>
      sum +
      (coffees.find((coffee) => coffee.name === item.name)?.price ?? 0) *
        item.quantity,
    0,
  );
  return (
    <div className="ci-basket-overlay" onClick={onClose}>
      <section
        ref={dialog}
        tabIndex={-1}
        className="ci-basket"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ci-basket-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="ci-basket-top">
          <h2 id="ci-basket-title">Your daily cups.</h2>
          <button onClick={onClose} aria-label="Close basket">
            <X size={22} />
          </button>
        </div>
        {items.length === 0 ? (
          <p>Your basket is waiting for a good coffee.</p>
        ) : (
          items.map((item, index) => (
            <div className="ci-basket-item" key={`${item.name}-${item.grind}`}>
              <div>
                <strong>{item.name}</strong>
                <span>{item.grind} · 250 g</span>
              </div>
              <div className="ci-quantity">
                <button
                  onClick={() => onChange(index, -1)}
                  aria-label={`Remove one ${item.name}`}
                >
                  <Minus size={15} />
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => onChange(index, 1)}
                  aria-label={`Add one ${item.name}`}
                >
                  <Plus size={15} />
                </button>
              </div>
            </div>
          ))
        )}
        <div className="ci-basket-total">
          <span>Basket total</span>
          <strong>${total}</strong>
        </div>
        <p className="ci-basket-note">
          Your coffee selection is saved while you explore the shop.
        </p>
        <button className="ci-yellow-button" onClick={onClose}>
          Keep browsing <ArrowRight size={17} />
        </button>
      </section>
    </div>
  );
}
