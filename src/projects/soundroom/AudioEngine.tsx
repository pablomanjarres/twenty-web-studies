import type { RefObject } from "react";
import { media, type Track } from "./data";
export function AudioEngine({
  track,
  audio,
  onPlaying,
  onPosition,
}: {
  track: Track;
  audio: RefObject<HTMLAudioElement | null>;
  onPlaying: (playing: boolean) => void;
  onPosition: (position: number) => void;
}) {
  return (
    <audio
      key={track.id}
      ref={audio}
      src={media(track.slug)}
      preload="metadata"
      onPlay={() => onPlaying(true)}
      onPause={() => onPlaying(false)}
      onEnded={() => {
        onPlaying(false);
        onPosition(0);
      }}
      onTimeUpdate={(e) => onPosition(e.currentTarget.currentTime)}
    />
  );
}
