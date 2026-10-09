import { ArrowUpRight, MapPin, Zap } from "lucide-react";
import { BrandLogo } from "../../../shared/BrandLogo";
import { brand } from "../brand";
import { asset } from "../data";

export function Hero() {
  return (
    <section className="sprinto-original-hero" id="sprinto-original-home">
      <div className="sprinto-original-hero-copy">
        <span className="sprinto-original-online">
          <i /> Your next game starts here
        </span>
        <h1>
          LESS SCROLL.
          <br />
          MORE <span>PADEL.</span>
        </h1>
        <p>
          Good people. Great rallies. A court with your name on it. Make a
          little room for the game.
        </p>
        <a
          className="sprinto-original-lime-button"
          href="#sprinto-original-courts"
        >
          Find your court <ArrowUpRight size={21} />
        </a>
        <div className="sprinto-original-hero-meta">
          <div>
            <strong>12</strong>
            <span>courts, zero excuses</span>
          </div>
          <div>
            <strong>All in.</strong>
            <span>all levels welcome</span>
          </div>
        </div>
      </div>
      <div className="sprinto-original-hero-image">
        <img
          src={asset("court")}
          alt="A bright blue padel court enclosed by glass walls and dark metal fencing"
        />
        <div className="sprinto-original-image-label">
          <span>
            GOOD DAYS
            <br />
            START WITH
            <br />A GOOD GAME.
          </span>
          <BrandLogo brand={brand} symbolOnly />
        </div>
        <div className="sprinto-original-image-location">
          <MapPin size={13} /> The Social Club, Downtown{" "}
          <span>Open until 23:00</span>
        </div>
      </div>
      <span className="sprinto-original-hero-sticker">
        <Zap size={20} />
        PLAY
        <br />
        YOUR WAY.
      </span>
    </section>
  );
}
