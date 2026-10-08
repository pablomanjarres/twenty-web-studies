import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { products, Product } from "../data";

export function Collection({ onAdd }: { onAdd: (p: Product) => void }) {
  const [filter, setFilter] = useState("All pieces");
  return (
    <section className="kanso-collection" id="collection">
      <div className="kanso-collection-heading">
        <div>
          <span>Made to be part of your day.</span>
          <h2>A few good things.</h2>
        </div>
        <div className="kanso-filters" aria-label="Shop categories">
          {["All pieces", "Cups", "Tableware"].map((i) => (
            <button
              key={i}
              aria-pressed={filter === i}
              onClick={() => setFilter(i)}
            >
              {i}
            </button>
          ))}
        </div>
      </div>
      <div className="kanso-product-grid">
        {products
          .filter((i) => filter === "All pieces" || i.type === filter)
          .map((i) => (
            <ProductCard key={i.id} product={i} onAdd={onAdd} />
          ))}
      </div>
      <p className="kanso-collection-note">
        No two pieces are quite the same. That’s the lovely part.
      </p>
    </section>
  );
}
