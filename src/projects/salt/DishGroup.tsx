import type { MenuSection } from "./data";

export function DishGroup({ section }: { section: MenuSection }) {
  return (
    <div className="sl-menu-section">
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
  );
}
