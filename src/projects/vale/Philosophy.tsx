import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
import { image } from "./data";

export function Philosophy() {
  return (
    <section className="va-philosophy" id="va-philosophy">
      <div className="va-philosophy-image">
        <img
          src={image("bottles")}
          alt="Amber botanical serum bottle in warm leaf shadows"
        />
        <span>Nature, thoughtfully considered.</span>
      </div>
      <div className="va-philosophy-copy">
        <BrandLogo brand={brand} symbolOnly />
        <span className="va-kicker">Our philosophy</span>
        <h2>
          Care for your skin.
          <br />
          <i>Make room for you.</i>
        </h2>
        <p>
          We believe a daily ritual can be a quiet pleasure. Something simple,
          something familiar, something you look forward to.
        </p>
        <p>
          Our starting point is nature. Our approach is thoughtful. Every
          texture, every detail, every bottle has a place in the everyday.
        </p>
        <div className="va-principles">
          <span>Botanical by nature</span>
          <span>Considered by design</span>
          <span>Made for the everyday</span>
        </div>
      </div>
    </section>
  );
}
