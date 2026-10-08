import { ArrowUpRight, Award } from "lucide-react";
import { asset, lessons } from "./data";
export function LearningWelcome({
  completed,
  onContinue,
  onAchievement,
}: {
  completed: number[];
  onContinue: () => void;
  onAchievement: () => void;
}) {
  return (
    <div className="bv-welcome-row">
      <article className="bv-learning-invitation">
        <div>
          <span>YOUR NEXT GOOD IDEA STARTS HERE</span>
          <h2>
            A little practice.
            <br />A world of possibility.
          </h2>
          <p>Make room for a new creative habit.</p>
          <button onClick={onContinue}>
            {completed.length === lessons.length
              ? "Revisit your lessons"
              : "Continue learning"}
            <ArrowUpRight size={16} />
          </button>
        </div>
        <img
          src={asset}
          alt="Colorful illustrated islands with creative learning tools"
        />
      </article>
      <button className="bv-certificate" onClick={onAchievement}>
        <i>
          <Award size={27} />
        </i>
        <strong>
          {completed.length === lessons.length
            ? "You did it!"
            : "Your next milestone"}
        </strong>
        <span>
          Complete both courses.
          <br /> Celebrate a new foundation.
        </span>
        <small>
          {completed.length} / {lessons.length} lessons{" "}
          <ArrowUpRight size={14} />
        </small>
      </button>
    </div>
  );
}
