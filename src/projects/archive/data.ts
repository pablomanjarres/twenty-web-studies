export const image = (file: string) =>
  import.meta.env.BASE_URL + "images/archive/" + file + ".jpg";

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
    id: "bag",
    name: "Quilted camera bag",
    category: "Accessories",
    image: "bag",
    price: 180,
    detail: "Black / Vintage collection",
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

export type BagItem = { id: string; size: string; quantity: number };
