import { benefits } from "../data";

export function Features() {
  return (
    <section className="aether-features" id="features">
      {benefits.map(({ icon: Icon, title, copy }) => (
        <article key={title}>
          <span className="aether-feature-icon">
            <Icon size={24} />
          </span>
          <h3>{title}</h3>
          <p>{copy}</p>
        </article>
      ))}
    </section>
  );
}
