import { ArrowDown, ArrowUpRight, Plus, Minus } from "lucide-react";
import { RetreatNavigation } from "./RetreatNavigation";
import { asset } from "./data";
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
        src={asset("lodge-blue-hour-v3.png")}
        alt="The Vestra alpine lodge at blue hour, with warm windows reflected in a quiet pool beneath the Dolomite peaks"
      />
      <RetreatNavigation bookingOpen={bookingOpen} onBooking={onBooking} />
      <div className="vs-invitation">
        <p>A little further from the everyday.</p>
        <h1>
          Come for the view.
          <br />
          Stay for the stillness.
        </h1>
      </div>
      <div className="vs-setting">
        <span>Held by the mountains.</span>
        <p>
          A quiet alpine retreat.
          <br />
          Warm rooms. Open horizons.
          <br />
          Nothing to hurry back to.
        </p>
        <a href="#suite">
          Step inside <ArrowDown size={16} />
        </a>
      </div>
      <div className={"vs-arrival " + (bookingOpen ? "vs-arrival-open" : "")}>
        <button
          className="vs-arrival-toggle"
          aria-expanded={bookingOpen}
          aria-controls="vs-arrival-folio"
          onClick={onBooking}
        >
          <span>
            <small>Your mountain pause</small>Plan your stay
          </span>
          {bookingOpen ? <Minus size={20} /> : <Plus size={20} />}
        </button>
        {bookingOpen ? (
          <ArrivalFolio />
        ) : (
          <div className="vs-arrival-summary">
            <span>
              Rooms from <strong>€245</strong> / night
            </span>
            <ArrowUpRight size={18} />
          </div>
        )}
      </div>
    </section>
  );
}
