import { exhibitions } from "./data";
export function ExhibitionArchive() {
  return (
    <section className="monograph-archive" id="monograph-archive">
      <div className="monograph-section-line">
        <span className="monograph-small-label">
          Exhibition notebook / Past editions
        </span>
        <span className="monograph-small-label">
          Dates from the museum archive
        </span>
      </div>
      <h2>Worth returning to.</h2>
      <div>
        {exhibitions.map((item) => (
          <a
            key={item.title}
            className="monograph-link"
            href={item.url}
            target="_blank"
            rel="noreferrer"
          >
            <span>{item.dates}</span>
            <h3>{item.title}</h3>
            <span>{item.venue}</span>
            <span className="monograph-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
