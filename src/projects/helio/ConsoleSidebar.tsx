import {
  Box,
  ChevronsUpDown,
  Code2,
  Layers3,
  PanelLeft,
  Terminal,
  Zap,
} from "lucide-react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
import { ConsoleNavigation, type ConsoleView } from "./ConsoleNavigation";
export function ConsoleSidebar({
  view,
  onView,
  releaseCount,
}: {
  releaseCount: number;
  view: ConsoleView;
  onView: (view: ConsoleView) => void;
}) {
  return (
    <aside className="hc-sidebar">
      <a className="hc-logo" href="#helio-top" aria-label="Helio home">
        <BrandLogo brand={brand} />
        <PanelLeft size={16} />
      </a>
      <div className="hc-team">
        <span>N</span>
        <div>
          <strong>Northstar studio</strong>
          <small>Personal workspace</small>
        </div>
        <ChevronsUpDown size={14} />
      </div>
      <div className="hc-project-label">
        PROJECT <span>01</span>
      </div>
      <div className="hc-project">
        <Box size={17} />
        <strong>hello-world</strong>
        <ChevronsUpDown size={13} />
      </div>
      <ConsoleNavigation
        view={view}
        onView={onView}
        releaseCount={releaseCount}
        variant="sidebar"
      />
      <div className="hc-resource-label">BUILD SOMETHING</div>
      <a className="hc-resource" href="#helio-recipes">
        <Code2 size={17} />
        Code recipes
      </a>
      <a className="hc-resource" href="#helio-pricing">
        <Layers3 size={17} />
        Usage & limits
      </a>
      <div className="hc-sidebar-bottom">
        <div className="hc-plan">
          <Zap size={15} />
          <strong>Developer plan</strong>
          <span>$0 / month</span>
          <i>
            <b />
          </i>
          <small>8.5 GB of 100 GB bandwidth</small>
        </div>
        <div className="hc-profile">
          <span>NS</span>
          <strong>Northstar studio</strong>
          <Terminal size={16} />
        </div>
      </div>
    </aside>
  );
}
