import { Avatar } from "./Avatar";

export function Activity() {
  const updates = [
    {
      id: 3,
      name: "Sofia",
      text: "uploaded new brand concepts",
      time: "12 min ago",
    },
    {
      id: 2,
      name: "James",
      text: "completed the component library",
      time: "48 min ago",
    },
    {
      id: 1,
      name: "You",
      text: "shared the campaign moodboard",
      time: "1 hour ago",
    },
  ];
  return (
    <section className="orbit-activity" id="activity">
      <div className="orbit-section-heading">
        <h2>Team activity</h2>
        <span>Today</span>
      </div>
      {updates.map((i) => (
        <div key={i.name}>
          <Avatar id={i.id} />
          <p>
            <strong>{i.name}</strong> {i.text}
            <small>{i.time}</small>
          </p>
        </div>
      ))}
    </section>
  );
}
