import { useState } from "react";
import { image, menu } from "./data";
import { Shell } from "./Hero";

export function MenuItem({ item }: { item: (typeof menu)[string][number] }) {
  return (
    <div className="salt-menu-item">
      <div>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>
      <span>£{item.price}</span>
    </div>
  );
}

export function Menu() {
  const [category, setCategory] = useState("From the sea");
  return (
    <section className="salt-menu" id="salt-menu">
      <div className="salt-menu-visual">
        <div className="salt-menu-photo">
          <img
            src={image("fish")}
            alt="Fresh whole fish and seafood prepared for a coastal meal"
          />
        </div>
        <div className="salt-hand-note">
          A little lemon.
          <br />A little love.
        </div>
        <Shell className="salt-menu-shell" />
      </div>
      <div className="salt-menu-copy">
        <span className="salt-small">A taste of the good stuff</span>
        <h2>
          Made by the sea.
          <br />
          Made to share.
        </h2>
        <div className="salt-menu-tabs" aria-label="Menu categories">
          {Object.keys(menu).map((item) => (
            <button
              key={item}
              className={category === item ? "active" : ""}
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="salt-menu-items">
          {menu[category].map((item) => (
            <MenuItem key={item.name} item={item} />
          ))}
        </div>
        <p className="salt-menu-note">
          Our menu follows the tides and the seasons.
          <br />
          Let us know about any allergies before ordering.
        </p>
      </div>
    </section>
  );
}
