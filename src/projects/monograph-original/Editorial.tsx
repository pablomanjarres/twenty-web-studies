import { useState } from "react";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
import { image, stories } from "./data";

export function StoryCard({ story }: { story: (typeof stories)[number] }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <article className="monograph-original-story">
      <a href="#monograph-original-issue">
        <img src={image(story.image)} alt={story.title} />
      </a>
      <div className="monograph-original-story-meta">
        <span>{story.subject}</span>
        <span>{story.time}</span>
      </div>
      <h3>{story.title}</h3>
      <button
        className="monograph-original-story-more"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        {story.by}
        {expanded ? <Minus size={17} /> : <Plus size={17} />}
      </button>
      {expanded && (
        <p className="monograph-original-story-excerpt">
          A closer look at the materials, spaces, and small decisions that
          change the way we experience art. Find the full conversation in Volume
          08.
        </p>
      )}
    </article>
  );
}

export function Stories() {
  const [filter, setFilter] = useState("All stories");
  return (
    <section
      className="monograph-original-stories"
      id="monograph-original-stories"
    >
      <div className="monograph-original-section-title">
        <h2>The latest perspectives</h2>
        <div className="monograph-original-filter" aria-label="Filter stories">
          {["All stories", "Art", "Spaces"].map((item) => (
            <button
              key={item}
              className={filter === item ? "active" : ""}
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="monograph-original-story-grid">
        {stories
          .filter((s) => filter === "All stories" || s.subject === filter)
          .map((story) => (
            <StoryCard key={story.title} story={story} />
          ))}
      </div>
    </section>
  );
}

export function PrintedIssue() {
  return (
    <section
      className="monograph-original-printed"
      id="monograph-original-issue"
    >
      <div className="monograph-original-book">
        <div className="monograph-original-book-cover">
          <span>monograph</span>
          <img
            src={image("gallery")}
            alt="A classical painting of a woman carrying a vessel"
          />
          <small>Volume 08 — The art of looking</small>
        </div>
      </div>
      <div>
        <span className="monograph-original-issue-kicker">Made to be kept</span>
        <h2>
          More than a screen.
          <br />A slower kind of story.
        </h2>
        <p>
          160 pages of ideas worth sitting with. Artist conversations, visual
          essays, and new perspectives, printed beautifully on uncoated paper.
        </p>
        <a
          className="monograph-original-paper-button"
          href="#monograph-original-stories"
        >
          Discover Volume 08 <ArrowUpRight size={20} />
        </a>
        <small>Autumn 2026 / A journal for the curious</small>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="monograph-original-footer">
      <BrandLogo brand={brand} />
      <p>Look closer. Stay curious.</p>
      <a href="#monograph-original-top">Back to the beginning ↑</a>
      <small>© 2026 Monograph Journal</small>
    </footer>
  );
}
