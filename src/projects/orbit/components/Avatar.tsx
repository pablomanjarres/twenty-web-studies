import { asset } from "../data";

export function Avatar({
  id,
  className = "",
}: {
  id: number;
  className?: string;
}) {
  return (
    <img
      className={`orbit-avatar ${className}`}
      src={asset(id)}
      alt={["", "Alex Morgan", "James Lee", "Sofia Chen"][id]}
    />
  );
}
