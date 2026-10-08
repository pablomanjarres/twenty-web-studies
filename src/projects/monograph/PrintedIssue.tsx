import { useState } from "react";
import { image, stories } from "./data";
export function PrintedIssue() {
  const [saved, setSaved] = useState(false);
  return (
    <section className="monograph-print" id="monograph-print">
      <div className="monograph-paper-cover">
        <span>MONOGRAPH</span>
        <img
          src={image(stories[1].file)}
          alt="Ochre and plum colour study on the cover of Monograph Issue 04"
          loading="lazy"
        />
        <div>
          <span>04</span>
          <span>
            WAYS OF
            <br />
            LOOKING
          </span>
        </div>
      </div>
      <div className="monograph-print-copy">
        <span className="monograph-small-label">Something to keep</span>
        <h2>
          A slower page.
          <br />A longer look.
        </h2>
        <p>
          Issue 04 brings our visual essays together on paper. Art, objects, and
          the spaces we pass through — collected for the bookshelf.
        </p>
        <dl>
          <div>
            <dt>Edition</dt>
            <dd>04 / Ways of looking</dd>
          </div>
          <div>
            <dt>Format</dt>
            <dd>210 × 275 mm / 96 pages</dd>
          </div>
          <div>
            <dt>Inside</dt>
            <dd>Visual essays & studio notes</dd>
          </div>
        </dl>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setSaved(true);
          }}
        >
          <label htmlFor="monograph-email">
            A note when the next issue is ready
          </label>
          <div>
            <input
              id="monograph-email"
              type="email"
              required
              placeholder="Your email address"
              onChange={() => setSaved(false)}
            />
            <button type="submit" aria-label="Save issue notification">
              ↗
            </button>
          </div>
          <p role="status">
            {saved
              ? "Your address is saved for this visit."
              : "Occasional notes from the reading room."}
          </p>
        </form>
      </div>
    </section>
  );
}
