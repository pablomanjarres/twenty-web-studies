import {
  LayoutDashboard,
  ListTodo,
  Activity,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
import { avatar } from "./data";
export type View = "overview" | "tasks" | "activity";
export function Navigation({
  view,
  onView,
  activityCount,
}: {
  view: View;
  onView: (view: View) => void;
  activityCount: number;
}) {
  const links = [
    { id: "overview", name: "Overview", icon: LayoutDashboard },
    { id: "tasks", name: "My tasks", icon: ListTodo },
    { id: "activity", name: "Activity", icon: Activity },
  ] as const;
  return (
    <aside className="ov3-navigation">
      <BrandLogo brand={brand} />
      <div className="ov3-workspace">
        <span className="ov3-workspace-icon">M</span>
        <span>
          Maison studio<small>Creative workspace</small>
        </span>
      </div>
      <p className="ov3-nav-label ov3-caps">Workspace</p>
      <nav>
        {links.map(({ id, name, icon: Icon }) => (
          <button
            key={id}
            aria-current={view === id ? "page" : undefined}
            aria-pressed={view === id}
            onClick={() => onView(id)}
          >
            <Icon size={18} aria-hidden="true" />
            <span className="ov3-nav-text">{name}</span>
            {id === "activity" && <i>{activityCount}</i>}
          </button>
        ))}
      </nav>
      <div className="ov3-project-nav">
        <p className="ov3-nav-label ov3-caps">Your project</p>
        <button onClick={() => onView("overview")}>
          <i />
          Maison storefront
          <ArrowUpRight size={14} aria-hidden="true" />
        </button>
        <span>Round 02 · Collection launch</span>
      </div>
      <div className="ov3-nav-foot">
        <p>
          <Sparkles size={16} aria-hidden="true" />A little room for good work.
        </p>
        <div>
          <img src={avatar(1)} alt="Sam Rivera" />
          <span>
            Sam Rivera<small>Studio member</small>
          </span>
        </div>
      </div>
    </aside>
  );
}
