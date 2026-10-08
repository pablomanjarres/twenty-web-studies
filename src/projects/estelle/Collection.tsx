import { useState } from "react";
import { ArrowUpRight, Heart } from "lucide-react";
import { image, pieces } from "./data";
import { PieceDetails } from "./PieceDetails";

export function Piece({
  piece,
  saved,
  onSave,
  onOpen,
}: {
  piece: (typeof pieces)[number];
  saved: boolean;
  onSave: () => void;
  onOpen: () => void;
}) {
  return (
    <article className="estelle-piece">
      <div className="estelle-piece-photo">
        <button
          onClick={onOpen}
          className="estelle-piece-view"
          aria-label={"View " + piece.name}
        >
          <img src={image(piece.image)} alt={piece.name} />
        </button>
        <button
          className={"estelle-save " + (saved ? "saved" : "")}
          onClick={onSave}
          aria-label={saved ? "Unsave " + piece.name : "Save " + piece.name}
          aria-pressed={saved}
        >
          <Heart size={17} fill={saved ? "currentColor" : "none"} />
        </button>
      </div>
      <div className="estelle-piece-title">
        <h3>{piece.name}</h3>
        <span>{piece.price}</span>
      </div>
      <p>{piece.material}</p>
      <button className="estelle-piece-details" onClick={onOpen}>
        A closer look <ArrowUpRight size={13} />
      </button>
    </article>
  );
}

export function Collection({
  saved,
  onSave,
}: {
  saved: string[];
  onSave: (name: string) => void;
}) {
  const [filter, setFilter] = useState("All pieces");
  const [selected, setSelected] = useState<(typeof pieces)[number] | null>(
    null,
  );
  return (
    <section className="estelle-collection" id="estelle-collection">
      <div className="estelle-collection-intro">
        <span>Quiet statements</span>
        <h2>
          Some things become
          <br />a part of you.
        </h2>
        <p>
          Considered forms. Precious materials.
          <br />
          Pieces to wear, remember, and pass on.
        </p>
      </div>
      <div className="estelle-collection-tabs" aria-label="Jewelry categories">
        {["All pieces", "Rings", "Earrings", "Necklaces", "Saved pieces"].map(
          (item) => (
            <button
              key={item}
              className={filter === item ? "active" : ""}
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ),
        )}
      </div>
      <div className="estelle-pieces">
        {pieces
          .filter(
            (p) =>
              filter === "All pieces" ||
              (filter === "Saved pieces" && saved.includes(p.name)) ||
              p.type === filter,
          )
          .map((piece) => (
            <Piece
              key={piece.name}
              piece={piece}
              saved={saved.includes(piece.name)}
              onSave={() => onSave(piece.name)}
              onOpen={() => setSelected(piece)}
            />
          ))}
      </div>
      {filter === "Saved pieces" && !saved.length && (
        <p className="estelle-empty">
          Keep the pieces that speak to you close.
          <br />
          Select the heart beside a piece to save it here.
        </p>
      )}
      {selected && (
        <PieceDetails
          piece={selected}
          onClose={() => setSelected(null)}
          onSave={() => onSave(selected.name)}
          saved={saved.includes(selected.name)}
        />
      )}
    </section>
  );
}
