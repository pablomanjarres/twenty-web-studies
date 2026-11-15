import { rallyImage, type BookingState } from "./data";
import { BookingPanel } from "./BookingPanel";
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
          <span>YOUR CLUB. YOUR COURT.</span>
          <h1>
            Meet you
            <br />
            at the net.
          </h1>
          <p>A court, a racket, a reason to get out.</p>
        </div>
        <div className="sp-court-caption">
          <span>
            <i />
            OPEN UNTIL 22:00
          </span>
          <p>
            Four panoramic courts.
            <br />
            One very good way to spend your evening.
          </p>
        </div>
        <BookingPanel
          booking={booking}
          update={update}
          confirmed={confirmed}
          confirm={confirm}
        />
      </div>
      <div className="sp-club-strip">
        <span>Bring your people.</span>
        <span>Rackets available at the club.</span>
        <span>Play more. Scroll less. ↗</span>
      </div>
    </section>
  );
}
