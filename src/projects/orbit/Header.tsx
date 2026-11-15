import { Search, Plus, CalendarDays } from "lucide-react";
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
          Maison studio <i>/</i>
          <b>
            {view === "overview"
              ? "Overview"
              : view === "tasks"
                ? "My tasks"
                : "Activity"}
          </b>
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
          <p className="ov3-caps">Thursday, 8 October</p>
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
            <CalendarDays size={16} aria-hidden="true" />
            5–11 Oct 2026
          </span>
          <button className="ov3-add" onClick={onAdd} aria-label="New task">
            <Plus size={18} aria-hidden="true" />
            New task
          </button>
        </div>
      </section>
    </>
  );
}
