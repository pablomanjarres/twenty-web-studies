import { ArrowUpRight } from "lucide-react";
import { ways } from "../data";

export function Play() {
  return (
    <section className="sprinto-original-play" id="sprinto-original-play">
      <h2>
        THERE’S MORE THAN
        <br />
        ONE WAY TO PLAY.
      </h2>
      <ol>
        {ways.map(({ title, copy, cta }, index) => (
          <li key={title}>
            <span className="sprinto-original-meta">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{title}</h3>
            <p>{copy}</p>
            <a href="#sprinto-original-courts">
              {cta} <ArrowUpRight size={18} />
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
