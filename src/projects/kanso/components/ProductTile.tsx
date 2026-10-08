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
        aria-label={`View ${product.name}`}
      >
        <img
          src={image(product.image)}
          alt={product.name}
          width="1254"
          height="1254"
        />
      </button>
      <div className="kanso-object-caption">
        <button onClick={() => onSelect(product)}>
          <h2>{product.name}</h2>
          <ArrowUpRight size={14} />
        </button>
        <span>{money(product.price)}</span>
      </div>
      <div className="kanso-object-spec">
        <span>{product.size}</span>
        <span>{product.glaze}</span>
      </div>
    </article>
  );
}
