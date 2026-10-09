import { Check } from "lucide-react";
import { routes } from "./data";

export function JourneyChoices({
  selected,
  onSelect,
}: {
  selected: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="wf-route-tabs" aria-label="Choose a journey">
      {routes.map((route, index) => (
        <button
          key={route.id}
          aria-pressed={index === selected}
          onClick={() => onSelect(index)}
        >
          {index === selected && <Check size={14} />}
          {route.destination}
        </button>
      ))}
    </div>
  );
}
