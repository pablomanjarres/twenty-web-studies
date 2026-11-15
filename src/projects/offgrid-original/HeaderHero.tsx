import { ArrowDown, ArrowUpRight } from "lucide-react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
import { image } from "./data";
import { Spark } from "./Spark";

export function Header() {
  return (
    <header className="og-original-header">
      <a href="#og-original-top" aria-label="Offgrid home">
        <BrandLogo brand={brand} />
      </a>
      <nav aria-label="Studio navigation">
        <a href="#og-original-work" className="og-original-link">
          The work
        </a>
        <a href="#og-original-studio" className="og-original-link">
          The studio
        </a>
      </nav>
      <a href="#og-original-contact" className="og-original-start">
        Let’s talk <ArrowUpRight size={18} />
      </a>
    </header>
  );
}

export function Hero() {
  return (
    <section className="og-original-hero" id="og-original-top">
      <div className="og-original-hero-intro">
        <span>
          Independent minds.
          <br />
          Unordinary outcomes.
        </span>
        <span>Brand strategy / Identity / Digital</span>
      </div>
      <div className="og-original-title">
        <h1>
          GOOD
          <br />
          WEIRD.
        </h1>
        <div className="og-original-hero-collage">
          <img
            src={image("portrait")}
            alt="Fashion portrait in a yellow coat"
          />
          <div className="og-original-paper-tag">
            A little
            <br />
            off centre.
          </div>
          <Spark className="og-original-spark" />
          <span className="og-original-image-caption">
            Taking up a little more space.
          </span>
        </div>
      </div>
      <div className="og-original-hero-foot">
        <p>
          We turn strong opinions into
          <br />
          brands you can’t scroll past.
        </p>
        <a href="#og-original-work" className="og-original-link">
          Get into the work <ArrowDown size={20} />
        </a>
        <span className="og-original-coordinate">
          Based everywhere.
          <br />
          Thinking elsewhere.
        </span>
      </div>
    </section>
  );
}
