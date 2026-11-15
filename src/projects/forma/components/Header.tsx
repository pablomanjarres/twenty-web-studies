import { BrandLogo } from "../../../shared/BrandLogo";
import { brand } from "../brand";
export function Header() {
  return (
    <header className="forma-header">
      <a href="#home" aria-label="Forma home">
        <BrandLogo brand={brand} />
      </a>
      <p className="forma-label">
        Architecture / Interiors
        <br />
        Copenhagen · Working everywhere
      </p>
      <nav aria-label="Studio navigation">
        <a className="forma-link" href="#practice">
          The practice ↓
        </a>
        <a className="forma-link" href="#contact">
          Contact ↓
        </a>
      </nav>
    </header>
  );
}
