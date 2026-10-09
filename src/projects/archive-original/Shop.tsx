import { useState } from "react";
import { ArrowRight, Plus, Check } from "lucide-react";
import { image, products } from "./data";

export function ProductCard({
  product,
  onAdd,
}: {
  product: (typeof products)[number];
  onAdd: (id: string, size: string) => void;
}) {
  const [size, setSize] = useState("M");
  const [added, setAdded] = useState(false);
  return (
    <article className="archive-original-product">
      <div className="archive-original-product-image">
        <img src={image(product.image)} alt={product.name} />
        <span>
          {product.category === "Accessories" ? "Curated" : "New arrival"}
        </span>
        <button
          aria-label={"Add " + product.name + " to bag"}
          onClick={() => {
            onAdd(product.id, size);
            setAdded(true);
          }}
        >
          {added ? <Check size={18} /> : <Plus size={18} />}
        </button>
      </div>
      <div className="archive-original-product-title">
        <h3>{product.name}</h3>
        <span>£{product.price}</span>
      </div>
      <p>{product.detail}</p>
      <div className="archive-original-product-size">
        {product.category !== "Accessories" ? (
          <label>
            Size
            <select
              aria-label={"Size for " + product.name}
              value={size}
              onChange={(e) => {
                setSize(e.target.value);
                setAdded(false);
              }}
            >
              {["XS", "S", "M", "L", "XL"].map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </label>
        ) : (
          <span>One size</span>
        )}
        <button
          onClick={() => {
            onAdd(product.id, size);
            setAdded(true);
          }}
        >
          {added ? "Add another" : "Add to bag"} <ArrowRight size={13} />
        </button>
      </div>
    </article>
  );
}

export function Shop({ onAdd }: { onAdd: (id: string, size: string) => void }) {
  const [category, setCategory] = useState("All pieces");
  return (
    <section className="archive-original-shop" id="archive-original-shop">
      <div className="archive-original-shop-heading">
        <h2>The current edit.</h2>
        <span>Good pieces, no excess.</span>
      </div>
      <div className="archive-original-filters" aria-label="Product categories">
        {["All pieces", "Outerwear", "Essentials", "Accessories"].map(
          (item) => (
            <button
              key={item}
              className={category === item ? "active" : ""}
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ),
        )}
        <span>
          {
            products.filter(
              (p) => category === "All pieces" || p.category === category,
            ).length
          }{" "}
          pieces
        </span>
      </div>
      <div className="archive-original-product-grid">
        {products
          .filter((p) => category === "All pieces" || p.category === category)
          .map((product) => (
            <ProductCard key={product.id} product={product} onAdd={onAdd} />
          ))}
      </div>
    </section>
  );
}
