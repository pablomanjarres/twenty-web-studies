import { ArrowDown, ArrowUpRight, Wind } from "lucide-react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
import { image, approaches } from "./data";

export function Header() {
  return (
    <header className="ve-header">
      <a href="#ve-home" aria-label="Verdant home">
        <BrandLogo brand={brand} />
      </a>
      <nav aria-label="Main navigation">
        <a href="#ve-approaches">Our approach</a>
        <a href="#ve-current">The bigger picture</a>
      </nav>
      <a className="ve-header-contact" href="#ve-conversation">
        Let’s talk energy <ArrowUpRight size={17} />
      </a>
    </header>
  );
}

export function Hero() {
  return (
    <section className="ve-hero" id="ve-home">
      <div className="ve-hero-heading">
        <div>
          <span className="ve-kicker">Good energy. A long view.</span>
          <h1>
            A better
            <br />
            current<span>®</span>.
          </h1>
        </div>
        <div className="ve-hero-note">
          <BrandLogo brand={brand} symbolOnly />
          <p>
            Powering what comes next.
            <br />
            With the things
            <br />
            the world already gives us.
          </p>
          <a href="#ve-approaches">
            Explore our approach <ArrowDown size={17} />
          </a>
        </div>
      </div>
      <div className="ve-hero-landscape">
        <div className="ve-landscape-photo">
          <img
            src={image("turbines")}
            alt="Wind turbines across an open field at golden sunset"
          />
          <span className="ve-photo-top">ENERGY IN THE EVERYDAY</span>
          <span className="ve-photo-bottom">
            Room for a different kind of future.
          </span>
        </div>
        <aside className="ve-landscape-note">
          <span className="ve-kicker">The direction is clear</span>
          <h2>
            More
            <br />
            possibility.
            <br />
            Less footprint.
          </h2>
          <a href="#ve-current" aria-label="Read the bigger picture">
            <ArrowUpRight size={35} />
          </a>
        </aside>
      </div>
      <div className="ve-hero-foot">
        <span>Renewable by nature. Considered by design.</span>
        <span>Solar / Wind / Storage</span>
      </div>
    </section>
  );
}
