import { useState } from "react";
import { HeroCourt } from "./HeroCourt";
import { Availability } from "./Availability";
import { ClubNotes } from "./ClubNotes";
import { type BookingState, initialBooking, normalizeBooking } from "./data";
import "./styles.css";
export default function Page() {
  const [booking, setBooking] = useState<BookingState>(initialBooking);
  const [confirmed, setConfirmed] = useState(false);
  function update(patch: Partial<BookingState>) {
    setBooking((previous) => normalizeBooking({ ...previous, ...patch }));
    setConfirmed(false);
  }
  return (
    <main className="sprinto">
      <HeroCourt
        booking={booking}
        update={update}
        confirmed={confirmed}
        confirm={() => setConfirmed(true)}
      />
      <Availability booking={booking} update={update} />
      <ClubNotes />
    </main>
  );
}
