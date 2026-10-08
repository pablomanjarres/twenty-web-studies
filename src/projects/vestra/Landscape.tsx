import { ArrowDown, ArrowUpRight, Plus, Minus } from "lucide-react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
import { image } from "./data";
import { ArrivalFolio } from "./ArrivalFolio";
export function Landscape({
  bookingOpen,
  onBooking,
}: {
  bookingOpen: boolean;
  onBooking: () => void;
}) {
  return (
    <section id="landscape" className="vs-landscape">
      <img
        className="vs-panorama"
        src={image("mountains")}
        alt="A wide mountain valley with snow ridges, forest and an open river landscape"
      />
      <header className="vs-header">
        <a href="#suite">The retreat</a>
        <a className="vs-home" href="#landscape" aria-label="Vestra home">
          <BrandLogo brand={brand} />
        </a>
        <a href="#ritual">Life up here</a>
      </header>
      <nav className="vs-scene-index" aria-label="Retreat chapters">
        <a href="#landscape">01 / The valley</a>
        <a href="#suite">02 / Your room</a>
        <a href="#ritual">03 / A slower day</a>
      </nav>
      <div className="vs-invitation">
        <p>A mountain retreat, quietly yours.</p>
        <h1>
          Come for the view.
          <br />
          Stay for the stillness.
        </h1>
        <a href="#suite">
          Step inside <ArrowDown size={15} />
        </a>
      </div>
      <div className="vs-landscape-caption">
        <span>THE VALLEY / EARLY AUTUMN</span>
        <span>Nature sets the pace.</span>
      </div>
      <div className={"vs-arrival " + (bookingOpen ? "vs-arrival-open" : "")}>
        <button
          className="vs-arrival-toggle"
          aria-expanded={bookingOpen}
          aria-controls="vs-arrival-folio"
          onClick={onBooking}
        >
          <span>
            <small>A FEW DAYS AWAY</small>Plan your stay
          </span>
          {bookingOpen ? <Minus size={20} /> : <Plus size={20} />}
        </button>
        {bookingOpen ? (
          <ArrivalFolio />
        ) : (
          <div className="vs-arrival-summary">
            <span>Rooms from €245 / night</span>
            <ArrowUpRight size={18} />
          </div>
        )}
      </div>
    </section>
  );
}
