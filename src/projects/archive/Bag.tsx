import { useEffect } from "react";
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
  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [onClose]);
  return (
    <div className="archive-bag-backdrop" onClick={onClose}>
      <section
        className="archive-bag-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="archive-bag-title"
        onClick={(e) => e.stopPropagation()}
      >
        <header>
          <h2 id="archive-bag-title">Your bag.</h2>
          <button autoFocus onClick={onClose} aria-label="Close shopping bag">
            <X size={24} />
          </button>
        </header>
        {items.length ? (
          items.map((item) => {
            const p = products.find((p) => p.id === item.id)!;
            return (
              <div className="archive-bag-row" key={item.id + item.size}>
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
          <p className="archive-bag-empty">
            Your next favorite piece is waiting.
            <br />
            Explore the current edit.
          </p>
        )}
        <div className="archive-bag-total">
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
        <button className="archive-continue" onClick={onClose}>
          Continue exploring <ArrowRight size={18} />
        </button>
      </section>
    </div>
  );
}
