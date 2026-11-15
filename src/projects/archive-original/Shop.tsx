import { useState } from "react";
import { products } from "./data";
import { ProductCard } from "./ProductCard";

const categories = ["All pieces", "Outerwear", "Essentials", "Accessories"];

export function Shop({ onAdd }: { onAdd: (id: string, size: string) => void }) {
  const [category, setCategory] = useState("All pieces");
  const visible = products.filter(
    (p) => category === "All pieces" || p.category === category,
  );
  return (
    <section className="archive-original-shop" id="archive-original-shop">
      <div className="archive-original-shop-heading">
        <h2>The current edit.</h2>
        <span>Good pieces, no excess.</span>
      </div>
      <div className="archive-original-filters">
        <div
          className="archive-original-filter-row"
          role="group"
          aria-label="Product categories"
        >
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={
                "archive-original-label" + (category === item ? " active" : "")
              }
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <p
          className="archive-original-meta archive-original-tabular"
          aria-live="polite"
        >
          {visible.length} {visible.length === 1 ? "piece" : "pieces"}
        </p>
      </div>
      <div className="archive-original-product-grid">
        {visible.map((product) => (
          <ProductCard key={product.id} product={product} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
}
