import { ArrowUpRight } from "lucide-react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
import { image } from "./data";

export function Journal() {
  return (
    <section className="wf-journal" id="wf-journal">
      <div className="wf-journal-image">
        <img src={image("camp")} alt="A peaceful stretch of open countryside" />
        <span>Notes from the field</span>
      </div>
      <div className="wf-journal-copy">
        <span className="wf-kicker">The slower things</span>
        <h2>
          Sometimes the best
          <br />
          plan is a footpath.
        </h2>
        <p>
          A notebook, a good pair of boots and a day with nothing at the other
          end. Our field notes are about making room for that kind of travel.
        </p>
        <details>
          <summary>
            Read the field note <ArrowUpRight size={20} />
          </summary>
          <p>
            Start early. Carry less than you think. Ask someone who lives there
            which way they would go. Leave enough daylight to take the path you
            did not plan for.
          </p>
        </details>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="wf-footer" id="wf-way">
      <div>
        <BrandLogo brand={brand} />
        <p>
          More outside.
          <br />
          More to remember.
        </p>
      </div>
      <p>
        We believe a good journey leaves
        <br />
        room for the unexpected.
      </p>
      <a href="#wf-top">Back to the trailhead ↑</a>
    </footer>
  );
}
