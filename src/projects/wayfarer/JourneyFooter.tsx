import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";

export function JourneyFooter() {
  return (
    <footer className="wf-footer">
      <BrandLogo brand={brand} />
      <p>Leave room for the unexpected.</p>
      <a href="#atlas">Find your trail ↑</a>
      <span>© 2026 Wayfarer</span>
    </footer>
  );
}
