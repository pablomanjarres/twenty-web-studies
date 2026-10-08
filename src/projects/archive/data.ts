export const image = (file: string) =>
  import.meta.env.BASE_URL +
  "images/archive/" +
  (file.includes(".") ? file : file + ".jpg");
export const products = [
  {
    id: "coat",
    name: "The sculptural wool coat",
    category: "Outerwear",
    image: "coat-v2.webp",
    imageMode: "cutout",
    price: 280,
    detail: "Charcoal / Wool blend",
  },
  {
    id: "blazer",
    name: "The open-form jacket",
    category: "Outerwear",
    image: "blazer-catalog-v2.webp",
    imageMode: "photograph",
    price: 195,
    detail: "Ivory / Wool & linen",
  },
  {
    id: "trousers",
    name: "The straight-leg trouser",
    category: "Essentials",
    image: "trousers-v2.webp",
    imageMode: "cutout",
    price: 110,
    detail: "Black / Tailored wool",
  },
  {
    id: "scarf",
    name: "The silk accent",
    category: "Accessories",
    image: "scarf-v2.webp",
    imageMode: "cutout",
    price: 65,
    detail: "Cherry / Pure silk",
  },
];
export const looks = [
  {
    name: "The long silhouette",
    image: "campaign-v2.webp",
    caption: "Volume, held in motion.",
    productIds: ["coat", "trousers", "scarf"],
  },
  {
    name: "The open form",
    image: "look-v2.webp",
    caption: "A softer kind of structure.",
    productIds: ["blazer", "trousers", "scarf"],
  },
];
export const categories = [
  "All pieces",
  "This look",
  "Outerwear",
  "Essentials",
  "Accessories",
];
export const catalogFor = (category: string, look: number) =>
  products.filter(
    (p) =>
      category === "All pieces" ||
      (category === "This look"
        ? looks[look].productIds.includes(p.id)
        : p.category === category),
  );
export type BagItem = { id: string; size: string; quantity: number };
