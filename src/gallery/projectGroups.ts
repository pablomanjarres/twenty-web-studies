import type { Brand } from "../shared/types";
export const collectionGroups = [
  "All projects",
  "Landing pages",
  "Dashboards",
  "Shops",
  "Editorial",
] as const;
export type CollectionGroup = (typeof collectionGroups)[number];
export function groupFor(
  brand: Brand,
): Exclude<CollectionGroup, "All projects"> {
  const text = `${brand.category} ${brand.purpose}`.toLowerCase();
  return /dashboard|workspace|developer platform|logistics platform|music platform/.test(
    text,
  )
    ? "Dashboards"
    : /ecommerce|store|shop|ceramic|skincare|jewel/.test(text)
      ? "Shops"
      : /magazine|journal|editorial/.test(text)
        ? "Editorial"
        : "Landing pages";
}
