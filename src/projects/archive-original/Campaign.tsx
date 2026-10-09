import { ArrowUpRight, Plus } from "lucide-react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
import { image } from "./data";

export function Header({ count, onBag }: { count: number; onBag: () => void }) {
  return (
    <>
      <div className="archive-original-utility">
        <span>Selected pieces. Considered choices.</span>
        <span>Complimentary delivery over £150</span>
      </div>
      <header className="archive-original-header">
        <a href="#archive-original-top">
          <BrandLogo brand={brand} />
        </a>
        <nav aria-label="Archive navigation">
          <a href="#archive-original-shop">New arrivals</a>
          <a href="#archive-original-shop">Shop the edit</a>
          <a href="#archive-original-story">Our perspective</a>
        </nav>
        <button onClick={onBag} className="archive-original-bag">
          Bag <span>({count})</span>
          <Plus size={15} />
        </button>
      </header>
    </>
  );
}

export function Hero() {
  return (
    <section className="archive-original-hero">
      <div className="archive-original-hero-title">
        <h1>New forms.</h1>
        <div>
          <span>Collection 06 / Autumn 2026</span>
          <p>
            A new season.
            <br />A different point of view.
          </p>
          <a href="#archive-original-shop">
            Explore the collection <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
      <div className="archive-original-campaign">
        <div className="archive-original-campaign-main">
          <img
            src={image("campaign")}
            alt="Fashion editorial featuring a tailored coat in the city"
          />
          <div className="archive-original-campaign-caption">
            <span>Shape your everyday.</span>
            <a
              href="#archive-original-shop"
              aria-label="Shop the new collection"
            >
              <ArrowUpRight size={29} />
            </a>
          </div>
        </div>
        <div className="archive-original-campaign-side">
          <img
            src={image("look")}
            alt="Expressive streetwear silhouette with a cropped hooded jacket"
          />
          <div>
            <span>
              For the way
              <br />
              you move.
            </span>
            <small>The everyday edit / 2026</small>
          </div>
        </div>
      </div>
      <div className="archive-original-hero-bottom">
        <span>Individual by instinct.</span>
        <span>Designed to stay in rotation.</span>
        <a href="#archive-original-shop">Discover what’s new ↓</a>
      </div>
    </section>
  );
}
