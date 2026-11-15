export type StatusTone = "ready" | "confirmed" | "new" | "complete";

const tones: Record<string, StatusTone> = {
  "Checked in": "ready",
  Ready: "ready",
  Confirmed: "confirmed",
  "New patient": "new",
  Complete: "complete",
};

export const statusTone = (status: string): StatusTone =>
  tones[status] ?? "confirmed";
