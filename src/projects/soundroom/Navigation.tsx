import { Compass, Headphones, Library, ListMusic, Search } from "lucide-react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
import { releases } from "./data";

export function Sidebar({
  view,
  onView,
}: {
  view: string;
  onView: (value: string) => void;
}) {
  return (
    <aside className="sr-sidebar">
      <a href="#sr-main" className="sr-logo" aria-label="Soundroom discover">
        <BrandLogo brand={brand} />
      </a>
      <div className="sr-side-caption">Your listening space</div>
      <nav aria-label="Music navigation">
        {[
          { name: "Discover", Icon: Compass },
          { name: "Saved", Icon: Library },
        ].map(({ name, Icon }) => (
          <button
            key={name}
            onClick={() => onView(name)}
            aria-pressed={view === name}
          >
            <Icon size={18} />
            {name}
          </button>
        ))}
        <a href="#sr-tracks">
          <ListMusic size={18} /> On the radar
        </a>
      </nav>
      <div className="sr-collection">
        <span>Your shelves</span>
        <a href="#sr-releases">
          <span className="sr-shelf-dot" />
          Late night things
        </a>
        <a href="#sr-releases">
          <span className="sr-shelf-dot lilac" />
          Sunday mornings
        </a>
        <a href="#sr-releases">
          <span className="sr-shelf-dot pale" />
          For the long way home
        </a>
      </div>
      <div className="sr-side-bottom">
        <div className="sr-listener-avatar">L</div>
        <div>
          <strong>Lou’s room</strong>
          <span>Keep the good ones.</span>
        </div>
        <Headphones size={17} />
      </div>
    </aside>
  );
}

export function Topbar({
  query,
  onQuery,
}: {
  query: string;
  onQuery: (value: string) => void;
}) {
  return (
    <header className="sr-topbar">
      <span>Good evening, Lou.</span>
      <label className="sr-search">
        <Search size={15} />
        <input
          type="search"
          placeholder="Find a record or artist"
          aria-label="Search releases"
          value={query}
          onChange={(event) => onQuery(event.target.value)}
        />
      </label>
      <span className="sr-date">Thursday, 8 October</span>
    </header>
  );
}
