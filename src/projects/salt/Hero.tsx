import { ArrowUpRight, ArrowDown, MapPin } from "lucide-react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
import { image } from "./data";

export function Shell({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <path
        d="M50 88C31 80 9 57 9 39c0-11 9-18 19-17C33 4 67 4 72 22c10-1 19 6 19 17 0 18-22 41-41 49Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="m50 87-29-51m29 51L35 22m15 65V14m0 73 15-65M50 87l29-51"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M41 91h18" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

export function Header() {
  return (
    <>
      <div className="salt-topline">
        Straight from the coast. Right around the corner.
      </div>
      <header className="salt-header">
        <nav aria-label="Salt navigation">
          <a href="#salt-menu">Our menu</a>
          <a href="#salt-story">Our story</a>
        </nav>
        <a href="#salt-top" className="salt-header-brand">
          <BrandLogo brand={brand} />
        </a>
        <a href="#salt-table" className="salt-reserve">
          Come on over <ArrowUpRight size={16} />
        </a>
      </header>
    </>
  );
}

export function Hero() {
  return (
    <section className="salt-hero">
      <div className="salt-hero-copy">
        <span className="salt-location">
          <MapPin size={13} />A seafood kitchen in Brighton
        </span>
        <h1>
          A little sea.
          <br />A lot of soul.
        </h1>
        <p>
          Good fish. Good people. Very good times.
          <br />
          Fresh from the water, made for the table.
        </p>
        <a className="salt-button" href="#salt-table">
          Find your spot <ArrowUpRight size={19} />
        </a>
        <div className="salt-hero-bottom">
          <span>Lunch, dinner & everything in between.</span>
          <a href="#salt-menu" aria-label="Explore the menu">
            <ArrowDown size={22} />
          </a>
        </div>
      </div>
      <div className="salt-hero-picture">
        <img
          src={image("seafood")}
          alt="Fresh prawns served with lemon on a white plate"
        />
        <div className="salt-stamp">
          <Shell />
          <span>
            Fresh catch.
            <br />
            Fresh daily.
          </span>
        </div>
        <svg
          className="salt-fish-drawing"
          viewBox="0 0 180 100"
          aria-hidden="true"
        >
          <path
            d="M28 51C68 3 124 9 149 51c-25 43-81 48-121 0Zm0 0L4 17v67L28 51Zm77-27c-11 17-11 36 0 53M55 22l4-13 37 6M64 77l3 14 25-9"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="129" cy="44" r="3" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}

export function Wave() {
  return (
    <div className="salt-wave-band">
      <span>Fresh by nature.</span>
      <svg viewBox="0 0 500 40" preserveAspectRatio="none" aria-hidden="true">
        <path
          d="M0 20q25-25 50 0t50 0 50 0 50 0 50 0 50 0 50 0 50 0 50 0 50 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
      <span>Shared by choice.</span>
    </div>
  );
}
