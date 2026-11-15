import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
export function SiteFooter() {
  return (
    <footer className="sp-footer">
      <BrandLogo brand={brand} />
      <p>Riverside courts · Open daily 07:00 to 22:00</p>
      <span>© 2026 Sprinto</span>
    </footer>
  );
}
