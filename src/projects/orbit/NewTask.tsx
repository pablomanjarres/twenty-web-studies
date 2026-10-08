import { useState } from "react";
import { X, Plus } from "lucide-react";
import { useDialog } from "../../shared/useDialog";
import { people } from "./data";
export function NewTask({
  onAdd,
  onClose,
}: {
  onAdd: (title: string, owner: string) => void;
  onClose: () => void;
}) {
  const ref = useDialog<HTMLDivElement>(onClose);
  const [title, setTitle] = useState("");
  const [owner, setOwner] = useState(people[0].name);
  return (
    <div className="ov3-drawer-backdrop" onClick={onClose}>
      <div
        className="ov3-new-task"
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label="New studio task"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <header>
          <span>A USEFUL NEXT STEP</span>
          <button onClick={onClose} aria-label="Close new task">
            <X size={21} />
          </button>
        </header>
        <h2>Make room for the work.</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!title.trim()) return;
            onAdd(title.trim(), owner);
            onClose();
          }}
        >
          <label>
            Task title
            <input
              required
              maxLength={100}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="What needs to move forward?"
            />
          </label>
          <label>
            Owner
            <select value={owner} onChange={(e) => setOwner(e.target.value)}>
              {people.map((p) => (
                <option key={p.name}>{p.name}</option>
              ))}
            </select>
          </label>
          <p>The new task joins this week’s Maison project plan.</p>
          <button type="submit">
            <Plus size={17} />
            Create task
          </button>
        </form>
      </div>
    </div>
  );
}
