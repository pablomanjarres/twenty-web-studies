import { Minus, Plus } from "lucide-react";
export function Quantity({
  value,
  onChange,
  min = 1,
  max = 8,
  label = "Bags",
}: {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  label?: string;
}) {
  return (
    <div className="cinder-quantity">
      <button
        aria-label={`One fewer ${label.toLowerCase()}`}
        disabled={value <= min}
        onClick={() => onChange(value - 1)}
      >
        <Minus size={14} />
      </button>
      <output aria-label={label}>{value}</output>
      <button
        aria-label={`One more ${label.toLowerCase()}`}
        disabled={value >= max}
        onClick={() => onChange(value + 1)}
      >
        <Plus size={14} />
      </button>
    </div>
  );
}
