import { useState } from "react";
import { Plus } from "lucide-react";
import { asset, Product } from "../data";

export function ProductCard({
  product,
  onAdd,
}: {
  product: Product;
  onAdd: (p: Product) => void;
}) {
  const [added, setAdded] = useState(false);
  return (
    <article className="kanso-product">
      <div className="kanso-product-image">
        <img src={asset(product.image)} alt={product.name} />
        <button
          aria-label={`Add ${product.name} to bag`}
          onClick={() => {
            onAdd(product);
            setAdded(true);
            setTimeout(() => setAdded(false), 1800);
          }}
        >
          {added ? <span>Added</span> : <Plus size={18} />}
        </button>
        <span>{product.type}</span>
      </div>
      <div className="kanso-product-title">
        <h3>{product.name}</h3>
        <span>€{product.price}</span>
      </div>
      <div className="kanso-product-detail">
        <span>{product.material}</span>
        <i style={{ background: product.color }} />
      </div>
    </article>
  );
}
