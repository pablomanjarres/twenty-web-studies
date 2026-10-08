import { ArrowUpRight } from "lucide-react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";

export function Footer() {
  return (
    <footer className="va-footer">
      <div className="va-footer-top">
        <h2>
          A little space
          <br />
          <i>for yourself.</i>
        </h2>
        <a href="#va-home">
          Begin again <ArrowUpRight size={19} />
        </a>
      </div>
      <div className="va-footer-bottom">
        <BrandLogo brand={brand} />
        <span>Botanical care. Everyday pleasure.</span>
        <a href="#va-philosophy">Our philosophy</a>
      </div>
    </footer>
  );
}
