import { ArrowUpRight } from "lucide-react";
import { avatar, people, meetings, type Task } from "./data";
import { AvatarGroup } from "./AvatarGroup";
export function TeamPanel({
  tasks,
  onSelect,
}: {
  tasks: Task[];
  onSelect: (id: number) => void;
}) {
  const max = Math.max(
    ...people.map((p) =>
      tasks
        .filter((t) => t.owner === p.name)
        .reduce((sum, t) => sum + t.hours, 0),
    ),
    1,
  );
  return (
    <div className="ov3-team-column">
      <section className="ov3-team-load">
        <div className="ov3-section-heading">
          <h2>Team workload</h2>
          <span>THIS WEEK</span>
        </div>
        {people.map((person) => {
          const owned = tasks.filter((t) => t.owner === person.name);
          const hours = owned.reduce((sum, t) => sum + t.hours, 0);
          return (
            <div className="ov3-person" key={person.name}>
              <img src={avatar(person.avatar)} alt="" />
              <span>
                <strong>{person.name}</strong>
                <small>
                  {owned.length} tasks · {hours} planned hours
                </small>
                <i>
                  <b style={{ width: `${(hours / max) * 100}%` }} />
                </i>
              </span>
            </div>
          );
        })}
      </section>
      <section className="ov3-meetings">
        <div className="ov3-section-heading">
          <h2>Today, together</h2>
          <span>08 OCT</span>
        </div>
        {meetings.map((m) => (
          <button key={m.time} onClick={() => onSelect(m.task)}>
            <time>{m.time}</time>
            <span>
              <strong>{m.title}</strong>
              <small>
                {m.duration}
                <AvatarGroup ids={m.people} />
              </small>
            </span>
            <ArrowUpRight size={14} />
          </button>
        ))}
      </section>
    </div>
  );
}
