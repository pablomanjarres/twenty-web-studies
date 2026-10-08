import { Leaf, Package, Hand } from "lucide-react";

export const asset = (name: string) =>
  `${import.meta.env.BASE_URL}images/kanso/${name}.jpg`;
export const products = [
  {
    id: "morning",
    name: "The morning cup",
    type: "Cups",
    price: 28,
    material: "Speckled stoneware",
    image: "vase",
    color: "#d9cdb9",
  },
  {
    id: "everyday",
    name: "The everyday plate",
    type: "Tableware",
    price: 34,
    material: "Cloud blue glaze",
    image: "collection",
    color: "#b7c8cf",
  },
  {
    id: "ritual",
    name: "The ritual mug",
    type: "Cups",
    price: 32,
    material: "Warm ivory ceramic",
    image: "cup",
    color: "#d8cbc1",
  },
];
export type Product = (typeof products)[number];
export const values = [
  {
    icon: Hand,
    title: "Made by hand",
    copy: "Shaped, glazed, and finished in our small independent atelier.",
  },
  {
    icon: Leaf,
    title: "Made thoughtfully",
    copy: "Natural materials, small batches, and room for a little difference.",
  },
  {
    icon: Package,
    title: "Made to arrive safely",
    copy: "Carefully wrapped in recyclable packaging, ready for your everyday.",
  },
];
