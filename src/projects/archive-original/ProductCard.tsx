import { useEffect, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { image, products } from "./data";
import { SizePicker } from "./SizePicker";

type AddState = "idle" | "added" | "again";

const addLabels: Record<AddState, string> = {
  idle: "Add to bag",
  added: "Added",
  again: "Add another",
};

export function ProductCard({
  product,
  onAdd,
}: {
  product: (typeof products)[number];
  onAdd: (id: string, size: string) => void;
}) {
  const [size, setSize] = useState("M");
  const [addState, setAddState] = useState<AddState>("idle");
  const oneSize = product.category === "Accessories";

  useEffect(() => {
    if (addState !== "added") return;
    const timer = window.setTimeout(() => setAddState("again"), 1600);
    return () => window.clearTimeout(timer);
  }, [addState]);

  const label = addLabels[addState];
  return (
    <article className="archive-original-product">
      <div className="archive-original-product-image">
        <img src={image(product.image)} alt={product.name} loading="lazy" />
        <span className="archive-original-label">
          {oneSize ? "Curated" : "New arrival"}
        </span>
      </div>
      <div className="archive-original-product-caption">
        <div className="archive-original-product-title archive-original-label">
          <h3>{product.name}</h3>
          <span className="archive-original-tabular">£{product.price}</span>
        </div>
        <p className="archive-original-meta">{product.detail}</p>
      </div>
      <div className="archive-original-product-actions">
        <SizePicker
          value={size}
          oneSize={oneSize}
          onChange={(next) => {
            setSize(next);
            setAddState("idle");
          }}
        />
        <button
          type="button"
          className="archive-original-add archive-original-dark archive-original-label"
          aria-label={`${label}: ${product.name}${oneSize ? "" : ", size " + size}`}
          onClick={() => {
            onAdd(product.id, size);
            setAddState("added");
          }}
        >
          {label}
          {addState === "added" ? (
            <Check size={14} aria-hidden="true" />
          ) : (
            <ArrowRight size={14} aria-hidden="true" />
          )}
        </button>
      </div>
    </article>
  );
}
