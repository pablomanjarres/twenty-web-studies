import { ArrowUpRight } from "lucide-react";
import { BrandLogo } from "../../../shared/BrandLogo";
import { brand } from "../brand";

export function Header() {
  return (
    <header className="sprinto-header">
      <a href="#home" aria-label="Sprinto home">
        <BrandLogo brand={brand} />
      </a>
      <nav aria-label="Main navigation">
        <a href="#courts">Find a court</a>
        <a href="#club">The club</a>
        <a href="#play">Ways to play</a>
      </nav>
      <a href="#courts" className="sprinto-nav-button">
        Let’s play <ArrowUpRight size={17} />
      </a>
    </header>
  );
}
