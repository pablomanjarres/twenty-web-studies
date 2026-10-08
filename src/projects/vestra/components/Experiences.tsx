import { experiences } from "../data";

export function Experiences() {
  return (
    <section className="vestra-experiences" id="experience">
      <div className="vestra-experience-heading">
        <h2>
          Less itinerary.
          <br />
          More possibility.
        </h2>
        <p>
          Make a little space for what
          <br />
          feels good to you.
        </p>
      </div>
      <div className="vestra-experience-grid">
        {experiences.map(({ icon: Icon, title, copy }) => (
          <article key={title}>
            <Icon size={29} />
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
