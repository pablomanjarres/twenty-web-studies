import { ArrowUpRight } from "lucide-react";
import { BrandLogo } from "../../../shared/BrandLogo";
import { brand } from "../brand";

export function Contact() {
  return (
    <footer className="forma-contact" id="contact">
      <span className="forma-label">
        A conversation is a good place to start.
      </span>
      <a className="forma-contact-title" href="mailto:studio@forma.example">
        <span>Let’s make room.</span>
        <ArrowUpRight aria-hidden="true" />
      </a>
      <div className="forma-contact-bottom">
        <BrandLogo brand={brand} />
        <p>
          Copenhagen, Denmark
          <br />
          studio@forma.example
        </p>
        <span>© 2026 FORMA</span>
      </div>
    </footer>
  );
}
