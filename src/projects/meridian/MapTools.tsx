import { Minus, Plus, LocateFixed } from "lucide-react";

export function MapTools({
  zoom,
  onZoom,
}: {
  zoom: number;
  onZoom: (zoom: number) => void;
}) {
  return (
    <div className="md-map-tools" aria-label="Map zoom">
      <button
        aria-label="Zoom in"
        disabled={zoom > 1}
        onClick={() => onZoom(1.35)}
      >
        <Plus size={17} />
      </button>
      <button
        aria-label="Zoom out"
        disabled={zoom === 1}
        onClick={() => onZoom(1)}
      >
        <Minus size={17} />
      </button>
      <button aria-label="Reset map view" onClick={() => onZoom(1)}>
        <LocateFixed size={17} />
      </button>
    </div>
  );
}
