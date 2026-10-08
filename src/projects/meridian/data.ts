export const ports = [
  { name: "Los Angeles", code: "USLAX", x: 155, y: 155 },
  { name: "Newark", code: "USEWR", x: 285, y: 143 },
  { name: "Rotterdam", code: "NLRTM", x: 463, y: 105 },
  { name: "Hamburg", code: "DEHAM", x: 490, y: 100 },
  { name: "Singapore", code: "SGSIN", x: 678, y: 241 },
  { name: "Shanghai", code: "CNSHA", x: 755, y: 160 },
];

export type Shipment = {
  id: string;
  origin: string;
  destination: string;
  mode: "Ocean" | "Air" | "Road";
  cargo: string;
  status: string;
  arrival: string;
  progress: number;
  vessel: string;
};

export const initialShipments: Shipment[] = [
  {
    id: "MRD-2481",
    origin: "Shanghai",
    destination: "Los Angeles",
    mode: "Ocean",
    cargo: "12 × 40′ HC",
    status: "In transit",
    arrival: "Oct 10 · 08:30",
    progress: 68,
    vessel: "Pacific Aurora",
  },
  {
    id: "MRD-2479",
    origin: "Singapore",
    destination: "Rotterdam",
    mode: "Ocean",
    cargo: "8 × 20′ GP",
    status: "In transit",
    arrival: "Oct 11 · 14:00",
    progress: 54,
    vessel: "Eastern Horizon",
  },
  {
    id: "MRD-2476",
    origin: "Newark",
    destination: "Hamburg",
    mode: "Air",
    cargo: "2,450 kg",
    status: "At customs",
    arrival: "Oct 08 · 16:45",
    progress: 91,
    vessel: "Flight ML 208",
  },
  {
    id: "MRD-2473",
    origin: "Rotterdam",
    destination: "Hamburg",
    mode: "Road",
    cargo: "18 pallets",
    status: "Delivered",
    arrival: "Oct 08 · 09:10",
    progress: 100,
    vessel: "Vehicle MR 041",
  },
  {
    id: "MRD-2470",
    origin: "Los Angeles",
    destination: "Singapore",
    mode: "Ocean",
    cargo: "6 × 40′ HC",
    status: "In transit",
    arrival: "Oct 14 · 07:00",
    progress: 36,
    vessel: "Westward Current",
  },
];

export const modes = ["All modes", "Ocean", "Air", "Road"];

export const portFor = (name: string) =>
  ports.find((port) => port.name === name) ?? ports[0];

export const pathFor = (shipment: Shipment) => {
  const a = portFor(shipment.origin);
  const b = portFor(shipment.destination);
  return `M${a.x} ${a.y}Q${(a.x + b.x) / 2} ${Math.min(a.y, b.y) - 75} ${b.x} ${b.y}`;
};
