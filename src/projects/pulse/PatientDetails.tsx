import { useState } from "react";
import { Clock, FileText, Check, X, ArrowUpRight } from "lucide-react";
import { useDialog } from "../../shared/useDialog";
import { asset, clinicians, timeLabel, type Visit } from "./data";
export function PatientDetails({
  visit,
  note,
  onNote,
}: {
  visit: Visit;
  note: string;
  onNote: (value: string) => void;
}) {
  const [saved, setSaved] = useState(false);
  return (
    <div className="pv-patient-sheet">
      <div className="pv-paper-heading">
        <span>VISIT DETAILS</span>
        <ArrowUpRight size={14} />
      </div>
      <div className="pv-person">
        {visit.id === 1 ? (
          <img src={asset("patient.jpg")} alt={visit.patient} />
        ) : (
          <i>{visit.initials}</i>
        )}
        <span>{visit.status}</span>
      </div>
      <h2>{visit.patient}</h2>
      <p>
        {visit.age} years · P{String(visit.id).padStart(4, "0")}
      </p>
      <div className="pv-paper-rule" />
      <h3>{visit.purpose}</h3>
      <div className="pv-visit-facts">
        <span>
          <Clock size={13} />
          {timeLabel(visit.time)} · {visit.duration} minutes
        </span>
        <span>{clinicians.find((c) => c.id === visit.doctor)?.name}</span>
        <span>
          Consultation room{" "}
          {clinicians.findIndex((c) => c.id === visit.doctor) + 1}
        </span>
      </div>
      <dl>
        <div>
          <dt>Visit type</dt>
          <dd>
            {visit.purpose.includes("First") ? "New patient" : "In person"}
          </dd>
        </div>
        <div>
          <dt>Care team</dt>
          <dd>Westside practice</dd>
        </div>
        <div>
          <dt>Previous visit</dt>
          <dd>16 September</dd>
        </div>
      </dl>
      <label className="pv-note-label">
        <FileText size={13} />A note for the conversation
        <textarea
          value={note}
          onChange={(e) => {
            setSaved(false);
            onNote(e.target.value);
          }}
        />
      </label>
      <button className="pv-save-note" onClick={() => setSaved(true)}>
        {saved ? (
          <>
            <Check size={14} />
            Note saved
          </>
        ) : (
          "Save visit note"
        )}
      </button>
      <div className="pv-paper-foot">
        A little preparation.
        <br />
        More attention for the person.
      </div>
    </div>
  );
}
export function PatientSheet({
  visit,
  note,
  onNote,
  onClose,
}: {
  visit: Visit;
  note: string;
  onNote: (value: string) => void;
  onClose: () => void;
}) {
  const ref = useDialog<HTMLDivElement>(onClose);
  return (
    <div className="pv-overlay" onClick={onClose}>
      <div
        className="pv-mobile-sheet"
        role="dialog"
        aria-modal="true"
        aria-label="Patient visit details"
        ref={ref}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="pv-close"
          onClick={onClose}
          aria-label="Close patient details"
        >
          <X size={20} />
        </button>
        <PatientDetails
          key={visit.id}
          visit={visit}
          note={note}
          onNote={onNote}
        />
      </div>
    </div>
  );
}
