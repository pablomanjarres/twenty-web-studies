import { ArrowUpRight } from "lucide-react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
import { image } from "./data";

export function FeaturedSession({ onQueue }: { onQueue: () => void }) {
  return (
    <section className="sr-feature">
      <div className="sr-feature-copy">
        <div className="sr-feature-meta">
          <span>The listening session</span>
          <span>Vol. 024</span>
        </div>
        <h1>
          Stay a<br />
          little longer.
        </h1>
        <div className="sr-feature-bottom">
          <p>
            For the conversations
            <br />
            that turn into mornings.
          </p>
          <button onClick={onQueue}>
            Queue the session <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
      <div className="sr-feature-art">
        <img
          src={image("chrome")}
          alt="Liquid blue and violet holographic artwork"
        />
        <div className="sr-record">
          <span className="sr-record-centre">
            <BrandLogo brand={brand} symbolOnly />
          </span>
        </div>
        <span className="sr-art-note">An hour outside the ordinary.</span>
      </div>
    </section>
  );
}
