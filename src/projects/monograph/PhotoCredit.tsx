import type { Story } from "./data";
export function PhotoCredit({ story }: { story: Story }) {
  return (
    <a
      className="monograph-credit"
      href={story.creditUrl}
      target="_blank"
      rel="noreferrer"
    >
      Photo: {story.credit} ↗
    </a>
  );
}
