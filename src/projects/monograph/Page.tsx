import { useState } from "react";
import { stories, issues, type Story } from "./data";
import { Rail } from "./Rail";
import { StoryWall } from "./StoryWall";
import { ReadingPanel } from "./ReadingPanel";
import { VisualEssay } from "./VisualEssay";
import { ExhibitionArchive } from "./ExhibitionArchive";
import { PrintedIssue } from "./PrintedIssue";
import "./styles.css";
export default function Page() {
  const [issue, setIssue] = useState(0);
  const [category, setCategory] = useState("All");
  const [reading, setReading] = useState<Story | null>(null);
  const [saved, setSaved] = useState<string[]>([]);
  const ordered = issues[issue].order.map((id) =>
    stories.find((story) => story.id === id)!,
  );
  const visible = ordered.filter(
    (story) => category === "All" || story.category === category,
  );
  const toggleSaved = (id: string) =>
    setSaved((items) =>
      items.includes(id) ? items.filter((item) => item !== id) : [...items, id],
    );
  return (
    <div className="monograph-page" id="monograph-top">
      <Rail
        issue={issue}
        onIssue={setIssue}
        category={category}
        onCategory={setCategory}
        saved={saved.length}
      />
      <main className="monograph-main">
        <div className="monograph-edition-line">
          <span>Independent observations on art & everyday life</span>
          <h1>
            {issues[issue].name} / {issues[issue].theme}
          </h1>
        </div>
        <StoryWall
          stories={visible}
          onRead={setReading}
          saved={saved}
          onSave={toggleSaved}
        />
        <VisualEssay onRead={() => setReading(stories[0])} />
        <ExhibitionArchive />
        <PrintedIssue />
        <footer className="monograph-footer">
          <span>Monograph — A different way of seeing.</span>
          <a href="#monograph-top">Back to the wall ↑</a>
        </footer>
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
