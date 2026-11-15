export const image = (name: string) =>
  `${import.meta.env.BASE_URL}images/offgrid-original/${name}.jpg`;

export const works = [
  {
    name: "STILL / MOVING",
    type: "Brand",
    detail: "Identity for a label that keeps changing.",
    image: "city",
    alt: "City street with traffic between tall towers at dusk",
    className: "og-original-fashion",
    year: "2026",
  },
  {
    name: "A different frequency",
    type: "Digital",
    detail: "A digital home for a new music culture.",
    image: "glass",
    alt: "Abstract light moving through ribbed glass",
    className: "og-original-frequency",
    year: "2026",
  },
  {
    name: "Common ground",
    type: "Brand",
    detail: "A place for the city to come together.",
    image: "space",
    alt: "A large event space filled with people and light",
    className: "og-original-place",
    year: "2025",
  },
];

export const filters = ["All", "Brand", "Digital"];

export const worksFor = (filter: string) =>
  works.filter((work) => filter === "All" || work.type === filter);
