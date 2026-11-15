import { coffees } from "./data";
const facts = ["process", "altitude", "roast"] as const;
export function RoastLedger({
  active,
  onSelect,
}: {
  active: number;
  onSelect: (index: number) => void;
}) {
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
        <div className="cinder-ledger-heading" aria-hidden="true">
          {["Coffee / origin", "Process", "Altitude", "Roast"].map((name) => (
            <span key={name} className="cinder-label">
              {name}
            </span>
          ))}
        </div>
        <ol>
          {coffees.map((coffee, index) => (
            <li
              key={coffee.id}
              aria-current={active === index ? "true" : undefined}
            >
              <div className="cinder-ledger-name">
                <span className="cinder-label">
                  {coffee.number}
                  {active === index && <em> / On the poster</em>}
                </span>
                <button onClick={() => onSelect(index)}>{coffee.name}</button>
                <span>
                  {coffee.region}, {coffee.country}
                </span>
              </div>
              <dl className="cinder-ledger-facts">
                {facts.map((fact) => (
                  <div key={fact}>
                    <dt className="cinder-label cinder-sr-only-desktop">
                      {fact}
                    </dt>
                    <dd>{coffee[fact]}</dd>
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
