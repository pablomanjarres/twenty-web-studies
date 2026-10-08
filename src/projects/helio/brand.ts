import type { Brand } from "../../shared/types";
export const brand: Brand = {
  slug: "helio",
  name: "Helio",
  category: "Developer platform",
  tagline: "Your next idea, in orbit.",
  purpose:
    "A developer cloud that makes deploying globally distributed applications feel immediate and clear.",
  description:
    "Helio is a developer workspace built around the life of an application. A pearl sidebar gives projects and environments a clear home; a wide cobalt traffic plot connects request volume, response health, and latency to a selected hour. The deployment ledger opens each commit into its build details, while a focused release dialog traces compilation, distribution, configuration errors, and recovery. A region view reveals the connected compute core, with concise code recipes and visible usage limits below the console. Compact typography, pale surfaces, and precise signal colors keep dense information calm. Its geometric identity expresses one application reaching a distributed network.",
  colors: [
    { name: "Orbit cobalt", hex: "#234AFB" },
    { name: "White", hex: "#FFFFFF" },
    { name: "Carbon", hex: "#11151E" },
    { name: "Grid", hex: "#303747" },
    { name: "Console pearl", hex: "#F5F6FB" },
    { name: "Signal green", hex: "#38B783" },
  ],
  fonts: { heading: "Space Grotesk", body: "DM Sans" },
  logo: '<path d="M20 11 28 15.5v9L20 29l-8-4.5v-9Z" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linejoin="round"/><path d="M20 11V4M28 24.5l6 3.5M12 24.5 6 28M12 15.5l8 5 8-5M20 20.5V29" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><circle cx="20" cy="3.5" r="3.1" fill="currentColor"/><circle cx="35" cy="28.5" r="3.1" fill="currentColor"/><circle cx="5" cy="28.5" r="3.1" fill="currentColor"/>',
  logoMeaning:
    "A geometric compute core branches toward three deployment nodes, expressing one application distributed across a global network.",
  artDirection:
    "A pearl developer console with a workspace sidebar, cobalt request analytics, compact deployment ledger, inline release details, and a focused graphite build dialog. Connected regional topology and quiet code recipes extend the workspace.",
  tags: [
    "Cloud",
    "Developer tools",
    "Technical",
    "Cobalt",
    "Infrastructure",
    "Orbit",
    "SaaS",
    "Code",
    "Edge network",
    "Deployments",
  ],
};
