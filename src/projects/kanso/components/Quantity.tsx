import { Minus, Plus } from "lucide-react";
export function Quantity({
  quantity,
  onChange,
}: {
  quantity: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="kanso-quantity">
      <button
        aria-label="One fewer"
        disabled={quantity === 1}
        onClick={() => onChange(quantity - 1)}
      >
        <Minus size={15} />
      </button>
      <output aria-label="Quantity">{quantity}</output>
      <button
        aria-label="One more"
        disabled={quantity === 8}
        onClick={() => onChange(quantity + 1)}
      >
        <Plus size={15} />
      </button>
    </div>
  );
}
