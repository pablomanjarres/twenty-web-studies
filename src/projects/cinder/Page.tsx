import { useState } from "react";
import { Header } from "./Header";
import { RoastPoster } from "./RoastPoster";
import { OrderStrip } from "./OrderStrip";
import { RoastLedger } from "./RoastLedger";
import { Origin } from "./Origin";
import { BrewingSheet } from "./BrewingSheet";
import { Dispatch } from "./Dispatch";
import { Basket } from "./Basket";
import { coffees, type CartItem, type Grind } from "./data";
import "./styles.css";
export default function Page() {
  const [active, setActive] = useState(0);
  const [grind, setGrind] = useState<Grind>("Whole bean");
  const [quantity, setQuantity] = useState(1);
  const [items, setItems] = useState<CartItem[]>([]);
  const [basket, setBasket] = useState(false);
  const add = () => {
    const coffee = coffees[active];
    setItems((current) =>
      current.some(
        (item) => item.coffee.id === coffee.id && item.grind === grind,
      )
        ? current.map((item) =>
            item.coffee.id === coffee.id && item.grind === grind
              ? { ...item, quantity: item.quantity + quantity }
              : item,
          )
        : [...current, { coffee, grind, quantity }],
    );
    setBasket(true);
  };
  return (
    <main className="cinder">
      <Header
        count={items.reduce((sum, item) => sum + item.quantity, 0)}
        onBasket={() => setBasket(true)}
      />
      <RoastPoster
        coffee={coffees[active]}
        active={active}
        onSelect={(index) => {
          setActive(index);
          setQuantity(1);
        }}
      />
      <OrderStrip
        coffee={coffees[active]}
        grind={grind}
        onGrind={setGrind}
        quantity={quantity}
        onQuantity={setQuantity}
        onAdd={add}
      />
      <RoastLedger />
      <Origin />
      <BrewingSheet />
      <Dispatch key={coffees[active].id} coffee={coffees[active]} />
      {basket && (
        <Basket
          items={items}
          onClose={() => setBasket(false)}
          onChange={(index, value) =>
            setItems((current) =>
              current
                .map((item, i) =>
                  i === index ? { ...item, quantity: value } : item,
                )
                .filter((item) => item.quantity > 0),
            )
          }
        />
      )}
    </main>
  );
}
