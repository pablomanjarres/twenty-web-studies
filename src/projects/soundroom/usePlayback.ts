import { useRef, useState, useEffect } from "react";
export function usePlayback(selected: number) {
  const [playing, setPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [volume, setVolume] = useState(0.45);
  const [message, setMessage] = useState("");
  const audio = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    setPosition(0);
    setPlaying(false);
    setMessage("");
    const player = audio.current;
    return () => player?.pause();
  }, [selected]);
  useEffect(() => {
    if (audio.current) audio.current.volume = volume;
  }, [volume, selected]);
  async function toggle() {
    const player = audio.current;
    if (!player) return;
    if (player.paused) {
      try {
        await player.play();
        setMessage("");
      } catch {
        setMessage("Playback could not start. Try again.");
      }
    } else player.pause();
  }
  function seek(n: number) {
    if (audio.current) {
      audio.current.currentTime = n;
      setPosition(n);
    }
  }
  return {
    audio,
    playing,
    position,
    volume,
    message,
    toggle,
    seek,
    setVolume,
    setPlaying,
    setPosition,
  };
}
