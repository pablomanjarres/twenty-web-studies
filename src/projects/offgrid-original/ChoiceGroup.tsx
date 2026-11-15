type ChoiceGroupProps = {
  legend: string;
  name: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

export function ChoiceGroup({
  legend,
  name,
  options,
  value,
  onChange,
}: ChoiceGroupProps) {
  return (
    <fieldset className="og-original-choices">
      <legend>{legend}</legend>
      <div>
        {options.map((option, index) => (
          <label key={option}>
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
            />
            <span>
              <b aria-hidden="true">{String.fromCharCode(65 + index)}</b>
              {option}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
