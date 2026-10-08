import { image, pieces } from "./data";
export function PieceIndex({
  active,
  onSelect,
}: {
  active: number;
  onSelect: (index: number) => void;
}) {
  return (
    <section className="estelle-piece-index" id="estelle-pieces">
      <div className="estelle-section-label">
        <span>03 / A small collection</span>
        <span>Two studies in folded form</span>
      </div>
      <div className="estelle-piece-list">
        {pieces.map((piece, index) => (
          <button
            key={piece.id}
            aria-pressed={index === active}
            onClick={() => {
              onSelect(index);
              document.getElementById("estelle-top")?.scrollIntoView({
                behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
                  .matches
                  ? "instant"
                  : "smooth",
              });
            }}
          >
            <span className="estelle-piece-number">{piece.number}</span>
            <img src={image(piece.materials[0].macro)} alt="" loading="lazy" />
            <div>
              <h3>{piece.name}</h3>
              <span>{piece.category}</span>
            </div>
            <span>{active === index ? "On view" : "View study ↗"}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
