import type { ReactNode } from "react";

export function NodeReading({
  label,
  children,
  note,
}: {
  label: string;
  children?: ReactNode;
  note?: string;
}) {
  return (
    <div className="vd-reading">
      <span>{label}</span>
      {children && <strong>{children}</strong>}
      {note && <small>{note}</small>}
    </div>
  );
}
