import { Heart, Bookmark } from "lucide-react";
export function SaveTrack({
  title,
  saved,
  onSave,
  className,
  size = 16,
  bookmark = false,
}: {
  title: string;
  saved: boolean;
  onSave: () => void;
  className?: string;
  size?: number;
  bookmark?: boolean;
}) {
  const Icon = bookmark ? Bookmark : Heart;
  return (
    <button
      className={className}
      aria-label={`${saved ? "Remove" : "Save"} ${title}`}
      aria-pressed={saved}
      onClick={onSave}
    >
      <Icon size={size} fill={saved ? "currentColor" : "none"} />
    </button>
  );
}
