import { MapPin } from "lucide-react";
import { courts } from "../data";

export function CourtCard({
  court,
  onBook,
}: {
  court: (typeof courts)[number];
  onBook: (name: string, time: string) => void;
}) {
  return (
    <article className="sprinto-original-court-card">
      <div className="sprinto-original-court-tags">
        <span className="sprinto-original-court-surface sprinto-original-meta">
          {court.surface}
        </span>
        <span>{court.distance} away</span>
      </div>
      <h3>{court.name}</h3>
      <p className="sprinto-original-court-area">
        <MapPin size={14} aria-hidden="true" />
        {court.area}
      </p>
      <span className="sprinto-original-court-label sprinto-original-meta">
        Tonight
      </span>
      <div className="sprinto-original-court-times">
        {court.times.map((time) => (
          <button
            key={time}
            aria-label={`Book ${court.name} at ${time}`}
            onClick={() => onBook(court.name, time)}
          >
            {time}
          </button>
        ))}
      </div>
      <div className="sprinto-original-court-price">
        <span>90 min · racket rental</span>
        <strong>
          €28 <small>/ court</small>
        </strong>
      </div>
    </article>
  );
}
