import { X } from "lucide-react";
import { useDialog } from "../../shared/useDialog";
import { BuildTrace } from "./BuildTrace";
import type { Deployment } from "./useDeployment";
export function DeploymentDialog({
  deployment,
  onClose,
}: {
  deployment: Deployment;
  onClose: () => void;
}) {
  const ref = useDialog<HTMLDivElement>(onClose);
  return (
    <div className="hc-dialog-backdrop" onClick={onClose}>
      <div
        className="hc-deploy-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="hc-deploy-title"
        tabIndex={-1}
        ref={ref}
        onClick={(event) => event.stopPropagation()}
      >
        <header>
          <div>
            <span>hello-world</span>
            <h2 id="hc-deploy-title">Prepare a deployment</h2>
          </div>
          <button aria-label="Close deployment" onClick={onClose}>
            <X size={18} />
          </button>
        </header>
        <div className="hc-deploy-config">
          <label>
            Environment
            <select
              value={deployment.environment}
              aria-label="Build environment"
              disabled={deployment.running}
              onChange={(e) => deployment.changeEnvironment(e.target.value)}
            >
              <option>Production</option>
              <option>Preview</option>
            </select>
          </label>
          <label>
            Branch
            <select
              value={deployment.branch}
              aria-label="Build branch"
              disabled={deployment.running}
              onChange={(e) => deployment.changeBranch(e.target.value)}
            >
              <option>release/v1.4</option>
              <option>feature/checkout</option>
            </select>
          </label>
        </div>
        <BuildTrace deployment={deployment} />
      </div>
    </div>
  );
}
