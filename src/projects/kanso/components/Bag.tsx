import { X, ArrowRight } from "lucide-react";
import { image, money, type CartLine } from "../data";
import { Dialog } from "./Dialog";
export function Bag({
  items,
  onClose,
  onRemove,
}: {
  items: CartLine[];
  onClose: () => void;
  onRemove: (id: string) => void;
}) {
  const total = items.reduce(
    (sum, line) => sum + line.product.price * line.quantity,
    0,
  );
  return (
    <Dialog
      label="kanso-bag-title"
      className="kanso-bag-dialog"
      onClose={onClose}
    >
      <div className="kanso-bag-top">
        <h2 id="kanso-bag-title">Your objects.</h2>
        <button aria-label="Close bag" onClick={onClose}>
          <X size={20} />
        </button>
      </div>
      {items.length ? (
        <>
          <div className="kanso-bag-items">
            {items.map(({ product, quantity }) => (
              <article key={product.id}>
                <img src={image(product.image)} alt={product.name} />
                <div>
                  <h3>{product.name}</h3>
                  <p>
                    {product.glaze} / {quantity}{" "}
                    {quantity === 1 ? "piece" : "pieces"}
                  </p>
                  <strong>{money(product.price * quantity)}</strong>
                </div>
                <button
                  aria-label={`Remove ${product.name}`}
                  onClick={() => onRemove(product.id)}
                >
                  <X size={15} />
                </button>
              </article>
            ))}
          </div>
          <div className="kanso-bag-total">
            <span>Subtotal</span>
            <strong>{money(total)}</strong>
          </div>
          <p className="kanso-detail-note">
            Your selection is saved for this visit.
          </p>
        </>
      ) : (
        <div className="kanso-empty-bag">
          <p>A little room for something useful.</p>
          <a href="#objects" onClick={onClose}>
            Return to the shelf <ArrowRight size={16} />
          </a>
        </div>
      )}
      <button className="kanso-add" onClick={onClose}>
        Keep looking <ArrowRight size={16} />
      </button>
    </Dialog>
  );
}
