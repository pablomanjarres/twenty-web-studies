import { categories, glazes } from "../data";
export function Filters({
  category,
  glaze,
  onCategory,
  onGlaze,
}: {
  category: string;
  glaze: string;
  onCategory: (value: string) => void;
  onGlaze: (value: string) => void;
}) {
  return (
    <div className="kanso-filters">
      <nav className="kanso-categories" aria-label="Object categories">
        {categories.map((name, index) => (
          <button
            key={name}
            aria-pressed={category === name}
            onClick={() => onCategory(name)}
          >
            <span>{name}</span>
            <small>0{index + 1}</small>
          </button>
        ))}
      </nav>
      <div className="kanso-glazes">
        <span className="kanso-label">Glazes</span>
        <div>
          {glazes.map((finish) => (
            <button
              key={finish.name}
              className={glaze === finish.name ? "is-selected" : ""}
              style={{ "--glaze": finish.color } as React.CSSProperties}
              aria-label={`${finish.name} glaze`}
              aria-pressed={glaze === finish.name}
              onClick={() =>
                onGlaze(glaze === finish.name ? "All" : finish.name)
              }
            />
          ))}
        </div>
        <span>{glaze === "All" ? "Every finish" : `${glaze} selected`}</span>
        {glaze !== "All" && (
          <button className="kanso-reset-glaze" onClick={() => onGlaze("All")}>
            Clear finish
          </button>
        )}
      </div>
    </div>
  );
}
