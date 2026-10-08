import type { Brand } from "../../shared/types";

export const brand: Brand = {
  name: "Soundroom",
  slug: "soundroom",
  category: "Music platform",
  tagline: "Find your next obsession.",
  purpose:
    "An independent music discovery workspace for exploring releases, keeping a collection and building a listening queue.",
  description:
    "Soundroom brings the intimacy of a record shop into a music discovery workspace. A compressed display face, coral panels and lilac accents sit inside a quiet black interface. Album artwork mixes concert photography with equalizer and holographic textures, giving each release a different visual presence. The page moves from a featured listening session to new records and a compact selection of tracks. Search, saved releases and a local queue give the screen a clear purpose. Its custom symbol combines a record groove with an open doorway, suggesting a room that is always ready for another sound.",
  colors: [
    { name: "Record black", hex: "#151418" },
    { name: "Coral sleeve", hex: "#FF795E" },
    { name: "Lilac", hex: "#C0AFE8" },
    { name: "Warm white", hex: "#F7F4EC" },
    { name: "Graphite", hex: "#28262D" },
  ],
  fonts: { heading: "Grand Mighty", body: "DM Sans" },
  logo: '<path d="M7 31V8h25v23H7Z" fill="none" stroke="currentColor" stroke-width="3"/><path d="M14 25V14h11v11" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="19.5" cy="20" r="3" fill="currentColor"/><path d="M3 13v15M36 13v15" stroke="currentColor" stroke-width="2"/>',
  logoMeaning:
    "Nested record grooves form an open room, with a central dot marking the source of sound.",
  artDirection:
    "Independent record-store workspace with compressed typography, coral feature panels, lilac controls, distinct album sleeves and a restrained dark shell.",
  tags: [
    "music",
    "dashboard",
    "album art",
    "independent artists",
    "dark ui",
    "listening",
    "brand identity",
    "typography",
    "responsive",
    "discovery",
  ],
};
