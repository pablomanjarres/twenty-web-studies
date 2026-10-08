import { Plus } from "lucide-react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";

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
        <div className="og-original-services">
          {[
            "A clear position",
            "An identity with character",
            "A website that feels like you",
          ].map((item) => (
            <div key={item}>
              <Plus size={18} />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
