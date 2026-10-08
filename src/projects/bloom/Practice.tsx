import { useState } from "react";
import { Check, ArrowRight, X } from "lucide-react";
import { useDialog } from "../../shared/useDialog";
import type { Lesson } from "./data";
const choices = [
  { name: "Butter yellow", color: "#e5d898" },
  { name: "Deep leaf", color: "#314d39" },
  { name: "Soft peach", color: "#f1c5a8" },
];
export function Practice({
  lesson,
  onClose,
  onComplete,
}: {
  lesson: Lesson;
  onClose: () => void;
  onComplete: () => void;
}) {
  const [choice, setChoice] = useState<number | null>(null);
  const ref = useDialog<HTMLDivElement>(onClose);
  const isColor = lesson.id === 2;
  const correct = isColor
    ? choice === 1
    : lesson.id === 3
      ? choice === 0
      : choice !== null;
  return (
    <div className="bv-overlay" onClick={onClose}>
      <section
        className="bv-practice-dialog"
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label={`${lesson.title} practice`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="bv-dialog-close"
          aria-label="Close practice"
          onClick={onClose}
        >
          <X size={20} />
        </button>
        <span className="bv-detail-kicker">
          CREATIVE PRACTICE · {lesson.duration}
        </span>
        <h2>{lesson.title}</h2>
        <p>
          {isColor
            ? "This invitation should feel warm and be easy to read. Which text color makes the message clearest?"
            : lesson.id === 3
              ? "Which arrangement gives the words and shape a little room to breathe?"
              : "What would you like to bring into your next piece of work?"}
        </p>
        {isColor ? (
          <>
            <div
              className="bv-invitation"
              style={{
                color: choice === null ? "#f1c5a8" : choices[choice].color,
              }}
            >
              <i>YOU'RE INVITED</i>
              <strong>
                A little
                <br />
                room to grow.
              </strong>
              <span>A creative morning · Sunday, 10 am</span>
              <div className="bv-invitation-petal" />
            </div>
            <div className="bv-color-options">
              {choices.map((c, i) => (
                <button
                  key={c.name}
                  aria-pressed={choice === i}
                  onClick={() => setChoice(i)}
                >
                  <i style={{ background: c.color }} />
                  {c.name}
                  {choice === i && <Check size={14} />}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="bv-notice-options">
            {[
              lesson.id === 3
                ? "More space, clear hierarchy"
                : "Something with a surprising shape",
              lesson.id === 3
                ? "Every element close together"
                : "A color that feels like a place",
              lesson.id === 3
                ? "No spacing between lines"
                : "A letter with its own personality",
            ].map((v, i) => (
              <button
                key={v}
                aria-pressed={choice === i}
                onClick={() => setChoice(i)}
              >
                {v}
                {choice === i && <Check size={15} />}
              </button>
            ))}
          </div>
        )}
        <p className="bv-feedback" role="status">
          {choice === null
            ? "Take a moment. Try a few possibilities."
            : correct
              ? "That’s a useful little discovery. Keep it growing."
              : isColor
                ? "Soft colors can lose their voice here. Try a deeper tone."
                : "Try the arrangement with a little more breathing room."}
        </p>
        <button
          className="bv-complete"
          disabled={!correct}
          onClick={onComplete}
        >
          Complete this lesson <ArrowRight size={17} />
        </button>
      </section>
    </div>
  );
}
