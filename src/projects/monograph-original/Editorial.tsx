import { useId, useState } from "react";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
import { filters, image, stories } from "./data";

export function StoryCard({ story }: { story: (typeof stories)[number] }) {
  const [expanded, setExpanded] = useState(false);
  const excerptId = useId();
  return (
    <article className="monograph-original-story">
      <a
        className="monograph-original-story-image"
        href="#monograph-original-issue"
        tabIndex={-1}
        aria-hidden="true"
      >
        <img
          className={"detail" in story ? "is-detail" : undefined}
          src={image(story.image)}
          alt={story.alt}
          width={600}
          height={400}
          loading="lazy"
        />
      </a>
      <div className="monograph-original-story-meta">
        <span className="monograph-original-rubric">{story.subject}</span>
        <span>{story.time}</span>
      </div>
      <h3>
        <a href="#monograph-original-issue">{story.title}</a>
      </h3>
      <p className="monograph-original-story-deck">{story.by}</p>
      <button
        className="monograph-original-story-more"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        aria-controls={excerptId}
      >
        {expanded ? <Minus size={16} /> : <Plus size={16} />}
        {expanded ? "Close the excerpt" : "Read an excerpt"}
      </button>
      <p
        className="monograph-original-story-excerpt"
        id={excerptId}
        hidden={!expanded}
      >
        {story.excerpt}
      </p>
    </article>
  );
}

export function Stories() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <section
      className="monograph-original-stories"
      id="monograph-original-stories"
    >
      <div className="monograph-original-section-title">
        <h2>The latest perspectives</h2>
        <div
          className="monograph-original-filter"
          role="group"
          aria-label="Filter stories"
        >
          {filters.map((item, index) => (
            <span key={item}>
              <button
                className={filter === item ? "active" : ""}
                aria-pressed={filter === item}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
              {index < filters.length - 1 && <span aria-hidden="true">,</span>}
            </span>
          ))}
        </div>
      </div>
      <div className="monograph-original-story-grid">
        {stories
          .filter((s) => filter === filters[0] || s.subject === filter)
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
            width={460}
            height={520}
            loading="lazy"
            alt="A classical painting of a woman carrying a vessel"
          />
          <small>Volume 08 — The art of looking</small>
        </div>
      </div>
      <div>
        <span className="monograph-original-rubric">Made to be kept</span>
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
