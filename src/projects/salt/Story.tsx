import { ArrowUpRight } from "lucide-react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
import { image } from "./data";
import { Shell } from "./Hero";

export function Story() {
  return (
    <section className="salt-story" id="salt-story">
      <div>
        <Shell />
        <span>A place at our table</span>
        <h2>
          Come hungry.
          <br />
          Leave happy.
        </h2>
        <p>
          We’re a small kitchen with a big love for the coast. We work with
          local boats, cook what’s good today, and believe the best meals are
          the ones you share.
        </p>
        <a href="#salt-table">
          We saved you a seat <ArrowUpRight size={18} />
        </a>
      </div>
      <img
        src={image("coast")}
        alt="Brighton coast with a wide sandy beach and blue water"
      />
    </section>
  );
}

export function Footer() {
  return (
    <footer className="salt-footer">
      <BrandLogo brand={brand} />
      <div>
        28 Marine Parade
        <br />
        Brighton BN2 1TR
      </div>
      <div>
        Tuesday–Sunday
        <br />
        12:00 until late
      </div>
      <a href="#salt-top">Back to the coast ↑</a>
      <span>© 2026 Salt Kitchen</span>
    </footer>
  );
}
