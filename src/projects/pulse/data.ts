export type Visit = {
  id: number;
  patient: string;
  age: number;
  initials: string;
  purpose: string;
  doctor: string;
  time: number;
  duration: number;
  day: number;
  tone: string;
  status: string;
  note: string;
};
export const asset = (file: string) =>
  `${import.meta.env.BASE_URL}images/pulse/${file}`;
export const clinicians = [
  { id: "allen", name: "Dr. Maya Allen", role: "Family medicine" },
  { id: "chen", name: "Dr. Oliver Chen", role: "General practice" },
  { id: "reed", name: "Dr. Sofia Reed", role: "Women's health" },
];
export const days = [
  { short: "Mon", date: "05", name: "Monday" },
  { short: "Tue", date: "06", name: "Tuesday" },
  { short: "Wed", date: "07", name: "Wednesday" },
  { short: "Thu", date: "08", name: "Thursday" },
  { short: "Fri", date: "09", name: "Friday" },
];
export const timeLabel = (minute: number) =>
  `${String(Math.floor(minute / 60)).padStart(2, "0")}:${String(minute % 60).padStart(2, "0")}`;
export { visits } from "./visitFixtures";
