import { coffees } from "./data";
export function RoastLedger() {
  return (
    <section id="batch" className="cinder-batch">
      <div className="cinder-batch-intro">
        <span className="cinder-label">The roast ledger / Batch 04</span>
        <h2>
          Good coffee.
          <br />
          Nothing mysterious.
        </h2>
        <p>
          Three origins, three different mornings. The details that shape what
          lands in your cup.
        </p>
      </div>
      <div className="cinder-roast-ledger">
        <div className="cinder-ledger-heading">
          <span>Coffee / origin</span>
          <span>Process</span>
          <span>Altitude</span>
          <span>Roast</span>
        </div>
        {coffees.map((coffee) => (
          <div key={coffee.id}>
            <span>
              <small>{coffee.number}</small>
              <strong>{coffee.name}</strong>
              <em>
                {coffee.region}, {coffee.country}
              </em>
            </span>
            <span>{coffee.process}</span>
            <span>{coffee.altitude}</span>
            <span>{coffee.roast}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
