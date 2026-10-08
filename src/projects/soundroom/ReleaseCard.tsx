import { Check, Heart, Plus } from "lucide-react";
import { image, releases } from "./data";

export function ReleaseCard({
  release,
  saved,
  queued,
  onSave,
  onQueue,
}: {
  release: (typeof releases)[number];
  saved: boolean;
  queued: boolean;
  onSave: () => void;
  onQueue: () => void;
}) {
  return (
    <article className="sr-release">
      <div className={`sr-cover ${release.className}`}>
        <img src={image(release.image)} alt={`Artwork for ${release.title}`} />
        <span className="sr-cover-title">{release.title}</span>
        <button
          onClick={onQueue}
          aria-label={`Queue ${release.title}`}
          className="sr-cover-queue"
        >
          {queued ? <Check size={20} /> : <Plus size={20} />}
        </button>
      </div>
      <div className="sr-release-title">
        <h3>{release.title}</h3>
        <button
          onClick={onSave}
          aria-pressed={saved}
          aria-label={`${saved ? "Unsave" : "Save"} ${release.title}`}
        >
          <Heart size={16} fill={saved ? "currentColor" : "none"} />
        </button>
      </div>
      <p>{release.artist}</p>
      <span>{release.genre}</span>
    </article>
  );
}
