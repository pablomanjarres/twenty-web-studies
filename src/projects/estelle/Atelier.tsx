import { useState } from "react";
import { ArrowRight, ChevronDown, Check } from "lucide-react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
import { image } from "./data";

export function Atelier() {
  return (
    <section className="estelle-atelier" id="estelle-atelier">
      <div className="estelle-atelier-photo">
        <img
          src={image("gold")}
          alt="Golden sculptural hoops resting on a natural stone"
        />
        <span>The beauty is in the detail.</span>
      </div>
      <div className="estelle-atelier-copy">
        <BrandLogo brand={brand} symbolOnly />
        <span>A considered kind of beauty</span>
        <h2>
          Made slowly.
          <br />
          Worn always.
        </h2>
        <p>
          A curve that catches the light. A surface that feels just right. The
          small decisions are the ones that make a piece unmistakably yours.
        </p>
        <p>
          From the first sketch to the final polish, our atelier brings care to
          every detail. Because the things we keep should be made to last.
        </p>
        <a className="estelle-link" href="#estelle-visit">
          Step inside our world <ArrowRight size={21} />
        </a>
      </div>
    </section>
  );
}

export function Appointment() {
  const [slot, setSlot] = useState("Friday, 14:00");
  const [selected, setSelected] = useState(false);
  return (
    <section className="estelle-visit" id="estelle-visit">
      <div>
        <span>An invitation</span>
        <h2>
          Find the piece
          <br />
          that finds you.
        </h2>
        <p>
          Visit our London atelier for a quiet moment with the collection.
          <br />
          Try it on. Take your time. We’ll be here.
        </p>
        <small>18 Floral Street, Covent Garden / London</small>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSelected(true);
        }}
      >
        <label>
          A moment for you
          <select
            value={slot}
            onChange={(e) => {
              setSlot(e.target.value);
              setSelected(false);
            }}
          >
            {[
              "Friday, 14:00",
              "Friday, 16:00",
              "Saturday, 11:00",
              "Saturday, 15:00",
            ].map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          <ChevronDown size={13} />
        </label>
        <button type="submit">
          {selected ? (
            <>
              <Check size={16} />
              Your time is selected
            </>
          ) : (
            <>
              Choose an atelier visit <ArrowRight size={18} />
            </>
          )}
        </button>
        <p aria-live="polite">
          {selected
            ? `${slot}. Your appointment selection is ready.`
            : "A personal appointment, at your pace."}
        </p>
      </form>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="estelle-footer">
      <BrandLogo brand={brand} />
      <span>Objects of affection.</span>
      <a href="#estelle-top">Return to the beginning ↑</a>
      <small>© 2026 Estelle Atelier</small>
    </footer>
  );
}
