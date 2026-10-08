export const asset = (name: string) =>
  `${import.meta.env.BASE_URL}images/forma/${name}.jpg`;
export const projects = [
  {
    name: "The Linden Residence",
    type: "Residential",
    location: "Copenhagen, Denmark",
    year: "2026",
    image: "hero",
    area: "315 m²",
    materials: "Oak / limestone / steel",
    short: "A home between light and shadow.",
    description:
      "An open sequence of rooms gives daily life a generous rhythm. A continuous oak floor, pale stone surfaces, and slender steel details connect the spaces without dissolving their individual character.",
  },
  {
    name: "A Quiet Interlude",
    type: "Interiors",
    location: "Antwerp, Belgium",
    year: "2025",
    image: "project",
    area: "186 m²",
    materials: "Ash / plaster / linen",
    short: "A softer way of inhabiting the city.",
    description:
      "A sunlit apartment becomes a sequence of small rituals. Natural plaster and pale timber bring warmth to the generous windows, while considered furniture and quiet thresholds leave room for the people who live here.",
  },
];
export type Project = (typeof projects)[number];
