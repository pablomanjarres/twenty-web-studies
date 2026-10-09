import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
import { PrintedMenu } from "./PrintedMenu";
import { Kitchen } from "./Kitchen";
import { Reservation } from "./Reservation";
import "./styles.css";
export default function Page() {
  return (
    <main className="salt">
      <header className="sl-header">
        <a href="#seasonal-menu" aria-label="Salt coastal kitchen">
          <BrandLogo brand={brand} />
        </a>
        <span>Coastal food. A generous table.</span>
        <nav aria-label="Restaurant">
          <a href="#kitchen">Our kitchen</a>
          <a href="#tables">Find a table</a>
        </nav>
      </header>
      <PrintedMenu />
      <Kitchen />
      <Reservation />
      <footer className="sl-footer">
        <BrandLogo brand={brand} />
        <span>
          Lunch 12–3 · Dinner 5–10
          <br />
          Tuesday — Sunday
        </span>
        <span>
          By the harbour
          <br />
          The coastal quarter
        </span>
        <a href="#seasonal-menu">Back to the menu ↑</a>
        <small>© 2026 Salt</small>
      </footer>
    </main>
  );
}
