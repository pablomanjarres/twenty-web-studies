export type Lesson = {
  id: number;
  title: string;
  kind: string;
  duration: string;
  color: string;
  x: number;
  y: number;
  prerequisites: number[];
  description: string;
  task: string;
};
export const lessons: Lesson[] = [
  {
    id: 1,
    title: "Start with a spark",
    kind: "FOUNDATION",
    duration: "6 min",
    color: "#e2edb6",
    x: 85,
    y: 18,
    prerequisites: [],
    description:
      "Good design starts with noticing. Collect a few things that make you feel something, and find the thread between them.",
    task: "Find your point of view",
  },
  {
    id: 2,
    title: "Color has a voice",
    kind: "PRACTICE",
    duration: "8 min",
    color: "#f6ccaf",
    x: 51,
    y: 30,
    prerequisites: [1],
    description:
      "A warm welcome. A quiet pause. A little energy. Color can set the mood before a single word is read.",
    task: "Build a readable color pairing",
  },
  {
    id: 3,
    title: "Give it some space",
    kind: "CHALLENGE",
    duration: "12 min",
    color: "#ded7ef",
    x: 20,
    y: 43,
    prerequisites: [2],
    description:
      "A little breathing room makes a big difference. Explore how spacing helps your ideas feel clear and considered.",
    task: "Choose the calmer layout",
  },
  {
    id: 4,
    title: "Letters with feeling",
    kind: "LESSON",
    duration: "10 min",
    color: "#f1e5a5",
    x: 52,
    y: 59,
    prerequisites: [3],
    description:
      "The same words can sound completely different. Discover the personality hiding in a typeface.",
    task: "Match the voice to the message",
  },
  {
    id: 5,
    title: "A moment to notice",
    kind: "REFLECTION",
    duration: "4 min",
    color: "#dce8e0",
    x: 23,
    y: 74,
    prerequisites: [4],
    description:
      "Keep your eyes open. Small observations build a library of ideas you can return to whenever you need a spark.",
    task: "Choose an observation to keep",
  },
  {
    id: 6,
    title: "Make it yours",
    kind: "CREATIVE BRIEF",
    duration: "15 min",
    color: "#dfe8bc",
    x: 50,
    y: 88,
    prerequisites: [5],
    description:
      "Bring your small discoveries together. Make something that feels a little more like you, and share the choices behind it.",
    task: "Pick a direction for your creative brief",
  },
];
export const asset = `${import.meta.env.BASE_URL}images/bloom/learning-islands.webp`;
