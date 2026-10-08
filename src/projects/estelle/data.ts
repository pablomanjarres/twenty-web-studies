export const image = (file: string) =>
  import.meta.env.BASE_URL + "images/estelle/" + file + ".jpg";

export const pieces = [
  {
    name: "The Halo Ring",
    type: "Rings",
    image: "ring",
    price: "£680",
    material: "Gold, diamond, and a little light.",
  },
  {
    name: "The Reverie Hoops",
    type: "Earrings",
    image: "gold",
    price: "£240",
    material: "Warm gold. A sculptural twist.",
  },
  {
    name: "The Still Necklace",
    type: "Necklaces",
    image: "necklace",
    price: "£320",
    material: "A golden line, close to the heart.",
  },
  {
    name: "The Morning Drop",
    type: "Earrings",
    image: "earrings",
    price: "£190",
    material: "Simple form. Lasting presence.",
  },
];
