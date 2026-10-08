import { useState } from "react";
import { CalendarDays, Search, Activity } from "lucide-react";
import { Sidebar } from "./components/Sidebar";
import { Topbar } from "./components/Topbar";
import { Metrics } from "./components/Metrics";
import { Appointments } from "./components/Appointments";
import { Patient } from "./components/Patient";
import { ActivityChart } from "./components/ActivityChart";
import { Team } from "./components/Team";
import "./styles.css";

export default function Page() {
  const [search, setSearch] = useState("");
  return (
    <main className="pulse">
      <Sidebar />
      <div className="pulse-workspace">
        <Topbar search={search} setSearch={setSearch} />
        <div className="pulse-main" id="overview">
          <div className="pulse-welcome">
            <div>
              <span>Thursday, October 8, 2026</span>
              <h1>Good morning, Dr. Chen.</h1>
              <p>A clear view of the day. More space for your patients.</p>
            </div>
            <a href="#appointments" className="pulse-primary-button">
              <CalendarDays size={15} />
              View appointments
            </a>
          </div>
          <label className="pulse-search-mobile">
            <Search size={15} />
            <input
              id="pulse-search-field"
              aria-label="Search patient names"
              placeholder="Search patient names"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
          <Metrics />
          <div className="pulse-care-grid">
            <Appointments search={search} />
            <Patient />
          </div>
          <div className="pulse-bottom-grid">
            <ActivityChart />
            <Team />
          </div>
          <footer className="pulse-footer">
            <span>
              <Activity size={12} /> A clearer day in care.
            </span>
            <span>All times in your practice’s local time.</span>
          </footer>
        </div>
      </div>
    </main>
  );
}
