import { ArrowUp } from "lucide-react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";

export function Footer() {
  return (
    <footer className="vale-footer">
      <a href="#formulas" aria-label="Vale formulas">
        <BrandLogo brand={brand} />
      </a>
      <span>A little care. Every day.</span>
      <a className="vale-link" href="#formulas">
        Back to the collection <ArrowUp size={16} />
      </a>
    </footer>
  );
}
