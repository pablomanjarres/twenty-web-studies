export type TrafficPoint = {
  hour: string;
  requests: number;
  errors: number;
  latency: number;
};
const volumes = [
  62, 56, 48, 42, 39, 55, 82, 110, 170, 145, 122, 168, 215, 187, 251, 290, 258,
  314, 280, 232, 255, 310, 276, 241,
];
export const traffic: TrafficPoint[] = volumes.map((requests, index) => ({
  hour: `${String(index).padStart(2, "0")}:00`,
  requests: requests * 100,
  errors: index === 9 || index === 19 ? 4 : 0,
  latency: [24, 26, 25, 28, 30, 27, 32, 34][index % 8],
}));
export function trafficFor(hours: number) {
  return traffic.slice(-hours);
}
export function trafficSummary(points: TrafficPoint[]) {
  const requests = points.reduce((total, point) => total + point.requests, 0);
  const errors = points.reduce((total, point) => total + point.errors, 0);
  return {
    requests,
    success: ((requests - errors) / requests) * 100,
    latency: Math.round(
      points.reduce((total, point) => total + point.latency, 0) / points.length,
    ),
    bandwidth: (requests * 18) / 1024 / 1024,
  };
}
export const requestCount = (value: number) =>
  new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
