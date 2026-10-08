export const asset = (name: string) =>
  `${import.meta.env.BASE_URL}images/forma/${name}.jpg`;
export const projects = [
  {
    name: "The Linden Residence",
    type: "Residential",
    location: "Copenhagen, Denmark",
    year: "2026",
    image: "hero",
  },
  {
    name: "A Quiet Interlude",
    type: "Interiors",
    location: "Antwerp, Belgium",
    year: "2025",
    image: "project",
  },
];
