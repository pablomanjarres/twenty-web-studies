export const image = (file: string) =>
  `${import.meta.env.BASE_URL}images/cinder/${file}`;
export const money = (amount: number) => `$${amount}`;
export const coffees = [
  {
    id: "daybreak",
    name: "Daybreak",
    country: "Colombia",
    region: "Huila",
    notes: ["Milk chocolate", "Orange", "Caramel"],
    price: 18,
    image: "daybreak-v2.webp",
    number: "01",
    roast: "Medium",
    process: "Washed",
    altitude: "1,600–1,850 m",
    label: "The everyday one",
    batch: "C04 / 01",
    note: "Rounded, sweet, and ready for the first cup. A familiar kind of good.",
  },
  {
    id: "golden-hour",
    name: "Golden Hour",
    country: "Ethiopia",
    region: "Sidama",
    notes: ["Apricot", "Honey", "Jasmine"],
    price: 22,
    image: "golden-hour-v2.webp",
    number: "02",
    roast: "Light",
    process: "Natural",
    altitude: "1,900–2,200 m",
    label: "The bright one",
    batch: "C04 / 02",
    note: "A brighter cup, with a little floral lift. Take a moment with this one.",
  },
  {
    id: "nightcap",
    name: "Nightcap",
    country: "Brazil",
    region: "Cerrado",
    notes: ["Cocoa", "Almond", "Brown sugar"],
    price: 19,
    image: "nightcap-v2.webp",
    number: "03",
    roast: "Medium / decaf",
    process: "Decaffeinated",
    altitude: "900–1,100 m",
    label: "The slow one",
    batch: "C04 / 03",
    note: "All the ritual, at a gentler pace. A sweet, nutty cup for later in the day.",
  },
] as const;
export type Coffee = (typeof coffees)[number];
export const grinds = ["Whole bean", "Filter", "Espresso"] as const;
export type Grind = (typeof grinds)[number];
export type CartItem = { coffee: Coffee; grind: Grind; quantity: number };
export const brews = {
  "Pour-over": {
    dose: "20 g",
    water: "320 ml",
    grind: "Medium",
    time: "3:00",
    steps: [
      "Rinse your paper filter and add the ground coffee.",
      "Pour 50 ml of water. Let the coffee bloom for 30 seconds.",
      "Pour the remaining water slowly, in two gentle circles.",
    ],
  },
  "French press": {
    dose: "30 g",
    water: "500 ml",
    grind: "Coarse",
    time: "4:00",
    steps: [
      "Add the coffee, then pour in hot water.",
      "Stir gently and leave the coffee to steep for four minutes.",
      "Press slowly. Pour the whole brew into your cup or jug.",
    ],
  },
  Espresso: {
    dose: "18 g",
    water: "36 g out",
    grind: "Fine",
    time: "0:25–0:30",
    steps: [
      "Fill the basket and distribute the grounds evenly.",
      "Tamp level and start your shot.",
      "Aim for 36 g in the cup, then adjust to your own taste.",
    ],
  },
};
export type Brew = keyof typeof brews;
