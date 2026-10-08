import { ArrowUpRight, ListMusic, Play } from "lucide-react";
import { Artwork } from "./Artwork";
import { TrackRow } from "./TrackRow";
import { tracks, moods, type Track } from "./data";
export function Discovery({
  track,
  selected,
  playing,
  saved,
  mood,
  onMood,
  onPlay,
  onSave,
}: {
  track: Track;
  selected: number;
  playing: boolean;
  saved: number[];
  mood: string;
  onMood: (mood: string) => void;
  onPlay: (id: number) => void;
  onSave: (id: number) => void;
}) {
  const makers = Array.from(new Map(tracks.map((t) => [t.artist, t])).values());
  return (
    <aside className="sr3-discovery">
      <div className="sr3-discovery-heading">
        <span>DISCOVERY DESK</span>
        <i>05</i>
      </div>
      <section className="sr3-moods">
        <h2>Follow a feeling.</h2>
        <div>
          {moods.map((m) => (
            <button key={m} aria-pressed={mood === m} onClick={() => onMood(m)}>
              {m}
            </button>
          ))}
        </div>
      </section>
      <section className="sr3-makers">
        <header>
          <h2>Meet the sounds</h2>
          <ArrowUpRight size={14} />
        </header>
        {makers.map((t) => (
          <button
            key={t.artist}
            onClick={() => onPlay(t.id)}
            aria-label={`Listen to ${t.artist}`}
          >
            <Artwork track={t} compact />
            <span>
              {t.artist}
              <small>{t.mood.split(" / ")[1]}</small>
            </span>
            <Play size={11} />
          </button>
        ))}
      </section>
      <section className="sr3-next">
        <header>
          <h2>
            <ListMusic size={15} />
            On the list
          </h2>
          <span>05</span>
        </header>
        {tracks.slice(0, 3).map((t, i) => (
          <TrackRow
            key={t.id}
            track={t}
            index={i}
            selected={selected === t.id}
            playing={playing}
            saved={saved.includes(t.id)}
            onPlay={() => onPlay(t.id)}
            onSave={() => onSave(t.id)}
            compact
          />
        ))}
      </section>
      <section className="sr3-current-note">
        <span>NOW IN YOUR ROOM</span>
        <div>
          <Artwork track={track} compact />
          <p>
            <strong>{track.title}</strong>
            <small>{track.artist}</small>
          </p>
        </div>
        <p>A short ambient sketch. A good reason to slow the scroll.</p>
      </section>
    </aside>
  );
}
