import { ArrowUpRight, MapPin } from "lucide-react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
export function SiteHeader() {
  return (
    <header className="sp-header">
      <a href="#court-book" aria-label="Sprinto home">
        <BrandLogo brand={brand} />
      </a>
      <span>
        <MapPin size={15} aria-hidden="true" />
        Riverside courts · London
      </span>
      <nav aria-label="Club navigation">
        <a href="#availability">Find a court</a>
        <a href="#matches">Find a game</a>
        <a href="#club">
          The club <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}
