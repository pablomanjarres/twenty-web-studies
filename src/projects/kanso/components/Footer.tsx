import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { BrandLogo } from "../../../shared/BrandLogo";
import { brand } from "../brand";
export function Footer() {
  const [saved, setSaved] = useState(false);
  return (
    <footer className="kanso-footer">
      <div className="kanso-dispatch">
        <span>
          Wrapped carefully.
          <br />
          Sent from the atelier.
        </span>
        <p>
          New batches, material notes,
          <br />
          and the occasional good object.
        </p>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setSaved(true);
          }}
        >
          <label className="kanso-sr-only" htmlFor="kanso-email">
            Email for atelier notes
          </label>
          <input
            id="kanso-email"
            type="email"
            required
            placeholder="Your email address"
            onChange={() => setSaved(false)}
          />
          <button aria-label="Save email for atelier notes">
            <ArrowRight size={18} />
          </button>
          <span role="status">
            {saved ? "Email saved for this visit." : "Notes, now and then."}
          </span>
        </form>
      </div>
      <div className="kanso-footer-bottom">
        <a href="#objects">
          <BrandLogo brand={brand} />
        </a>
        <span>Useful. Beautiful. A little imperfect.</span>
        <a href="#objects">Back to the shelf ↑</a>
      </div>
    </footer>
  );
}
