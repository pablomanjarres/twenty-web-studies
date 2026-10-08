import { useEffect, useState } from "react";
import { tracks, rooms } from "./data";
import { Navigation, type MusicView } from "./Navigation";
import { Header } from "./Header";
import { Featured } from "./Featured";
import { TrackList } from "./TrackList";
import { Rooms } from "./Rooms";
import { Discovery } from "./Discovery";
import { Player } from "./Player";
import { AudioEngine } from "./AudioEngine";
import { usePlayback } from "./usePlayback";
import "./styles.css";
export default function Page() {
  const [selected, setSelected] = useState(1);
  const [saved, setSaved] = useState<number[]>([3]);
  const [recent, setRecent] = useState<number[]>([1]);
  const [view, setView] = useState<MusicView>("discover");
  const [query, setQuery] = useState("");
  const [mood, setMood] = useState("All");
  const [room, setRoom] = useState("All");
  const [autoplay, setAutoplay] = useState<number | null>(null);
  const playback = usePlayback(selected);
  const track = tracks.find((t) => t.id === selected)!;
  useEffect(() => {
    if (autoplay === selected) {
      void playback.toggle();
      setAutoplay(null);
    }
  }, [autoplay, selected]);
  function play(id: number) {
    setRecent((r) => [id, ...r.filter((n) => n !== id)].slice(0, 5));
    if (id === selected) void playback.toggle();
    else {
      setSelected(id);
      setAutoplay(id);
    }
  }
  function save(id: number) {
    setSaved((s) => (s.includes(id) ? s.filter((n) => n !== id) : [...s, id]));
  }
  function changeView(value: MusicView) {
    setView(value);
    setQuery("");
    setMood("All");
    setRoom("All");
  }
  const base =
    view === "collection"
      ? tracks.filter((t) => saved.includes(t.id))
      : view === "recent"
        ? recent.map((id) => tracks.find((t) => t.id === id)!)
        : tracks;
  const activeRoom = rooms.find((r) => r.name === room);
  const shown = base.filter(
    (t) =>
      `${t.title} ${t.artist}`.toLowerCase().includes(query.toLowerCase()) &&
      (mood === "All" || t.mood.toLowerCase().includes(mood.toLowerCase())) &&
      (!activeRoom || activeRoom.tracks.includes(t.id)),
  );
  function chooseRoom(value: string) {
    setRoom(value);
    setMood("All");
    setView("discover");
    setQuery("");
  }
  return (
    <main className="soundroom-v3">
      <Navigation view={view} onView={changeView} saved={saved.length} />
      <div className="sr3-app">
        <div className="sr3-content">
          <Header
            view={view}
            onView={changeView}
            query={query}
            onQuery={setQuery}
          />
          <Featured
            track={track}
            playing={playback.playing}
            saved={saved.includes(selected)}
            onPlay={() => play(selected)}
            onSave={() => save(selected)}
          />
          <TrackList
            tracks={shown}
            view={view}
            selected={selected}
            playing={playback.playing}
            saved={saved}
            onPlay={play}
            onSave={save}
          />
          <Rooms room={room} onRoom={chooseRoom} />
          <p className="sr3-status" role="status">
            {playback.message ||
              `${playback.playing ? "Playing" : "Selected"}: ${track.title} · ${track.artist}`}
          </p>
        </div>
        <Discovery
          track={track}
          selected={selected}
          playing={playback.playing}
          saved={saved}
          mood={mood}
          onMood={(value) => {
            setMood(value);
            setRoom("All");
          }}
          onPlay={play}
          onSave={save}
        />
        <Player
          track={track}
          playing={playback.playing}
          position={playback.position}
          duration={track.duration}
          volume={playback.volume}
          saved={saved.includes(selected)}
          onPlay={() => play(selected)}
          onSeek={playback.seek}
          onVolume={playback.setVolume}
          onStep={(step) =>
            play(((selected - 1 + step + tracks.length) % tracks.length) + 1)
          }
          onSave={() => save(selected)}
        />
        <AudioEngine
          track={track}
          audio={playback.audio}
          onPlaying={playback.setPlaying}
          onPosition={playback.setPosition}
        />
      </div>
    </main>
  );
}
