import type { Brand } from "../../shared/types";

export const brand: Brand = {
  slug: "meridian",
  name: "Meridian",
  category: "Logistics dashboard",
  tagline: "Every movement. In view.",
  purpose:
    "A shipment control tower that connects route monitoring, freight status, and arrival planning in one operational workspace.",
  description:
    "Meridian is a logistics control tower designed for the rhythm of a busy freight desk. A midnight navy workspace pairs precise cyan route graphics with compact shipment rows, arrival details, and readable operational metrics. The map and table share a selection, so choosing a shipment brings its journey into focus. Search and transport filters narrow the workspace, while a local scheduling panel adds a new movement to the list. Technical mono labels give coordinates and reference numbers a distinct voice. The crossing route symbol represents connected destinations. Every panel supports a clear task: locate a movement, understand its status, and plan the next arrival.",
  colors: [
    { name: "Midnight", hex: "#101C2B" },
    { name: "Deep ocean", hex: "#152537" },
    { name: "Route cyan", hex: "#58D8DC" },
    { name: "Signal green", hex: "#9DE2AC" },
    { name: "Map slate", hex: "#7390A9" },
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
    "A precise midnight operational workspace with compact tables, vector cartography, cyan routes, measured spacing, and selective Caleb Mono technical labels.",
};
