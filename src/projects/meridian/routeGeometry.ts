import { portFor } from "./data";
import type { Shipment } from "./data";
const width = 1000;
export function endpointLabelOffset(shipment: Shipment, name: string) {
  const start = portFor(shipment.origin);
  const end = portFor(shipment.destination);
  const nearby = Math.hypot(start.x - end.x, start.y - end.y) < 70;
  if (!nearby) return { x: 0, y: 23 };
  return name === shipment.origin ? { x: -20, y: -20 } : { x: 20, y: 30 };
}
export function routeGeometryFor(shipment: Shipment) {
  const start = portFor(shipment.origin);
  const end = portFor(shipment.destination);
  let targetX = end.x;
  if (targetX - start.x > width / 2) targetX -= width;
  if (start.x - targetX > width / 2) targetX += width;
  const bend =
    Math.min(start.y, end.y) -
    Math.min(105, Math.abs(start.x - targetX) * 0.2 + 15);
  const curve = (offset: number) =>
    `M${start.x + offset},${start.y}Q${(start.x + targetX) / 2 + offset},${bend} ${targetX + offset},${end.y}`;
  const t = shipment.progress / 100;
  const inverse = 1 - t;
  const rawX =
    inverse * inverse * start.x +
    2 * inverse * t * ((start.x + targetX) / 2) +
    t * t * targetX;
  const y =
    inverse * inverse * start.y + 2 * inverse * t * bend + t * t * end.y;
  return {
    path: `${curve(0)} ${curve(width)} ${curve(-width)}`,
    x: ((rawX % width) + width) % width,
    y,
  };
}
