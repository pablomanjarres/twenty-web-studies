import { ArrowUpRight } from "lucide-react";
import { ways } from "../data";

export function Play() {
  return (
    <section className="sprinto-play" id="play">
      <h2>
        THERE’S MORE THAN
        <br />
        ONE WAY TO PLAY.
      </h2>
      <div>
        {ways.map(({ icon: Icon, title, copy }) => (
          <article key={title}>
            <Icon size={25} />
            <h3>{title}</h3>
            <p>{copy}</p>
            <a href="#courts">
              Get into it <ArrowUpRight size={17} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
