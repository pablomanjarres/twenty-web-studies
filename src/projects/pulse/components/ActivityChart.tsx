import { ChevronDown, ArrowUpRight } from "lucide-react";

export function ActivityChart() {
  return (
    <section className="pulse-activity" id="activity">
      <div className="pulse-section-heading">
        <div>
          <h2>A steady week in care</h2>
          <span>Patient visits across your practice</span>
        </div>
        <span className="pulse-chart-period">
          This week <ChevronDown size={12} />
        </span>
      </div>
      <div className="pulse-chart">
        <div className="pulse-chart-labels">
          <span>40</span>
          <span>30</span>
          <span>20</span>
          <span>10</span>
          <span>0</span>
        </div>
        <div className="pulse-chart-main">
          <svg
            viewBox="0 0 600 170"
            preserveAspectRatio="none"
            role="img"
            aria-label="Patient visits rise from Monday to Friday"
          >
            <path
              d="M0 10H600M0 50H600M0 90H600M0 130H600M0 169H600"
              stroke="#edf1ed"
              strokeWidth="1"
            />
            <path
              d="M0 125C40 125 45 84 100 84S160 110 200 105 250 55 300 58 350 87 400 75 450 35 500 30 550 54 600 42V170H0Z"
              fill="#e5f2eb"
            />
            <path
              d="M0 125C40 125 45 84 100 84S160 110 200 105 250 55 300 58 350 87 400 75 450 35 500 30 550 54 600 42"
              stroke="#438a7b"
              strokeWidth="3"
              fill="none"
            />
            <path d="M300 8V170" stroke="#a7c9bb" strokeDasharray="3 4" />
            <circle
              cx="300"
              cy="58"
              r="5"
              fill="#176b63"
              stroke="white"
              strokeWidth="3"
            />
          </svg>
          <div className="pulse-chart-tooltip">
            <strong>28 visits</strong>
            <span>Thursday, Oct 8</span>
          </div>
          <div className="pulse-chart-days">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((i) => (
              <span key={i}>{i}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="pulse-chart-bottom">
        <span>
          <i />
          Patient visits
        </span>
        <p>
          <ArrowUpRight size={13} /> 12 more visits than last week
        </p>
      </div>
    </section>
  );
}
