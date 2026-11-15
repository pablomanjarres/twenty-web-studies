import { JourneyNavigation } from "./JourneyNavigation";
import { JourneyFooter } from "./JourneyFooter";
import { Atlas } from "./Atlas";
import { FieldNotes } from "./FieldNotes";
import "./styles.css";
export default function Page() {
  return (
    <div className="wayfarer">
      <JourneyNavigation />
      <main>
        <Atlas />
        <FieldNotes />
      </main>
      <JourneyFooter />
    </div>
  );
}
