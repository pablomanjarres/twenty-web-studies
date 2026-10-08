import {
  LayoutDashboard,
  ListTodo,
  Activity,
  ChevronDown,
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
        <ChevronDown size={15} />
      </div>
      <p className="ov3-nav-label">WORKSPACE</p>
      <nav>
        {links.map(({ id, name, icon: Icon }) => (
          <button
            key={id}
            aria-current={view === id ? "page" : undefined}
            aria-pressed={view === id}
            onClick={() => onView(id)}
          >
            <Icon size={18} />
            {name}
            {id === "activity" && <i>{activityCount}</i>}
          </button>
        ))}
      </nav>
      <div className="ov3-project-nav">
        <p className="ov3-nav-label">YOUR PROJECT</p>
        <button onClick={() => onView("overview")}>
          <i />
          Maison storefront
          <ArrowUpRight size={13} />
        </button>
        <span>Round 02 · Collection launch</span>
      </div>
      <div className="ov3-nav-foot">
        <Sparkles size={20} />
        <p>
          A little room for
          <br />
          good work.
        </p>
        <div>
          <img src={avatar(1)} alt="Sam Rivera" />
          <span>
            Sam Rivera<small>Studio member</small>
          </span>
          <ChevronDown size={14} />
        </div>
      </div>
    </aside>
  );
}
