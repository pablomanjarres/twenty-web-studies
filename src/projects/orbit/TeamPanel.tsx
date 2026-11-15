import { ArrowUpRight } from "lucide-react";
import { avatar, people, meetings, stageColors, type Task } from "./data";
import { AvatarGroup } from "./AvatarGroup";
import { Meter } from "./Meter";
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
          <span className="ov3-caps">This week</span>
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
                  {person.role} · {owned.length} tasks
                </small>
                <span className="ov3-person-load">
                  <Meter
                    value={(hours / max) * 100}
                    color={stageColors[person.role]}
                  />
                  <em>{hours} h</em>
                </span>
              </span>
            </div>
          );
        })}
      </section>
      <section className="ov3-meetings">
        <div className="ov3-section-heading">
          <h2>Today, together</h2>
          <span className="ov3-caps">8 Oct</span>
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
            <ArrowUpRight size={16} aria-hidden="true" />
          </button>
        ))}
      </section>
    </div>
  );
}
