import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
export function Footer() {
  return (
    <footer className="estelle-footer">
      <div className="estelle-colophon">
        <BrandLogo brand={brand} />
        <p>{brand.tagline}</p>
      </div>
      <div className="estelle-footer-row">
        <a href="#estelle-top">
          Return to the exhibition{" "}
          <span className="estelle-arrow estelle-arrow-up" aria-hidden="true">
            ↑
          </span>
        </a>
        <span>Atelier Collection 01</span>
      </div>
    </footer>
  );
}
