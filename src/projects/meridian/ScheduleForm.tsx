import { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { useDialog } from "./useDialog";
import { ports } from "./data";
import type { Shipment } from "./data";

export function ScheduleForm({
  onClose,
  onCreate,
}: {
  onClose: () => void;
  onCreate: (shipment: Shipment) => void;
}) {
  const dialog = useDialog<HTMLFormElement>(onClose);
  const [origin, setOrigin] = useState("Rotterdam");
  const [destination, setDestination] = useState("Newark");
  const [mode, setMode] = useState<Shipment["mode"]>("Ocean");
  const [cargo, setCargo] = useState("4 × 40′ HC");
  return (
    <div className="md-form-overlay" onClick={onClose}>
      <form
        ref={dialog}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="md-schedule-title"
        className="md-schedule"
        onClick={(event) => event.stopPropagation()}
        onSubmit={(event) => {
          event.preventDefault();
          onCreate({
            id: `MRD-${Date.now().toString().slice(-5)}`,
            origin,
            destination,
            mode,
            cargo,
            status: "Scheduled",
            arrival: "Oct 15 · 09:00",
            progress: 0,
            vessel: "Carrier to be assigned",
          });
        }}
      >
        <div className="md-schedule-heading">
          <div>
            <span className="md-sidebar-label">Plan a movement</span>
            <h2 id="md-schedule-title">New shipment</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close schedule form"
          >
            <X size={20} />
          </button>
        </div>
        <p>Connect two ports and add a movement to your workspace.</p>
        <label>
          Origin
          <select
            value={origin}
            onChange={(event) => {
              setOrigin(event.target.value);
              if (destination === event.target.value)
                setDestination(
                  ports.find((port) => port.name !== event.target.value)
                    ?.name ?? "Newark",
                );
            }}
          >
            {ports.map((port) => (
              <option key={port.code}>{port.name}</option>
            ))}
          </select>
        </label>
        <label>
          Destination
          <select
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
          >
            {ports
              .filter((port) => port.name !== origin)
              .map((port) => (
                <option key={port.code}>{port.name}</option>
              ))}
          </select>
        </label>
        <label>
          Transport
          <select
            value={mode}
            onChange={(event) =>
              setMode(event.target.value as Shipment["mode"])
            }
          >
            <option>Ocean</option>
            <option>Air</option>
            <option>Road</option>
          </select>
        </label>
        <label>
          Cargo description
          <input
            value={cargo}
            required
            maxLength={40}
            onChange={(event) => setCargo(event.target.value)}
          />
        </label>
        <span className="md-form-note">
          Expected arrival: October 15, 09:00
        </span>
        <button className="md-create-button" type="submit">
          Add to schedule <ArrowRight size={17} />
        </button>
      </form>
    </div>
  );
}
