export const image = (name: string) =>
  `${import.meta.env.BASE_URL}images/cinder/${name}.jpg`;

export const coffees = [
  {
    name: "Daybreak",
    origin: "Colombia · Huila",
    notes: "Milk chocolate / orange / caramel",
    price: 18,
    color: "#EBC971",
    label: "The everyday one",
    number: "01",
  },
  {
    name: "Golden Hour",
    origin: "Ethiopia · Sidama",
    notes: "Apricot / honey / jasmine",
    price: 22,
    color: "#D48B58",
    label: "The bright one",
    number: "02",
  },
  {
    name: "Nightcap",
    origin: "Brazil · Cerrado",
    notes: "Cocoa / almond / brown sugar",
    price: 19,
    color: "#8C9360",
    label: "The slow one · Decaf",
    number: "03",
  },
];

export type CartItem = { name: string; grind: string; quantity: number };
