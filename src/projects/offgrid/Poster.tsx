import { ArrowDownRight } from "lucide-react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
import { projects } from "./data";
export function Poster({
  onSelect,
  onBrief,
}: {
  onSelect: (id: number) => void;
  onBrief: () => void;
}) {
  return (
    <section className="fg-poster" id="top">
      <header className="fg-nav">
        <BrandLogo brand={brand} />
        <span>
          INDEPENDENT DESIGN STUDIO
          <br />
          GOOD IDEAS, OUT IN THE WORLD.
        </span>
        <button onClick={onBrief}>
          Have something in mind? <ArrowDownRight size={16} />
        </button>
      </header>
      <div className="fg-poster-top">
        <p>
          We’re a small studio
          <br />
          with a big appetite for
          <br />
          <em>the unexpected.</em>
          <small>
            Identity. Websites. Things that matter.
            <br />
            Built with a point of view.
          </small>
        </p>
        <nav aria-label="Selected projects">
          <span>SELECTED WORK / 2025—26</span>
          {projects.map((p, i) => (
            <a key={p.id} href="#work" onClick={() => onSelect(p.id)}>
              <sup>0{i + 1}</sup>
              {p.name}
              <ArrowDownRight size={28} />
            </a>
          ))}
          <a href="#studio" className="fg-studio-link">
            A few words about us ↗
          </a>
        </nav>
      </div>
      <div className="fg-wordmark">
        <h1>
          <span>OFF</span>
          <span>GRID</span>
        </h1>
        <span>
          LESS EXPECTED.
          <br />
          MORE REMEMBERED.
        </span>
      </div>
      <div className="fg-poster-bottom">
        <span>
          THINK CLEARLY.
          <br />
          MAKE IT FEEL SOMETHING.
        </span>
        <a href="#work">
          A closer look <ArrowDownRight size={19} />
        </a>
        <span>
          BASED EVERYWHERE.
          <br />
          WORKING TOGETHER.
        </span>
      </div>
    </section>
  );
}
