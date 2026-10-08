import { useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import { clinicians, timeLabel, type Visit } from "./data";
import { PatientPortrait } from "./overviewData";

export function AppointmentLedger({
  visits,
  onSelect,
}: {
  visits: Visit[];
  onSelect: (id: number) => void;
}) {
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(false);
  const results = visits.filter((v) =>
    `${v.patient} ${v.purpose}`.toLowerCase().includes(query.toLowerCase()),
  );
  const shown = expanded ? results : results.slice(0, 5);
  return (
    <article className="pv-ledger pv-white-card">
      <div className="pv-card-title">
        <h2>
          Appointment ledger <span>{visits.length}</span>
        </h2>
        <label>
          <Search size={14} />
          <input
            placeholder="Find a visit"
            aria-label="Search appointment ledger"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </div>
      <div className="pv-ledger-scroll">
        <table>
          <thead>
            <tr>
              <th>Patient</th>
              <th>Clinician</th>
              <th>Time</th>
              <th>Status</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {shown.map((v) => (
              <tr key={v.id}>
                <td>
                  <button
                    className="pv-ledger-person"
                    onClick={() => onSelect(v.id)}
                  >
                    <PatientPortrait visit={v} />
                    <span>
                      <strong>{v.patient}</strong>
                      <small>{v.purpose}</small>
                    </span>
                  </button>
                </td>
                <td>{clinicians.find((c) => c.id === v.doctor)?.name}</td>
                <td>
                  {timeLabel(v.time)}
                  <small>{v.duration} min</small>
                </td>
                <td>
                  <span
                    className={`pv-ledger-status ${v.status === "Checked in" || v.status === "Ready" ? "is-ready" : ""}`}
                  >
                    <i />
                    {v.status}
                  </span>
                </td>
                <td>
                  <button
                    className="pv-ledger-open"
                    aria-label={`Open visit for ${v.patient}`}
                    onClick={() => onSelect(v.id)}
                  >
                    <ArrowUpRight size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {!shown.length && (
        <p className="pv-overview-empty">
          {visits.length
            ? `No visits match “${query}”.`
            : "This day has no appointments yet."}
        </p>
      )}
      {results.length > 5 && (
        <button
          className="pv-ledger-more"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded
            ? "Show fewer appointments"
            : `View all ${results.length} appointments`}
          <ArrowUpRight size={13} />
        </button>
      )}
    </article>
  );
}
