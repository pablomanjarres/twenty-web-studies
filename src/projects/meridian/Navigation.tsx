import {
  Box,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  Globe2,
  LayoutDashboard,
  Plus,
} from "lucide-react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";

export function Sidebar() {
  return (
    <aside className="md-sidebar">
      <a
        href="#md-workspace"
        className="md-logo"
        aria-label="Meridian control tower"
      >
        <BrandLogo brand={brand} />
      </a>
      <span className="md-sidebar-label">Workspace</span>
      <nav aria-label="Workspace navigation">
        <a className="md-nav-active" href="#md-workspace">
          <LayoutDashboard size={17} />
          Control tower
        </a>
        <a href="#md-shipments">
          <Box size={17} />
          Shipments <span>05</span>
        </a>
        <a href="#md-map">
          <Globe2 size={17} />
          Route network
        </a>
        <a href="#md-arrival">
          <CalendarDays size={17} />
          Arrivals
        </a>
      </nav>
      <div className="md-side-divider" />
      <span className="md-sidebar-label">Your network</span>
      <div className="md-network-port">
        <span className="md-port-dot" />
        Pacific corridor<span>02</span>
      </div>
      <div className="md-network-port">
        <span className="md-port-dot blue" />
        Atlantic corridor<span>02</span>
      </div>
      <div className="md-network-port">
        <span className="md-port-dot green" />
        European routes<span>01</span>
      </div>
      <div className="md-sidebar-footer">
        <a href="#md-help">
          <CircleHelp size={16} />
          Workspace guide
        </a>
        <div className="md-user">
          <span>AC</span>
          <div>
            <strong>Alex Chen</strong>
            <small>Operations lead</small>
          </div>
          <ChevronDown size={14} />
        </div>
      </div>
    </aside>
  );
}

export function Header({ onSchedule }: { onSchedule: () => void }) {
  return (
    <header className="md-header">
      <div className="md-breadcrumb">
        Workspace <ChevronRight size={12} />
        <span>Control tower</span>
      </div>
      <div className="md-header-tools">
        <span>
          <i /> All systems operational
        </span>
        <button onClick={onSchedule}>
          <Plus size={16} />
          New shipment
        </button>
      </div>
    </header>
  );
}
