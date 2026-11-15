export function Meter({ value, color }: { value: number; color: string }) {
  return (
    <i className="ov3-meter" aria-hidden="true">
      <b style={{ width: `${value}%`, background: color }} />
    </i>
  );
}
