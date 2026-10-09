import { X } from "lucide-react";
import { useDialog } from "../../shared/useDialog";
import { image, money, type Selection } from "./data";
export function SelectionBag({
  items,
  onClose,
  onRemove,
}: {
  items: Selection[];
  onClose: () => void;
  onRemove: (index: number) => void;
}) {
  const ref = useDialog<HTMLDivElement>(onClose);
  return (
    <div className="vale-bag-backdrop" onClick={onClose}>
      <div
        ref={ref}
        className="vale-selection-bag"
        role="dialog"
        aria-modal="true"
        aria-labelledby="vale-bag-title"
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="vale-bag-top">
          <h2 id="vale-bag-title">Your ritual.</h2>
          <button aria-label="Close ritual bag" onClick={onClose}>
            <X size={19} />
          </button>
        </div>
        {items.length ? (
          <>
            {items.map(({ formula, volume }, index) => (
              <article key={`${formula.id}-${index}`}>
                <img src={image(formula.image)} alt={formula.name} />
                <div>
                  <h3>{formula.name}</h3>
                  <p>{formula.volumes[volume].label}</p>
                  <span>{money(formula.volumes[volume].price)}</span>
                </div>
                <button
                  aria-label={`Remove ${formula.name}`}
                  onClick={() => onRemove(index)}
                >
                  <X size={14} />
                </button>
              </article>
            ))}
            <div className="vale-bag-total">
              <span>Selection total</span>
              <strong>
                {money(
                  items.reduce(
                    (sum, item) =>
                      sum + item.formula.volumes[item.volume].price,
                    0,
                  ),
                )}
              </strong>
            </div>
            <p>Your selection is saved for this visit.</p>
          </>
        ) : (
          <p>A little space for the first step.</p>
        )}
        <button className="vale-add" onClick={onClose}>
          Continue exploring
        </button>
      </div>
    </div>
  );
}
