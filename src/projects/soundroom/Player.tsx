import type { CSSProperties } from "react";
import { SaveTrack } from "./SaveTrack";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
} from "lucide-react";
import { Artwork } from "./Artwork";
import { time, type Track } from "./data";
export function Player({
  track,
  playing,
  position,
  duration,
  volume,
  saved,
  onPlay,
  onSeek,
  onVolume,
  onStep,
  onSave,
}: {
  track: Track;
  playing: boolean;
  position: number;
  duration: number;
  volume: number;
  saved: boolean;
  onPlay: () => void;
  onSeek: (n: number) => void;
  onVolume: (n: number) => void;
  onStep: (n: number) => void;
  onSave: () => void;
}) {
  return (
    <section className="sr3-player" aria-label="Music player">
      <div className="sr3-now-playing">
        <Artwork track={track} compact />
        <span>
          <strong>{track.title}</strong>
          <small>{track.artist}</small>
        </span>
        <SaveTrack
          title={track.title}
          saved={saved}
          onSave={onSave}
          size={16}
        />
      </div>
      <div className="sr3-player-center">
        <div className="sr3-player-buttons">
          <button aria-label="Previous track" onClick={() => onStep(-1)}>
            <SkipBack size={16} fill="currentColor" />
          </button>
          <button
            className="sr3-player-play"
            aria-label={playing ? "Pause track" : "Play track"}
            onClick={onPlay}
          >
            {playing ? (
              <Pause size={18} fill="currentColor" />
            ) : (
              <Play size={18} fill="currentColor" />
            )}
          </button>
          <button aria-label="Next track" onClick={() => onStep(1)}>
            <SkipForward size={16} fill="currentColor" />
          </button>
        </div>
        <div className="sr3-seek">
          <span>{time(position)}</span>
          <input
            aria-label="Playback position"
            type="range"
            min={0}
            max={duration}
            step={0.1}
            value={Math.min(position, duration)}
            style={
              {
                "--fill": `${Math.min(position / duration, 1) * 100}%`,
              } as CSSProperties
            }
            onChange={(e) => onSeek(Number(e.target.value))}
          />
          <span>{time(duration)}</span>
        </div>
      </div>
      <div className="sr3-volume">
        <button
          aria-label={volume ? "Mute" : "Unmute"}
          onClick={() => onVolume(volume ? 0 : 0.45)}
        >
          {volume ? <Volume2 size={17} /> : <VolumeX size={17} />}
        </button>
        <input
          aria-label="Volume"
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          style={{ "--fill": `${volume * 100}%` } as CSSProperties}
          onChange={(e) => onVolume(Number(e.target.value))}
        />
      </div>
    </section>
  );
}
