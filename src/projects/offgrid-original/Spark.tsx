export function Spark({
  className,
  size,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      aria-hidden="true"
    >
      <path
        d="M45 0h10l6 32 27-19 7 9-27 20 32 3v11l-32 5 22 26-9 7-23-28-3 34H44l-4-32-26 20-7-9 27-21L0 55V44l32-4L12 14l9-7 23 28z"
        fill="currentColor"
      />
    </svg>
  );
}
