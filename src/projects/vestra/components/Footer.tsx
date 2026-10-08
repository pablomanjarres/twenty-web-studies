import { ArrowUpRight } from "lucide-react";
import { BrandLogo } from "../../../shared/BrandLogo";
import { brand } from "../brand";

export function Footer() {
  return (
    <footer className="vestra-footer">
      <BrandLogo brand={brand} />
      <p>
        A small retreat.
        <br />A lasting feeling.
      </p>
      <a href="#booking">
        See you in the mountains. <ArrowUpRight size={20} />
      </a>
      <span>© 2026 vestra</span>
    </footer>
  );
}
