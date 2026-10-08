import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Artwork } from "./Artwork";
import { tracks, rooms } from "./data";
export function Rooms({
  room,
  onRoom,
}: {
  room: string;
  onRoom: (room: string) => void;
}) {
  return (
    <section className="sr3-rooms">
      <header>
        <h2>A room for every mood.</h2>
        <button onClick={() => onRoom("All")}>
          All rooms
          <ArrowRight size={14} />
        </button>
      </header>
      <div>
        {rooms.map((r) => (
          <button
            className={r.name === room ? "is-selected" : ""}
            key={r.name}
            onClick={() => onRoom(r.name)}
            aria-pressed={r.name === room}
          >
            <div className="sr3-room-art">
              <Artwork track={tracks.find((t) => t.id === r.tracks[0])!} />
              <span>{r.note}</span>
              <ArrowUpRight size={16} />
            </div>
            <strong>{r.name}</strong>
            <small>
              {r.tracks.length} room{" "}
              {r.tracks.length === 1 ? "edition" : "editions"}
            </small>
          </button>
        ))}
      </div>
    </section>
  );
}
