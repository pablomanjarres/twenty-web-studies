export const image = (name: string) =>
  import.meta.env.BASE_URL + "images/estelle/" + name + "-v2.webp";
export interface Material {
  id: string;
  name: string;
  purity: string;
  weight: string;
  price: number;
  macro: string;
  worn: string;
  tone: string;
}
export interface Piece {
  id: string;
  number: string;
  name: string;
  category: string;
  line: string;
  description: string;
  dimensions: string;
  details: string[];
  materials: Material[];
}
export const pieces: Piece[] = [
  {
    id: "fold",
    number: "01",
    name: "Fold",
    category: "Sculptural ring",
    line: "A gesture, held in metal.",
    description:
      "A broad ribbon folds into a continuous loop. The polished outer face catches the light; a softly brushed interior rests against the hand.",
    dimensions: "18 mm at the shoulder",
    details: [
      "Continuous folded-ribbon form",
      "Polished face / brushed interior",
      "Ring sizes 48–60",
    ],
    materials: [
      {
        id: "gold",
        name: "18k yellow gold",
        purity: "750 / yellow gold",
        weight: "Approx. 9 g · size dependent",
        price: 1480,
        macro: "fold-macro",
        worn: "fold-hand",
        tone: "Warm, clear, and quietly luminous.",
      },
      {
        id: "silver",
        name: "Sterling silver",
        purity: "925 / sterling silver",
        weight: "Approx. 6 g · size dependent",
        price: 280,
        macro: "fold-macro-silver",
        worn: "fold-hand-silver",
        tone: "A cooler light along the same folded edge.",
      },
    ],
  },
  {
    id: "petal",
    number: "02",
    name: "Petal",
    category: "Sculptural earrings",
    line: "The lightest sense of movement.",
    description:
      "An elongated petal turns softly along its own axis. Two concave faces gather light, with an open curve that changes from every angle.",
    dimensions: "34 × 12 mm / each",
    details: [
      "Elongated folded-petal form",
      "High-polished concave surface",
      "Post fastening / sold as a pair",
    ],
    materials: [
      {
        id: "gold",
        name: "18k yellow gold",
        purity: "750 / yellow gold",
        weight: "Approx. 6 g / pair",
        price: 980,
        macro: "petal-macro",
        worn: "petal-worn",
        tone: "Warm gold, drawn into a slender drop.",
      },
    ],
  },
];
export const price = (value: number) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
export const visitDays = ["Tuesday", "Thursday", "Saturday"];
export const visitTimes = ["10:00", "12:00", "15:00"];
