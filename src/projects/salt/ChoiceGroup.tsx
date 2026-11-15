import { useId, useRef, type KeyboardEvent } from "react";

type ChoiceGroupProps = {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

const step: Record<string, number> = {
  ArrowRight: 1,
  ArrowDown: 1,
  ArrowLeft: -1,
  ArrowUp: -1,
};

export function ChoiceGroup({
  label,
  options,
  value,
  onChange,
  className,
}: ChoiceGroupProps) {
  const labelId = useId();
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (event: KeyboardEvent, index: number) => {
    const delta = step[event.key];
    if (!delta) return;
    event.preventDefault();
    const next = (index + delta + options.length) % options.length;
    onChange(options[next]);
    buttons.current[next]?.focus();
  };

  return (
    <div className="sl-field">
      <span id={labelId} className="sl-label">
        {label}
      </span>
      <div
        role="radiogroup"
        aria-labelledby={labelId}
        className={`sl-choices ${className ?? ""}`}
      >
        {options.map((option, index) => {
          const checked = option === value;
          return (
            <button
              key={option}
              ref={(el) => {
                buttons.current[index] = el;
              }}
              type="button"
              role="radio"
              aria-checked={checked}
              tabIndex={checked ? 0 : -1}
              onClick={() => onChange(option)}
              onKeyDown={(event) => onKeyDown(event, index)}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
