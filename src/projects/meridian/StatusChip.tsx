export function StatusChip({ status }: { status: string }) {
  return (
    <span className="md-status-chip" data-status={status}>
      <i />
      {status}
    </span>
  );
}
