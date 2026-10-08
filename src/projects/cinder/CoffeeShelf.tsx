import { useState } from "react";
import { Check, Plus } from "lucide-react";
import { coffees } from "./data";
import { CoffeeBag } from "./CoffeeBag";

export function CoffeeCard({
  coffee,
  onAdd,
}: {
  coffee: (typeof coffees)[number];
  onAdd: (name: string, grind: string) => void;
}) {
  const [grind, setGrind] = useState("Whole bean");
  const [added, setAdded] = useState(false);
  return (
    <article className="ci-coffee-card">
      <div className="ci-product-art">
        <span>{coffee.label}</span>
        <CoffeeBag coffee={coffee} />
        <span className="ci-product-number">{coffee.number}</span>
      </div>
      <div className="ci-product-heading">
        <h3>{coffee.name}</h3>
        <span>${coffee.price}</span>
      </div>
      <div className="ci-product-origin">{coffee.origin}</div>
      <p>{coffee.notes}</p>
      <div className="ci-product-controls">
        <select
          value={grind}
          onChange={(event) => setGrind(event.target.value)}
          aria-label={`Grind for ${coffee.name}`}
        >
          <option>Whole bean</option>
          <option>Filter grind</option>
          <option>Espresso grind</option>
        </select>
        <button
          onClick={() => {
            onAdd(coffee.name, grind);
            setAdded(true);
          }}
        >
          {added ? <Check size={16} /> : <Plus size={16} />}{" "}
          {added ? "Add another" : "Add to basket"}
        </button>
      </div>
    </article>
  );
}

export function CoffeeShelf({
  onAdd,
}: {
  onAdd: (name: string, grind: string) => void;
}) {
  return (
    <section className="ci-coffee-section" id="ci-coffee">
      <div className="ci-section-intro">
        <div>
          <span className="ci-kicker">The current rotation</span>
          <h2>
            Your next
            <br />
            favorite coffee.
          </h2>
        </div>
        <p>
          Thoughtfully sourced. Carefully roasted.
          <br />
          Ready for whatever kind of morning
          <br />
          you’re having.
        </p>
      </div>
      <div className="ci-coffee-grid">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.name} coffee={coffee} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
}
