import { ChevronDown, Radio } from "lucide-react";
import { requestCount, type TrafficPoint } from "./trafficData";
export function TrafficChart({
  points,
  hours,
  onHours,
  selected,
  onSelect,
}: {
  points: TrafficPoint[];
  hours: number;
  onHours: (hours: number) => void;
  selected: number;
  onSelect: (index: number) => void;
}) {
  const width = 1000,
    height = 220,
    ceiling = 40000;
  const coordinates = points.map((point, index) => ({
    x: (index / (points.length - 1)) * width,
    y: height - (point.requests / ceiling) * height,
  }));
  const line = coordinates
    .map((point, index) => `${index ? "L" : "M"}${point.x},${point.y}`)
    .join(" ");
  const index = Math.min(selected, points.length - 1),
    point = points[index];
  const active = coordinates[index];
  return (
    <section className="hc-traffic" aria-label="Hourly request traffic">
      <header>
        <div>
          <h2>Request traffic</h2>
          <span>
            <Radio size={12} />
            Sample activity · edge network
          </span>
        </div>
        <label>
          Range
          <select
            aria-label="Traffic range"
            value={hours}
            onChange={(e) => onHours(Number(e.target.value))}
          >
            <option value={24}>Last 24 hours</option>
            <option value={6}>Last 6 hours</option>
          </select>
          <ChevronDown size={12} />
        </label>
      </header>
      <div className="hc-chart-key">
        <span>
          <i />
          Requests
        </span>
        <small>Requests / hour</small>
        <strong>
          {point.hour}
          <b>{requestCount(point.requests)}</b>
          <em>{point.latency} ms average</em>
        </strong>
      </div>
      <div className="hc-chart-body">
        <div className="hc-chart-axis">
          {[40, 30, 20, 10, 0].map((n) => (
            <span key={n}>{n}k</span>
          ))}
        </div>
        <svg
          viewBox="0 0 1000 220"
          preserveAspectRatio="none"
          role="group"
          aria-label="Select an hour to inspect its requests and latency"
        >
          <defs>
            <linearGradient id="hc-request-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#3458ee" stopOpacity=".13" />
              <stop offset="1" stopColor="#3458ee" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0, 55, 110, 165, 220].map((y) => (
            <line
              key={y}
              x1="0"
              x2="1000"
              y1={y}
              y2={y}
              stroke="#e9ecf1"
              strokeDasharray="3 5"
              vectorEffect="non-scaling-stroke"
            />
          ))}
          <path d={`${line} L1000,220 L0,220 Z`} fill="url(#hc-request-fill)" />
          <path
            d={line}
            stroke="#3458ee"
            strokeWidth="2.4"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
          <line
            x1={active.x}
            x2={active.x}
            y1="0"
            y2="220"
            stroke="#91a3e8"
            strokeDasharray="3 4"
            vectorEffect="non-scaling-stroke"
          />
          {points.map((item, i) => (
            <g
              key={item.hour}
              role="button"
              aria-label={`${item.hour}: ${requestCount(item.requests)} requests, ${item.latency} milliseconds`}
              aria-pressed={i === index}
              tabIndex={0}
              onMouseEnter={() => onSelect(i)}
              onFocus={() => onSelect(i)}
              onClick={() => onSelect(i)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  onSelect(i);
                }
              }}
            >
              <rect
                x={Math.max(
                  0,
                  coordinates[i].x - width / (points.length - 1) / 2,
                )}
                y="0"
                width={
                  Math.min(
                    width,
                    coordinates[i].x + width / (points.length - 1) / 2,
                  ) -
                  Math.max(
                    0,
                    coordinates[i].x - width / (points.length - 1) / 2,
                  )
                }
                height="220"
                fill="transparent"
              />
              <circle
                cx={coordinates[i].x}
                cy={coordinates[i].y}
                r={i === index ? 5 : 0}
                fill="#fff"
                stroke="#3458ee"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
            </g>
          ))}
        </svg>
      </div>
      <div className="hc-chart-times">
        {points
          .filter(
            (_, i) =>
              i === 0 ||
              i === points.length - 1 ||
              i % (hours === 24 ? 4 : 2) === 0,
          )
          .map((item) => (
            <span key={item.hour}>{item.hour}</span>
          ))}
      </div>
    </section>
  );
}
