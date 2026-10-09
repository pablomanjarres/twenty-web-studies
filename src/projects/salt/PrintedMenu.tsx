import { useState } from "react";
import { ArrowDownRight } from "lucide-react";
import { menus, menuFeatures } from "./data";
import { DishGroup } from "./DishGroup";
import { FeaturedPlate } from "./FeaturedPlate";
export function PrintedMenu() {
  const [selected, setSelected] = useState("Dinner");
  const sections = menus[selected];
  return (
    <section id="seasonal-menu" className="sl-menu-stage">
      <div className="sl-menu-controls">
        <span>A table by the sea</span>
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
        <span>Fresh. Seasonal. Shared.</span>
      </div>
      <div className="sl-menu-paper">
        <div className="sl-menu-masthead">
          <p>Day-boat fish. Seasonal produce. Good company.</p>
          <h1>
            {selected === "Drinks"
              ? "Raise a glass."
              : "A little sea on your plate."}
          </h1>
          <span>{selected} menu</span>
        </div>
        <div className="sl-menu-spread">
          <div className="sl-sea-menu">
            <DishGroup section={sections[0]} />
            <div className="sl-menu-note">
              <ArrowDownRight size={21} />
              <p>
                Simple things, done properly.
                <br />
                Ask us what came in this morning.
              </p>
            </div>
          </div>
          <FeaturedPlate feature={menuFeatures[selected]} />
          <div className="sl-garden-menu">
            {sections.slice(1).map((section) => (
              <DishGroup key={section.title} section={section} />
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
