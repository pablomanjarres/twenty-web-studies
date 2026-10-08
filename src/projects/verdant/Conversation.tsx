import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { approaches } from "./data";

export function Conversation() {
  const [focus, setFocus] = useState("Solar");
  const [scale, setScale] = useState("A building or rooftop");
  const [summary, setSummary] = useState("");
  return (
    <section className="ve-conversation" id="ve-conversation">
      <div>
        <span className="ve-kicker">Make a little room for possibility</span>
        <h2>
          What could
          <br />
          come next?
        </h2>
        <p>
          Start with a place and an idea.
          <br />A better current begins with a conversation.
        </p>
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setSummary(
            `${focus} for ${scale.toLowerCase()}. Your project direction is ready to explore.`,
          );
        }}
      >
        <label>
          I’m thinking about
          <select
            value={focus}
            onChange={(event) => setFocus(event.target.value)}
          >
            {approaches.map((item) => (
              <option key={item.name}>{item.name}</option>
            ))}
          </select>
        </label>
        <label>
          For a place like
          <select
            value={scale}
            onChange={(event) => setScale(event.target.value)}
          >
            <option>A building or rooftop</option>
            <option>An open site or field</option>
            <option>A business or community</option>
          </select>
        </label>
        <button type="submit">
          Shape the possibility <ArrowUpRight size={21} />
        </button>
        {summary && (
          <p className="ve-conversation-result" role="status">
            <Check size={16} />
            {summary}
          </p>
        )}
      </form>
    </section>
  );
}
