import type { ReactNode } from "react";
import { X, Lock, ArrowRight, Award, Check } from "lucide-react";
import { useDialog } from "../../shared/useDialog";
import { Illustration } from "./Illustration";
import { lessons, type Lesson } from "./data";
import { isUnlocked } from "./courses";
function Dialog({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: ReactNode;
}) {
  const ref = useDialog<HTMLDivElement>(onClose);
  return (
    <div className="bv-overlay" onClick={onClose}>
      <section
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="bv-course-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="bv-dialog-close"
          aria-label="Close lesson dialog"
          onClick={onClose}
        >
          <X size={20} />
        </button>
        {children}
      </section>
    </div>
  );
}
export function LessonDialog({
  lesson,
  completed,
  onStart,
  onClose,
}: {
  lesson: Lesson;
  completed: number[];
  onStart: () => void;
  onClose: () => void;
}) {
  const done = completed.includes(lesson.id);
  const unlocked = isUnlocked(lesson, completed);
  return (
    <Dialog title={lesson.title} onClose={onClose}>
      <div className="bv-dialog-art" style={{ background: lesson.color }}>
        <Illustration variant={lesson.id} />
      </div>
      <span className="bv-detail-kicker">
        {lesson.kind} · {lesson.duration}
      </span>
      <h2>{lesson.title}</h2>
      <p>{lesson.description}</p>
      <div className="bv-dialog-task">
        <strong>What you'll practice</strong>
        <p>{lesson.task}</p>
      </div>
      {!unlocked && !done && (
        <p className="bv-locked-note">
          <Lock size={15} />
          First complete{" "}
          {lesson.prerequisites
            .map((id) => lessons.find((l) => l.id === id)?.title)
            .join(", ")}
          .
        </p>
      )}
      <button
        className="bv-dialog-start"
        disabled={!unlocked && !done}
        onClick={onStart}
      >
        {done ? <Check size={16} /> : <ArrowRight size={16} />}{" "}
        {done ? "Practice again" : "Start this lesson"}
      </button>
    </Dialog>
  );
}
export function MilestoneDialog({
  completed,
  onClose,
}: {
  completed: number[];
  onClose: () => void;
}) {
  const done = completed.length === lessons.length;
  return (
    <Dialog title="Creative foundations milestone" onClose={onClose}>
      <div className="bv-milestone-art">
        <Award size={74} />
      </div>
      <span className="bv-detail-kicker">CREATIVE FOUNDATIONS</span>
      <h2>
        {done ? "A new foundation, earned." : "Every lesson brings you closer."}
      </h2>
      <p>
        {done
          ? "Jordan Lee has completed Design foundations and Visual storytelling, including all six creative practices."
          : `You have completed ${completed.length} of ${lessons.length} lessons. Finish both courses to celebrate your creative foundation.`}
      </p>
      <div className="bv-milestone-progress">
        <i style={{ width: `${(completed.length / lessons.length) * 100}%` }} />
      </div>
      <button className="bv-dialog-start" onClick={onClose}>
        Back to my learning <ArrowRight size={16} />
      </button>
    </Dialog>
  );
}
