import { ArrowUpRight } from "lucide-react";
import { asset } from "../data";

export function Stay() {
  return (
    <section className="vestra-stay" id="stay">
      <div className="vestra-stay-photo">
        <img
          src={asset("suite")}
          alt="Elegant boutique hotel surrounded by quiet landscaped gardens"
        />
        <span>Rest, with a view.</span>
      </div>
      <div className="vestra-stay-copy">
        <span>Your own little world</span>
        <h2>
          Wake up
          <br />
          somewhere
          <br />
          wonderful.
        </h2>
        <p>
          Natural textures, warm light, and a landscape that becomes part of the
          room. Each of our 24 suites is a thoughtful invitation to slow down.
        </p>
        <div className="vestra-suite-details">
          <div>
            <strong>24</strong>
            <span>Considered suites</span>
          </div>
          <div>
            <strong>∞</strong>
            <span>Ways to unwind</span>
          </div>
        </div>
        <a className="vestra-outline-link" href="#booking">
          Discover your stay <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}
