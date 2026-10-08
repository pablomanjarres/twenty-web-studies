export const rallyImage = `${import.meta.env.BASE_URL}images/sprinto/rally-v2.png`;
export const courts = [
  { name: "Court 01", kind: "Outdoor · panoramic", price: 32 },
  { name: "Court 02", kind: "Outdoor · panoramic", price: 32 },
  { name: "Court 03", kind: "Covered · all-weather", price: 38 },
  { name: "Court 04", kind: "Covered · all-weather", price: 38 },
];
export const days = [
  { day: "Mon", date: "12" },
  { day: "Tue", date: "13" },
  { day: "Wed", date: "14" },
  { day: "Thu", date: "15" },
  { day: "Fri", date: "16" },
];
export const times = [
  "08:00",
  "10:00",
  "12:00",
  "14:00",
  "16:00",
  "18:00",
  "20:00",
];
export const isAvailable = (court: number, time: string, day: number) =>
  !((court + times.indexOf(time) + day) % 5 === 0);
export type BookingState = {
  day: number;
  court: number;
  time: string;
  duration: number;
};
export function normalizeBooking(booking: BookingState): BookingState {
  if (isAvailable(booking.court, booking.time, booking.day)) return booking;
  const time = times.find((candidate) =>
    isAvailable(booking.court, candidate, booking.day),
  )!;
  return { ...booking, time };
}
export const initialBooking = normalizeBooking({
  day: 0,
  court: 0,
  time: "18:00",
  duration: 90,
});
export const fixtures = [
  {
    date: "15 OCT",
    time: "19:00",
    name: "After-work social",
    level: "All levels",
    spaces: "8 places",
    format: "Mix-in doubles",
  },
  {
    date: "17 OCT",
    time: "10:00",
    name: "Saturday ladder",
    level: "Intermediate",
    spaces: "4 places",
    format: "Club competition",
  },
  {
    date: "18 OCT",
    time: "09:00",
    name: "First-time rally",
    level: "Beginners",
    spaces: "6 places",
    format: "Coach-led session",
  },
];
