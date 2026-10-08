import { FolderOpen, CheckSquare, BarChart3, ArrowUpRight } from "lucide-react";

export function Stats() {
  const stats = [
    {
      label: "Active projects",
      value: "8",
      note: "+2 this month",
      color: "purple",
      icon: FolderOpen,
    },
    {
      label: "Tasks completed",
      value: "64",
      note: "+12 this week",
      color: "green",
      icon: CheckSquare,
    },
    {
      label: "Team productivity",
      value: "92%",
      note: "+8% from last month",
      color: "orange",
      icon: BarChart3,
    },
  ];
  return (
    <section className="orbit-stats" aria-label="Workspace statistics">
      {stats.map(({ label, value, note, color, icon: Icon }) => (
        <article key={label}>
          <div>
            <span>{label}</span>
            <Icon size={17} />
          </div>
          <strong>{value}</strong>
          <p className={color}>
            <ArrowUpRight size={13} />
            {note}
          </p>
          <div className="orbit-mini-bars" aria-hidden="true">
            {[30, 45, 36, 60, 52, 77, 69, 91].map((h, i) => (
              <i key={i} style={{ height: h + "%" }} />
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}
