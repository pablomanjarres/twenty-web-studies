import { lessons, type Lesson } from "./data";
export type Course = {
  id: number;
  title: string;
  category: string;
  lessonIds: number[];
  color: string;
  art: number;
  description: string;
};
export const courses: Course[] = [
  {
    id: 1,
    title: "Design foundations",
    category: "DESIGN · LEVEL 01",
    lessonIds: [1, 2, 3],
    color: "#F3C4D7",
    art: 2,
    description:
      "Learn to notice, pair color and give your ideas room to breathe.",
  },
  {
    id: 2,
    title: "Visual storytelling",
    category: "DESIGN · LEVEL 02",
    lessonIds: [4, 5, 6],
    color: "#E2EDB6",
    art: 4,
    description:
      "Find a voice in typography and turn everyday observations into a brief.",
  },
];
export const courseLessons = (course: Course) =>
  lessons.filter((l) => course.lessonIds.includes(l.id));
export const isUnlocked = (lesson: Lesson, completed: number[]) =>
  lesson.prerequisites.every((id) => completed.includes(id));
export const nextLesson = (completed: number[]) =>
  lessons.find((l) => !completed.includes(l.id) && isUnlocked(l, completed));
export const courseFor = (lesson: Lesson) =>
  courses.find((c) => c.lessonIds.includes(lesson.id))!;
export const learningWeek = [
  { name: "Mon", date: 5 },
  { name: "Tue", date: 6 },
  { name: "Wed", date: 7 },
  { name: "Thu", date: 8 },
  { name: "Fri", date: 9 },
];
export const learningPlan = [
  { lesson: 1, day: 0, time: "09:00", top: 0 },
  { lesson: 2, day: 1, time: "10:00", top: 55 },
  { lesson: 3, day: 2, time: "09:30", top: 28 },
  { lesson: 4, day: 3, time: "11:00", top: 110 },
  { lesson: 5, day: 4, time: "09:00", top: 0 },
  { lesson: 6, day: 4, time: "11:00", top: 110 },
];
