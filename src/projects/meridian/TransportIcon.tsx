import { Plane, Ship, Truck } from "lucide-react";
import type { Shipment } from "./data";
export function TransportIcon({
  mode,
  size = 15,
  color,
}: {
  mode: Shipment["mode"];
  size?: number;
  color?: string;
}) {
  const Icon = mode === "Ocean" ? Ship : mode === "Air" ? Plane : Truck;
  return <Icon size={size} color={color} />;
}
