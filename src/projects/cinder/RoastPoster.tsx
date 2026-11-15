import { coffees, image, type Coffee } from "./data";
export function RoastPoster({
  coffee,
  active,
  onSelect,
}: {
  coffee: Coffee;
  active: number;
  onSelect: (index: number) => void;
}) {
  return (
    <section id="coffee" className="cinder-roast-poster">
      <div className="cinder-poster-title">
        <span className="cinder-label">
          Roast 0{active + 1} / {coffee.label}
        </span>
        <h1>{coffee.name}</h1>
        <p>{coffee.note}</p>
      </div>
      <img
        key={coffee.id}
        className="cinder-main-package"
        src={image(coffee.image)}
        alt={`${coffee.name} coffee in a tactile printed Cinder paper pouch`}
        width="1254"
        height="1254"
      />
      <div className="cinder-poster-facts">
        <div className="cinder-origin-label">
          <span className="cinder-label">From</span>
          <strong>
            {coffee.region},<br />
            {coffee.country}.
          </strong>
          <span className="cinder-label">250 g / {coffee.roast} roast</span>
        </div>
        <div className="cinder-tasting">
          <span className="cinder-label">In the cup</span>
          {coffee.notes.map((note) => (
            <span key={note}>{note}</span>
          ))}
        </div>
      </div>
      <div className="cinder-variants" role="group" aria-label="Select a roast">
        {coffees.map((item, index) => (
          <button
            key={item.id}
            aria-pressed={active === index}
            onClick={() => onSelect(index)}
          >
            <img src={image(item.image)} alt="" width="1254" height="1254" />
            <span className="cinder-label">
              {item.number}
              <span className="cinder-sr-only-phone"> {item.name}</span>
            </span>
          </button>
        ))}
      </div>
      <div className="cinder-poster-floor">
        <span className="cinder-label">
          Fresh roast.
          <br />
          Slow mornings.
        </span>
        <span className="cinder-label">
          {coffee.batch}
          <br />
          Roastery collection
        </span>
      </div>
    </section>
  );
}
