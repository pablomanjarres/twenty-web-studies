import { JourneyNavigation } from "./JourneyNavigation";
import { JourneyFooter } from "./JourneyFooter";
import { Atlas } from "./Atlas";
import { FieldNotes } from "./FieldNotes";
import "./styles.css";
export default function Page() {
  return (
    <main className="wayfarer">
      <JourneyNavigation />
      <Atlas />
      <FieldNotes />
      <JourneyFooter />
    </main>
  );
}
