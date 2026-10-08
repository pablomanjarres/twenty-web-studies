import { CalendarDays, Users, Clock3, Heart } from "lucide-react";

export function Metrics() {
  const data = [
    {
      label: "Appointments today",
      number: "18",
      detail: "4 remaining this morning",
      icon: CalendarDays,
      color: "mint",
      bars: [28, 45, 35, 55, 39, 70, 59],
    },
    {
      label: "Patients this week",
      number: "124",
      detail: "+12 from last week",
      icon: Users,
      color: "peach",
      bars: [22, 35, 44, 34, 62, 52, 75],
    },
    {
      label: "Average visit time",
      number: "28",
      unit: "min",
      detail: "Right on schedule",
      icon: Clock3,
      color: "blue",
      bars: [50, 40, 56, 35, 46, 34, 40],
    },
    {
      label: "Patient satisfaction",
      number: "98",
      unit: "%",
      detail: "From 86 recent responses",
      icon: Heart,
      color: "sand",
      bars: [30, 36, 48, 58, 64, 73, 80],
    },
  ];
  return (
    <section className="pulse-metrics" aria-label="Practice overview">
      {data.map(({ label, number, unit, detail, icon: Icon, color, bars }) => (
        <article key={label} className={color}>
          <div>
            <span>{label}</span>
            <Icon size={17} />
          </div>
          <strong>
            {number}
            <small>{unit}</small>
          </strong>
          <p>{detail}</p>
          <div className="pulse-spark-bars" aria-hidden="true">
            {bars.map((h, i) => (
              <i key={i} style={{ height: h + "%" }} />
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}
