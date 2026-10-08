import { useState } from "react";
import { BrandLogo } from "../../../shared/BrandLogo";
import { brand } from "../brand";
import { products, type Product } from "../data";
import { Filters } from "./Filters";
import { ProductTile } from "./ProductTile";
export function Shelf({
  query,
  onSelect,
}: {
  query: string;
  onSelect: (product: Product) => void;
}) {
  const [category, setCategory] = useState("All objects");
  const [glaze, setGlaze] = useState("All");
  const shown = products.filter(
    (product) =>
      (category === "All objects" || product.type === category) &&
      (glaze === "All" || product.glaze === glaze) &&
      `${product.name} ${product.glaze} ${product.type}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  return (
    <section id="objects" className="kanso-shop">
      <aside className="kanso-index">
        <div>
          <h1>
            Small objects.
            <br />
            Daily companions.
          </h1>
          <p>
            A shelf of six things to use,
            <br />
            keep, and make your own.
          </p>
          <Filters
            category={category}
            glaze={glaze}
            onCategory={setCategory}
            onGlaze={setGlaze}
          />
        </div>
        <div className="kanso-shelf-wordmark">
          <BrandLogo brand={brand} />
          <small>Collection 01 / Stoneware</small>
        </div>
      </aside>
      <div className="kanso-shelf-wrap">
        <div className="kanso-shelf-heading">
          <span>From the wheel to your table.</span>
          <span>
            {String(shown.length).padStart(2, "0")} objects / Batch 04
          </span>
        </div>
        <div
          className={`kanso-shelf ${shown.length < 6 ? "kanso-shelf-filtered" : ""}`}
        >
          {shown.map((product) => (
            <ProductTile
              key={product.id}
              product={product}
              onSelect={onSelect}
            />
          ))}
          {shown.length === 0 && (
            <div className="kanso-empty-shelf">
              <h2>No objects on this shelf.</h2>
              <p>Try another category or finish.</p>
              <button
                onClick={() => {
                  setCategory("All objects");
                  setGlaze("All");
                }}
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
        <div className="kanso-shelf-foot">
          <span>Thrown by hand. Each piece a little different.</span>
          <a href="#batch">Materials & care ↓</a>
        </div>
      </div>
    </section>
  );
}
