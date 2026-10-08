import { useState } from "react";
import { Plus, ArrowRight, Sparkles } from "lucide-react";
import { Sidebar } from "./components/Sidebar";
import { Topbar } from "./components/Topbar";
import { Stats } from "./components/Stats";
import { Projects } from "./components/Projects";
import { Tasks } from "./components/Tasks";
import { Calendar } from "./components/Calendar";
import { Progress } from "./components/Progress";
import { Activity } from "./components/Activity";
import "./styles.css";

export default function Page() {
  const [search, setSearch] = useState("");
  return (
    <main className="orbit">
      <Sidebar />
      <div className="orbit-workspace">
        <Topbar search={search} setSearch={setSearch} />
        <div className="orbit-main" id="overview">
          <div className="orbit-welcome">
            <div>
              <span>Thursday, October 8</span>
              <h1>A little focus. A lot of possibility.</h1>
              <p>Good morning, Alex. Let’s make some good work happen.</p>
            </div>
            <a href="#projects" className="orbit-new-project">
              <Plus size={16} />
              Explore projects
            </a>
          </div>
          <div className="orbit-content-columns">
            <div className="orbit-content-primary">
              <Stats />
              <Projects search={search} />
              <Tasks search={search} />
            </div>
            <aside className="orbit-content-secondary">
              <Calendar />
              <Progress />
              <Activity />
            </aside>
          </div>
          <div className="orbit-bottom-note">
            <span>
              <Sparkles size={12} /> A shared space for your best work.
            </span>
            <a href="#tasks">
              Keep the momentum <ArrowRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
