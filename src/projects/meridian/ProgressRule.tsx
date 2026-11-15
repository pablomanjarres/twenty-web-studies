export type ProgressTone = "active" | "review" | "done";

export function toneForStatus(status: string): ProgressTone {
  if (status === "Delivered") return "done";
  if (status === "At customs" || status === "Scheduled") return "review";
  return "active";
}

export function ProgressRule({
  value,
  tone = "active",
}: {
  value: number;
  tone?: ProgressTone;
}) {
  return (
    <span className="md-progress-rule" data-tone={tone} aria-hidden="true">
      <span style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
    </span>
  );
}
