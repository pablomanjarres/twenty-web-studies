import { Globe2 } from "lucide-react";
export function NetworkEmpty({ onReset }: { onReset: () => void }) {
  return (
    <section className="md-network-empty">
      <Globe2 size={42} />
      <h2>No movements in this view.</h2>
      <p>Try a different reference, port or transport mode.</p>
      <button onClick={onReset}>Reset the network view</button>
    </section>
  );
}
