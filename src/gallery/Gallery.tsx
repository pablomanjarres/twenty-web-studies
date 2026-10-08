import {
  CollectionChromeHeader,
  CollectionChromeFooter,
} from "./CollectionChrome";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../projects";
import { groupFor, type CollectionGroup } from "./projectGroups";
import "./gallery.css";
import "./gallery-responsive.css";
import { ProjectCard } from "./ProjectCard";
import { CollectionControls } from "./CollectionControls";
export function Gallery() {
  const [group, setGroup] = useState<CollectionGroup>("All projects");
  const [query, setQuery] = useState("");
  const filtered = projects.filter(
    ({ brand }) =>
      (group === "All projects" || groupFor(brand) === group) &&
      `${brand.name} ${brand.category} ${brand.tagline}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  return (
    <div className="collection">
      <CollectionChromeHeader />
      <main>
        <section className="collection-intro">
          <div>
            <p className="collection-kicker">
              Independent identities, considered interfaces.
            </p>
            <h1>
              Twenty different
              <br />
              ways to see the web.
            </h1>
          </div>
          <div className="collection-intro-note">
            <span>20</span>
            <p>
              From a quiet alpine retreat to a bustling product workspace.
              Twenty complete visual worlds, each with a purpose and a
              personality of its own.
            </p>
            <a href="#projects">
              Find your perspective <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
        <section id="projects" className="collection-projects">
          <CollectionControls
            group={group}
            query={query}
            setGroup={setGroup}
            setQuery={setQuery}
          />
          <div className="collection-grid">
            {filtered.map(({ brand }) => (
              <ProjectCard
                key={brand.slug}
                brand={brand}
                index={projects.findIndex((p) => p.brand.slug === brand.slug)}
              />
            ))}
          </div>
          {!filtered.length && (
            <p className="collection-empty">
              No projects match. Try another name or view all projects.
            </p>
          )}
        </section>
      </main>
      <CollectionChromeFooter />
    </div>
  );
}
