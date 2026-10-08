import { ArrowDown, ArrowUpRight } from "lucide-react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
import { image } from "./data";
import { Studio } from "./Studio";

export function Header() {
  return (
    <header className="og-header">
      <a href="#og-top" aria-label="Offgrid home">
        <BrandLogo brand={brand} />
      </a>
      <nav aria-label="Studio navigation">
        <a href="#og-work">The work</a>
        <a href="#og-studio">The studio</a>
      </nav>
      <a href="#og-contact" className="og-start">
        Let’s talk <ArrowUpRight size={19} />
      </a>
    </header>
  );
}

export function Hero() {
  return (
    <section className="og-hero" id="og-top">
      <div className="og-hero-intro">
        <span>
          Independent minds.
          <br />
          Unordinary outcomes.
        </span>
        <span>Brand strategy / Identity / Digital</span>
      </div>
      <div className="og-title">
        <h1>
          GOOD
          <br />
          WEIRD.
        </h1>
        <div className="og-hero-collage">
          <img
            src={image("portrait")}
            alt="Fashion portrait in a yellow coat"
          />
          <div className="og-paper-tag">
            A little
            <br />
            off centre.
          </div>
          <svg className="og-spark" viewBox="0 0 100 100" aria-hidden="true">
            <path
              d="M45 0h10l6 32 27-19 7 9-27 20 32 3v11l-32 5 22 26-9 7-23-28-3 34H44l-4-32-26 20-7-9 27-21L0 55V44l32-4L12 14l9-7 23 28z"
              fill="currentColor"
            />
          </svg>
          <span className="og-image-caption">
            Taking up a little more space.
          </span>
        </div>
      </div>
      <div className="og-hero-foot">
        <p>
          We turn strong opinions into
          <br />
          brands you can’t scroll past.
        </p>
        <a href="#og-work">
          Get into the work <ArrowDown size={20} />
        </a>
        <span className="og-coordinate">
          Based everywhere.
          <br />
          Thinking elsewhere.
        </span>
      </div>
    </section>
  );
}
