import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { image, journeys } from "./data";

export function JourneyCard({
  journey,
}: {
  journey: (typeof journeys)[number];
}) {
  const [open, setOpen] = useState(false);
  return (
    <article className="wf-journey">
      <div className="wf-journey-photo">
        <img
          src={image(journey.image)}
          alt={
            journey.place === "Dolomites, Italy"
              ? "A still alpine lake beneath a mountain village"
              : journey.place === "Lake District, England"
                ? "Wide countryside beneath a changing sky"
                : "A sunlit mountain ridgeline"
          }
        />
        <span>{journey.days} outside</span>
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={`${open ? "Close" : "Read"} ${journey.name}`}
        >
          <ArrowUpRight size={22} />
        </button>
      </div>
      <div className="wf-card-meta">
        <span>{journey.place}</span>
        <span>{journey.kind}</span>
      </div>
      <h3>{journey.name}</h3>
      {open && <p className="wf-journey-note">{journey.note}</p>}
    </article>
  );
}

export function JourneyIndex() {
  const [filter, setFilter] = useState("All journeys");
  const filtered = journeys.filter(
    (journey) => filter === "All journeys" || journey.kind === filter,
  );
  return (
    <section className="wf-index" id="wf-journeys">
      <div className="wf-section-heading">
        <div>
          <span className="wf-kicker">A little further from familiar</span>
          <h2>
            Where shall
            <br />
            we go next?
          </h2>
        </div>
        <p>
          Small groups. Local knowledge. Big days outside.
          <br />A few good places to begin.
        </p>
      </div>
      <div className="wf-filters" role="group" aria-label="Filter journeys">
        {["All journeys", "Alpine", "Countryside"].map((item) => (
          <button
            key={item}
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
        <span>{filtered.length} routes to get lost in</span>
      </div>
      <div className="wf-journey-grid">
        {filtered.map((journey) => (
          <JourneyCard key={journey.name} journey={journey} />
        ))}
      </div>
    </section>
  );
}
