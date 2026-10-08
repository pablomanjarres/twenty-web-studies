import { useEffect, useState } from "react";
import { ArrowRight, Play, Clock, Check, X, Plus } from "lucide-react";
import { CourseIllustration } from "./illustrations";
import { courses } from "./data";

export function LearningPath({ onContinue }: { onContinue: () => void }) {
  return (
    <section className="bloom-path" id="bloom-path">
      <div className="bloom-section-heading">
        <h2>A path to your next chapter</h2>
        <span>Creative foundations</span>
      </div>
      <div className="bloom-path-steps">
        <div className="complete">
          <span>
            <Check size={15} />
          </span>
          <div>
            <b>Find your visual voice</b>
            <small>Completed. Nicely done.</small>
          </div>
        </div>
        <div className="current">
          <span>
            <Play size={12} fill="currentColor" />
          </span>
          <div>
            <b>Make colour work for you</b>
            <small>Lesson 14 / 24 minutes</small>
          </div>
          <button onClick={onContinue}>
            Continue <ArrowRight size={13} />
          </button>
        </div>
        <div>
          <span>
            <Plus size={15} />
          </span>
          <div>
            <b>Bring it all together</b>
            <small>Your first personal project</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Lesson({
  course,
  onClose,
  onComplete,
}: {
  course: (typeof courses)[number];
  onClose: () => void;
  onComplete: () => void;
}) {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [onClose]);
  return (
    <div className="bloom-lesson-backdrop" onClick={onClose}>
      <section
        className="bloom-lesson"
        role="dialog"
        aria-modal="true"
        aria-labelledby="bloom-lesson-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="bloom-lesson-close"
          autoFocus
          onClick={onClose}
          aria-label="Close lesson"
        >
          <X size={20} />
        </button>
        <CourseIllustration kind={course.title} />
        <span>
          Lesson {course.done + 1} of {course.lessons}
        </span>
        <h2 id="bloom-lesson-title">
          {course.title === "Design foundations"
            ? "Make colour work for you"
            : course.title === "Web design, from scratch"
              ? "Build your first visual layout"
              : "Find the right type pairing"}
        </h2>
        <p>
          Choose a simple object around you. Explore three different ways to
          represent it, then notice what changes with each choice.
        </p>
        <div className="bloom-lesson-task">
          <Clock size={17} />
          <span>{course.duration} of focused practice</span>
        </div>
        <button
          className="bloom-complete-button"
          disabled={done}
          onClick={() => {
            setDone(true);
            onComplete();
          }}
        >
          {done ? (
            <>
              <Check size={17} />A little more progress. Well done.
            </>
          ) : (
            <>
              Mark practice complete <ArrowRight size={16} />
            </>
          )}
        </button>
      </section>
    </div>
  );
}
