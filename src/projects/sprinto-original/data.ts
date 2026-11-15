export const asset = (name: string) =>
  `${import.meta.env.BASE_URL}images/sprinto-original/${name}.jpg`;
export const tickerPhrases = [
  "PADEL IS FOR EVERYONE",
  "MORE RALLIES. MORE GOOD DAYS.",
  "FIND YOUR PEOPLE",
];
export const session = { minutes: 90, price: "€28" };
export const allAreas = "All locations";
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
    title: "FIND YOUR PEOPLE.",
    copy: "Join an open game. Meet your next doubles partner. Everyone’s invited.",
    cta: "Join an open game",
  },
  {
    title: "GET A LITTLE BETTER.",
    copy: "A first lesson or a sharper backhand. Our coaches meet you where you are.",
    cta: "Book a coaching slot",
  },
  {
    title: "MAKE IT A HABIT.",
    copy: "A weekly slot, a familiar crew, and something good to look forward to.",
    cta: "Hold a weekly court",
  },
];
export const areas = [allAreas, ...new Set(courts.map((court) => court.area))];
