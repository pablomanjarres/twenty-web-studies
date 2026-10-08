import { ArrowUpRight } from "lucide-react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";

export function Footer() {
  return (
    <footer className="ve-footer">
      <div className="ve-footer-word">
        verdant<span>®</span>
      </div>
      <div className="ve-footer-bottom">
        <BrandLogo brand={brand} symbolOnly />
        <span>A better current. An everyday possibility.</span>
        <a href="#ve-home">
          Back to the horizon <ArrowUpRight size={16} />
        </a>
      </div>
    </footer>
  );
}
