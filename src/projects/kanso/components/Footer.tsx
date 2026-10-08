import { ArrowUpRight } from "lucide-react";
import { BrandLogo } from "../../../shared/BrandLogo";
import { brand } from "../brand";

export function Footer() {
  return (
    <footer className="kanso-footer">
      <div>
        <BrandLogo brand={brand} />
        <span>Useful. Beautiful. Yours.</span>
        <span>© 2026 kanso atelier</span>
      </div>
      <p>
        Everyday objects.
        <br />A quieter kind of company.
      </p>
      <a href="#home">
        Back to the beginning <ArrowUpRight size={16} />
      </a>
    </footer>
  );
}
