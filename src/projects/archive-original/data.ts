export const image = (file: string) =>
  import.meta.env.BASE_URL + "images/archive-original/" + file + ".jpg";

export const products = [
  {
    id: "leather",
    name: "Leather biker jacket",
    category: "Outerwear",
    image: "jacket",
    price: 240,
    detail: "Black / Supple leather",
  },
  {
    id: "denim",
    name: "The straight-leg denim",
    category: "Essentials",
    image: "denim",
    price: 95,
    detail: "Washed blue / Cotton denim",
  },
  {
    id: "scarf",
    name: "Silk square scarf",
    category: "Accessories",
    image: "scarf",
    price: 120,
    detail: "Cherry / Silk twill",
  },
  {
    id: "layers",
    name: "Everyday layers",
    category: "Essentials",
    image: "essentials",
    price: 65,
    detail: "Natural palette / Cotton blend",
  },
];

export type Product = (typeof products)[number];

/* Accessories are sold in a single size. */
export const isOneSize = (product: Product) =>
  product.category === "Accessories";

export type BagItem = { id: string; size: string; quantity: number };
