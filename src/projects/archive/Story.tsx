import { ArrowUpRight } from "lucide-react";
import { image } from "./data";

export function Story() {
  return (
    <section className="archive-story" id="archive-story">
      <div className="archive-story-photo">
        <img
          src={image("wardrobe")}
          alt="A considered wardrobe with individual style"
        />
      </div>
      <div className="archive-story-copy">
        <span>The Archive perspective</span>
        <h2>
          Style isn’t
          <br />a season.
        </h2>
        <p>
          It’s a collection of things that feel like you.
          <br />
          The jacket you reach for. The shape you come back to.
          <br />
          Pieces with a life beyond their first wear.
        </p>
        <a href="#archive-shop">
          Find your next constant <ArrowUpRight size={21} />
        </a>
        <div className="archive-story-rule">
          <span>Less, but considered.</span>
          <span>Always, but individual.</span>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="archive-footer">
      <div>
        <span>Stay individual.</span>
        <a href="#archive-top">Back to the top ↑</a>
        <small>© 2026 Archive Studio</small>
      </div>
      <p>Archive</p>
      <div>
        <span>Selected with intent.</span>
        <span>London / Everywhere</span>
      </div>
    </footer>
  );
}
