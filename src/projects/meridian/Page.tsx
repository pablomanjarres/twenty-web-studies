import { useState } from "react";
import { filterShipments, initialShipments } from "./data";
import type { NetworkView } from "./data";
import { CommandBar, SideNavigation } from "./Navigation";
import { MovementRail } from "./MovementRail";
import { RouteMap } from "./RouteMap";
import { OperationsDock } from "./OperationsDock";
import { PortSchematic } from "./PortSchematic";
import { PortStudy } from "./PortStudy";
import { NetworkEmpty } from "./NetworkEmpty";
import { ShipmentTable } from "./ShipmentTable";
import { ScheduleForm } from "./ScheduleForm";
import "./styles.css";
export default function Page() {
  const [shipments, setShipments] = useState(initialShipments);
  const [selected, setSelected] = useState("MRD-2481");
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState("All modes");
  const [view, setView] = useState<NetworkView>("port");
  const [open, setOpen] = useState(false);
  const visible = filterShipments(shipments, query, mode);
  const shipment =
    visible.find((item) => item.id === selected) ?? visible[0] ?? shipments[0];
  return (
    <main className="meridian-page" id="md-workspace">
      <CommandBar view={view} onSchedule={() => setOpen(true)} />
      <div className="md-control-room">
        <SideNavigation view={view} onView={setView} />
        <MovementRail
          shipments={visible}
          selected={shipment.id}
          onSelect={setSelected}
          query={query}
          onQuery={setQuery}
          mode={mode}
          onMode={setMode}
        />
        <div className="md-operating-surface" data-view={view}>
          {(view === "network" || view === "port") && visible.length === 0 && (
            <NetworkEmpty
              onReset={() => {
                setQuery("");
                setMode("All modes");
              }}
            />
          )}
          {view === "network" && visible.length > 0 && (
            <RouteMap
              shipments={visible}
              selected={shipment}
              onSelect={setSelected}
            />
          )}
          {view === "port" && visible.length > 0 && (
            <PortSchematic key={shipment.destination} shipment={shipment} />
          )}
          {view === "study" && <PortStudy />}
          {view === "manifest" && (
            <ShipmentTable
              shipments={visible}
              selected={shipment.id}
              onSelect={setSelected}
            />
          )}
          {visible.length > 0 && (
            <OperationsDock
              shipment={shipment}
              onManifest={() => setView("manifest")}
            />
          )}
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
            setView("port");
            setOpen(false);
          }}
        />
      )}
    </main>
  );
}
