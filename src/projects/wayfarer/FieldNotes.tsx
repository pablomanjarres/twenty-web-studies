import { ArrowUpRight, Footprints } from "lucide-react";
import { image } from "./data";
export function FieldNotes() {
  return (
    <>
      <section id="field-notes" className="wf-notes">
        <div className="wf-note-title">
          <span>From the field</span>
          <h2>
            Good stories
            <br />
            start on foot.
          </h2>
          <p>
            Notes for the curious, the well-prepared,
            <br />
            and the happily lost.
          </p>
        </div>
        <figure>
          <img
            src={image("lake-district-walking-v3.png")}
            alt="A small walking group following a Lake District stone path"
            loading="lazy"
          />
          <figcaption>Field note 012 · The art of arriving slowly</figcaption>
        </figure>
        <div className="wf-note-index">
          {[
            "What to carry. What to leave behind.",
            "A guide to your first mountain hut.",
            "The best part of a journey is the pause.",
          ].map((title, i) => (
            <details key={title}>
              <summary>
                <span>0{i + 1}</span>
                <h3>{title}</h3>
                <ArrowUpRight size={19} />
              </summary>
              <p>
                {
                  [
                    "A good pair of walking shoes, a light rain layer and a little curiosity. We send a specific packing list before every journey.",
                    "Shared dinners, simple rooms and sunrise at the door. Our guides help with the customs that make a hut stay feel at home.",
                    "Our routes make space for unplanned lunches, quiet photographs and time to learn the names of the places we walk through.",
                  ][i]
                }
              </p>
            </details>
          ))}
        </div>
      </section>
      <section id="guide" className="wf-guide">
        <Footprints size={48} strokeWidth={1} />
        <div>
          <span>Our way of walking</span>
          <h2>
            Fewer people.
            <br />
            More of the place.
          </h2>
        </div>
        <p>
          We walk in groups of eight, with guides who know the path and the
          people along it. Thoughtful routes. Small independent stays. A pace
          that lets the landscape sink in.
        </p>
        <a href="#atlas">
          Explore the field atlas <ArrowUpRight size={20} />
        </a>
      </section>
    </>
  );
}
