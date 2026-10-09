import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { brand } from "./brand";

export function BriefBuilder() {
  const [discipline, setDiscipline] = useState("Brand identity");
  const [stage, setStage] = useState("Starting something new");
  const [ready, setReady] = useState(false);
  return (
    <section className="og-original-contact" id="og-original-contact">
      <div>
        <span>Good things start with a conversation.</span>
        <h2>
          What are
          <br />
          you up to?
        </h2>
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setReady(true);
        }}
      >
        <label>
          We’re interested in
          <select
            value={discipline}
            onChange={(event) => {
              setDiscipline(event.target.value);
              setReady(false);
            }}
          >
            {["Brand identity", "A new website", "The whole picture"].map(
              (item) => (
                <option key={item}>{item}</option>
              ),
            )}
          </select>
        </label>
        <label>
          And right now we’re
          <select
            value={stage}
            onChange={(event) => {
              setStage(event.target.value);
              setReady(false);
            }}
          >
            {[
              "Starting something new",
              "Rethinking an existing brand",
              "Ready to grow",
            ].map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <button type="submit">
          Put the idea together <ArrowUpRight size={22} />
        </button>
        {ready && (
          <p className="og-original-brief-result" role="status">
            <Check size={18} /> Your starting point: {discipline.toLowerCase()},{" "}
            {stage.toLowerCase()}. A clear direction for the first conversation.
          </p>
        )}
      </form>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="og-original-footer">
      <span className="og-original-footer-word">offgrid</span>
      <div>
        <span>Good ideas go off script.</span>
        <a href="#og-original-top">Back up ↑</a>
        <span>Independent since always.</span>
      </div>
    </footer>
  );
}
