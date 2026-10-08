import { useState } from "react";
import {
  Activity,
  Box,
  CalendarDays,
  ChevronDown,
  Clock3,
  PackageCheck,
  Ship,
} from "lucide-react";
import { initialShipments, modes } from "./data";
import { Sidebar, Header } from "./Navigation";
import { StatCard, NetworkPerformance } from "./Metrics";
import { RouteMap } from "./RouteMap";
import { ArrivalDetail } from "./ArrivalDetail";
import { ShipmentTable } from "./ShipmentTable";
import { ScheduleForm } from "./ScheduleForm";
import "./styles.css";

export default function Page() {
  const [shipments, setShipments] = useState(initialShipments);
  const [selected, setSelected] = useState("MRD-2481");
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState("All modes");
  const [open, setOpen] = useState(false);
  const shipment =
    shipments.find((item) => item.id === selected) ?? shipments[0];
  const visible = shipments.filter(
    (item) =>
      (mode === "All modes" || item.mode === mode) &&
      `${item.id} ${item.origin} ${item.destination} ${item.status}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  return (
    <main className="meridian-page">
      <Sidebar />
      <div className="md-workspace" id="md-workspace">
        <Header onSchedule={() => setOpen(true)} />
        <div className="md-content">
          <div className="md-page-heading">
            <div>
              <span className="md-sidebar-label">Your global operations</span>
              <h1>Control tower</h1>
              <p>A clear view of every movement, from departure to arrival.</p>
            </div>
            <span className="md-date">
              <CalendarDays size={14} />
              Oct 08, 2026
              <ChevronDown size={12} />
            </span>
          </div>
          <div className="md-stats-grid">
            <StatCard
              label="Active shipments"
              value={String(
                shipments.filter((item) => item.status !== "Delivered").length,
              ).padStart(2, "0")}
              change="2 new movements"
              points="0,34 15,27 29,31 43,18 55,23 70,11 85,16 100,5"
              Icon={Box}
            />
            <StatCard
              label="On-time arrivals"
              value="96.8%"
              change="2.4%"
              points="0,33 17,32 30,23 45,25 60,19 74,13 88,12 100,7"
              Icon={PackageCheck}
            />
            <StatCard
              label="Freight in motion"
              value="1,284"
              change="8.2%"
              points="0,31 13,21 29,24 43,19 57,25 70,11 84,16 100,4"
              Icon={Ship}
            />
            <StatCard
              label="Average transit"
              value="12.4 d"
              change="1.2 days faster"
              points="0,5 15,14 30,10 45,20 60,19 74,29 86,25 100,32"
              Icon={Clock3}
            />
          </div>
          <div className="md-main-grid">
            <div>
              <RouteMap
                shipments={shipments}
                selected={shipment}
                onSelect={setSelected}
              />
              <NetworkPerformance />
            </div>
            <ArrivalDetail shipment={shipment} />
          </div>
          <ShipmentTable
            shipments={visible}
            selected={selected}
            onSelect={setSelected}
            query={query}
            onQuery={setQuery}
            mode={mode}
            onMode={setMode}
          />
          <footer className="md-workspace-footer" id="md-help">
            <span>
              <Activity size={11} />
              Network view · October 2026
            </span>
            <span>
              Select a movement to inspect its route and arrival. Use New
              shipment to plan a journey.
            </span>
          </footer>
        </div>
      </div>
      {open && (
        <ScheduleForm
          onClose={() => setOpen(false)}
          onCreate={(item) => {
            setShipments((current) => [item, ...current]);
            setSelected(item.id);
            setQuery("");
            setMode("All modes");
            setOpen(false);
          }}
        />
      )}
    </main>
  );
}
