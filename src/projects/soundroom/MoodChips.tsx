import { moods } from "./data";
export function MoodChips({
  mood,
  onMood,
  className,
  label = "Filter by mood",
}: {
  mood: string;
  onMood: (mood: string) => void;
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={`sr3-mood-chips ${className ?? ""}`}
      role="group"
      aria-label={label}
    >
      {moods.map((m) => (
        <button key={m} aria-pressed={mood === m} onClick={() => onMood(m)}>
          {m}
        </button>
      ))}
    </div>
  );
}
