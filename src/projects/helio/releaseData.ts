export type Release = {
  id: string;
  commit: string;
  sha: string;
  branch: string;
  environment: string;
  status: "Ready" | "Error";
  duration: number;
  time: string;
};
export const initialReleases: Release[] = [
  {
    id: "dp_0481",
    commit: "Refine checkout response",
    sha: "8f30a2c",
    branch: "release/v1.4",
    environment: "Production",
    status: "Ready",
    duration: 21.4,
    time: "18 minutes ago",
  },
  {
    id: "dp_0480",
    commit: "Add checkout route",
    sha: "ce73b12",
    branch: "feature/checkout",
    environment: "Preview",
    status: "Ready",
    duration: 18.6,
    time: "42 minutes ago",
  },
  {
    id: "dp_0479",
    commit: "Update region configuration",
    sha: "36ab91f",
    branch: "release/v1.4",
    environment: "Production",
    status: "Error",
    duration: 8.1,
    time: "1 hour ago",
  },
  {
    id: "dp_0478",
    commit: "Cache product catalogue",
    sha: "adc143f",
    branch: "release/v1.4",
    environment: "Production",
    status: "Ready",
    duration: 19.8,
    time: "2 hours ago",
  },
  {
    id: "dp_0477",
    commit: "Simplify request handler",
    sha: "9ab081d",
    branch: "feature/checkout",
    environment: "Preview",
    status: "Ready",
    duration: 17.2,
    time: "3 hours ago",
  },
];
export function releasesFor(
  releases: Release[],
  environment: string,
  query = "",
) {
  const search = query.trim().toLowerCase();
  return releases.filter(
    (release) =>
      release.environment === environment &&
      `${release.id} ${release.commit} ${release.sha} ${release.branch}`
        .toLowerCase()
        .includes(search),
  );
}
