import { useDialog } from "../../shared/useDialog";
import { ArrowRight, Heart, Check, X } from "lucide-react";
import { image, pieces } from "./data";

export function PieceDetails({
  piece,
  onClose,
  onSave,
  saved,
}: {
  piece: (typeof pieces)[number];
  onClose: () => void;
  onSave: () => void;
  saved: boolean;
}) {
  const dialog = useDialog<HTMLElement>(onClose);
  return (
    <div className="estelle-detail-backdrop" onClick={onClose}>
      <section
        ref={dialog}
        tabIndex={-1}
        className="estelle-detail"
        role="dialog"
        aria-modal="true"
        aria-labelledby="estelle-detail-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="estelle-detail-close"
          onClick={onClose}
          aria-label="Close piece details"
        >
          <X size={20} />
        </button>
        <img src={image(piece.image)} alt={piece.name} />
        <div>
          <span>The Solstice Collection</span>
          <h2 id="estelle-detail-title">{piece.name}</h2>
          <p>
            {piece.material} Crafted with care, balanced to feel beautiful from
            every angle.
          </p>
          <b>{piece.price}</b>
          <button className="estelle-detail-save" onClick={onSave}>
            {saved ? (
              <>
                <Check size={16} />
                Saved to your collection
              </>
            ) : (
              <>
                <Heart size={16} />
                Keep this piece close
              </>
            )}
          </button>
          <a href="#estelle-visit" onClick={onClose}>
            See it in the atelier <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
