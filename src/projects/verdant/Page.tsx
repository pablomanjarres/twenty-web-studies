import { useState } from "react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
import { scenarios } from "./data";
import { SystemSheet } from "./SystemSheet";
import { FieldProjects } from "./FieldProjects";
import { ConnectionPlanner } from "./ConnectionPlanner";
import "./styles.css";
export default function Page() {
  const [selected, setSelected] = useState(0);
  const scenario = scenarios[selected];
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
          <a href="#field" className="vd-header-field">
            In the field
          </a>
          <a href="#connection" className="vd-header-cta">
            Plan a connection
          </a>
        </nav>
      </header>
      <SystemSheet
        scenario={scenario}
        selected={selected}
        onSelect={setSelected}
      />
      <FieldProjects scenario={scenario} />
      <ConnectionPlanner />
      <footer className="vd-footer">
        <BrandLogo brand={brand} />
        <p>A better current, from the ground up.</p>
        <a href="#system">Explore the system ↑</a>
        <span>© 2026 Verdant</span>
      </footer>
    </main>
  );
}
