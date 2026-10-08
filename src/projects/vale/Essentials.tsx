import { Check, Plus } from "lucide-react";
import { products } from "./data";
import { ProductIllustration } from "./ProductIllustration";

export function ProductCard({
  product,
  selected,
  onSelect,
}: {
  product: (typeof products)[number];
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <article className="va-product">
      <div className="va-product-art">
        <span>{product.kind}</span>
        <ProductIllustration product={product} />
        <span className="va-art-size">{product.size}</span>
      </div>
      <div className="va-product-title">
        <h3>{product.name}</h3>
        <span>${product.price}</span>
      </div>
      <p>{product.note}</p>
      <button
        className="va-product-add"
        onClick={onSelect}
        aria-pressed={selected}
      >
        {selected ? "In your ritual" : "Add to your ritual"}
        {selected ? <Check size={16} /> : <Plus size={16} />}
      </button>
    </article>
  );
}

export function Essentials({
  selected,
  onSelect,
}: {
  selected: string[];
  onSelect: (name: string) => void;
}) {
  return (
    <section className="va-essentials" id="va-essentials">
      <div className="va-section-heading">
        <span className="va-kicker">The daily essentials</span>
        <h2>
          Fewer things.
          <br />
          <i>More intention.</i>
        </h2>
        <p>
          A small collection, made to work together.
          <br />
          Find the ones that feel like you.
        </p>
      </div>
      <div className="va-product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            product={product}
            selected={selected.includes(product.name)}
            onSelect={() => onSelect(product.name)}
          />
        ))}
      </div>
    </section>
  );
}
