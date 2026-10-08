import { image } from "./data";
export function Origin() {
  return (
    <section className="cinder-origin-study">
      <img
        src={image("coffee-cherries-v2.webp")}
        alt="Ripe red coffee cherries among green leaves before harvest"
        loading="lazy"
      />
      <div>
        <span className="cinder-label">Before the roast</span>
        <h2>
          It begins
          <br />
          as a cherry.
        </h2>
        <p>
          Fruit, seed, soil, and time. Roasting is one chapter in a much longer
          story.
        </p>
        <span>Arabica / Fruit study 01</span>
      </div>
    </section>
  );
}
