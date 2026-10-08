import { Plus } from "lucide-react";
import { image, releases } from "./data";

export function TrackList({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (title: string) => void;
}) {
  return (
    <section className="sr-tracks" id="sr-tracks">
      <div className="sr-section-title">
        <h2>On the radar</h2>
        <span>A few worth keeping.</span>
      </div>
      {releases.map((release, index) => (
        <button
          className={`sr-track ${selected === release.title ? "sr-track-selected" : ""}`}
          key={release.title}
          onClick={() => onSelect(release.title)}
          aria-label={`Select ${release.title} for your queue`}
        >
          <span className="sr-track-number">
            {String(index + 1).padStart(2, "0")}
          </span>
          <img src={image(release.image)} alt="" />
          <span className="sr-track-name">
            <strong>{release.title}</strong>
            <span>{release.artist}</span>
          </span>
          <span className="sr-track-genre">{release.genre}</span>
          <span>{release.duration}</span>
          <Plus size={15} />
        </button>
      ))}
    </section>
  );
}
