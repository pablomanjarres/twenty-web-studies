import { image, stories } from "./data";
import { PhotoCredit } from "./PhotoCredit";
export function VisualEssay({ onRead }: { onRead: () => void }) {
  const story = stories[0];
  return (
    <section className="monograph-visual-essay" id="monograph-essay">
      <div className="monograph-section-line">
        <span>Long look / 001</span>
        <span>The spaces between</span>
      </div>
      <div className="monograph-essay-intro">
        <h2>
          There is more
          <br />
          to a room
          <br />
          than its walls.
        </h2>
        <div>
          <p>
            Before we read a label, we read a distance. A doorway, a patch of
            floor, the quiet interval between two works: these are the unprinted
            pages of an exhibition.
          </p>
          <p>{story.paragraphs[0]}</p>
          <button onClick={onRead}>Continue the visual essay ↗</button>
        </div>
      </div>
      <figure>
        <img src={image(story.file)} alt={story.alt} loading="lazy" />
        <figcaption>
          <span>{story.caption}</span>
          <PhotoCredit story={story} />
        </figcaption>
      </figure>
    </section>
  );
}
