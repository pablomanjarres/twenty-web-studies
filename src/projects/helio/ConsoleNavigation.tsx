import { Activity, GitBranch, Globe2 } from "lucide-react";
export type ConsoleView = "Overview" | "Deployments" | "Regions";
const views = [
  { name: "Overview", icon: Activity },
  { name: "Deployments", icon: GitBranch },
  { name: "Regions", icon: Globe2 },
] as const;
export function ConsoleNavigation({
  view,
  onView,
  releaseCount,
  variant,
}: {
  view: ConsoleView;
  onView: (view: ConsoleView) => void;
  releaseCount: number;
  variant: "sidebar" | "tabs";
}) {
  return (
    <nav
      aria-label={variant === "sidebar" ? "Project workspace" : "Console views"}
    >
      {views.map(({ name, icon: Icon }) => (
        <button
          key={name}
          aria-pressed={view === name}
          onClick={() => onView(name)}
        >
          {variant === "sidebar" && <Icon size={17} />}
          {name}
          {variant === "sidebar" && name === "Deployments" && (
            <small>{String(releaseCount).padStart(2, "0")}</small>
          )}
        </button>
      ))}
    </nav>
  );
}
