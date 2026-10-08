import { Search, Plus, CalendarDays, ChevronDown } from "lucide-react";
import { AvatarGroup } from "./AvatarGroup";
import type { View } from "./Navigation";
export function Header({
  view,
  query,
  onQuery,
  onAdd,
}: {
  view: View;
  query: string;
  onQuery: (query: string) => void;
  onAdd: () => void;
}) {
  return (
    <>
      <header className="ov3-topbar">
        <span>
          Maison studio <i>/</i>{" "}
          {view === "overview"
            ? "Overview"
            : view === "tasks"
              ? "My tasks"
              : "Activity"}
        </span>
        <label>
          <Search size={16} />
          <input
            aria-label="Search tasks"
            placeholder="Search the workspace"
            value={query}
            onChange={(e) => onQuery(e.target.value)}
          />
        </label>
        <AvatarGroup className="ov3-avatars" />
      </header>
      <section className="ov3-page-heading">
        <div>
          <p>THURSDAY, 8 OCTOBER</p>
          <h1>
            {view === "overview"
              ? "Good work, coming together."
              : view === "tasks"
                ? "One useful step at a time."
                : "The latest from the studio."}
          </h1>
          <span>
            Maison storefront <i>·</i> Round 02
          </span>
        </div>
        <div>
          <span className="ov3-date">
            <CalendarDays size={15} />
            5–11 Oct 2026
            <ChevronDown size={12} />
          </span>
          <button className="ov3-add" onClick={onAdd}>
            <Plus size={17} />
            New task
          </button>
        </div>
      </section>
    </>
  );
}
