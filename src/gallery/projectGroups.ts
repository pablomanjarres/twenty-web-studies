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
  const category = brand.category.toLowerCase();
  const tags = brand.tags.map((tag) => tag.toLowerCase());
  return /dashboard|workspace|developer platform|logistics platform|music platform/.test(
    category,
  )
    ? "Dashboards"
    : tags.includes("ecommerce") ||
        /store|shop|ceramic|skincare|jewel/.test(category)
      ? "Shops"
      : tags.includes("publishing") ||
          /magazine|journal|editorial/.test(category)
        ? "Editorial"
        : "Landing pages";
}
