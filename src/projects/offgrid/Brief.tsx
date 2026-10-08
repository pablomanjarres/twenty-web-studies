import { useState } from "react";
import { X, ArrowRight, Download } from "lucide-react";
import { useDialog } from "../../shared/useDialog";
export function Brief({ onClose }: { onClose: () => void }) {
  const ref = useDialog<HTMLDivElement>(onClose);
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [idea, setIdea] = useState("");
  const [type, setType] = useState("Identity & digital");
  const [timing, setTiming] = useState("In the next 3 months");
  function download() {
    const contents = `OFFGRID / PROJECT BRIEF

Name: ${name}
Focus: ${type}
Timing: ${timing}

The idea
${idea}
`;
    const url = URL.createObjectURL(
      new Blob([contents], { type: "text/plain" }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = "offgrid-project-brief.txt";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return (
    <div className="fg-overlay" onClick={onClose}>
      <section
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label="Project brief"
        className="fg-brief"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="fg-close"
          aria-label="Close project brief"
          onClick={onClose}
        >
          <X size={22} />
        </button>
        <span>A LITTLE CONTEXT GOES A LONG WAY.</span>
        <h2>{done ? "That’s a good start." : "What’s on your mind?"}</h2>
        {done ? (
          <div className="fg-brief-ready">
            <p>
              Your project brief is ready to keep. Take it into your next
              conversation.
            </p>
            <button onClick={download}>
              <Download size={18} />
              Download your brief
            </button>
            <button onClick={() => setDone(false)}>Keep working on it</button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
          >
            <label>
              Your name
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="A name to start with"
              />
            </label>
            <div className="fg-form-row">
              <label>
                The focus
                <select value={type} onChange={(e) => setType(e.target.value)}>
                  {[
                    "Identity & digital",
                    "Brand identity",
                    "A new website",
                    "Something else",
                  ].map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </label>
              <label>
                When are you thinking?
                <select
                  value={timing}
                  onChange={(e) => setTiming(e.target.value)}
                >
                  {["In the next 3 months", "This year", "Just exploring"].map(
                    (t) => (
                      <option key={t}>{t}</option>
                    ),
                  )}
                </select>
              </label>
            </div>
            <label>
              A few words about the idea
              <textarea
                required
                rows={4}
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder="What are you making, and where do you want it to go?"
              />
            </label>
            <button type="submit">
              Build a brief <ArrowRight size={18} />
            </button>
            <small>
              A simple starting point. Keep a copy for your next conversation.
            </small>
          </form>
        )}
      </section>
    </div>
  );
}
