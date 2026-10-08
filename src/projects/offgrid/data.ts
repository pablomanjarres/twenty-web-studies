export type Project = {
  id: number;
  name: string;
  discipline: string;
  year: string;
  summary: string;
  services: string[];
  image: string;
};
export const projects: Project[] = [
  {
    id: 1,
    name: "Otherlands",
    discipline: "CULTURE / BRAND WORLD",
    year: "2026",
    summary:
      "A new visual language for people who see a city as a place to make something happen. Otherlands connects music, late nights, and a curious creative community.",
    services: ["Strategy", "Identity", "Digital experience", "Art direction"],
    image: "city.jpg",
  },
  {
    id: 2,
    name: "Matter",
    discipline: "MATERIALS / DIGITAL EXPERIENCE",
    year: "2026",
    summary:
      "An independent material library with a point of view. We gave a quietly ambitious collection the clarity, tactility, and curiosity it deserved.",
    services: ["Positioning", "Visual identity", "Website", "Editorial system"],
    image: "glass.jpg",
  },
  {
    id: 3,
    name: "Far Out",
    discipline: "EXPLORATION / EDITORIAL",
    year: "2025",
    summary:
      "A journal for the outward-looking. Far Out makes room for new questions, places, and ideas through an expansive editorial world.",
    services: ["Naming", "Editorial direction", "Identity", "Web design"],
    image: "space.jpg",
  },
];
export const asset = (name: string) =>
  `${import.meta.env.BASE_URL}images/offgrid/${name}`;
