import { useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import { CourseIllustration } from "./illustrations";
import { courses } from "./data";

export function CourseCard({
  course,
  onOpen,
}: {
  course: (typeof courses)[number];
  onOpen: () => void;
}) {
  return (
    <article className="bloom-course">
      <div className="bloom-course-art">
        <CourseIllustration kind={course.title} />
        <span>{course.category}</span>
      </div>
      <div className="bloom-course-content">
        <h3>{course.title}</h3>
        <p>{course.teacher}</p>
        <div className="bloom-course-progress">
          <span>
            <i style={{ width: (course.done / course.lessons) * 100 + "%" }} />
          </span>
          <small>{Math.round((course.done / course.lessons) * 100)}%</small>
        </div>
        <div className="bloom-course-details">
          <span>
            {course.done} of {course.lessons} lessons
          </span>
          <button onClick={onOpen} aria-label={"Continue " + course.title}>
            <Play size={12} fill="currentColor" />
          </button>
        </div>
      </div>
    </article>
  );
}

export function Courses({
  query,
  onOpen,
}: {
  query: string;
  onOpen: (course: (typeof courses)[number]) => void;
}) {
  const [filter, setFilter] = useState("All courses");
  const filtered = courses.filter(
    (c) =>
      (filter === "All courses" || c.category === filter) &&
      c.title.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <section className="bloom-courses" id="bloom-courses">
      <div className="bloom-section-heading">
        <h2>Pick up where you left off</h2>
        <a href="#bloom-path">
          Your learning path <ArrowUpRight size={13} />
        </a>
      </div>
      <div className="bloom-course-tabs" aria-label="Course categories">
        {["All courses", "Design", "Web design"].map((item) => (
          <button
            key={item}
            aria-pressed={filter === item}
            className={filter === item ? "active" : ""}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="bloom-course-grid">
        {filtered.map((course) => (
          <CourseCard
            key={course.title}
            course={course}
            onOpen={() => onOpen(course)}
          />
        ))}
      </div>
      {!filtered.length && (
        <p className="bloom-empty">
          No courses match that search. Try “design” or clear your search.
        </p>
      )}
    </section>
  );
}
