import { ArrowUpRight } from "lucide-react";
import { asset } from "../data";

export function Story() {
  return (
    <section className="kanso-story" id="story">
      <img
        src={asset("studio")}
        alt="A ceramic vessel taking shape on the potter’s wheel under a maker’s hands"
      />
      <div>
        <span>From our hands to yours.</span>
        <h2>
          A little imperfect.
          <br />
          Entirely <em>yours.</em>
        </h2>
        <p>
          Clay has a memory. It holds the touch of the person who shaped it, the
          warmth of the kiln, the quiet patience of making something by hand.
        </p>
        <p>
          We make slowly, in small batches. Useful objects with a little
          character. Pieces we hope you’ll keep reaching for.
        </p>
        <a href="#care" className="kanso-shop-link">
          The way we make <ArrowUpRight size={20} />
        </a>
      </div>
    </section>
  );
}
