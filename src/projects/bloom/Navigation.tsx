import { useState } from "react";
import {
  ArrowUpRight,
  Bell,
  Search,
  LayoutGrid,
  BookOpen,
  CalendarDays,
  Compass,
  Settings,
  CircleHelp,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";

export function Sidebar() {
  return (
    <aside className="bloom-sidebar">
      <a href="#bloom-top">
        <BrandLogo brand={brand} />
      </a>
      <div className="bloom-workspace">
        <div className="bloom-workspace-icon">✳</div>
        <span>
          My learning space<small>Personal account</small>
        </span>
        <ChevronRight size={14} />
      </div>
      <nav aria-label="Learning navigation">
        {[
          { label: "Overview", icon: LayoutGrid, href: "#bloom-top" },
          { label: "My courses", icon: BookOpen, href: "#bloom-courses" },
          { label: "Learning path", icon: Compass, href: "#bloom-path" },
          { label: "Calendar", icon: CalendarDays, href: "#bloom-calendar" },
        ].map((item, i) => (
          <a
            className={i === 0 ? "active" : ""}
            key={item.label}
            href={item.href}
          >
            <item.icon size={18} />
            {item.label}
            {item.label === "My courses" && <span>3</span>}
          </a>
        ))}
      </nav>
      <div className="bloom-sidebar-prompt">
        <Sparkles size={22} />
        <h3>
          A little help to
          <br />
          go a little further.
        </h3>
        <p>Try a guided learning path made for your goals.</p>
        <a href="#bloom-path">
          Find your path <ArrowUpRight size={13} />
        </a>
      </div>
      <div className="bloom-sidebar-bottom">
        <a href="#bloom-path">
          <CircleHelp size={17} />
          Learning support
        </a>
        <a href="#bloom-profile">
          <Settings size={17} />
          Your learning goals
        </a>
        <div className="bloom-profile" id="bloom-profile">
          <span className="bloom-avatar">M</span>
          <div>
            Maya Williams<small>Curious, always.</small>
          </div>
          <ChevronRight size={14} />
        </div>
      </div>
    </aside>
  );
}

export function Topbar({
  query,
  onSearch,
}: {
  query: string;
  onSearch: (q: string) => void;
}) {
  const [notifications, setNotifications] = useState(false);
  return (
    <header className="bloom-topbar">
      <span>Your learning overview</span>
      <label className="bloom-search">
        <Search size={15} />
        <input
          placeholder="Search your courses"
          aria-label="Search your courses"
          value={query}
          onChange={(e) => onSearch(e.target.value)}
        />
        <span>⌘ K</span>
      </label>
      <button
        className="bloom-bell"
        aria-label="View notifications"
        aria-expanded={notifications}
        onClick={() => setNotifications(!notifications)}
      >
        <Bell size={18} />
        <i />
      </button>
      <span className="bloom-avatar small">M</span>
      {notifications && (
        <div className="bloom-notification" role="status">
          <b>You’re right on track.</b>
          <p>Your next live workshop is today at 4:00 PM.</p>
          <a href="#bloom-calendar" onClick={() => setNotifications(false)}>
            View your schedule
          </a>
        </div>
      )}
    </header>
  );
}
