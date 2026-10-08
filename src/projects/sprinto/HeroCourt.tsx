import { ArrowUpRight, MapPin } from "lucide-react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
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
      <header className="sp-header">
        <a href="#court-book" aria-label="Sprinto home">
          <BrandLogo brand={brand} />
        </a>
        <span>
          <MapPin size={13} />
          Riverside courts · London
        </span>
        <nav aria-label="Club navigation">
          <a href="#availability">Find a court</a>
          <a href="#matches">Find a game</a>
          <a href="#club">
            The club <ArrowUpRight size={14} />
          </a>
        </nav>
      </header>
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
