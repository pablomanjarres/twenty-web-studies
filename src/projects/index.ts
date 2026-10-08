import { lazy } from "react";
import type { Brand } from "../shared/types";
const order = [
  "aether",
  "forma",
  "vestra",
  "sprinto",
  "orbit",
  "pulse",
  "kanso",
  "wayfarer",
  "offgrid",
  "soundroom",
  "cinder",
  "vale",
  "meridian",
  "verdant",
  "monograph",
  "helio",
  "salt",
  "archive",
  "bloom",
  "estelle",
];
const metadata = import.meta.glob<{ brand: Brand }>("./*/brand.ts", {
  eager: true,
});
const pages = import.meta.glob<{ default: React.ComponentType }>(
  "./*/Page.tsx",
);
export const projects = order.flatMap((slug) => {
  const item = metadata[`./${slug}/brand.ts`];
  const page = pages[`./${slug}/Page.tsx`];
  return item && page ? [{ brand: item.brand, Page: lazy(page) }] : [];
});
export function projectUrl(slug: string) {
  return `${import.meta.env.BASE_URL}${slug}/`;
}
