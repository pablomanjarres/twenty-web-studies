export const image = (name: string) =>
  `${import.meta.env.BASE_URL}images/vale/${name}`;
export const money = (value: number) => `€${value}`;
export const formulas = [
  {
    id: "soft-start",
    number: "01",
    name: "Soft Start",
    kind: "A daily cleanser",
    note: "A clear, fluid wash. A simple beginning.",
    plant: "Oat",
    latin: "Avena sativa",
    specimen: "oat-specimen-v2.webp",
    image: "soft-start-v2.webp",
    ingredient: "Oat kernel extract",
    explanation:
      "A botanical ingredient drawn from the oat kernel. Paired here with aloe juice in a softly textured cleanser.",
    texture: "serum-texture-v2.webp",
    textureName: "Clear, fluid, and easy to rinse.",
    use: "Massage onto damp skin, then rinse with warm water.",
    timing: "Morning or evening",
    secondary: "Aloe leaf juice",
    volumes: [
      { label: "120 ml", price: 28 },
      { label: "240 ml", price: 46 },
    ],
  },
  {
    id: "dew-drop",
    number: "02",
    name: "Dew Drop",
    kind: "An everyday serum",
    note: "A light layer. A moment between steps.",
    plant: "Rose",
    latin: "Rosa spp.",
    specimen: "rose-specimen-v2.webp",
    image: "dew-drop-v2.webp",
    ingredient: "Rose flower water",
    explanation:
      "Rose flower water gives this formula its botanical character. Glycerin is part of the light, clear texture.",
    texture: "serum-texture-v2.webp",
    textureName: "Clear, light, and quietly luminous.",
    use: "Press a few drops onto clean skin before your cream.",
    timing: "Morning or evening",
    secondary: "Glycerin",
    volumes: [
      { label: "30 ml", price: 36 },
      { label: "50 ml", price: 54 },
    ],
  },
  {
    id: "still-water",
    number: "03",
    name: "Still Water",
    kind: "A comforting cream",
    note: "A soft finish. A little time to settle.",
    plant: "Calendula",
    latin: "Calendula officinalis",
    specimen: "calendula-specimen-v2.webp",
    image: "still-water-v2.webp",
    ingredient: "Calendula flower extract",
    explanation:
      "The calendula flower is the botanical starting point. Squalane joins a smooth, comfortably rich cream texture.",
    texture: "cream-texture-v2.webp",
    textureName: "Silky, smooth, and comfortably rich.",
    use: "Smooth a small amount over clean skin as the final step.",
    timing: "Morning or evening",
    secondary: "Squalane",
    volumes: [
      { label: "50 ml", price: 34 },
      { label: "100 ml", price: 52 },
    ],
  },
] as const;
export type Formula = (typeof formulas)[number];
export type Selection = { formula: Formula; volume: number };
export const questions = [
  {
    question: "Where does it sit in my ritual?",
    answer:
      "Begin with Soft Start, follow with Dew Drop, and finish with Still Water. Use the steps that suit your own routine.",
  },
  {
    question: "How should I store the bottles?",
    answer:
      "Keep each bottle closed, away from direct sunlight and excess heat. Use clean hands when opening the cream jar.",
  },
  {
    question: "Can I keep the packaging?",
    answer:
      "The glass bottle and removable cap are designed as separate pieces. Empty, rinse, and check your local recycling guidance.",
  },
];
