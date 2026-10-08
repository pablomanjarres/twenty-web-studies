import { ArrowUpRight } from "lucide-react";
import { BrandLogo } from "../../../shared/BrandLogo";
import { brand } from "../brand";

export function Header() {
  return (
    <header className="vestra-header">
      <a href="#home" aria-label="Vestra home">
        <BrandLogo brand={brand} />
      </a>
      <nav aria-label="Main navigation">
        <a href="#stay">The stay</a>
        <a href="#experience">The experience</a>
        <a href="#retreat">Our story</a>
      </nav>
      <a className="vestra-book-link" href="#booking">
        Find your escape <ArrowUpRight size={17} />
      </a>
    </header>
  );
}
