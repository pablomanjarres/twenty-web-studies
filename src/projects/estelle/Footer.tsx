import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
export function Footer() {
  return (
    <footer className="estelle-footer">
      <BrandLogo brand={brand} />
      <span>A quiet kind of extraordinary.</span>
      <a href="#estelle-top">Return to the exhibition ↑</a>
    </footer>
  );
}
