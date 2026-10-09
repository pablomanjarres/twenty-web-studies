import { Sun, Wind, BatteryCharging } from "lucide-react";
import { scenarios } from "./data";
const icons = [Sun, Wind, BatteryCharging];
export function SourceLegend({
  selected,
  onSelect,
}: {
  selected: number;
  onSelect: (index: number) => void;
}) {
  return (
    <nav className="vd-source-legend" aria-label="Energy source">
      {scenarios.map((scenario, index) => {
        const Icon = icons[index];
        return (
          <button
            key={scenario.name}
            aria-pressed={selected === index}
            onClick={() => onSelect(index)}
          >
            <Icon size={18} strokeWidth={1.4} />
            {scenario.name}
          </button>
        );
      })}
    </nav>
  );
}
