import { Search, Bell } from "lucide-react";
import { clinicians, type Visit } from "./data";
import { PatientDetails } from "./PatientDetails";
export function PatientDirectory({
  appointments,
  query,
  onQuery,
  onSelect,
}: {
  appointments: Visit[];
  query: string;
  onQuery: (q: string) => void;
  onSelect: (id: number) => void;
}) {
  const results = appointments.filter((v) =>
    v.patient.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <section className="pv-patients">
      <label>
        <Search size={18} />
        <input
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          placeholder="Find a patient"
          aria-label="Search patients"
        />
      </label>
      <div className="pv-patient-labels">
        <span>PATIENT</span>
        <span>VISIT</span>
        <span>CLINICIAN</span>
      </div>
      {results.map((v) => (
        <button key={v.id} onClick={() => onSelect(v.id)}>
          <span>
            <i>{v.initials}</i>
            <strong>
              {v.patient}
              <small>
                {v.age} years · Patient P{String(v.id).padStart(4, "0")}
              </small>
            </strong>
          </span>
          <span>{v.purpose}</span>
          <span>{clinicians.find((c) => c.id === v.doctor)?.name}</span>
        </button>
      ))}
      {!results.length && (
        <p className="pv-directory-empty">
          No patients match “{query}”. Try a different name.
        </p>
      )}
    </section>
  );
}
export function PatientRecords({
  visit,
  note,
  onNote,
}: {
  visit: Visit;
  note: string;
  onNote: (note: string) => void;
}) {
  return (
    <section className="pv-records">
      <PatientDetails
        key={visit.id}
        visit={visit}
        note={note}
        onNote={onNote}
      />
      <div>
        <h2>Continuity of care</h2>
        <p>{visit.patient} · Westside practice</p>
        {[
          "Wellness plan reviewed",
          "Annual screening complete",
          "First consultation",
        ].map((t, i) => (
          <article key={t}>
            <span>0{i + 1}</span>
            <div>
              <h3>{t}</h3>
              <p>
                {["September 16, 2026", "June 08, 2026", "March 12, 2026"][i]}
              </p>
              <small>
                Westside practice ·{" "}
                {clinicians.find((c) => c.id === visit.doctor)?.name}
              </small>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function PracticeStatus() {
  return (
    <footer className="pv-footer">
      <span>
        <i />
        Practice calendar
      </span>
      <p>
        <Bell size={12} />
        Emma arrived 6 minutes ago · Reception has updated her visit
      </p>
      <span>Week 41</span>
    </footer>
  );
}
