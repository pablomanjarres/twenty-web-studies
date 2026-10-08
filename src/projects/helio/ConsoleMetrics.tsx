import { CheckCircle2, Gauge, Globe2 } from "lucide-react";
import { requestCount, trafficSummary, type TrafficPoint } from "./trafficData";
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
            <Icon size={15} />
            <span>{label}</span>
          </div>
          <strong>
            {value}
            <small>{unit}</small>
          </strong>
          <p>{detail}</p>
          <div className="hc-metric-spark" aria-hidden="true">
            {series.slice(-12).map((sample, index) => (
              <i
                key={index}
                style={{
                  height: `${Math.max(12, (sample / Math.max(...series)) * 82)}%`,
                }}
              />
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}
