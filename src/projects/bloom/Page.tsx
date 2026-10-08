import { useState } from "react";
import {
  Sidebar,
  Topbar,
  Greeting,
  GrowthBanner,
  ProgressStats,
  Courses,
  Activity,
  LearningPath,
  Lesson,
  courses,
} from "./components";
import "./styles.css";
export default function Page() {
  const [query, setQuery] = useState("");
  const [lesson, setLesson] = useState<(typeof courses)[number] | null>(null);
  const [completed, setCompleted] = useState(0);
  return (
    <div className="bloom" id="bloom-top">
      <Sidebar />
      <div className="bloom-workspace-main">
        <Topbar query={query} onSearch={setQuery} />
        <main className="bloom-main">
          <Greeting />
          <div className="bloom-main-grid">
            <div className="bloom-main-column">
              <GrowthBanner onContinue={() => setLesson(courses[0])} />
              <ProgressStats completed={completed} />
              <Courses query={query} onOpen={setLesson} />
              <LearningPath onContinue={() => setLesson(courses[0])} />
              <p className="bloom-footer-note">
                A little progress is still progress. You’re doing beautifully.
              </p>
            </div>
            <Activity />
          </div>
        </main>
      </div>
      {lesson && (
        <Lesson
          course={lesson}
          onClose={() => setLesson(null)}
          onComplete={() => setCompleted(completed + 1)}
        />
      )}
    </div>
  );
}
