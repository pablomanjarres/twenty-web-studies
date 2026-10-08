import type { Brand } from "../../shared/types";

export const brand: Brand = {
  slug: "meridian",
  name: "Meridian",
  category: "Logistics dashboard",
  tagline: "Every movement. In view.",
  purpose:
    "A freight operations workspace for shipment selection, destination handoff planning, and geographic route monitoring.",
  description:
    "Meridian brings the freight desk onto a detailed destination planning map. A compact utility bar and icon rail frame richly layered shipment cards, each with an original vessel, aircraft, or truck illustration. Selecting a movement reveals its destination port schematic, expected arrival, cargo, and operational handoff state. Berth, collection, and transfer points support the next planning decision without implying live vehicle positioning. A secondary world view connects the same shipments over geographic coastlines, while the manifest provides a concise operational ledger. Midnight surfaces, restrained cyan routes, and clear status accents keep the working geography in focus. The crossing-route identity connects each destination to one shared operational view.",
  colors: [
    { name: "Midnight", hex: "#111B2A" },
    { name: "Deep ocean", hex: "#192B3E" },
    { name: "Route cyan", hex: "#58D8DC" },
    { name: "Handoff amber", hex: "#F2C998" },
    { name: "Map slate", hex: "#596A7F" },
    { name: "Clear white", hex: "#EAF0F6" },
  ],
  fonts: { heading: "Space Grotesk", body: "DM Sans" },
  logo: '<path d="M7 30 30 7M8 9l23 22" stroke="currentColor" stroke-width="2"/><path d="M7 30h9M7 30v-9M30 7h-9M30 7v9M8 9h8M8 9v8M31 31h-8M31 31v-8" fill="none" stroke="currentColor" stroke-width="2.8"/><circle cx="19.5" cy="19.5" r="4" fill="currentColor"/>',
  logoMeaning:
    "Two crossing routes join around a central node, showing connected destinations and a single operational view.",
  tags: [
    "Dashboard",
    "Logistics",
    "Data visualization",
    "Dark UI",
    "Route map",
    "Operations",
    "SaaS",
    "Cyan",
    "Transportation",
    "Brand identity",
  ],
  artDirection:
    "A midnight operational map with dense original port schematics, compact utility navigation, a narrow card rail, detailed vehicle illustrations, and floating arrival and handoff docks. Unequal information surfaces preserve the map as the dominant working area; cyan selects movement and amber marks review states.",
};
