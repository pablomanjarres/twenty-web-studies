import { ArrowUpRight } from "lucide-react";
import { BrandLogo } from "../../../shared/BrandLogo";
import { brand } from "../brand";

export function Header() {
  return (
    <header className="forma-header">
      <a href="#home" aria-label="Forma home">
        <BrandLogo brand={brand} />
      </a>
      <nav aria-label="Main navigation">
        <a href="#projects">Selected work</a>
        <a href="#practice">The practice</a>
        <a href="#contact">
          Get in touch <ArrowUpRight size={16} />
        </a>
      </nav>
    </header>
  );
}
