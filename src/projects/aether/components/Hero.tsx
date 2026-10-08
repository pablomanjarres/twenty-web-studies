import { ArrowUpRight } from "lucide-react";
import { CardSculpture } from "./CardSculpture";

export function Hero() {
  return (
    <section className="aether-hero" id="home">
      <div className="aether-hero-copy">
        <span className="aether-note">
          <span /> Banking for the independently minded
        </span>
        <h1>
          Your talent.
          <br />
          Your terms.
          <br />
          Your money.
        </h1>
        <p>
          Big ideas deserve better banking. One beautiful account for everything
          you do on your own.
        </p>
        <a className="aether-button" href="#account">
          Find your flow <ArrowUpRight size={20} />
        </a>
        <div className="aether-social-proof">
          <div className="aether-avatar-stack">
            {["JW", "AL", "MK"].map((i) => (
              <span key={i}>{i}</span>
            ))}
          </div>
          <p>
            Made for the makers.
            <br />
            <strong>Built around independence.</strong>
          </p>
        </div>
      </div>
      <CardSculpture />
    </section>
  );
}
