import { ArrowDown, Footprints } from "lucide-react";
import { image, type Trail } from "./data";

export function JourneyPhoto({ trail }: { trail: Trail }) {
  return (
    <div className="wf-journey-photo">
      <img src={image(trail.image)} alt={trail.imageAlt} />
      <div className="wf-photo-invitation">
        <span>
          <Footprints size={17} /> Small-group walking journeys
        </span>
        <h1>
          Take the
          <br />
          long way.
        </h1>
        <p>
          A path worth following.
          <br />
          People worth walking with.
        </p>
      </div>
      <div className="wf-photo-caption">
        <span>{trail.region}</span>
        <a href="#field-notes" aria-label="Read walking field notes">
          <ArrowDown size={20} />
        </a>
      </div>
    </div>
  );
}
