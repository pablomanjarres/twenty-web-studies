import { useState } from "react";
import { X, Plus } from "lucide-react";
import { useDialog } from "../../shared/useDialog";
import { clinicians, days, timeLabel, type Visit } from "./data";
function availableTimes(appointments: Visit[], day: number, doctor: string) {
  return [900, 930, 960].filter(
    (time) =>
      !appointments.some(
        (v) =>
          v.day === day &&
          v.doctor === doctor &&
          time < v.time + v.duration &&
          time + 45 > v.time,
      ),
  );
}
export function NewVisit({
  day,
  id,
  appointments,
  onClose,
  onAdd,
}: {
  day: number;
  id: number;
  appointments: Visit[];
  onClose: () => void;
  onAdd: (visit: Visit) => void;
}) {
  const ref = useDialog<HTMLDivElement>(onClose);
  const [name, setName] = useState("");
  const [doctor, setDoctor] = useState("allen");
  const [selectedDay, setSelectedDay] = useState(day);
  const [time, setTime] = useState(
    () => availableTimes(appointments, day, "allen")[0] ?? -1,
  );
  const slots = availableTimes(appointments, selectedDay, doctor);
  function clinicianChange(value: string) {
    setDoctor(value);
    setTime(availableTimes(appointments, selectedDay, value)[0] ?? -1);
  }
  function dayChange(value: number) {
    setSelectedDay(value);
    setTime(availableTimes(appointments, value, doctor)[0] ?? -1);
  }
  function submit(event: React.FormEvent) {
    event.preventDefault();
    if (!name.trim() || !slots.includes(time)) return;
    onAdd({
      id,
      patient: name.trim(),
      age: 32,
      initials: name
        .trim()
        .split(" ")
        .slice(0, 2)
        .map((n) => n[0])
        .join("")
        .toUpperCase(),
      purpose: "New consultation",
      doctor,
      time,
      duration: 45,
      day: selectedDay,
      tone: "peach",
      status: "Confirmed",
      note: "A new consultation. Begin with the patient's priorities.",
    });
  }
  return (
    <div className="pv-overlay" onClick={onClose}>
      <div
        className="pv-new-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pv-new-title"
        ref={ref}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="pv-close"
          onClick={onClose}
          aria-label="Close new visit"
        >
          <X size={20} />
        </button>
        <span>WESTSIDE PRACTICE</span>
        <h2 id="pv-new-title">Make room for a visit.</h2>
        <form onSubmit={submit}>
          <label>
            Patient name
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Full name"
            />
          </label>
          <label>
            Clinician
            <select
              value={doctor}
              onChange={(e) => clinicianChange(e.target.value)}
            >
              {clinicians.map((c) => (
                <option value={c.id} key={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </label>
          <div>
            <label>
              Day
              <select
                value={selectedDay}
                onChange={(e) => dayChange(Number(e.target.value))}
              >
                {days.map((d, i) => (
                  <option key={d.short} value={i}>
                    {d.short}, {d.date} October
                  </option>
                ))}
              </select>
            </label>
            <label>
              Time
              <select
                value={time}
                onChange={(e) => setTime(Number(e.target.value))}
              >
                {slots.map((time) => (
                  <option key={time} value={time}>
                    {timeLabel(time)}
                  </option>
                ))}
                {!slots.length && (
                  <option value={-1}>No afternoon slots</option>
                )}
              </select>
            </label>
          </div>
          {!slots.length && (
            <p role="status">
              Choose another day or clinician for an available time.
            </p>
          )}
          <button className="pv-new" type="submit" disabled={!slots.length}>
            <Plus size={16} />
            Add 45-minute visit
          </button>
        </form>
      </div>
    </div>
  );
}
