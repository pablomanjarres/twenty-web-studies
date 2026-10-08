import { X, ArrowRight } from "lucide-react";
import { useDialog } from "../../shared/useDialog";
import { image, money, type CartItem } from "./data";
import { Quantity } from "./Quantity";
export function Basket({
  items,
  onClose,
  onChange,
}: {
  items: CartItem[];
  onClose: () => void;
  onChange: (index: number, quantity: number) => void;
}) {
  const ref = useDialog<HTMLElement>(onClose);
  return (
    <div className="cinder-basket-backdrop" onClick={onClose}>
      <section
        ref={ref}
        tabIndex={-1}
        className="cinder-basket"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cinder-basket-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="cinder-basket-top">
          <h2 id="cinder-basket-title">Your next cups.</h2>
          <button onClick={onClose} aria-label="Close coffee basket">
            <X size={20} />
          </button>
        </div>
        {items.length ? (
          items.map((item, index) => (
            <article key={`${item.coffee.id}-${item.grind}`}>
              <img src={image(item.coffee.image)} alt={item.coffee.name} />
              <div>
                <h3>{item.coffee.name}</h3>
                <p>{item.grind} / 250 g</p>
                <strong>{money(item.coffee.price * item.quantity)}</strong>
              </div>
              <Quantity
                value={item.quantity}
                min={0}
                max={Math.max(8, item.quantity)}
                onChange={(value) => onChange(index, value)}
                label={item.coffee.name}
              />
            </article>
          ))
        ) : (
          <p>Your basket is waiting for a good coffee.</p>
        )}
        <div className="cinder-basket-total">
          <span>Basket total</span>
          <strong>
            {money(
              items.reduce(
                (sum, item) => sum + item.coffee.price * item.quantity,
                0,
              ),
            )}
          </strong>
        </div>
        <p className="cinder-basket-note">
          Your coffee selection is saved for this visit.
        </p>
        <button className="cinder-order-button" onClick={onClose}>
          Keep browsing <ArrowRight size={16} />
        </button>
      </section>
    </div>
  );
}
