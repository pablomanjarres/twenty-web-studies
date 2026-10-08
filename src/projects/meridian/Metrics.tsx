import { ArrowUpRight, Box } from "lucide-react";

export function StatCard({
  label,
  value,
  change,
  points,
  Icon,
}: {
  label: string;
  value: string;
  change: string;
  points: string;
  Icon: typeof Box;
}) {
  return (
    <article className="md-stat">
      <div className="md-stat-label">
        <span>{label}</span>
        <Icon size={16} />
      </div>
      <div className="md-stat-value">
        <strong>{value}</strong>
        <svg viewBox="0 0 100 40" aria-hidden="true">
          <polyline
            points={points}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>
      <span className="md-stat-change">
        <ArrowUpRight size={12} />
        {change}
        <small>vs. last week</small>
      </span>
    </article>
  );
}

export function NetworkPerformance() {
  return (
    <section className="md-performance">
      <div className="md-performance-number">
        <svg
          viewBox="0 0 100 100"
          role="img"
          aria-label="On-time arrival 96.8 percent"
        >
          <circle
            cx="50"
            cy="50"
            r="38"
            fill="none"
            stroke="#2F4254"
            strokeWidth="6"
          />
          <circle
            cx="50"
            cy="50"
            r="38"
            fill="none"
            stroke="#9DE2AC"
            strokeWidth="6"
            strokeDasharray="231 239"
            transform="rotate(-90 50 50)"
          />
          <text
            x="50"
            y="51"
            fill="#EAF0F6"
            fontFamily="Space Grotesk"
            fontSize="20"
            textAnchor="middle"
          >
            96.8
            <tspan x="50" dy="15" fontSize="7" fill="#8FA4B5">
              ON TIME
            </tspan>
          </text>
        </svg>
      </div>
      <div>
        <span className="md-sidebar-label">Network performance</span>
        <h3>A steady week.</h3>
        <p>
          Arrival reliability across
          <br />
          completed shipments.
        </p>
      </div>
      <div className="md-performance-bars">
        <span>
          Mon
          <i style={{ height: 24 }} />
        </span>
        <span>
          Tue
          <i style={{ height: 36 }} />
        </span>
        <span>
          Wed
          <i style={{ height: 29 }} />
        </span>
        <span>
          Thu
          <i style={{ height: 43 }} />
        </span>
        <span>
          Fri
          <i style={{ height: 34 }} />
        </span>
      </div>
    </section>
  );
}
