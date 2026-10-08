import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
import { Atlas } from "./Atlas";
import { FieldNotes } from "./FieldNotes";
import "./styles.css";
export default function Page() {
  return (
    <main className="wayfarer">
      <header className="wf-header">
        <a href="#atlas" aria-label="Wayfarer field journeys">
          <BrandLogo brand={brand} />
        </a>
        <span>Small groups. Longer stories.</span>
        <nav aria-label="Main">
          <a href="#field-notes">Field notes</a>
          <a href="#guide">Our way of walking</a>
        </nav>
        <span className="wf-edition">FIELD JOURNEYS / VOL. 06</span>
      </header>
      <Atlas />
      <FieldNotes />
      <footer className="wf-footer">
        <BrandLogo brand={brand} />
        <p>Leave room for the unexpected.</p>
        <a href="#atlas">Find your trail ↑</a>
        <span>© 2026 Wayfarer</span>
      </footer>
    </main>
  );
}
