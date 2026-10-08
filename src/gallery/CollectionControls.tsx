import { Search, X } from "lucide-react";
const groups = [
  "All projects",
  "Landing pages",
  "Dashboards",
  "Shops",
  "Editorial",
];
export function CollectionControls({
  group,
  query,
  setGroup,
  setQuery,
}: {
  group: string;
  query: string;
  setGroup: (value: string) => void;
  setQuery: (value: string) => void;
}) {
  return (
    <div className="collection-tools">
      <div
        className="collection-filters"
        role="group"
        aria-label="Filter projects"
      >
        {groups.map((item) => (
          <button
            key={item}
            className={group === item ? "is-active" : ""}
            aria-pressed={group === item}
            onClick={() => setGroup(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <label className="collection-search">
        <Search size={17} />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Find a project"
          aria-label="Find a project"
        />
        {query && (
          <button onClick={() => setQuery("")} aria-label="Clear search">
            <X size={14} />
          </button>
        )}
      </label>
    </div>
  );
}
