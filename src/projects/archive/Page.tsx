import { useState } from "react";
import {
  Header,
  Hero,
  Shop,
  Story,
  Bag,
  Footer,
  type BagItem,
} from "./components";
import "./styles.css";
export default function Page() {
  const [bag, setBag] = useState<BagItem[]>([]);
  const [open, setOpen] = useState(false);
  function add(id: string, size: string) {
    setBag((current) => {
      const exists = current.find(
        (item) => item.id === id && item.size === size,
      );
      return exists
        ? current.map((item) =>
            item === exists ? { ...item, quantity: item.quantity + 1 } : item,
          )
        : [...current, { id, size, quantity: 1 }];
    });
  }
  function remove(id: string, size: string) {
    setBag((current) =>
      current
        .map((item) =>
          item.id === id && item.size === size
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }
  return (
    <div className="archive" id="archive-top">
      <Header
        count={bag.reduce((n, item) => n + item.quantity, 0)}
        onBag={() => setOpen(true)}
      />
      <main>
        <Hero />
        <Shop onAdd={add} />
        <Story />
      </main>
      <Footer />
      {open && (
        <Bag items={bag} onClose={() => setOpen(false)} onRemove={remove} />
      )}
    </div>
  );
}
