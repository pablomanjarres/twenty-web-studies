import { ArrowRight, BookOpen, Flame, Clock, Sparkles } from "lucide-react";
import { LearningIllustration } from "./illustrations";

export function Greeting() {
  return (
    <div className="bloom-greeting">
      <div>
        <span>Thursday, October 8</span>
        <h1>
          Good morning, Maya <span>✦</span>
        </h1>
        <p>Let’s make a little room for something new today.</p>
      </div>
      <div className="bloom-streak">
        <Flame size={18} />
        <div>
          <b>12 day streak</b>
          <small>Look at you go!</small>
        </div>
      </div>
    </div>
  );
}

export function GrowthBanner({ onContinue }: { onContinue: () => void }) {
  return (
    <section className="bloom-growth">
      <div>
        <span className="bloom-tiny">Small steps. Big things.</span>
        <h2>
          You’re growing.
          <br />
          Keep going.
        </h2>
        <p>
          You’re 2 lessons away from your weekly goal.
          <br />A little practice today goes a long way.
        </p>
        <button onClick={onContinue}>
          Continue learning <ArrowRight size={15} />
        </button>
      </div>
      <LearningIllustration />
      <div className="bloom-banner-goal">
        <svg viewBox="0 0 60 60" aria-hidden="true">
          <circle
            cx="30"
            cy="30"
            r="24"
            fill="none"
            stroke="#bbcc8d"
            strokeWidth="5"
          />
          <circle
            cx="30"
            cy="30"
            r="24"
            fill="none"
            stroke="#536b47"
            strokeWidth="5"
            strokeDasharray="101 151"
            transform="rotate(-90 30 30)"
            strokeLinecap="round"
          />
        </svg>
        <span>
          <b>4 / 6</b>
          <small>Weekly goal</small>
        </span>
      </div>
    </section>
  );
}

export function ProgressStats({ completed }: { completed: number }) {
  return (
    <div className="bloom-progress-stats">
      {[
        {
          icon: Clock,
          value: "8h 24m",
          label: "Time well spent",
          detail: "+2h this week",
        },
        {
          icon: BookOpen,
          value: String(25 + completed),
          label: "Lessons completed",
          detail: "+4 this week",
        },
        {
          icon: Sparkles,
          value: "3",
          label: "Skills in bloom",
          detail: "A little better every day",
        },
      ].map((item) => (
        <article key={item.label}>
          <div>
            <item.icon size={16} />
            <span>{item.label}</span>
          </div>
          <b>{item.value}</b>
          <small>{item.detail}</small>
        </article>
      ))}
    </div>
  );
}
