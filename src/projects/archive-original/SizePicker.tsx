export const sizes = ["XS", "S", "M", "L", "XL"];

export function SizePicker({
  value,
  onChange,
  oneSize,
}: {
  value: string;
  onChange: (size: string) => void;
  oneSize: boolean;
}) {
  if (oneSize) {
    return (
      <div className="archive-original-size">
        <span className="archive-original-meta">Size</span>
        <span className="archive-original-size-one archive-original-label">
          One size
        </span>
      </div>
    );
  }
  return (
    <fieldset className="archive-original-size">
      <legend className="archive-original-meta">Size</legend>
      <div className="archive-original-size-options">
        {sizes.map((size) => (
          <button
            key={size}
            type="button"
            className="archive-original-label"
            aria-pressed={value === size}
            onClick={() => onChange(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </fieldset>
  );
}
