import { ArrowUpRight } from "lucide-react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";

export function RetreatFooter({ onBooking }: { onBooking: () => void }) {
  return (
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
  );
}
