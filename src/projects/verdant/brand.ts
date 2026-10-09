import type { Brand } from "../../shared/types";

export const brand: Brand = {
  slug: "verdant",
  name: "Verdant",
  category: "Renewable energy",
  tagline: "See where the energy goes.",
  purpose:
    "A renewable systems company website that explains generation, conversion, demand and storage through an interactive energy-flow canvas and field projects.",
  description:
    "Verdant makes renewable energy easier to understand through the relationships that make a system useful. A cool white energy canvas connects generation, conversion, site demand and storage through original isometric hardware illustrations. Rounded source controls switch solar, wind and storage scenarios, while clear readout plates show balanced example flows. Selecting a component brings its role into a dark context bar. Graphite text, slate surfaces and solar yellow accents keep the technical information clear. Field photography carries the story into the landscape, and the horizon symbol connects natural potential with ordered infrastructure. A compact site planner provides a practical starting point for a future connection.",
  colors: [
    { name: "Solar mustard", hex: "#E5C24D" },
    { name: "Graphite", hex: "#24383F" },
    { name: "Cool white", hex: "#F4F8FB" },
    { name: "Slate", hex: "#DDE6EA" },
    { name: "Field green", hex: "#819174" },
  ],
  fonts: { heading: "Sora", body: "Manrope", wordmark: "Manrope" },
  logo: '<path d="M6 23a14 14 0 0 1 28 0" fill="none" stroke="currentColor" stroke-width="3"/><path d="M6 23h28M5 29h30M8 35h24M20 2v5M5 7l4 4M35 7l-4 4" fill="none" stroke="currentColor" stroke-width="3"/>',
  logoMeaning:
    "A rising sun sits over three field lines, connecting natural energy to a considered, ordered landscape.",
  tags: [
    "Renewable energy",
    "Sustainability",
    "Architecture",
    "Landing page",
    "Solar",
    "Wind",
    "Interactive canvas",
    "Photography",
    "Mustard",
    "Brand identity",
  ],
  artDirection:
    "A cool white technical canvas with original isometric hardware drawings, balanced power lines and filled source capsules. Slate readout plates and a graphite context bar explain the selected node. Solar yellow highlights the flow, with monospaced units reserved for measurements and field photography below.",
};
