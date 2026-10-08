import { SaveTrack } from "./SaveTrack";
import { Play, Pause, ArrowUpRight } from "lucide-react";
import type { Track } from "./data";
import { time } from "./data";
export function Featured({
  track,
  playing,
  saved,
  onPlay,
  onSave,
}: {
  track: Track;
  playing: boolean;
  saved: boolean;
  onPlay: () => void;
  onSave: () => void;
}) {
  return (
    <section className="sr3-featured">
      <img
        src={`${import.meta.env.BASE_URL}images/soundroom/studio-v3.webp`}
        alt="Modular synthesizer and headphones in a warmly lit recording studio"
      />
      <div className="sr3-featured-copy">
        <span>ROOM EDITIONS / FEATURED SOUND</span>
        <p>{track.artist}</p>
        <h1>{track.title}</h1>
        <div>
          <button
            className="sr3-featured-play"
            onClick={onPlay}
            aria-label={
              playing ? "Pause featured track" : "Play featured track"
            }
          >
            {playing ? (
              <Pause size={16} fill="currentColor" />
            ) : (
              <Play size={16} fill="currentColor" />
            )}
            {playing ? "Pause" : "Listen"}
          </button>
          <SaveTrack
            title={track.title}
            saved={saved}
            onSave={onSave}
            size={17}
            className="sr3-featured-save"
            bookmark
          />
          <small>Ambient sketch · {time(track.duration)}</small>
        </div>
      </div>
      <span className="sr3-featured-corner">
        RECORDED FOR
        <br />A QUIETER MOMENT
        <ArrowUpRight size={15} />
      </span>
    </section>
  );
}
