import { ArrowUpRight } from "lucide-react";
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
          Let’s make something stick. <ArrowUpRight size={25} />
        </button>
      </div>
      <div className="fg-principles">
        {[
          "01 / Start with a better question.",
          "02 / Keep the idea in the work.",
          "03 / Make room for the unexpected.",
          "04 / Finish what matters.",
        ].map((s) => (
          <p key={s}>{s}</p>
        ))}
      </div>
    </section>
  );
}
