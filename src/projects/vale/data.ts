export const image = (name: string) =>
  `${import.meta.env.BASE_URL}images/vale/${name}.jpg`;

export const products = [
  {
    name: "Soft Start",
    kind: "The daily cleanser",
    note: "A gentle beginning, with oat and aloe.",
    size: "120 ml",
    price: 28,
    shape: "pump",
    tone: "#B7C4AC",
  },
  {
    name: "Dew Drop",
    kind: "The everyday serum",
    note: "A light layer, with rosewater and glycerin.",
    size: "30 ml",
    price: 36,
    shape: "bottle",
    tone: "#C3D0B3",
  },
  {
    name: "Still Water",
    kind: "The comforting cream",
    note: "A soft finish, with squalane and calendula.",
    size: "50 ml",
    price: 34,
    shape: "jar",
    tone: "#B1C2A1",
  },
];

export const rituals = {
  Morning: {
    heading: "Ease into the day.",
    text: "A fresh beginning. A light layer. A moment to yourself before the day begins.",
    steps: [
      "Cleanse with Soft Start",
      "Layer Dew Drop",
      "Finish with Still Water",
    ],
    label: "A fresh beginning",
  },
  Evening: {
    heading: "Let the day settle.",
    text: "Wash the day away and take a little time for a softer landing. Your evening, at your pace.",
    steps: [
      "Cleanse with Soft Start",
      "Finish with Still Water",
      "Pause, and take a breath",
    ],
    label: "A softer ending",
  },
};

export type RitualName = keyof typeof rituals;
