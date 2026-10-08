import { type Piece, type Material } from "./data";
export function MaterialNotes({
  piece,
  material,
}: {
  piece: Piece;
  material: Material;
}) {
  return (
    <section className="estelle-material-notes" id="estelle-material">
      <div className="estelle-section-label">
        <span>01 / Material notes</span>
        <span>
          {piece.name} — {material.name}
        </span>
      </div>
      <div className="estelle-material-body">
        <h2>
          A curve has
          <br />
          many surfaces.
        </h2>
        <div>
          <p>{piece.description}</p>
          <p>{material.tone}</p>
        </div>
        <dl>
          <div>
            <dt>Material</dt>
            <dd>{material.purity}</dd>
          </div>
          <div>
            <dt>Dimensions</dt>
            <dd>{piece.dimensions}</dd>
          </div>
          <div>
            <dt>Weight</dt>
            <dd>{material.weight}</dd>
          </div>
          {piece.details.map((detail, index) => (
            <div key={detail}>
              <dt>Detail 0{index + 1}</dt>
              <dd>{detail}</dd>
            </div>
          ))}
        </dl>
      </div>
      <p className="estelle-care-note">
        A little care, over time: keep separately in a soft pouch, avoid
        abrasive surfaces, and clean gently with a dry jewellery cloth.
      </p>
    </section>
  );
}
