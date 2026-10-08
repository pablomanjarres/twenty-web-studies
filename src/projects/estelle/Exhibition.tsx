import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
import { image, price, type Piece, type Material } from "./data";
interface Props {
  piece: Piece;
  material: Material;
  metal: number;
  onMetal: (index: number) => void;
}
export function Exhibition({ piece, material, metal, onMetal }: Props) {
  return (
    <section className="estelle-exhibition" aria-label="Jewellery exhibition">
      <div className="estelle-exhibit-line">
        <span>Study {piece.number} / Form & surface</span>
        <span>{material.purity}</span>
      </div>
      <div className="estelle-apertures">
        <figure className="estelle-aperture estelle-object">
          <img
            key={material.macro}
            src={image(material.macro)}
            alt={`${piece.name} ${piece.category.toLowerCase()} in ${material.name}, close view of its sculptural form`}
            fetchPriority="high"
          />
          <figcaption>
            <span>Fig. A / The object</span>
            <span>{piece.dimensions}</span>
          </figcaption>
        </figure>
        <div className="estelle-centre-mark">
          <BrandLogo brand={brand} />
          <span>
            Atelier
            <br />
            Collection 01
          </span>
        </div>
        <figure className="estelle-aperture estelle-worn">
          <img
            key={material.worn}
            src={image(material.worn)}
            alt={`${piece.name} in ${material.name}, worn to show scale`}
            fetchPriority="high"
          />
          <figcaption>
            <span>Fig. B / Worn close</span>
            <span>{piece.category}</span>
          </figcaption>
        </figure>
      </div>
      <div className="estelle-exhibit-footer">
        <div>
          <span className="estelle-micro">
            No. {piece.number} / {piece.category}
          </span>
          <h1>{piece.name}</h1>
          <p>{piece.line}</p>
        </div>
        <div className="estelle-metals">
          <span className="estelle-micro">The material</span>
          <div>
            {piece.materials.map((item, index) => (
              <button
                key={item.id}
                className={`estelle-metal estelle-metal-${item.id}`}
                aria-pressed={index === metal}
                onClick={() => onMetal(index)}
              >
                <span aria-hidden="true" />
                {item.name}
              </button>
            ))}
          </div>
        </div>
        <div className="estelle-exhibit-price">
          <span>{price(material.price)}</span>
          <a href="#estelle-material">A closer look ↓</a>
        </div>
      </div>
    </section>
  );
}
