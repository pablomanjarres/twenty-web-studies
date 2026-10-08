import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [saved, setSaved] = useState(false);
  return (
    <section className="kanso-newsletter">
      <div>
        <span>Notes from the atelier.</span>
        <h2>
          A little something
          <br />
          to look forward to.
        </h2>
      </div>
      <div>
        <p>New pieces, quiet stories, and the occasional good thing.</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSaved(true);
          }}
        >
          <label className="kanso-email-label" htmlFor="kanso-email">
            Your email address
          </label>
          <input
            id="kanso-email"
            type="email"
            required
            placeholder="Your email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setSaved(false);
            }}
          />
          <button aria-label="Save email">
            <ArrowRight size={20} />
          </button>
        </form>
        {saved && (
          <span className="kanso-newsletter-status" role="status">
            Your email is saved for this visit. A little good thing.
          </span>
        )}
      </div>
    </section>
  );
}
