import { ArrowRight, Minus, X } from "lucide-react";
import { useDialog } from "../../shared/useDialog";
import { products } from "./data";
import { ProductIllustration } from "./ProductIllustration";

export function RitualDrawer({
  selected,
  onClose,
  onSelect,
}: {
  selected: string[];
  onClose: () => void;
  onSelect: (name: string) => void;
}) {
  const dialog = useDialog<HTMLElement>(onClose);
  const chosen = products.filter((product) => selected.includes(product.name));
  return (
    <div className="va-drawer-overlay" onClick={onClose}>
      <section
        ref={dialog}
        tabIndex={-1}
        className="va-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="va-drawer-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="va-drawer-heading">
          <h2 id="va-drawer-title">Your little ritual.</h2>
          <button onClick={onClose} aria-label="Close ritual">
            <X size={21} />
          </button>
        </div>
        <p>
          {chosen.length
            ? "A thoughtful start to your everyday."
            : "Choose a daily essential to begin your ritual."}
        </p>
        {chosen.map((product) => (
          <div className="va-drawer-item" key={product.name}>
            <ProductIllustration product={product} />
            <div>
              <strong>{product.name}</strong>
              <span>{product.kind}</span>
              <small>
                {product.size} · ${product.price}
              </small>
            </div>
            <button
              onClick={() => onSelect(product.name)}
              aria-label={`Remove ${product.name}`}
            >
              <Minus size={17} />
            </button>
          </div>
        ))}
        <div className="va-drawer-total">
          <span>Your selection</span>
          <strong>
            ${chosen.reduce((total, product) => total + product.price, 0)}
          </strong>
        </div>
        <button className="va-ritual-button" onClick={onClose}>
          Keep exploring <ArrowRight size={17} />
        </button>
      </section>
    </div>
  );
}
