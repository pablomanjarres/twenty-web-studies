import type { CSSProperties } from "react";
import { ArrowUpRight, Check, Play } from "lucide-react";
import { Illustration } from "./Illustration";
import { courses, courseLessons, type Course } from "./courses";
export function CourseCards({
  selected,
  completed,
  query,
  onSelect,
}: {
  selected: number;
  completed: number[];
  query: string;
  onSelect: (id: number) => void;
}) {
  const shown = courses.filter((c) =>
    `${c.title} ${c.description}`.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <section className="bv-courses-section">
      <div className="bv-section-heading">
        <h2>
          Your courses <span>{courses.length}</span>
        </h2>
        <span>One small step at a time</span>
      </div>
      <div className="bv-course-cards">
        {shown.map((c) => (
          <CourseCard
            key={c.id}
            course={c}
            completed={completed}
            selected={selected === c.id}
            onSelect={() => onSelect(c.id)}
          />
        ))}
        {!shown.length && (
          <p className="bv-search-empty">
            No courses match “{query}”. Try design or storytelling.
          </p>
        )}
      </div>
    </section>
  );
}
function CourseCard({
  course,
  completed,
  selected,
  onSelect,
}: {
  course: Course;
  completed: number[];
  selected: boolean;
  onSelect: () => void;
}) {
  const list = courseLessons(course);
  const count = list.filter((l) => completed.includes(l.id)).length;
  const percent = Math.round((count / list.length) * 100);
  return (
    <button
      className="bv-course-card"
      aria-pressed={selected}
      onClick={onSelect}
      style={{ "--course-color": course.color } as CSSProperties}
    >
      <div className="bv-course-card-top">
        <span className="bv-course-symbol">
          <Illustration variant={course.art} />
        </span>
        <div>
          <small>{course.category}</small>
          <h3>{course.title}</h3>
        </div>
        <ArrowUpRight size={18} />
      </div>
      <div className="bv-course-progress-label">
        <span>Your progress</span>
        <strong>{percent}%</strong>
      </div>
      <div className="bv-course-progress">
        <i style={{ width: `${percent}%` }} />
      </div>
      <div className="bv-course-card-foot">
        <span>
          {count === list.length ? <Check size={12} /> : <Play size={11} />}{" "}
          {count} of {list.length} lessons complete
        </span>
        <span>{list.reduce((n, l) => n + parseInt(l.duration), 0)} min</span>
      </div>
    </button>
  );
}
