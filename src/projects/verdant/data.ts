import { BatteryCharging, House, Sun, Wind, Zap } from "lucide-react";

export const image = (name: string) =>
  `${import.meta.env.BASE_URL}images/verdant/${name}.jpg`;

export const approaches = [
  {
    name: "Solar",
    number: "01",
    Icon: Sun,
    title: "Make more of the light.",
    text: "Thoughtful solar projects that put open land, rooftops, and the everyday sun to work.",
    project: "Meadowline Solar",
    location: "Open-field generation",
    capacity: "48 MW",
    image: "solar",
    caption: "An open field. A bright possibility.",
  },
  {
    name: "Wind",
    number: "02",
    Icon: Wind,
    title: "Follow a better direction.",
    text: "Wind generation designed around the landscape, the local rhythm, and a long view of tomorrow.",
    project: "Northfield Wind",
    location: "Landscape-scale generation",
    capacity: "72 MW",
    image: "turbines",
    caption: "Energy, moving with the landscape.",
  },
  {
    name: "Storage",
    number: "03",
    Icon: BatteryCharging,
    title: "Keep the good energy.",
    text: "Storage that gives renewable power a longer reach, connecting the moment it is made to the moment it is needed.",
    project: "Fieldworks Storage",
    location: "Grid-connected energy reserve",
    capacity: "96 MWh",
    image: "solar",
    caption: "A steady reserve for a changing day.",
  },
];

export const flow = [
  {
    number: "01",
    Icon: Sun,
    title: "Start with nature.",
    text: "Light, wind, and a little room to think differently.",
  },
  {
    number: "02",
    Icon: Zap,
    title: "Make good energy.",
    text: "Considered systems that put natural potential to work.",
  },
  {
    number: "03",
    Icon: House,
    title: "Power the everyday.",
    text: "A better current for the places where life happens.",
  },
];
