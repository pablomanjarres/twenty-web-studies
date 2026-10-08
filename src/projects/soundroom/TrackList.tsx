import { SlidersHorizontal } from "lucide-react";
import { TrackRow } from "./TrackRow";
import type { Track } from "./data";
import type { MusicView } from "./Navigation";
export function TrackList({
  tracks,
  view,
  selected,
  playing,
  saved,
  onPlay,
  onSave,
}: {
  tracks: Track[];
  view: MusicView;
  selected: number;
  playing: boolean;
  saved: number[];
  onPlay: (id: number) => void;
  onSave: (id: number) => void;
}) {
  return (
    <section className="sr3-track-list">
      <header>
        <div>
          <h2>
            {view === "collection"
              ? "Your collection"
              : view === "recent"
                ? "Recently played"
                : "In your rotation"}
          </h2>
          <span>
            {tracks.length} {tracks.length === 1 ? "sound" : "sounds"}, a little
            room to listen.
          </span>
        </div>
        <span className="sr3-track-list-meta">
          <SlidersHorizontal size={14} />
          ROOM EDITIONS
        </span>
      </header>
      {tracks.map((track, index) => (
        <TrackRow
          key={track.id}
          track={track}
          index={index}
          selected={selected === track.id}
          playing={playing}
          saved={saved.includes(track.id)}
          onPlay={() => onPlay(track.id)}
          onSave={() => onSave(track.id)}
        />
      ))}
      {!tracks.length && (
        <div className="sr3-empty">
          <h3>A little space for something new.</h3>
          <p>
            {view === "collection"
              ? "Save a sound with the heart to keep it in your collection."
              : "Try another title, artist, or mood."}
          </p>
        </div>
      )}
    </section>
  );
}
