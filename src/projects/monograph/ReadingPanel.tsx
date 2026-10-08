import { X, Bookmark } from "lucide-react";
import { useDialog } from "../../shared/useDialog";
import { image, type Story } from "./data";
import { PhotoCredit } from "./PhotoCredit";
interface Props {
  story: Story;
  onClose: () => void;
  saved: boolean;
  onSave: () => void;
}
export function ReadingPanel({ story, onClose, saved, onSave }: Props) {
  const surface = useDialog<HTMLDivElement>(onClose);
  return (
    <div className="monograph-reading-backdrop" onClick={onClose}>
      <div
        className="monograph-reading"
        ref={surface}
        role="dialog"
        aria-modal="true"
        aria-labelledby="monograph-reading-title"
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
      >
        <header>
          <span>Monograph / {story.category}</span>
          <button onClick={onClose} aria-label="Close article">
            <X size={20} />
          </button>
        </header>
        <img src={image(story.file)} alt={story.alt} />
        <div className="monograph-reading-copy">
          <PhotoCredit story={story} />
          <h2 id="monograph-reading-title">{story.title}</h2>
          <p className="monograph-reading-deck">{story.deck}</p>
          <span className="monograph-byline">From the Monograph desk</span>
          {story.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="monograph-reading-caption">{story.caption}</p>
          <button className="monograph-save-story" onClick={onSave}>
            <Bookmark size={16} fill={saved ? "currentColor" : "none"} />
            {saved ? "In your reading list" : "Save for a slower moment"}
          </button>
        </div>
      </div>
    </div>
  );
}
