export const asset = (filename: string) =>
  `${import.meta.env.BASE_URL}images/vestra/${filename}`;
export const rooms = [
  {
    name: "Valley room",
    rate: 245,
    area: "32 m²",
    note: "A sheltered terrace and a view across the valley.",
  },
  {
    name: "Ridge suite",
    rate: 340,
    area: "48 m²",
    note: "Two quiet rooms, a deep bath and the morning light.",
  },
  {
    name: "Forest cabin",
    rate: 385,
    area: "54 m²",
    note: "An independent cabin at the edge of the trees.",
  },
];
