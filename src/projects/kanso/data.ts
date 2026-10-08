export const image = (name: string) =>
  `${import.meta.env.BASE_URL}images/kanso/${name}`;
export const money = (amount: number) =>
  new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(amount);
export const products = [
  {
    id: "morning-cup",
    name: "Morning cup",
    type: "Cups",
    price: 28,
    glaze: "Ivory",
    swatch: "#e8ddc8",
    size: "Ø 8.5 × 7 cm",
    capacity: "240 ml",
    finish: "Speckled satin",
    shape: "cup",
    image: "morning-cup-v2.webp",
    description:
      "A generous handle and a softly uneven rim. Made for a slow first cup, with a little room left for milk.",
  },
  {
    id: "cloud-bowl",
    name: "Cloud bowl",
    type: "Tableware",
    price: 36,
    glaze: "Cloud",
    swatch: "#aabfc1",
    size: "Ø 18 × 5 cm",
    capacity: "650 ml",
    finish: "Blue satin interior",
    shape: "bowl",
    image: "cloud-bowl-v2.webp",
    description:
      "A low, open bowl with a soft blue interior and a cream outer wall. Equally at home with breakfast or something shared.",
  },
  {
    id: "stem-vase",
    name: "Stem vase",
    type: "Vessels",
    price: 48,
    glaze: "Blush",
    swatch: "#d6b4a9",
    size: "Ø 10 × 23 cm",
    capacity: "Single stems",
    finish: "Matte blush slip",
    shape: "vase",
    image: "stem-vase-v2.webp",
    description:
      "A narrow neck above a gently rounded body. The quiet marks of the wheel remain visible beneath a matte blush finish.",
  },
  {
    id: "daily-plate",
    name: "Daily plate",
    type: "Tableware",
    price: 32,
    glaze: "Sand",
    swatch: "#b9a18a",
    size: "Ø 24 × 2 cm",
    capacity: "Dinner plate",
    finish: "Clouded sand glaze",
    shape: "plate",
    image: "daily-plate-v2.webp",
    description:
      "A broad everyday plate with a small raised lip. A clouded sand glaze settles differently on every hand-thrown surface.",
  },
  {
    id: "little-pitcher",
    name: "Little pitcher",
    type: "Vessels",
    price: 42,
    glaze: "Cocoa",
    swatch: "#704b36",
    size: "Ø 11 × 13 cm",
    capacity: "350 ml",
    finish: "Glossy cocoa",
    shape: "pitcher",
    image: "little-pitcher-v2.webp",
    description:
      "A small rounded pitcher with a clean pouring lip. Its deep cocoa glaze catches the light around the handle and shoulder.",
  },
  {
    id: "tea-tumbler",
    name: "Tea tumbler",
    type: "Cups",
    price: 24,
    glaze: "Ivory",
    swatch: "#e8ddc8",
    size: "Ø 8 × 9 cm",
    capacity: "260 ml",
    finish: "Ivory / exposed clay",
    shape: "tumbler",
    image: "tea-tumbler-v2.webp",
    description:
      "A handle-free cup that sits comfortably in both hands. Warm cream meets exposed terracotta at the foot.",
  },
] as const;
export type Product = (typeof products)[number];
export type CartLine = { product: Product; quantity: number };
export const categories = ["All objects", "Cups", "Tableware", "Vessels"];
export const glazes = Array.from(
  new Map(
    products.map((product) => [
      product.glaze,
      { name: product.glaze, color: product.swatch },
    ]),
  ).values(),
);
