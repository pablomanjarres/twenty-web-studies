import {
  LayoutGrid,
  BookOpen,
  CalendarDays,
  ChevronRight,
  Search,
  Sprout,
} from "lucide-react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
export function LearningNavigation({
  tab,
  onTab,
  query,
  onQuery,
}: {
  tab: string;
  onTab: (tab: string) => void;
  query: string;
  onQuery: (query: string) => void;
}) {
  return (
    <>
      <aside className="bv-rail">
        <span className="bv-rail-brand" aria-label="Bloom">
          <BrandLogo brand={brand} symbolOnly />
        </span>
        <nav aria-label="Learning workspace">
          {[
            { name: "My learning", icon: LayoutGrid },
            { name: "Courses", icon: BookOpen },
            { name: "Learning plan", icon: CalendarDays },
          ].map(({ name, icon: Icon }) => (
            <button
              key={name}
              aria-label={name}
              title={name}
              aria-pressed={tab === name}
              onClick={() => onTab(name)}
            >
              <Icon size={21} />
              <span>{name}</span>
            </button>
          ))}
        </nav>
        <span className="bv-rail-sprout">
          <Sprout size={21} />
          <small>
            KEEP
            <br />
            GROWING
          </small>
        </span>
      </aside>
      <header className="bv-workspace-nav">
        <div className="bv-workspace-title">
          <p>
            Workspace <ChevronRight size={11} /> <span>Personal</span>
          </p>
          <h1>{tab}</h1>
        </div>
        <label className="bv-course-search">
          <Search size={16} />
          <input
            aria-label="Search courses"
            placeholder="Search your courses"
            value={query}
            onChange={(e) => onQuery(e.target.value)}
          />
        </label>
        <button
          className="bv-nav-calendar"
          aria-label="Open learning plan"
          onClick={() => onTab("Learning plan")}
        >
          <CalendarDays size={18} />
        </button>
        <div className="bv-learner">
          <i>JL</i>
          <span>
            Jordan Lee<small>Creative learner</small>
          </span>
        </div>
      </header>
    </>
  );
}
