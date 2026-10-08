import { MoreHorizontal } from "lucide-react";

export function Progress() {
  return (
    <section className="orbit-weekly" id="progress">
      <div className="orbit-section-heading">
        <h2>This week’s rhythm</h2>
        <MoreHorizontal size={17} />
      </div>
      <div className="orbit-ring-chart">
        <svg
          viewBox="0 0 120 120"
          aria-label="72 percent of weekly goal complete"
        >
          <circle
            cx="60"
            cy="60"
            r="46"
            fill="none"
            stroke="#eee8fa"
            strokeWidth="10"
          />
          <circle
            cx="60"
            cy="60"
            r="46"
            fill="none"
            stroke="#9673d5"
            strokeWidth="10"
            strokeDasharray="208 289"
            strokeLinecap="round"
            transform="rotate(-90 60 60)"
          />
        </svg>
        <div>
          <strong>72%</strong>
          <span>weekly goal</span>
        </div>
      </div>
      <p>
        18 of 25 tasks completed.
        <br />
        You’re making good progress.
      </p>
      <div className="orbit-chart-legend">
        <span>
          <i />
          Completed
        </span>
        <span>
          <i />
          In progress
        </span>
      </div>
    </section>
  );
}
