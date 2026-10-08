import { image } from "./data";
export function Story() {
  return (
    <section className="archive-story" id="archive-story">
      <header>
        <span>A PERSPECTIVE ON DRESSING</span>
        <h2>
          Clothes with
          <br />a longer life.
        </h2>
        <span>ARCHIVE / 06</span>
      </header>
      <div className="archive-material-grid">
        <figure>
          <img
            src={image("coat-v2.webp")}
            alt="The weight and sculptural drape of a charcoal wool coat"
          />
          <figcaption>01 / THE WEIGHT OF WOOL</figcaption>
        </figure>
        <div>
          <span>SHAPE. MATERIAL. PRESENCE.</span>
          <p>
            The piece you reach for.
            <br />
            The shape you come back to.
            <br />
            The detail that becomes yours.
          </p>
          <small>
            Our collection begins with the relationships between a few
            considered forms. A generous coat, a precise jacket, a familiar
            trouser, and one expressive accent.
          </small>
          <a href="#archive-shop">Find your next constant ↗</a>
        </div>
        <figure>
          <img
            src={image("scarf-v2.webp")}
            alt="Close study of the folds and sheen of cherry silk"
          />
          <figcaption>02 / A SINGLE ACCENT</figcaption>
        </figure>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="archive-footer">
      <div>
        <span>SELECTED WITH INTENT</span>
        <a href="#archive-top">Back to the campaign ↑</a>
        <small>© 2026 Archive Studio</small>
      </div>
      <p>ARCHIVE / 06</p>
      <div>
        <span>COMPLIMENTARY DELIVERY OVER £150</span>
        <span>London / Everywhere</span>
      </div>
    </footer>
  );
}
