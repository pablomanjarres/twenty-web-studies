import { useDialog } from "../../shared/useDialog";
import { ArrowRight, Minus, X } from "lucide-react";
import { image, products } from "./data";
import type { BagItem } from "./data";

export function Bag({
  items,
  onClose,
  onRemove,
}: {
  items: BagItem[];
  onClose: () => void;
  onRemove: (id: string, size: string) => void;
}) {
  const dialog = useDialog<HTMLElement>(onClose);
  return (
    <div className="archive-original-bag-backdrop" onClick={onClose}>
      <section
        ref={dialog}
        tabIndex={-1}
        className="archive-original-bag-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="archive-original-bag-title"
        onClick={(e) => e.stopPropagation()}
      >
        <header>
          <h2 id="archive-original-bag-title">Your bag.</h2>
          <button onClick={onClose} aria-label="Close shopping bag">
            <X size={24} />
          </button>
        </header>
        {items.length ? (
          items.map((item) => {
            const p = products.find((p) => p.id === item.id)!;
            return (
              <div
                className="archive-original-bag-row"
                key={item.id + item.size}
              >
                <img src={image(p.image)} alt={p.name} />
                <div>
                  <b>{p.name}</b>
                  <small>
                    {p.category === "Accessories" ? "One size" : item.size} /
                    Quantity {item.quantity}
                  </small>
                  <span>£{p.price * item.quantity}</span>
                </div>
                <button
                  onClick={() => onRemove(item.id, item.size)}
                  aria-label={"Remove one " + p.name}
                >
                  <Minus size={17} />
                </button>
              </div>
            );
          })
        ) : (
          <p className="archive-original-bag-empty">
            Your next favorite piece is waiting.
            <br />
            Explore the current edit.
          </p>
        )}
        <div className="archive-original-bag-total">
          <span>Subtotal</span>
          <b>
            £
            {items.reduce(
              (total, item) =>
                total +
                products.find((p) => p.id === item.id)!.price * item.quantity,
              0,
            )}
          </b>
        </div>
        <button className="archive-original-continue" onClick={onClose}>
          Continue exploring <ArrowRight size={18} />
        </button>
      </section>
    </div>
  );
}
