import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Collection } from "./components/Collection";
import { Story } from "./components/Story";
import { Care } from "./components/Care";
import { Newsletter } from "./components/Newsletter";
import { Bag } from "./components/Bag";
import { Footer } from "./components/Footer";
import { Product } from "./data";
import "./styles.css";

export default function Page() {
  const [items, setItems] = useState<Product[]>([]);
  const [bag, setBag] = useState(false);
  return (
    <main className="kanso">
      <div className="kanso-announcement">
        Small batches. Thoughtful pieces. Made to stay.
      </div>
      <Header count={items.length} onCart={() => setBag(true)} />
      <Hero />
      <Collection onAdd={(p) => setItems((current) => [...current, p])} />
      <Story />
      <Care />
      <Newsletter />
      <Footer />
      {bag && (
        <Bag
          items={items}
          onClose={() => setBag(false)}
          onRemove={(k) => setItems(items.filter((_, i) => i !== k))}
        />
      )}
    </main>
  );
}
