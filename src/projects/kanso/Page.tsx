import { useState } from "react";
import { Header } from "./components/Header";
import { Shelf } from "./components/Shelf";
import { ProductDetail } from "./components/ProductDetail";
import { StudioNotes } from "./components/StudioNotes";
import { Footer } from "./components/Footer";
import { Bag } from "./components/Bag";
import type { CartLine, Product } from "./data";
import "./styles.css";

export default function Page() {
  const [items, setItems] = useState<CartLine[]>([]);
  const [bag, setBag] = useState(false);
  const [selected, setSelected] = useState<Product | null>(null);
  const [query, setQuery] = useState("");
  const add = (product: Product, quantity: number) => {
    setItems((current) => {
      const existing = current.find((line) => line.product.id === product.id);
      return existing
        ? current.map((line) =>
            line.product.id === product.id
              ? { ...line, quantity: line.quantity + quantity }
              : line,
          )
        : [...current, { product, quantity }];
    });
  };
  return (
    <main className="kanso">
      <Header
        count={items.reduce((sum, line) => sum + line.quantity, 0)}
        onCart={() => setBag(true)}
        query={query}
        onQuery={setQuery}
      />
      <Shelf query={query} onSelect={setSelected} />
      <StudioNotes />
      <Footer />
      {selected && (
        <ProductDetail
          key={selected.id}
          product={selected}
          onClose={() => setSelected(null)}
          onAdd={add}
          onBag={() => {
            setSelected(null);
            setBag(true);
          }}
        />
      )}
      {bag && (
        <Bag
          items={items}
          onClose={() => setBag(false)}
          onRemove={(id) =>
            setItems((current) =>
              current.filter((line) => line.product.id !== id),
            )
          }
        />
      )}
    </main>
  );
}
