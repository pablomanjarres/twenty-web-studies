import { useState, useEffect, useRef } from "react";
import { ArrowRight, Clock3, Check, X } from "lucide-react";
import { CourtCard } from "./CourtCard";
import { courts } from "../data";

export function Courts() {
  const [area, setArea] = useState("All locations");
  const [booking, setBooking] = useState<{ name: string; time: string } | null>(
    null,
  );
  const [confirmed, setConfirmed] = useState(false);
  const [savedSession, setSavedSession] = useState<{
    name: string;
    time: string;
  } | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (booking && dialog.current && !dialog.current.open)
      dialog.current.showModal();
  }, [booking]);
  return (
    <section className="sprinto-original-courts" id="sprinto-original-courts">
      <div className="sprinto-original-section-title">
        <div>
          <span>Tonight looks good on you.</span>
          <h2>YOUR COURT. YOUR CALL.</h2>
        </div>
        <div
          className="sprinto-original-area-tabs"
          aria-label="Court locations"
        >
          {["All locations", "Downtown", "Riverside"].map((i) => (
            <button
              key={i}
              aria-pressed={area === i}
              onClick={() => setArea(i)}
            >
              {i}
            </button>
          ))}
        </div>
      </div>
      <div className="sprinto-original-court-grid">
        {courts
          .filter((i) => area === "All locations" || i.area === area)
          .map((i) => (
            <CourtCard
              key={i.name}
              court={i}
              onBook={(name, time) => {
                setBooking({ name, time });
                setConfirmed(false);
              }}
            />
          ))}
      </div>
      {savedSession && (
        <div className="sprinto-original-saved-session" role="status">
          <Check size={18} />
          <span>
            Your next game is saved.
            <strong>
              {savedSession.name} · {savedSession.time} · 90 minutes
            </strong>
          </span>
        </div>
      )}
      {booking && (
        <dialog
          aria-labelledby="sprinto-original-booking-title"
          ref={dialog}
          className="sprinto-original-modal-backdrop"
          onCancel={() => setBooking(null)}
        >
          <section
            className="sprinto-original-booking-panel"
            aria-labelledby="sprinto-original-booking-title"
          >
            <button
              className="sprinto-original-close"
              onClick={() => setBooking(null)}
              aria-label="Close booking"
            >
              <X size={20} />
            </button>
            <span className="sprinto-original-booking-icon">
              {confirmed ? <Check size={32} /> : <Clock3 size={32} />}
            </span>
            <h3 id="sprinto-original-booking-title">
              {confirmed ? "YOU’RE ON THE COURT." : "SAVE YOUR SPOT."}
            </h3>
            <p>
              {booking.name}
              <br />
              {booking.time} · 90 minutes · €28 per court
            </p>
            {confirmed ? (
              <p className="sprinto-original-booking-confirmed">
                Your session is saved for this visit. Bring your best rally.
              </p>
            ) : (
              <button
                className="sprinto-original-lime-button"
                onClick={() => {
                  setSavedSession(booking);
                  setConfirmed(true);
                }}
              >
                Save session <ArrowRight size={18} />
              </button>
            )}
          </section>
        </dialog>
      )}
    </section>
  );
}
