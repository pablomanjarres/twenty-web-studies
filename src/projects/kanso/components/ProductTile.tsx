import { ArrowUpRight } from "lucide-react";
import { image, money, type Product } from "../data";
export function ProductTile({
  product,
  onSelect,
}: {
  product: Product;
  onSelect: (product: Product) => void;
}) {
  return (
    <article className={`kanso-object kanso-object-${product.shape}`}>
      <button
        className="kanso-object-image"
        onClick={() => onSelect(product)}
        tabIndex={-1}
        aria-hidden="true"
      >
        <img src={image(product.image)} alt="" width="1254" height="1254" />
      </button>
      <div className="kanso-object-caption">
        <h2>
          <button
            className="kanso-reveal-line"
            onClick={() => onSelect(product)}
          >
            {product.name}
            <ArrowUpRight size={14} aria-hidden="true" />
          </button>
        </h2>
        <span className="kanso-num">{money(product.price)}</span>
      </div>
      <div className="kanso-object-spec kanso-meta">
        <span className="kanso-num">{product.size}</span>
        <span>{product.glaze}</span>
      </div>
    </article>
  );
}
