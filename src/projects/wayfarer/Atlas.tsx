import { useState } from "react";
import { ArrowUpRight, Compass, ChevronDown } from "lucide-react";
import { routes, image, departures } from "./data";
import { RouteMap } from "./RouteMap";
export function Atlas() {
  const [selected, setSelected] = useState(0);
  const [departure, setDeparture] = useState(departures[0]);
  const [reserved, setReserved] = useState(false);
  const trail = routes[selected];
  return (
    <section id="atlas" className="wf-atlas" aria-label="Journey field atlas">
      <div className="wf-atlas-top">
        <h1>
          A field guide to
          <br />
          getting out there.
        </h1>
        <p>
          Choose a line on the map.
          <br />
          We’ll take care of the rest.
        </p>
        <Compass size={45} strokeWidth={1} />
      </div>
      <div className="wf-atlas-grid">
        <div className="wf-map-sheet">
          <div className="wf-map-heading">
            <span>TRAIL ATLAS</span>
            <span>{trail.coordinates}</span>
          </div>
          <RouteMap trail={trail} />
          <figure className="wf-postcard">
            <img
              src={image(trail.image)}
              alt={trail.region + " landscape along the walking route"}
            />
            <figcaption>
              {trail.region}
              <span>Filed by our walking guides ↗</span>
            </figcaption>
          </figure>
          <div className="wf-map-scale">
            <span>0</span>
            <i />
            <span>5 km</span>
            <small>Route illustration · not for navigation</small>
          </div>
          <div className="wf-route-key">
            <span>
              <i /> Selected trail
            </span>
            <span>— Footpaths</span>
            <span>⌁ Contour lines</span>
          </div>
        </div>
        <aside className="wf-itinerary" aria-label="Selected journey">
          <div className="wf-ticket-top">
            <span>JOURNEY {trail.id}</span>
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
              <dt>Total ascent</dt>
              <dd>{trail.ascent}</dd>
            </div>
          </dl>
          <ol className="wf-stops">
            {trail.stops.map((stop) => (
              <li key={stop}>{stop}</li>
            ))}
          </ol>
          <label className="wf-departure">
            Departure
            <select
              value={departure}
              onChange={(e) => {
                setDeparture(e.target.value);
                setReserved(false);
              }}
            >
              {departures.map((date) => (
                <option key={date}>{date}</option>
              ))}
            </select>
            <ChevronDown size={16} />
          </label>
          <button className="wf-plan" onClick={() => setReserved(true)}>
            {reserved ? "Journey added to your plan" : "Plan this journey"}
            <ArrowUpRight size={18} />
          </button>
          <p className="wf-price" aria-live="polite">
            {reserved
              ? `${trail.region} · ${departure} · ${trail.days}`
              : `From ${trail.price} / person · groups of 8`}
          </p>
        </aside>
      </div>
      <div className="wf-route-tabs" aria-label="Choose a journey">
        {routes.map((route, i) => (
          <button
            key={route.id}
            aria-pressed={i === selected}
            onClick={() => {
              setSelected(i);
              setReserved(false);
            }}
          >
            <span>{route.id}</span>
            <strong>{route.region}</strong>
            <small>
              {route.days} / {route.distance}
            </small>
            <ArrowUpRight size={20} />
          </button>
        ))}
      </div>
    </section>
  );
}
