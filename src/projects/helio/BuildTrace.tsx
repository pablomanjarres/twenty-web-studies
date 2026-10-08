import { Check, ChevronRight, LoaderCircle, Play, X } from "lucide-react";
import { deploymentEvents, type Deployment } from "./useDeployment";
export function BuildTrace({ deployment: d }: { deployment: Deployment }) {
  return (
    <section className="helio-build-trace">
      <div className="helio-panel-label">
        RELEASE / EVENT TRACE <span>BUILD #{d.buildNumber}</span>
      </div>
      <div className="helio-command">
        <span>❯</span>
        <code>helio deploy --env {d.environment.toLowerCase()}</code>
      </div>
      <header>
        <span className="helio-trace-tag">{d.environment.toUpperCase()}</span>
        <h3>Build trace</h3>
        <p>From one commit to 35 regions. Every step in view.</p>
      </header>
      <div className="helio-run-row">
        <button onClick={d.run} disabled={d.running}>
          <Play size={14} />
          {d.running
            ? "BUILD IN PROGRESS"
            : d.ready
              ? "RUN ANOTHER BUILD"
              : d.failed
                ? "RETRY BUILD"
                : "RUN DEPLOYMENT"}
          <ChevronRight size={16} />
        </button>
        <label>
          <input
            type="checkbox"
            checked={d.showFailure}
            onChange={(e) => d.setShowFailure(e.target.checked)}
            disabled={d.running}
          />
          Test a build error
        </label>
      </div>
      <div className="helio-events" aria-live="polite">
        {deploymentEvents.map((event, i) => {
          const complete = d.ready || d.phase > i + 1 || (d.failed && i < 2);
          const active = d.phase === i + 1;
          const failed = d.failed && i === 2;
          return (
            <div
              key={event.title}
              className={
                complete
                  ? "complete"
                  : failed
                    ? "failed"
                    : active
                      ? "running"
                      : "pending"
              }
            >
              <span className="helio-event-icon">
                {failed ? (
                  <X size={13} />
                ) : complete ? (
                  <Check size={13} />
                ) : active ? (
                  <LoaderCircle size={13} />
                ) : (
                  <span>{String(i + 1).padStart(2, "0")}</span>
                )}
              </span>
              <div>
                <b>{failed ? "Build failed" : event.title}</b>
                <small>
                  {failed
                    ? "Missing API_REGION configuration. Add the value and run again."
                    : event.detail}
                </small>
              </div>
              <time>{complete ? event.time : "—"}</time>
            </div>
          );
        })}
      </div>
      <div className="helio-endpoint" role="status">
        <span>{d.ready ? <Check size={12} /> : "↳"}</span>
        {d.ready
          ? `${d.environment.toLowerCase()}-hello-world.helio.example/hello`
          : d.failed
            ? "Correct the configuration and retry."
            : "Your endpoint will appear after a successful build."}
      </div>
    </section>
  );
}
