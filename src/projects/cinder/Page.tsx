import { useState } from "react";
import type { CartItem } from "./data";
import { Header, Hero } from "./HeaderHero";
import { CoffeeShelf } from "./CoffeeShelf";
import { Story, Footer } from "./StoryFooter";
import { Basket } from "./Basket";
import "./styles.css";

export default function Page() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);
  const add = (name: string, grind: string) =>
    setItems((current) => {
      const found = current.find(
        (item) => item.name === name && item.grind === grind,
      );
      return found
        ? current.map((item) =>
            item === found ? { ...item, quantity: item.quantity + 1 } : item,
          )
        : [...current, { name, grind, quantity: 1 }];
    });
  return (
    <main className="cinder-page">
      <Header
        count={items.reduce((sum, item) => sum + item.quantity, 0)}
        onBasket={() => setOpen(true)}
      />
      <Hero />
      <CoffeeShelf onAdd={add} />
      <Story />
      <Footer />
      {open && (
        <Basket
          items={items}
          onClose={() => setOpen(false)}
          onChange={(index, delta) =>
            setItems((current) =>
              current
                .map((item, i) =>
                  i === index
                    ? { ...item, quantity: item.quantity + delta }
                    : item,
                )
                .filter((item) => item.quantity > 0),
            )
          }
        />
      )}
    </main>
  );
}
