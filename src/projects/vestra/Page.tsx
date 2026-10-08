import { useState } from "react";
import { Landscape } from "./Landscape";
import { RetreatJournal } from "./RetreatJournal";
import "./styles.css";
export default function Page() {
  const [bookingOpen, setBookingOpen] = useState(false);
  return (
    <main className="vestra">
      <Landscape
        bookingOpen={bookingOpen}
        onBooking={() => setBookingOpen(!bookingOpen)}
      />
      <RetreatJournal onBooking={() => setBookingOpen(true)} />
    </main>
  );
}
