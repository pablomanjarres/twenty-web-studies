import { Users, Stethoscope } from "lucide-react";

export function Team() {
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Primary care",
      initials: "SC",
      color: "#e5f2eb",
    },
    {
      name: "Dr. Marcus Reed",
      role: "Family medicine",
      initials: "MR",
      color: "#fae5d8",
    },
    {
      name: "Nina Patel",
      role: "Care coordinator",
      initials: "NP",
      color: "#e7eaf1",
    },
  ];
  return (
    <section className="pulse-team" id="team">
      <div className="pulse-section-heading">
        <h2>Your care team</h2>
        <Users size={16} />
      </div>
      {team.map((i) => (
        <div key={i.name}>
          <span style={{ background: i.color }}>{i.initials}</span>
          <p>
            {i.name}
            <small>{i.role}</small>
          </p>
          <i />
        </div>
      ))}
      <div className="pulse-team-note">
        <Stethoscope size={20} />
        <p>
          Good care is a team effort.
          <small>Everyone has a clear view of the day.</small>
        </p>
      </div>
    </section>
  );
}
