import { Mountain, Leaf, UtensilsCrossed } from "lucide-react";

export const asset = (name: string) =>
  `${import.meta.env.BASE_URL}images/vestra/${name}.jpg`;
export const experiences = [
  {
    icon: Mountain,
    title: "Follow the quiet paths",
    copy: "Alpine trails, fresh air, and a new perspective around every bend.",
  },
  {
    icon: UtensilsCrossed,
    title: "Taste the season",
    copy: "Honest local ingredients. A kitchen guided by the land around us.",
  },
  {
    icon: Leaf,
    title: "Find your balance",
    copy: "A forest sauna, warm water, and room to reconnect with yourself.",
  },
];
