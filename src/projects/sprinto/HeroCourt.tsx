import { rallyImage, type BookingState } from "./data";
import { BookingPanel } from "./BookingPanel";
const clubFacts = [
  "Bring your people",
  "Rackets at the desk",
  "Open daily 07:00 to 22:00",
];
export function HeroCourt({
  booking,
  update,
  confirmed,
  confirm,
}: {
  booking: BookingState;
  update: (patch: Partial<BookingState>) => void;
  confirmed: boolean;
  confirm: () => void;
}) {
  return (
    <section className="sp-court-stage" id="court-book">
      <div className="sp-environment">
        <img
          src={rallyImage}
          alt="A golden-hour padel rally on a violet glass-enclosed court"
        />
        <div className="sp-scene-title">
          <span className="sp-eyebrow">Your club. Your court.</span>
          <h1>
            Meet you
            <br />
            at the net.
          </h1>
        </div>
        <div className="sp-court-caption">
          <span className="sp-eyebrow">
            <i aria-hidden="true" />
            Open until 22:00
          </span>
          <p>Four panoramic courts. A court, a racket, a reason to get out.</p>
        </div>
        <BookingPanel
          booking={booking}
          update={update}
          confirmed={confirmed}
          confirm={confirm}
        />
      </div>
      <ul className="sp-club-strip">
        {clubFacts.map((fact) => (
          <li key={fact}>{fact}</li>
        ))}
      </ul>
    </section>
  );
}
