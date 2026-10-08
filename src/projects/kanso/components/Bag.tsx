import { useEffect, useRef } from "react";
import { ArrowUpRight, ArrowRight, ShoppingBag, Minus, X } from "lucide-react";
import { asset, Product } from "../data";

export function Bag({
  items,
  onClose,
  onRemove,
}: {
  items: Product[];
  onClose: () => void;
  onRemove: (index: number) => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    dialog.current?.showModal();
  }, []);
  return (
    <dialog
      aria-labelledby="kanso-bag-title"
      ref={dialog}
      className="kanso-bag-backdrop"
      onCancel={onClose}
    >
      <aside className="kanso-bag-panel" aria-labelledby="kanso-bag-title">
        <div>
          <h2 id="kanso-bag-title">Your good things.</h2>
          <button aria-label="Close bag" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        {items.length === 0 ? (
          <div className="kanso-empty-bag">
            <ShoppingBag size={30} />
            <p>A little room for something lovely.</p>
            <a href="#collection" onClick={onClose}>
              Explore the collection <ArrowUpRight size={17} />
            </a>
          </div>
        ) : (
          <>
            <div className="kanso-bag-items">
              {items.map((i, k) => (
                <article key={`${i.id}-${k}`}>
                  <img src={asset(i.image)} alt={i.name} />
                  <div>
                    <h3>{i.name}</h3>
                    <p>{i.material}</p>
                    <strong>€{i.price}</strong>
                  </div>
                  <button
                    aria-label={`Remove ${i.name}`}
                    onClick={() => onRemove(k)}
                  >
                    <Minus size={16} />
                  </button>
                </article>
              ))}
            </div>
            <div className="kanso-bag-total">
              <span>Subtotal</span>
              <strong>€{items.reduce((sum, i) => sum + i.price, 0)}</strong>
            </div>
            <p className="kanso-bag-note">
              Your selection is saved for this visit.
            </p>
            <button className="kanso-continue" onClick={onClose}>
              Keep exploring <ArrowRight size={17} />
            </button>
          </>
        )}
      </aside>
    </dialog>
  );
}
