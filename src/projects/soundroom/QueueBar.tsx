import { SkipForward } from "lucide-react";
import { image, releases } from "./data";

export function QueueBar({
  release,
  onNext,
}: {
  release: (typeof releases)[number];
  onNext: () => void;
}) {
  return (
    <footer className="sr-queue">
      <div className="sr-queue-track">
        <img src={image(release.image)} alt="" />
        <div>
          <span>Next up in your room</span>
          <strong>{release.title}</strong>
          <small>{release.artist}</small>
        </div>
      </div>
      <div className="sr-queue-message">
        <span className="sr-equalizer" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
        </span>
        <span>Good records deserve your full attention.</span>
      </div>
      <button
        onClick={onNext}
        aria-label="Select the next record in your queue"
      >
        Next record <SkipForward size={18} />
      </button>
    </footer>
  );
}
