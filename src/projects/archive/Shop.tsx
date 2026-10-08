import { useState } from "react";
import { ArrowRight, Plus, Check } from "lucide-react";
import { image, catalogFor, categories, products } from "./data";

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
    <article className="archive-product">
      <div
        className={`archive-product-image archive-product-${product.imageMode}`}
      >
        <img src={image(product.image)} alt={product.name} />
        <span>
          {product.category === "Accessories" ? "Curated" : "New arrival"}
        </span>
        <button
          aria-label={"Add " + product.name + " to bag"}
          onClick={() => {
            onAdd(
              product.id,
              product.category === "Accessories" ? "One size" : size,
            );
            setAdded(true);
          }}
        >
          {added ? <Check size={18} /> : <Plus size={18} />}
        </button>
      </div>
      <div className="archive-product-title">
        <h3>{product.name}</h3>
        <span>£{product.price}</span>
      </div>
      <p>{product.detail}</p>
      <div className="archive-product-size">
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
            onAdd(
              product.id,
              product.category === "Accessories" ? "One size" : size,
            );
            setAdded(true);
          }}
        >
          {added ? "Add another" : "Add to bag"} <ArrowRight size={13} />
        </button>
      </div>
    </article>
  );
}

export function Shop({
  look,
  category,
  onCategory,
  onAdd,
}: {
  look: number;
  category: string;
  onCategory: (value: string) => void;
  onAdd: (id: string, size: string) => void;
}) {
  const visible = catalogFor(category, look);
  return (
    <section className="archive-shop" id="archive-shop">
      <div className="archive-shop-heading">
        <span>THE CURRENT EDIT / 06</span>
        <h2>Pieces worth keeping.</h2>
        <span>FOUR FORMS. YOUR WAY.</span>
      </div>
      <div className="archive-filters" aria-label="Product categories">
        {categories.map((item) => (
          <button
            key={item}
            aria-pressed={category === item}
            onClick={() => onCategory(item)}
          >
            {item}
          </button>
        ))}
        <span>{visible.length} pieces</span>
      </div>
      <div className="archive-product-grid">
        {visible.map((product) => (
          <ProductCard key={product.id} product={product} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
}
