export type Track = {
  id: number;
  title: string;
  artist: string;
  mood: string;
  duration: number;
  color: string;
  ink: string;
  slug: string;
  year: string;
};
export const tracks: Track[] = [
  {
    id: 1,
    title: "Soft signal",
    artist: "The Still Hours",
    mood: "WARM / TEXTURAL",
    duration: 32,
    color: "#f47758",
    ink: "#291f22",
    slug: "soft-signal",
    year: "SR—001",
  },
  {
    id: 2,
    title: "Violet hour",
    artist: "Mira Sol",
    mood: "SPACIOUS / DRIFTING",
    duration: 36,
    color: "#baabd7",
    ink: "#30233e",
    slug: "violet-hour",
    year: "SR—002",
  },
  {
    id: 3,
    title: "Slow bloom",
    artist: "Field Notes",
    mood: "GENTLE / ORGANIC",
    duration: 40,
    color: "#bcc2a5",
    ink: "#303e27",
    slug: "slow-bloom",
    year: "SR—003",
  },
  {
    id: 4,
    title: "After image",
    artist: "Quiet Form",
    mood: "SOFT / LUMINOUS",
    duration: 28,
    color: "#879cba",
    ink: "#23303b",
    slug: "after-image",
    year: "SR—004",
  },
  {
    id: 5,
    title: "Last light",
    artist: "The Still Hours",
    mood: "HUSHED / EVENING",
    duration: 34,
    color: "#debd83",
    ink: "#4b3627",
    slug: "last-light",
    year: "SR—005",
  },
];
export const media = (slug: string) =>
  `${import.meta.env.BASE_URL}images/soundroom/${slug}.mp3`;
export const time = (seconds: number) =>
  `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;

export const moods = [
  "All",
  "Warm",
  "Spacious",
  "Organic",
  "Luminous",
  "Evening",
];
export const rooms = [
  { name: "Soft light", note: "WARM / TEXTURAL", tracks: [1, 5] },
  { name: "Open space", note: "SPACIOUS / DRIFTING", tracks: [2, 4] },
  { name: "Slow growth", note: "GENTLE / ORGANIC", tracks: [3] },
];
