import { values } from "../data";

export function Care() {
  return (
    <section className="kanso-care" id="care">
      {values.map(({ icon: Icon, title, copy }) => (
        <article key={title}>
          <Icon size={24} />
          <h3>{title}</h3>
          <p>{copy}</p>
        </article>
      ))}
    </section>
  );
}
