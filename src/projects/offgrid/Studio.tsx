import { ArrowRight } from "lucide-react";
const principles = [
  { index: "01", text: "Start with a better question." },
  { index: "02", text: "Keep the idea in the work." },
  { index: "03", text: "Make room for the unexpected." },
  { index: "04", text: "Finish what matters." },
];
export function Studio({ onBrief }: { onBrief: () => void }) {
  return (
    <section className="fg-studio" id="studio">
      <span>
        A SMALL STUDIO.
        <br />
        NO SMALL THINKING.
      </span>
      <div>
        <h2>
          Good work starts
          <br />
          with a little friction.
        </h2>
        <p>
          The question that makes you pause. The detail you can’t quite place.
          The idea that opens another door. We make identities and digital
          experiences that give ambitious people a clear, unmistakable presence.
        </p>
        <p>
          Strategy with substance. Design with a pulse. A collaborative process
          that leaves room for the unexpected.
        </p>
        <button onClick={onBrief}>
          Let’s make something stick.{" "}
          <ArrowRight size={22} aria-hidden="true" />
        </button>
      </div>
      <ol className="fg-principles" aria-label="How we work">
        {principles.map((p) => (
          <li key={p.index}>
            <span>{p.index}</span>
            <p>{p.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
