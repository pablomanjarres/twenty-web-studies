import { Compass, Bookmark, Clock3, Headphones } from "lucide-react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
export type MusicView = "discover" | "collection" | "recent";
export function Navigation({
  view,
  onView,
  saved,
}: {
  view: MusicView;
  onView: (view: MusicView) => void;
  saved: number;
}) {
  const links = [
    { id: "discover", name: "Discover", icon: Compass },
    { id: "collection", name: "Your collection", icon: Bookmark },
    { id: "recent", name: "Recently played", icon: Clock3 },
  ] as const;
  return (
    <aside className="sr3-navigation">
      <button
        className="sr3-brand-button"
        onClick={() => onView("discover")}
        aria-label="Soundroom home"
      >
        <BrandLogo brand={brand} symbolOnly />
      </button>
      <nav>
        {links.map(({ id, name, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onView(id)}
            aria-current={view === id ? "page" : undefined}
            aria-pressed={view === id}
            aria-label={name}
            title={name}
          >
            <Icon size={21} />
            {id === "collection" && saved > 0 && <i />}
            <span>{name}</span>
          </button>
        ))}
      </nav>
      <div className="sr3-nav-bottom">
        <span>
          SR
          <br />—<br />
          01
        </span>
        <Headphones size={22} />
      </div>
    </aside>
  );
}
