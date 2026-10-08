import { CheckCircle2, ArrowUpRight } from "lucide-react";
export function ActivityFeed({
  events,
  onOverview,
}: {
  events: string[];
  onOverview: () => void;
}) {
  return (
    <section className="ov3-feed">
      <div className="ov3-section-heading">
        <h2>A shared view of the work</h2>
        <button onClick={onOverview}>
          Open the project
          <ArrowUpRight size={15} />
        </button>
      </div>
      {events.map((event, i) => (
        <article key={`${i}-${event}`}>
          <CheckCircle2 size={19} />
          <div>
            <p>{event}</p>
            <span>
              {i === 0 ? "Latest update" : "Studio activity"} · Maison
              storefront
            </span>
          </div>
        </article>
      ))}
    </section>
  );
}
