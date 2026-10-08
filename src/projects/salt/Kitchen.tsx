import { ArrowUpRight } from "lucide-react";
import { image } from "./data";
export function Kitchen() {
  return (
    <section id="kitchen" className="sl-kitchen">
      <figure>
        <img
          src={image("coast")}
          alt="A coastal landscape beside the water"
          loading="lazy"
        />
        <figcaption>FROM THE COAST, INTO THE KITCHEN.</figcaption>
      </figure>
      <div className="sl-kitchen-story">
        <span>GOOD FOOD STARTS NEARBY.</span>
        <h2>
          We know the people.
          <br />
          They know the sea.
        </h2>
        <p>
          Our menu starts with the boats that come in each morning, the growers
          around the corner and the things that taste best right now. A small
          kitchen, a short supply chain, and a table with room for another
          chair.
        </p>
        <a href="#tables">
          Come over for dinner <ArrowUpRight size={18} />
        </a>
      </div>
      <div className="sl-catch-note">
        <img
          src={image("fish")}
          alt="Fresh whole fish on a plate ready for the coastal kitchen"
          loading="lazy"
        />
        <span>THE MORNING’S CATCH</span>
        <p>
          Ask what’s fresh.
          <br />
          We’ll tell you where it came from.
        </p>
      </div>
    </section>
  );
}
