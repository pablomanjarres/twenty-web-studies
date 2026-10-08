import { ArrowUpRight, Bookmark } from "lucide-react";
import { image, type Story } from "./data";
import { PhotoCredit } from "./PhotoCredit";
interface Props {
  stories: Story[];
  onRead: (story: Story) => void;
  saved: string[];
  onSave: (id: string) => void;
}
export function StoryWall({ stories, onRead, saved, onSave }: Props) {
  return (
    <section className="monograph-wall" aria-label="Stories on the wall">
      {stories.map((story, index) => (
        <article
          className={`monograph-story monograph-story-${index + 1}`}
          key={story.id}
        >
          <div className="monograph-story-kicker">
            <span>
              {story.category} / 0{index + 1}
            </span>
            <button
              aria-label={`${saved.includes(story.id) ? "Unsave" : "Save"} ${story.title}`}
              aria-pressed={saved.includes(story.id)}
              onClick={() => onSave(story.id)}
            >
              <Bookmark
                size={14}
                fill={saved.includes(story.id) ? "currentColor" : "none"}
              />
            </button>
          </div>
          <button
            className="monograph-photo-button"
            onClick={() => onRead(story)}
            aria-label={`Read ${story.title}`}
          >
            <img
              src={image(story.file)}
              alt={story.alt}
              fetchPriority={index === 0 ? "high" : "auto"}
            />
          </button>
          <PhotoCredit story={story} />
          <button
            className="monograph-story-title"
            onClick={() => onRead(story)}
          >
            <h2>{story.title}</h2>
            <ArrowUpRight size={19} />
          </button>
          <p>{story.deck}</p>
          <span className="monograph-byline">
            From the Monograph desk · {story.paragraphs.length + 1} min read
          </span>
        </article>
      ))}
    </section>
  );
}
