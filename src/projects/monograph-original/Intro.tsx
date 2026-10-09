import { useState } from "react";
import { ArrowUpRight, Bookmark } from "lucide-react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
import { image } from "./data";

export function Header() {
  return (
    <header className="monograph-original-header">
      <a href="#monograph-original-top" aria-label="Monograph home">
        <BrandLogo brand={brand} />
      </a>
      <span>Independent perspectives on art & culture</span>
      <a
        className="monograph-original-issue-link"
        href="#monograph-original-issue"
      >
        Explore the issue <ArrowUpRight size={16} />
      </a>
    </header>
  );
}

export function Masthead() {
  return (
    <div className="monograph-original-masthead">
      <div className="monograph-original-dateline">
        <span>Volume 08 / Autumn 2026</span>
        <span>London, and everywhere</span>
      </div>
      <h1>monograph</h1>
      <nav aria-label="Magazine sections">
        <a href="#monograph-original-stories">Art & artists</a>
        <a href="#monograph-original-stories">Spaces</a>
        <a href="#monograph-original-feature">Conversations</a>
        <a href="#monograph-original-issue">The printed issue</a>
        <span>A different way of seeing.</span>
      </nav>
    </div>
  );
}

export function CoverStory() {
  const [saved, setSaved] = useState(false);
  return (
    <section
      className="monograph-original-cover"
      id="monograph-original-feature"
    >
      <div className="monograph-original-cover-image">
        <img
          src={image("exhibition")}
          alt="Orange mixed-media artwork beneath a gallery skylight"
        />
        <span className="monograph-original-caption">
          Robert Rauschenberg, in the gallery.
        </span>
        <div className="monograph-original-image-index">
          In focus <span>↗</span>
        </div>
      </div>
      <div className="monograph-original-cover-copy">
        <div className="monograph-original-story-meta">
          <span>The visual essay</span>
          <span>10 min read</span>
        </div>
        <h2>
          A world
          <br />
          in fragments.
        </h2>
        <p>
          Collage, contradiction, and the beautiful possibility of seeing
          everything anew. Revisiting the restless world of Robert Rauschenberg.
        </p>
        <a
          href="#monograph-original-stories"
          className="monograph-original-text-link"
        >
          Read the story <ArrowUpRight size={25} />
        </a>
        <div className="monograph-original-byline">
          <span>
            Words by Eleanor Hayes
            <br />
            <small>Photography from the gallery</small>
          </span>
          <button
            aria-label={
              saved
                ? "Remove story from reading list"
                : "Save story to reading list"
            }
            aria-pressed={saved}
            onClick={() => setSaved(!saved)}
          >
            <Bookmark fill={saved ? "currentColor" : "none"} size={20} />
          </button>
        </div>
        <p className="monograph-original-save-status" aria-live="polite">
          {saved ? "Saved to your reading list for this visit." : ""}
        </p>
        <div className="monograph-original-editor-note">
          <span>A note from the editor</span>
          <p>
            “Art asks us to look again.
            <br />
            This issue is an invitation to do just that.”
          </p>
          <span>— Hannah, Editor in Chief</span>
        </div>
      </div>
    </section>
  );
}
