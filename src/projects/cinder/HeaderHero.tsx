import { ArrowDown, ArrowUpRight, ShoppingBag } from "lucide-react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
import { image } from "./data";
import { Basket } from "./Basket";

export function Header({
  count,
  onBasket,
}: {
  count: number;
  onBasket: () => void;
}) {
  return (
    <header className="ci-header">
      <a href="#ci-home" aria-label="Cinder home">
        <BrandLogo brand={brand} />
      </a>
      <nav aria-label="Main navigation">
        <a href="#ci-coffee">Our coffee</a>
        <a href="#ci-story">The good stuff</a>
        <a href="#ci-roastery">Come say hi</a>
      </nav>
      <button className="ci-basket-button" onClick={onBasket}>
        <ShoppingBag size={17} />
        <span>Basket ({count})</span>
      </button>
    </header>
  );
}

export function RoastSeal() {
  return (
    <div className="ci-roast-seal" aria-label="Roasted fresh in small batches">
      <svg viewBox="0 0 160 160" aria-hidden="true">
        <defs>
          <path id="ci-circle-path" d="M80,22a58,58 0 1,1 -1,0" />
        </defs>
        <text>
          <textPath href="#ci-circle-path">
            ROASTED FRESH · GOOD EVERY DAY ·{" "}
          </textPath>
        </text>
      </svg>
      <span>
        Small
        <br />
        batch.<i>Big heart.</i>
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section className="ci-hero" id="ci-home">
      <div className="ci-hero-heading">
        <div className="ci-kicker">
          <span className="ci-mini-flame" /> A little heat. A lot of heart.
        </div>
        <h1>
          Fresh roast.
          <br />
          Slow mornings.
        </h1>
        <p>
          Good coffee is a small thing
          <br />
          that makes the whole day better.
        </p>
        <a className="ci-yellow-button" href="#ci-coffee">
          Find your daily cup <ArrowUpRight size={22} />
        </a>
        <span className="ci-hero-bottom">
          Fresh from our roastery to your kitchen.
        </span>
      </div>
      <div className="ci-hero-photo">
        <img
          src={image("cup")}
          alt="Freshly poured latte cups on a warm wooden café table"
        />
        <RoastSeal />
        <span className="ci-photo-caption">
          Pull up a chair. The kettle’s on.
        </span>
      </div>
      <a className="ci-scroll" href="#ci-coffee" aria-label="Browse the coffee">
        <ArrowDown size={17} />
      </a>
    </section>
  );
}
