import { useState } from "react";
import { Header } from "./components/Header";
import { ProjectArchive } from "./components/ProjectArchive";
import { ProjectDossier } from "./components/ProjectDossier";
import { MaterialStory } from "./components/MaterialStory";
import { Practice } from "./components/Practice";
import { Contact } from "./components/Contact";
import { projects } from "./data";
import "./styles.css";
export default function Page() {
  const [selected, setSelected] = useState(0);
  const project = projects[selected];
  return (
    <main className="forma">
      <Header />
      <ProjectArchive selected={selected} onSelect={setSelected} />
      <ProjectDossier project={project} />
      <MaterialStory project={project} />
      <Practice />
      <Contact />
    </main>
  );
}
