import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
export function Footer() {
  return (
    <footer className="vale-footer">
      <a href="#formulas">
        <BrandLogo brand={brand} />
      </a>
      <span>Care, with a little more consideration.</span>
      <a href="#formulas">Back to the index ↑</a>
    </footer>
  );
}
