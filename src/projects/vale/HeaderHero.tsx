import { ArrowDown, ArrowRight, Leaf } from "lucide-react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
import { image } from "./data";

export function Header({
  count,
  onOpen,
}: {
  count: number;
  onOpen: () => void;
}) {
  return (
    <header className="va-header">
      <a href="#va-home" aria-label="Vale home">
        <BrandLogo brand={brand} />
      </a>
      <nav aria-label="Main navigation">
        <a href="#va-essentials">The essentials</a>
        <a href="#va-philosophy">Our philosophy</a>
        <a href="#va-ritual">Your ritual</a>
      </nav>
      <button onClick={onOpen}>
        My ritual <span>{count}</span>
      </button>
    </header>
  );
}

export function Hero() {
  return (
    <section className="va-hero" id="va-home">
      <div className="va-hero-copy">
        <span className="va-kicker">Botanical care, beautifully simple</span>
        <h1>
          A little care.
          <br />
          <i>Every day.</i>
        </h1>
        <p>
          A thoughtful collection for the small
          <br />
          moments that are yours alone.
        </p>
        <a className="va-link" href="#va-essentials">
          Meet your daily essentials <ArrowRight size={18} />
        </a>
        <span className="va-hero-foot">
          <Leaf size={13} /> Thoughtfully made. A pleasure to use.
        </span>
      </div>
      <div className="va-hero-image">
        <img
          src={image("campaign")}
          alt="Pale green frosted skincare bottles and cream jar on limestone with botanical leaves"
        />
        <span className="va-image-note">A softer kind of everyday.</span>
        <a
          href="#va-essentials"
          className="va-hero-down"
          aria-label="Explore the essentials"
        >
          <ArrowDown size={18} />
        </a>
      </div>
    </section>
  );
}
