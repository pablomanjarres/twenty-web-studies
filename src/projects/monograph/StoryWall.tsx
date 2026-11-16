import { ArrowUpRight, Bookmark } from "lucide-react";
import { image, type Story } from "./data";
import { PhotoCredit } from "./PhotoCredit";
interface Props {
  stories: Story[];
  onRead: (story: Story) => void;
  saved: string[];
  onSave: (id: string) => void;
  emptyMessage: string;
}
export function StoryWall({
  stories,
  onRead,
  saved,
  onSave,
  emptyMessage,
}: Props) {
  return (
    <section className="monograph-wall" aria-label="Stories on the wall">
      {stories.length === 0 && (
        <p className="monograph-wall-empty">{emptyMessage}</p>
      )}
      {stories.map((story, index) => (
        <article
          className={`monograph-story monograph-story-${index + 1}`}
          key={story.id}
        >
          <div className="monograph-story-kicker">
            <span className="monograph-small-label">
              {story.category} / 0{index + 1}
            </span>
            <button
              aria-label={`${saved.includes(story.id) ? "Unsave" : "Save"} ${story.title}`}
              aria-pressed={saved.includes(story.id)}
              onClick={() => onSave(story.id)}
            >
              <Bookmark
                size={16}
                aria-hidden="true"
                fill={saved.includes(story.id) ? "currentColor" : "none"}
              />
            </button>
          </div>
          {/* Mouse shortcut only: the title button below is the keyboard and screen reader route. */}
          <div className="monograph-photo" onClick={() => onRead(story)}>
            <img
              src={image(story.file)}
              alt={story.alt}
              fetchPriority={index === 0 ? "high" : "auto"}
            />
          </div>
          <PhotoCredit story={story} />
          <h2 className="monograph-story-heading">
            <button
              className="monograph-story-title"
              onClick={() => onRead(story)}
            >
              <span className="monograph-underline">{story.title}</span>
              <ArrowUpRight
                size={20}
                className="monograph-arrow"
                aria-hidden="true"
              />
            </button>
          </h2>
          <p className="monograph-story-deck">{story.deck}</p>
          <span className="monograph-byline">
            From the Monograph desk · {story.paragraphs.length + 1}&nbsp;min read
          </span>
        </article>
      ))}
    </section>
  );
}
