import { ArrowLeft, ArrowUpRight, Download } from "lucide-react";
import { BrandLogo } from "../shared/BrandLogo";
import { projectUrl } from "../projects";
import type { Brand } from "../shared/types";
export function KitChromeHeader({ brand }: { brand: Brand }) {
  return (
    <header className="kit-header">
      <a href={import.meta.env.BASE_URL}>
        <ArrowLeft size={17} /> Collection
      </a>
      <a href={projectUrl(brand.slug)}>
        View website <ArrowUpRight size={16} />
      </a>
    </header>
  );
}
export function KitChromeFooter({ brand }: { brand: Brand }) {
  return (
    <footer className="kit-footer">
      <BrandLogo brand={brand} />
      <a href={projectUrl(brand.slug)}>
        Explore {brand.name} <ArrowUpRight size={16} />
      </a>
    </footer>
  );
}
