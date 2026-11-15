import { ArrowUpRight } from "lucide-react";
import { image } from "./data";

export function Hero() {
  return (
    <section className="archive-original-hero">
      <div className="archive-original-hero-title">
        <h1>New forms.</h1>
        <div className="archive-original-hero-intro">
          <span className="archive-original-label">
            Collection 06 / Autumn 2026
          </span>
          <p>
            A new season.
            <br />A different point of view.
          </p>
          <a
            href="#archive-original-shop"
            className="archive-original-arrow-link archive-original-label"
          >
            Explore the collection <ArrowUpRight size={17} aria-hidden="true" />
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
              <ArrowUpRight size={29} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="archive-original-campaign-side">
          <img
            src={image("look")}
            alt="Expressive streetwear silhouette with a cropped hooded jacket"
          />
          <div>
            <small className="archive-original-label">
              The everyday edit / 2026
            </small>
            <span className="archive-original-campaign-side-title">
              For the way
              <br />
              you move.
            </span>
            <a
              href="#archive-original-shop"
              className="archive-original-triangle-link archive-original-label"
            >
              Shop the everyday edit
            </a>
          </div>
        </div>
      </div>
      <div className="archive-original-hero-bottom archive-original-label">
        <span>Individual by instinct.</span>
        <span>Designed to stay in rotation.</span>
        <a href="#archive-original-shop" className="archive-original-grow-link">
          Discover what’s new <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
