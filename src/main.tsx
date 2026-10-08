import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { projects } from "./projects";
import { Gallery } from "./gallery/Gallery";
import { BrandKit } from "./gallery/BrandKit";
import "./shared/base.css";
import "./shared/fonts.css";
import "./shared/local-fonts.css";
const route = decodeURIComponent(
  window.location.pathname.slice(import.meta.env.BASE_URL.length),
)
  .split("/")
  .filter(Boolean);
const project = projects.find((p) => p.brand.slug === route[0]);
if (project) {
  document.title = `${project.brand.name} | ${project.brand.tagline}`;
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", project.brand.purpose);
  const icon = document.createElement("link");
  icon.rel = "icon";
  icon.href = `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" color="${project.brand.colors[0].hex}">${project.brand.logo}</svg>`)}`;
  document.head.appendChild(icon);
}
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div className="collection-loading" role="status">
          Opening the studio…
        </div>
      }
    >
      {project ? (
        route[1] === "brand" ? (
          <BrandKit brand={project.brand} />
        ) : (
          <project.Page />
        )
      ) : (
        <Gallery />
      )}
    </Suspense>
  </React.StrictMode>,
);
