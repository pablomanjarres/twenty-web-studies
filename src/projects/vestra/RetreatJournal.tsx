import { ArrowUpRight } from "lucide-react";
import { RetreatFooter } from "./RetreatFooter";
import { asset, rooms } from "./data";
export function RetreatJournal({ onBooking }: { onBooking: () => void }) {
  return (
    <>
      <section id="suite" className="vs-suite">
        <div className="vs-suite-photograph">
          <img
            src={asset("suite-blue-hour-v3.png")}
            alt="A limestone and timber suite with linen bedding overlooking the lodge pool and forest at dusk"
            loading="lazy"
          />
          <span>A room with a view</span>
        </div>
        <div className="vs-suite-copy">
          <small>With room to breathe</small>
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
          <span>A day, unhurried</span>
          <h2>
            Follow the light,
            <br />
            not the clock.
          </h2>
        </div>
        <figure>
          <img
            src={asset("courtyard-v3.png")}
            alt="The lodge courtyard in afternoon light, with limestone walls, timber screens and a view toward the forest"
            loading="lazy"
          />
          <figcaption>A sheltered courtyard. A little time outside.</figcaption>
        </figure>
        <div className="vs-ritual-notes">
          <article>
            <span>08:00 · The kitchen</span>
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
            <span>16:00 · The sauna</span>
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
      <RetreatFooter onBooking={onBooking} />
    </>
  );
}
