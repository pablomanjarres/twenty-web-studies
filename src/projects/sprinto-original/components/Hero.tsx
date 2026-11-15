import { ArrowUpRight, MapPin, Zap } from "lucide-react";
import { asset } from "../data";

export function Hero() {
  return (
    <section className="sprinto-original-hero" id="sprinto-original-home">
      <div className="sprinto-original-hero-copy">
        <span className="sprinto-original-online sprinto-original-meta">
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
          Find your court <ArrowUpRight size={20} />
        </a>
        <div className="sprinto-original-hero-meta">
          <div>
            <strong>12</strong>
            <span className="sprinto-original-meta">courts, zero excuses</span>
          </div>
          <div>
            <strong>All in.</strong>
            <span className="sprinto-original-meta">all levels welcome</span>
          </div>
        </div>
      </div>
      <div className="sprinto-original-hero-image">
        <img
          src={asset("court")}
          alt="A bright blue padel court enclosed by glass walls and dark metal fencing"
        />
        <span className="sprinto-original-hero-sticker" aria-hidden="true">
          <Zap size={20} />
          PLAY
          <br />
          YOUR WAY.
        </span>
        <div className="sprinto-original-image-location">
          <MapPin size={16} /> The Social Club, Downtown
          <span className="sprinto-original-meta">Open until 23:00</span>
        </div>
      </div>
    </section>
  );
}
