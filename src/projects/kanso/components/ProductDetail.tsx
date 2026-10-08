import { useState } from "react";
import { X, Check, ArrowRight } from "lucide-react";
import { image, money, type Product } from "../data";
import { Dialog } from "./Dialog";
import { Quantity } from "./Quantity";
export function ProductDetail({
  product,
  onClose,
  onAdd,
  onBag,
}: {
  product: Product;
  onClose: () => void;
  onAdd: (product: Product, quantity: number) => void;
  onBag: () => void;
}) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  return (
    <Dialog
      label="kanso-product-title"
      className="kanso-product-dialog"
      onClose={onClose}
    >
      <button
        className="kanso-dialog-close"
        aria-label="Close object details"
        onClick={onClose}
      >
        <X size={20} />
      </button>
      <div className="kanso-detail-image">
        <img src={image(product.image)} alt={product.name} />
      </div>
      <div className="kanso-detail-copy">
        <span className="kanso-label">Collection 01 / {product.type}</span>
        <h2 id="kanso-product-title">{product.name}</h2>
        <p>{product.description}</p>
        <dl>
          <div>
            <dt>Dimensions</dt>
            <dd>{product.size}</dd>
          </div>
          <div>
            <dt>Capacity</dt>
            <dd>{product.capacity}</dd>
          </div>
          <div>
            <dt>Finish</dt>
            <dd>{product.finish}</dd>
          </div>
          <div>
            <dt>Material</dt>
            <dd>Hand-thrown stoneware</dd>
          </div>
        </dl>
        <div className="kanso-detail-order">
          <Quantity
            quantity={quantity}
            onChange={(value) => {
              setQuantity(value);
              setAdded(false);
            }}
          />
          <button
            className="kanso-add"
            onClick={() => {
              onAdd(product, quantity);
              setAdded(true);
            }}
          >
            {added ? (
              <>
                <Check size={16} /> Added to your bag
              </>
            ) : (
              <>
                Add to bag — {money(product.price * quantity)}{" "}
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </div>
        {added && (
          <button className="kanso-view-bag" onClick={onBag}>
            View your bag →
          </button>
        )}
        <p className="kanso-detail-note" role={added ? "status" : undefined}>
          {added
            ? `${quantity} ${product.name.toLowerCase()}${quantity > 1 ? "s" : ""} added. Your selection is saved for this visit.`
            : "Small variations in form and glaze are part of each piece."}
        </p>
      </div>
    </Dialog>
  );
}
