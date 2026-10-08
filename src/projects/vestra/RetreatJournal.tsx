import { ArrowUpRight } from "lucide-react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
import { image, rooms } from "./data";
export function RetreatJournal({ onBooking }: { onBooking: () => void }) {
  return (
    <>
      <section id="suite" className="vs-suite">
        <div className="vs-suite-photograph">
          <img
            src={image("suite")}
            alt="A warm retreat suite with natural materials and soft light"
            loading="lazy"
          />
          <span>ROOM JOURNAL / 01</span>
        </div>
        <div className="vs-suite-copy">
          <small>WITH ROOM TO BREATHE</small>
          <h2>
            A window open
            <br />
            to another pace.
          </h2>
          <p>
            Timber underfoot. Linen on the bed. A place for your book, your
            boots, and the kind of morning that asks very little of you.
          </p>
          <div className="vs-room-index">
            {rooms.map((r) => (
              <details key={r.name}>
                <summary>
                  <span>{r.name}</span>
                  <small>{r.area}</small>
                  <ArrowUpRight size={16} />
                </summary>
                <p>
                  {r.note} From €{r.rate} per night.
                </p>
              </details>
            ))}
          </div>
          <a href="#landscape" onClick={onBooking}>
            Find your room <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
      <section id="ritual" className="vs-ritual">
        <div className="vs-ritual-title">
          <span>A DAY, UNHURRIED</span>
          <h2>
            Follow the light,
            <br />
            not the clock.
          </h2>
        </div>
        <figure>
          <img
            src={image("forest")}
            alt="Deep mountain forest and a quiet trail"
            loading="lazy"
          />
          <figcaption>
            Walk until the only sound is your own footsteps.
          </figcaption>
        </figure>
        <div className="vs-ritual-notes">
          <article>
            <span>08:00 / THE KITCHEN</span>
            <h3>
              Something warm
              <br />
              to start with.
            </h3>
            <p>
              Bread from the oven, mountain honey and coffee brought to the
              table.
            </p>
          </article>
          <article>
            <span>16:00 / THE SAUNA</span>
            <h3>
              Heat. Water.
              <br />A deep breath.
            </h3>
            <p>
              A warm cedar room, then the cold clear air. There is no next
              appointment.
            </p>
          </article>
        </div>
      </section>
      <footer className="vs-footer">
        <BrandLogo brand={brand} />
        <p>
          The mountain will be here.
          <br />
          Make a little time for it.
        </p>
        <a href="#landscape" onClick={onBooking}>
          Plan a stay <ArrowUpRight size={20} />
        </a>
        <small>© 2026 Vestra · Alpine retreat</small>
      </footer>
    </>
  );
}
