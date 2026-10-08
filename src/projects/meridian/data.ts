export const ports = [
  { name: "Los Angeles", code: "USLAX", longitude: -118.25, latitude: 33.74 },
  { name: "Newark", code: "USEWR", longitude: -74.14, latitude: 40.68 },
  { name: "Rotterdam", code: "NLRTM", longitude: 4.28, latitude: 51.95 },
  { name: "Hamburg", code: "DEHAM", longitude: 9.95, latitude: 53.54 },
  { name: "Singapore", code: "SGSIN", longitude: 103.75, latitude: 1.26 },
  { name: "Shanghai", code: "CNSHA", longitude: 121.5, latitude: 31.23 },
].map((port) => ({
  ...port,
  x: ((port.longitude + 180) / 360) * 1000,
  y: ((90 - port.latitude) / 180) * 600,
}));

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

export const filterShipments = (
  shipments: Shipment[],
  query: string,
  mode: string,
) =>
  shipments.filter(
    (item) =>
      (mode === "All modes" || item.mode === mode) &&
      `${item.id} ${item.origin} ${item.destination} ${item.status}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );

export type NetworkView = "network" | "port" | "manifest" | "study";

export const coordinatesFor = (port: (typeof ports)[number]) =>
  `${Math.abs(port.latitude).toFixed(2)}° ${port.latitude >= 0 ? "N" : "S"} / ${Math.abs(port.longitude).toFixed(2)}° ${port.longitude >= 0 ? "E" : "W"}`;
