import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";

export function RetreatNavigation({
  bookingOpen,
  onBooking,
}: {
  bookingOpen: boolean;
  onBooking: () => void;
}) {
  return (
    <header className="vs-header">
      <a className="vs-home" href="#landscape" aria-label="Vestra home">
        <BrandLogo brand={brand} />
      </a>
      <nav aria-label="Retreat chapters">
        <a href="#suite">The rooms</a>
        <a href="#ritual">A slower day</a>
      </nav>
      <button
        className="vs-nav-book"
        aria-expanded={bookingOpen}
        aria-controls="vs-arrival-folio"
        onClick={onBooking}
      >
        {bookingOpen ? "Close stay planner" : "Plan a stay"}
      </button>
    </header>
  );
}
