import { ArrowUpRight } from "lucide-react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";

export function Header() {
  return (
    <header className="helio-header">
      <a href="#helio-top">
        <BrandLogo brand={brand} />
      </a>
      <nav aria-label="Helio navigation">
        <a href="#helio-platform">Platform</a>
        <a href="#helio-build">Developers</a>
        <a href="#helio-pricing">Pricing</a>
        <a href="#helio-build">
          Documentation <ArrowUpRight size={12} />
        </a>
      </nav>
      <a className="helio-header-cta" href="#helio-build">
        Start building <ArrowUpRight size={16} />
      </a>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="helio-footer">
      <BrandLogo brand={brand} />
      <span>Infrastructure for your next idea.</span>
      <a href="#helio-top">Back to top ↑</a>
      <small>
        <i />
        All systems operational
      </small>
    </footer>
  );
}
