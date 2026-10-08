import {
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  GitBranch,
  Search,
} from "lucide-react";
import type { Release } from "./releaseData";
import { ReleaseDetail } from "./ReleaseDetail";
export function ReleaseTable({
  releases,
  selected,
  onSelect,
  query,
  onQuery,
}: {
  releases: Release[];
  selected: string | null;
  onSelect: (id: string | null) => void;
  query: string;
  onQuery: (query: string) => void;
}) {
  return (
    <section className="hc-releases" aria-label="Deployment releases">
      <header>
        <div>
          <h2>Recent deployments</h2>
          <span>Every commit has a clear path to release.</span>
        </div>
        <label>
          <Search size={14} />
          <input
            aria-label="Search deployments"
            placeholder="Find a deployment…"
            value={query}
            onChange={(e) => onQuery(e.target.value)}
          />
        </label>
      </header>
      <div className="hc-table-wrap">
        <table>
          <thead>
            <tr>
              <th>Deployment</th>
              <th>Status</th>
              <th>Environment</th>
              <th>Build time</th>
              <th>Created</th>
              <th>
                <span className="sr-only">Details</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {releases.map((release) => (
              <ReleaseRow
                key={release.id}
                release={release}
                selected={selected === release.id}
                onSelect={() =>
                  onSelect(selected === release.id ? null : release.id)
                }
              />
            ))}
          </tbody>
        </table>
        {releases.length === 0 && (
          <div className="hc-empty">
            <Search size={22} />
            <h3>No deployments found</h3>
            <p>Try a commit, branch or deployment ID.</p>
            <button onClick={() => onQuery("")}>Clear search</button>
          </div>
        )}
      </div>
      <footer>
        <span>{releases.length} deployments in this environment</span>
        <span>
          <i />
          Build activity is up to date
        </span>
      </footer>
    </section>
  );
}
function ReleaseRow({
  release,
  selected,
  onSelect,
}: {
  release: Release;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <>
      <tr className={selected ? "is-selected" : ""}>
        <td>
          <button
            className="hc-release-select"
            onClick={onSelect}
            aria-expanded={selected}
          >
            <strong>
              {release.commit}
              <ArrowUpRight size={11} />
            </strong>
            <span>
              <GitBranch size={11} />
              {release.branch}
              <b>·</b>
              <code>{release.sha}</code>
            </span>
          </button>
        </td>
        <td>
          <span className={`hc-release-status ${release.status.toLowerCase()}`}>
            <i />
            {release.status}
          </span>
        </td>
        <td>
          <span className="hc-env-tag">{release.environment}</span>
        </td>
        <td>{release.duration.toFixed(1)}s</td>
        <td>{release.time}</td>
        <td>
          <button
            className="hc-row-toggle"
            aria-label={`${selected ? "Close" : "Inspect"} deployment ${release.id}`}
            onClick={onSelect}
          >
            {selected ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
          </button>
        </td>
      </tr>
      {selected && (
        <tr>
          <td colSpan={6}>
            <ReleaseDetail release={release} />
          </td>
        </tr>
      )}
    </>
  );
}
