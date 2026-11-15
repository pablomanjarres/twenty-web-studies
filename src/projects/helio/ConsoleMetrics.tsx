import { CheckCircle2, Gauge, Globe2 } from "lucide-react";
import { requestCount, trafficSummary, type TrafficPoint } from "./trafficData";
// Scale the last twelve samples between their own low and high so a
// steady series such as success rate still shows its variation.
function sparkHeights(series: number[]) {
  const recent = series.slice(-12);
  const low = Math.min(...recent),
    span = Math.max(...recent) - low || 1;
  return recent.map((sample) => 20 + ((sample - low) / span) * 80);
}
export function ConsoleMetrics({ points }: { points: TrafficPoint[] }) {
  const summary = trafficSummary(points);
  const metrics = [
    {
      label: "Total requests",
      value: requestCount(summary.requests),
      detail: "Within selected range",
      icon: Globe2,
      series: points.map((point) => point.requests),
    },
    {
      label: "Successful requests",
      value: `${summary.success.toFixed(3)}%`,
      detail: "Responses without error",
      icon: CheckCircle2,
      series: points.map(
        (point) => ((point.requests - point.errors) / point.requests) * 100,
      ),
    },
    {
      label: "Average latency",
      value: `${summary.latency}`,
      unit: "ms",
      detail: "Across served requests",
      icon: Gauge,
      series: points.map((point) => point.latency),
    },
  ];
  return (
    <section className="hc-metrics" aria-label="Traffic summary">
      {metrics.map(({ label, value, unit, detail, icon: Icon, series }) => (
        <article key={label}>
          <div>
            <Icon size={16} />
            <span>{label}</span>
          </div>
          <div className="hc-metric-value">
            <strong>
              {value}
              {unit && <small>{unit}</small>}
            </strong>
            <span className="hc-metric-spark" aria-hidden="true">
              {sparkHeights(series).map((height, index) => (
                <i key={index} style={{ height: `${height}%` }} />
              ))}
            </span>
          </div>
          <p>{detail}</p>
        </article>
      ))}
    </section>
  );
}
