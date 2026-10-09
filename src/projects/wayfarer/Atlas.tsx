import { useState } from "react";
import { routes, departures } from "./data";
import { JourneyPhoto } from "./JourneyPhoto";
import { JourneyChoices } from "./JourneyChoices";
import { MapPanel } from "./MapPanel";
import { Itinerary } from "./Itinerary";

export function Atlas() {
  const [selected, setSelected] = useState(0);
  const [departure, setDeparture] = useState(departures[0]);
  const [reserved, setReserved] = useState(false);
  const trail = routes[selected];
  function chooseJourney(index: number) {
    setSelected(index);
    setReserved(false);
  }
  return (
    <section id="atlas" className="wf-atlas" aria-label="Journey explorer">
      <JourneyPhoto trail={trail} />
      <div className="wf-map-panel">
        <div className="wf-map-intro">
          <span>Three places. One pair of boots.</span>
          <h2>Where will you wander?</h2>
        </div>
        <JourneyChoices selected={selected} onSelect={chooseJourney} />
        <MapPanel trail={trail} />
      </div>
      <Itinerary
        trail={trail}
        departure={departure}
        reserved={reserved}
        onDeparture={(date) => {
          setDeparture(date);
          setReserved(false);
        }}
        onPlan={() => setReserved(true)}
      />
    </section>
  );
}
