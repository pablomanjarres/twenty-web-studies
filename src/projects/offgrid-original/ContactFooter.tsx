import { useState } from "react";
import { ArrowUp, ArrowUpRight, Check } from "lucide-react";
import { ChoiceGroup } from "./ChoiceGroup";

const disciplines = ["Brand identity", "A new website", "The whole picture"];
const stages = [
  "Starting something new",
  "Rethinking an existing brand",
  "Ready to grow",
];

export function BriefBuilder() {
  const [discipline, setDiscipline] = useState(disciplines[0]);
  const [stage, setStage] = useState(stages[0]);
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
        <ChoiceGroup
          legend="We’re interested in"
          name="og-original-discipline"
          options={disciplines}
          value={discipline}
          onChange={(value) => {
            setDiscipline(value);
            setReady(false);
          }}
        />
        <ChoiceGroup
          legend="And right now we’re"
          name="og-original-stage"
          options={stages}
          value={stage}
          onChange={(value) => {
            setStage(value);
            setReady(false);
          }}
        />
        <button type="submit">
          Put the idea together <ArrowUpRight size={22} />
        </button>
        {ready && (
          <p className="og-original-brief-result" role="status">
            <Check size={20} /> Your starting point: {discipline.toLowerCase()},{" "}
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
        <a href="#og-original-top" className="og-original-link">
          Back up <ArrowUp size={16} />
        </a>
        <span>Independent since always.</span>
      </div>
    </footer>
  );
}
