import { useEffect, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import {
  image,
  catalogFor,
  categories,
  isOneSize,
  ONE_SIZE,
  sizes,
} from "./data";
import type { Product } from "./data";

function SizePicker({
  name,
  value,
  onChange,
}: {
  name: string;
  value: string;
  onChange: (size: string) => void;
}) {
  return (
    <fieldset className="archive-size">
      <legend>Size</legend>
      <div>
        {sizes.map((s) => (
          <button
            key={s}
            type="button"
            aria-pressed={value === s}
            aria-label={`Size ${s} for ${name}`}
            onClick={() => onChange(s)}
          >
            {s}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export function ProductCard({
  product,
  onAdd,
}: {
  product: Product;
  onAdd: (id: string, size: string) => void;
}) {
  const oneSize = isOneSize(product);
  const [size, setSize] = useState("M");
  const [added, setAdded] = useState<"idle" | "just" | "again">("idle");
  useEffect(() => {
    if (added !== "just") return;
    const timer = setTimeout(() => setAdded("again"), 1600);
    return () => clearTimeout(timer);
  }, [added]);
  return (
    <article className="archive-product">
      <div
        className={`archive-product-image archive-product-${product.imageMode}`}
      >
        <img src={image(product.image)} alt={product.name} />
        <span>{oneSize ? "Curated" : "New arrival"}</span>
      </div>
      <div className="archive-product-title">
        <h3>{product.name}</h3>
        <span>£{product.price}</span>
      </div>
      <p>{product.detail}</p>
      <div className="archive-product-size">
        {oneSize ? (
          <span>{ONE_SIZE}</span>
        ) : (
          <SizePicker
            name={product.name}
            value={size}
            onChange={(s) => {
              setSize(s);
              setAdded("idle");
            }}
          />
        )}
      </div>
      <button
        type="button"
        className="archive-add"
        aria-label={`Add ${product.name}${oneSize ? "" : ", size " + size}, to bag`}
        onClick={() => {
          onAdd(product.id, oneSize ? ONE_SIZE : size);
          setAdded("just");
        }}
      >
        <span aria-live="polite">
          {added === "just"
            ? "Added, add another"
            : added === "again"
              ? "Add another"
              : "Add to bag"}
        </span>
        {added === "just" ? (
          <Check size={18} aria-hidden="true" />
        ) : (
          <ArrowRight size={18} aria-hidden="true" />
        )}
      </button>
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
      <div className="archive-filter-bar">
        <div
          className="archive-filters"
          role="group"
          aria-label="Product categories"
        >
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              onClick={() => onCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <span aria-live="polite">{visible.length} pieces</span>
      </div>
      <div
        className="archive-product-grid"
        key={category + (category === "This look" ? look : "")}
      >
        {visible.map((product) => (
          <ProductCard key={product.id} product={product} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
}
