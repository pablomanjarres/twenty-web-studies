import { Mountain } from "lucide-react";

export function Retreat() {
  return (
    <section className="vestra-intro" id="retreat">
      <span>A quieter kind of luxury</span>
      <h2>
        Some places ask you to do more.
        <br /> Here, we invite you to <em>just be.</em>
      </h2>
      <p>
        Held between the forest and the sky, Vestra is a small retreat with a
        deep sense of place. Thoughtful rooms. Food from the seasons. Days that
        unfold in their own time.
      </p>
      <div className="vestra-intro-seal">
        <Mountain size={25} />
        <span>
          Rooted in the Alps.
          <br />
          Made for you.
        </span>
      </div>
    </section>
  );
}
