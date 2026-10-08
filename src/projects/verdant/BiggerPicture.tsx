import { ArrowRight } from "lucide-react";
import { flow } from "./data";

export function BiggerPicture() {
  return (
    <section className="ve-current" id="ve-current">
      <div className="ve-current-heading">
        <span className="ve-kicker">The bigger picture</span>
        <h2>
          From the field.
          <br />
          To the familiar.
        </h2>
        <p>
          Energy is part of every ordinary day.
          <br />
          So the way we make it matters.
        </p>
      </div>
      <div className="ve-flow">
        {flow.map(({ number, Icon, title, text }, index) => (
          <article key={number}>
            <div className="ve-flow-symbol">
              <Icon size={37} strokeWidth={1.2} />
              {index < flow.length - 1 && (
                <ArrowRight size={26} strokeWidth={1} />
              )}
            </div>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
