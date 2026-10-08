import { ArrowRight, Heart, ChevronDown } from "lucide-react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
import { image } from "./data";

export function Header({ favorites }: { favorites: number }) {
  return (
    <>
      <div className="estelle-topline">
        Complimentary delivery. Beautifully wrapped.
      </div>
      <header className="estelle-header">
        <nav aria-label="Estelle navigation">
          <a href="#estelle-collection">The collection</a>
          <a href="#estelle-atelier">Our atelier</a>
        </nav>
        <a href="#estelle-top" className="estelle-header-brand">
          <BrandLogo brand={brand} />
        </a>
        <div className="estelle-header-right">
          <a href="#estelle-visit">Visit us</a>
          <a
            href="#estelle-collection"
            aria-label={favorites + " saved pieces"}
          >
            <Heart size={15} />
            <span>{favorites}</span>
          </a>
        </div>
      </header>
    </>
  );
}

export function Hero() {
  return (
    <section className="estelle-hero">
      <img
        className="estelle-campaign"
        src={image("campaign")}
        alt="Sculptural gold ring and earrings on deep plum marble"
      />
      <div className="estelle-hero-copy">
        <span>The Solstice Collection</span>
        <h1>
          A quiet kind
          <br />
          of extraordinary.
        </h1>
        <p>
          Jewelry that holds a feeling.
          <br />
          Sculpted in gold. Made to stay.
        </p>
        <a href="#estelle-collection" className="estelle-link">
          Discover the collection <ArrowRight size={22} />
        </a>
      </div>
      <div className="estelle-hero-bottom">
        <span>Objects of affection. Since 2014.</span>
        <a href="#estelle-collection">
          Explore below <ChevronDown size={12} />
        </a>
        <span>Solstice / 2026</span>
      </div>
    </section>
  );
}
