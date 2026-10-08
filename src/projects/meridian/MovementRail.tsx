import { Search, SlidersHorizontal } from "lucide-react";
import { modes } from "./data";
import { MovementCard } from "./MovementCard";
import type { Shipment } from "./data";
export function MovementRail({
  shipments,
  selected,
  onSelect,
  query,
  onQuery,
  mode,
  onMode,
}: {
  shipments: Shipment[];
  selected: string;
  onSelect: (id: string) => void;
  query: string;
  onQuery: (value: string) => void;
  mode: string;
  onMode: (value: string) => void;
}) {
  return (
    <aside className="md-movement-rail">
      <header>
        <div>
          <h1>Shipments</h1>
          <span>{shipments.length}</span>
        </div>
        <p>Every movement. In view.</p>
      </header>
      <div className="md-rail-controls">
        <label>
          <Search size={15} />
          <input
            aria-label="Find a movement"
            type="search"
            value={query}
            onChange={(event) => onQuery(event.target.value)}
            placeholder="Search loads or ports"
          />
        </label>
        <label className="md-rail-mode">
          <SlidersHorizontal size={13} />
          <select
            aria-label="Filter movement transport"
            value={mode}
            onChange={(event) => onMode(event.target.value)}
          >
            {modes.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="md-movement-list" aria-label="Movements">
        {shipments.map((item) => (
          <MovementCard
            key={item.id}
            shipment={item}
            selected={item.id === selected}
            onSelect={onSelect}
          />
        ))}
        {shipments.length === 0 && (
          <p className="md-rail-empty">
            No movements match. Try a different port or reference.
          </p>
        )}
      </div>
      <footer>
        <i />
        {shipments.length} movements in view<span>MRD / Operations</span>
      </footer>
    </aside>
  );
}
