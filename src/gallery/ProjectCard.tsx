import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { BrandLogo } from "../shared/BrandLogo";
import { presentationColors } from "../shared/brand-colors";
import { projectUrl } from "../projects";
import type { Brand } from "../shared/types";
export function ProjectCard({
  brand,
  index,
  original,
}: {
  brand: Brand;
  index: number;
  original: boolean;
}) {
  const { ink, paper } = presentationColors(brand);
  const [hasPreview, setHasPreview] = useState(true);
  return (
    <article className="collection-card">
      <a
        className="collection-preview"
        href={projectUrl(brand.slug)}
        aria-label={`Explore ${brand.name}`}
        style={{ background: paper, color: ink }}
      >
        {hasPreview ? (
          <img
            src={`${import.meta.env.BASE_URL}previews/${brand.slug}.jpg`}
            alt={`${brand.name} website preview`}
            loading="lazy"
            onError={() => setHasPreview(false)}
          />
        ) : (
          <div
            className="collection-placeholder"
            style={{ fontFamily: brand.fonts.heading }}
          >
            <BrandLogo brand={brand} />
            <p>{brand.tagline}</p>
          </div>
        )}
        <span className="collection-view">
          Explore project <ArrowUpRight size={16} />
        </span>
      </a>
      <div className="collection-card-meta">
        <div>
          <a href={projectUrl(brand.slug)} className="collection-project-title">
            {brand.name}
            {original ? " · Original" : ""}
          </a>
          <p>{brand.category}</p>
        </div>
        <span>{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="collection-card-links">
        <span>{brand.tagline}</span>
        <a href={`${projectUrl(brand.slug)}brand/`}>
          Brand kit <ArrowUpRight size={13} />
        </a>
      </div>
    </article>
  );
}
