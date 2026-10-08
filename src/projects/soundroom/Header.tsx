import { Search, Headphones } from "lucide-react";
import type { MusicView } from "./Navigation";
export function Header({
  view,
  onView,
  query,
  onQuery,
}: {
  view: MusicView;
  onView: (view: MusicView) => void;
  query: string;
  onQuery: (query: string) => void;
}) {
  return (
    <header className="sr3-header">
      <nav>
        {(
          [
            { id: "discover", label: "Discover" },
            { id: "collection", label: "Collection" },
            { id: "recent", label: "Recently played" },
          ] as const
        ).map(({ id, label }) => (
          <button
            key={id}
            onClick={() => onView(id)}
            aria-current={view === id ? "page" : undefined}
            aria-pressed={view === id}
          >
            {label}
          </button>
        ))}
      </nav>
      <label>
        <Search size={15} />
        <input
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          placeholder="Find your next sound"
          aria-label="Search tracks or artists"
        />
      </label>
      <span className="sr3-listener">
        <Headphones size={16} />
        <i>J</i>
      </span>
    </header>
  );
}
