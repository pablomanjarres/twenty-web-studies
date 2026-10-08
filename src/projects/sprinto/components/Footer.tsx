import { ArrowUpRight } from "lucide-react";
import { BrandLogo } from "../../../shared/BrandLogo";
import { brand } from "../brand";

export function Footer() {
  return (
    <footer className="sprinto-footer">
      <BrandLogo brand={brand} />
      <span>Play a little. Live a lot.</span>
      <a href="#courts">
        Your next move <ArrowUpRight size={18} />
      </a>
      <small>© 2026 sprinto</small>
    </footer>
  );
}
