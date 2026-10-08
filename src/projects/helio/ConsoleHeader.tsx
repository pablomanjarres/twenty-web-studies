import { Bell, ChevronDown, ChevronRight, Plus } from "lucide-react";
import type { Deployment } from "./useDeployment";
import { ConsoleNavigation, type ConsoleView } from "./ConsoleNavigation";
export function ConsoleHeader({
  view,
  onView,
  deployment,
  onDeploy,
}: {
  view: ConsoleView;
  onView: (view: ConsoleView) => void;
  deployment: Deployment;
  onDeploy: () => void;
}) {
  return (
    <>
      <header className="hc-topbar">
        <div>
          <span>Northstar studio</span>
          <ChevronRight size={13} />
          <strong>hello-world</strong>
          <span className="hc-sandbox">Sandbox</span>
        </div>
        <div>
          <a href="#helio-recipes">Documentation</a>
          <span className="hc-notice" aria-label="Workspace notifications">
            <Bell size={16} />
            <i />
          </span>
          <span className="hc-avatar">NS</span>
        </div>
      </header>
      <div className="hc-heading">
        <div>
          <div className="hc-breadcrumb">Projects / hello-world</div>
          <h1>{view}</h1>
          <p>Your application, from the first request to the next release.</p>
        </div>
        <button className="hc-primary" onClick={onDeploy}>
          <Plus size={16} />
          New deployment
        </button>
      </div>
      <div className="hc-toolbar">
        <ConsoleNavigation
          view={view}
          onView={onView}
          releaseCount={deployment.releases.length}
          variant="tabs"
        />
        <label>
          <span className="hc-env-dot" />
          Environment
          <select
            aria-label="Deployment environment"
            value={deployment.environment}
            onChange={(e) => deployment.changeEnvironment(e.target.value)}
          >
            <option>Production</option>
            <option>Preview</option>
          </select>
          <ChevronDown size={12} />
        </label>
      </div>
    </>
  );
}
