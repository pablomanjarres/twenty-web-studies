export const image = (name: string) =>
  `${import.meta.env.BASE_URL}images/offgrid-original/${name}.jpg`;

export const works = [
  {
    name: "STILL / MOVING",
    type: "Brand",
    detail: "Identity for a label that keeps changing.",
    image: "portrait",
    className: "og-original-fashion",
    year: "2026",
  },
  {
    name: "A different frequency",
    type: "Digital",
    detail: "A digital home for a new music culture.",
    image: "glass",
    className: "og-original-frequency",
    year: "2026",
  },
  {
    name: "Common ground",
    type: "Brand",
    detail: "A place for the city to come together.",
    image: "space",
    className: "og-original-place",
    year: "2025",
  },
];
