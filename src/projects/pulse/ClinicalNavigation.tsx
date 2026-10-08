import {
  ChevronLeft,
  ChevronRight,
  Plus,
  SlidersHorizontal,
  CalendarDays,
  Bell,
  LayoutDashboard,
  Users,
  FileText,
} from "lucide-react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
import { asset, clinicians, days } from "./data";
export function ClinicalHeader({
  tab,
  day,
  view,
  onTab,
  onNew,
}: {
  tab: string;
  day: number;
  view: "day" | "week";
  onTab: (tab: string) => void;
  onNew: () => void;
}) {
  return (
    <>
      {" "}
      <header className="pv-nav">
        <BrandLogo brand={brand} />
        <nav aria-label="Clinical workspace">
          {[
            { name: "Overview", icon: LayoutDashboard },
            { name: "Calendar", icon: CalendarDays },
            { name: "Patients", icon: Users },
            { name: "Records", icon: FileText },
          ].map(({ name, icon: Icon }) => (
            <button
              key={name}
              aria-pressed={tab === name}
              onClick={() => onTab(name)}
            >
              <Icon size={15} />
              {name}
            </button>
          ))}
        </nav>
        <div className="pv-clinic">
          <span>
            <Bell size={15} />
            Westside practice
          </span>
          <img src={asset("doctor.jpg")} alt="Dr. Maya Allen" />
        </div>
      </header>
      <section className="pv-heading">
        <div>
          <p>Westside practice · Thursday, October 8</p>
          <h1>
            {tab === "Overview"
              ? "Good morning, Dr. Allen"
              : tab === "Calendar"
                ? view === "week"
                  ? "5–9 October · Week 41"
                  : `${days[day].name}, ${days[day].date} October`
                : tab === "Patients"
                  ? "People, before anything."
                  : "A little context goes a long way."}
          </h1>
        </div>
        <div className="pv-heading-actions">
          <span>
            <CalendarDays size={15} />
            5–9 Oct, 2026
          </span>
          <button
            className="pv-new"
            onClick={() => onNew()}
            aria-label="Schedule a new visit"
          >
            <Plus size={16} />
            New visit
          </button>
        </div>
      </section>
    </>
  );
}
export function ScheduleControls({
  day,
  doctor,
  view,
  onDay,
  onDoctor,
  onView,
}: {
  day: number;
  doctor: string;
  view: "day" | "week";
  onDay: (day: number) => void;
  onDoctor: (doctor: string) => void;
  onView: (view: "day" | "week") => void;
}) {
  return (
    <div className="pv-controls">
      <div className="pv-date-controls">
        <button aria-label="Previous day" onClick={() => onDay((day + 4) % 5)}>
          <ChevronLeft size={17} />
        </button>
        <button aria-label="Next day" onClick={() => onDay((day + 1) % 5)}>
          <ChevronRight size={17} />
        </button>
        <button className="pv-today" onClick={() => onDay(3)}>
          Today
        </button>
        <span>October 2026</span>
      </div>
      <div className="pv-clinician-filter">
        <SlidersHorizontal size={14} />
        <label>
          <span className="pv-sr">Clinician</span>
          <select value={doctor} onChange={(e) => onDoctor(e.target.value)}>
            <option value="all">All clinicians</option>
            {clinicians.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="pv-view">
        <button aria-pressed={view === "day"} onClick={() => onView("day")}>
          Day
        </button>
        <button aria-pressed={view === "week"} onClick={() => onView("week")}>
          Week
        </button>
      </div>
    </div>
  );
}
