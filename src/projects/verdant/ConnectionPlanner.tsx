import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
const systems = [
  "Solar generation",
  "Wind generation",
  "Battery storage",
  "An integrated system",
];
const sites = [
  "Commercial rooftop",
  "Open-field site",
  "Industrial campus",
  "Community facility",
];
function Choice({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label>
      {label}
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}
export function ConnectionPlanner() {
  const [brief, setBrief] = useState(false);
  const [system, setSystem] = useState(systems[0]);
  const [site, setSite] = useState(sites[0]);
  return (
    <section id="connection" className="vd-connection">
      <div>
        <span className="vd-label">From a site to a system</span>
        <h2>What could your next connection be?</h2>
        <p>
          Tell us where you’re starting. A clear project begins with a better
          question.
        </p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setBrief(true);
        }}
      >
        <Choice
          label="What are you exploring?"
          options={systems}
          value={system}
          onChange={(value) => {
            setSystem(value);
            setBrief(false);
          }}
        />
        <Choice
          label="Site type"
          options={sites}
          value={site}
          onChange={(value) => {
            setSite(value);
            setBrief(false);
          }}
        />
        <button>
          {brief ? "Project outline prepared" : "Prepare a project outline"}
          <ArrowUpRight size={20} aria-hidden="true" />
        </button>
        <p aria-live="polite">
          {brief
            ? `${system} · ${site}. Your project outline is ready for a first conversation.`
            : "Choose the system and the site. Start with the essentials."}
        </p>
      </form>
    </section>
  );
}
