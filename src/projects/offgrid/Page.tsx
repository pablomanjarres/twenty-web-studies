import type { CSSProperties } from "react";
import { useState } from "react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
import { projects } from "./data";
import { Poster } from "./Poster";
import { ProjectStage } from "./ProjectStage";
import { Studio } from "./Studio";
import { Brief } from "./Brief";
import "./styles.css";
const theme = {
  "--fg-blue": brand.colors[0].hex,
  "--fg-milk": brand.colors[2].hex,
  "--fg-yellow": brand.colors[1].hex,
  "--fg-ink": brand.colors[3].hex,
} as CSSProperties;
export default function Page() {
  const [selected, setSelected] = useState(1);
  const [brief, setBrief] = useState(false);
  const project = projects.find((p) => p.id === selected)!;
  return (
    <main className="offgrid-v2" style={theme}>
      <Poster onSelect={setSelected} onBrief={() => setBrief(true)} />
      <ProjectStage project={project} onSelect={setSelected} />
      <Studio onBrief={() => setBrief(true)} />
      <footer className="fg-footer">
        <BrandLogo brand={brand} />
        <span>STAY OPEN. GO OFFGRID.</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
      {brief && <Brief onClose={() => setBrief(false)} />}
    </main>
  );
}
