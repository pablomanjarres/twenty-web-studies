import { ArrowUpRight } from "lucide-react";
import { asset } from "../data";

export function Hero() {
  return (
    <section className="forma-hero" id="home">
      <div className="forma-hero-heading">
        <h1>
          Space, shaped
          <br />
          by living.
        </h1>
        <div>
          <p>
            Architecture and interiors.
            <br />
            Thoughtfully made. Quietly enduring.
          </p>
          <a
            href="#projects"
            className="forma-round-link"
            aria-label="Explore selected work"
          >
            <ArrowUpRight size={26} />
          </a>
        </div>
      </div>
      <figure className="forma-hero-image">
        <img
          src={asset("hero")}
          alt="Light-filled residence with natural wood, pale stone, and thoughtful furnishings"
        />
        <figcaption>
          <div>
            <span>Featured project</span>
            <strong>The Linden Residence</strong>
          </div>
          <span>Copenhagen, 2026</span>
          <a href="#projects" aria-label="View the Linden Residence">
            <ArrowUpRight size={22} />
          </a>
        </figcaption>
      </figure>
      <div className="forma-caption">
        <span>Considered spaces for extraordinary everyday lives.</span>
        <span>Based in Copenhagen. Working everywhere.</span>
      </div>
    </section>
  );
}
