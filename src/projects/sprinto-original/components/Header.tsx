import { ArrowUpRight } from "lucide-react";
import { BrandLogo } from "../../../shared/BrandLogo";
import { brand } from "../brand";

export function Header() {
  return (
    <header className="sprinto-original-header">
      <a href="#sprinto-original-home" aria-label="Sprinto home">
        <BrandLogo brand={brand} />
      </a>
      <nav aria-label="Main navigation">
        <a href="#sprinto-original-courts">Find a court</a>
        <a href="#sprinto-original-club">The club</a>
        <a href="#sprinto-original-play">Ways to play</a>
      </nav>
      <a
        href="#sprinto-original-courts"
        className="sprinto-original-nav-button"
      >
        Let’s play <ArrowUpRight size={17} />
      </a>
    </header>
  );
}
