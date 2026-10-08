import {
  LayoutDashboard,
  CalendarDays,
  Users,
  FileText,
  MessageSquare,
  Settings,
  HelpCircle,
} from "lucide-react";
import { BrandLogo } from "../../../shared/BrandLogo";
import { brand } from "../brand";

export function Sidebar() {
  const links = [
    {
      icon: LayoutDashboard,
      name: "Overview",
      href: "#overview",
      active: true,
    },
    { icon: CalendarDays, name: "Appointments", href: "#appointments" },
    { icon: Users, name: "Patients", href: "#patient" },
    { icon: FileText, name: "Practice reports", href: "#activity" },
    { icon: MessageSquare, name: "Care team", href: "#team" },
  ];
  return (
    <aside className="pulse-sidebar">
      <a href="#overview" aria-label="Pulse home">
        <BrandLogo brand={brand} symbolOnly />
      </a>
      <nav aria-label="Practice navigation">
        {links.map(({ icon: Icon, name, href, active }) => (
          <a
            key={name}
            href={href}
            className={active ? "is-active" : ""}
            aria-label={name}
            title={name}
          >
            <Icon size={21} />
          </a>
        ))}
      </nav>
      <div className="pulse-sidebar-bottom">
        <a href="#team" aria-label="Help">
          <HelpCircle size={20} />
        </a>
        <a href="#overview" aria-label="Settings">
          <Settings size={20} />
        </a>
        <span>SC</span>
      </div>
    </aside>
  );
}
