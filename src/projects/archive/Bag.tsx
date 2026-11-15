import { useDialog } from "../../shared/useDialog";
import { ArrowRight, Minus, X } from "lucide-react";
import { bagSubtotal, image, productById } from "./data";
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
    <div className="archive-bag-backdrop" onClick={onClose}>
      <section
        ref={dialog}
        tabIndex={-1}
        className="archive-bag-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="archive-bag-title"
        onClick={(e) => e.stopPropagation()}
      >
        <header>
          <h2 id="archive-bag-title">Your bag.</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close shopping bag"
          >
            <X size={24} aria-hidden="true" />
          </button>
        </header>
        {items.length ? (
          items.map((item) => {
            const p = productById(item.id);
            return (
              <div className="archive-bag-row" key={item.id + item.size}>
                <img src={image(p.image)} alt={p.name} />
                <div>
                  <b>{p.name}</b>
                  <small>
                    {item.size} / Quantity {item.quantity}
                  </small>
                  <span>£{p.price * item.quantity}</span>
                </div>
                <button
                  onClick={() => onRemove(item.id, item.size)}
                  aria-label={"Remove one " + p.name}
                >
                  <Minus size={17} aria-hidden="true" />
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
          <b>£{bagSubtotal(items)}</b>
        </div>
        <button className="archive-continue" onClick={onClose}>
          Continue exploring <ArrowRight size={18} aria-hidden="true" />
        </button>
      </section>
    </div>
  );
}
