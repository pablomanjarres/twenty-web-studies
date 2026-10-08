import { Clock3, Users, Zap } from "lucide-react";

export const asset = (name: string) =>
  `${import.meta.env.BASE_URL}images/sprinto/${name}.jpg`;
export const courts = [
  {
    name: "The Social Club",
    area: "Downtown",
    distance: "1.2 km",
    surface: "Panoramic courts",
    times: ["17:00", "18:30", "20:00"],
  },
  {
    name: "Riverside Courts",
    area: "Riverside",
    distance: "3.4 km",
    surface: "Outdoor courts",
    times: ["16:30", "18:00", "19:30"],
  },
  {
    name: "The Night Shift",
    area: "Downtown",
    distance: "2.1 km",
    surface: "Indoor courts",
    times: ["18:00", "19:30", "21:00"],
  },
];
export const ways = [
  {
    icon: Users,
    title: "FIND YOUR PEOPLE.",
    copy: "Join an open game. Meet your next doubles partner. Everyone’s invited.",
  },
  {
    icon: Zap,
    title: "GET A LITTLE BETTER.",
    copy: "A first lesson or a sharper backhand. Our coaches meet you where you are.",
  },
  {
    icon: Clock3,
    title: "MAKE IT A HABIT.",
    copy: "A weekly slot, a familiar crew, and something good to look forward to.",
  },
];
