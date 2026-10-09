import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
import { SystemSheet } from "./SystemSheet";
import { FieldProjects } from "./FieldProjects";
import "./styles.css";
export default function Page() {
  return (
    <main className="verdant">
      <header className="vd-header">
        <a href="#system" aria-label="Verdant home">
          <BrandLogo brand={brand} />
        </a>
        <span>
          <i /> Illustrative energy system
        </span>
        <nav aria-label="Energy navigation">
          <a href="#field">In the field</a>
          <a href="#connection">Plan a connection ↗</a>
        </nav>
      </header>
      <SystemSheet />
      <FieldProjects />
      <footer className="vd-footer">
        <BrandLogo brand={brand} />
        <p>A better current, from the ground up.</p>
        <a href="#system">Explore the system ↑</a>
        <span>© 2026 Verdant</span>
      </footer>
    </main>
  );
}
