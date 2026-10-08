import { useState } from "react";
import { ArrowRight, Disc3 } from "lucide-react";
import { releases } from "./data";
import { Sidebar, Topbar } from "./Navigation";
import { FeaturedSession } from "./FeaturedSession";
import { ReleaseCard } from "./ReleaseCard";
import { TrackList } from "./TrackList";
import { QueueBar } from "./QueueBar";
import "./styles.css";

export default function Page() {
  const [view, setView] = useState("Discover");
  const [query, setQuery] = useState("");
  const [saved, setSaved] = useState<string[]>(["Night drive"]);
  const [selected, setSelected] = useState("Between lines");
  const selectedRelease =
    releases.find((release) => release.title === selected) ?? releases[0];
  const visible = releases.filter(
    (release) =>
      (view === "Discover" || saved.includes(release.title)) &&
      `${release.title} ${release.artist}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  const toggleSave = (title: string) =>
    setSaved((current) =>
      current.includes(title)
        ? current.filter((item) => item !== title)
        : [...current, title],
    );
  return (
    <main className="soundroom-page">
      <Sidebar view={view} onView={setView} />
      <div className="sr-workspace" id="sr-main">
        <Topbar query={query} onQuery={setQuery} />
        <FeaturedSession onQueue={() => setSelected("Night drive")} />
        <section className="sr-releases" id="sr-releases">
          <div className="sr-section-title">
            <h2>
              {view === "Saved" ? "Your good ones" : "Fresh off the press"}
            </h2>
            <span>
              {view === "Saved"
                ? `${saved.length} records on your shelf`
                : "New records. New rabbit holes."}
              <ArrowRight size={17} />
            </span>
          </div>
          <div className="sr-release-grid">
            {visible.map((release) => (
              <ReleaseCard
                key={release.title}
                release={release}
                saved={saved.includes(release.title)}
                queued={selected === release.title}
                onSave={() => toggleSave(release.title)}
                onQueue={() => setSelected(release.title)}
              />
            ))}
          </div>
          {visible.length === 0 && (
            <div className="sr-empty">
              <Disc3 size={30} />
              <p>
                {query
                  ? "No records match that search. Try an artist or another title."
                  : "Your shelf is ready for a good record. Save a release from Discover."}
              </p>
            </div>
          )}
        </section>
        <TrackList selected={selected} onSelect={setSelected} />
        <QueueBar
          release={selectedRelease}
          onNext={() =>
            setSelected(
              releases[
                (releases.findIndex((release) => release.title === selected) +
                  1) %
                  releases.length
              ].title,
            )
          }
        />
      </div>
    </main>
  );
}
