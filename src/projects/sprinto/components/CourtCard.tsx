import { ArrowUpRight, MapPin, MoveUpRight } from "lucide-react";
import { courts } from "../data";

export function CourtCard({
  court,
  onBook,
}: {
  court: (typeof courts)[number];
  onBook: (name: string, time: string) => void;
}) {
  return (
    <article className="sprinto-court-card">
      <div className="sprinto-court-icon">
        <svg viewBox="0 0 100 70" aria-hidden="true">
          <rect
            x="7"
            y="7"
            width="86"
            height="56"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M50 7v56M7 35h86M28 7v56M72 7v56"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
        <span>{court.surface}</span>
      </div>
      <div className="sprinto-court-top">
        <h3>{court.name}</h3>
        <MoveUpRight size={19} />
      </div>
      <p>
        <MapPin size={12} />
        {court.area} <span>{court.distance} away</span>
      </p>
      <div className="sprinto-court-times">
        {court.times.map((i) => (
          <button key={i} onClick={() => onBook(court.name, i)}>
            {i}
            <ArrowUpRight size={13} />
          </button>
        ))}
      </div>
      <div className="sprinto-court-price">
        <span>90 min · racket rental available</span>
        <strong>
          €28 <small>/ court</small>
        </strong>
      </div>
    </article>
  );
}
