import { useState } from "react";
import { Search, Bell } from "lucide-react";
import { Avatar } from "./Avatar";

export function Topbar({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (v: string) => void;
}) {
  const [notifications, setNotifications] = useState(false);
  return (
    <header className="orbit-topbar">
      <div>
        Workspace <span>/</span>
        <strong>Overview</strong>
      </div>
      <label className="orbit-search">
        <Search size={15} />
        <input
          placeholder="Search your workspace"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search projects and tasks"
        />
        <kbd>⌘ K</kbd>
      </label>
      <div className="orbit-topbar-actions">
        <button
          className="orbit-bell"
          aria-label="Show notifications"
          onClick={() => setNotifications(!notifications)}
        >
          <Bell size={18} />
          <i />
        </button>
        <Avatar id={1} />
      </div>
      {notifications && (
        <div className="orbit-notifications">
          <strong>You’re all caught up.</strong>
          <p>Your team’s latest updates are in the activity feed.</p>
        </div>
      )}
    </header>
  );
}
