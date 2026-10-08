import { exhibitions } from "./data";
export function ExhibitionArchive() {
  return (
    <section className="monograph-archive" id="monograph-archive">
      <div className="monograph-section-line">
        <span>Exhibition notebook / Past editions</span>
        <span>Dates from the museum archive</span>
      </div>
      <h2>Worth returning to.</h2>
      <div>
        {exhibitions.map((item) => (
          <a key={item.title} href={item.url} target="_blank" rel="noreferrer">
            <span>{item.dates}</span>
            <h3>{item.title}</h3>
            <span>{item.venue}</span>
            <span aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}
