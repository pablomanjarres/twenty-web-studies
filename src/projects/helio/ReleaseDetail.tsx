import { CircleCheck, CircleX, Globe2, PackageCheck } from "lucide-react";
import type { Release } from "./releaseData";
export function ReleaseDetail({ release }: { release: Release }) {
  const ready = release.status === "Ready";
  return (
    <div className="hc-release-detail">
      <div>
        <span>DEPLOYMENT ID</span>
        <strong>{release.id}</strong>
        <small>
          {release.sha} / {release.branch}
        </small>
      </div>
      <div>
        <span>ARTIFACT</span>
        <strong>
          <PackageCheck size={15} />
          Edge bundle · 84.2 kB
        </strong>
        <small>Native TypeScript / runtime 3.2</small>
      </div>
      <div>
        <span>DELIVERY</span>
        <strong>
          <Globe2 size={15} />
          {ready ? "35 regions available" : "Release held"}
        </strong>
        <small>
          {ready
            ? "Health checks complete"
            : "API_REGION configuration missing"}
        </small>
      </div>
      <p>
        {ready ? <CircleCheck size={17} /> : <CircleX size={17} />}
        <span>
          {ready
            ? `${release.environment.toLowerCase()}-hello-world.helio.example/hello`
            : "Correct the region configuration before the next build."}
        </span>
      </p>
    </div>
  );
}
