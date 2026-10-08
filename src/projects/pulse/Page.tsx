import type { CSSProperties } from "react";
import { useState } from "react";
import { ClinicalHeader, ScheduleControls } from "./ClinicalNavigation";
import { brand } from "./brand";
import { visits, type Visit } from "./data";
import { Schedule } from "./Schedule";
import {
  PatientDirectory,
  PatientRecords,
  PracticeStatus,
} from "./PatientViews";
import { PatientDetails, PatientSheet } from "./PatientDetails";
import { NewVisit } from "./NewVisit";
import { Overview } from "./Overview";
import "./styles.css";
const theme = {
  "--pv-teal": brand.colors[0].hex,
  "--pv-lemon": brand.colors[1].hex,
  "--pv-ink": brand.colors[3].hex,
  "--pv-surface": brand.colors[4].hex,
  "--pv-paper": brand.colors[5].hex,
} as CSSProperties;
export default function Page() {
  const [appointments, setAppointments] = useState(visits);
  const [day, setDay] = useState(3);
  const [view, setView] = useState<"day" | "week">("day");
  const [tab, setTab] = useState("Overview");
  const [doctor, setDoctor] = useState("all");
  const [selected, setSelected] = useState(1);
  const [sheet, setSheet] = useState(false);
  const [newVisit, setNewVisit] = useState(false);
  const [query, setQuery] = useState("");
  const [notes, setNotes] = useState<Record<number, string>>({});
  const visit = appointments.find((v) => v.id === selected)!;
  const shown = appointments.filter(
    (v) =>
      (doctor === "all" || v.doctor === doctor) &&
      (view === "week" || v.day === day),
  );
  function choose(id: number) {
    setSelected(id);
    if (tab === "Overview" || window.matchMedia("(max-width:900px)").matches)
      setSheet(true);
    else if (tab === "Patients") setTab("Records");
  }
  function add(visit: Visit) {
    setAppointments((current) => [...current, visit]);
    setDay(visit.day);
    setSelected(visit.id);
    setNewVisit(false);
    setTab("Overview");
  }
  return (
    <main className="pulse-v2" style={theme}>
      <ClinicalHeader
        tab={tab}
        day={day}
        view={view}
        onTab={setTab}
        onNew={() => setNewVisit(true)}
      />
      {tab === "Overview" ? (
        <Overview
          appointments={appointments}
          day={day}
          onDay={setDay}
          onSelect={choose}
          onCalendar={() => setTab("Calendar")}
        />
      ) : tab === "Calendar" ? (
        <>
          <ScheduleControls
            day={day}
            doctor={doctor}
            view={view}
            onDay={setDay}
            onDoctor={setDoctor}
            onView={setView}
          />
          <div className="pv-day-workspace">
            <Schedule
              appointments={shown}
              selected={selected}
              onSelect={choose}
              doctor={doctor}
              day={day}
              view={view}
            />
            <aside className="pv-detail-desktop">
              <PatientDetails
                key={visit.id}
                visit={visit}
                note={notes[visit.id] ?? visit.note}
                onNote={(note) => setNotes((n) => ({ ...n, [visit.id]: note }))}
              />
            </aside>
          </div>
        </>
      ) : tab === "Patients" ? (
        <PatientDirectory
          appointments={appointments}
          query={query}
          onQuery={setQuery}
          onSelect={choose}
        />
      ) : (
        <PatientRecords
          visit={visit}
          note={notes[visit.id] ?? visit.note}
          onNote={(note) => setNotes((n) => ({ ...n, [visit.id]: note }))}
        />
      )}
      <PracticeStatus />
      {sheet && (
        <PatientSheet
          visit={visit}
          note={notes[visit.id] ?? visit.note}
          onNote={(note) => setNotes((n) => ({ ...n, [visit.id]: note }))}
          onClose={() => setSheet(false)}
        />
      )}
      {newVisit && (
        <NewVisit
          appointments={appointments}
          day={day}
          id={Math.max(...appointments.map((v) => v.id)) + 1}
          onClose={() => setNewVisit(false)}
          onAdd={add}
        />
      )}
    </main>
  );
}
