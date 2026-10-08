import { SaveTrack } from "./SaveTrack";
import { Play, Pause } from "lucide-react";
import { Artwork } from "./Artwork";
import { time, type Track } from "./data";
export function TrackRow({
  track,
  index,
  selected,
  playing,
  saved,
  onPlay,
  onSave,
  compact = false,
}: {
  track: Track;
  index: number;
  selected: boolean;
  playing: boolean;
  saved: boolean;
  onPlay: () => void;
  onSave: () => void;
  compact?: boolean;
}) {
  return (
    <div
      className={`sr3-track-row ${selected ? "is-selected" : ""} ${compact ? "is-compact" : ""}`}
    >
      <button
        className="sr3-track-play"
        aria-label={`${selected && playing ? "Pause" : "Play"} ${track.title}`}
        onClick={onPlay}
      >
        <span className="sr3-track-number">
          {selected && playing ? (
            <span className="sr3-playing-bars">
              <i />
              <i />
              <i />
            </span>
          ) : (
            String(index + 1).padStart(2, "0")
          )}
        </span>
        <Artwork track={track} compact />
        <span className="sr3-track-title">
          <strong>{track.title}</strong>
          <small>{track.artist}</small>
        </span>
        {!compact && (
          <span className="sr3-track-mood">{track.mood.split(" / ")[0]}</span>
        )}
        <span className="sr3-track-duration">{time(track.duration)}</span>
        <span className="sr3-row-play-icon">
          {selected && playing ? (
            <Pause size={13} fill="currentColor" />
          ) : (
            <Play size={13} fill="currentColor" />
          )}
        </span>
      </button>
      <SaveTrack
        title={track.title}
        saved={saved}
        onSave={onSave}
        size={15}
        className="sr3-save"
      />
    </div>
  );
}
