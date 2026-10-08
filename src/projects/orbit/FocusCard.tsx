import { ArrowUpRight, Check } from "lucide-react";
import type { Task } from "./data";
import { AvatarGroup } from "./AvatarGroup";
export function FocusCard({
  task,
  onSelect,
}: {
  task: Task;
  onSelect: (id: number) => void;
}) {
  return (
    <section className="ov3-focus">
      <span className="ov3-focus-label">
        <i />
        THE NEXT CONVERSATION
      </span>
      <h2>
        Make room for
        <br />a point of view.
      </h2>
      <p>Bring the collection story and both opening concepts to the studio.</p>
      <div className="ov3-focus-people">
        <AvatarGroup />
        <span>Sam, Alex & Jules</span>
      </div>
      <div className="ov3-focus-time">
        <span>Studio wrap-up</span>
        <strong>
          16:00<small>15 minutes</small>
        </strong>
      </div>
      <button onClick={() => onSelect(task.id)}>
        Open review task
        <ArrowUpRight size={16} />
      </button>
      <small className="ov3-focus-state">
        <Check size={12} />
        Notes and checklist in one place.
      </small>
    </section>
  );
}
