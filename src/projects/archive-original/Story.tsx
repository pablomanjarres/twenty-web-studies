import { ArrowUpRight } from "lucide-react";
import { image } from "./data";

export function Story() {
  return (
    <section className="archive-original-story" id="archive-original-story">
      <div className="archive-original-story-photo">
        <img
          src={image("wardrobe")}
          alt="A considered wardrobe with individual style"
          loading="lazy"
        />
      </div>
      <div className="archive-original-story-copy">
        <span className="archive-original-label">The Archive perspective</span>
        <h2>
          Style isn’t
          <br />a season.
        </h2>
        <p>
          It’s a collection of things that feel like you. The jacket you reach
          for. The shape you come back to. Pieces with a life beyond their first
          wear.
        </p>
        <a
          href="#archive-original-shop"
          className="archive-original-arrow-link archive-original-label"
        >
          Find your next constant <ArrowUpRight size={21} aria-hidden="true" />
        </a>
        <div className="archive-original-story-rule archive-original-label">
          <span>Less, but considered.</span>
          <span>Always, but individual.</span>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="archive-original-footer">
      <div className="archive-original-label">
        <span>Stay individual.</span>
        <a href="#archive-original-top" className="archive-original-grow-link">
          Back to the top ↑
        </a>
        <small>© 2026 Archive Studio</small>
      </div>
      <p>Archive</p>
      <div className="archive-original-label">
        <span>Selected with intent.</span>
        <span>London / Everywhere</span>
      </div>
    </footer>
  );
}
