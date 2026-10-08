import { useState } from "react";
import { ArrowDownRight } from "lucide-react";
import { menus, plate } from "./data";
export function PrintedMenu() {
  const [selected, setSelected] = useState("Dinner");
  const sections = menus[selected];
  return (
    <section id="seasonal-menu" className="sl-menu-stage">
      <div className="sl-menu-edge">
        <span>A TABLE BY THE SEA</span>
        <nav aria-label="Choose a menu">
          {Object.keys(menus).map((name) => (
            <button
              key={name}
              aria-pressed={name === selected}
              onClick={() => setSelected(name)}
            >
              {name}
            </button>
          ))}
        </nav>
        <span>THE AUTUMN EDITION / 2026</span>
      </div>
      <div className="sl-menu-paper">
        <div className="sl-menu-masthead">
          <p>DAY-BOAT FISH · SEASONAL PRODUCE · GOOD COMPANY</p>
          <h1>
            {selected === "Drinks"
              ? "Raise a glass."
              : "A little sea on your plate."}
          </h1>
          <span>{selected} menu</span>
        </div>
        <div className="sl-menu-spread">
          <div className="sl-sea-menu">
            <h2>{sections[0].title}</h2>
            {sections[0].dishes.map((dish) => (
              <article className="sl-dish" key={dish.name}>
                <div>
                  <h3>{dish.name}</h3>
                  <span>{dish.price}</span>
                </div>
                <p>{dish.note}</p>
              </article>
            ))}
            <div className="sl-menu-note">
              <ArrowDownRight size={21} />
              <p>
                Simple things, done properly.
                <br />
                Ask us what came in this morning.
              </p>
            </div>
          </div>
          <figure className="sl-plate">
            <img
              src={plate}
              alt="Grilled Atlantic prawns with wild garlic butter and charred lemon on an ivory plate"
            />
            <figcaption>
              THE KITCHEN’S FAVOURITE<span>Wild garlic prawns / 16</span>
              <small>Best shared. Extra bread recommended.</small>
            </figcaption>
          </figure>
          <div className="sl-garden-menu">
            {sections.slice(1).map((section) => (
              <div className="sl-menu-section" key={section.title}>
                <h2>{section.title}</h2>
                {section.dishes.map((dish) => (
                  <article className="sl-dish" key={dish.name}>
                    <div>
                      <h3>{dish.name}</h3>
                      <span>{dish.price}</span>
                    </div>
                    <p>{dish.note}</p>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="sl-menu-bottom">
          <span>
            All prices in £ · A discretionary 12.5% service charge applies.
          </span>
          <span>Tell us about allergies before ordering.</span>
          <span>Made with the season. Served with love.</span>
        </div>
      </div>
    </section>
  );
}
