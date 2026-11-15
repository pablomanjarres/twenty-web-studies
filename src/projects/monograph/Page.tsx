import { useState } from "react";
import { stories, issues, type Story } from "./data";
import { Rail } from "./Rail";
import { StoryWall } from "./StoryWall";
import { ReadingPanel } from "./ReadingPanel";
import { VisualEssay } from "./VisualEssay";
import { ExhibitionArchive } from "./ExhibitionArchive";
import { PrintedIssue } from "./PrintedIssue";
import { ClosingIndex } from "./ClosingIndex";
import "./styles.css";
export default function Page() {
  const [issue, setIssue] = useState(0);
  const [category, setCategory] = useState("All");
  const [savedOnly, setSavedOnly] = useState(false);
  const [reading, setReading] = useState<Story | null>(null);
  const [saved, setSaved] = useState<string[]>([]);
  const ordered = issues[issue].order.map((id) =>
    stories.find((story) => story.id === id)!,
  );
  const visible = ordered.filter(
    (story) =>
      (category === "All" || story.category === category) &&
      (!savedOnly || saved.includes(story.id)),
  );
  const toggleSaved = (id: string) =>
    setSaved((items) =>
      items.includes(id) ? items.filter((item) => item !== id) : [...items, id],
    );
  const showWall = (next: () => void) => {
    next();
    document.getElementById("monograph-top")?.scrollIntoView({
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };
  return (
    <div className="monograph-page" id="monograph-top">
      <Rail
        issue={issue}
        onIssue={setIssue}
        category={category}
        onCategory={setCategory}
        saved={saved.length}
        savedOnly={savedOnly}
        onSavedOnly={() => setSavedOnly((value) => !value)}
      />
      <main className="monograph-main">
        <div className="monograph-edition-line">
          <h1>
            {issues[issue].name} / {issues[issue].theme}
          </h1>
          <span className="monograph-small-label">
            Independent observations on art & everyday life
          </span>
        </div>
        <StoryWall
          stories={visible}
          onRead={setReading}
          saved={saved}
          onSave={toggleSaved}
          emptyMessage={
            savedOnly
              ? "Nothing saved yet. Use the bookmark on any story."
              : "No stories in this subject for this issue."
          }
        />
        <VisualEssay onRead={() => setReading(stories[0])} />
        <ExhibitionArchive />
        <PrintedIssue />
        <ClosingIndex
          onCategory={(name) =>
            showWall(() => {
              setSavedOnly(false);
              setCategory(name);
            })
          }
          onIssue={(index) => showWall(() => setIssue(index))}
        />
      </main>
      {reading && (
        <ReadingPanel
          story={reading}
          onClose={() => setReading(null)}
          saved={saved.includes(reading.id)}
          onSave={() => toggleSaved(reading.id)}
        />
      )}
    </div>
  );
}
