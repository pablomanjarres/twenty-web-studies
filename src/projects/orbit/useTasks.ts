import { useState } from "react";
import { people, type Task, type TaskStatus } from "./data";
import { initialTasks } from "./taskFixtures";
export function useTasks() {
  const [tasks, setTasks] = useState(initialTasks);
  const [selected, setSelected] = useState<number | null>(null);
  const [events, setEvents] = useState([
    "Jules finished the material & care library.",
    "Alex shared the research synthesis.",
  ]);
  function update(id: number, change: Partial<Task>) {
    setTasks((current) =>
      current.map((t) => (t.id === id ? { ...t, ...change } : t)),
    );
  }
  function status(id: number, value: TaskStatus) {
    update(id, {
      status: value,
      ...(value === "Done"
        ? { checked: tasks.find((t) => t.id === id)!.checks.map((_, i) => i) }
        : {}),
    });
    setEvents((e) =>
      [
        `${tasks.find((t) => t.id === id)!.title} moved to ${value.toLowerCase()}.`,
        ...e,
      ].slice(0, 8),
    );
  }
  function toggle(id: number, index: number) {
    setTasks((current) =>
      current.map((t) => {
        if (t.id !== id) return t;
        const checked = t.checked.includes(index)
          ? t.checked.filter((i) => i !== index)
          : [...t.checked, index];
        return {
          ...t,
          checked,
          status:
            checked.length === t.checks.length
              ? "Done"
              : t.status === "Done"
                ? "In progress"
                : t.status,
        };
      }),
    );
  }
  function add(title: string, owner: string) {
    const person = people.find((p) => p.name === owner)!;
    const id = Math.max(...tasks.map((t) => t.id)) + 1;
    const task: Task = {
      id,
      title,
      owner,
      avatar: person.avatar,
      kind: person.role,
      status: "To do",
      due: "Fri, 9 Oct",
      start: 4,
      days: 1,
      hours: 2,
      description: "A new piece of work for the Maison collection.",
      checks: ["Prepare a first pass", "Share with the studio"],
      checked: [],
      note: "",
    };
    setTasks((t) => [...t, task]);
    setSelected(id);
    setEvents((e) =>
      [`${person.name} added ${title.toLowerCase()}.`, ...e].slice(0, 8),
    );
  }
  return { tasks, selected, setSelected, events, update, status, toggle, add };
}
