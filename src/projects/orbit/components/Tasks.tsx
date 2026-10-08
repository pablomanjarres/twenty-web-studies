import { useState } from "react";
import { Circle, Check } from "lucide-react";
import { Avatar } from "./Avatar";
import { initialTasks } from "../data";

export function Tasks({ search }: { search: string }) {
  const [tasks, setTasks] = useState(initialTasks);
  const visibleTasks = tasks.filter((task) =>
    `${task.name} ${task.project}`.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <section className="orbit-tasks" id="tasks">
      <div className="orbit-section-heading">
        <h2>Your next steps</h2>
        <span>{tasks.filter((i) => !i.done).length} open tasks</span>
      </div>
      <div className="orbit-task-table">
        <div className="orbit-table-labels">
          <span>Task name</span>
          <span>Due date</span>
          <span>Priority</span>
          <span>Assignee</span>
        </div>
        {visibleTasks.map((i) => (
          <div
            className={`orbit-task-row ${i.done ? "is-done" : ""}`}
            key={i.id}
          >
            <div>
              <button
                aria-label={`${i.done ? "Reopen" : "Complete"} ${i.name}`}
                aria-pressed={i.done}
                onClick={() =>
                  setTasks(
                    tasks.map((t) =>
                      t.id === i.id ? { ...t, done: !t.done } : t,
                    ),
                  )
                }
              >
                {i.done ? <Check size={12} /> : <Circle size={16} />}
              </button>
              <p>
                {i.name}
                <small>{i.project}</small>
              </p>
            </div>
            <span>{i.date}</span>
            <span className={`orbit-priority ${i.priority.toLowerCase()}`}>
              <i />
              {i.priority}
            </span>
            <Avatar id={(i.id % 3) + 1} />
          </div>
        ))}
        {visibleTasks.length === 0 && (
          <p className="orbit-empty">
            No tasks match your search. Try another project or task name.
          </p>
        )}
      </div>
    </section>
  );
}
