import { Plus } from "lucide-react";
import { BrandLogo } from "../../../shared/BrandLogo";
import { brand } from "../brand";

export function Footer() {
  return (
    <>
      <section className="aether-closing" id="pricing">
        <div>
          <span>Less busywork. More life's work.</span>
          <h2>Go your own way.</h2>
        </div>
        <a className="aether-button" href="#account">
          Explore your account <Plus size={20} />
        </a>
      </section>
      <footer className="aether-footer">
        <BrandLogo brand={brand} />
        <p>Banking with a more independent spirit.</p>
        <span>© 2026 aether</span>
      </footer>
    </>
  );
}
