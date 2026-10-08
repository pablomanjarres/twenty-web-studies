import { ArrowRight, ArrowUpRight } from "lucide-react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
import { image } from "./data";

export function Story() {
  return (
    <section className="ci-story" id="ci-story">
      <div className="ci-story-photo">
        <img src={image("beans")} alt="Fresh coffee beans in the roastery" />
        <span>It starts with the bean.</span>
      </div>
      <div className="ci-story-copy">
        <span className="ci-kicker">The good stuff</span>
        <h2>
          A daily ritual.
          <br />
          Worth doing well.
        </h2>
        <p>
          We love the first cup. The one shared over the kitchen counter. The
          one that lasts a little longer than it should.
        </p>
        <p>
          So we keep our approach simple: start with beautiful coffee, roast it
          with care, and leave the rest to you.
        </p>
        <a href="#ci-roastery">
          Meet us at the roastery <ArrowRight size={20} />
        </a>
        <div className="ci-story-marks">
          <span>
            Freshly
            <br />
            <strong>roasted</strong>
          </span>
          <span>
            Always
            <br />
            <strong>curious</strong>
          </span>
          <span>
            Best
            <br />
            <strong>shared</strong>
          </span>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="ci-footer" id="ci-roastery">
      <div className="ci-footer-top">
        <h2>
          Come for coffee.
          <br />
          Stay for a while.
        </h2>
        <div>
          <span className="ci-kicker">The roastery</span>
          <p>
            18 Cedar Lane
            <br />
            Monday to Saturday · 7 am to 4 pm
          </p>
          <p>
            A little corner for good coffee
            <br />
            and even better company.
          </p>
        </div>
      </div>
      <div className="ci-footer-word">
        cinder<span>®</span>
      </div>
      <div className="ci-footer-bottom">
        <BrandLogo brand={brand} symbolOnly />
        <span>Good coffee, every day.</span>
        <a href="#ci-home">
          Back to the top <ArrowUpRight size={15} />
        </a>
      </div>
    </footer>
  );
}
