import {
  Globe2,
  Image,
  List,
  MapPinned,
  Plus,
  ChevronDown,
} from "lucide-react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
import type { NetworkView } from "./data";
const views = [
  { id: "port", name: "Port operations", icon: MapPinned },
  { id: "network", name: "Global network", icon: Globe2 },
  { id: "manifest", name: "Shipment manifest", icon: List },
  { id: "study", name: "Port study", icon: Image },
] as const;
export function CommandBar({
  view,
  onSchedule,
}: {
  view: NetworkView;
  onSchedule: () => void;
}) {
  return (
    <header className="md-command-bar">
      <a href="#md-workspace" aria-label="Meridian control tower">
        <BrandLogo brand={brand} />
      </a>
      <span className="md-workspace-name">
        Operations <ChevronDown size={13} />
      </span>
      <span className="md-command-title">
        / {views.find((item) => item.id === view)?.name}
      </span>
      <span className="md-command-date">
        <i /> 08 Oct 2026
      </span>
      <button className="md-new-movement" onClick={onSchedule}>
        <Plus size={16} />
        <span>New shipment</span>
      </button>
    </header>
  );
}
export function SideNavigation({
  view,
  onView,
}: {
  view: NetworkView;
  onView: (value: NetworkView) => void;
}) {
  return (
    <nav className="md-side-navigation" aria-label="Control tower views">
      <div>
        {views.map(({ id, name, icon: Icon }) => (
          <button
            key={id}
            aria-pressed={view === id}
            aria-label={name}
            title={name}
            onClick={() => onView(id)}
          >
            <Icon size={20} />
            <span>{name}</span>
          </button>
        ))}
      </div>
      <span className="md-operator" aria-label="Operations workspace">
        MR
      </span>
    </nav>
  );
}
