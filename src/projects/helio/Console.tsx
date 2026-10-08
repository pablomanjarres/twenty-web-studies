import { useState } from "react";
import { ConsoleSidebar } from "./ConsoleSidebar";
import type { ConsoleView } from "./ConsoleNavigation";
import { ConsoleHeader } from "./ConsoleHeader";
import { ConsoleMetrics } from "./ConsoleMetrics";
import { TrafficChart } from "./TrafficChart";
import { ReleaseTable } from "./ReleaseTable";
import { DeploymentDialog } from "./DeploymentDialog";
import { Topology } from "./Topology";
import { useDeployment } from "./useDeployment";
import { releasesFor } from "./releaseData";
import { trafficFor } from "./trafficData";
export function Console() {
  const deployment = useDeployment();
  const [view, setView] = useState<ConsoleView>("Overview");
  const [hours, setHours] = useState(24),
    [hour, setHour] = useState(16);
  const [query, setQuery] = useState(""),
    [selected, setSelected] = useState<string | null>(null),
    [open, setOpen] = useState(false);
  const points = trafficFor(hours);
  const releases = releasesFor(
    deployment.releases,
    deployment.environment,
    query,
  );
  return (
    <section className="helio-console" id="helio-build">
      <ConsoleSidebar
        view={view}
        onView={setView}
        releaseCount={deployment.releases.length}
      />
      <div className="hc-workspace">
        <ConsoleHeader
          view={view}
          onView={setView}
          deployment={deployment}
          onDeploy={() => setOpen(true)}
        />
        <div className="hc-content">
          {view === "Overview" && (
            <>
              <ConsoleMetrics points={points} />
              <TrafficChart
                points={points}
                hours={hours}
                onHours={(value) => {
                  setHours(value);
                  setHour(Math.min(hour, value - 1));
                }}
                selected={hour}
                onSelect={setHour}
              />
            </>
          )}
          {view !== "Regions" && (
            <ReleaseTable
              releases={releases}
              selected={selected}
              onSelect={setSelected}
              query={query}
              onQuery={setQuery}
            />
          )}{" "}
          {view === "Regions" && (
            <div className="hc-region-view">
              <div>
                <h2>A smaller distance to your users.</h2>
                <p>
                  Choose an edge location to inspect its latency and release
                  status.
                </p>
                <div className="hc-region-facts">
                  <strong>
                    35<span>available regions</span>
                  </strong>
                  <strong>
                    3<span>locations in focus</span>
                  </strong>
                </div>
              </div>
              <Topology ready={deployment.ready} />
            </div>
          )}
          <div className="hc-content-footer">
            <span>
              <i />
              All systems operational
            </span>
            <span>hello-world / developer sandbox</span>
          </div>
        </div>
      </div>
      {open && (
        <DeploymentDialog
          deployment={deployment}
          onClose={() => setOpen(false)}
        />
      )}
    </section>
  );
}
