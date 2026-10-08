export const image = (name: string) =>
  `${import.meta.env.BASE_URL}images/wayfarer/${name}.jpg`;

export const journeys = [
  {
    name: "A quieter kind of altitude",
    place: "Dolomites, Italy",
    kind: "Alpine",
    days: "7 days",
    image: "alpine",
    note: "Ridgeline mornings, lakeside lunches and a small mountain hut at the end of each day.",
  },
  {
    name: "Follow the open country",
    place: "Lake District, England",
    kind: "Countryside",
    days: "4 days",
    image: "camp",
    note: "Old footpaths, wide green valleys and enough time to stop whenever the light changes.",
  },
  {
    name: "Above the everyday",
    place: "Carpathians, Romania",
    kind: "Alpine",
    days: "6 days",
    image: "hero",
    note: "A journey through wild meadows and forest trails, with the peaks always in sight.",
  },
];
