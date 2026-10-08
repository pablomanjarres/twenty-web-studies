import { ArrowUpRight, Compass, MapPin, MoveDown, Sun } from "lucide-react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
import { image, journeys } from "./data";

export function Header() {
  return (
    <header className="wf-header">
      <a href="#wf-top" aria-label="Wayfarer home">
        <BrandLogo brand={brand} />
      </a>
      <nav aria-label="Main navigation">
        <a href="#wf-journeys">The journeys</a>
        <a href="#wf-journal">Field notes</a>
        <a href="#wf-way">Our way</a>
      </nav>
      <a className="wf-nav-cta" href="#wf-journeys">
        Find your next journey <ArrowUpRight size={17} />
      </a>
    </header>
  );
}

export function Hero() {
  return (
    <section className="wf-hero" id="wf-top">
      <img
        className="wf-hero-image"
        src={image("hero")}
        alt="A hiker standing above a vast sunlit mountain valley"
      />
      <div className="wf-hero-shade" />
      <div className="wf-hero-meta">
        <span>
          <Compass size={15} /> A journal for the curious
        </span>
        <span>
          <Sun size={16} /> Out here feels different
        </span>
      </div>
      <div className="wf-hero-copy">
        <h1>
          Take the
          <br />
          long way.
        </h1>
        <p>
          Good stories rarely start
          <br />
          with the shortest route.
        </p>
        <a
          href="#wf-journeys"
          className="wf-round-link"
          aria-label="Explore the journeys"
        >
          <MoveDown size={25} />
        </a>
      </div>
      <div className="wf-hero-bottom">
        <span>
          <MapPin size={15} /> Somewhere in the Carpathians
        </span>
        <span>45° 36′ N &nbsp; 24° 43′ E</span>
        <span className="wf-scroll-note">Keep wandering ↓</span>
      </div>
    </section>
  );
}
