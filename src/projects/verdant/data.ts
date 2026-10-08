export const image = (name: string) =>
  `${import.meta.env.BASE_URL}images/verdant/${name}.jpg`;
export const scenarios = [
  {
    name: "Solar",
    subtitle: "A clear afternoon",
    generation: 8.4,
    home: 5.6,
    battery: 2.1,
    grid: 0.7,
    stored: 68,
    source: "Rooftop array",
    project: "Meadowline Solar",
    capacity: "48 MW",
    photo: "solar",
    description:
      "Light reaches the array. The inverter converts it. Useful power moves to the places that need it.",
  },
  {
    name: "Wind",
    subtitle: "A steady coastal breeze",
    generation: 10.2,
    home: 6.4,
    battery: 2.8,
    grid: 1,
    stored: 74,
    source: "Wind generation",
    project: "Northfield Wind",
    capacity: "72 MW",
    photo: "turbines",
    description:
      "A steady wind keeps generation moving. Storage absorbs the surplus and the grid carries the rest.",
  },
  {
    name: "Storage",
    subtitle: "Power after sundown",
    generation: 5,
    home: 3.8,
    battery: 0,
    grid: 1.2,
    stored: 52,
    source: "Energy reserve",
    project: "Fieldworks Storage",
    capacity: "96 MWh",
    photo: "solar",
    description:
      "Stored energy extends the useful day. A considered reserve helps meet demand after generation slows.",
  },
];
export const nodes = [
  {
    id: "source",
    name: "Generation",
    detail:
      "The selected renewable source provides the input power in this illustrative small-site system.",
  },
  {
    id: "conversion",
    name: "Conversion",
    detail:
      "The inverter and distribution unit connect the source to the site, storage and grid.",
  },
  {
    id: "home",
    name: "Site demand",
    detail:
      "Useful power supplies lighting, heating and equipment. Demand is a selected example, not live telemetry.",
  },
  {
    id: "battery",
    name: "Storage",
    detail:
      "A battery reserve receives surplus generation. Stored percentage describes this sample system.",
  },
];
export type Scenario = (typeof scenarios)[number];
