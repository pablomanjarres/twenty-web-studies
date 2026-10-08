import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
export function Footer() {
  return (
    <footer className="helio-footer">
      <BrandLogo brand={brand} />
      <span>One commit. A world of possibility.</span>
      <a href="#helio-top">RETURN TO WORKBENCH ↑</a>
      <small>Interactive deployment preview</small>
    </footer>
  );
}
