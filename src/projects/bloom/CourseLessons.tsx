import { Check, Lock, ArrowUpRight, Clock } from "lucide-react";
import type { Lesson } from "./data";
import { courseLessons, isUnlocked, type Course } from "./courses";
export function CourseLessons({
  course,
  completed,
  onSelect,
}: {
  course: Course;
  completed: number[];
  onSelect: (lesson: Lesson) => void;
}) {
  return (
    <section className="bv-course-lessons">
      <div className="bv-section-heading">
        <div>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
        </div>
        <span>{course.lessonIds.length} lessons</span>
      </div>
      {courseLessons(course).map((l, i) => {
        const done = completed.includes(l.id);
        const unlocked = isUnlocked(l, completed);
        return (
          <button
            className="bv-lesson-row"
            key={l.id}
            onClick={() => onSelect(l)}
          >
            <span className={`bv-lesson-number ${done ? "is-done" : ""}`}>
              {done ? <Check size={17} /> : String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <small>{l.kind}</small>
              <strong>{l.title}</strong>
              <p>{l.task}</p>
            </div>
            <span className="bv-row-duration">
              <Clock size={12} />
              {l.duration}
            </span>
            <span className="bv-row-state">
              {done ? "Complete" : unlocked ? "Ready to start" : "Locked"}
            </span>
            {!unlocked && !done ? (
              <Lock size={15} />
            ) : (
              <ArrowUpRight size={17} />
            )}
          </button>
        );
      })}
    </section>
  );
}
