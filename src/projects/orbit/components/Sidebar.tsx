import {
  LayoutGrid,
  FolderOpen,
  CheckSquare,
  CalendarDays,
  MessageSquare,
  BarChart3,
  Settings,
  HelpCircle,
  Plus,
  ChevronDown,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { BrandLogo } from "../../../shared/BrandLogo";
import { brand } from "../brand";
import { Avatar } from "./Avatar";
import { projects } from "../data";

export function Sidebar() {
  const links = [
    { icon: LayoutGrid, label: "Overview", href: "#overview", active: true },
    { icon: FolderOpen, label: "Projects", href: "#projects", badge: "8" },
    { icon: CheckSquare, label: "My tasks", href: "#tasks", badge: "12" },
    { icon: CalendarDays, label: "Calendar", href: "#schedule" },
    { icon: MessageSquare, label: "Messages", href: "#activity", badge: "3" },
    { icon: BarChart3, label: "Reports", href: "#progress" },
  ];
  return (
    <aside className="orbit-sidebar">
      <a href="#overview" aria-label="Orbit home">
        <BrandLogo brand={brand} />
      </a>
      <button className="orbit-workspace-switch">
        <span>LS</span>
        <div>
          Luma Studio<small>Pro workspace</small>
        </div>
        <ChevronDown size={14} />
      </button>
      <span className="orbit-sidebar-label">Workspace</span>
      <nav aria-label="Workspace navigation">
        {links.map(({ icon: Icon, label, href, active, badge }) => (
          <a key={label} href={href} className={active ? "is-active" : ""}>
            <Icon size={18} />
            <span>{label}</span>
            {badge && <small>{badge}</small>}
          </a>
        ))}
      </nav>
      <div className="orbit-sidebar-projects">
        <span className="orbit-sidebar-label">
          Your projects <Plus size={13} />
        </span>
        {projects.map((i) => (
          <a key={i.name} href="#projects">
            <i style={{ background: i.ink }} />
            {i.name}
          </a>
        ))}
      </div>
      <div className="orbit-upgrade">
        <span>
          <Sparkles size={19} />
        </span>
        <h3>
          A little more room
          <br />
          for your big ideas.
        </h3>
        <p>
          Bring every project together
          <br />
          with Orbit Pro.
        </p>
        <a href="#projects">
          Explore your workspace <ArrowUpRight size={13} />
        </a>
      </div>
      <div className="orbit-sidebar-bottom">
        <a href="#activity">
          <HelpCircle size={17} />
          Help & resources
        </a>
        <a href="#overview">
          <Settings size={17} />
          Workspace settings
        </a>
        <div>
          <Avatar id={1} />
          <p>
            Alex Morgan<small>alex@lumastudio.example</small>
          </p>
          <ChevronDown size={13} />
        </div>
      </div>
    </aside>
  );
}
