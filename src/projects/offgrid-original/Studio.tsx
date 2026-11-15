import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
import { Spark } from "./Spark";

const services = [
  "A clear position",
  "An identity with character",
  "A website that feels like you",
];

export function Studio() {
  return (
    <section className="og-original-studio" id="og-original-studio">
      <div className="og-original-studio-symbol">
        <BrandLogo brand={brand} symbolOnly />
        <span>Different by design.</span>
      </div>
      <div>
        <h2>
          A good fit for
          <br />
          the misfits.
        </h2>
        <p>
          For the people building something with a point of view. We ask better
          questions, pull ideas apart and make the pieces into something worth
          noticing.
        </p>
        <ul className="og-original-services">
          {services.map((item) => (
            <li key={item}>
              <Spark size={16} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
