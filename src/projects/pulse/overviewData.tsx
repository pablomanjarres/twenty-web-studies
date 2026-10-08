import { asset, type Visit } from "./data";

export function dailyVisits(appointments: Visit[], day: number) {
  return appointments
    .filter((v) => v.day === day)
    .sort((a, b) => a.time - b.time);
}
export const visitMinutes = (visits: Visit[]) =>
  visits.reduce((sum, v) => sum + v.duration, 0);
export function careTime(minutes: number) {
  return `${Math.floor(minutes / 60)}h ${String(minutes % 60).padStart(2, "0")}m`;
}
const portraits: Record<number, string> = {
  1: "patient.jpg",
  2: "portrait-noah.jpg",
  3: "portrait-sophie.jpg",
  4: "portrait-james.jpg",
  5: "portrait-lily.jpg",
  6: "portrait-sophie.jpg",
  7: "portrait-james.jpg",
  8: "portrait-lily.jpg",
};
export function PatientPortrait({ visit }: { visit: Visit }) {
  return portraits[visit.id] ? (
    <img src={asset(portraits[visit.id])} alt="" />
  ) : (
    <i>{visit.initials}</i>
  );
}
