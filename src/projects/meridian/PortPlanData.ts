import type { Shipment } from "./data";

export const portPlans = {
  "Los Angeles": {
    file: "port-pacific.svg",
    water: "Pacific approach",
    terminal: "Container terminal",
    route: "M110 480 250 465 360 390 495 390 605 330",
    marker: [605, 330],
  },
  Newark: {
    file: "port-harbour.svg",
    water: "Harbour approach",
    terminal: "Freight interchange",
    route: "M880 545 755 460 690 410 535 410 435 330",
    marker: [435, 330],
  },
  Rotterdam: {
    file: "port-estuary.svg",
    water: "Estuary approach",
    terminal: "Intermodal terminal",
    route: "M80 385 250 385 380 335 515 335 640 305",
    marker: [640, 305],
  },
  Hamburg: {
    file: "port-estuary.svg",
    water: "River approach",
    terminal: "Container interchange",
    route: "M80 385 250 385 380 335 515 335 640 305",
    marker: [640, 305],
  },
  Singapore: {
    file: "port-pacific.svg",
    water: "Strait approach",
    terminal: "Maritime transfer",
    route: "M110 480 250 465 360 390 495 390 605 330",
    marker: [605, 330],
  },
  Shanghai: {
    file: "port-harbour.svg",
    water: "River approach",
    terminal: "Outbound terminal",
    route: "M880 545 755 460 690 410 535 410 435 330",
    marker: [435, 330],
  },
} as const;

export function planFor(shipment: Shipment) {
  const port = portPlans[shipment.destination as keyof typeof portPlans];
  if (shipment.mode === "Road")
    return {
      ...port,
      route: "M960 100 890 135 850 180 775 180 700 220",
      marker: [700, 220],
    };
  if (shipment.mode === "Air")
    return { ...port, route: "M915 75Q805 95 700 180", marker: [700, 180] };
  return port;
}

export const planningPoints = [
  {
    id: "berth",
    label: "Berth allocation",
    note: "Review the planned berth handoff before the arrival window.",
  },
  {
    id: "gate",
    label: "Freight gate",
    note: "Coordinate onward collection after the carrier handoff.",
  },
  {
    id: "rail",
    label: "Rail transfer",
    note: "Prepare the interchange for the next planned movement.",
  },
] as const;

export function planningPointsFor(shipment: Shipment) {
  if (shipment.mode === "Ocean") return planningPoints;
  const first =
    shipment.mode === "Road"
      ? {
          id: "berth",
          label: "Collection bay",
          note: "Review the planned carrier handoff before onward collection.",
        }
      : {
          id: "berth",
          label: "Cargo transfer",
          note: "Coordinate the planned air cargo handoff and customs review.",
        };
  return [first, ...planningPoints.slice(1)];
}

export function handoffLabelFor(shipment: Shipment) {
  if (shipment.status === "Delivered") return "Destination handoff schematic";
  return shipment.mode === "Ocean"
    ? "Planned inbound handoff"
    : shipment.mode === "Road"
      ? "Planned onward collection"
      : "Planned cargo transfer";
}

export function handoffFor(shipment: Shipment) {
  if (shipment.status === "At customs")
    return {
      title: "Clearance review",
      detail:
        "Customs clearance remains open. Review before onward collection.",
      tone: "attention",
    };
  if (shipment.status === "Scheduled")
    return {
      title: "Carrier assignment",
      detail: "This movement is scheduled. A carrier has yet to be assigned.",
      tone: "attention",
    };
  if (shipment.status === "Delivered")
    return {
      title: "Handoff recorded",
      detail: "The selected movement has reached its recorded destination.",
      tone: "complete",
    };
  return {
    title: "Inbound handoff plan",
    detail:
      "Arrival window is planned. Berth and collection are preparation steps.",
    tone: "planned",
  };
}
