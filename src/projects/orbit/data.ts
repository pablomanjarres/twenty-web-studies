export type TaskStatus = "To do" | "In progress" | "Review" | "Done";
export type Task = {
  id: number;
  title: string;
  kind: string;
  status: TaskStatus;
  owner: string;
  avatar: number;
  due: string;
  start: number;
  days: number;
  hours: number;
  description: string;
  checks: string[];
  checked: number[];
  note: string;
};
export const avatar = (id: number) =>
  `${import.meta.env.BASE_URL}images/orbit/avatar-${id}.jpg`;
export const statuses: TaskStatus[] = [
  "To do",
  "In progress",
  "Review",
  "Done",
];
export const people = [
  { name: "Sam Rivera", avatar: 1, role: "Design" },
  { name: "Alex Chen", avatar: 2, role: "Research" },
  { name: "Jules Park", avatar: 3, role: "Content" },
];
export const stageColors: Record<string, string> = {
  Research: "#158F73",
  Design: "#6D4AF1",
  Content: "#E99B36",
  Review: "#D97769",
};
// Roadmap bars carry 14px labels, so each stage has a label colour that clears
// 4.5:1; Research uses a deeper green fill reserved for these labelled bars.
export const stageBars: Record<string, { background: string; color: string }> =
  {
    Design: { background: stageColors.Design, color: "#fff" },
    Research: { background: "#127a63", color: "#fff" },
    Content: { background: stageColors.Content, color: "#242629" },
    Review: { background: stageColors.Review, color: "#242629" },
  };
export const isCheckComplete = (task: Task, index: number) =>
  task.checked.includes(index);
export const progress = (task: Task) =>
  Math.round((task.checked.length / Math.max(1, task.checks.length)) * 100);
export const meetings = [
  {
    time: "10:00",
    title: "Opening story review",
    task: 1,
    people: [1, 3],
    duration: "25 min",
  },
  {
    time: "14:30",
    title: "Collection copy workshop",
    task: 3,
    people: [2, 3],
    duration: "40 min",
  },
  {
    time: "16:00",
    title: "Studio wrap-up",
    task: 5,
    people: [1, 2, 3],
    duration: "15 min",
  },
];
