import { useState } from "react";
import { Navigation, type View } from "./Navigation";
import { Header } from "./Header";
import { Roadmap } from "./Roadmap";
import { Allocation } from "./Allocation";
import { TaskLedger } from "./TaskLedger";
import { TeamPanel } from "./TeamPanel";
import { FocusCard } from "./FocusCard";
import { TaskDrawer } from "./TaskDrawer";
import { NewTask } from "./NewTask";
import { ActivityFeed } from "./ActivityFeed";
import { useTasks } from "./useTasks";
import "./styles.css";
export default function Page() {
  const work = useTasks();
  const [view, setView] = useState<View>("overview");
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [adding, setAdding] = useState(false);
  const selected = work.tasks.find((t) => t.id === work.selected);
  const shown = work.tasks.filter((t) =>
    `${t.title} ${t.kind} ${t.owner}`
      .toLowerCase()
      .includes(query.toLowerCase()),
  );
  return (
    <main className="orbit-v3">
      <Navigation
        view={view}
        onView={setView}
        activityCount={work.events.length}
      />
      <div className="ov3-main">
        <Header
          view={view}
          query={query}
          onQuery={setQuery}
          onAdd={() => setAdding(true)}
        />
        {view === "overview" ? (
          <>
            <div className="ov3-overview-top">
              <Roadmap tasks={shown} onSelect={work.setSelected} />
              <FocusCard
                task={work.tasks.find((t) => t.id === 5)!}
                onSelect={work.setSelected}
              />
            </div>
            <Allocation tasks={work.tasks} />
            <div className="ov3-overview-bottom">
              <TaskLedger
                tasks={shown}
                filter={filter}
                onFilter={setFilter}
                onSelect={work.setSelected}
              />
              <TeamPanel tasks={work.tasks} onSelect={work.setSelected} />
            </div>
          </>
        ) : view === "tasks" ? (
          <TaskLedger
            tasks={shown}
            filter={filter}
            onFilter={setFilter}
            onSelect={work.setSelected}
          />
        ) : (
          <ActivityFeed
            events={work.events}
            onOverview={() => setView("overview")}
          />
        )}
        <footer className="ov3-page-footer">
          <span>
            <i />
            Your studio, in sync.
          </span>
          <span>Maison collection · Round 02</span>
        </footer>
      </div>
      {selected && (
        <TaskDrawer
          task={selected}
          onClose={() => work.setSelected(null)}
          onStatus={(status) => work.status(selected.id, status)}
          onCheck={(index) => work.toggle(selected.id, index)}
          onNote={(note) => work.update(selected.id, { note })}
        />
      )}{" "}
      {adding && <NewTask onAdd={work.add} onClose={() => setAdding(false)} />}
    </main>
  );
}
