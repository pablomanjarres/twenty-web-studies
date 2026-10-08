import { useState } from "react";
import { ArrowUpRight, Bookmark } from "lucide-react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
import { image } from "./data";

export function Header() {
  return (
    <header className="monograph-header">
      <a href="#monograph-top" aria-label="Monograph home">
        <BrandLogo brand={brand} />
      </a>
      <span>Independent perspectives on art & culture</span>
      <a className="monograph-issue-link" href="#monograph-issue">
        Explore the issue <ArrowUpRight size={16} />
      </a>
    </header>
  );
}

export function Masthead() {
  return (
    <div className="monograph-masthead">
      <div className="monograph-dateline">
        <span>Volume 08 / Autumn 2026</span>
        <span>London, and everywhere</span>
      </div>
      <h1>monograph</h1>
      <nav aria-label="Magazine sections">
        <a href="#monograph-stories">Art & artists</a>
        <a href="#monograph-stories">Spaces</a>
        <a href="#monograph-feature">Conversations</a>
        <a href="#monograph-issue">The printed issue</a>
        <span>A different way of seeing.</span>
      </nav>
    </div>
  );
}

export function CoverStory() {
  const [saved, setSaved] = useState(false);
  return (
    <section className="monograph-cover" id="monograph-feature">
      <div className="monograph-cover-image">
        <img
          src={image("exhibition")}
          alt="Orange mixed-media artwork beneath a gallery skylight"
        />
        <span className="monograph-caption">
          Robert Rauschenberg, in the gallery.
        </span>
        <div className="monograph-image-index">
          In focus <span>↗</span>
        </div>
      </div>
      <div className="monograph-cover-copy">
        <div className="monograph-story-meta">
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
        <a href="#monograph-stories" className="monograph-text-link">
          Read the story <ArrowUpRight size={25} />
        </a>
        <div className="monograph-byline">
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
        <p className="monograph-save-status" aria-live="polite">
          {saved ? "Saved to your reading list for this visit." : ""}
        </p>
        <div className="monograph-editor-note">
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
