import { BrandLogo } from "../../../shared/BrandLogo";
import { brand } from "../brand";
export function Header() {
  return (
    <header className="forma-header">
      <a href="#home" aria-label="Forma home">
        <BrandLogo brand={brand} />
      </a>
      <span>
        ARCHITECTURE / INTERIORS
        <br />
        COPENHAGEN · WORKING EVERYWHERE
      </span>
      <nav aria-label="Studio navigation">
        <a href="#practice">The practice ↗</a>
        <a href="#contact">Contact ↗</a>
      </nav>
    </header>
  );
}
