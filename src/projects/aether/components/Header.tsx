import { ArrowUpRight } from "lucide-react";
import { BrandLogo } from "../../../shared/BrandLogo";
import { brand } from "../brand";

export function Header() {
  return (
    <header className="aether-header">
      <a href="#home" aria-label="Aether home">
        <BrandLogo brand={brand} />
      </a>
      <nav aria-label="Main navigation">
        <a href="#account">The account</a>
        <a href="#features">Why aether</a>
        <a href="#pricing">Pricing</a>
      </nav>
      <a className="aether-header-cta" href="#account">
        Meet your account <ArrowUpRight size={17} />
      </a>
    </header>
  );
}
