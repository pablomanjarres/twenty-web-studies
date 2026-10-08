import { useState, type CSSProperties } from "react";
import { brand } from "./brand";
import { lessons, type Lesson } from "./data";
import { courses, courseFor, nextLesson } from "./courses";
import { LearningNavigation } from "./LearningNavigation";
import { LearningWelcome } from "./LearningWelcome";
import { CourseCards } from "./CourseCards";
import { LearningTimetable } from "./LearningTimetable";
import { CourseLessons } from "./CourseLessons";
import { LearningSide } from "./LearningSide";
import { LessonDialog, MilestoneDialog } from "./LearningDialog";
import { Practice } from "./Practice";
import "./styles.css";
const theme = {
  "--bv-ink": brand.colors[4].hex,
  "--bv-leaf": brand.colors[5].hex,
  "--bv-surface": brand.colors[3].hex,
  "--bv-lime": brand.colors[0].hex,
  "--bv-pink": brand.colors[1].hex,
} as CSSProperties;
export default function Page() {
  const [selected, setSelected] = useState(2);
  const [completed, setCompleted] = useState([1]);
  const [course, setCourse] = useState(1);
  const [tab, setTab] = useState("My learning");
  const [day, setDay] = useState(1);
  const [query, setQuery] = useState("");
  const [sheet, setSheet] = useState(false);
  const [practice, setPractice] = useState(false);
  const [milestone, setMilestone] = useState(false);
  const [message, setMessage] = useState("");
  const lesson = lessons.find((l) => l.id === selected)!;
  const currentCourse = courses.find((c) => c.id === course)!;
  function choose(l: Lesson) {
    setSelected(l.id);
    setCourse(courseFor(l).id);
    setSheet(true);
  }
  function start() {
    setSheet(false);
    setPractice(true);
  }
  function continueLearning() {
    const l = nextLesson(completed) || lessons[0];
    setSelected(l.id);
    setCourse(courseFor(l).id);
    setPractice(true);
  }
  function complete() {
    const done = completed.includes(selected)
      ? completed
      : [...completed, selected];
    setCompleted(done);
    setPractice(false);
    const next = nextLesson(done);
    setMessage(
      next
        ? `${lesson.title} is complete. ${next.title} is ready to start.`
        : "Both courses are complete. Your creative foundation is ready to celebrate.",
    );
    if (next) {
      setSelected(next.id);
      setCourse(courseFor(next).id);
    }
  }
  return (
    <main className="bloom-v2" style={theme}>
      <LearningNavigation
        tab={tab}
        onTab={setTab}
        query={query}
        onQuery={setQuery}
      />
      <div className="bv-dashboard-layout">
        <div className="bv-main-learning">
          {tab === "My learning" && (
            <LearningWelcome
              completed={completed}
              onContinue={continueLearning}
              onAchievement={() => setMilestone(true)}
            />
          )}{" "}
          {tab !== "Learning plan" && (
            <CourseCards
              selected={course}
              completed={completed}
              query={query}
              onSelect={setCourse}
            />
          )}{" "}
          {tab === "Courses" ? (
            <CourseLessons
              course={currentCourse}
              completed={completed}
              onSelect={choose}
            />
          ) : (
            <LearningTimetable
              completed={completed}
              day={day}
              onDay={setDay}
              onSelect={choose}
            />
          )}{" "}
          {tab === "My learning" && (
            <CourseLessons
              course={currentCourse}
              completed={completed}
              onSelect={choose}
            />
          )}
          <p className="bv-workspace-status" role="status">
            {message || "Your progress stays with every lesson you complete."}
          </p>
        </div>
        <LearningSide
          day={day}
          completed={completed}
          onDay={setDay}
          onSelect={choose}
        />
      </div>
      {sheet && (
        <LessonDialog
          lesson={lesson}
          completed={completed}
          onStart={start}
          onClose={() => setSheet(false)}
        />
      )}{" "}
      {practice && (
        <Practice
          key={selected}
          lesson={lesson}
          onComplete={complete}
          onClose={() => setPractice(false)}
        />
      )}{" "}
      {milestone && (
        <MilestoneDialog
          completed={completed}
          onClose={() => setMilestone(false)}
        />
      )}
    </main>
  );
}
