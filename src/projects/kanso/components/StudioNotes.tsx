import { image, products } from "../data";
export function StudioNotes() {
  return (
    <>
      <section className="kanso-glaze-study">
        <img
          src={image("glaze-study-v2.webp")}
          alt="Close study of blue ceramic glaze meeting an unglazed stoneware edge"
          loading="lazy"
        />
        <div>
          <span className="kanso-label">Surface study / 01</span>
          <h2>
            A little landscape,
            <br />
            in every glaze.
          </h2>
          <p>
            Where glaze pools, the colour deepens. Where the clay rises, a
            softer shade appears. No two surfaces settle quite the same.
          </p>
          <span>Cloud glaze on warm stoneware</span>
        </div>
      </section>
      <section id="batch" className="kanso-batch">
        <div>
          <span className="kanso-label">Batch notes / 04</span>
          <h2>
            Good things,
            <br />
            made to be used.
          </h2>
          <p>
            Six forms. Five finishes. All shaped from the same warm stoneware,
            then dried slowly before the kiln.
          </p>
        </div>
        <div className="kanso-spec-table">
          <div className="kanso-spec-head">
            <span>Object</span>
            <span>Dimensions</span>
            <span>Capacity / use</span>
          </div>
          {products.map((product) => (
            <div key={product.id}>
              <span>{product.name}</span>
              <span>{product.size}</span>
              <span>{product.capacity}</span>
            </div>
          ))}
          <p>
            Care / Wash gently in warm water. Dry fully before storing. Avoid
            sudden changes in temperature.
          </p>
        </div>
      </section>
      <section id="atelier" className="kanso-atelier">
        <div className="kanso-atelier-caption">
          <span className="kanso-label">The atelier</span>
          <h2>
            One pair of hands.
            <br />A thousand small decisions.
          </h2>
          <p>
            The pressure of a thumb. The turn of the wheel. A rim shaped just
            enough. It is a slow process, and that is the point.
          </p>
        </div>
        <figure>
          <img
            src={image("studio.jpg")}
            alt="Hands shaping wet clay on a pottery wheel"
            loading="lazy"
          />
          <figcaption>
            From a lump of clay to an object for your table.
          </figcaption>
        </figure>
      </section>
    </>
  );
}
