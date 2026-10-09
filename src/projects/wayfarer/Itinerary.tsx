import { ArrowUpRight, Check, ChevronDown, CalendarDays } from "lucide-react";
import { departures, type Trail } from "./data";

export function Itinerary({
  trail,
  departure,
  reserved,
  onDeparture,
  onPlan,
}: {
  trail: Trail;
  departure: string;
  reserved: boolean;
  onDeparture: (date: string) => void;
  onPlan: () => void;
}) {
  return (
    <aside className="wf-itinerary" aria-label="Selected journey">
      <div className="wf-ticket-top">
        <span>Your next chapter</span>
        <span>{trail.kind}</span>
      </div>
      <h2>{trail.name}</h2>
      <p className="wf-region">{trail.region}</p>
      <p className="wf-trip-note">{trail.note}</p>
      <dl className="wf-trip-facts">
        <div>
          <dt>On the trail</dt>
          <dd>{trail.days}</dd>
        </div>
        <div>
          <dt>Distance</dt>
          <dd>{trail.distance}</dd>
        </div>
        <div>
          <dt>Ascent</dt>
          <dd>{trail.ascent}</dd>
        </div>
      </dl>
      <div className="wf-stops-heading">Four places along the way</div>
      <ol className="wf-stops">
        {trail.stops.map((stop) => (
          <li key={stop}>{stop}</li>
        ))}
      </ol>
      <div className="wf-trip-planning">
        <label className="wf-departure">
          <span>
            <CalendarDays size={15} /> Departure
          </span>
          <select
            value={departure}
            onChange={(event) => onDeparture(event.target.value)}
          >
            {departures.map((date) => (
              <option key={date}>{date}</option>
            ))}
          </select>
          <ChevronDown size={16} />
        </label>
        <div className="wf-trip-price">
          <span>
            From <strong>{trail.price}</strong>
          </span>
          <small>per person · groups of 8</small>
        </div>
        <button className="wf-plan" onClick={onPlan}>
          {reserved ? "Added to your journey plan" : "Plan this journey"}
          {reserved ? <Check size={18} /> : <ArrowUpRight size={18} />}
        </button>
        <p className="wf-price" aria-live="polite">
          {reserved
            ? `${trail.region} · ${departure} · ${trail.days}`
            : "A good walk starts with a small plan."}
        </p>
      </div>
    </aside>
  );
}
